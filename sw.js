/* KiHelp service worker: makes the app installable and fast, never touches Supabase data */
var VER = 'kihelp-20';
var CORE = ['./', './index.html', './style.css?v=19', './app.js?v=19', './logo-320.png', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VER).then(function (c) {
      return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VER; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  /* Live data (accounts, posts, files in Supabase) always goes straight to the network */
  if (/supabase\.co$/.test(url.hostname)) return;

  /* Opening the app: newest page first, saved copy when offline */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (r) {
        var copy = r.clone();
        caches.open(VER).then(function (c) { c.put('./index.html', copy); });
        return r;
      }).catch(function () {
        return caches.match('./index.html').then(function (r) { return r || caches.match('./'); });
      })
    );
    return;
  }

  /* Our own files (versioned, so a saved copy is always the right one) */
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then(function (hit) {
        return hit || fetch(req).then(function (r) {
          if (r && r.ok) { var copy = r.clone(); caches.open(VER).then(function (c) { c.put(req, copy); }); }
          return r;
        });
      })
    );
    return;
  }

  /* Libraries and fonts: show the saved copy, refresh it quietly in the background */
  if (/(jsdelivr\.net|unpkg\.com|googleapis\.com|gstatic\.com)$/.test(url.hostname)) {
    e.respondWith(
      caches.match(req).then(function (hit) {
        var net = fetch(req).then(function (r) {
          if (r && (r.ok || r.type === 'opaque')) { var copy = r.clone(); caches.open(VER).then(function (c) { c.put(req, copy); }); }
          return r;
        }).catch(function () { return hit; });
        return hit || net;
      })
    );
  }
});

/* Notifications: show them when KiHelp is closed or hidden */
self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { title: 'kihelp', body: e.data ? e.data.text() : '' }; }
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      var open = list.some(function (c) { return c.visibilityState === 'visible'; });
      if (open) return;
      var call = d.kind === 'call';
      return self.registration.showNotification(d.title || 'kihelp', {
        body: d.body || '',
        icon: 'icon-192.png',
        badge: 'icon-32.png',
        tag: call ? 'kihelp-call' : (d.kind || 'kihelp'),
        renotify: true,
        requireInteraction: call,
        vibrate: call ? [300, 150, 300, 150, 300] : [100],
        data: { url: d.url || '#' }
      });
    })
  );
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var target = (e.notification.data && e.notification.data.url) || '#';
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        if ('focus' in list[i]) { list[i].postMessage({ type: 'kihelp-open', url: target }); return list[i].focus(); }
      }
      return self.clients.openWindow('./' + target);
    })
  );
});