const SUPA_URL = 'https://kpaysjsncmpxskahqbab.supabase.co';
const SUPA_KEY = 'sb_publishable_8pyFTVaVuxsmKMaFJeiW7A_66r2XW6O';
const sb = window.supabase ? window.supabase.createClient(SUPA_URL, SUPA_KEY) : null;

const $ = s => document.querySelector(s);
const ic = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const I = {
  home: ic('<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>'),
  chat: ic('<path d="M4 5h16v11H9l-5 4z"/>'),
  shop: ic('<path d="M4 8h16l-1 12H5zM8 8V6a4 4 0 0 1 8 0v2"/>'),
  bell: ic('<path d="M6 17v-6a6 6 0 0 1 12 0v6l2 2H4zM10 21h4"/>'),
  user: ic('<circle cx="12" cy="8" r="4"/><path d="M4 21c1-6 15-6 16 0"/>'),
  heart: ic('<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>'),
  cmt: ic('<path d="M4 5h16v11H9l-5 4z"/>'),
  share: ic('<path d="M14 4l7 7-7 7v-4.2c-5.5 0-8.6 1.4-11 5.2.6-6.2 4-9.9 11-10.8z"/>'),
  plus: ic('<path d="M12 5v14M5 12h14"/>'),
  back: ic('<path d="M15 5l-7 7 7 7"/>'),
  send: ic('<path d="M4 12l16-8-6 16-3-7z"/>'),
  save: ic('<path d="M7 4h10v17l-5-4-5 4z"/>'),
  film: ic('<rect x="4" y="5" width="16" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/>'),
  volume: ic('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>'),
  mute: ic('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l4 6M21 9l-4 6"/>'),
  search: ic('<circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/>'),
  sliders: ic('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
  x: ic('<path d="M6 6l12 12M18 6L6 18"/>'),
  download: ic('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'),
  expand: ic('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'),
  globe: ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
  lock: ic('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
  users: ic('<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 3-5 6-5s6 1.5 6 5M16 5.5a3 3 0 0 1 0 5M18 15c2 .6 3 2 3 5"/>'),
  heartfill: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8.5-5.4-8.5-11.5A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.5 2.7C20.5 15.6 12 21 12 21z"/></svg>',
  more: ic('<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>')
};
const OPT = { fixed: 'Fixed price', negotiable: 'Negotiable', auction: 'Auction', bulk: 'Bulk discount' };
const CATS = ['All', 'Fashion', 'Phones', 'Home', 'Food', 'Electronics', 'Other'];
const CURS = ['ETB', 'USD', 'EUR', 'GBP', 'KES', 'NGN', 'ZAR', 'AED', 'INR', 'CNY'];
const fmt = (n, c) => Number(n).toLocaleString('en-US') + ' ' + ((c || 'ETB') === 'ETB' ? 'Birr' : c);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const hue = s => { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) % 360; return h; };
const ago = iso => { const m = Math.floor((Date.now() - new Date(iso)) / 60000); if (m < 1) return 'now'; if (m < 60) return m + 'm'; const h = Math.floor(m / 60); if (h < 24) return h + 'h'; return Math.floor(h / 24) + 'd'; };

const safeUrl = u => (typeof u === 'string' && u.startsWith(SUPA_URL + '/storage/')) ? u : null;

const S = {
  tab: 'home', cat: 'All', opt: 'all', q: '', open: new Set(),
  mode: 'system', accent: 'auto', saver: false, lang: 'en', loaded: new Set(),
  user: null, profile: null, pf: {}, posts: [], products: [], saved: new Set(), threads: [], notes: [],
  me: { posts: 0, following: 0, followers: 0, videos: 0 }, videos: [], myVideos: [], muted: true, viewed: new Set(), focusVideo: null, savedPosts: new Set(), prof: null, profPosts: [], savedList: [], myPosts: [], reqs: [], postVis: 'public', allowDl: false, drafts: [], viewer: null, onePost: [], focusPost: null, share: null, following: new Set(), fl: null, pc: { phone: null, allow_phone_search: false, allow_email_search: false }, ready: {}, authMode: 'login', openThread: null, sellOpt: 'fixed'
};
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
try { Object.assign(S, JSON.parse(store.get('kihelp.settings') || '{}')); } catch (e) {}
const saveSettings = () => store.set('kihelp.settings', JSON.stringify({ mode: S.mode, accent: S.accent, saver: S.saver, lang: S.lang }));

const LANGS = {
  en: { name: 'English', home: 'Home', chat: 'Chat', videos: 'Videos', video: 'Video', market: 'Market', alerts: 'Alerts', profile: 'Profile', social: 'Social', chats: 'Chats', marketplace: 'Marketplace', post: 'Post', sell: 'Sell', settings: 'Settings', appearance: 'Appearance', mode: 'Mode', system: 'System', light: 'Light', dark: 'Dark', accent: 'Accent color', auto: 'Auto', data: 'Data and storage', saver: 'Data saver', saverDesc: 'Photos and videos load only when you tap them', storage: 'Storage used', clear: 'Clear cache', cleared: 'Cache cleared', language: 'Language', search: 'Search items', mine: 'Your listings', account: 'Account', logout: 'Log out' },
  am: { name: 'አማርኛ', home: 'መነሻ', chat: 'ውይይት', videos: 'ቪዲዮዎች', video: 'ቪዲዮ', market: 'ገበያ', alerts: 'ማሳወቂያ', profile: 'መገለጫ', social: 'ማኅበራዊ', chats: 'ውይይቶች', marketplace: 'ገበያ', post: 'ለጥፍ', sell: 'ሽጥ', settings: 'ቅንብሮች', appearance: 'ገጽታ', mode: 'ሁነታ', system: 'የስልክ ቅንብር', light: 'ብሩህ', dark: 'ጨለማ', accent: 'ቀለም', auto: 'ራስ-ሰር', data: 'ዳታ እና ማከማቻ', saver: 'ዳታ ቆጣቢ', saverDesc: 'ፎቶና ቪዲዮ የሚጫነው ሲነኩት ብቻ ነው', storage: 'ጥቅም ላይ የዋለ ማከማቻ', clear: 'ካሽ አጽዳ', cleared: 'ካሽ ጸድቷል', language: 'ቋንቋ', search: 'ዕቃዎችን ፈልግ', mine: 'የእርስዎ ዕቃዎች', account: 'መለያ', logout: 'ውጣ' },
  ar: { name: 'العربية', home: 'الرئيسية', chat: 'الدردشة', videos: 'الفيديوهات', video: 'فيديو', market: 'السوق', alerts: 'الإشعارات', profile: 'حسابي', social: 'اجتماعي', chats: 'المحادثات', marketplace: 'السوق', post: 'نشر', sell: 'بيع', settings: 'الإعدادات', appearance: 'المظهر', mode: 'الوضع', system: 'النظام', light: 'فاتح', dark: 'داكن', accent: 'لون التمييز', auto: 'تلقائي', data: 'البيانات والتخزين', saver: 'توفير البيانات', saverDesc: 'تُحمَّل الصور والفيديوهات عند الضغط عليها فقط', storage: 'التخزين المستخدم', clear: 'مسح الذاكرة المؤقتة', cleared: 'تم مسح الذاكرة المؤقتة', language: 'اللغة', search: 'ابحث عن منتجات', mine: 'منتجاتك', account: 'الحساب', logout: 'تسجيل الخروج' },
  fr: { name: 'Français', home: 'Accueil', chat: 'Discussions', videos: 'Vidéos', video: 'Vidéo', market: 'Marché', alerts: 'Alertes', profile: 'Profil', social: 'Social', chats: 'Discussions', marketplace: 'Marché', post: 'Publier', sell: 'Vendre', settings: 'Réglages', appearance: 'Apparence', mode: 'Mode', system: 'Système', light: 'Clair', dark: 'Sombre', accent: "Couleur d'accent", auto: 'Auto', data: 'Données et stockage', saver: 'Économiseur de données', saverDesc: 'Les photos et vidéos ne se chargent que si vous les touchez', storage: 'Stockage utilisé', clear: 'Vider le cache', cleared: 'Cache vidé', language: 'Langue', search: 'Rechercher des articles', mine: 'Vos annonces', account: 'Compte', logout: 'Se déconnecter' },
  es: { name: 'Español', home: 'Inicio', chat: 'Chat', videos: 'Videos', video: 'Video', market: 'Mercado', alerts: 'Avisos', profile: 'Perfil', social: 'Social', chats: 'Chats', marketplace: 'Mercado', post: 'Publicar', sell: 'Vender', settings: 'Ajustes', appearance: 'Apariencia', mode: 'Modo', system: 'Sistema', light: 'Claro', dark: 'Oscuro', accent: 'Color de acento', auto: 'Auto', data: 'Datos y almacenamiento', saver: 'Ahorro de datos', saverDesc: 'Las fotos y los videos se cargan solo al tocarlos', storage: 'Almacenamiento usado', clear: 'Borrar caché', cleared: 'Caché borrada', language: 'Idioma', search: 'Buscar artículos', mine: 'Tus artículos', account: 'Cuenta', logout: 'Cerrar sesión' },
  sw: { name: 'Kiswahili', home: 'Mwanzo', chat: 'Gumzo', videos: 'Video', video: 'Video', market: 'Soko', alerts: 'Arifa', profile: 'Wasifu', social: 'Jamii', chats: 'Mazungumzo', marketplace: 'Soko', post: 'Chapisha', sell: 'Uza', settings: 'Mipangilio', appearance: 'Mwonekano', mode: 'Hali', system: 'Mfumo', light: 'Mwanga', dark: 'Giza', accent: 'Rangi kuu', auto: 'Otomatiki', data: 'Data na hifadhi', saver: 'Kiokoa data', saverDesc: 'Picha na video hupakiwa unapozigusa tu', storage: 'Hifadhi inayotumika', clear: 'Futa kache', cleared: 'Kache imefutwa', language: 'Lugha', search: 'Tafuta bidhaa', mine: 'Bidhaa zako', account: 'Akaunti', logout: 'Toka' }
};

const tr = k => (LANGS[S.lang] && LANGS[S.lang][k]) || LANGS.en[k] || k;

const nameOf = id => (S.pf[id] && (S.pf[id].display_name || S.pf[id].username)) || 'Member';
const av = (name, seed, size, url) => url
  ? `<img class="av" src="${esc(url)}" alt="" style="${size ? `width:${size}px;height:${size}px` : ''}">`
  : `<span class="av" style="--h:${hue(seed ?? name)};${size ? `width:${size}px;height:${size}px` : ''}">${esc((name || '?').trim().charAt(0).toUpperCase())}</span>`;
const avOf = (id, size) => av(nameOf(id), id, size, safeUrl(S.pf[id] && S.pf[id].avatar_url));
const media = (m, cls) => m ? (m.type === 'video' ? `<video class="m ${cls}" src="${esc(m.url)}" controls playsinline preload="${S.saver ? 'none' : 'metadata'}"></video>` : `<img class="m ${cls}" src="${esc(m.url)}" alt="">`) : '';
const smedia = (m, cls, key) => (S.saver && !S.loaded.has(key))
  ? `<button class="ph ${cls} saverph" style="--h:200" data-a="load" data-id="${key}">${m.type === 'video' ? 'Tap to load video' : 'Tap to load photo'}<br><small>Data saver is on</small></button>`
  : media(m, cls);

/* ---------- data ---------- */
async function loadProfiles(ids) {
  ids = [...new Set(ids)].filter(i => i && !S.pf[i]);
  if (!ids.length) return;
  const { data } = await sb.from('profiles').select('id,display_name,username,country,bio,avatar_url').in('id', ids);
  (data || []).forEach(p => S.pf[p.id] = p);
}
const RX = { love: '❤️', like: '👍', haha: '😂', wow: '😮', sad: '😢', angry: '😡' };
function rxOf(list) {
  const rxs = {}; let mine = null;
  list.forEach(l => { const r = RX[l.reaction] ? l.reaction : 'love'; rxs[r] = (rxs[r] || 0) + 1; if (l.user_id === S.user.id) mine = r; });
  return { rxs, react: mine, liked: !!mine, likes: list.length };
}
const POSTCOLS = 'id,user_id,content,created_at,media_url,media_type,visibility,pinned_at,allow_download';
async function hydratePosts(posts) {
  const ids = posts.map(p => p.id);
  let likes = [], cms = [], pm = [];
  if (ids.length) {
    const [l, c, m] = await Promise.all([
      sb.from('post_likes').select('post_id,user_id,reaction').in('post_id', ids),
      sb.from('comments').select('id,post_id,user_id,content,created_at').in('post_id', ids).order('created_at', { ascending: true }),
      sb.from('post_media').select('post_id,url,type,position').in('post_id', ids).order('position', { ascending: true })
    ]);
    likes = l.data || []; cms = c.data || []; pm = m.data || [];
  }
  await loadProfiles([...posts.map(p => p.user_id), ...cms.map(c => c.user_id)]);
  return posts.map(p => {
    let media = pm.filter(x => x.post_id === p.id && safeUrl(x.url)).map(x => ({ type: x.type === 'video' ? 'video' : 'image', url: x.url }));
    if (!media.length && safeUrl(p.media_url)) media = [{ type: p.media_type === 'video' ? 'video' : 'image', url: p.media_url }];
    return {
      id: p.id, uid: p.user_id, t: ago(p.created_at), text: p.content, media,
      adl: !!p.allow_download, dl: !!p.allow_download || p.user_id === S.user.id,
      vis: p.visibility || 'public', pin: !!p.pinned_at,
      ...rxOf(likes.filter(l => l.post_id === p.id)),
      cm: cms.filter(c => c.post_id === p.id).map(c => ({ w: nameOf(c.user_id), t: c.content }))
    };
  });
}
async function loadFeed() {
  const { data, error } = await sb.from('posts').select(POSTCOLS).order('created_at', { ascending: false }).limit(40);
  if (error) throw error;
  S.posts = await hydratePosts(data); S.ready.home = 1;
}
async function loadSavedIds() {
  const { data } = await sb.from('saved_posts').select('post_id').eq('user_id', S.user.id);
  S.savedPosts = new Set((data || []).map(x => x.post_id));
}
async function loadFollowing() {
  const { data } = await sb.from('follows').select('following_id').eq('follower_id', S.user.id).limit(2000);
  S.following = new Set((data || []).map(x => x.following_id));
  if (S.ready.home || S.ready.me) repaint();
}
async function loadProducts() {
  const { data, error } = await sb.from('products').select('*').eq('status', 'active').order('created_at', { ascending: false }).limit(60);
  if (error) throw error;
  const sv = await sb.from('saved_items').select('product_id').eq('user_id', S.user.id);
  await loadProfiles(data.map(p => p.seller_id));
  S.products = data.map(p => ({
    id: p.id, title: p.title, price: p.price, cur: p.currency, opt: p.price_type, cat: p.category,
    sid: p.seller_id, who: nameOf(p.seller_id), desc: p.description || '', h: hue(p.id + p.title),
    media: safeUrl(p.image_url) ? { type: 'image', url: p.image_url } : null
  }));
  S.saved = new Set((sv.data || []).map(x => x.product_id));
  S.ready.market = 1;
}
async function loadThreads() {
  const me = S.user.id;
  const { data, error } = await sb.from('messages').select('id,sender_id,receiver_id,body,created_at').or(`sender_id.eq.${me},receiver_id.eq.${me}`).order('created_at', { ascending: true }).limit(500);
  if (error) throw error;
  const map = new Map();
  data.forEach(m => {
    const other = m.sender_id === me ? m.receiver_id : m.sender_id;
    if (!map.has(other)) map.set(other, { id: other, msgs: [], last: 0 });
    const t = map.get(other); t.msgs.push({ me: m.sender_id === me, t: m.body }); t.last = new Date(m.created_at).getTime();
  });
  await loadProfiles([...map.keys()]);
  S.threads = [...map.values()].sort((a, b) => b.last - a.last);
  S.ready.chat = 1;
}
async function loadAlerts() {
  const me = S.user.id;
  const rq = await sb.from('friendships').select('requester_id').eq('addressee_id', me).eq('status', 'pending').order('created_at', { ascending: false }).limit(30);
  S.reqs = (rq.data || []).map(x => x.requester_id); await loadProfiles(S.reqs);
  const { data: mine } = await sb.from('posts').select('id').eq('user_id', me).limit(100);
  const ids = (mine || []).map(p => p.id);
  let items = [];
  if (ids.length) {
    const [l, c] = await Promise.all([
      sb.from('post_likes').select('post_id,user_id,created_at').in('post_id', ids).neq('user_id', me).order('created_at', { ascending: false }).limit(30),
      sb.from('comments').select('post_id,user_id,content,created_at').in('post_id', ids).neq('user_id', me).order('created_at', { ascending: false }).limit(30)
    ]);
    const L = l.data || [], C = c.data || [];
    await loadProfiles([...L.map(x => x.user_id), ...C.map(x => x.user_id)]);
    items = [
      ...L.map(x => ({ uid: x.user_id, text: nameOf(x.user_id) + ' liked your post', at: x.created_at })),
      ...C.map(x => ({ uid: x.user_id, text: nameOf(x.user_id) + ' commented: ' + x.content.slice(0, 80), at: x.created_at }))
    ];
  }
  const mn = await sb.from('mentions').select('author_id,post_id,created_at').eq('mentioned_id', me).order('created_at', { ascending: false }).limit(30);
  const MN = mn.data || []; await loadProfiles(MN.map(x => x.author_id));
  items = items.concat(MN.map(x => ({ uid: x.author_id, text: nameOf(x.author_id) + ' mentioned you', at: x.created_at, pid: x.post_id })));
  items.sort((a, b) => new Date(b.at) - new Date(a.at));
  S.notes = items.slice(0, 30); S.ready.alerts = 1;
}
async function loadMe() {
  const me = S.user.id;
  const [a, b, c, d, vs] = await Promise.all([
    sb.from('posts').select('id', { count: 'exact', head: true }).eq('user_id', me),
    sb.from('follows').select('following_id', { count: 'exact', head: true }).eq('follower_id', me),
    sb.from('follows').select('follower_id', { count: 'exact', head: true }).eq('following_id', me),
    sb.from('videos').select('id', { count: 'exact', head: true }).eq('user_id', me),
    sb.from('videos').select('id,video_url,views').eq('user_id', me).order('created_at', { ascending: false }).limit(30)
  ]);
  S.me = { posts: a.count || 0, following: b.count || 0, followers: c.count || 0, videos: d.count || 0 };
  S.myVideos = (vs.data || []).filter(v => safeUrl(v.video_url));
  const pin = await sb.from('posts').select(POSTCOLS).eq('user_id', me).not('pinned_at', 'is', null).order('pinned_at', { ascending: false });
  const rec = await sb.from('posts').select(POSTCOLS).eq('user_id', me).is('pinned_at', null).order('created_at', { ascending: false }).limit(20);
  S.myPosts = await hydratePosts([...(pin.data || []), ...(rec.data || [])]);
  await loadProducts(); S.ready.me = 1;
}
async function loadVideos() {
  const cols = 'id,user_id,video_url,caption,views,created_at,allow_download';
  const { data: vs, error } = await sb.from('videos').select(cols).order('created_at', { ascending: false }).limit(30);
  if (error) throw error;
  let list = vs;
  if (S.focusVideo && !list.some(v => v.id === S.focusVideo)) {
    const { data: one } = await sb.from('videos').select(cols).eq('id', S.focusVideo).maybeSingle();
    if (one) list = [one, ...list];
  }
  const ids = list.map(v => v.id); let likes = [], cms = [];
  if (ids.length) {
    const [l, c] = await Promise.all([
      sb.from('video_likes').select('video_id,user_id').in('video_id', ids),
      sb.from('video_comments').select('video_id').in('video_id', ids)
    ]);
    likes = l.data || []; cms = c.data || [];
  }
  await loadProfiles(list.map(v => v.user_id));
  S.videos = list.filter(v => safeUrl(v.video_url)).map(v => ({
    id: v.id, uid: v.user_id, url: v.video_url, cap: v.caption, views: Number(v.views) || 0,
    likes: likes.filter(x => x.video_id === v.id).length,
    liked: likes.some(x => x.video_id === v.id && x.user_id === S.user.id),
    cc: cms.filter(x => x.video_id === v.id).length,
    dl: !!v.allow_download || v.user_id === S.user.id
  }));
  S.ready.video = 1;
}
async function refresh() {
  const t = S.tab;
  try {
    if (t === 'home') await loadFeed();
    else if (t === 'market') await loadProducts();
    else if (t === 'chat') await loadThreads();
    else if (t === 'alerts') await loadAlerts();
    else if (t === 'video') await loadVideos();
    else if (t === 'me') await loadMe();
  } catch (e) { S.ready[t] = 'err'; toast('Could not load. Check your internet.'); }
  if (S.tab === t && !$('#over').innerHTML) render(true);
}

/* ---------- auth ---------- */
function showAuth(msg, ok) {
  const m = S.authMode, up = m === 'signup';
  $('#auth').innerHTML = `<div class="mark" style="font-size:46px">KiHelp</div>
    <p class="ls" style="margin:6px 0 20px">Connect, share and trade. All in one app.</p>
    <div class="seg" style="margin-bottom:14px"><button class="${!up ? 'on' : ''}" data-a="amode" data-id="login">Log in</button><button class="${up ? 'on' : ''}" data-a="amode" data-id="signup">Sign up</button></div>
    <form id="af" novalidate>
      ${up ? `<div class="fld"><label for="an">Your name</label><input id="an" autocomplete="name" maxlength="50" placeholder="e.g. Abeneazer"></div>
      <div class="fld"><label for="ac">Country (optional)</label><input id="ac" maxlength="50" placeholder="e.g. Ethiopia"></div>` : ''}
      <div class="fld"><label for="ae">Email</label><input id="ae" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com"></div>
      <div class="fld"><label for="ap">Password</label><input id="ap" type="password" autocomplete="${up ? 'new-password' : 'current-password'}" placeholder="At least 8 characters"></div>
      <div class="err ${ok ? 'okmsg' : ''}" id="aerr" role="alert">${esc(msg || '')}</div>
      <button class="btn" id="abtn" type="submit">${up ? 'Create account' : 'Log in'}</button>
    </form>`;
  $('#auth').style.display = 'flex';
}
const hideAuth = () => { $('#auth').style.display = 'none'; $('#auth').innerHTML = ''; };
async function doAuth() {
  if (!sb) return showAuth('Could not load the sign-in service. Check your internet.');
  const email = $('#ae').value.trim(), password = $('#ap').value, up = S.authMode === 'signup';
  const err = m => { $('#aerr').className = 'err'; $('#aerr').textContent = m; };
  if (!/^\S+@\S+\.\S+$/.test(email)) return err('Enter a valid email.');
  if (password.length < 8) return err('Password must be at least 8 characters.');
  const btn = $('#abtn'); btn.disabled = true; btn.textContent = '...';
  try {
    if (up) {
      const display_name = ($('#an').value.trim() || email.split('@')[0]).slice(0, 50), country = $('#ac').value.trim().slice(0, 50) || null;
      const { data, error } = await sb.auth.signUp({ email, password, options: { data: { display_name, country } } });
      if (error) throw error;
      if (data.session) return enter(data.user);
      S.authMode = 'login'; return showAuth('Account created. Check your email to confirm it, then log in.', true);
    }
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    await enter(data.user);
  } catch (e) {
    btn.disabled = false; btn.textContent = up ? 'Create account' : 'Log in';
    err(/confirm/i.test(e.message) ? 'Please confirm your email first, then log in.' : (e.message || 'Something went wrong.'));
  }
}
async function ensureProfile(user) {
  const { data } = await sb.from('profiles').select('*').eq('id', user.id).maybeSingle();
  if (data) { S.profile = data; S.pf[user.id] = data; return; }
  const md = user.user_metadata || {};
  const row = { id: user.id, display_name: (md.display_name || (user.email || 'member').split('@')[0]).slice(0, 50), country: md.country || null };
  const { data: ins } = await sb.from('profiles').insert(row).select().single();
  S.profile = ins || row; S.pf[user.id] = S.profile;
}
async function enter(user) {
  S.user = user; S.ready = {};
  try { await ensureProfile(user); } catch (e) { S.profile = { id: user.id, display_name: (user.email || 'Member').split('@')[0] }; S.pf[user.id] = S.profile; }
  loadPrivate().catch(() => {});
  loadSavedIds().catch(() => {});
  loadFollowing().catch(() => {});
  if (!store.get('kihelp.tipReact')) { store.set('kihelp.tipReact', '1'); setTimeout(() => toast('Tip: press and hold the heart to pick a reaction'), 3000); }
  hideAuth(); S.tab = S.focusVideo ? 'video' : 'home'; render(); refresh();
  if (S.focusPost) { const pid = S.focusPost; S.focusPost = null; openPost(pid); }
}
function resetSession() {
  clearInterval(S.poll); S.openThread = null;
  Object.assign(S, { user: null, profile: null, pf: {}, posts: [], products: [], saved: new Set(), threads: [], notes: [], videos: [], myVideos: [], savedPosts: new Set(), prof: null, profPosts: [], savedList: [], myPosts: [], reqs: [], following: new Set(), fl: null, ready: {}, authMode: 'login', pc: { phone: null, allow_phone_search: false, allow_email_search: false } });
  $('#over').innerHTML = ''; closeSheet(); showAuth();
}

/* ---------- views ---------- */
const TABS = [['home', 'home', 'home'], ['video', 'videos', 'film'], ['market', 'market', 'shop'], ['chat', 'chat', 'chat'], ['me', 'profile', 'user']];
const gate = () => {
  const r = S.ready[S.tab];
  if (r === 'err') return `<div class="empty" style="padding:50px 20px">Could not load.<br><br><button class="btn sm" data-a="retry">Try again</button></div>`;
  if (!r) return `<div class="empty" style="padding:50px 20px">Loading...</div>`;
  return null;
};

function head() {
  const t = S.tab;
  const title = tr({ home: 'social', video: 'videos', chat: 'chats', market: 'marketplace', alerts: 'alerts', me: 'profile' }[t]);
  const act = t === 'home' ? `<button class="hbtn" data-a="newpost">${I.plus}${tr('post')}</button>`
    : t === 'video' ? `<button class="hbtn" data-a="vupload">${I.plus}${tr('video')}</button>`
    : t === 'market' ? `<button class="hbtn" data-a="sell">${I.plus}${tr('sell')}</button>` : '';
  return `<div><div class="mark">KiHelp</div><div class="sect">${title}</div></div><div class="hr">${act}<button class="ibtn" data-a="alerts" aria-label="${tr('alerts')}">${I.bell}</button><button class="ibtn" data-a="search" aria-label="Search people">${I.search}</button><button class="ibtn" data-a="settings" aria-label="${tr('settings')}">${I.sliders}</button></div>`;
}
const postLists = () => $('#onep') ? [S.onePost] : $('#pposts') ? [S.profPosts] : $('#spl') ? [S.savedList] : S.tab === 'me' ? [S.myPosts] : [S.posts];
const findPost = id => postLists()[0].find(x => x.id == id) || [...S.posts, ...S.myPosts, ...S.profPosts, ...S.savedList].find(x => x.id == id);
function repaint() { if ($('#onep')) paintOne(); else if ($('#pposts')) paintProfile(); else if ($('#spl')) paintSaved(); else render(true); }
const visIcon = v => v === 'friends' ? `<span class="vis" title="Friends">${I.users}</span>` : v === 'private' ? `<span class="vis" title="Only me">${I.lock}</span>` : `<span class="vis" title="Public">${I.globe}</span>`;
const SHARE_RE = /^kihelp:\/\/(post|video)\/([0-9a-f-]+)(?:\n([\s\S]*))?$/i;
const fmtText = t => esc(t).replace(/(^|\s)@([a-z0-9_]{3,20})(?![a-z0-9_])/gi, (m, sp, u) => `${sp}<button class="mention" data-a="umention" data-id="${u.toLowerCase()}">@${u}</button>`);
function mediaBlock(p) {
  const m = p.media; if (!m || !m.length) return '';
  const single = m.length === 1;
  const item = (it, i) => {
    const key = 'p' + p.id + '_' + i;
    if (S.saver && !S.loaded.has(key)) return `<div class="pit"><button class="ph saverph" style="--h:200;width:100%;height:100%;min-height:200px" data-a="load" data-id="${key}">Tap to load ${it.type}<br><small>Data saver is on</small></button></div>`;
    return it.type === 'video'
      ? `<div class="pit"><video src="${esc(it.url)}" controls playsinline preload="metadata"></video><button class="pexp" data-a="vopen" data-id="${p.id}" data-i="${i}" aria-label="Full screen">${I.expand}</button></div>`
      : `<div class="pit"><img src="${esc(it.url)}" alt="" loading="lazy" data-dt="p" data-id="${p.id}" data-i="${i}"></div>`;
  };
  return `<div class="pcar ${single ? 'single' : ''}"><div class="rail">${m.map(item).join('')}</div>${single ? '' : `<span class="pcount">1 / ${m.length}</span>`}</div>`;
}
const fChip = id => (id !== S.user.id && !S.following.has(id)) ? `<button class="fchip" data-a="qfollow" data-id="${id}">Follow</button>` : '';
function likeBtn(p) {
  const emoji = p.react && p.react !== 'love' ? RX[p.react] : null;
  const top = Object.entries(p.rxs).filter(([k, n]) => n > 0 && k !== 'love').sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k]) => RX[k]).join('');
  return `<button class="${p.liked ? 'on' : ''}" data-a="like" data-id="${p.id}" aria-label="React">${emoji ? `<span class="remo">${emoji}</span>` : I.heart}${top ? `<span class="rsum">${top}</span>` : ''}${p.likes}</button>`;
}
function postCard(p) {
  return `<article class="post">
    <div class="prow"><button class="ph-row" data-a="user" data-id="${p.uid}">${avOf(p.uid)}<div><b>${esc(nameOf(p.uid))}</b><small>${p.t} · ${visIcon(p.vis)}</small></div></button>${fChip(p.uid)}${p.pin ? '<span class="pbadge">Pinned</span>' : ''}<span style="flex:1"></span><button class="ibtn" data-a="pmenu" data-id="${p.id}" aria-label="More options">${I.more}</button></div>
    ${p.text ? `<p class="ptext" data-dt="pt" data-id="${p.id}">${fmtText(p.text)}</p>` : ''}
    ${mediaBlock(p)}
    <div class="acts">
      ${likeBtn(p)}
      <button data-a="cmt" data-id="${p.id}" aria-label="Comments">${I.cmt}${p.cm.length}</button>
      <button data-a="share" data-id="${p.id}" aria-label="Share">${I.share}</button>
      <button class="sp ${S.savedPosts.has(p.id) ? 'on' : ''}" data-a="psave" data-id="${p.id}" aria-label="Save post">${I.save}</button>
    </div>
    ${S.open.has(p.id) ? `<div class="cmts">${p.cm.map(c => `<div class="cmt"><b>${esc(c.w)}</b>${fmtText(c.t)}</div>`).join('')}
      <div class="cin"><input id="ci${p.id}" data-mention placeholder="Write a comment" maxlength="1000"><button class="send" data-a="addcmt" data-id="${p.id}" aria-label="Send comment">${I.send}</button></div></div>` : ''}
  </article>`;
}
function viewHome() {
  if (gate()) return gate();
  if (!S.posts.length) return `<div class="empty" style="padding:60px 24px">No posts yet.<br>Be the first. Tap <b>${tr('post')}</b> at the top.</div>`;
  return S.posts.map(postCard).join('');
}
const vgridHTML = list => list.length ? `<div class="vgrid">${list.map(v => `<button data-a="watch" data-id="${v.id}" aria-label="Watch video">${S.saver ? `<div class="ph" style="--h:${hue(v.id)};width:100%;height:100%"></div>` : `<video src="${esc(v.video_url)}#t=0.1" muted playsinline preload="metadata"></video>`}<span>${Number(v.views) || 0} views</span></button>`).join('')}</div>` : '';
function viewVideo() {
  if (gate()) return gate();
  if (!S.videos.length) return `<div class="empty" style="padding:60px 24px;color:#fff">No videos yet.<br>Tap <b>${tr('video')}</b> at the top to post the first one.</div>`;
  return `<div class="vidfeed" id="vf" tabindex="0">${S.videos.map(v => {
    const p = S.pf[v.uid] || {};
    return `<section class="vid" data-vid="${v.id}">
      <video data-dt="v" data-id="${v.id}" data-vid="${v.id}" src="${esc(v.url)}" loop playsinline muted preload="${S.saver ? 'none' : 'metadata'}"></video>
      ${S.saver && !S.loaded.has('v' + v.id) ? `<button class="vplay" data-a="vplay" data-id="${v.id}">Tap to play<br><small>Data saver is on</small></button>` : ''}
      <div class="vshade"></div>
      <button class="vmute" data-a="vmute" aria-label="Sound">${S.muted ? I.mute : I.volume}</button>
      <div class="vinfo"><b>${esc(nameOf(v.uid))}${p.username ? ' <span style="font-weight:500;opacity:.85">@' + esc(p.username) + '</span>' : ''}</b>${fChip(v.uid)}
        ${v.cap ? `<p>${esc(v.cap)}</p>` : ''}<div style="font-size:13px;opacity:.85;margin-top:4px" data-views="${v.id}">${v.views} views</div></div>
      <div class="vacts">
        <button class="va" data-a="user" data-id="${v.uid}" aria-label="Creator">${avOf(v.uid, 46)}</button>
        <button class="va ${v.liked ? 'on' : ''}" data-lk="${v.id}" data-a="vlike" data-id="${v.id}" aria-label="Like"><span class="c">${I.heart}</span><span class="n">${v.likes}</span></button>
        <button class="va" data-a="vcmt" data-id="${v.id}" aria-label="Comments"><span class="c">${I.cmt}</span><span data-cc="${v.id}">${v.cc}</span></button>
        <button class="va" data-a="vshare" data-id="${v.id}" aria-label="Share"><span class="c">${I.share}</span>Share</button>
        ${v.dl ? `<button class="va" data-a="vdl2" data-id="${v.id}" aria-label="Save video"><span class="c">${I.download}</span>Save</button>` : ''}
      </div></section>`;
  }).join('')}</div>`;
}
function viewChat() {
  if (gate()) return gate();
  if (!S.threads.length) return `<div class="empty" style="padding:60px 24px">No chats yet.<br>Open an item in <b>${tr('market')}</b> and tap <b>Message seller</b>.</div>`;
  return S.threads.map(t => {
    const last = t.msgs[t.msgs.length - 1], n = nameOf(t.id);
    return `<button class="thread" data-a="thread" data-id="${t.id}">${avOf(t.id, 48)}<span class="tx"><b>${esc(n)}</b><span class="l">${last ? (last.me ? 'You: ' : '') + esc(SHARE_RE.test(last.t) ? 'Shared a post' : last.t) : ''}</span></span></button>`;
  }).join('');
}
function listingCard(l) {
  const price = (l.opt === 'auction' ? 'From ' : '') + fmt(l.price, l.cur) + (l.opt === 'bulk' ? ' / unit' : '');
  return `<div class="lc"><div class="lm" data-a="listing" data-id="${l.id}" role="button" tabindex="0">
      ${l.media ? smedia(l.media, '', 'l' + l.id) : `<div class="ph" style="--h:${l.h}"></div>`}
      <span class="tag">${OPT[l.opt] || l.opt}</span></div>
    <button class="sv ${S.saved.has(l.id) ? 'on' : ''}" data-a="save" data-id="${l.id}" aria-label="Save item">${I.save}</button>
    <button class="lt" data-a="listing" data-id="${l.id}" style="display:block;width:100%">${esc(l.title)}</button>
    <div class="lp">${price}</div><div class="ls">${esc(l.who)} · ${esc(l.cat)}</div></div>`;
}
function gridHTML() {
  const q = S.q.trim().toLowerCase();
  const items = S.products.filter(l => (S.cat === 'All' || l.cat === S.cat) && (S.opt === 'all' || l.opt === S.opt) && (!q || l.title.toLowerCase().includes(q)));
  if (!items.length) return `<div class="empty">${S.products.length ? 'No items match. Clear the filters.' : 'No items for sale yet. Tap Sell to add the first one.'}</div>`;
  return items.map(listingCard).join('');
}
const optChips = () => [['all', 'Any price type'], ...Object.entries(OPT)].map(([k, v]) => `<button class="chip ${S.opt === k ? 'on' : ''}" data-a="opt" data-id="${k}">${v}</button>`).join('');
const catChips = () => CATS.map(c => `<button class="chip ${S.cat === c ? 'on' : ''}" data-a="cat" data-id="${c}">${c}</button>`).join('');
function viewMarket() {
  if (gate()) return gate();
  return `<div class="msearch"><input id="q" type="search" placeholder="${tr('search')}" value="${esc(S.q)}" aria-label="${tr('search')}"></div>
    <div class="chips" id="cats">${catChips()}</div><div class="chips" id="opts">${optChips()}</div>
    <div class="grid" id="grid">${gridHTML()}</div>`;
}
function viewAlerts() {
  if (gate()) return gate();
  const reqs = S.reqs.map(id => `<div class="reqrow"><button data-a="user" data-id="${id}" aria-label="View profile">${avOf(id, 46)}</button><div class="tx"><b>${esc(nameOf(id))}</b><div class="ls">wants to be your friend</div></div><button class="btn sm2" data-a="fyes" data-id="${id}">Accept</button><button class="btn alt sm2" data-a="fno" data-id="${id}">Decline</button></div>`).join('');
  const notes = S.notes.map(n => n.pid ? `<button class="item" data-a="openpost" data-id="${n.pid}" style="width:100%">${avOf(n.uid)}<p>${esc(n.text)}<small>${ago(n.at)}</small></p></button>` : `<div class="item">${avOf(n.uid)}<p>${esc(n.text)}<small>${ago(n.at)}</small></p></div>`).join('');
  if (!reqs && !notes) return `<div class="empty" style="padding:60px 24px">Nothing yet.<br>Friend requests, likes and comments will show up here.</div>`;
  return (reqs ? `<h3 class="sub">Friend requests</h3>${reqs}` : '') + (notes ? `<h3 class="sub">Activity</h3>${notes}` : '');
}
function viewMe() {
  if (gate()) return gate();
  const p = S.profile || {}, mine = S.products.filter(l => l.sid === S.user.id);
  return `<div class="prof">${avOf(S.user.id)}<div><div class="big">${esc(p.display_name || 'Member')} <span class="vis" title="Public profile">${I.globe}</span></div><div class="ls">${p.username ? '@' + esc(p.username) + ' · ' : ''}${esc(p.country || '')}</div>${p.username ? '' : '<div class="ls">Add a username in Edit profile</div>'}</div></div>
    ${p.bio ? `<p style="padding:0 16px 10px">${esc(p.bio)}</p>` : ''}
    <div class="stats"><div><b>${S.me.videos}</b><span>Videos</span></div><button data-a="flist" data-id="${S.user.id}" data-k="followers"><b>${S.me.followers}</b><span>Followers</span></button><button data-a="flist" data-id="${S.user.id}" data-k="following"><b>${S.me.following}</b><span>Following</span></button><div><b>${S.me.posts}</b><span>Posts</span></div></div>
    <div style="padding:0 16px 8px;display:grid;grid-template-columns:1fr 1fr;gap:10px"><button class="btn alt" data-a="editprofile">Edit profile</button><button class="btn alt" data-a="opensaved">Saved posts</button></div>
    <div style="padding:0 16px 8px"><button class="btn alt" data-a="invite">Invite friends</button></div>
    <h3 class="sub">${tr('videos')}</h3>
    ${S.myVideos.length ? vgridHTML(S.myVideos) : `<div class="empty" style="padding:20px 16px">No videos yet. Open Videos and tap Video.</div>`}
    <h3 class="sub">Posts</h3>
    ${S.myPosts.length ? S.myPosts.map(postCard).join('') : `<div class="empty" style="padding:20px 16px">No posts yet.</div>`}
    <h3 class="sub">${tr('mine')}</h3>
    ${mine.length ? `<div class="grid">${mine.map(listingCard).join('')}</div>` : `<div class="empty" style="padding:20px 16px">Nothing for sale yet. Tap Market, then Sell.</div>`}`;
}
function render(keepScroll) {
  const top = $('#main').scrollTop, vf = $('#vf'), vtop = vf ? vf.scrollTop : 0;
  document.body.classList.toggle('market', S.tab === 'market');
  $('#main').classList.toggle('vmode', S.tab === 'video');
  $('#head').innerHTML = head();
  $('#main').innerHTML = { home: viewHome, video: viewVideo, chat: viewChat, market: viewMarket, alerts: viewAlerts, me: viewMe }[S.tab]();
  $('#nav').innerHTML = TABS.map(([k, l, i]) => `<button class="${S.tab === k ? 'on' : ''}" data-a="tab" data-id="${k}" aria-label="${tr(l)}"><span class="pill">${I[i]}</span>${tr(l)}</button>`).join('');
  $('#main').scrollTop = keepScroll ? top : 0;
  if (S.tab === 'video') { const nf = $('#vf'); if (nf && keepScroll && vtop) nf.scrollTop = vtop; wireVideos(); }
}
function wireVideos() {
  if (S.vio) { S.vio.disconnect(); S.vio = null; }
  const feed = $('#vf'); if (!feed) return;
  if (S.focusVideo) { const t = feed.querySelector(`.vid[data-vid="${S.focusVideo}"]`); if (t) feed.scrollTop = t.offsetTop; S.focusVideo = null; }
  S.vio = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target.querySelector('video'); if (!v) return;
    if (e.isIntersecting && e.intersectionRatio >= 0.7) {
      if (!(S.saver && !S.loaded.has('v' + v.dataset.id))) { v.muted = S.muted; v.play().catch(() => {}); }
    } else v.pause();
  }), { root: feed, threshold: [0, 0.7, 1] });
  feed.querySelectorAll('.vid').forEach(el => S.vio.observe(el));
  feed.querySelectorAll('video').forEach(v => v.addEventListener('play', () => setTimeout(() => { if (!v.paused) countView(v.dataset.id); }, 2000)));
}
async function countView(id) {
  if (S.viewed.has(id)) return; S.viewed.add(id);
  const { data } = await sb.rpc('record_video_view', { vid: id });
  if (data) { const v = S.videos.find(x => x.id === id); if (v) { v.views++; const el = document.querySelector(`[data-views="${id}"]`); if (el) el.textContent = v.views + ' views'; } }
}
const videoDuration = url => new Promise(res => { const v = document.createElement('video'); v.preload = 'metadata'; v.onloadedmetadata = () => res(v.duration); v.onerror = () => res(NaN); v.src = url; });
function paintLike(v) { const b = document.querySelector(`[data-lk="${v.id}"]`); if (b) { b.classList.toggle('on', v.liked); b.querySelector('.n').textContent = v.likes; } }
async function paintVComments(id) {
  const { data, error } = await sb.from('video_comments').select('user_id,content,created_at').eq('video_id', id).order('created_at', { ascending: true }).limit(100);
  const box = $('#vcl'); if (!box) return;
  if (error) { box.textContent = 'Could not load comments.'; return; }
  await loadProfiles(data.map(c => c.user_id));
  box.innerHTML = data.length ? data.map(c => `<div class="cmt"><b>${esc(nameOf(c.user_id))}</b>${fmtText(c.content)}</div>`).join('') : '<div class="ls">No comments yet. Be the first.</div>';
  const v = S.videos.find(x => x.id === id); if (v) { v.cc = data.length; const el = document.querySelector(`[data-cc="${id}"]`); if (el) el.textContent = data.length; }
}

/* ---------- sheets, chat, toast ---------- */
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2400); }
function sheet(html) { $('#sheet').innerHTML = `<div class="bd" data-a="close"></div><div class="panel" role="dialog">${html}</div>`; $('#sheet').classList.add('open'); }
function closeSheet() { if (S.draft && S.draft.prev) URL.revokeObjectURL(S.draft.prev); S.draft = null; (S.drafts || []).forEach(d => URL.revokeObjectURL(d.prev)); S.drafts = []; $('#sheet').classList.remove('open'); $('#sheet').innerHTML = ''; }

/* ---------- uploads ---------- */
const MAXV = 50 * 1024 * 1024;
async function compressImage(file) {
  if (file.type === 'image/gif') return file;
  const maxW = S.saver ? 960 : 1280, q = S.saver ? 0.7 : 0.8;
  let bmp = null; try { bmp = await createImageBitmap(file); } catch (e) {}
  if (!bmp) return file;
  const r = Math.min(1, maxW / Math.max(bmp.width, bmp.height));
  const c = document.createElement('canvas'); c.width = Math.round(bmp.width * r); c.height = Math.round(bmp.height * r);
  c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
  return await new Promise(res => c.toBlob(b => res(b || file), 'image/jpeg', q));
}
async function uploadMedia(file) {
  const isVid = file.type.startsWith('video');
  let blob = file, ext;
  if (isVid) {
    if (file.size > MAXV) throw new Error('Video is too big. The limit is 50 MB.');
    ext = file.type.includes('webm') ? 'webm' : file.type.includes('quicktime') ? 'mov' : 'mp4';
  } else { blob = await compressImage(file); ext = blob.type === 'image/gif' ? 'gif' : 'jpg'; }
  const path = `${S.user.id}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await sb.storage.from('media').upload(path, blob, { contentType: blob.type || file.type, cacheControl: '31536000' });
  if (error) throw error;
  return { url: sb.storage.from('media').getPublicUrl(path).data.publicUrl, type: isVid ? 'video' : 'image' };
}
const upErr = e => /mime|type/i.test(e.message || '') ? 'This file type is not supported. Use JPG, PNG or MP4.' : (e.message || 'Upload failed');
const uploadField = (accept, label) => `<label class="up"><input type="file" id="file" accept="${accept}" hidden><span id="prev">${I.plus}</span>${label}</label>`;
function bindUpload() {
  const f = $('#file'); if (!f) return;
  f.onchange = () => {
    const file = f.files[0]; if (!file) return;
    if (S.draft && S.draft.prev) URL.revokeObjectURL(S.draft.prev);
    const type = file.type.startsWith('video') ? 'video' : 'image', prev = URL.createObjectURL(file);
    S.draft = { file, type, prev };
    $('#prev').innerHTML = type === 'video' ? `<video src="${prev}" muted style="width:56px;height:56px;border-radius:10px;object-fit:cover"></video>` : `<img src="${prev}" alt="Selected photo" style="width:56px;height:56px;border-radius:10px;object-fit:cover">`;
  };
}

async function openThread(id, draft) {
  if (id === S.user.id) return toast('This is your own item');
  await loadProfiles([id]);
  let t = S.threads.find(x => x.id === id);
  if (!t) { t = { id, msgs: [], last: Date.now() }; S.threads.unshift(t); }
  S.openThread = id;
  const n = nameOf(id);
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button>${avOf(id, 38)}<b>${esc(n)}</b></header>
    <div class="msgs" id="msgs"></div>
    <div class="compose"><input id="mi" placeholder="Message" maxlength="1000" value="${esc(draft || '')}"><button class="send" data-a="send" data-id="${id}" aria-label="Send">${I.send}</button></div></div>`;
  paintMsgs(t); setTimeout(() => $('#mi') && $('#mi').focus(), 50);
  clearInterval(S.poll); S.poll = setInterval(() => pollThread(id), 5000); pollThread(id);
}
function paintMsgs(t) {
  const m = $('#msgs'); if (!m) return;
  m.innerHTML = t.msgs.length ? t.msgs.map(bubble).join('') : `<div class="empty">Say hello.</div>`;
  m.scrollTop = m.scrollHeight;
}
async function pollThread(id) {
  if (S.openThread !== id) return;
  const me = S.user.id, t = S.threads.find(x => x.id === id);
  const { data } = await sb.from('messages').select('sender_id,body').or(`and(sender_id.eq.${me},receiver_id.eq.${id}),and(sender_id.eq.${id},receiver_id.eq.${me})`).order('created_at', { ascending: true }).limit(200);
  if (!data || S.openThread !== id || !t || t.sending) return;
  const msgs = data.map(m => ({ me: m.sender_id === me, t: m.body }));
  if (msgs.length !== t.msgs.length) { t.msgs = msgs; paintMsgs(t); }
}
async function sendMsg(id) {
  const i = $('#mi'), v = i.value.trim(); if (!v) return;
  const t = S.threads.find(x => x.id === id); i.value = '';
  t.msgs.push({ me: true, t: v }); t.sending = 1; paintMsgs(t);
  const { error } = await sb.from('messages').insert({ sender_id: S.user.id, receiver_id: id, body: v });
  t.sending = 0;
  if (error) { t.msgs.pop(); paintMsgs(t); i.value = v; toast('Message not sent'); }
}

/* ---------- people search, profiles, privacy ---------- */
async function loadPrivate() {
  const { data } = await sb.from('private_contacts').select('phone,allow_phone_search,allow_email_search').eq('user_id', S.user.id).maybeSingle();
  S.pc = data || { phone: null, allow_phone_search: false, allow_email_search: false };
}
async function savePrivate(patch) {
  const next = { ...S.pc, ...patch };
  const { error } = await sb.from('private_contacts').upsert({ user_id: S.user.id, phone: next.phone || null, allow_phone_search: !!next.allow_phone_search, allow_email_search: !!next.allow_email_search, updated_at: new Date().toISOString() });
  if (error) { toast('Could not save'); return false; }
  S.pc = next; return true;
}
function openSearch() {
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button>
    <input id="ps" type="search" placeholder="Name, @username, email or phone" aria-label="Search people" maxlength="60" style="flex:1" autocomplete="off"></header>
    <div class="setbody" id="pres"><div class="empty" style="padding:40px 24px">Search people by name or @username.<br><br>You can also find someone by their exact email or phone number, if they allowed it in their privacy settings.</div></div></div>`;
  setTimeout(() => $('#ps') && $('#ps').focus(), 50);
}
async function runSearch(q) {
  const box = $('#pres'); if (!box) return;
  q = q.trim();
  if (q.length < 2) { box.innerHTML = '<div class="empty" style="padding:40px 24px">Type at least 2 characters.</div>'; return; }
  box.innerHTML = '<div class="empty" style="padding:40px 24px">Searching...</div>';
  const { data, error } = await sb.rpc('search_people', { q });
  const cur = $('#ps'); if (!cur || cur.value.trim() !== q) return;
  if (error) { box.innerHTML = '<div class="empty" style="padding:40px 24px">Search failed. Try again.</div>'; return; }
  data.forEach(p => { S.pf[p.id] = Object.assign({}, S.pf[p.id], p); });
  box.innerHTML = data.length ? data.map(p => `<button class="thread" data-a="user" data-id="${p.id}">${avOf(p.id, 48)}<span class="tx"><b>${esc(p.display_name || 'Member')}</b><span class="l">${p.username ? '@' + esc(p.username) : ''}${p.country ? (p.username ? ' · ' : '') + esc(p.country) : ''}</span></span></button>`).join('')
    : '<div class="empty" style="padding:40px 24px">No one found.</div>';
}
async function openUser(id) {
  if (id === S.user.id) { closeSheet(); $('#over').innerHTML = ''; S.tab = 'me'; render(); refresh(); return; }
  closeSheet(); clearInterval(S.poll); S.openThread = null;
  await loadProfiles([id]);
  S.prof = { id, loading: true, rel: 'none', following: false, blocked: false, followers: 0, followingN: 0, postsN: 0, vids: [], pinned: [], posts: [], more: false, offset: 0 };
  S.profPosts = [];
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">${esc(nameOf(id))}</b><span style="flex:1"></span><button class="ibtn" data-a="pfmenu" data-id="${id}" aria-label="More options">${I.more}</button></header><div class="setbody" id="pbody"></div></div>`;
  paintProfile();
  loadProfileData(id, true);
}
async function loadProfileData(id, reset) {
  const me = S.user.id, P = S.prof; if (!P || P.id !== id) return;
  try {
    if (reset) {
      const pair = `and(requester_id.eq.${me},addressee_id.eq.${id}),and(requester_id.eq.${id},addressee_id.eq.${me})`;
      const [f, fr, bl, fc, fg, pc, vs] = await Promise.all([
        sb.from('follows').select('follower_id', { count: 'exact', head: true }).eq('follower_id', me).eq('following_id', id),
        sb.from('friendships').select('requester_id,addressee_id,status').or(pair).maybeSingle(),
        sb.from('blocks').select('blocked_id', { count: 'exact', head: true }).eq('blocker_id', me).eq('blocked_id', id),
        sb.from('follows').select('follower_id', { count: 'exact', head: true }).eq('following_id', id),
        sb.from('follows').select('following_id', { count: 'exact', head: true }).eq('follower_id', id),
        sb.from('posts').select('id', { count: 'exact', head: true }).eq('user_id', id),
        sb.from('videos').select('id,video_url,views').eq('user_id', id).order('created_at', { ascending: false }).limit(9)
      ]);
      if (S.prof !== P) return;
      P.following = (f.count || 0) > 0; P.blocked = (bl.count || 0) > 0; P.following ? S.following.add(id) : S.following.delete(id);
      const row = fr.data; P.rel = !row ? 'none' : row.status === 'accepted' ? 'friends' : row.requester_id === me ? 'sent' : 'received';
      P.followers = fc.count || 0; P.followingN = fg.count || 0; P.postsN = pc.count || 0;
      P.vids = (vs.data || []).filter(v => safeUrl(v.video_url));
      const pin = await sb.from('posts').select(POSTCOLS).eq('user_id', id).not('pinned_at', 'is', null).order('pinned_at', { ascending: false });
      P.pinned = await hydratePosts(pin.data || []); P.posts = []; P.offset = 0;
    }
    const r = await sb.from('posts').select(POSTCOLS).eq('user_id', id).is('pinned_at', null).order('created_at', { ascending: false }).range(P.offset, P.offset + 19);
    const rows = r.data || [];
    P.more = rows.length === 20; P.offset += rows.length;
    P.posts = P.posts.concat(await hydratePosts(rows));
    if (S.prof !== P) return;
    S.profPosts = [...P.pinned, ...P.posts];
  } catch (e) { toast('Could not load this profile'); }
  if (S.prof === P) { P.loading = false; paintProfile(); }
}
function paintProfile() {
  const b = $('#pbody'), P = S.prof; if (!b || !P) return;
  const top = b.scrollTop, id = P.id, pr = S.pf[id] || {};
  let acts = '';
  if (!P.loading) {
    if (P.blocked) acts = `<div style="padding:0 16px 12px"><div class="note">You blocked this person. They cannot see your posts or message you.</div><button class="btn alt" data-a="unblock" data-id="${id}">Unblock</button></div>`;
    else {
      const fr = { none: ['fadd', 'Add friend', ''], sent: ['fcancel', 'Request sent', 'alt'], received: ['fyes', 'Accept request', ''], friends: ['funf', 'Friends', 'alt'] }[P.rel];
      acts = `<div style="padding:0 16px 12px"><div class="row2" style="grid-template-columns:1fr 1fr;margin-top:0">
        <button class="btn ${P.following ? 'alt' : ''}" data-a="pfollow" data-id="${id}">${P.following ? 'Following' : 'Follow'}</button>
        <button class="btn ${fr[2]}" data-a="${fr[0]}" data-id="${id}">${fr[1]}</button></div>
        <div style="display:grid;grid-template-columns:${P.rel === 'received' ? '1fr 1fr' : '1fr'};gap:10px;margin-top:10px"><button class="btn alt" data-a="dm" data-id="${id}">Message</button>${P.rel === 'received' ? `<button class="btn alt" data-a="fno" data-id="${id}">Decline</button>` : ''}</div></div>`;
    }
  }
  const all = [...P.pinned, ...P.posts];
  b.innerHTML = `<div class="pcenter">${avOf(id, 88)}<div class="big" style="margin-top:10px">${esc(pr.display_name || 'Member')} <span class="vis" title="Public profile">${I.globe}</span></div>
      <div class="ls">${pr.username ? '@' + esc(pr.username) : ''}${pr.country ? (pr.username ? ' · ' : '') + esc(pr.country) : ''}</div>
      ${pr.bio ? `<p style="margin-top:10px;white-space:pre-wrap">${esc(pr.bio)}</p>` : ''}</div>
    <div class="stats" style="justify-content:center"><div><b>${P.postsN}</b><span>Posts</span></div><button data-a="flist" data-id="${id}" data-k="followers"><b>${P.followers}</b><span>Followers</span></button><button data-a="flist" data-id="${id}" data-k="following"><b>${P.followingN}</b><span>Following</span></button></div>
    ${acts}
    ${P.vids.length ? `<h3 class="sub">${tr('videos')}</h3>${vgridHTML(P.vids)}` : ''}
    <h3 class="sub">Posts</h3>
    <div id="pposts">${P.loading ? '<div class="empty" style="padding:30px">Loading...</div>' : all.length ? all.map(postCard).join('') : `<div class="empty" style="padding:30px 20px">${P.blocked ? '' : 'No posts to show.'}</div>`}</div>
    ${P.more && !P.loading ? `<div style="padding:12px 16px"><button class="btn alt" data-a="pmore" data-id="${id}">Load more</button></div>` : ''}`;
  b.scrollTop = top;
}
async function friendAdd(id) {
  const { error } = await sb.from('friendships').insert({ requester_id: S.user.id, addressee_id: id, status: 'pending' });
  if (error) return toast('Could not send request');
  if (S.prof && S.prof.id === id) { S.prof.rel = 'sent'; paintProfile(); }
  toast('Friend request sent');
}
async function friendEnd(id, msg) {
  const me = S.user.id;
  const { error } = await sb.from('friendships').delete().or(`and(requester_id.eq.${me},addressee_id.eq.${id}),and(requester_id.eq.${id},addressee_id.eq.${me})`);
  if (error) return toast('Could not update');
  S.reqs = S.reqs.filter(x => x !== id);
  if (S.prof && S.prof.id === id) { S.prof.rel = 'none'; paintProfile(); } else if (S.tab === 'alerts' && !$('#over').innerHTML) render(true);
  if (msg) toast(msg);
}
async function friendAccept(id) {
  const { error } = await sb.from('friendships').update({ status: 'accepted' }).eq('requester_id', id).eq('addressee_id', S.user.id);
  if (error) return toast('Could not accept');
  S.reqs = S.reqs.filter(x => x !== id);
  if (S.prof && S.prof.id === id) { S.prof.rel = 'friends'; paintProfile(); } else if (S.tab === 'alerts' && !$('#over').innerHTML) render(true);
  toast('You are now friends');
}
async function blockUser(id) {
  if (!confirm('Block this person? They will not be able to see your posts, message you, or follow you.')) return;
  const { error } = await sb.rpc('block_user', { target: id });
  if (error) return toast('Could not block');
  closeSheet();
  if (S.prof && S.prof.id === id) { Object.assign(S.prof, { blocked: true, rel: 'none', following: false, pinned: [], posts: [], more: false }); S.profPosts = []; paintProfile(); }
  else { try { await loadFeed(); } catch (e) {} repaint(); }
  toast('Blocked');
}
async function openSaved() {
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">Saved posts</b></header><div class="setbody"><div id="spl"><div class="empty" style="padding:40px">Loading...</div></div></div></div>`;
  try {
    const { data } = await sb.from('saved_posts').select('post_id').eq('user_id', S.user.id).order('created_at', { ascending: false }).limit(50);
    const ids = (data || []).map(x => x.post_id); let list = [];
    if (ids.length) { const r = await sb.from('posts').select(POSTCOLS).in('id', ids); const hy = await hydratePosts(r.data || []); list = ids.map(i => hy.find(p => p.id === i)).filter(Boolean); }
    S.savedList = list;
  } catch (e) { S.savedList = []; toast('Could not load saved posts'); }
  paintSaved();
}
function paintSaved() {
  const b = $('#spl'); if (!b) return;
  b.innerHTML = S.savedList.length ? S.savedList.map(postCard).join('') : '<div class="empty" style="padding:50px 24px">No saved posts yet.<br>Tap the bookmark on a post to save it.</div>';
}
async function openBlocked() {
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">Blocked users</b></header><div class="setbody" id="bl"><div class="empty" style="padding:40px">Loading...</div></div></div>`;
  const { data } = await sb.from('blocks').select('blocked_id').eq('blocker_id', S.user.id);
  const ids = (data || []).map(x => x.blocked_id); await loadProfiles(ids);
  const box = $('#bl'); if (!box) return;
  box.innerHTML = ids.length ? ids.map(id => `<div class="reqrow">${avOf(id, 46)}<div class="tx"><b>${esc(nameOf(id))}</b></div><button class="btn alt sm2" data-a="unblock2" data-id="${id}">Unblock</button></div>`).join('') : '<div class="empty" style="padding:50px 24px">You have not blocked anyone.</div>';
}

/* ---------- viewer, taps, sharing, mentions, multi-upload ---------- */
function bubble(x) {
  const m = SHARE_RE.exec(x.t);
  if (m) return `<button class="bub sharecard ${x.me ? 'me' : ''}" data-a="openshared" data-k="${m[1].toLowerCase()}" data-id="${m[2]}"><b>${m[1].toLowerCase() === 'video' ? 'Shared a video' : 'Shared a post'}</b><br><small>Tap to open</small></button>`;
  return `<div class="bub ${x.me ? 'me' : ''}">${fmtText(x.t)}</div>`;
}
function openViewer(items, idx, dl) {
  if (!items || !items.length) return;
  S.viewer = { items, idx, dl };
  $('#viewer').innerHTML = `<div class="vwtop"><button class="vwb" data-a="vclose" aria-label="Close">${I.x}</button><span id="vwc">${idx + 1} / ${items.length}</span>${dl ? `<button class="vwb" data-a="vdl" aria-label="Save to phone">${I.download}</button>` : '<span style="width:44px"></span>'}</div>
    <div class="vwrail" id="vwr">${items.map(it => `<div class="vwi">${it.type === 'video' ? `<video src="${esc(it.url)}" controls playsinline></video>` : `<img src="${esc(it.url)}" alt="">`}</div>`).join('')}</div>`;
  $('#viewer').classList.add('open');
  const r = $('#vwr'); r.scrollLeft = idx * r.clientWidth;
}
function closeViewer() { const v = $('#viewer'); v.querySelectorAll('video').forEach(x => x.pause()); v.classList.remove('open'); v.innerHTML = ''; S.viewer = null; }
async function downloadMedia(it) {
  try {
    toast('Saving...');
    const r = await fetch(it.url); if (!r.ok) throw new Error('fetch');
    const blob = await r.blob();
    const ext = (it.url.split('?')[0].split('.').pop() || '') || (it.type === 'video' ? 'mp4' : 'jpg');
    const name = 'kihelp-' + Date.now() + '.' + ext, file = new File([blob], name, { type: blob.type });
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (ios && navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file] }); return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000); toast('Saved to your downloads');
  } catch (e) {
    if (e && e.name === 'AbortError') return;
    window.open(it.url, '_blank'); toast('Press and hold the file to save it');
  }
}
function heartPop(x, y) {
  const el = document.createElement('div'); el.className = 'hpop'; el.style.left = x + 'px'; el.style.top = y + 'px'; el.innerHTML = I.heartfill;
  document.body.appendChild(el); setTimeout(() => el.remove(), 800);
}
let lastTap = { t: 0, el: null }, tapTimer;
document.addEventListener('click', e => {
  const d = e.target.closest('[data-dt]'); if (!d) return;
  const inner = e.target.closest('[data-a]'); if (inner && inner !== d) return;
  const now = Date.now();
  if (lastTap.el === d && now - lastTap.t < 320) { clearTimeout(tapTimer); lastTap = { t: 0, el: null }; doubleTap(d, e); return; }
  lastTap = { t: now, el: d }; tapTimer = setTimeout(() => singleTap(d), 300);
});
function doubleTap(d, e) {
  const k = d.dataset.dt, id = d.dataset.id;
  if (k === 'v') { const v = S.videos.find(x => x.id === id); if (v) { ACT.vlike(id); if (v.liked) heartPop(e.clientX, e.clientY); } }
  else { const p = findPost(id); if (p) { ACT.like(id); if (p.liked) heartPop(e.clientX, e.clientY); } }
}
function singleTap(d) {
  const k = d.dataset.dt;
  if (k === 'p') { const p = findPost(d.dataset.id); if (p) openViewer(p.media, +d.dataset.i || 0, p.dl); }
  else if (k === 'v') { const v = document.querySelector(`video[data-vid="${d.dataset.id}"]`); if (v) ACT.vtoggle(d.dataset.id, v); }
}
document.addEventListener('scroll', e => {
  const t = e.target; if (!t || !t.classList) return;
  const i = Math.round(Math.abs(t.scrollLeft) / (t.clientWidth || 1)), n = t.children ? t.children.length : 0;
  if (t.classList.contains('rail')) { const c = t.parentElement.querySelector('.pcount'); if (c) c.textContent = (i + 1) + ' / ' + n; }
  else if (t.id === 'vwr') { const c = $('#vwc'); if (c) c.textContent = (i + 1) + ' / ' + n; if (S.viewer) S.viewer.idx = i; }
}, true);

async function openPost(id) {
  closeSheet(); clearInterval(S.poll); S.openThread = null; S.prof = null;
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">Post</b></header><div class="setbody" id="onep"><div class="empty" style="padding:40px">Loading...</div></div></div>`;
  try {
    const { data } = await sb.from('posts').select(POSTCOLS).eq('id', +id).maybeSingle();
    if (!data) { const b = $('#onep'); if (b) b.innerHTML = '<div class="empty" style="padding:50px 24px">This post is not available.<br>It may have been deleted or made private.</div>'; return; }
    S.onePost = await hydratePosts([data]); paintOne();
  } catch (e) { const b = $('#onep'); if (b) b.innerHTML = '<div class="empty" style="padding:50px 24px">Could not load this post.</div>'; }
}
function paintOne() { const b = $('#onep'); if (b) b.innerHTML = S.onePost.map(postCard).join(''); }

async function openShare(kind, id) {
  S.share = { kind, id };
  sheet(`<h2>Share</h2>
    <button class="optrow" data-a="shext">Share outside KiHelp ${I.share}</button>
    <div class="lbl" style="padding:14px 4px 6px">Send to someone on KiHelp</div>
    <input id="shq" placeholder="Search name or @username" maxlength="60" autocomplete="off">
    <div id="shl"><div class="ls" style="padding:12px 4px">Loading...</div></div>
    <div class="ls" style="padding:10px 4px">Sending to groups will come with groups.</div>`);
  try {
    const me = S.user.id;
    if (!S.ready.chat) await loadThreads().catch(() => {});
    const f = await sb.from('follows').select('following_id').eq('follower_id', me).limit(30);
    const ids = [...new Set([...S.threads.map(t => t.id), ...(f.data || []).map(x => x.following_id)])].filter(x => x !== me).slice(0, 40);
    await loadProfiles(ids); paintShareList(ids);
  } catch (e) { paintShareList([]); }
}
function paintShareList(ids) {
  const b = $('#shl'); if (!b) return;
  b.innerHTML = ids.length ? ids.map(id => `<div class="reqrow" style="padding-inline:0">${avOf(id, 42)}<div class="tx"><b>${esc(nameOf(id))}</b>${S.pf[id] && S.pf[id].username ? `<div class="ls">@${esc(S.pf[id].username)}</div>` : ''}</div><button class="btn sm2" data-a="shsend" data-id="${id}">Send</button></div>`).join('') : '<div class="ls" style="padding:12px 4px">No people yet. Search above, or follow someone first.</div>';
}
let shTimer;
document.addEventListener('input', e => {
  if (e.target.id !== 'shq') return;
  clearTimeout(shTimer); const q = e.target.value.trim();
  shTimer = setTimeout(async () => {
    if (q.length < 2) return;
    const { data } = await sb.rpc('search_people', { q });
    if (!$('#shq') || $('#shq').value.trim() !== q) return;
    (data || []).forEach(p => { S.pf[p.id] = Object.assign({}, S.pf[p.id], p); });
    paintShareList((data || []).map(p => p.id).filter(i => i !== S.user.id));
  }, 350);
});

async function saveMentions(text, postId) {
  const names = [...new Set((text.match(/(?:^|\s)@([a-z0-9_]{3,20})(?![a-z0-9_])/gi) || []).map(m => m.trim().slice(1).toLowerCase()))].slice(0, 10);
  if (!names.length) return;
  try {
    const { data } = await sb.from('profiles').select('id,username').in('username', names);
    const rows = (data || []).filter(p => p.id !== S.user.id).map(p => ({ mentioned_id: p.id, author_id: S.user.id, post_id: postId }));
    if (rows.length) await sb.from('mentions').insert(rows);
  } catch (e) {}
}
let mTimer;
function hideMbar() { const b = $('#mbar'); if (b) b.remove(); }
document.addEventListener('input', e => {
  const el = e.target; if (!el.matches || !el.matches('[data-mention]')) return;
  const pos = el.selectionStart || 0, m = el.value.slice(0, pos).match(/(^|\s)@([a-z0-9_]{2,20})$/i);
  clearTimeout(mTimer);
  if (!m) { hideMbar(); return; }
  const q = m[2];
  mTimer = setTimeout(async () => {
    const { data } = await sb.rpc('search_people', { q });
    const list = (data || []).filter(p => p.username && p.id !== S.user.id).slice(0, 6);
    hideMbar(); if (!list.length) return;
    list.forEach(p => { S.pf[p.id] = Object.assign({}, S.pf[p.id], p); });
    const bar = document.createElement('div'); bar.id = 'mbar'; bar.className = 'mbar';
    bar.innerHTML = list.map(p => `<button type="button" data-a="mpick" data-id="${esc(p.username)}">${avOf(p.id, 28)}<span>@${esc(p.username)}</span></button>`).join('');
    (el.closest('.cin') || el).insertAdjacentElement('afterend', bar); S.mEl = el; S.mPos = pos;
  }, 250);
});
function renderThumbs() {
  const box = $('#thumbs'); if (!box) return;
  box.innerHTML = S.drafts.map((d, i) => `<div class="th">${d.type === 'video' ? `<video src="${d.prev}" muted playsinline preload="metadata"></video>` : `<img src="${d.prev}" alt="">`}<button data-a="rmth" data-id="${i}" aria-label="Remove">${I.x}</button></div>`).join('');
  const t = $('#addtxt'); if (t) t.textContent = S.drafts.length ? 'Add more (' + S.drafts.length + '/10)' : 'Add photos or videos';
}
function bindMulti() {
  const f = $('#files'); if (!f) return;
  f.onchange = () => {
    for (const file of [...f.files]) {
      if (S.drafts.length >= 10) { toast('You can add up to 10 files'); break; }
      const isV = file.type.startsWith('video');
      if (!isV && !file.type.startsWith('image/')) { toast('Only photos and videos'); continue; }
      if (isV && file.size > MAXV) { toast('A video is over 50 MB and was skipped'); continue; }
      S.drafts.push({ file, type: isV ? 'video' : 'image', prev: URL.createObjectURL(file) });
    }
    f.value = ''; renderThumbs();
  };
}

/* ---------- reactions, follow lists ---------- */
async function setReaction(p, r) {
  const snap = { react: p.react, liked: p.liked, likes: p.likes, rxs: { ...p.rxs } }, prev = p.react;
  if (prev) p.rxs[prev] = Math.max(0, (p.rxs[prev] || 0) - 1);
  if (r) p.rxs[r] = (p.rxs[r] || 0) + 1;
  p.react = r; p.liked = !!r; p.likes = Object.values(p.rxs).reduce((a, b) => a + b, 0);
  repaint();
  let error = null;
  if (prev) ({ error } = await sb.from('post_likes').delete().eq('post_id', p.id).eq('user_id', S.user.id));
  if (!error && r) ({ error } = await sb.from('post_likes').insert({ post_id: p.id, user_id: S.user.id, reaction: r }));
  if (error) { Object.assign(p, snap); repaint(); toast('Could not update your reaction'); }
}
function showReactBar(btn) {
  const old = $('#rxbar'); if (old) old.remove();
  const id = btn.dataset.id, r = btn.getBoundingClientRect();
  const bar = document.createElement('div'); bar.id = 'rxbar'; bar.className = 'rxbar';
  bar.innerHTML = Object.entries(RX).map(([k, e]) => `<button data-a="react" data-id="${id}" data-r="${k}" aria-label="${k}">${e}</button>`).join('');
  document.body.appendChild(bar);
  const w = bar.offsetWidth;
  bar.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.left)) + 'px';
  bar.style.top = Math.max(8, r.top - bar.offsetHeight - 8) + 'px';
}
document.addEventListener('pointerdown', e => {
  const b = e.target.closest('[data-a="like"]'); if (!b) return;
  S.lpFired = false; clearTimeout(S.lpT);
  S.lpT = setTimeout(() => { S.lpFired = true; showReactBar(b); }, 450);
});
['pointerup', 'pointercancel', 'scroll'].forEach(ev => document.addEventListener(ev, () => clearTimeout(S.lpT), true));
document.addEventListener('contextmenu', e => { if (e.target.closest('[data-a="like"]')) e.preventDefault(); });

function syncFollowUI(id) {
  const f = S.following.has(id);
  document.querySelectorAll(`.fchip[data-id="${id}"]`).forEach(b => { if (f) b.remove(); });
  if (S.prof && S.prof.id === id) { S.prof.following = f; paintProfile(); }
  if ($('#fl')) paintFollowList();
}
async function openFollowList(uid, kind) {
  S.prof = null;
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">${kind === 'followers' ? 'Followers' : 'Following'}</b></header><div class="setbody" id="fl"><div class="empty" style="padding:40px">Loading...</div></div></div>`;
  try {
    const col = kind === 'followers' ? 'follower_id' : 'following_id', fil = kind === 'followers' ? 'following_id' : 'follower_id';
    const { data, error } = await sb.from('follows').select(col + ',created_at').eq(fil, uid).order('created_at', { ascending: false }).limit(200);
    if (error) throw error;
    const ids = (data || []).map(x => x[col]); await loadProfiles(ids);
    S.fl = { uid, kind, ids }; paintFollowList();
  } catch (e) { const b = $('#fl'); if (b) b.innerHTML = '<div class="empty" style="padding:40px">Could not load this list.</div>'; }
}
function paintFollowList() {
  const b = $('#fl'), L = S.fl; if (!b || !L) return;
  b.innerHTML = L.ids.length ? L.ids.map(id => `<div class="reqrow"><button data-a="user" data-id="${id}" style="display:flex;gap:10px;align-items:center;flex:1;min-width:0">${avOf(id, 46)}<span class="tx"><b>${esc(nameOf(id))}</b>${S.pf[id] && S.pf[id].username ? `<span class="ls" style="display:block">@${esc(S.pf[id].username)}</span>` : ''}</span></button>${id === S.user.id ? '' : `<button class="btn sm2 ${S.following.has(id) ? 'alt' : ''}" data-a="qfollow" data-id="${id}">${S.following.has(id) ? 'Following' : 'Follow'}</button>`}</div>`).join('')
    : `<div class="empty" style="padding:50px 24px">${L.kind === 'followers' ? 'No followers yet.' : 'Not following anyone yet.'}</div>`;
}

/* ---------- settings + theme ---------- */
function applyTheme() {
  const dark = S.mode === 'dark' || (S.mode === 'system' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
  const b = document.body, st = b.style;
  b.classList.toggle('dark', dark); b.classList.toggle('saver', S.saver);
  const A = { teal: ['#0e6b6b', '#ffffff'], saffron: ['#f0a800', '#241800'], violet: ['#6b46c9', '#ffffff'], rose: ['#d6336c', '#ffffff'] };
  if (A[S.accent]) { st.setProperty('--acc', A[S.accent][0]); st.setProperty('--acc-ink', A[S.accent][1]); st.setProperty('--soft', 'color-mix(in srgb, var(--acc) 24%, var(--paper))'); }
  else ['--acc', '--acc-ink', '--soft'].forEach(k => st.removeProperty(k));
  document.documentElement.lang = S.lang; document.documentElement.dir = S.lang === 'ar' ? 'rtl' : 'ltr';
}
async function showUsage() {
  const el = $('#usage'); if (!el) return;
  try { const e = await navigator.storage.estimate(); el.textContent = (e.usage / 1048576).toFixed(1) + ' MB'; } catch (x) { el.textContent = '-'; }
}
async function clearCache() {
  try { if (window.caches) for (const k of await caches.keys()) await caches.delete(k); } catch (e) {}
  S.loaded.clear(); S.q = ''; S.cat = 'All'; S.opt = 'all';
  toast(tr('cleared')); showUsage();
}
function openSettings() {
  const scroll = document.querySelector('.setbody') ? document.querySelector('.setbody').scrollTop : 0;
  const sw = (on, a) => `<button class="switch ${on ? 'on' : ''}" role="switch" aria-checked="${on}" data-a="${a}"><i></i></button>`;
  const AC = { teal: '#0e6b6b', saffron: '#f0a800', violet: '#6b46c9', rose: '#d6336c' };
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">${tr('settings')}</b></header>
  <div class="setbody">
    <h3 class="sub">${tr('appearance')}</h3>
    <div class="srow col"><div class="lbl">${tr('mode')}</div><div class="seg c3">${['system', 'light', 'dark'].map(m => `<button class="${S.mode === m ? 'on' : ''}" data-a="mode" data-id="${m}">${tr(m)}</button>`).join('')}</div></div>
    <div class="srow col"><div class="lbl">${tr('accent')}</div><div class="dots">
      <button class="chip ${S.accent === 'auto' ? 'on' : ''}" data-a="accent" data-id="auto">${tr('auto')}</button>
      ${Object.entries(AC).map(([k, c]) => `<button class="dotb ${S.accent === k ? 'on' : ''}" style="background:${c}" data-a="accent" data-id="${k}" aria-label="${k}"></button>`).join('')}</div></div>
    <h3 class="sub">${tr('data')}</h3>
    <div class="srow"><div><div class="lbl">${tr('saver')}</div><div class="ls">${tr('saverDesc')}</div></div>${sw(S.saver, 'togglesaver')}</div>
    <div class="srow"><div><div class="lbl">${tr('storage')}</div><div class="ls" id="usage">...</div></div><button class="btn sm" data-a="clearcache">${tr('clear')}</button></div>
    <h3 class="sub">${tr('language')}</h3>
    <div class="srow col"><select id="lang" aria-label="${tr('language')}">${Object.entries(LANGS).map(([k, v]) => `<option value="${k}" ${S.lang === k ? 'selected' : ''}>${v.name}</option>`).join('')}</select></div>
    <h3 class="sub">Privacy and search</h3>
    <div class="srow"><div><div class="lbl">Find me by email</div><div class="ls">Only people who type your exact email can find you</div></div>${sw(S.pc.allow_email_search, 'tglemail')}</div>
    <div class="srow col"><div class="lbl">Phone number</div><input id="phone" type="tel" inputmode="tel" placeholder="+251912345678" value="${esc(S.pc.phone || '')}" maxlength="20" autocomplete="tel"><div class="ls">Include your country code. Only you can see it.</div><button class="btn alt" data-a="savephone">Save phone</button></div>
    <div class="srow"><div><div class="lbl">Find me by phone</div><div class="ls">Only people who type your exact number can find you</div></div>${sw(S.pc.allow_phone_search, 'tglphone')}</div>
    <h3 class="sub">People</h3>
    <div class="srow"><button class="lbl" data-a="invite" style="flex:1">Invite friends</button></div>
    <div class="srow"><button class="lbl" data-a="blocked" style="flex:1">Blocked users</button></div>
    <h3 class="sub">${tr('account')}</h3>
    <div class="srow"><div class="ls">${esc(S.user ? S.user.email : '')}</div></div>
    <div class="srow"><button class="lbl" data-a="logout" style="color:var(--coral)">${tr('logout')}</button></div>
    <div class="ls" style="padding:16px">KiHelp 0.9</div>
  </div></div>`;
  document.querySelector('.setbody').scrollTop = scroll;
  showUsage();
}

/* ---------- actions ---------- */
const busy = (sel, on, label) => { const b = $(sel); if (b) { b.disabled = on; if (label) b.textContent = label; } };
const ACT = {
  tab: id => { S.tab = id; render(); refresh(); },
  retry: () => { S.ready[S.tab] = 0; render(true); refresh(); },
  amode: id => { S.authMode = id; showAuth(); },
  settings: () => openSettings(),
  mode: id => { S.mode = id; saveSettings(); applyTheme(); openSettings(); },
  accent: id => { S.accent = id; saveSettings(); applyTheme(); openSettings(); },
  togglesaver: () => { S.saver = !S.saver; S.loaded.clear(); saveSettings(); applyTheme(); openSettings(); },
  clearcache: () => clearCache(),
  logout: async () => { await sb.auth.signOut(); resetSession(); },
  load: id => { S.loaded.add(id); repaint(); },
  vclose: () => closeViewer(),
  vdl: () => { const v = S.viewer; if (v && v.dl) downloadMedia(v.items[v.idx]); },
  vdl2: id => { const v = S.videos.find(x => x.id === id); if (v && v.dl) downloadMedia({ type: 'video', url: v.url }); },
  vopen: (id, el) => { const p = findPost(id); if (p) openViewer(p.media, +el.dataset.i || 0, p.dl); },
  umention: async u => {
    const { data } = await sb.from('profiles').select('id').eq('username', u).maybeSingle();
    if (data) openUser(data.id); else toast('Person not found');
  },
  mpick: u => {
    const el = S.mEl; if (!el) return;
    const v = el.value, pos = S.mPos || v.length;
    const before = v.slice(0, pos).replace(/@[a-z0-9_]{2,20}$/i, '@' + u + ' ');
    el.value = before + v.slice(pos); el.focus(); try { el.setSelectionRange(before.length, before.length); } catch (e) {}
    hideMbar();
  },
  rmth: id => { const d = S.drafts.splice(+id, 1)[0]; if (d) URL.revokeObjectURL(d.prev); renderThumbs(); },
  tgldl: () => { S.allowDl = !S.allowDl; const b = $('#dlsw'); if (b) { b.classList.toggle('on', S.allowDl); b.setAttribute('aria-checked', String(S.allowDl)); } },
  shsend: async (id, el) => {
    const sh = S.share; if (!sh) return; el.disabled = true;
    const { error } = await sb.from('messages').insert({ sender_id: S.user.id, receiver_id: id, body: `kihelp://${sh.kind}/${sh.id}` });
    if (error) { el.disabled = false; return toast('Could not send'); }
    el.textContent = 'Sent'; el.classList.add('alt');
  },
  shext: () => {
    const sh = S.share; if (!sh) return;
    const url = location.origin + location.pathname + (sh.kind === 'video' ? '#v=' : '#p=') + sh.id;
    if (navigator.share) navigator.share({ title: 'KiHelp', text: 'Take a look on KiHelp', url }).catch(() => {});
    else { try { navigator.clipboard.writeText(url); } catch (e) {} toast('Link copied'); }
  },
  openshared: (id, el) => { if (el.dataset.k === 'video') ACT.watch(id); else openPost(id); },
  openpost: id => openPost(id),
  pdl: async id => {
    const p = findPost(id); if (!p) return;
    const v = !p.adl;
    const { error } = await sb.from('posts').update({ allow_download: v }).eq('id', p.id).eq('user_id', S.user.id);
    if (error) return toast('Could not update');
    p.adl = v; p.dl = true; closeSheet(); toast(v ? 'People can now save this' : 'Saving turned off');
  },
  search: () => openSearch(),
  opensaved: () => openSaved(),
  blocked: () => openBlocked(),
  unblock2: async id => { const { error } = await sb.from('blocks').delete().eq('blocker_id', S.user.id).eq('blocked_id', id); if (error) return toast('Could not unblock'); toast('Unblocked'); openBlocked(); },
  invite: () => {
    const url = location.origin + location.pathname, text = 'Join me on KiHelp: connect, share videos and trade in one app.';
    if (navigator.share) navigator.share({ title: 'KiHelp', text, url }).catch(() => {});
    else { try { navigator.clipboard.writeText(url); } catch (e) {} toast('Invite link copied'); }
  },
  pmore: id => loadProfileData(id, false),
  pfollow: async id => {
    const P = S.prof; if (!P || P.id !== id) return;
    const was = P.following; P.following = !was; P.followers += was ? -1 : 1; was ? S.following.delete(id) : S.following.add(id); paintProfile();
    const q = was ? sb.from('follows').delete().eq('follower_id', S.user.id).eq('following_id', id) : sb.from('follows').insert({ follower_id: S.user.id, following_id: id });
    const { error } = await q;
    if (error) { P.following = was; P.followers += was ? 1 : -1; was ? S.following.add(id) : S.following.delete(id); paintProfile(); toast('Could not update'); }
  },
  fadd: id => friendAdd(id),
  fcancel: id => friendEnd(id, 'Request cancelled'),
  fyes: id => friendAccept(id),
  fno: id => friendEnd(id, 'Request declined'),
  funf: id => { if (confirm('Remove this friend?')) friendEnd(id, 'Friend removed'); },
  block: id => blockUser(id),
  pblock: id => blockUser(id),
  unblock: async id => {
    const { error } = await sb.from('blocks').delete().eq('blocker_id', S.user.id).eq('blocked_id', id);
    if (error) return toast('Could not unblock');
    if (S.prof && S.prof.id === id) { S.prof.blocked = false; S.prof.loading = true; paintProfile(); loadProfileData(id, true); }
    toast('Unblocked');
  },
  pfmenu: id => sheet(`<h2>${esc(nameOf(id))}</h2>
    <button class="optrow" data-a="invite">Invite friends to KiHelp</button>
    ${S.prof && S.prof.blocked ? `<button class="optrow" data-a="unblock" data-id="${id}" onclick="">Unblock</button>` : `<button class="optrow red" data-a="block" data-id="${id}">Block ${esc(nameOf(id))}</button>`}`),
  psave: async id => {
    id = +id; const was = S.savedPosts.has(id);
    was ? S.savedPosts.delete(id) : S.savedPosts.add(id);
    if (was && $('#spl')) S.savedList = S.savedList.filter(p => p.id !== id);
    closeSheet(); repaint();
    const q = was ? sb.from('saved_posts').delete().eq('user_id', S.user.id).eq('post_id', id) : sb.from('saved_posts').insert({ user_id: S.user.id, post_id: id });
    const { error } = await q;
    if (error) { was ? S.savedPosts.add(id) : S.savedPosts.delete(id); repaint(); toast('Could not save'); }
    else toast(was ? 'Removed from saved' : 'Post saved');
  },
  pmenu: id => {
    const p = findPost(id); if (!p) return;
    if (p.uid === S.user.id) {
      sheet(`<h2>Your post</h2>
        <button class="optrow" data-a="ppin" data-id="${p.id}">${p.pin ? 'Unpin from your profile' : 'Pin to your profile'}</button>
        ${p.media.length ? `<button class="optrow" data-a="pdl" data-id="${p.id}">${p.adl ? 'Saving is allowed. Tap to turn off' : 'Saving is off. Tap to allow'}</button>` : ''}
        <div class="lbl" style="padding:14px 4px 6px">Who can see this post</div>
        <div class="seg c3">${[['public', 'Public'], ['friends', 'Friends'], ['private', 'Only me']].map(([k, l]) => `<button class="${p.vis === k ? 'on' : ''}" data-a="pvis" data-id="${p.id}" data-v="${k}">${l}</button>`).join('')}</div>
        <button class="optrow red" style="margin-top:12px" data-a="pdel" data-id="${p.id}">Delete post</button>`);
    } else {
      sheet(`<h2>Post options</h2>
        <button class="optrow" data-a="psave" data-id="${p.id}">${S.savedPosts.has(p.id) ? 'Remove from saved' : 'Save post'}</button>
        <button class="optrow" data-a="user" data-id="${p.uid}">View profile</button>
        <button class="optrow red" data-a="pblock" data-id="${p.uid}">Block ${esc(nameOf(p.uid))}</button>`);
    }
  },
  ppin: async id => {
    const p = findPost(id); if (!p) return;
    const { error } = await sb.from('posts').update({ pinned_at: p.pin ? null : new Date().toISOString() }).eq('id', p.id).eq('user_id', S.user.id);
    if (error) return toast(/pin up to/i.test(error.message || '') ? 'You can pin up to 3 posts' : 'Could not update');
    closeSheet(); toast(p.pin ? 'Unpinned' : 'Pinned');
    try { await loadMe(); } catch (e) {} try { await loadFeed(); } catch (e) {} repaint();
  },
  pvis: async (id, el) => {
    const p = findPost(id), v = el.dataset.v; if (!p || p.vis === v) return closeSheet();
    const { error } = await sb.from('posts').update({ visibility: v }).eq('id', p.id).eq('user_id', S.user.id);
    if (error) return toast('Could not update');
    p.vis = v; closeSheet(); repaint(); toast('Updated');
  },
  pdel: async id => {
    const p = findPost(id); if (!p) return;
    if (!confirm('Delete this post? You cannot undo this.')) return;
    const { error } = await sb.from('posts').update({ deleted_at: new Date().toISOString() }).eq('id', p.id).eq('user_id', S.user.id);
    if (error) return toast('Could not delete');
    for (const k of ['posts', 'myPosts', 'profPosts', 'savedList']) S[k] = S[k].filter(x => x.id !== p.id);
    closeSheet(); repaint(); toast('Deleted');
  },
  pvsel: (id, el) => { S.postVis = id; document.querySelectorAll('#pvs button').forEach(b => b.classList.toggle('on', b.dataset.id === id)); },
  alerts: () => { S.tab = 'alerts'; render(); refresh(); },
  watch: id => { closeSheet(); $('#over').innerHTML = ''; S.focusVideo = id; S.tab = 'video'; S.ready.video = 0; render(); refresh(); },
  vtoggle: (id, el) => { if (el.paused) { el.muted = S.muted; el.play().catch(() => {}); } else el.pause(); },
  vplay: (id, el) => {
    S.loaded.add('v' + id); el.remove();
    const v = document.querySelector(`video[data-vid="${id}"]`); if (v) { v.preload = 'auto'; v.muted = S.muted; v.play().catch(() => {}); }
  },
  vmute: () => {
    S.muted = !S.muted;
    document.querySelectorAll('.vid video').forEach(v => { v.muted = S.muted; });
    document.querySelectorAll('.vmute').forEach(b => { b.innerHTML = S.muted ? I.mute : I.volume; });
  },
  vlike: async id => {
    const v = S.videos.find(x => x.id === id), was = v.liked;
    v.liked = !was; v.likes += was ? -1 : 1; paintLike(v);
    const q = was ? sb.from('video_likes').delete().eq('video_id', id).eq('user_id', S.user.id) : sb.from('video_likes').insert({ video_id: id, user_id: S.user.id });
    const { error } = await q;
    if (error) { v.liked = was; v.likes += was ? 1 : -1; paintLike(v); toast('Could not update like'); }
  },
  vcmt: async id => {
    sheet(`<h2>Comments</h2><div id="vcl"><div class="ls">Loading...</div></div>
      <div class="cin" style="margin-top:12px"><input id="vci" maxlength="1000" placeholder="Write a comment"><button class="send" data-a="vaddcmt" data-id="${id}" aria-label="Send comment">${I.send}</button></div>`);
    await paintVComments(id);
  },
  vaddcmt: async id => {
    const el = $('#vci'), v = el.value.trim(); if (!v) return;
    const { error } = await sb.from('video_comments').insert({ video_id: id, user_id: S.user.id, content: v });
    if (error) return toast('Could not comment');
    el.value = ''; await paintVComments(id);
  },
  vshare: id => openShare('video', id),
  vupload: () => {
    S.allowDl = false;
    sheet(`<h2>New video</h2>
      <div class="fld">${uploadField('video/mp4,video/webm,video/quicktime', 'Choose a video')}</div>
      <div class="ls" style="margin:-4px 0 12px">Up to 60 seconds and 50 MB.</div>
      <div class="fld"><label for="vc">Caption</label><textarea id="vc" maxlength="300" placeholder="Say something about your video"></textarea></div>
      <div class="srow" style="padding:6px 0 14px;border:0"><div><div class="lbl">Allow saving</div><div class="ls">Let people save this video to their phone</div></div><button class="switch" id="dlsw" role="switch" aria-checked="false" data-a="tgldl"><i></i></button></div>
      <button class="btn" id="vbtn" data-a="vpublish">Post video</button>`);
    bindUpload();
  },
  vpublish: async () => {
    if (!S.draft || S.draft.type !== 'video') return toast('Choose a video first');
    const dur = await videoDuration(S.draft.prev);
    if (isFinite(dur) && dur > 61) return toast('Video must be 60 seconds or less');
    busy('#vbtn', true, 'Uploading...');
    let m;
    try { m = await uploadMedia(S.draft.file); } catch (e) { busy('#vbtn', false, 'Post video'); return toast(upErr(e)); }
    const { error } = await sb.from('videos').insert({ user_id: S.user.id, video_url: m.url, caption: ($('#vc') ? $('#vc').value : '').trim().slice(0, 300), allow_download: !!S.allowDl });
    if (error) { busy('#vbtn', false, 'Post video'); return toast('Could not post video'); }
    closeSheet(); S.tab = 'video'; S.ready.video = 0; render(); refresh(); toast('Video posted');
  },
  user: id => openUser(id),
  dm: id => { closeSheet(); openThread(id); },
  follow: async (id, el) => {
    const was = el.dataset.f === '1'; el.disabled = true;
    const q = was ? sb.from('follows').delete().eq('follower_id', S.user.id).eq('following_id', id) : sb.from('follows').insert({ follower_id: S.user.id, following_id: id });
    const { error } = await q; el.disabled = false;
    if (error) return toast('Could not update');
    el.dataset.f = was ? '0' : '1'; el.textContent = was ? 'Follow' : 'Following'; el.classList.toggle('alt', !was);
  },
  tglemail: async () => { if (await savePrivate({ allow_email_search: !S.pc.allow_email_search })) openSettings(); },
  tglphone: async () => {
    if (!S.pc.phone && !S.pc.allow_phone_search) return toast('Save your phone number first');
    if (await savePrivate({ allow_phone_search: !S.pc.allow_phone_search })) openSettings();
  },
  savephone: async () => {
    const raw = $('#phone').value.replace(/[\s\-()]/g, '');
    if (raw && !/^\+[0-9]{7,15}$/.test(raw)) return toast('Use the format +251912345678');
    if (await savePrivate({ phone: raw || null, allow_phone_search: raw ? S.pc.allow_phone_search : false })) { toast('Saved'); openSettings(); }
  },

  like: id => { const p = findPost(id); if (p) setReaction(p, p.react ? null : 'love'); },
  react: (id, el) => {
    const bar = $('#rxbar'); if (bar) bar.remove();
    const p = findPost(id), r = el.dataset.r; if (p && RX[r]) setReaction(p, p.react === r ? null : r);
  },
  qfollow: async id => {
    const was = S.following.has(id);
    was ? S.following.delete(id) : S.following.add(id); syncFollowUI(id);
    const q = was ? sb.from('follows').delete().eq('follower_id', S.user.id).eq('following_id', id) : sb.from('follows').insert({ follower_id: S.user.id, following_id: id });
    const { error } = await q;
    if (error) { was ? S.following.add(id) : S.following.delete(id); syncFollowUI(id); toast('Could not update'); }
    else if (S.prof && S.prof.id === id) { S.prof.followers += was ? -1 : 1; paintProfile(); }
  },
  flist: (id, el) => openFollowList(id, el.dataset.k),
  cmt: id => { id = +id; S.open.has(id) ? S.open.delete(id) : S.open.add(id); repaint(); },
  addcmt: async id => {
    const el = $('#ci' + id), v = el.value.trim(); if (!v) return;
    const { error } = await sb.from('comments').insert({ post_id: +id, user_id: S.user.id, content: v });
    if (error) return toast('Could not comment');
    const p = findPost(id); if (p) p.cm.push({ w: nameOf(S.user.id), t: v });
    saveMentions(v, +id); hideMbar();
    S.open.add(+id); repaint();
  },
  share: id => openShare('post', id),
  thread: id => openThread(id),
  back: () => { clearInterval(S.poll); S.openThread = null; S.prof = null; $('#over').innerHTML = ''; render(true); if (S.tab === 'chat') refresh(); },
  send: id => sendMsg(id),
  cat: id => { S.cat = id; $('#cats').innerHTML = catChips(); $('#grid').innerHTML = gridHTML(); },
  opt: id => { S.opt = id; $('#opts').innerHTML = optChips(); $('#grid').innerHTML = gridHTML(); },
  save: async id => {
    id = +id; const was = S.saved.has(id);
    was ? S.saved.delete(id) : S.saved.add(id);
    S.tab === 'market' ? $('#grid').innerHTML = gridHTML() : render(true);
    const q = was ? sb.from('saved_items').delete().eq('user_id', S.user.id).eq('product_id', id) : sb.from('saved_items').insert({ user_id: S.user.id, product_id: id });
    const { error } = await q;
    if (error) { was ? S.saved.add(id) : S.saved.delete(id); S.tab === 'market' ? $('#grid').innerHTML = gridHTML() : render(true); toast('Could not save'); }
    else toast(was ? 'Removed from saved' : 'Saved');
  },
  close: closeSheet,

  listing: id => {
    const l = S.products.find(x => x.id == id); if (!l) return;
    const mine = l.sid === S.user.id;
    const price = `<div class="big">${fmt(l.price, l.cur)}${l.opt === 'bulk' ? ' / unit' : ''}</div>`;
    const info = { fixed: 'The seller set one price.', negotiable: 'Price can be discussed. Send an offer in chat.', auction: 'Bidding opens soon. For now, message the seller.', bulk: 'Ask the seller about discounts for larger orders.' }[l.opt] || '';
    const primary = mine ? ['sold', 'Mark as sold'] : { fixed: ['order', 'Order now'], bulk: ['order', 'Order now'], negotiable: ['offer', 'Make an offer'], auction: ['bid', 'Place bid'] }[l.opt] || ['order', 'Order now'];
    sheet(`<div class="dm">${l.media ? media(l.media, '') : `<div class="ph" style="--h:${l.h}"></div>`}</div>
      <h2>${esc(l.title)}</h2>${price}
      <div class="note"><b>${OPT[l.opt] || esc(l.opt)}.</b> ${info}</div>
      <p style="white-space:pre-wrap">${esc(l.desc)}</p>
      <div class="sel">${avOf(l.sid, 36)}<div><b>${esc(l.who)}</b><div class="ls">${esc(l.cat)}</div></div></div>
      <button class="btn" data-a="${primary[0]}" data-id="${l.id}">${primary[1]}</button>
      ${mine ? '' : `<div class="row2"><button class="btn alt" data-a="save" data-id="${l.id}">${S.saved.has(l.id) ? 'Saved' : 'Save'}</button>
      <button class="btn alt" data-a="msgseller" data-id="${l.id}">Message seller</button></div>`}`);
  },
  msgseller: id => { const l = S.products.find(x => x.id == id); closeSheet(); openThread(l.sid, `Hi, is "${l.title}" still available?`); },
  offer: id => { const l = S.products.find(x => x.id == id); closeSheet(); openThread(l.sid, `Hi, would you take ___ ${l.cur === 'ETB' ? 'Birr' : l.cur} for "${l.title}"?`); },
  order: () => { closeSheet(); toast('Orders and payments come in the next step'); },
  bid: () => toast('Bidding opens soon. Message the seller for now.'),
  sold: async id => {
    const { error } = await sb.from('products').update({ status: 'sold' }).eq('id', +id).eq('seller_id', S.user.id);
    if (error) return toast('Could not update');
    closeSheet(); try { await loadProducts(); } catch (e) {} render(true); toast('Marked as sold');
  },

  sell: () => {
    S.sellOpt = 'fixed';
    sheet(`<h2>Sell an item</h2>
      <div class="fld">${uploadField('image/*', 'Add a photo')}</div>
      <div class="fld"><label for="st">What are you selling?</label><input id="st" maxlength="120" placeholder="e.g. Wooden chair"></div>
      <div class="fld"><label>How do you want to price it?</label><div class="seg" id="so">${Object.entries(OPT).map(([k, v]) => `<button data-a="sopt" data-id="${k}" class="${k === 'fixed' ? 'on' : ''}">${v}</button>`).join('')}</div></div>
      <div class="fld"><label for="sp">Price</label><div style="display:grid;grid-template-columns:1.4fr 1fr;gap:8px"><input id="sp" type="number" inputmode="decimal" min="0" placeholder="0"><select id="scur" aria-label="Currency">${CURS.map(c => `<option>${c}</option>`).join('')}</select></div></div>
      <div class="fld"><label for="sc">Category</label><select id="sc">${CATS.slice(1).map(c => `<option>${c}</option>`).join('')}</select></div>
      <div class="fld"><label for="sd">Description</label><textarea id="sd" maxlength="1000" placeholder="Condition, size, pickup or delivery"></textarea></div>
      <button class="btn" id="pubbtn" data-a="publish">Publish item</button>`);
    bindUpload();
  },
  sopt: id => { S.sellOpt = id; document.querySelectorAll('#so button').forEach(b => b.classList.toggle('on', b.dataset.id === id)); },
  publish: async () => {
    const title = $('#st').value.trim(), price = parseFloat($('#sp').value);
    if (!title) return toast('Add a title');
    if (!(price >= 0)) return toast('Add a price');
    busy('#pubbtn', true, S.draft ? 'Uploading...' : '...');
    let m = null;
    try { if (S.draft) m = await uploadMedia(S.draft.file); } catch (e) { busy('#pubbtn', false, 'Publish item'); return toast(upErr(e)); }
    const { error } = await sb.from('products').insert({ seller_id: S.user.id, title, description: $('#sd').value.trim(), price, category: $('#sc').value, price_type: S.sellOpt, currency: $('#scur').value, image_url: m ? m.url : null });
    if (error) { busy('#pubbtn', false, 'Publish item'); return toast('Could not publish'); }
    closeSheet(); S.cat = 'All'; S.opt = 'all'; S.q = '';
    try { await loadProducts(); } catch (e) {}
    render(); toast('Published');
  },

  newpost: () => {
    S.postVis = 'public'; S.allowDl = false; S.drafts = [];
    sheet(`<h2>New post</h2>
      <div class="fld"><textarea id="pt" data-mention maxlength="3000" placeholder="What's on your mind? Type @ to mention someone"></textarea></div>
      <div class="fld"><label class="up"><input type="file" id="files" accept="image/*,video/mp4,video/webm,video/quicktime" multiple hidden><span id="prev">${I.plus}</span><span id="addtxt">Add photos or videos</span></label><div class="thumbs" id="thumbs"></div></div>
      <div class="fld"><label>Who can see this post?</label><div class="seg c3" id="pvs">${[['public', 'Public'], ['friends', 'Friends'], ['private', 'Only me']].map(([k, l]) => `<button data-a="pvsel" data-id="${k}" class="${k === 'public' ? 'on' : ''}">${l}</button>`).join('')}</div></div>
      <div class="srow" style="padding:6px 0 14px;border:0"><div><div class="lbl">Allow saving</div><div class="ls">Let people save your photos and videos to their phone</div></div><button class="switch" id="dlsw" role="switch" aria-checked="false" data-a="tgldl"><i></i></button></div>
      <button class="btn" id="postbtn" data-a="publishpost">${tr('post')}</button>`);
    bindMulti();
  },
  publishpost: async () => {
    const text = $('#pt').value.trim(), files = S.drafts.slice();
    if (!text && !files.length) return toast('Write something or add photos or videos');
    busy('#postbtn', true, files.length ? 'Uploading 1 of ' + files.length + '...' : '...');
    const media = [];
    try { for (let i = 0; i < files.length; i++) { busy('#postbtn', true, 'Uploading ' + (i + 1) + ' of ' + files.length + '...'); media.push(await uploadMedia(files[i].file)); } }
    catch (e) { busy('#postbtn', false, tr('post')); return toast(upErr(e)); }
    const row = { user_id: S.user.id, content: text, visibility: S.postVis, allow_download: !!S.allowDl, media_url: media[0] ? media[0].url : null, media_type: media[0] ? media[0].type : null };
    const { data: post, error } = await sb.from('posts').insert(row).select('id').single();
    if (error || !post) { busy('#postbtn', false, tr('post')); return toast('Could not post'); }
    if (media.length) {
      const r = await sb.from('post_media').insert(media.map((m, i) => ({ post_id: post.id, user_id: S.user.id, url: m.url, type: m.type, position: i })));
      if (r.error) { await sb.from('posts').update({ deleted_at: new Date().toISOString() }).eq('id', post.id); busy('#postbtn', false, tr('post')); return toast('Could not save your photos. Try again.'); }
    }
    saveMentions(text, post.id);
    closeSheet(); try { await loadFeed(); } catch (e) {} render(); toast('Posted');
  },

  editprofile: () => {
    const p = S.profile || {};
    sheet(`<h2>Edit profile</h2>
      <div class="fld">${uploadField('image/*', 'Change profile photo')}</div>
      <div class="fld"><label for="pn">Name</label><input id="pn" maxlength="50" value="${esc(p.display_name || '')}"></div>
      <div class="fld"><label for="pu">Username</label><div style="display:flex;align-items:center;gap:6px"><span class="lbl">@</span><input id="pu" maxlength="20" autocapitalize="none" autocomplete="off" value="${esc(p.username || '')}" placeholder="yourname"></div><div class="ls" style="margin-top:4px">3 to 20 letters, numbers or underscores</div></div>
      <div class="fld"><label for="pc">Country</label><input id="pc" maxlength="50" value="${esc(p.country || '')}"></div>
      <div class="fld"><label for="pb">About you</label><textarea id="pb" maxlength="300">${esc(p.bio || '')}</textarea></div>
      <button class="btn" id="profbtn" data-a="saveprofile">Save</button>`);
    bindUpload();
  },
  saveprofile: async () => {
    const uname = $('#pu').value.trim().toLowerCase().replace(/^@/, '');
    if (uname && !/^[a-z0-9_]{3,20}$/.test(uname)) return toast('Username: 3 to 20 letters, numbers or _');
    const row = { username: uname || null, display_name: $('#pn').value.trim().slice(0, 50) || 'Member', country: $('#pc').value.trim().slice(0, 50) || null, bio: $('#pb').value.trim().slice(0, 300) || null };
    busy('#profbtn', true, S.draft ? 'Uploading...' : '...');
    try { if (S.draft) row.avatar_url = (await uploadMedia(S.draft.file)).url; } catch (e) { busy('#profbtn', false, 'Save'); return toast(upErr(e)); }
    const { error } = await sb.from('profiles').update(row).eq('id', S.user.id);
    if (error) { busy('#profbtn', false, 'Save'); return toast(error.code === '23505' ? 'That username is taken' : error.code === '23514' ? 'That username is not allowed' : 'Could not save'); }
    S.profile = { ...S.profile, ...row }; S.pf[S.user.id] = S.profile;
    closeSheet(); render(true); toast('Saved');
  }
};

document.addEventListener('click', e => {
  const rb = $('#rxbar');