/* Compatibility for older phones */
if (!Object.fromEntries) Object.fromEntries = function (it) { var o = {}; (it || []).forEach(function (kv) { o[kv[0]] = kv[1]; }); return o; };
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
  clip: ic('<path d="M21 11.5l-8.5 8.5a5 5 0 0 1-7-7L14 4.5a3.5 3.5 0 0 1 5 5L10.5 18a2 2 0 0 1-3-3L15 7.5"/>'),
  mic: ic('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'),
  trash: ic('<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>'),
  more: ic('<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>')
};
const OPT = { fixed: 'Fixed price', negotiable: 'Negotiable', auction: 'Auction', bulk: 'Bulk discount' };
const CATS = ['All', 'Fashion', 'Phones', 'Home', 'Food', 'Electronics', 'Other'];
const CURS = ['ETB', 'USD', 'EUR', 'GBP', 'KES', 'NGN', 'ZAR', 'AED', 'INR', 'CNY'];
const fmt = (n, c) => Number(n).toLocaleString('en-US') + ' ' + ((c || 'ETB') === 'ETB' ? 'Birr' : c);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const hue = s => { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) % 360; return h; };
const ago = iso => { const m = Math.floor((Date.now() - new Date(iso)) / 60000); if (m < 1) return 'now'; if (m < 60) return m + 'm'; const h = Math.floor(m / 60); if (h < 24) return h + 'h'; return Math.floor(h / 24) + 'd'; };

const safeUrl = u => (typeof u === 'string' && u.startsWith(SUPA_URL + '/storage/')) ? u : null;

const S = {
  tab: 'home', cat: 'All', opt: 'all', q: '', open: new Set(),
  mode: 'system', accent: 'auto', saver: false, lang: 'en', loaded: new Set(),
  user: null, profile: null, pf: {}, posts: [], products: [], saved: new Set(), threads: [], notes: [],
  me: { posts: 0, following: 0, followers: 0, videos: 0 }, videos: [], myVideos: [], muted: true, viewed: new Set(), focusVideo: null, savedPosts: new Set(), prof: null, profPosts: [], savedList: [], myPosts: [], reqs: [], postVis: 'public', allowDl: false, drafts: [], viewer: null, onePost: [], focusPost: null, share: null, following: new Set(), fl: null, reply: null, editM: null, editC: null, replyC: null, rec: null, sig: {}, stories: { mine: null, others: [] }, sv: null, sc: null, g: null, myGroups: null, gpoll: null, gtab: 'mine', gq: '', greqs: [], evs: [], evf: 'all', evEdit: null, gdraftPriv: 'public', pc: { phone: null, allow_phone_search: false, allow_email_search: false }, ready: {}, authMode: 'login', openThread: null, sellOpt: 'fixed'
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
  : `<span class="av" style="--h:${hue(seed == null ? name : seed)};${size ? `width:${size}px;height:${size}px` : ''}">${esc((name || '?').trim().charAt(0).toUpperCase())}</span>`;
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
const POSTCOLS = 'id,user_id,content,created_at,media_url,media_type,visibility,pinned_at,allow_download,edited_at';
async function hydratePosts(posts) {
  const ids = posts.map(p => p.id);
  let likes = [], cms = [], pm = [];
  if (ids.length) {
    const [l, c, m] = await Promise.all([
      sb.from('post_likes').select('post_id,user_id,reaction').in('post_id', ids),
      sb.from('comments').select('id,post_id,user_id,content,created_at,parent_id,edited_at').in('post_id', ids).order('created_at', { ascending: true }),
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
      adl: !!p.allow_download, dl: !!p.allow_download || p.user_id === S.user.id, ed: !!p.edited_at,
      vis: p.visibility || 'public', pin: !!p.pinned_at,
      ...rxOf(likes.filter(l => l.post_id === p.id)),
      cm: cms.filter(c => c.post_id === p.id).map(c => ({ id: c.id, uid: c.user_id, w: nameOf(c.user_id), t: c.content, pid: c.parent_id, ed: !!c.edited_at, at: c.created_at }))
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
const MSGCOLS = 'id,sender_id,receiver_id,body,created_at,reply_to,forwarded,edited_at,deleted_at,media_path,media_type,media_name,media_size';
const mapMsg = (m, me) => ({ id: m.id, me: m.sender_id === me, t: m.deleted_at ? '' : m.body, at: m.created_at, reply: m.reply_to, fwd: !!m.forwarded, ed: !!m.edited_at, del: !!m.deleted_at, media: m.media_path ? { path: m.media_path, type: m.media_type, name: m.media_name, size: m.media_size } : null });
const msgPreview = x => x.del ? 'Message deleted' : x.media ? ({ image: '📷 Photo', audio: '🎤 Voice message', video: '🎥 Video', file: '📎 ' + (x.media.name || 'File') }[x.media.type] || '📎 File') : SHARE_RE.test(x.t || '') ? shareLabel(SHARE_RE.exec(x.t)[1]) : (x.t || '');
const hm = at => { try { return new Date(at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); } catch (e) { return ''; } };
const fsize = n => n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB';
const curThread = () => S.threads.find(x => x.id === S.openThread);
const msgById = id => { const t = curThread(); return t && t.msgs.find(x => String(x.id) === String(id)); };
async function loadThreads() {
  const me = S.user.id;
  const { data, error } = await sb.from('messages').select(MSGCOLS).or(`sender_id.eq.${me},receiver_id.eq.${me}`).order('created_at', { ascending: true }).limit(500);
  if (error) throw error;
  const map = new Map();
  data.forEach(m => {
    const other = m.sender_id === me ? m.receiver_id : m.sender_id;
    if (!map.has(other)) map.set(other, { id: other, msgs: [], last: 0 });
    const t = map.get(other); t.msgs.push(mapMsg(m, me)); t.last = new Date(m.created_at).getTime();
  });
  await loadProfiles([...map.keys()]);
  S.threads = [...map.values()].sort((a, b) => b.last - a.last);
  S.ready.chat = 1;
}
async function loadAlerts() {
  const me = S.user.id;
  try {
    const ag = await sb.from('group_members').select('group_id').eq('user_id', me).eq('status', 'active').in('role', ['owner', 'admin']);
    const gids = (ag.data || []).map(x => x.group_id); S.greqs = [];
    if (gids.length) {
      const pr = await sb.from('group_members').select('group_id,user_id').in('group_id', gids).eq('status', 'pending').limit(50);
      const gr = await sb.from('groups').select('id,name').in('id', gids), gm = Object.fromEntries((gr.data || []).map(g => [g.id, g.name]));
      S.greqs = (pr.data || []).map(x => ({ gid: x.group_id, uid: x.user_id, gname: gm[x.group_id] || 'a group' }));
      await loadProfiles(S.greqs.map(x => x.uid));
    }
  } catch (e) { S.greqs = []; }
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
    if (t === 'home') { await loadFeed(); loadStories().then(afterBg).catch(() => {}); if (!S.ready.video) loadVideos().then(afterBg).catch(() => {}); }
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
  $('#auth').innerHTML = `<div class="authbrand"><img class="logo" src="logo-320.png" width="120" height="120" alt="kihelp logo" onerror="this.style.display='none'"><div class="mark">kihelp</div></div>
    <p class="ls" style="margin:6px 0 20px">Connect, share and trade. All in one app.</p>
    <div class="seg" style="margin-bottom:14px"><button class="${!up ? 'on' : ''}" data-a="amode" data-id="login">Log in</button><button class="${up ? 'on' : ''}" data-a="amode" data-id="signup">Sign up</button></div>
    <form id="af" novalidate>
      ${up ? `<div class="fld"><label for="an">Your name</label><input id="an" autocomplete="name" maxlength="50" placeholder="e.g. Abeneazer"></div>
      <div class="fld"><label for="ac">Country (optional)</label><input id="ac" maxlength="50" placeholder="e.g. Ethiopia"></div>` : ''}
      <div class="fld"><label for="ae">Email</label><input id="ae" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com" value="${esc(S.addHint || '')}"></div>
      <div class="fld"><label for="ap">Password</label><input id="ap" type="password" autocomplete="${up ? 'new-password' : 'current-password'}" placeholder="At least 8 characters"></div>
      <div class="err ${ok ? 'okmsg' : ''}" id="aerr" role="alert">${esc(msg || '')}</div>
      <button class="btn" id="abtn" type="submit">${up ? 'Create account' : 'Log in'}</button>
    </form>
    ${S.user ? '<button class="btn alt" style="margin-top:12px" data-a="authcancel">Cancel</button>' : ''}
    <p class="ls" style="margin-top:16px;text-align:center">${up ? 'By creating an account you agree to our ' : 'Read our '}<button class="lk2" data-a="legal" data-id="terms">Terms</button>, <button class="lk2" data-a="legal" data-id="privacy">Privacy Policy</button> and <button class="lk2" data-a="legal" data-id="rules">Community rules</button>.</p>`;
  $('#auth').style.display = 'flex';
}
const hideAuth = () => { S.addHint = ''; $('#auth').style.display = 'none'; $('#auth').innerHTML = ''; };
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
  sb.auth.getSession().then(r => { if (r.data && r.data.session) saveAccount(r.data.session); }).catch(() => {});
  loadSavedIds().catch(() => {});
  loadFollowing().catch(() => {});
  if (!store.get('kihelp.tipReact')) { store.set('kihelp.tipReact', '1'); setTimeout(() => toast('Tip: press and hold the heart to pick a reaction'), 3000); }
  hideAuth(); S.tab = S.focusVideo ? 'video' : 'home'; render(); refresh();
  if (S.focusPost) { const pid = S.focusPost; S.focusPost = null; openPost(pid); }
  if (S.focusGroup) { const gid = S.focusGroup; S.focusGroup = null; openGroup(gid); }
}
function clearUserState() {
  clearInterval(S.poll); clearInterval(S.gpoll); S.openThread = null;
  Object.assign(S, { myGroups: null, g: null, evs: [], greqs: [], user: null, profile: null, pf: {}, posts: [], products: [], saved: new Set(), threads: [], notes: [], videos: [], myVideos: [], savedPosts: new Set(), prof: null, profPosts: [], savedList: [], myPosts: [], reqs: [], following: new Set(), fl: null, stories: { mine: null, others: [] }, ready: {}, authMode: 'login', pc: { phone: null, allow_phone_search: false, allow_email_search: false } });
}
function resetSession() {
  clearUserState(); $('#over').innerHTML = ''; closeSheet(); showAuth();
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
  const act = t === 'home' ? `<button class="hbtn" data-a="newpost">${I.plus}<span class="hl">${tr('post')}</span></button>`
    : t === 'video' ? `<button class="hbtn" data-a="vupload">${I.plus}<span class="hl">${tr('video')}</span></button>`
    : t === 'market' ? `<button class="hbtn" data-a="sell">${I.plus}<span class="hl">${tr('sell')}</span></button>` : '';
  return `<div class="brand"><div class="mark">kihelp</div><div class="sect">${title}</div></div><div class="hr">${act}<button class="ibtn" data-a="alerts" aria-label="${tr('alerts')}">${I.bell}</button><button class="ibtn" data-a="search" aria-label="Search people">${I.search}</button><button class="ibtn" data-a="settings" aria-label="${tr('settings')}">${I.sliders}</button></div>`;
}
const postLists = () => $('#onep') ? [S.onePost] : $('#pposts') ? [S.profPosts] : $('#spl') ? [S.savedList] : S.tab === 'me' ? [S.myPosts] : [S.posts];
const findPost = id => postLists()[0].find(x => x.id == id) || [...S.posts, ...S.myPosts, ...S.profPosts, ...S.savedList].find(x => x.id == id);
function repaint() { if ($('#onep')) paintOne(); else if ($('#pposts')) paintProfile(); else if ($('#spl')) paintSaved(); else render(true); }
const visIcon = v => v === 'friends' ? `<span class="vis" title="Friends">${I.users}</span>` : v === 'private' ? `<span class="vis" title="Only me">${I.lock}</span>` : `<span class="vis" title="Public">${I.globe}</span>`;
const SHARE_RE = /^kihelp:\/\/(post|video|group)\/([0-9a-f-]+)(?:\n([\s\S]*))?$/i;
const shareLabel = k => ({ video: 'Shared a video', group: 'Group invite' }[String(k).toLowerCase()] || 'Shared a post');
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
function commentsHTML(p) {
  const top = p.cm.filter(c => !c.pid), kids = c => p.cm.filter(x => x.pid === c.id);
  const row = (c, sub) => (S.editC && S.editC.id === c.id)
    ? `<div class="cmt${sub ? ' sub' : ''}"><input id="ec${c.id}" value="${esc(c.t)}" maxlength="1000"><div class="crow"><button class="btn sm2" data-a="csave" data-id="${c.id}" data-p="${p.id}">Save</button><button class="btn alt sm2" data-a="ccancel">Cancel</button></div></div>`
    : `<div class="cmt${sub ? ' sub' : ''}"><b>${esc(c.w)}</b>${fmtText(c.t)}${c.ed ? ' <small class="ls">(edited)</small>' : ''}
      <div class="cact"><span class="ls">${ago(c.at)}</span><button data-a="creply" data-id="${c.id}" data-p="${p.id}">Reply</button>${c.uid === S.user.id ? `<button data-a="cedit" data-id="${c.id}">Edit</button><button data-a="cdel" data-id="${c.id}" data-p="${p.id}">Delete</button>` : `<button data-a="rep" data-t="comment" data-id="${c.id}" data-o="${c.uid}">Report</button>`}</div></div>`;
  return top.map(c => row(c, false) + kids(c).map(k => row(k, true)).join('')).join('');
}
const replyChip = p => S.replyC && S.replyC.p === p.id ? `<div class="rchip">Replying to <b>${esc(S.replyC.name)}</b><button data-a="creplyx" aria-label="Cancel reply">${I.x}</button></div>` : '';
const fChip = id => (id !== S.user.id && !S.following.has(id)) ? `<button class="fchip" data-a="qfollow" data-id="${id}">Follow</button>` : '';
function likeBtn(p) {
  const emoji = p.react && p.react !== 'love' ? RX[p.react] : null;
  const top = Object.entries(p.rxs).filter(([k, n]) => n > 0 && k !== 'love').sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k]) => RX[k]).join('');
  return `<button class="${p.liked ? 'on' : ''}" data-a="like" data-id="${p.id}" aria-label="React">${emoji ? `<span class="remo">${emoji}</span>` : I.heart}${top ? `<span class="rsum">${top}</span>` : ''}${p.likes}</button>`;
}
function postCard(p) {
  return `<article class="post">
    <div class="prow"><button class="ph-row" data-a="user" data-id="${p.uid}">${avOf(p.uid)}<div><b>${esc(nameOf(p.uid))}</b><small>${p.t}${p.ed ? ' · edited' : ''} · ${visIcon(p.vis)}</small></div></button>${fChip(p.uid)}${p.pin ? '<span class="pbadge">Pinned</span>' : ''}<span style="flex:1"></span><button class="ibtn" data-a="pmenu" data-id="${p.id}" aria-label="More options">${I.more}</button></div>
    ${p.text ? `<p class="ptext" data-dt="pt" data-id="${p.id}">${fmtText(p.text)}</p>` : ''}
    ${mediaBlock(p)}
    <div class="acts">
      ${likeBtn(p)}
      <button data-a="cmt" data-id="${p.id}" aria-label="Comments">${I.cmt}${p.cm.length}</button>
      <button data-a="share" data-id="${p.id}" aria-label="Share">${I.share}</button>
      <button class="sp ${S.savedPosts.has(p.id) ? 'on' : ''}" data-a="psave" data-id="${p.id}" aria-label="Save post">${I.save}</button>
    </div>
    ${S.open.has(p.id) ? `<div class="cmts">${commentsHTML(p)}
      ${replyChip(p)}
      <div class="cin"><input id="ci${p.id}" data-mention placeholder="Write a comment" maxlength="1000"><button class="send" data-a="addcmt" data-id="${p.id}" aria-label="Send comment">${I.send}</button></div></div>` : ''}
  </article>`;
}
function viewHome() {
  if (gate()) return gate();
  const row = installBar() + quickRow() + storiesRow();
  if (!S.posts.length) return row + `<div class="empty" style="padding:60px 24px">No posts yet.<br>Be the first. Tap <b>${tr('post')}</b> at the top.</div>` + videoStrip();
  const at = Math.min(2, S.posts.length - 1);
  return row + S.posts.map((p, i) => postCard(p) + (i === at ? videoStrip() : '')).join('');
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
        ${v.uid !== S.user.id ? `<button class="va" data-a="vmore" data-id="${v.id}" aria-label="More options"><span class="c">${I.more}</span></button>` : ''}
        ${v.dl ? `<button class="va" data-a="vdl2" data-id="${v.id}" aria-label="Save video"><span class="c">${I.download}</span>Save</button>` : ''}
      </div></section>`;
  }).join('')}</div>`;
}
function viewChat() {
  if (gate()) return gate();
  if (!S.threads.length) return `<div class="empty" style="padding:60px 24px">No chats yet.<br>Open an item in <b>${tr('market')}</b> and tap <b>Message seller</b>.</div>`;
  return S.threads.map(t => {
    const last = t.msgs[t.msgs.length - 1], n = nameOf(t.id);
    return `<button class="thread" data-a="thread" data-id="${t.id}">${avOf(t.id, 48)}<span class="tx"><b>${esc(n)}</b><span class="l">${last ? (last.me ? 'You: ' : '') + esc(msgPreview(last)) : ''}</span></span></button>`;
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
  const greqs = S.greqs.map(x => `<div class="reqrow"><button data-a="user" data-id="${x.uid}" aria-label="View profile">${avOf(x.uid, 46)}</button><div class="tx"><b>${esc(nameOf(x.uid))}</b><div class="ls">wants to join ${esc(x.gname)}</div></div><button class="btn sm2" data-a="garq" data-id="${x.uid}" data-g="${x.gid}">Approve</button><button class="btn alt sm2" data-a="garn" data-id="${x.uid}" data-g="${x.gid}">Decline</button></div>`).join('');
  const notes = S.notes.map(n => n.pid ? `<button class="item" data-a="openpost" data-id="${n.pid}" style="width:100%">${avOf(n.uid)}<p>${esc(n.text)}<small>${ago(n.at)}</small></p></button>` : `<div class="item">${avOf(n.uid)}<p>${esc(n.text)}<small>${ago(n.at)}</small></p></div>`).join('');
  if (!reqs && !greqs && !notes) return `<div class="empty" style="padding:60px 24px">Nothing yet.<br>Friend requests, group requests, likes and comments will show up here.</div>`;
  return (reqs ? `<h3 class="sub">Friend requests</h3>${reqs}` : '') + (greqs ? `<h3 class="sub">Group requests</h3>${greqs}` : '') + (notes ? `<h3 class="sub">Activity</h3>${notes}` : '');
}
function viewMe() {
  if (gate()) return gate();
  const p = S.profile || {}, mine = S.products.filter(l => l.sid === S.user.id);
  return `<div class="prof">${avOf(S.user.id)}<div><div class="big">${esc(p.display_name || 'Member')} <span class="vis" title="Public profile">${I.globe}</span></div><div class="ls">${p.username ? '@' + esc(p.username) + ' · ' : ''}${esc(p.country || '')}</div>${p.username ? '' : '<div class="ls">Add a username in Edit profile</div>'}</div></div>
    ${p.bio ? `<p style="padding:0 16px 10px">${esc(p.bio)}</p>` : ''}
    <div class="stats"><div><b>${S.me.videos}</b><span>Videos</span></div><button data-a="flist" data-id="${S.user.id}" data-k="followers"><b>${S.me.followers}</b><span>Followers</span></button><button data-a="flist" data-id="${S.user.id}" data-k="following"><b>${S.me.following}</b><span>Following</span></button><div><b>${S.me.posts}</b><span>Posts</span></div></div>
    <div style="padding:0 16px 8px;display:grid;grid-template-columns:1fr 1fr;gap:10px"><button class="btn alt" data-a="editprofile">Edit profile</button><button class="btn alt" data-a="opensaved">Saved posts</button></div>
    <div style="padding:0 16px 8px;display:grid;grid-template-columns:1fr 1fr;gap:10px"><button class="btn alt" data-a="invite">Invite friends</button><button class="btn alt" data-a="accounts">Switch account</button></div>
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
function closeSheet() { if (S.draft && S.draft.prev) URL.revokeObjectURL(S.draft.prev); S.draft = null; (S.drafts || []).forEach(d => URL.revokeObjectURL(d.prev)); S.drafts = []; $('#sheet').classList.remove('open'); $('#sheet').innerHTML = ''; if (S.sv && S.sv.paused && !S.sv.held) pauseStory(false); }

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
function bindUpload(o) {
  o = o || {};
  const f = $('#file'); if (!f) return;
  f.onchange = async () => {
    let file = f.files[0]; if (!file) return;
    if (o.edit && file.type.startsWith('image/') && file.type !== 'image/gif') file = (await editImage(file, o.ratio ? { ratio: o.ratio } : {})) || file;
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
  S.openThread = id; S.reply = null; S.editM = null;
  const n = nameOf(id);
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button>${avOf(id, 38)}<b>${esc(n)}</b></header>
    <div class="msgs" id="msgs"></div>
    <div id="cbar"></div>
    <div id="emop" class="emop" hidden></div>
    <div class="compose" id="compose">
      <button class="ibtn" data-a="attach" aria-label="Attach">${I.clip}</button>
      <input id="mi" placeholder="Message" maxlength="1000" value="${esc(draft || '')}" autocomplete="off">
      <button class="ibtn" data-a="emo" data-t="#mi" data-p="#emop" aria-label="Emoji">😊</button>
      <button class="send" id="sendb" data-a="send" data-id="${id}" aria-label="Send">${I.send}</button>
      <button class="send" id="micb" data-a="mic" aria-label="Record voice message">${I.mic}</button>
    </div>
    <div class="compose rec" id="recbar" hidden><button class="ibtn" data-a="reccancel" aria-label="Cancel recording">${I.trash}</button><span class="rdot"></span><span id="rtime">0:00</span><span style="flex:1"></span><button class="send" data-a="recsend" aria-label="Send voice message">${I.send}</button></div>
    <input type="file" id="cph" accept="image/*,video/*" hidden><input type="file" id="ccam" accept="image/*" capture="environment" hidden><input type="file" id="cfile" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,audio/*" hidden></div>`;
  ['cph', 'ccam', 'cfile'].forEach(k => { $('#' + k).onchange = e => { const f = e.target.files[0]; e.target.value = ''; if (f) sendAttachment(f); }; });
  syncSendBtn(); paintMsgs(t); setTimeout(() => $('#mi') && $('#mi').focus(), 50);
  clearInterval(S.poll); S.poll = setInterval(() => pollThread(id), 5000); pollThread(id);
}
function syncSendBtn() {
  const i = $('#mi'), has = !!(i && i.value.trim()) || !!S.editM, s = $('#sendb'), m = $('#micb');
  if (s) s.hidden = !has; if (m) m.hidden = has;
}
document.addEventListener('input', e => { if (e.target.id === 'mi') syncSendBtn(); });
function paintCbar() {
  const b = $('#cbar'); if (!b) return;
  const t = curThread();
  if (S.editM) b.innerHTML = `<div class="cbar"><span>Editing message</span><button data-a="cbarx" aria-label="Cancel">${I.x}</button></div>`;
  else if (S.reply) { const r = t && t.msgs.find(y => y.id === S.reply.id); b.innerHTML = `<div class="cbar"><span class="qt">Replying to <b>${S.reply.me ? 'yourself' : esc(nameOf(S.openThread))}</b>: ${esc(r ? msgPreview(r).slice(0, 60) : '')}</span><button data-a="cbarx" aria-label="Cancel">${I.x}</button></div>`; }
  else b.innerHTML = '';
  syncSendBtn();
}
function paintMsgs(t) {
  const m = $('#msgs'); if (!m) return;
  const stick = !m.dataset.init || m.scrollHeight - m.scrollTop - m.clientHeight < 140;
  m.innerHTML = t.msgs.length ? t.msgs.map(x => bubble(x, t)).join('') : `<div class="empty">Say hello.</div>`;
  if (stick) m.scrollTop = m.scrollHeight;
  m.dataset.init = '1'; fillMedia();
}
async function fillMedia() {
  const els = [...document.querySelectorAll('[data-mp]')]; if (!els.length) return;
  const need = [...new Set(els.map(e => e.dataset.mp).filter(p => !S.sig[p] || S.sig[p].exp < Date.now()))];
  if (need.length) {
    const { data } = await sb.storage.from('chat-media').createSignedUrls(need, 3600);
    (data || []).forEach(x => { if (x.signedUrl && x.path) S.sig[x.path] = { url: x.signedUrl, exp: Date.now() + 3300000 }; });
  }
  document.querySelectorAll('[data-mp]').forEach(e => { const s = S.sig[e.dataset.mp]; if (s && e.getAttribute('src') !== s.url) e.setAttribute('src', s.url); });
}
async function pollThread(id) {
  if (S.openThread !== id) return;
  const me = S.user.id, t = S.threads.find(x => x.id === id);
  const { data } = await sb.from('messages').select(MSGCOLS).or(`and(sender_id.eq.${me},receiver_id.eq.${id}),and(sender_id.eq.${id},receiver_id.eq.${me})`).order('created_at', { ascending: true }).limit(200);
  if (!data || S.openThread !== id || !t || t.sending || S.rec) return;
  const msgs = data.map(m => mapMsg(m, me));
  const sig = a => a.map(m => m.id + (m.ed ? 'e' : '') + (m.del ? 'd' : '')).join(',');
  if (sig(msgs) !== sig(t.msgs.filter(m => m.id))) { t.msgs = msgs; paintMsgs(t); }
}
async function insertMsg(to, extra) {
  const t = S.threads.find(x => x.id === to);
  const row = Object.assign({ sender_id: S.user.id, receiver_id: to, body: '', reply_to: S.reply ? S.reply.id : null }, extra);
  const { data, error } = await sb.from('messages').insert(row).select(MSGCOLS).single();
  if (error) throw error;
  const m = mapMsg(data, S.user.id); t.msgs.push(m); t.last = Date.now(); S.reply = null; paintCbar(); paintMsgs(t); return m;
}
async function sendMsg(id) {
  const i = $('#mi'), v = i.value.trim(); if (!v) return;
  if (S.editM) return saveEdit(v);
  const t = S.threads.find(x => x.id === id);
  const tmp = { me: true, t: v, at: new Date().toISOString(), reply: S.reply ? S.reply.id : null };
  i.value = ''; syncSendBtn(); t.msgs.push(tmp); t.sending = 1; paintMsgs(t);
  const { data, error } = await sb.from('messages').insert({ sender_id: S.user.id, receiver_id: id, body: v, reply_to: tmp.reply }).select(MSGCOLS).single();
  t.sending = 0;
  if (error) { t.msgs.splice(t.msgs.indexOf(tmp), 1); paintMsgs(t); i.value = v; syncSendBtn(); return toast('Message not sent'); }
  Object.assign(tmp, mapMsg(data, S.user.id)); S.reply = null; paintCbar(); paintMsgs(t);
}
async function saveEdit(v) {
  const t = curThread(), m = t && S.editM && t.msgs.find(x => x.id === S.editM.id), i = $('#mi');
  if (!m) { S.editM = null; paintCbar(); return; }
  const { error } = await sb.rpc('edit_message', { mid: m.id, new_body: v });
  if (error) return toast('Could not edit this message');
  m.t = v; m.ed = true; S.editM = null; i.value = ''; paintCbar(); paintMsgs(t);
}
async function uploadChat(blob, ext, to) {
  const path = `${S.user.id}/${to}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const ct = ((blob.type || '').split(';')[0]) || 'application/octet-stream';
  const { error } = await sb.storage.from('chat-media').upload(path, blob, { contentType: ct, cacheControl: '3600' });
  if (error) throw error;
  return path;
}
async function sendAttachment(file) {
  const id = S.openThread; if (!id) return;
  if (file.size > 25 * 1024 * 1024) return toast('This file is over 25 MB');
  const type = file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : file.type.startsWith('audio/') ? 'audio' : 'file';
  let blob = file, ext = ((file.name.split('.').pop() || 'bin').toLowerCase()).slice(0, 5);
  if (type === 'image' && file.type !== 'image/gif') { blob = await compressImage(file); ext = 'jpg'; }
  toast('Sending...');
  try { const path = await uploadChat(blob, ext, id); await insertMsg(id, { media_path: path, media_type: type, media_name: file.name.slice(0, 120), media_size: blob.size }); }
  catch (e) { toast(/mime|type/i.test(e.message || '') ? 'This file type is not allowed' : 'Could not send the file'); }
}
function paintRec(on) { const r = $('#recbar'), c = $('#compose'); if (r) r.hidden = !on; if (c) c.hidden = on; }
async function startRec() {
  if (S.rec) return;
  if (!navigator.mediaDevices || !window.MediaRecorder) return toast('Voice messages are not supported on this browser');
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg'].find(m => MediaRecorder.isTypeSupported(m)) || '';
    const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined), chunks = [];
    rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    const r = S.rec = { rec, chunks, stream, start: Date.now(), cancel: false, type: rec.mimeType || mime || 'audio/webm' };
    rec.onstop = () => {
      stream.getTracks().forEach(x => x.stop()); clearInterval(r.timer); S.rec = null; paintRec(false);
      if (r.cancel) return;
      const secs = Math.round((Date.now() - r.start) / 1000);
      if (secs < 1) return toast('Hold on a little longer');
      sendVoice(new Blob(chunks, { type: r.type }), secs, r.type);
    };
    rec.start(); paintRec(true);
    r.timer = setInterval(() => { const s = Math.floor((Date.now() - r.start) / 1000), el = $('#rtime'); if (el) el.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); if (s >= 120) stopRec(false); }, 250);
  } catch (e) { toast('Please allow the microphone to record'); }
}
function stopRec(cancel) { const r = S.rec; if (!r) return; r.cancel = !!cancel; try { r.rec.stop(); } catch (e) {} }
function stopRecCancel() { if (S.rec) stopRec(true); }
async function sendVoice(blob, secs, mime) {
  const id = S.openThread; if (!id) return;
  const base = (mime || 'audio/webm').split(';')[0], ext = base.includes('mp4') ? 'm4a' : base.includes('ogg') ? 'ogg' : base.includes('mpeg') ? 'mp3' : 'webm';
  toast('Sending voice message...');
  try { const path = await uploadChat(new Blob([blob], { type: base }), ext, id); await insertMsg(id, { media_path: path, media_type: 'audio', media_name: 'Voice message ' + secs + 's', media_size: blob.size }); }
  catch (e) { toast('Could not send the voice message'); }
}
const EMO = {
  '😀': '😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 😉 😍 🥰 😘 😋 😛 😜 🤪 🤔 🤨 😐 😶 🙄 😏 😴 😌 😎 🤓 🥳 😢 😭 😤 😡 🤯 😱 😨 🥺 🤗 🤭'.split(' '),
  '👍': '👍 👎 👌 ✌️ 🤞 🤝 🙏 👏 🙌 💪 🫶 👋 🤙 ☝️ ✋ 👀 🧠'.split(' '),
  '❤️': '❤️ 🧡 💛 💚 💙 💜 🖤 🤍 💔 💖 💗 💓 💕 💞 🔥 ✨ ⭐ 🌟 💯'.split(' '),
  '🎉': '🎉 🎁 🎂 🍕 ☕ 🍰 🎵 🎶 📷 📌 🛍️ 💰 🚚 🏠 ✅ ❌ ⚡ 💡 🌍 🌙 ☀️ 🌈'.split(' ')
};
function emojiPanel(target, panel, tab) {
  const cats = Object.keys(EMO); tab = tab || cats[0];
  return `<div class="etabs">${cats.map(c => `<button class="${c === tab ? 'on' : ''}" data-a="etab" data-k="${c}" data-t="${target}" data-p="${panel}">${c}</button>`).join('')}</div><div class="egrid">${EMO[tab].map(e => `<button data-a="epick" data-e="${e}" data-t="${target}">${e}</button>`).join('')}</div>`;
}
function mediaBubble(md) {
  if (md.type === 'image') return `<img class="chatimg" data-mp="${esc(md.path)}" alt="Photo" data-a="mview" data-p="${esc(md.path)}">`;
  if (md.type === 'video') return `<video class="chatvid" data-mp="${esc(md.path)}" controls playsinline preload="metadata"></video>`;
  if (md.type === 'audio') return `<audio class="chataud" data-mp="${esc(md.path)}" controls preload="none"></audio>`;
  return `<button class="fileb" data-a="mfile" data-p="${esc(md.path)}" data-n="${esc(md.name || 'file')}"><span>📎</span><span class="fn"><b>${esc(md.name || 'File')}</b><small>${md.size ? fsize(md.size) : ''}</small></span></button>`;
}
async function forwardMsg(mid, to) {
  const m = msgById(mid); if (!m) throw new Error('missing');
  const row = { sender_id: S.user.id, receiver_id: to, body: m.t || '', forwarded: true };
  if (m.media) {
    const ext = m.media.path.split('.').pop() || 'bin', np = `${S.user.id}/${to}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error: ce } = await sb.storage.from('chat-media').copy(m.media.path, np); if (ce) throw ce;
    Object.assign(row, { media_path: np, media_type: m.media.type, media_name: m.media.name, media_size: m.media.size });
  }
  const { error } = await sb.from('messages').insert(row); if (error) throw error;
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
function bubble(x, t) {
  const cls = 'bub' + (x.me ? ' me' : '');
  if (x.del) return `<div class="${cls} del">Message deleted</div>`;
  const sm = !x.media && SHARE_RE.exec(x.t || '');
  let inner = '';
  if (x.reply) { const r = t && t.msgs.find(y => y.id === x.reply); inner += `<div class="quote">${r ? esc(msgPreview(r).slice(0, 120)) : 'Original message'}</div>`; }
  if (x.fwd) inner += '<div class="fwd">Forwarded</div>';
  if (x.media) inner += mediaBubble(x.media);
  if (sm) inner += `<button class="sharecardb" data-a="openshared" data-k="${sm[1].toLowerCase()}" data-id="${sm[2]}"><span><b>${shareLabel(sm[1])}</b><br><small>Tap to open</small></span></button>`;
  else if (x.t) inner += `<div class="bt">${fmtText(x.t)}</div>`;
  return `<div class="${cls}"${x.id ? ` data-a="mmenu" data-id="${x.id}"` : ''}>${inner}<small class="meta">${x.ed ? 'edited · ' : ''}${hm(x.at)}</small></div>`;
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
  const fw = kind === 'msg', gi = kind === 'group', gs = kind === 'post' || kind === 'video';
  sheet(`<h2>${fw ? 'Forward to' : gi ? 'Invite to group' : 'Share'}</h2>
    ${fw ? '' : `<button class="optrow" data-a="shext">${gi ? 'Share link outside KiHelp' : 'Share outside KiHelp'} ${I.share}</button>
    <div class="lbl" style="padding:14px 4px 6px">Send to someone on KiHelp</div>`}
    <input id="shq" placeholder="Search name or @username" maxlength="60" autocomplete="off">
    <div id="shl"><div class="ls" style="padding:12px 4px">Loading...</div></div>
    ${gs ? '<div class="lbl" style="padding:14px 4px 6px">Send to a group</div><div id="shg"><div class="ls" style="padding:8px 4px">Loading...</div></div>' : ''}`);
  try {
    const me = S.user.id;
    if (!S.ready.chat) await loadThreads().catch(() => {});
    const f = await sb.from('follows').select('following_id').eq('follower_id', me).limit(30);
    const ids = [...new Set([...S.threads.map(t => t.id), ...(f.data || []).map(x => x.following_id)])].filter(x => x !== me).slice(0, 40);
    await loadProfiles(ids); paintShareList(ids);
  } catch (e) { paintShareList([]); }
  if (gs) { try { if (!S.myGroups) await loadMyGroups(); paintShareGroups(); } catch (e) { const b = $('#shg'); if (b) b.innerHTML = '<div class="ls">Could not load your groups.</div>'; } }
}
function paintShareGroups() {
  const b = $('#shg'); if (!b) return;
  const list = (S.myGroups || []).filter(m => m.status === 'active');
  b.innerHTML = list.length ? list.map(m => `<div class="reqrow" style="padding-inline:0">${gav(m.g, 42)}<div class="tx"><b>${esc(m.g.name)}</b></div><button class="btn sm2" data-a="shgsend" data-id="${m.group_id}">Send</button></div>`).join('') : '<div class="ls" style="padding:8px 4px">You are not in any group yet.</div>';
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
  box.innerHTML = S.drafts.map((d, i) => `<div class="th">${d.type === 'video' ? `<video src="${d.prev}" muted playsinline preload="metadata"></video>` : `<img src="${d.prev}" alt="">`}${d.type === 'image' ? `<button class="thed" data-a="edth" data-id="${i}" aria-label="Edit photo">✎</button>` : ''}<button data-a="rmth" data-id="${i}" aria-label="Remove">${I.x}</button></div>`).join('');
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

/* ---------- stories, short-video strip, image editor ---------- */
const afterBg = () => { if (S.tab === 'home' && !$('#over').innerHTML) render(true); };
async function loadStories() {
  const { data, error } = await sb.from('stories').select('id,user_id,kind,media_url,text,bg,caption,poll_q,poll_a,poll_b,question,visibility,created_at,expires_at').gt('expires_at', new Date().toISOString()).order('created_at', { ascending: true }).limit(300);
  if (error) throw error;
  const items = (data || []).filter(s => s.kind === 'text' || safeUrl(s.media_url));
  const ids = items.map(s => s.id); let seen = new Set();
  if (ids.length) { const v = await sb.from('story_views').select('story_id').eq('user_id', S.user.id).in('story_id', ids); seen = new Set((v.data || []).map(x => x.story_id)); }
  await loadProfiles(items.map(s => s.user_id));
  const map = new Map();
  items.forEach(s => { if (!map.has(s.user_id)) map.set(s.user_id, { uid: s.user_id, items: [] }); map.get(s.user_id).items.push(Object.assign({}, s, { seen: seen.has(s.id) || s.user_id === S.user.id })); });
  const groups = [...map.values()].map(g => Object.assign(g, { unseen: g.items.some(i => !i.seen) }));
  const last = g => new Date(g.items[g.items.length - 1].created_at).getTime();
  S.stories = { mine: groups.find(g => g.uid === S.user.id) || null, others: groups.filter(g => g.uid !== S.user.id).sort((a, b) => (Number(b.unseen) - Number(a.unseen)) || (last(b) - last(a))) };
}
function storiesRow() {
  const st = S.stories, me = S.user.id;
  const add = `<button class="story" data-a="snew"><span class="ring add">${avOf(me, 56)}<i class="plusb">+</i></span>Add story</button>`;
  const mine = st.mine ? `<button class="story" data-a="sopen" data-id="${me}"><span class="ring">${avOf(me, 56)}</span>Your story</button>` : '';
  const others = st.others.map(g => `<button class="story" data-a="sopen" data-id="${g.uid}"><span class="ring ${g.unseen ? '' : 'seen'}">${avOf(g.uid, 56)}</span>${esc(nameOf(g.uid).split(' ')[0])}</button>`).join('');
  return `<div class="stories">${add}${mine}${others}</div>`;
}
function videoStrip() {
  if (!S.videos.length) return '';
  const cards = S.videos.slice(0, 10).map(v => `<button class="vcard" data-a="watch" data-id="${v.id}" aria-label="Watch video">${S.saver ? `<div class="ph" style="--h:${hue(v.id)};position:absolute;inset:0"></div>` : `<video src="${esc(v.url)}#t=0.1" muted playsinline preload="metadata"></video>`}<span class="vcn">${esc(nameOf(v.uid))}</span><span class="vcv">${v.views} views</span></button>`).join('');
  return `<div class="vstrip"><h3 class="sub">Short videos</h3><div class="vrail">${cards}</div></div>`;
}
const storyGroups = () => [S.stories.mine, ...S.stories.others].filter(Boolean);
function openStory(uid, from) {
  const seq = storyGroups(), gi = seq.findIndex(g => g.uid === uid); if (gi < 0) return;
  const first = seq[gi].items.findIndex(i => !i.seen);
  S.sv = { seq, gi, ii: from != null ? from : Math.max(0, first), elapsed: 0, dur: 5000, paused: false, held: false };
  $('#story').classList.add('open'); showStoryItem();
}
function pauseStory(on) { const v = S.sv; if (!v) return; v.paused = on; const m = $('#svv'); if (m) { if (on) m.pause(); else m.play().catch(() => {}); } }
function showStoryItem() {
  const v = S.sv; if (!v) return;
  const g = v.seq[v.gi], it = g && g.items[v.ii]; if (!it) return closeStory();
  clearInterval(v.timer); v.it = it; v.elapsed = 0; v.dur = 5000; v.paused = false;
  const mine = g.uid === S.user.id, name = nameOf(g.uid);
  if (!mine && !it.seen) { it.seen = true; sb.from('story_views').insert({ story_id: it.id, user_id: S.user.id }).then(() => {}); g.unseen = g.items.some(i => !i.seen); }
  const bars = g.items.map((_, i) => `<span class="spb"><i data-pb="${i}" style="width:${i < v.ii ? 100 : 0}%"></i></span>`).join('');
  const body = it.kind === 'text' ? `<div class="sv-text bg-${esc(it.bg || 'teal')}">${esc(it.text)}</div>` : it.kind === 'video' ? `<video id="svv" src="${esc(it.media_url)}" playsinline autoplay></video>` : `<img id="svi" src="${esc(it.media_url)}" alt="">`;
  $('#story').innerHTML = `<div class="sv-wrap">
    <div class="sv-bars">${bars}</div>
    <div class="sv-head"><button class="svu" data-a="suser" data-id="${g.uid}">${avOf(g.uid, 36)}<b>${esc(name)}</b><small>${ago(it.created_at)}</small></button><span style="flex:1"></span><button class="ibtn svb" data-a="smenu" aria-label="More">${I.more}</button><button class="ibtn svb" data-a="sclose" aria-label="Close">${I.x}</button></div>
    <div class="sv-body">${body}</div>
    <div class="sv-zone l" data-a="sprev"></div><div class="sv-zone r" data-a="snext"></div>
    ${it.caption ? `<div class="sv-cap">${esc(it.caption)}</div>` : ''}
    ${it.question ? `<div class="sv-q"><b>${esc(it.question)}</b>${mine ? '<small>Answers arrive in your messages</small>' : '<div class="sv-qa"><input id="sqa" maxlength="300" placeholder="Type your answer"><button class="btn sm2" data-a="sqsend">Send</button></div>'}</div>` : ''}
    ${it.poll_q ? '<div class="sv-poll" id="svpoll"></div>' : ''}
    <div class="sv-foot">${mine ? `<button class="sv-views" data-a="sviews">👁 <span id="svc">...</span> views</button>` : `<div class="sv-rx">${['❤️', '😂', '😮', '😢', '👏', '🔥'].map(e => `<button data-a="sreact" data-e="${e}">${e}</button>`).join('')}</div><div class="sv-reply"><input id="sri" maxlength="500" placeholder="Reply to ${esc(name)}..."><button class="send" data-a="srsend" aria-label="Send reply">${I.send}</button></div>`}</div></div>`;
  const vid = $('#svv'), img = $('#svi');
  if (vid) { vid.onloadedmetadata = () => { v.dur = Math.min(60000, Math.max(1500, vid.duration * 1000)); }; vid.onended = () => storyNext(); }
  if (img) img.onload = () => { v.elapsed = 0; };
  v.timer = setInterval(() => {
    if (S.sv !== v || v.paused) return;
    if (vid && vid.currentTime) v.elapsed = vid.currentTime * 1000; else v.elapsed += 50;
    const bar = document.querySelector(`[data-pb="${v.ii}"]`); if (bar) bar.style.width = Math.min(100, v.elapsed / v.dur * 100) + '%';
    if (v.elapsed >= v.dur) storyNext();
  }, 50);
  storyExtras(it);
}
function storyNext() {
  const v = S.sv; if (!v) return; const g = v.seq[v.gi];
  if (v.ii < g.items.length - 1) { v.ii++; showStoryItem(); }
  else if (v.gi < v.seq.length - 1) { v.gi++; v.ii = Math.max(0, v.seq[v.gi].items.findIndex(i => !i.seen)); showStoryItem(); }
  else closeStory();
}
function storyPrev() {
  const v = S.sv; if (!v) return;
  if (v.ii > 0) { v.ii--; showStoryItem(); } else if (v.gi > 0) { v.gi--; v.ii = v.seq[v.gi].items.length - 1; showStoryItem(); } else showStoryItem();
}
function closeStory() {
  const v = S.sv; if (v) clearInterval(v.timer); S.sv = null;
  const s = $('#story'); s.querySelectorAll('video').forEach(x => x.pause()); s.classList.remove('open'); s.innerHTML = ''; afterBg();
}
async function storyExtras(it) {
  try {
    if (it.poll_q) { const { data } = await sb.from('story_votes').select('choice,user_id').eq('story_id', it.id); it.votes = data || []; paintPoll(it); }
    if (it.user_id === S.user.id) { const { data } = await sb.from('story_views').select('user_id,created_at').eq('story_id', it.id).order('created_at', { ascending: false }); it.viewers = data || []; const c = $('#svc'); if (c && S.sv && S.sv.it === it) c.textContent = it.viewers.length; }
  } catch (e) {}
}
function paintPoll(it) {
  const box = $('#svpoll'); if (!box || !S.sv || S.sv.it !== it) return;
  const votes = it.votes || [], mv = votes.find(x => x.user_id === S.user.id), n1 = votes.filter(x => x.choice === 1).length, n2 = votes.filter(x => x.choice === 2).length, tot = n1 + n2;
  const show = mv || it.user_id === S.user.id, pc = n => tot ? Math.round(n / tot * 100) : 0;
  const opt = (c, label, n) => show ? `<div class="po r ${mv && mv.choice === c ? 'mine' : ''}"><i style="width:${pc(n)}%"></i><span>${esc(label)}</span><b>${pc(n)}%</b></div>` : `<button class="po" data-a="svote" data-c="${c}">${esc(label)}</button>`;
  box.innerHTML = `<div class="pq">${esc(it.poll_q)}</div>${opt(1, it.poll_a, n1)}${opt(2, it.poll_b, n2)}<small>${tot} vote${tot === 1 ? '' : 's'}</small>`;
}
async function storyDM(it, body) { const { error } = await sb.from('messages').insert({ sender_id: S.user.id, receiver_id: it.user_id, body }); return !error; }
document.addEventListener('pointerdown', e => {
  const z = e.target.closest('.sv-zone'); if (!z || !S.sv) return;
  S.sv.held = false; clearTimeout(S.sv.holdT);
  S.sv.holdT = setTimeout(() => { if (S.sv) { S.sv.held = true; pauseStory(true); } }, 220);
});
['pointerup', 'pointercancel'].forEach(ev => document.addEventListener(ev, () => { const v = S.sv; if (!v) return; clearTimeout(v.holdT); if (v.held) pauseStory(false); }));
document.addEventListener('focusin', e => { if (S.sv && (e.target.id === 'sri' || e.target.id === 'sqa')) pauseStory(true); });
document.addEventListener('focusout', e => { if (S.sv && (e.target.id === 'sri' || e.target.id === 'sqa')) pauseStory(false); });

/* story composer */
const BGS = ['teal', 'sunset', 'violet', 'night', 'forest', 'rose'];
function openStoryComposer() {
  S.sc = { kind: null, file: null, prev: null, text: '', bg: 'teal', caption: '', poll: null, qOn: false, question: '', vis: 'public' };
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="scback" aria-label="Back">${I.back}</button><b class="ttl">New story</b></header><div class="setbody" id="scbody"></div>
    <input type="file" id="scf" accept="image/*,video/mp4,video/webm,video/quicktime" hidden><input type="file" id="scc" accept="image/*" capture="environment" hidden></div>`;
  ['scf', 'scc'].forEach(k => { $('#' + k).onchange = e => { const f = e.target.files[0]; e.target.value = ''; if (f) storyPicked(f); }; });
  paintStoryComposer();
}
async function storyPicked(file) {
  const c = S.sc; if (!c) return;
  if (file.type.startsWith('video')) {
    if (file.size > MAXV) return toast('This video is over 50 MB');
    const prev = URL.createObjectURL(file), dur = await videoDuration(prev);
    if (isFinite(dur) && dur > 61) { URL.revokeObjectURL(prev); return toast('Story videos can be up to 60 seconds'); }
    if (c.prev) URL.revokeObjectURL(c.prev); Object.assign(c, { kind: 'video', file, prev });
  } else if (file.type.startsWith('image/')) {
    let f = file; if (file.type !== 'image/gif') f = (await editImage(file)) || file;
    if (c.prev) URL.revokeObjectURL(c.prev); Object.assign(c, { kind: 'photo', file: f, prev: URL.createObjectURL(f) });
  } else return toast('Choose a photo or video');
  paintStoryComposer();
}
function paintStoryComposer() {
  const c = S.sc, b = $('#scbody'); if (!c || !b) return;
  if (!c.kind) { b.innerHTML = `<div style="padding:16px;display:grid;gap:12px"><button class="btn" data-a="scpick" data-k="scf">📷 Photo or video</button><button class="btn alt" data-a="scpick" data-k="scc">📸 Take a photo</button><button class="btn alt" data-a="sctype">Aa Text story</button><div class="ls" style="text-align:center">Stories disappear after 24 hours.</div></div>`; return; }
  const prev = c.kind === 'text' ? `<div class="scprev sv-text bg-${c.bg}"><textarea id="sctext" maxlength="300" placeholder="Type your story">${esc(c.text)}</textarea></div>`
    : `<div class="scprev">${c.kind === 'video' ? `<video src="${c.prev}" controls playsinline muted></video>` : `<img src="${c.prev}" alt="">`}</div>`;
  b.innerHTML = `${prev}<div style="padding:0 16px 24px">
    ${c.kind === 'text' ? `<div class="dots" style="margin:8px 0 12px">${BGS.map(k => `<button class="dotb bg-${k} ${c.bg === k ? 'on' : ''}" data-a="scbg" data-id="${k}" aria-label="${k}"></button>`).join('')}</div>` : ''}
    ${c.kind === 'photo' ? `<button class="btn alt" style="margin:8px 0" data-a="sedit">Edit photo</button>` : ''}
    <div class="fld"><label for="sccap">Caption (optional)</label><input id="sccap" maxlength="200" value="${esc(c.caption)}"></div>
    <div class="fld"><label>Add to your story</label><div class="dots"><button class="chip ${c.poll ? 'on' : ''}" data-a="scpoll">Poll</button><button class="chip ${c.qOn ? 'on' : ''}" data-a="scq">Question</button></div></div>
    ${c.poll ? `<div class="fld"><input id="spq" maxlength="100" placeholder="Poll question" value="${esc(c.poll.q)}"><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px"><input id="spa" maxlength="40" placeholder="Option 1" value="${esc(c.poll.a)}"><input id="spb" maxlength="40" placeholder="Option 2" value="${esc(c.poll.b)}"></div></div>` : ''}
    ${c.qOn ? `<div class="fld"><input id="sqq" maxlength="100" placeholder="Ask your friends a question" value="${esc(c.question)}"></div>` : ''}
    <div class="fld"><label>Who can see it?</label><div class="seg">${[['public', 'Public'], ['friends', 'Friends']].map(([k, l]) => `<button class="${c.vis === k ? 'on' : ''}" data-a="scvis" data-id="${k}">${l}</button>`).join('')}</div></div>
    <button class="btn" id="scgo" data-a="sgo">Share story</button></div>`;
}
document.addEventListener('input', e => {
  const c = S.sc; if (!c) return; const id = e.target.id, v = e.target.value;
  if (id === 'sctext') c.text = v; else if (id === 'sccap') c.caption = v; else if (id === 'sqq') c.question = v;
  else if (c.poll && id === 'spq') c.poll.q = v; else if (c.poll && id === 'spa') c.poll.a = v; else if (c.poll && id === 'spb') c.poll.b = v;
});
async function publishStory() {
  const c = S.sc; if (!c || !c.kind) return;
  if (c.kind === 'text' && !c.text.trim()) return toast('Write something first');
  const poll = c.poll && c.poll.q.trim() && c.poll.a.trim() && c.poll.b.trim() ? c.poll : null;
  if (c.poll && !poll) return toast('Fill in the poll question and both options, or remove the poll');
  busy('#scgo', true, c.kind === 'text' ? '...' : 'Uploading...');
  let url = null;
  if (c.kind !== 'text') { try { url = (await uploadMedia(c.file)).url; } catch (e) { busy('#scgo', false, 'Share story'); return toast(upErr(e)); } }
  const row = { user_id: S.user.id, kind: c.kind, media_url: url, text: c.kind === 'text' ? c.text.trim() : null, bg: c.kind === 'text' ? c.bg : null, caption: c.caption.trim() || null, visibility: c.vis };
  if (poll) Object.assign(row, { poll_q: poll.q.trim(), poll_a: poll.a.trim(), poll_b: poll.b.trim() });
  if (c.qOn && c.question.trim()) row.question = c.question.trim();
  const { error } = await sb.from('stories').insert(row);
  if (error) { busy('#scgo', false, 'Share story'); return toast('Could not share your story'); }
  if (c.prev) URL.revokeObjectURL(c.prev); S.sc = null; $('#over').innerHTML = '';
  try { await loadStories(); } catch (e) {} render(true); toast('Story shared');
}

/* image editor: crop, rotate, filters, brightness and contrast */
function pix(d, p) {
  const b = p.b || 1, c = p.c || 1, s = p.s == null ? 1 : p.s, g = p.gray || 0, se = p.sepia || 0, t = p.tint || [1, 1, 1];
  for (let i = 0; i < d.length; i += 4) {
    let r = d[i], gg = d[i + 1], bl = d[i + 2];
    if (se) { const tr2 = .393 * r + .769 * gg + .189 * bl, tg = .349 * r + .686 * gg + .168 * bl, tb = .272 * r + .534 * gg + .131 * bl; r += (tr2 - r) * se; gg += (tg - gg) * se; bl += (tb - bl) * se; }
    if (g) { const l = .299 * r + .587 * gg + .114 * bl; r += (l - r) * g; gg += (l - gg) * g; bl += (l - bl) * g; }
    if (s !== 1) { const l2 = .299 * r + .587 * gg + .114 * bl; r = l2 + (r - l2) * s; gg = l2 + (gg - l2) * s; bl = l2 + (bl - l2) * s; }
    r *= t[0] * b; gg *= t[1] * b; bl *= t[2] * b;
    d[i] = (r - 128) * c + 128; d[i + 1] = (gg - 128) * c + 128; d[i + 2] = (bl - 128) * c + 128;
  }
}
function editImage(file, opts) {
  opts = opts || {};
  return new Promise(async resolve => {
    let bmp; try { bmp = await createImageBitmap(file); } catch (e) { return resolve(null); }
    const st = { rot: 0, flip: false, ratio: opts.ratio || 'orig', filter: 'none', bri: 100, con: 100, zoom: 100 };
    const FL = { none: ['Normal', {}], mono: ['B&W', { gray: 1 }], warm: ['Warm', { sepia: .25, s: 1.2, tint: [1.04, 1, .94] }], cool: ['Cool', { s: 1.1, tint: [.95, 1, 1.06] }], vivid: ['Vivid', { s: 1.5, c: 1.1 }], fade: ['Fade', { c: .85, b: 1.08, s: .8 }] };
    const ratios = opts.ratio ? [[opts.ratio, 'Crop ' + opts.ratio]] : [['orig', 'Original'], ['1:1', 'Square'], ['4:5', '4:5'], ['9:16', 'Story'], ['16:9', 'Wide']];
    const ov = document.createElement('div'); ov.className = 'imged';
    ov.innerHTML = `<div class="ie-top"><button class="ie-b" data-ie="cancel">Skip</button><b>Edit photo</b><button class="ie-b pri" data-ie="done">Done</button></div>
      <div class="ie-stage"><canvas id="iec"></canvas></div>
      <div class="ie-tools">
        <div class="ie-row">${ratios.map(([k, l]) => `<button class="ie-c ${st.ratio === k ? 'on' : ''}" data-ie="ratio" data-v="${k}">${l}</button>`).join('')}<button class="ie-c" data-ie="rot">Rotate</button><button class="ie-c" data-ie="flip">Flip</button></div>
        <div class="ie-row">${Object.entries(FL).map(([k, a]) => `<button class="ie-c ${st.filter === k ? 'on' : ''}" data-ie="filter" data-v="${k}">${a[0]}</button>`).join('')}</div>
        <label class="ie-l">Zoom <input type="range" min="100" max="250" value="100" data-ie="zoom"></label>
        <label class="ie-l">Brightness <input type="range" min="50" max="150" value="100" data-ie="bri"></label>
        <label class="ie-l">Contrast <input type="range" min="50" max="150" value="100" data-ie="con"></label>
      </div>`;
    $('#app').appendChild(ov);
    const renderTo = (cv, maxSide) => {
      const odd = st.rot % 2 === 1, sw = odd ? bmp.height : bmp.width, sh = odd ? bmp.width : bmp.height;
      let rw = sw, rh = sh;
      if (st.ratio !== 'orig') { const [a, b] = st.ratio.split(':').map(Number), r = a / b; if (sw / sh > r) { rh = sh; rw = sh * r; } else { rw = sw; rh = sw / r; } }
      const z = st.zoom / 100, cw = rw / z, ch = rh / z, sc = Math.min(1, maxSide / Math.max(cw, ch));
      cv.width = Math.max(1, Math.round(cw * sc)); cv.height = Math.max(1, Math.round(ch * sc));
      const ctx = cv.getContext('2d');
      ctx.save(); ctx.translate(cv.width / 2, cv.height / 2); ctx.rotate(st.rot * Math.PI / 2); if (st.flip) ctx.scale(-1, 1);
      ctx.drawImage(bmp, -bmp.width * sc / 2, -bmp.height * sc / 2, bmp.width * sc, bmp.height * sc); ctx.restore();
      if (st.filter !== 'none' || st.bri !== 100 || st.con !== 100) {
        const p = Object.assign({}, FL[st.filter][1]); p.b = (p.b || 1) * st.bri / 100; p.c = (p.c || 1) * st.con / 100;
        const d = ctx.getImageData(0, 0, cv.width, cv.height); pix(d.data, p); ctx.putImageData(d, 0, 0);
      }
    };
    const redraw = () => renderTo($('#iec'), 900);
    ov.addEventListener('click', e => {
      const t = e.target.closest('[data-ie]'); if (!t || t.tagName === 'INPUT') return;
      const k = t.dataset.ie;
      if (k === 'cancel') { ov.remove(); resolve(null); return; }
      if (k === 'done') { const cv = document.createElement('canvas'); renderTo(cv, 1600); cv.toBlob(b => { ov.remove(); resolve(b ? new File([b], 'edited.jpg', { type: 'image/jpeg' }) : null); }, 'image/jpeg', 0.9); return; }
      if (k === 'rot') st.rot = (st.rot + 1) % 4; else if (k === 'flip') st.flip = !st.flip;
      else if (k === 'ratio') { st.ratio = t.dataset.v; ov.querySelectorAll('[data-ie=ratio]').forEach(x => x.classList.toggle('on', x === t)); }
      else if (k === 'filter') { st.filter = t.dataset.v; ov.querySelectorAll('[data-ie=filter]').forEach(x => x.classList.toggle('on', x === t)); }
      redraw();
    });
    ov.addEventListener('input', e => { const t = e.target; if (!t.dataset || !t.dataset.ie) return; st[t.dataset.ie] = +t.value; redraw(); });
    redraw();
  });
}

/* ---------- groups and events ---------- */
const quickRow = () => `<div class="quick"><button class="chip" data-a="groups">👥 Groups</button><button class="chip" data-a="events">📅 Events</button></div>`;
const gav = (g, size) => av(g.name, g.id, size, safeUrl(g.avatar_url));
const privIcon = p => `<span class="vis" title="${p === 'private' ? 'Private' : 'Public'}">${p === 'private' ? I.lock : I.globe}</span>`;
const GCOLS = 'id,name,description,avatar_url,privacy,owner_id,created_at';
const roleLabel = r => r === 'owner' ? 'Owner' : r === 'admin' ? 'Admin' : '';
const EVS = { going: 'Going', maybe: 'Maybe', no: "Can't go" };
const fmtWhen = (s, e) => {
  const a = new Date(s), o = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }; let t = a.toLocaleString([], o);
  if (e) { const b = new Date(e); t += a.toDateString() === b.toDateString() ? ' - ' + b.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ' - ' + b.toLocaleString([], o); }
  return t;
};
const eventRow = ev => `<button class="evrow" data-a="eopen" data-id="${ev.id}"><span class="evd"><b>${new Date(ev.starts_at).getDate()}</b><small>${esc(new Date(ev.starts_at).toLocaleString([], { month: 'short' }))}</small></span><span class="tx"><b>${esc(ev.title)}</b><span class="l">${esc(fmtWhen(ev.starts_at, ev.ends_at))}${ev.location ? ' · ' + esc(ev.location) : ''}</span>${ev.gname ? `<span class="l">${esc(ev.gname)}</span>` : ''}</span>${ev.mine ? `<span class="pbadge">${EVS[ev.mine] || ''}</span>` : ''}</button>`;
const groupRow = (g, m) => `<button class="thread" data-a="gopen" data-id="${g.id}">${gav(g, 52)}<span class="tx"><b>${esc(g.name)} ${privIcon(g.privacy)}</b><span class="l">${m ? (m.status === 'pending' ? 'Request sent' : roleLabel(m.role) || 'Member') : esc(g.description || (g.privacy === 'private' ? 'Private group' : 'Public group'))}</span></span></button>`;

async function loadMyGroups() {
  const { data, error } = await sb.from('group_members').select('group_id,role,status').eq('user_id', S.user.id);
  if (error) throw error;
  const ids = (data || []).map(x => x.group_id); let groups = [];
  if (ids.length) { const r = await sb.from('groups').select(GCOLS).in('id', ids); groups = r.data || []; }
  S.myGroups = (data || []).map(m => Object.assign({}, m, { g: groups.find(x => x.id === m.group_id) })).filter(x => x.g);
}
async function openGroups(tab) {
  if (tab) S.gtab = tab;
  clearInterval(S.gpoll); S.g = null; S.prof = null; clearInterval(S.poll); S.openThread = null;
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">Groups</b><span style="flex:1"></span><button class="hbtn" data-a="gnew">${I.plus}New</button></header>
    <div style="padding:10px 16px 0"><div class="seg">${[['mine', 'My groups'], ['find', 'Discover']].map(([k, l]) => `<button class="${S.gtab === k ? 'on' : ''}" data-a="gtab0" data-id="${k}">${l}</button>`).join('')}</div></div>
    <div style="padding:10px 16px 0" ${S.gtab === 'find' ? '' : 'hidden'}><input id="gq" type="search" placeholder="Search groups" maxlength="40" value="${esc(S.gq)}"></div>
    <div class="setbody" id="glist"><div class="empty" style="padding:40px">Loading...</div></div></div>`;
  await paintGroupsList();
}
async function paintGroupsList() {
  const box = $('#glist'); if (!box) return;
  try {
    if (S.gtab === 'mine') {
      await loadMyGroups();
      const rows = S.myGroups.slice().sort((a, b) => a.g.name.localeCompare(b.g.name));
      box.innerHTML = rows.length ? rows.map(m => groupRow(m.g, m)).join('') : '<div class="empty" style="padding:50px 24px">You are not in any group yet.<br>Tap <b>New</b> to create one, or open <b>Discover</b>.</div>';
    } else {
      const q = (S.gq || '').replace(/[%_\\,()*]/g, '').trim();
      let req = sb.from('groups').select(GCOLS).order('created_at', { ascending: false }).limit(40);
      if (q) req = req.ilike('name', '%' + q + '%');
      const { data, error } = await req; if (error) throw error;
      await loadMyGroups(); const mine = new Set(S.myGroups.map(m => m.group_id));
      const rows = (data || []).filter(g => !mine.has(g.id));
      box.innerHTML = rows.length ? rows.map(g => groupRow(g, null)).join('') : '<div class="empty" style="padding:50px 24px">No groups found.</div>';
    }
  } catch (e) { box.innerHTML = '<div class="empty" style="padding:40px">Could not load groups.</div>'; }
}
let gaT;
document.addEventListener('input', e => {
  if (e.target.id !== 'gaq') return;
  clearTimeout(gaT); const q = e.target.value.trim();
  gaT = setTimeout(async () => {
    const box = $('#gal'); if (!box) return;
    if (q.length < 2) { box.innerHTML = '<div class="ls" style="padding:12px 4px">Type at least 2 characters.</div>'; return; }
    const { data } = await sb.rpc('search_people', { q });
    if (!$('#gaq') || $('#gaq').value.trim() !== q) return;
    const have = new Set((S.g ? S.g.members : []).map(m => m.user_id)), list = (data || []).filter(p => p.id !== S.user.id && !have.has(p.id));
    list.forEach(p => { S.pf[p.id] = Object.assign({}, S.pf[p.id], p); });
    box.innerHTML = list.length ? list.map(p => `<div class="reqrow" style="padding-inline:0">${avOf(p.id, 42)}<div class="tx"><b>${esc(p.display_name || 'Member')}</b>${p.username ? `<div class="ls">@${esc(p.username)}</div>` : ''}</div><button class="btn sm2" data-a="gaddp" data-id="${p.id}">Add</button></div>`).join('') : '<div class="ls" style="padding:12px 4px">No one found.</div>';
  }, 350);
});
let gqT;
document.addEventListener('input', e => { if (e.target.id === 'gq') { S.gq = e.target.value; clearTimeout(gqT); gqT = setTimeout(paintGroupsList, 300); } });

async function openGroup(gid, from) {
  closeSheet(); clearInterval(S.poll); S.openThread = null; S.prof = null; clearInterval(S.gpoll);
  S.g = { id: gid, from: from || null, tab: 'chat', row: null, me: null, members: [], pend: [], events: [], msgs: [], loading: true };
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="gback" aria-label="Back">${I.back}</button><b class="ttl">Group</b><span style="flex:1"></span><button class="ibtn" data-a="gmenu" aria-label="More options">${I.more}</button></header><div class="gbody" id="gbody"></div></div>`;
  paintGroup(); await loadGroup(gid);
}
async function loadGroup(gid) {
  const G = S.g; if (!G || G.id !== gid) return; const me = S.user.id;
  try {
    const { data: g, error } = await sb.from('groups').select(GCOLS).eq('id', gid).maybeSingle();
    if (error || !g) { const b = $('#gbody'); if (b) b.innerHTML = '<div class="empty" style="padding:60px 24px">This group is not available.</div>'; return; }
    const [mr, mem, ev] = await Promise.all([
      sb.from('group_members').select('role,status').eq('group_id', gid).eq('user_id', me).maybeSingle(),
      sb.from('group_members').select('user_id,role,status,joined_at').eq('group_id', gid).order('joined_at', { ascending: true }).limit(500),
      sb.from('events').select('id,title,location,starts_at,ends_at,canceled_at,creator_id,group_id').eq('group_id', gid).is('canceled_at', null).order('starts_at', { ascending: true }).limit(50)
    ]);
    if (S.g !== G) return;
    const rows = mem.data || [];
    Object.assign(G, { row: g, me: mr.data || null, members: rows.filter(x => x.status === 'active'), pend: rows.filter(x => x.status === 'pending'), events: ev.data || [], loading: false });
    await loadProfiles([g.owner_id, ...rows.map(x => x.user_id)]);
    const active = G.me && G.me.status === 'active';
    if (!active && G.tab === 'chat') G.tab = 'about';
  } catch (e) { toast('Could not load this group'); G.loading = false; }
  paintGroup();
}
function paintGroup() {
  const G = S.g, b = $('#gbody'); if (!G || !b) return;
  if (G.loading || !G.row) { b.innerHTML = '<div class="empty" style="padding:50px">Loading...</div>'; return; }
  const g = G.row, me = G.me, active = !!(me && me.status === 'active'), pend = !!(me && me.status === 'pending'), admin = active && (me.role === 'owner' || me.role === 'admin');
  const seeMore = active || g.privacy === 'public';
  const action = active ? '<button class="btn alt sm2" data-a="gmenu">Joined</button>' : pend ? '<button class="btn alt sm2" data-a="gcancel">Request sent</button>' : `<button class="btn sm2" data-a="gjoin">${g.privacy === 'public' ? 'Join' : 'Request to join'}</button>`;
  const tabs = [['chat', 'Chat', active], ['members', 'Members', seeMore], ['events', 'Events', seeMore], ['about', 'About', true]].filter(t => t[2]);
  if (!tabs.some(t => t[0] === G.tab)) G.tab = tabs[0][0];
  b.innerHTML = `<div class="ghead"><div class="grow">${gav(g, 52)}<div class="tx"><b>${esc(g.name)}</b><div class="ls">${privIcon(g.privacy)} ${g.privacy === 'private' ? 'Private' : 'Public'} group${seeMore ? ' · ' + G.members.length + ' member' + (G.members.length === 1 ? '' : 's') : ''}</div></div>${action}</div>
    <div class="gtabs">${tabs.map(([k, l]) => `<button class="${G.tab === k ? 'on' : ''}" data-a="gtab" data-id="${k}">${l}${k === 'members' && admin && G.pend.length ? `<i class="gbadge">${G.pend.length}</i>` : ''}</button>`).join('')}</div></div>
    <div class="gtab" id="gtab"></div>`;
  paintGroupTab();
}
function paintGroupTab() {
  const G = S.g, t = $('#gtab'); if (!G || !t) return;
  const g = G.row, me = G.me, active = !!(me && me.status === 'active'), owner = active && me.role === 'owner', admin = active && (owner || me.role === 'admin');
  if (G.tab !== 'chat') clearInterval(S.gpoll);
  if (G.tab === 'chat') {
    t.innerHTML = `<div class="msgs" id="gmsgs"></div><div id="gemop" class="emop" hidden></div><div class="compose"><input id="gi" placeholder="Message the group" maxlength="1000" autocomplete="off"><button class="ibtn" data-a="emo" data-t="#gi" data-p="#gemop" aria-label="Emoji">😊</button><button class="send" data-a="gsend" aria-label="Send">${I.send}</button></div>`;
    paintGroupMsgs(); loadGroupMsgs();
    clearInterval(S.gpoll); S.gpoll = setInterval(() => { if (!$('#gmsgs')) { clearInterval(S.gpoll); return; } if (S.g && S.g.tab === 'chat') loadGroupMsgs(); }, 4000);
  } else if (G.tab === 'members') {
    const sp = id => S.pf[id] && S.pf[id].username ? '@' + esc(S.pf[id].username) : '';
    const reqs = admin && G.pend.length ? `<h3 class="sub">Join requests</h3>${G.pend.map(m => `<div class="reqrow"><button data-a="user" data-id="${m.user_id}" aria-label="View profile">${avOf(m.user_id, 46)}</button><div class="tx"><b>${esc(nameOf(m.user_id))}</b><div class="ls">wants to join</div></div><button class="btn sm2" data-a="gappr" data-id="${m.user_id}">Approve</button><button class="btn alt sm2" data-a="gdecl" data-id="${m.user_id}">Decline</button></div>`).join('')}` : '';
    const list = G.members.slice().sort((a, b) => ({ owner: 0, admin: 1, member: 2 }[a.role] - { owner: 0, admin: 1, member: 2 }[b.role]));
    t.innerHTML = `<div style="padding:10px 16px;display:grid;grid-template-columns:${admin ? '1fr 1fr' : '1fr'};gap:10px">${admin ? '<button class="btn alt" data-a="gadd">Add people</button>' : ''}<button class="btn alt" data-a="ginvite">Invite friends</button></div>${reqs}<h3 class="sub">Members</h3>${list.map(m => `<button class="thread" data-a="gmem" data-id="${m.user_id}">${avOf(m.user_id, 46)}<span class="tx"><b>${esc(nameOf(m.user_id))}</b><span class="l">${sp(m.user_id)}${sp(m.user_id) && roleLabel(m.role) ? ' · ' : ''}${roleLabel(m.role)}</span></span></button>`).join('')}`;
  } else if (G.tab === 'events') {
    const evs = G.events.map(e => eventRow(e)).join('');
    t.innerHTML = `${active ? '<div style="padding:10px 16px"><button class="btn alt" data-a="genew">New event</button></div>' : ''}${evs || '<div class="empty" style="padding:40px 24px">No upcoming events.</div>'}`;
  } else {
    t.innerHTML = `<div class="about"><h3 class="sub" style="padding:0 0 6px">About</h3><p style="white-space:pre-wrap">${esc(g.description || 'No description yet.')}</p>
      <p class="ls" style="margin-top:12px">${g.privacy === 'private' ? 'Private group. People need approval to join, and only members can read the chat.' : 'Public group. Anyone can join. Only members can read the chat.'}</p>
      <p class="ls" style="margin-top:8px">Created ${esc(new Date(g.created_at).toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }))} · Owner: ${esc(nameOf(g.owner_id))}</p></div>`;
  }
}
async function loadGroupMsgs() {
  const G = S.g; if (!G) return;
  const { data, error } = await sb.from('group_messages').select('id,sender_id,body,created_at,edited_at,deleted_at').eq('group_id', G.id).order('created_at', { ascending: true }).limit(200);
  if (error || !S.g || S.g.id !== G.id) return;
  await loadProfiles(data.map(m => m.sender_id));
  const msgs = data.map(m => ({ id: m.id, uid: m.sender_id, t: m.deleted_at ? '' : m.body, at: m.created_at, ed: !!m.edited_at, del: !!m.deleted_at }));
  const sig = a => a.map(m => m.id + (m.ed ? 'e' : '') + (m.del ? 'd' : '')).join(',');
  if (sig(msgs) !== sig(G.msgs.filter(m => m.id))) { G.msgs = msgs; paintGroupMsgs(); }
}
function gbubble(m) {
  const mine = m.uid === S.user.id, cls = 'bub' + (mine ? ' me' : '');
  if (m.del) return `<div class="${cls} del">Message deleted</div>`;
  const sm = SHARE_RE.exec(m.t || '');
  const body = sm ? `<button class="sharecardb" data-a="openshared" data-k="${sm[1].toLowerCase()}" data-id="${sm[2]}"><span><b>${shareLabel(sm[1])}</b><br><small>Tap to open</small></span></button>` : `<div class="bt">${fmtText(m.t)}</div>`;
  return `<div class="${cls}"${m.id ? ` data-a="gmmenu" data-id="${m.id}"` : ''}>${mine ? '' : `<div class="gn">${esc(nameOf(m.uid))}</div>`}${body}<small class="meta">${m.ed ? 'edited · ' : ''}${hm(m.at)}</small></div>`;
}
function paintGroupMsgs() {
  const el = $('#gmsgs'), G = S.g; if (!el || !G) return;
  const stick = !el.dataset.init || el.scrollHeight - el.scrollTop - el.clientHeight < 140;
  el.innerHTML = G.msgs.length ? G.msgs.map(gbubble).join('') : '<div class="empty">No messages yet. Say hello.</div>';
  if (stick) el.scrollTop = el.scrollHeight; el.dataset.init = '1';
}
const refreshGroupViews = () => { if (S.g && $('#gtab')) loadGroup(S.g.id); };

/* events */
async function loadEventsHub() {
  const since = new Date(Date.now() - 86400000).toISOString();
  const { data, error } = await sb.from('events').select('id,title,location,starts_at,ends_at,group_id,creator_id,canceled_at').is('canceled_at', null).gte('starts_at', since).order('starts_at', { ascending: true }).limit(60);
  if (error) throw error;
  const rows = data || [], ids = rows.map(e => e.id), gids = [...new Set(rows.map(e => e.group_id).filter(Boolean))];
  const rs = ids.length ? await sb.from('event_rsvps').select('event_id,user_id,status').in('event_id', ids) : { data: [] };
  const gs = gids.length ? await sb.from('groups').select('id,name').in('id', gids) : { data: [] };
  const gm = Object.fromEntries((gs.data || []).map(g => [g.id, g.name]));
  return rows.map(e => { const r = (rs.data || []).filter(x => x.event_id === e.id), mine = r.find(x => x.user_id === S.user.id); return Object.assign({}, e, { gname: gm[e.group_id] || null, going: r.filter(x => x.status === 'going').length, mine: mine ? mine.status : null }); });
}
async function openEvents() {
  clearInterval(S.gpoll); S.g = null; S.prof = null; clearInterval(S.poll); S.openThread = null;
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">Events</b><span style="flex:1"></span><button class="hbtn" data-a="enew">${I.plus}New</button></header>
    <div class="chips" id="evchips"></div><div class="setbody" id="evlist"><div class="empty" style="padding:40px">Loading...</div></div></div>`;
  if (!S.myGroups) await loadMyGroups().catch(() => {});
  try { S.evs = await loadEventsHub(); } catch (e) { S.evs = []; toast('Could not load events'); }
  paintEventsList();
}
function paintEventsList() {
  const box = $('#evlist'); if (!box) return;
  $('#evchips').innerHTML = [['all', 'Upcoming'], ['going', 'Going'], ['groups', 'My groups']].map(([k, l]) => `<button class="chip ${S.evf === k ? 'on' : ''}" data-a="evf" data-id="${k}">${l}</button>`).join('');
  const myg = new Set((S.myGroups || []).filter(m => m.status === 'active').map(m => m.group_id));
  const list = S.evs.filter(e => S.evf === 'going' ? e.mine === 'going' : S.evf === 'groups' ? (e.group_id && myg.has(e.group_id)) : true);
  box.innerHTML = list.length ? list.map(eventRow).join('') : '<div class="empty" style="padding:50px 24px">No events here yet.<br>Tap <b>New</b> to create one.</div>';
}
const refreshEventViews = async () => {
  if ($('#evlist')) { try { S.evs = await loadEventsHub(); } catch (e) {} paintEventsList(); }
  if (S.g && $('#gtab')) loadGroup(S.g.id);
};
async function openEvent(id) {
  const { data: e } = await sb.from('events').select('id,title,description,location,starts_at,ends_at,group_id,creator_id,canceled_at').eq('id', id).maybeSingle();
  if (!e) return toast('This event is not available');
  if (!S.myGroups) await loadMyGroups().catch(() => {});
  const [rs, g] = await Promise.all([sb.from('event_rsvps').select('user_id,status').eq('event_id', id), e.group_id ? sb.from('groups').select('id,name').eq('id', e.group_id).maybeSingle() : Promise.resolve({ data: null })]);
  const r = rs.data || [], going = r.filter(x => x.status === 'going'), maybe = r.filter(x => x.status === 'maybe'), mine = (r.find(x => x.user_id === S.user.id) || {}).status || null;
  await loadProfiles([e.creator_id, ...going.slice(0, 20).map(x => x.user_id)]);
  const mr = (S.myGroups || []).find(m => m.group_id === e.group_id && m.status === 'active');
  const canEdit = e.creator_id === S.user.id || !!(mr && (mr.role === 'owner' || mr.role === 'admin'));
  sheet(`<h2>${esc(e.title)}</h2>
    ${e.canceled_at ? '<div class="note">This event was canceled.</div>' : ''}
    <div class="ls" style="font-size:15px">📅 ${esc(fmtWhen(e.starts_at, e.ends_at))}</div>
    ${e.location ? `<div class="ls" style="font-size:15px">📍 ${esc(e.location)}</div>` : ''}
    <div class="ls" style="margin-top:4px">Hosted by ${esc(nameOf(e.creator_id))} · ${g.data ? esc(g.data.name) : 'Public event'}</div>
    ${e.description ? `<p style="white-space:pre-wrap;margin:12px 0">${esc(e.description)}</p>` : ''}
    <div class="seg c3" style="margin-top:12px">${Object.entries(EVS).map(([k, l]) => `<button class="${mine === k ? 'on' : ''}" data-a="rsvp" data-id="${e.id}" data-s="${k}">${l}</button>`).join('')}</div>
    <div class="ls" style="margin:8px 0">${going.length} going · ${maybe.length} maybe</div>
    ${going.length ? `<div class="ls">${going.slice(0, 20).map(x => esc(nameOf(x.user_id))).join(', ')}${going.length > 20 ? '...' : ''}</div>` : ''}
    ${canEdit ? `<div class="row2" style="grid-template-columns:1fr 1fr"><button class="btn alt" data-a="eedit" data-id="${e.id}">Edit</button><button class="btn alt" data-a="ecancel" data-id="${e.id}" data-c="${e.canceled_at ? '' : '1'}">${e.canceled_at ? 'Restore' : 'Cancel event'}</button></div><button class="optrow red" data-a="edel" data-id="${e.id}">Delete event</button>` : ''}`);
  S.ev = e;
}
async function eventForm(gid, ev) {
  if (!S.myGroups) await loadMyGroups().catch(() => {});
  const groups = (S.myGroups || []).filter(m => m.status === 'active');
  S.evEdit = ev ? ev.id : null;
  const def = new Date(Date.now() + 86400000); def.setMinutes(0, 0, 0);
  const li = d => { const p = n => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`; };
  sheet(`<h2>${ev ? 'Edit event' : 'New event'}</h2>
    <div class="fld"><label for="evt">Title</label><input id="evt" maxlength="100" value="${esc(ev ? ev.title : '')}" placeholder="e.g. Market day meetup"></div>
    <div class="fld"><label for="evs">Starts</label><input id="evs" type="datetime-local" value="${li(ev ? new Date(ev.starts_at) : def)}"></div>
    <div class="fld"><label for="eve">Ends (optional)</label><input id="eve" type="datetime-local" value="${ev && ev.ends_at ? li(new Date(ev.ends_at)) : ''}"></div>
    <div class="fld"><label for="evl">Place</label><input id="evl" maxlength="120" value="${esc(ev ? ev.location || '' : '')}" placeholder="Address or online link"></div>
    <div class="fld"><label for="evd">Details</label><textarea id="evd" maxlength="1000">${esc(ev ? ev.description || '' : '')}</textarea></div>
    ${ev ? '' : `<div class="fld"><label for="evg">Who can see it?</label><select id="evg"><option value="">Public event (everyone)</option>${groups.map(m => `<option value="${m.group_id}" ${gid === m.group_id ? 'selected' : ''}>${esc(m.g.name)}</option>`).join('')}</select></div>`}
    <button class="btn" id="evbtn" data-a="esave">${ev ? 'Save changes' : 'Create event'}</button>`);
}
async function groupDecide(gid, uid, ok) {
  const { error } = ok ? await sb.rpc('approve_member', { gid, target: uid }) : await sb.rpc('remove_member', { gid, target: uid });
  if (error) return toast('Could not update');
  S.greqs = S.greqs.filter(x => !(x.gid === gid && x.uid === uid));
  if (S.g && S.g.id === gid) loadGroup(gid); else if (S.tab === 'alerts' && !$('#over').innerHTML) render(true);
  toast(ok ? 'Approved' : 'Declined');
}
function groupForm(g) {
  S.gdraftPriv = g ? g.privacy : 'public';
  sheet(`<h2>${g ? 'Edit group' : 'New group'}</h2>
    <div class="fld">${uploadField('image/*', g ? 'Change group photo' : 'Add a group photo (optional)')}</div>
    <div class="fld"><label for="gnn">Group name</label><input id="gnn" maxlength="60" value="${esc(g ? g.name : '')}" placeholder="e.g. Addis Sellers"></div>
    <div class="fld"><label for="gnd">Description</label><textarea id="gnd" maxlength="300" placeholder="What is this group about?">${esc(g ? g.description || '' : '')}</textarea></div>
    <div class="fld"><label>Privacy</label><div class="seg" id="gps"><button data-a="gpriv" data-id="public" class="${S.gdraftPriv === 'public' ? 'on' : ''}">Public</button><button data-a="gpriv" data-id="private" class="${S.gdraftPriv === 'private' ? 'on' : ''}">Private</button></div>
    <div class="ls" id="gpd" style="margin-top:6px">${S.gdraftPriv === 'private' ? 'People must ask to join and an admin approves them.' : 'Anyone can find and join this group.'}</div></div>
    <button class="btn" id="gnbtn" data-a="${g ? 'gsave' : 'gcreate'}">${g ? 'Save changes' : 'Create group'}</button>`);
  bindUpload({ edit: true, ratio: '1:1' });
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
    ${isStandalone() ? '' : `<h3 class="sub">App</h3>
    <div class="srow"><button class="lbl" data-a="install" style="flex:1">Install KiHelp on this device</button></div>`}
    <h3 class="sub">People</h3>
    <div class="srow"><button class="lbl" data-a="invite" style="flex:1">Invite friends</button></div>
    <div class="srow"><button class="lbl" data-a="blocked" style="flex:1">Blocked users</button></div>
    <h3 class="sub">${tr('account')}</h3>
    <div class="srow"><div class="ls">${esc(S.user ? S.user.email : '')}</div></div>
    <div class="srow"><button class="lbl" data-a="accounts" style="flex:1">Switch or add account</button></div>
    <div class="srow"><button class="lbl" data-a="logout" style="color:var(--coral)">${tr('logout')}</button></div>
    <div class="srow"><button class="lbl" data-a="delacct" style="color:var(--coral)">Delete my account</button></div>
    <h3 class="sub">About</h3>
    <div class="srow"><button class="lbl" data-a="legal" data-id="terms" style="flex:1">Terms of Use</button></div>
    <div class="srow"><button class="lbl" data-a="legal" data-id="privacy" style="flex:1">Privacy Policy</button></div>
    <div class="srow"><button class="lbl" data-a="legal" data-id="rules" style="flex:1">Community rules</button></div>
    ${CONTACT_EMAIL ? `<div class="srow"><a class="lbl" href="mailto:${esc(CONTACT_EMAIL)}">Contact us</a></div>` : ''}
    <div class="ls" style="padding:16px">KiHelp 0.14</div>
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
  logout: async () => {
    if (!confirm('Log out of this account?')) return;
    const id = S.user.id; S.switching = true;
    try { await sb.auth.signOut({ scope: 'local' }); } catch (e) {}
    S.switching = false; putAccounts(getAccounts().filter(x => x.id !== id));
    const next = getAccounts()[0];
    if (next) { clearUserState(); closeSheet(); $('#over').innerHTML = ''; switchAccount(next.id); } else resetSession();
  },
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
    try {
      if (sh.kind === 'msg') await forwardMsg(sh.id, id);
      else { const { error } = await sb.from('messages').insert({ sender_id: S.user.id, receiver_id: id, body: `kihelp://${sh.kind}/${sh.id}` }); if (error) throw error; }
      el.textContent = 'Sent'; el.classList.add('alt');
    } catch (e) { el.disabled = false; toast('Could not send'); }
  },
  shext: () => {
    const sh = S.share; if (!sh) return;
    const url = location.origin + location.pathname + ({ video: '#v=', group: '#g=' }[sh.kind] || '#p=') + sh.id;
    if (navigator.share) navigator.share({ title: 'KiHelp', text: 'Take a look on KiHelp', url }).catch(() => {});
    else { try { navigator.clipboard.writeText(url); } catch (e) {} toast('Link copied'); }
  },
  openshared: (id, el) => { const k = el.dataset.k; if (k === 'video') ACT.watch(id); else if (k === 'group') openGroup(id); else openPost(id); },
  openpost: id => openPost(id),
  pdl: async id => {
    const p = findPost(id); if (!p) return;
    const v = !p.adl;
    const { error } = await sb.from('posts').update({ allow_download: v }).eq('id', p.id).eq('user_id', S.user.id);
    if (error) return toast('Could not update');
    p.adl = v; p.dl = true; closeSheet(); toast(v ? 'People can now save this' : 'Saving turned off');
  },
  search: () => openSearch(),
  accounts: () => openAccounts(),
  accswitch: id => switchAccount(id),
  accrm: id => { if (!confirm('Remove this account from this device? You can log in again later.')) return; putAccounts(getAccounts().filter(x => x.id !== id)); openAccounts(); },
  accadd: () => { if (getAccounts().length >= 5) return toast('You can add up to 5 accounts'); closeSheet(); S.addHint = ''; startAddAccount(); },
  authcancel: () => { hideAuth(); },
  logoutall: async () => {
    if (!confirm('Log out of all accounts on this device?')) return;
    S.switching = true;
    for (const a of getAccounts()) { try { const r = await sb.auth.refreshSession({ refresh_token: a.rt }); if (r.data && r.data.session) await sb.auth.signOut({ scope: 'local' }); } catch (e) {} }
    S.switching = false; putAccounts([]); closeSheet(); resetSession();
  },
  delacct: () => sheet(`<h2>Delete your account</h2><p>This permanently deletes your profile, posts, comments, messages, stories, videos and settings. It cannot be undone.</p>
    <p class="ls" style="margin:8px 0">If you own a group, transfer ownership first. Groups you own are deleted with your account. Photos and videos you uploaded may stay in storage for a short time before they are cleaned up.</p>
    <div class="fld"><label for="dtx">Type DELETE to confirm</label><input id="dtx" autocomplete="off" autocapitalize="characters"></div>
    <button class="btn" style="background:var(--coral);color:#fff" id="dbtn" data-a="delgo">Delete my account</button>`),
  delgo: async () => {
    if ((($('#dtx') || {}).value || '').trim() !== 'DELETE') return toast('Type DELETE to confirm');
    busy('#dbtn', true, '...'); const id = S.user.id;
    const { error } = await sb.rpc('delete_my_account');
    if (error) { busy('#dbtn', false, 'Delete my account'); return toast('Could not delete the account. If you own a group, transfer it first.'); }
    S.switching = true; try { await sb.auth.signOut({ scope: 'local' }); } catch (e) {} S.switching = false;
    putAccounts(getAccounts().filter(x => x.id !== id)); closeSheet(); $('#over').innerHTML = '';
    const next = getAccounts()[0];
    if (next) { clearUserState(); switchAccount(next.id); } else resetSession();
    toast('Your account was deleted');
  },
  legal: id => openLegal(id),
  legalx: () => { const l = $('#legal'); l.classList.remove('open'); l.innerHTML = ''; },
  rep: (id, el) => { closeSheet(); openReport(el.dataset.t, id, el.dataset.o); },
  rreason: id => { if (!S.report) return; S.report.reason = id; document.querySelectorAll('#rr .optrow').forEach(b => b.classList.toggle('sel', b.dataset.id === id)); },
  rsubmit: async () => {
    const r = S.report; if (!r) return; if (!r.reason) return toast('Choose a reason');
    busy('#rsend', true, '...');
    const { error } = await sb.from('reports').insert({ reporter_id: S.user.id, target_type: r.type, target_id: r.id, target_user_id: r.owner || null, reason: r.reason, details: ($('#rd').value || '').trim() || null });
    if (error) { busy('#rsend', false, 'Send report'); return toast(error.code === '23505' ? 'You already reported this' : 'Could not send the report'); }
    closeSheet(); S.report = null; toast('Thank you. We will review your report.');
  },
  vmore: id => { const v = S.videos.find(x => x.id === id); if (!v) return; sheet(`<h2>Video</h2><button class="optrow red" data-a="rep" data-t="video" data-id="${v.id}" data-o="${v.uid}">Report video</button><button class="optrow red" data-a="block" data-id="${v.uid}">Block ${esc(nameOf(v.uid))}</button>`); },
  install: async () => {
    if (isStandalone()) return toast('KiHelp is already installed');
    if (deferredInstall) { deferredInstall.prompt(); try { await deferredInstall.userChoice; } catch (e) {} deferredInstall = null; render(true); return; }
    sheet(`<h2>Install KiHelp</h2>${isIOS ? '<p>1. Tap the <b>Share</b> button in Safari.<br>2. Scroll down and tap <b>Add to Home Screen</b>.<br>3. Tap <b>Add</b>.</p><p class="ls" style="margin-top:10px">On iPhone, this only works in Safari.</p>' : '<p>1. Open your browser menu (the three dots).<br>2. Tap <b>Install app</b> or <b>Add to Home screen</b>.<br>3. Tap <b>Install</b>.</p>'}<button class="btn" data-a="close" style="margin-top:14px">Got it</button>`);
  },
  instx: () => { store.set('kihelp.installDismissed', '1'); render(true); },
  reload: () => location.reload(),
  groups: () => openGroups(),
  events: () => openEvents(),
  gtab0: id => { S.gtab = id; openGroups(); },
  gopen: id => openGroup(id, 'groups'),
  gnew: () => groupForm(null),
  gpriv: id => { S.gdraftPriv = id; document.querySelectorAll('#gps button').forEach(b => b.classList.toggle('on', b.dataset.id === id)); const d = $('#gpd'); if (d) d.textContent = id === 'private' ? 'People must ask to join and an admin approves them.' : 'Anyone can find and join this group.'; },
  gcreate: async () => {
    const name = $('#gnn').value.trim(); if (name.length < 1) return toast('Give your group a name');
    busy('#gnbtn', true, '...'); let avatar = null;
    try { if (S.draft) avatar = (await uploadMedia(S.draft.file)).url; } catch (e) { busy('#gnbtn', false, 'Create group'); return toast(upErr(e)); }
    const { data, error } = await sb.rpc('create_group', { p_name: name, p_desc: $('#gnd').value.trim(), p_privacy: S.gdraftPriv, p_avatar: avatar });
    if (error || !data) { busy('#gnbtn', false, 'Create group'); return toast('Could not create the group'); }
    closeSheet(); S.myGroups = null; toast('Group created'); openGroup(data, 'groups');
  },
  gsave: async () => {
    const G = S.g; if (!G) return; const name = $('#gnn').value.trim(); if (!name) return toast('Give your group a name');
    busy('#gnbtn', true, '...'); const row = { name, description: $('#gnd').value.trim() || null, privacy: S.gdraftPriv };
    try { if (S.draft) row.avatar_url = (await uploadMedia(S.draft.file)).url; } catch (e) { busy('#gnbtn', false, 'Save changes'); return toast(upErr(e)); }
    const { error } = await sb.from('groups').update(row).eq('id', G.id);
    if (error) { busy('#gnbtn', false, 'Save changes'); return toast('Could not save the group'); }
    closeSheet(); S.myGroups = null; toast('Group updated'); loadGroup(G.id);
  },
  gback: () => { clearInterval(S.gpoll); const from = S.g && S.g.from; S.g = null; if (from === 'groups') openGroups(); else { $('#over').innerHTML = ''; render(true); } },
  gtab: id => { if (S.g) { S.g.tab = id; paintGroup(); } },
  gjoin: async () => {
    const G = S.g; if (!G || !G.row) return;
    const { error } = await sb.from('group_members').insert({ group_id: G.id, user_id: S.user.id, role: 'member', status: G.row.privacy === 'public' ? 'active' : 'pending' });
    if (error) return toast('Could not join this group');
    S.myGroups = null; toast(G.row.privacy === 'public' ? 'You joined the group' : 'Request sent'); G.tab = 'chat'; loadGroup(G.id);
  },
  gcancel: async () => {
    const G = S.g; if (!G) return; if (!confirm('Cancel your request to join?')) return;
    const { error } = await sb.from('group_members').delete().eq('group_id', G.id).eq('user_id', S.user.id);
    if (error) return toast('Could not cancel'); S.myGroups = null; loadGroup(G.id);
  },
  gleave: async () => {
    const G = S.g; if (!G) return; closeSheet(); if (!confirm('Leave this group?')) return;
    const { error } = await sb.from('group_members').delete().eq('group_id', G.id).eq('user_id', S.user.id);
    if (error) return toast('Could not leave the group'); S.myGroups = null; toast('You left the group'); ACT.gback();
  },
  gdel: async () => {
    const G = S.g; if (!G) return; closeSheet();
    if (!confirm('Delete this group for everyone? Its chat and events will be removed. This cannot be undone.')) return;
    const { error } = await sb.from('groups').delete().eq('id', G.id);
    if (error) return toast('Could not delete the group'); S.myGroups = null; toast('Group deleted'); ACT.gback();
  },
  gmenu: () => {
    const G = S.g; if (!G || !G.row) return; const me = G.me, active = !!(me && me.status === 'active'), owner = active && me.role === 'owner', admin = active && (owner || me.role === 'admin');
    sheet(`<h2>${esc(G.row.name)}</h2>
      ${admin ? '<button class="optrow" data-a="gedit">Edit group</button><button class="optrow" data-a="gadd">Add people</button>' : ''}
      <button class="optrow" data-a="ginvite">Invite friends</button>
      ${!owner ? `<button class="optrow red" data-a="rep" data-t="group" data-id="${G.id}" data-o="${G.row.owner_id}">Report group</button>` : ''}
      ${active && !owner ? '<button class="optrow red" data-a="gleave">Leave group</button>' : ''}
      ${owner ? '<button class="optrow red" data-a="gdel">Delete group</button>' : ''}`);
  },
  gedit: () => { const G = S.g; if (G && G.row) { closeSheet(); groupForm(G.row); } },
  ginvite: () => { const G = S.g; if (G) openShare('group', G.id); },
  gadd: () => {
    closeSheet();
    sheet(`<h2>Add people</h2><input id="gaq" placeholder="Search name or @username" maxlength="60" autocomplete="off"><div id="gal"><div class="ls" style="padding:12px 4px">Type a name to search.</div></div>`);
  },
  gaddp: async (id, el) => {
    const G = S.g; if (!G) return; el.disabled = true;
    const { error } = await sb.rpc('add_member', { gid: G.id, target: id });
    if (error) { el.disabled = false; return toast('Could not add this person'); }
    el.textContent = 'Added'; el.classList.add('alt'); loadGroup(G.id);
  },
  gmem: id => {
    const G = S.g; if (!G) return; const m = G.members.find(x => x.user_id === id); if (!m) return;
    const me = G.me, owner = !!(me && me.role === 'owner' && me.status === 'active'), admin = !!(me && me.status === 'active' && (me.role === 'owner' || me.role === 'admin'));
    sheet(`<h2>${esc(nameOf(id))}</h2>
      <button class="optrow" data-a="user" data-id="${id}">View profile</button>
      ${id !== S.user.id && owner && m.role !== 'owner' ? `<button class="optrow" data-a="grole" data-id="${id}" data-r="${m.role === 'admin' ? 'member' : 'admin'}">${m.role === 'admin' ? 'Remove admin role' : 'Make admin'}</button><button class="optrow" data-a="gxfer" data-id="${id}">Transfer ownership</button>` : ''}
      ${id !== S.user.id && admin && m.role !== 'owner' && !(m.role === 'admin' && !owner) ? `<button class="optrow red" data-a="grem" data-id="${id}">Remove from group</button>` : ''}`);
  },
  grole: async (id, el) => {
    const G = S.g; if (!G) return; closeSheet();
    const { error } = await sb.rpc('set_member_role', { gid: G.id, target: id, new_role: el.dataset.r });
    if (error) return toast('Could not change the role'); toast('Role updated'); loadGroup(G.id);
  },
  gxfer: async id => {
    const G = S.g; if (!G) return; closeSheet();
    if (!confirm('Make ' + nameOf(id) + ' the owner? You will become an admin.')) return;
    const { error } = await sb.rpc('transfer_group', { gid: G.id, target: id });
    if (error) return toast('Could not transfer ownership'); toast('Ownership transferred'); loadGroup(G.id);
  },
  grem: async id => {
    const G = S.g; if (!G) return; closeSheet();
    if (!confirm('Remove ' + nameOf(id) + ' from the group?')) return;
    const { error } = await sb.rpc('remove_member', { gid: G.id, target: id });
    if (error) return toast('Could not remove this person'); toast('Removed'); loadGroup(G.id);
  },
  gappr: id => { const G = S.g; if (G) groupDecide(G.id, id, true); },
  gdecl: id => { const G = S.g; if (G) groupDecide(G.id, id, false); },
  garq: (id, el) => groupDecide(el.dataset.g, id, true),
  garn: (id, el) => groupDecide(el.dataset.g, id, false),
  gsend: async () => {
    const i = $('#gi'), v = i && i.value.trim(), G = S.g; if (!v || !G) return;
    i.value = ''; const tmp = { uid: S.user.id, t: v, at: new Date().toISOString() }; G.msgs.push(tmp); paintGroupMsgs();
    const { data, error } = await sb.from('group_messages').insert({ group_id: G.id, sender_id: S.user.id, body: v }).select('id,created_at').single();
    if (error) { G.msgs.splice(G.msgs.indexOf(tmp), 1); paintGroupMsgs(); i.value = v; return toast('Message not sent'); }
    tmp.id = data.id; tmp.at = data.created_at; paintGroupMsgs();
  },
  gmmenu: id => {
    const G = S.g; if (!G) return; const m = G.msgs.find(x => String(x.id) === String(id)); if (!m || m.del) return;
    const mine = m.uid === S.user.id, admin = !!(G.me && G.me.status === 'active' && (G.me.role === 'owner' || G.me.role === 'admin')), textual = m.t && !SHARE_RE.test(m.t);
    sheet(`<h2>Message</h2>${textual ? `<button class="optrow" data-a="gmcopy" data-id="${m.id}">Copy text</button>` : ''}
      ${mine && textual ? `<button class="optrow" data-a="gmedit" data-id="${m.id}">Edit</button>` : ''}
      ${mine || admin ? `<button class="optrow red" data-a="gmdel" data-id="${m.id}">Delete</button>` : ''}`);
  },
  gmcopy: id => { const m = S.g && S.g.msgs.find(x => String(x.id) === String(id)); closeSheet(); if (m) { try { navigator.clipboard.writeText(m.t); } catch (e) {} toast('Copied'); } },
  gmedit: id => {
    const m = S.g && S.g.msgs.find(x => String(x.id) === String(id)); if (!m) return; closeSheet();
    sheet(`<h2>Edit message</h2><div class="fld"><textarea id="gme" maxlength="1000">${esc(m.t)}</textarea></div><button class="btn" id="gmebtn" data-a="gmsave" data-id="${m.id}">Save</button>`);
  },
  gmsave: async id => {
    const m = S.g && S.g.msgs.find(x => String(x.id) === String(id)), v = ($('#gme') || {}).value; if (!m || !v || !v.trim()) return;
    const { error } = await sb.rpc('edit_group_message', { mid: m.id, new_body: v.trim() });
    if (error) return toast('Could not edit this message');
    m.t = v.trim(); m.ed = true; closeSheet(); paintGroupMsgs();
  },
  gmdel: async id => {
    const m = S.g && S.g.msgs.find(x => String(x.id) === String(id)); closeSheet(); if (!m) return;
    if (!confirm('Delete this message?')) return;
    const { error } = await sb.rpc('delete_group_message', { mid: m.id });
    if (error) return toast('Could not delete'); m.del = true; m.t = ''; paintGroupMsgs();
  },
  shgsend: async (id, el) => {
    const sh = S.share; if (!sh) return; el.disabled = true;
    const { error } = await sb.from('group_messages').insert({ group_id: id, sender_id: S.user.id, body: `kihelp://${sh.kind}/${sh.id}` });
    if (error) { el.disabled = false; return toast('Could not send'); }
    el.textContent = 'Sent'; el.classList.add('alt');
  },
  evf: id => { S.evf = id; paintEventsList(); },
  enew: () => eventForm(null, null),
  genew: () => { const G = S.g; if (G) eventForm(G.id, null); },
  eopen: id => openEvent(id),
  eedit: () => { const e = S.ev; if (e) { closeSheet(); eventForm(e.group_id, e); } },
  esave: async () => {
    const title = $('#evt').value.trim(), s = $('#evs').value, e = $('#eve').value;
    if (!title) return toast('Add a title'); if (!s) return toast('Choose a start time');
    const starts = new Date(s), ends = e ? new Date(e) : null; if (ends && ends < starts) return toast('The end must be after the start');
    busy('#evbtn', true, '...');
    const fields = { title, description: $('#evd').value.trim() || null, location: $('#evl').value.trim() || null, starts_at: starts.toISOString(), ends_at: ends ? ends.toISOString() : null };
    let error;
    if (S.evEdit) ({ error } = await sb.from('events').update(fields).eq('id', S.evEdit));
    else { const g = $('#evg') ? $('#evg').value : ''; ({ error } = await sb.from('events').insert(Object.assign({ creator_id: S.user.id, group_id: g || null }, fields))); }
    if (error) { busy('#evbtn', false, S.evEdit ? 'Save changes' : 'Create event'); return toast('Could not save the event'); }
    closeSheet(); toast(S.evEdit ? 'Event updated' : 'Event created'); refreshEventViews();
  },
  ecancel: async (id, el) => {
    const { error } = await sb.from('events').update({ canceled_at: el.dataset.c ? new Date().toISOString() : null }).eq('id', id);
    if (error) return toast('Could not update the event'); closeSheet(); toast(el.dataset.c ? 'Event canceled' : 'Event restored'); refreshEventViews();
  },
  edel: async id => {
    if (!confirm('Delete this event?')) return;
    const { error } = await sb.from('events').delete().eq('id', id);
    if (error) return toast('Could not delete the event'); closeSheet(); toast('Event deleted'); refreshEventViews();
  },
  rsvp: async (id, el) => {
    const s = el.dataset.s, { data: cur } = await sb.from('event_rsvps').select('status').eq('event_id', id).eq('user_id', S.user.id).maybeSingle();
    let error;
    if (cur && cur.status === s) ({ error } = await sb.from('event_rsvps').delete().eq('event_id', id).eq('user_id', S.user.id));
    else if (cur) ({ error } = await sb.from('event_rsvps').update({ status: s }).eq('event_id', id).eq('user_id', S.user.id));
    else ({ error } = await sb.from('event_rsvps').insert({ event_id: id, user_id: S.user.id, status: s }));
    if (error) return toast('Could not save your reply');
    openEvent(id); refreshEventViews();
  },
  snew: () => openStoryComposer(),
  sopen: id => openStory(id),
  sclose: () => closeStory(),
  sprev: () => storyPrev(),
  snext: () => storyNext(),
  suser: id => { closeStory(); openUser(id); },
  smenu: () => {
    const v = S.sv; if (!v) return; pauseStory(true); const it = v.it, mine = v.seq[v.gi].uid === S.user.id;
    sheet(mine ? `<h2>Your story</h2><button class="optrow" data-a="sviews">Who viewed it</button><button class="optrow red" data-a="sdel">Delete story</button>`
      : `<h2>Story</h2><button class="optrow red" data-a="rep" data-t="story" data-id="${it.id}" data-o="${it.user_id}">Report story</button><button class="optrow red" data-a="block" data-id="${it.user_id}">Block ${esc(nameOf(it.user_id))}</button>`);
  },
  sviews: async () => {
    const v = S.sv; if (!v) return; const list = v.it.viewers || []; closeSheet(); pauseStory(true);
    await loadProfiles(list.map(x => x.user_id));
    sheet(`<h2>Viewed by ${list.length}</h2>${list.length ? list.map(x => `<div class="reqrow" style="padding-inline:0">${avOf(x.user_id, 40)}<div class="tx"><b>${esc(nameOf(x.user_id))}</b><div class="ls">${ago(x.created_at)}</div></div></div>`).join('') : '<div class="ls">No views yet.</div>'}`);
  },
  sdel: async () => {
    const v = S.sv; if (!v) return; const it = v.it; closeSheet();
    if (!confirm('Delete this story?')) return;
    const { error } = await sb.from('stories').delete().eq('id', it.id).eq('user_id', S.user.id);
    if (error) return toast('Could not delete');
    const g = v.seq[v.gi]; g.items = g.items.filter(x => x.id !== it.id);
    if (!g.items.length) { S.stories.mine = null; closeStory(); toast('Story deleted'); return; }
    v.ii = Math.min(v.ii, g.items.length - 1); showStoryItem(); toast('Story deleted');
  },
  svote: async (id, el) => {
    const v = S.sv; if (!v || !v.it) return; const it = v.it, c = +el.dataset.c;
    const { error } = await sb.from('story_votes').insert({ story_id: it.id, user_id: S.user.id, choice: c });
    if (error) return toast('Could not vote');
    it.votes = (it.votes || []).concat([{ choice: c, user_id: S.user.id }]); paintPoll(it);
  },
  sreact: async (id, el) => { const it = S.sv && S.sv.it; if (!it) return; const ok = await storyDM(it, `${el.dataset.e} Reacted to your story`); toast(ok ? 'Reaction sent' : 'Could not send'); },
  srsend: async () => { const it = S.sv && S.sv.it, i = $('#sri'), t = i && i.value.trim(); if (!it || !t) return; const ok = await storyDM(it, `↩️ Replied to your story: ${t}`); if (ok) { i.value = ''; i.blur(); toast('Reply sent'); } else toast('Could not send'); },
  sqsend: async () => { const it = S.sv && S.sv.it, i = $('#sqa'), t = i && i.value.trim(); if (!it || !t) return; const ok = await storyDM(it, `💬 ${it.question}\n${t}`); if (ok) { i.value = ''; i.blur(); toast('Answer sent'); } else toast('Could not send'); },
  scback: () => { const c = S.sc; if (c && c.prev) URL.revokeObjectURL(c.prev); S.sc = null; $('#over').innerHTML = ''; },
  scpick: (id, el) => { const f = $('#' + el.dataset.k); if (f) f.click(); },
  sctype: () => { if (S.sc) { S.sc.kind = 'text'; paintStoryComposer(); } },
  scbg: id => { if (S.sc) { S.sc.bg = id; paintStoryComposer(); } },
  scpoll: () => { const c = S.sc; if (c) { c.poll = c.poll ? null : { q: '', a: '', b: '' }; paintStoryComposer(); } },
  scq: () => { const c = S.sc; if (c) { c.qOn = !c.qOn; paintStoryComposer(); } },
  scvis: id => { if (S.sc) { S.sc.vis = id; paintStoryComposer(); } },
  sedit: async () => { const c = S.sc; if (!c || !c.file) return; const f = await editImage(c.file); if (f) { URL.revokeObjectURL(c.prev); c.file = f; c.prev = URL.createObjectURL(f); paintStoryComposer(); } },
  sgo: () => publishStory(),
  edth: async id => {
    const d = S.drafts[+id]; if (!d || d.type !== 'image') return;
    const f = await editImage(d.file); if (!f) return;
    URL.revokeObjectURL(d.prev); d.file = f; d.prev = URL.createObjectURL(f); renderThumbs();
  },
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
    <button class="optrow red" data-a="rep" data-t="user" data-id="${id}" data-o="${id}">Report ${esc(nameOf(id))}</button>
    ${S.prof && S.prof.blocked ? `<button class="optrow" data-a="unblock" data-id="${id}">Unblock</button>` : `<button class="optrow red" data-a="block" data-id="${id}">Block ${esc(nameOf(id))}</button>`}`),
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
        <button class="optrow" data-a="pedit" data-id="${p.id}">Edit post</button>
        <button class="optrow" data-a="ppin" data-id="${p.id}">${p.pin ? 'Unpin from your profile' : 'Pin to your profile'}</button>
        ${p.media.length ? `<button class="optrow" data-a="pdl" data-id="${p.id}">${p.adl ? 'Saving is allowed. Tap to turn off' : 'Saving is off. Tap to allow'}</button>` : ''}
        <div class="lbl" style="padding:14px 4px 6px">Who can see this post</div>
        <div class="seg c3">${[['public', 'Public'], ['friends', 'Friends'], ['private', 'Only me']].map(([k, l]) => `<button class="${p.vis === k ? 'on' : ''}" data-a="pvis" data-id="${p.id}" data-v="${k}">${l}</button>`).join('')}</div>
        <button class="optrow red" style="margin-top:12px" data-a="pdel" data-id="${p.id}">Delete post</button>`);
    } else {
      sheet(`<h2>Post options</h2>
        <button class="optrow" data-a="psave" data-id="${p.id}">${S.savedPosts.has(p.id) ? 'Remove from saved' : 'Save post'}</button>
        <button class="optrow" data-a="user" data-id="${p.uid}">View profile</button>
        <button class="optrow red" data-a="rep" data-t="post" data-id="${p.id}" data-o="${p.uid}">Report post</button>
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
    const parent = S.replyC && S.replyC.p === +id ? S.replyC.id : null;
    const { data, error } = await sb.from('comments').insert({ post_id: +id, user_id: S.user.id, content: v, parent_id: parent }).select('id,created_at').single();
    if (error) return toast('Could not comment');
    const p = findPost(id); if (p) p.cm.push({ id: data.id, uid: S.user.id, w: nameOf(S.user.id), t: v, pid: parent, ed: false, at: data.created_at });
    S.replyC = null; saveMentions(v, +id); hideMbar();
    S.open.add(+id); repaint();
  },
  creply: (id, el) => {
    const p = findPost(el.dataset.p); if (!p) return;
    const c = p.cm.find(x => String(x.id) === String(id)); if (!c) return;
    S.replyC = { p: p.id, id: c.pid || c.id, name: c.w }; S.open.add(p.id); repaint();
    setTimeout(() => { const i = $('#ci' + p.id); if (i) i.focus(); }, 30);
  },
  creplyx: () => { S.replyC = null; repaint(); },
  cedit: id => { S.editC = { id: +id }; repaint(); setTimeout(() => { const i = $('#ec' + id); if (i) i.focus(); }, 30); },
  ccancel: () => { S.editC = null; repaint(); },
  csave: async (id, el) => {
    const text = (($('#ec' + id) || {}).value || '').trim(); if (!text) return toast('Write something first');
    const { error } = await sb.from('comments').update({ content: text, edited_at: new Date().toISOString() }).eq('id', +id).eq('user_id', S.user.id);
    if (error) return toast('Could not save');
    const p = findPost(el.dataset.p), c = p && p.cm.find(x => String(x.id) === String(id)); if (c) { c.t = text; c.ed = true; }
    S.editC = null; repaint();
  },
  cdel: async (id, el) => {
    if (!confirm('Delete this comment?')) return;
    const { error } = await sb.from('comments').delete().eq('id', +id).eq('user_id', S.user.id);
    if (error) return toast('Could not delete');
    const p = findPost(el.dataset.p); if (p) p.cm = p.cm.filter(x => String(x.id) !== String(id) && String(x.pid) !== String(id));
    repaint(); toast('Comment deleted');
  },
  pedit: id => {
    const p = findPost(id); if (!p) return;
    sheet(`<h2>Edit post</h2><div class="fld"><textarea id="et" data-mention maxlength="3000">${esc(p.text || '')}</textarea></div><button class="btn" id="etbtn" data-a="psaveedit" data-id="${p.id}">Save</button>`);
  },
  psaveedit: async id => {
    const p = findPost(id); if (!p) return; const v = $('#et').value.trim();
    if (!v && !p.media.length) return toast('A post needs text or photos');
    busy('#etbtn', true, '...');
    const { error } = await sb.from('posts').update({ content: v, edited_at: new Date().toISOString() }).eq('id', p.id).eq('user_id', S.user.id);
    if (error) { busy('#etbtn', false, 'Save'); return toast('Could not save'); }
    p.text = v; p.ed = true; closeSheet(); repaint(); saveMentions(v, p.id); toast('Post updated');
  },

  attach: () => sheet(`<h2>Send</h2>
    <button class="optrow" data-a="pick" data-k="cph">📷 Photo or video</button>
    <button class="optrow" data-a="pick" data-k="ccam">📸 Camera</button>
    <button class="optrow" data-a="pick" data-k="cfile">📎 File or music</button>`),
  pick: (id, el) => { closeSheet(); const f = $('#' + el.dataset.k); if (f) f.click(); },
  mic: () => startRec(),
  recsend: () => stopRec(false),
  reccancel: () => stopRec(true),
  cbarx: () => { if (S.editM) { const i = $('#mi'); if (i) i.value = ''; } S.reply = null; S.editM = null; paintCbar(); },
  emo: (id, el) => { const panel = $(el.dataset.p); if (!panel) return; panel.hidden = !panel.hidden; if (!panel.hidden) panel.innerHTML = emojiPanel(el.dataset.t, el.dataset.p); },
  etab: (id, el) => { const panel = $(el.dataset.p); if (panel) panel.innerHTML = emojiPanel(el.dataset.t, el.dataset.p, el.dataset.k); },
  epick: (id, el) => {
    const i = $(el.dataset.t); if (!i) return;
    const s = i.selectionStart == null ? i.value.length : i.selectionStart, e2 = i.selectionEnd == null ? s : i.selectionEnd, em = el.dataset.e;
    i.value = i.value.slice(0, s) + em + i.value.slice(e2);
    try { i.selectionStart = i.selectionEnd = s + em.length; } catch (x) {}
    i.dispatchEvent(new Event('input', { bubbles: true }));
  },
  mview: (id, el) => { const s = S.sig[el.dataset.p]; if (s) openViewer([{ type: 'image', url: s.url }], 0, true); },
  mfile: async (id, el) => {
    const { data, error } = await sb.storage.from('chat-media').createSignedUrl(el.dataset.p, 120, { download: el.dataset.n });
    if (error || !data) return toast('Could not open this file');
    location.assign(data.signedUrl);
  },
  mmenu: id => {
    const m = msgById(id); if (!m || m.del) return;
    const textual = m.t && !SHARE_RE.test(m.t);
    sheet(`<h2>Message</h2>
      <button class="optrow" data-a="mreply" data-id="${m.id}">Reply</button>
      ${textual ? `<button class="optrow" data-a="mcopy" data-id="${m.id}">Copy text</button>` : ''}
      <button class="optrow" data-a="mfwd" data-id="${m.id}">Forward</button>
      ${m.me && !m.media && textual ? `<button class="optrow" data-a="medit" data-id="${m.id}">Edit</button>` : ''}
      ${m.me ? `<button class="optrow red" data-a="mdel" data-id="${m.id}">Delete</button>` : ''}`);
  },
  mreply: id => { const m = msgById(id); closeSheet(); if (!m) return; S.reply = { id: m.id, me: m.me }; S.editM = null; paintCbar(); const i = $('#mi'); if (i) i.focus(); },
  mcopy: id => { const m = msgById(id); closeSheet(); if (m && m.t) { try { navigator.clipboard.writeText(m.t); } catch (e) {} toast('Copied'); } },
  mfwd: id => { const m = msgById(id); if (!m) return; closeSheet(); openShare('msg', m.id); },
  medit: id => { const m = msgById(id); closeSheet(); if (!m) return; S.editM = { id: m.id }; S.reply = null; const i = $('#mi'); if (i) { i.value = m.t; i.focus(); } paintCbar(); },
  mdel: async id => {
    const m = msgById(id); closeSheet(); if (!m) return;
    if (!confirm('Delete this message for everyone?')) return;
    const { error } = await sb.rpc('delete_message', { mid: m.id });
    if (error) return toast('Could not delete');
    m.del = true; m.t = ''; m.media = null; paintMsgs(curThread()); toast('Message deleted');
  },
  share: id => openShare('post', id),
  thread: id => openThread(id),
  back: () => { clearInterval(S.gpoll); S.g = null; stopRecCancel(); S.reply = null; S.editM = null; clearInterval(S.poll); S.openThread = null; S.prof = null; $('#over').innerHTML = ''; render(true); if (S.tab === 'chat') refresh(); },
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
    bindUpload({ edit: true });
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
      <div class="fld"><textarea id="pt" data-mention maxlength="3000" placeholder="What's on your mind? Type @ to mention someone"></textarea><button class="chip" type="button" style="margin-top:8px" data-a="emo" data-t="#pt" data-p="#emop2">😊 Emoji</button><div id="emop2" class="emop" hidden></div></div>
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
    bindUpload({ edit: true, ratio: '1:1' });
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
  const rb = $('#rxbar'); if (rb && !e.target.closest('#rxbar')) rb.remove();
  const a = e.target.closest('[data-a]'); if (!a) return;
  if (a.classList.contains('bd') && e.target !== a) return;
  if (a.dataset.a === 'like' && S.lpFired) { S.lpFired = false; return; }
  if (a.dataset.a === 'mmenu' && e.target.closest('audio,video')) return;
  if ((a.dataset.a === 'sprev' || a.dataset.a === 'snext') && S.sv && S.sv.held) { S.sv.held = false; return; }
  const f = ACT[a.dataset.a]; if (f) f(a.dataset.id, a);
});
document.addEventListener('submit', e => { if (e.target.id === 'af') { e.preventDefault(); doAuth(); } });
let searchTimer;
document.addEventListener('input', e => { if (e.target.id === 'ps') { clearTimeout(searchTimer); const v = e.target.value; searchTimer = setTimeout(() => runSearch(v), 350); }
  if (e.target.id === 'q') { S.q = e.target.value; $('#grid').innerHTML = gridHTML(); } });
document.addEventListener('change', e => { if (e.target.id === 'lang') { S.lang = e.target.value; saveSettings(); applyTheme(); render(true); openSettings(); } });
if (window.matchMedia) { const mq = matchMedia('(prefers-color-scheme: dark)'); if (mq.addEventListener) mq.addEventListener('change', () => { if (S.mode === 'system') applyTheme(); }); }
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.id === 'mi') { const b = document.querySelector('[data-a="send"]'); if (b) b.click(); }
  if (e.key === 'Enter' && e.target.id === 'gi') ACT.gsend();
  if (e.key === 'Enter' && e.target.matches && e.target.matches('.lm')) e.target.click();
  if (e.key === 'Escape') { if (S.viewer) closeViewer(); else closeSheet(); }
  if (S.sv && !/INPUT|TEXTAREA/.test(e.target.tagName || '')) { if (e.key === 'ArrowRight') storyNext(); else if (e.key === 'ArrowLeft') storyPrev(); else if (e.key === 'Escape') closeStory(); }
  if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && S.tab === 'video' && $('#vf') && !$('#over').innerHTML && !$('#sheet').classList.contains('open') && !/INPUT|TEXTAREA|SELECT/.test((e.target.tagName || ''))) {
    e.preventDefault(); $('#vf').scrollBy({ top: (e.key === 'ArrowDown' ? 1 : -1) * $('#vf').clientHeight, behavior: 'smooth' });
  }
});

/* ---------- multiple accounts ---------- */
const ACC_KEY = 'kihelp.accounts';
const getAccounts = () => { try { return JSON.parse(store.get(ACC_KEY) || '[]') || []; } catch (e) { return []; } };
const putAccounts = a => store.set(ACC_KEY, JSON.stringify(a));
function saveAccount(session) {
  if (!session || !session.user || !session.refresh_token) return;
  const list = getAccounts(), u = session.user, p = (S.user && S.user.id === u.id && S.profile) ? S.profile : {}, cur = list.find(x => x.id === u.id);
  const rec = { id: u.id, email: u.email || '', name: p.display_name || (cur && cur.name) || (u.email || 'Member').split('@')[0], avatar: safeUrl(p.avatar_url) || (cur && cur.avatar) || null, rt: session.refresh_token };
  if (cur) Object.assign(cur, rec); else list.push(rec);
  putAccounts(list);
}
function openAccounts() {
  const list = getAccounts(), me = S.user && S.user.id;
  sheet(`<h2>Accounts</h2>${list.length ? list.map(a => `<div class="reqrow" style="padding-inline:0"><button data-a="accswitch" data-id="${a.id}" style="display:flex;gap:10px;align-items:center;flex:1;min-width:0">${av(a.name, a.id, 44, a.avatar)}<span class="tx"><b>${esc(a.name)}</b><span class="ls" style="display:block">${esc(a.email)}</span></span></button>${a.id === me ? '<span class="pbadge">Active</span>' : `<button class="ibtn" data-a="accrm" data-id="${a.id}" aria-label="Remove account">${I.x}</button>`}</div>`).join('') : '<div class="ls">No saved accounts yet.</div>'}
    <button class="btn alt" style="margin-top:12px" data-a="accadd">Add another account</button>
    <button class="optrow red" style="margin-top:8px" data-a="logoutall">Log out of all accounts</button>`);
}
function startAddAccount() { S.addingAccount = true; S.authMode = 'login'; showAuth(); }
async function switchAccount(id) {
  if (S.user && S.user.id === id) return closeSheet();
  const acc = getAccounts().find(x => x.id === id); if (!acc) return;
  S.switching = true; toast('Switching account...');
  try {
    const { data, error } = await sb.auth.refreshSession({ refresh_token: acc.rt });
    if (error || !data || !data.session) throw error || new Error('expired');
    closeSheet(); closeViewer(); closeStory(); $('#over').innerHTML = '';
    clearUserState(); await enter(data.session.user); toast('Switched to ' + acc.name);
  } catch (e) {
    putAccounts(getAccounts().filter(x => x.id !== id)); closeSheet();
    toast('Please log in to this account again'); S.addHint = acc.email; startAddAccount();
  } finally { S.switching = false; }
}

/* ---------- reports ---------- */
const REPORT_REASONS = [['spam', 'Spam or scam'], ['harassment', 'Harassment or bullying'], ['hate', 'Hate speech'], ['nudity', 'Nudity or sexual content'], ['violence', 'Violence or dangerous content'], ['fake', 'Fake account or impersonation'], ['illegal', 'Illegal items or activity'], ['other', 'Something else']];
function openReport(type, id, owner) {
  S.report = { type, id: String(id), owner: owner || null, reason: null };
  sheet(`<h2>Report</h2><p class="ls" style="margin:-4px 0 10px">Why are you reporting this? Your report is private.</p>
    <div id="rr">${REPORT_REASONS.map(([k, l]) => `<button class="optrow" data-a="rreason" data-id="${k}"><span>${l}</span></button>`).join('')}</div>
    <div class="fld" style="margin-top:10px"><textarea id="rd" maxlength="500" placeholder="Add details (optional)"></textarea></div>
    <button class="btn" id="rsend" data-a="rsubmit">Send report</button>`);
}

/* ---------- terms, privacy and community rules ---------- */
const CONTACT_EMAIL = 'kihelpcompany@gmail.com'; /* put your support email here, for example 'support@yourname.com' */
const LEGAL_DATE = 'October 2026';
const LEGAL = {
  terms: { title: 'Terms of Use', sections: [
    ['Agreeing to these terms', [`By creating an account or using KiHelp you agree to these Terms, the Privacy Policy and the Community rules. If you do not agree, please do not use KiHelp.`]],
    ['Who can use KiHelp', [`KiHelp is for people aged 13 and over, or the minimum age in your country if it is higher. You must give true information when you sign up.`]],
    ['Your account', [`You are responsible for everything that happens under your account. Keep your password private and tell us if you think someone else has used your account. You may keep more than one account, but you must not use accounts to avoid a ban or to mislead people.`]],
    ['Your content', [`You own what you post. When you post, you give KiHelp permission to store it and show it inside the service to the people you chose, so that the service can work. You promise that you have the right to post it and that it follows the Community rules.`, `This permission ends when you delete the content or your account, except for copies in backups, and for content that other people have already shared or saved.`]],
    ['What you must not do', [`Do not break the law, harass or threaten people, post harmful or sexual content, impersonate others, spread spam or scams, copy other people's work without permission, or try to hack, overload, scrape or misuse KiHelp. The Community rules explain this in more detail.`]],
    ['Marketplace', [`KiHelp lets people list items and talk to each other. KiHelp is not part of any sale, does not check items or sellers, and does not handle payment or delivery unless the app clearly says so. Check items before you pay, meet in safe places, and follow your local laws. Listings for prohibited items will be removed.`]],
    ['Reports and enforcement', [`You can report content in the app. We may remove content, limit features, suspend or close accounts that break these terms or the Community rules, or when this is needed to protect people or to follow the law.`]],
    ['Changes to the service', [`KiHelp is still growing. We may change, pause or stop features, and the service may sometimes have errors or be unavailable.`]],
    ['No promises about the service', [`KiHelp is provided as it is and as available. We do not promise that it will always work without errors or interruptions.`]],
    ['Limits on responsibility', [`As far as the law allows, KiHelp and its team are not responsible for losses that come from your use of the service, from content posted by other people, or from dealings between users. Nothing in these terms limits rights that you have under the law and that cannot be limited.`]],
    ['Ending your use', [`You can stop using KiHelp at any time. You can delete your account in Settings.`]],
    ['Changes to these terms', [`We may update these terms. If you keep using KiHelp after an update, you accept the new terms. The date at the top shows the latest version.`]]
  ] },
  privacy: { title: 'Privacy Policy', sections: [
    ['About this policy', [`KiHelp is a social network, short-video, groups and marketplace service that runs in your browser. This policy explains what information we collect, why we collect it, and the choices you have.`]],
    ['What we collect', [`Account details: your email address, your password (kept only in scrambled form by our sign-in service), your name, and optionally your username, country, bio and profile photo.`, `Things you post or send: posts, comments, photos, videos, stories, short videos, group chats, direct messages, files and voice messages, marketplace listings, events, likes, follows, friend requests, blocks, saved items and reports.`, `Optional contact details: if you add a phone number, only you can see it. It is used only so that people who already know your exact number can find you, and only if you turn that option on. The same applies to finding you by email.`, `Technical data: our hosting and service providers may record technical information such as IP address, browser type and visit times to keep the service running and secure.`, `On your device: we store your sign-in session, the accounts you added for quick switching, and your settings (such as dark mode and language) in your browser's local storage.`]],
    ['How we use it', [`We use your information to run and improve KiHelp, to show your content to the people you choose, to keep the service safe (for example, handling reports and stopping spam), and to contact you about your account. We do not sell your personal data.`]],
    ['Who can see what', [`Public posts, public profiles, public groups and public stories can be seen by anyone who uses KiHelp. Friends-only content is seen only by your accepted friends. Posts set to Only me are seen only by you.`, `Direct messages are seen by the people in the conversation. Files sent in direct chats are stored privately. Group chats are seen by group members.`, `Photos and videos you upload to posts, profiles, stories and listings are stored at web addresses that are hard to guess but are not password-protected. Anyone who has an address can open the file, even if the post was later hidden or deleted. Do not upload anything you need to keep secret.`]],
    ['Service providers', [`We use Supabase for the database, sign-in and file storage (our database is hosted in the European Union, in Ireland), GitHub Pages to host the website, and content delivery services (jsDelivr or unpkg) and Google Fonts to load code and fonts. These providers process data for us under their own terms. We may also share information when the law requires it or to protect people's safety.`]],
    ['How long we keep it', [`We keep your information while your account exists. You can delete posts, comments and messages you sent at any time. You can delete your account in Settings, which removes your profile and the content linked to it. Uploaded files may stay in storage for a short time before they are cleaned up, and copies may remain briefly in backups.`]],
    ['Your choices', [`You can edit your profile, choose who sees each post, turn email and phone search on or off, block people, report content, and delete your account. If you have questions about your information, contact us.`]],
    ['Children', [`KiHelp is for people aged 13 and over, or the minimum age in your country if it is higher. If you believe a younger child has an account, please report it or contact us and we will remove it.`]],
    ['Security', [`We use reasonable technical measures such as encrypted connections and access rules in our database. No service is completely secure, so please use a strong password and keep it private.`]],
    ['Changes to this policy', [`We may update this policy. If we make important changes we will tell you in the app. The date at the top shows the latest version.`]]
  ] },
  rules: { title: 'Community rules', sections: [
    ['Be kind', [`Treat people with respect. No bullying, harassment or threats. No hate against people because of who they are, such as their race, ethnicity, nationality, religion, gender, sexual orientation or disability.`]],
    ['Keep people safe', [`No violence, graphic gore, or content that encourages self-harm, dangerous acts or crime. No nudity or sexually explicit content.`, `Sexual content involving children is never allowed. We remove it, close the account, and may report it to the authorities.`]],
    ['Be real', [`No fake accounts, impersonation, scams, spam, fake reviews or misleading offers. Never ask people for their passwords or trick them into sending money.`]],
    ['Respect privacy', [`Do not share other people's private information, such as phone numbers, addresses, private photos or private messages, without their permission.`]],
    ['Respect creators', [`Only post photos, videos, music and writing that you made or have permission to share.`]],
    ['Marketplace rules', [`Do not sell weapons, illegal drugs, stolen or counterfeit goods, dangerous materials, or anything that is illegal where you live. Describe items honestly, use real photos and state clear prices.`]],
    ['Groups and events', [`Group admins are responsible for keeping their groups within these rules and for removing members who break them. Events must not be used to plan harm.`]],
    ['Reporting and what happens next', [`Use Report on posts, comments, videos, stories, groups and profiles. Reports are private. You can also Block anyone to stop them contacting you.`, `If something breaks these rules we may remove it, warn you, limit features, suspend or close accounts. If you think we made a mistake, please contact us.`]]
  ] }
};
function openLegal(k) {
  const d = LEGAL[k]; if (!d) return;
  $('#legal').innerHTML = `<div class="legal-wrap"><header><button class="ibtn flip" data-a="legalx" aria-label="Close">${I.back}</button><b class="ttl">${esc(d.title)}</b></header>
    <div class="legal-body"><p class="ls">Last updated: ${LEGAL_DATE}</p>${d.sections.map(([h, ps]) => `<h3>${esc(h)}</h3>${ps.map(p => `<p>${esc(p)}</p>`).join('')}`).join('')}
    ${CONTACT_EMAIL ? `<h3>Contact</h3><p>${esc(CONTACT_EMAIL)}</p>` : ''}
    <p class="ls" style="margin-top:20px"><button class="lk2" data-a="legal" data-id="terms">Terms</button> · <button class="lk2" data-a="legal" data-id="privacy">Privacy</button> · <button class="lk2" data-a="legal" data-id="rules">Rules</button></p></div></div>`;
  $('#legal').classList.add('open'); $('#legal').scrollTop = 0;
}

/* ---------- install as an app, updates, offline notice ---------- */
let deferredInstall = null;
const isStandalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
function installBar() {
  if (isStandalone() || store.get('kihelp.installDismissed')) return '';
  if (!deferredInstall && !isIOS) return '';
  return `<div class="instbar"><span>Install KiHelp on your phone</span><button class="btn sm2" data-a="install">Install</button><button class="ibtn" data-a="instx" aria-label="Dismiss">${I.x}</button></div>`;
}
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; if (S.user && S.tab === 'home' && !$('#over').innerHTML) render(true); });
window.addEventListener('appinstalled', () => { deferredInstall = null; toast('KiHelp is installed'); if (S.user && S.tab === 'home' && !$('#over').innerHTML) render(true); });
function showUpdateBar() {
  if ($('#upd')) return;
  const d = document.createElement('div'); d.id = 'upd'; d.className = 'upd';
  d.innerHTML = 'A new version is ready <button data-a="reload">Refresh</button>';
  document.body.appendChild(d);
}
document.addEventListener('kihelp-update', showUpdateBar);
if (window.__kihelpUpdate) showUpdateBar();
window.addEventListener('offline', () => toast('You are offline'));
window.addEventListener('online', () => toast('Back online'));

async function boot() {
  const hm = location.hash.match(/^#v=([0-9a-f-]{36})$/i); if (hm) S.focusVideo = hm[1];
  const hp = location.hash.match(/^#p=([0-9]{1,15})$/); if (hp) S.focusPost = hp[1];
  const hg = location.hash.match(/^#g=([0-9a-f-]{36})$/i); if (hg) S.focusGroup = hg[1];
  const lg = location.hash.match(/^#(privacy|terms|rules)$/i); if (lg) S.focusLegal = lg[1].toLowerCase();
  applyTheme(); render();
  if (S.focusLegal) { openLegal(S.focusLegal); S.focusLegal = null; }
  if (!sb) return showAuth('Could not load the sign-in service. Check your internet and refresh.');
  sb.auth.onAuthStateChange((ev, session) => {
    if (session && session.user && (ev === 'SIGNED_IN' || ev === 'TOKEN_REFRESHED' || ev === 'INITIAL_SESSION')) saveAccount(session);
    if (ev === 'SIGNED_OUT' && S.user && !S.switching) resetSession();
  });
  const { data } = await sb.auth.getSession();
  if (data && data.session) enter(data.session.user); else showAuth();
}
boot();


/* end of app.js */