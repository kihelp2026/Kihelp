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
  phone: ic('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
  cam: ic('<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>'),
  sliders: ic('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
  x: ic('<path d="M6 6l12 12M18 6L6 18"/>'),
  download: ic('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'),
  expand: ic('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'),
  globe: '<span class="gl" aria-hidden="true">🌍</span>',
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
  me: { posts: 0, following: 0, followers: 0, videos: 0 }, videos: [], myVideos: [], muted: true, viewed: new Set(), focusVideo: null, savedPosts: new Set(), prof: null, profPosts: [], savedList: [], myPosts: [], reqs: [], postVis: 'public', allowDl: false, drafts: [], viewer: null, onePost: [], focusPost: null, share: null, following: new Set(), fl: null, reply: null, editM: null, editC: null, replyC: null, rec: null, sig: {}, stories: { mine: null, others: [] }, sv: null, sc: null, g: null, myGroups: null, gpoll: null, gtab: 'mine', gq: '', greqs: [], evs: [], evf: 'all', evEdit: null, gdraftPriv: 'public', wallet: null, gifts: null, giftSel: null, giftQty: 1, giftTo: null, rate: 1, pc: { phone: null, allow_phone_search: false, allow_email_search: false }, ready: {}, authMode: 'login', openThread: null, sellOpt: 'fixed'
};
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
try { Object.assign(S, JSON.parse(store.get('kihelp.settings') || '{}')); } catch (e) {}
if (S.mode !== 'light' && S.mode !== 'dark') S.mode = (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
S.xp = new Set(); S.ovStack = []; S.suggest = null; S.navBack = false;
const saveSettings = () => store.set('kihelp.settings', JSON.stringify({ mode: S.mode, accent: S.accent, saver: S.saver, lang: S.lang, tlang: S.tlang, defVis: S.defVis, defComments: S.defComments, defRx: S.defRx }));
S.txon = new Set(); S.txout = {}; S.txsrc = {};

const LANGS = {
  en: { name: 'English', home: 'Home', chat: 'Chat', videos: 'Videos', video: 'Video', market: 'Market', alerts: 'Alerts', profile: 'Profile', social: 'Social', chats: 'Chats', marketplace: 'Marketplace', post: 'Post', mind: "What's on your mind?", sell: 'Sell', settings: 'Settings', appearance: 'Appearance', mode: 'Mode', system: 'System', light: 'Light', dark: 'Dark', accent: 'Accent color', auto: 'Auto', data: 'Data and storage', saver: 'Data saver', saverDesc: 'Photos and videos load only when you tap them', storage: 'Storage used', clear: 'Clear cache', cleared: 'Cache cleared', language: 'Language', search: 'Search items', mine: 'Your listings', account: 'Account', logout: 'Log out' },
  am: { name: 'አማርኛ', home: 'መነሻ', chat: 'ውይይት', videos: 'ቪዲዮዎች', video: 'ቪዲዮ', market: 'ገበያ', alerts: 'ማሳወቂያ', profile: 'መገለጫ', social: 'ማኅበራዊ', chats: 'ውይይቶች', marketplace: 'ገበያ', post: 'ለጥፍ', mind: 'ምን እያሰቡ ነው?', sell: 'ሽጥ', settings: 'ቅንብሮች', appearance: 'ገጽታ', mode: 'ሁነታ', system: 'የስልክ ቅንብር', light: 'ብሩህ', dark: 'ጨለማ', accent: 'ቀለም', auto: 'ራስ-ሰር', data: 'ዳታ እና ማከማቻ', saver: 'ዳታ ቆጣቢ', saverDesc: 'ፎቶና ቪዲዮ የሚጫነው ሲነኩት ብቻ ነው', storage: 'ጥቅም ላይ የዋለ ማከማቻ', clear: 'ካሽ አጽዳ', cleared: 'ካሽ ጸድቷል', language: 'ቋንቋ', search: 'ዕቃዎችን ፈልግ', mine: 'የእርስዎ ዕቃዎች', account: 'መለያ', logout: 'ውጣ' },
  ar: { name: 'العربية', home: 'الرئيسية', chat: 'الدردشة', videos: 'الفيديوهات', video: 'فيديو', market: 'السوق', alerts: 'الإشعارات', profile: 'حسابي', social: 'اجتماعي', chats: 'المحادثات', marketplace: 'السوق', post: 'نشر', mind: 'ما الذي يدور في بالك؟', sell: 'بيع', settings: 'الإعدادات', appearance: 'المظهر', mode: 'الوضع', system: 'النظام', light: 'فاتح', dark: 'داكن', accent: 'لون التمييز', auto: 'تلقائي', data: 'البيانات والتخزين', saver: 'توفير البيانات', saverDesc: 'تُحمَّل الصور والفيديوهات عند الضغط عليها فقط', storage: 'التخزين المستخدم', clear: 'مسح الذاكرة المؤقتة', cleared: 'تم مسح الذاكرة المؤقتة', language: 'اللغة', search: 'ابحث عن منتجات', mine: 'منتجاتك', account: 'الحساب', logout: 'تسجيل الخروج' },
  fr: { name: 'Français', home: 'Accueil', chat: 'Discussions', videos: 'Vidéos', video: 'Vidéo', market: 'Marché', alerts: 'Alertes', profile: 'Profil', social: 'Social', chats: 'Discussions', marketplace: 'Marché', post: 'Publier', mind: 'Quoi de neuf ?', sell: 'Vendre', settings: 'Réglages', appearance: 'Apparence', mode: 'Mode', system: 'Système', light: 'Clair', dark: 'Sombre', accent: "Couleur d'accent", auto: 'Auto', data: 'Données et stockage', saver: 'Économiseur de données', saverDesc: 'Les photos et vidéos ne se chargent que si vous les touchez', storage: 'Stockage utilisé', clear: 'Vider le cache', cleared: 'Cache vidé', language: 'Langue', search: 'Rechercher des articles', mine: 'Vos annonces', account: 'Compte', logout: 'Se déconnecter' },
  es: { name: 'Español', home: 'Inicio', chat: 'Chat', videos: 'Videos', video: 'Video', market: 'Mercado', alerts: 'Avisos', profile: 'Perfil', social: 'Social', chats: 'Chats', marketplace: 'Mercado', post: 'Publicar', mind: '¿Qué estás pensando?', sell: 'Vender', settings: 'Ajustes', appearance: 'Apariencia', mode: 'Modo', system: 'Sistema', light: 'Claro', dark: 'Oscuro', accent: 'Color de acento', auto: 'Auto', data: 'Datos y almacenamiento', saver: 'Ahorro de datos', saverDesc: 'Las fotos y los videos se cargan solo al tocarlos', storage: 'Almacenamiento usado', clear: 'Borrar caché', cleared: 'Caché borrada', language: 'Idioma', search: 'Buscar artículos', mine: 'Tus artículos', account: 'Cuenta', logout: 'Cerrar sesión' },
  sw: { name: 'Kiswahili', home: 'Mwanzo', chat: 'Gumzo', videos: 'Video', video: 'Video', market: 'Soko', alerts: 'Arifa', profile: 'Wasifu', social: 'Jamii', chats: 'Mazungumzo', marketplace: 'Soko', post: 'Chapisha', mind: 'Unafikiria nini?', sell: 'Uza', settings: 'Mipangilio', appearance: 'Mwonekano', mode: 'Hali', system: 'Mfumo', light: 'Mwanga', dark: 'Giza', accent: 'Rangi kuu', auto: 'Otomatiki', data: 'Data na hifadhi', saver: 'Kiokoa data', saverDesc: 'Picha na video hupakiwa unapozigusa tu', storage: 'Hifadhi inayotumika', clear: 'Futa kache', cleared: 'Kache imefutwa', language: 'Lugha', search: 'Tafuta bidhaa', mine: 'Bidhaa zako', account: 'Akaunti', logout: 'Toka' }
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
  const { data } = await sb.from('profiles').select('id,display_name,username,country,bio,avatar_url,banner_url,links').in('id', ids);
  (data || []).forEach(p => S.pf[p.id] = p);
}
const RX = { love: '❤️', like: '👍', haha: '😂', wow: '😮', sad: '😢', angry: '😡' };
const RXLIST = ['❤️', '👍', '🔥', '😂', '😮', '😢', '😡', '🙏', '👏', '🎉', '🤔', '💯', '😍', '🤩', '👎', '💔', '🥰', '😎', '🤣', '😭'];
const RXLEG = { love: '❤️', like: '👍', haha: '😂', wow: '😮', sad: '😢', angry: '😡' };
function rxOf(list) {
  const rxs = {}; let mine = null;
  list.forEach(l => { const e = RXLEG[l.reaction] || l.reaction || '❤️'; rxs[e] = (rxs[e] || 0) + 1; if (l.user_id === S.user.id) mine = e; });
  return { rxs, react: mine, liked: !!mine, likes: list.length };
}
const POSTCOLS = 'id,user_id,content,created_at,media_url,media_type,visibility,pinned_at,allow_download,edited_at,allowed_reactions,comments_enabled,repost_of';
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
  const mediaOf = (p, rows) => {
    let media = (rows || []).filter(x => x.post_id === p.id && safeUrl(x.url)).map(x => ({ type: x.type === 'video' ? 'video' : 'image', url: x.url }));
    if (!media.length && safeUrl(p.media_url)) media = [{ type: p.media_type === 'video' ? 'video' : 'image', url: p.media_url }];
    return media;
  };
  const out = posts.map(p => ({
    id: p.id, uid: p.user_id, t: ago(p.created_at), text: p.content, media: mediaOf(p, pm),
    adl: !!p.allow_download, dl: !!p.allow_download || p.user_id === S.user.id, ed: !!p.edited_at,
    allowed: p.allowed_reactions || null, cmOn: p.comments_enabled !== false, repostOf: p.repost_of || null,
    vis: p.visibility || 'public', pin: !!p.pinned_at,
    ...rxOf(likes.filter(l => l.post_id === p.id)),
    cm: cms.filter(c => c.post_id === p.id).map(c => ({ id: c.id, uid: c.user_id, w: nameOf(c.user_id), t: c.content, pid: c.parent_id, ed: !!c.edited_at, at: c.created_at }))
  }));
  const rids = [...new Set(posts.map(p => p.repost_of).filter(Boolean))];
  if (rids.length) {
    try {
      const { data: od } = await sb.from('posts').select(POSTCOLS).in('id', rids);
      const { data: om2 } = await sb.from('post_media').select('post_id,url,type,position').in('post_id', rids).order('position', { ascending: true });
      await loadProfiles((od || []).map(o => o.user_id));
      const map = {}; (od || []).forEach(o => { map[o.id] = { id: o.id, uid: o.user_id, text: o.content, media: mediaOf(o, om2) }; });
      out.forEach(p => { if (p.repostOf) p.orig = map[p.repostOf] || null; });
    } catch (e) {}
  }
  return out;
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
  try {
    if (!S.gifts) { const gc = await sb.from('gift_catalog').select('id,name,emoji,price').eq('active', true).order('sort'); S.gifts = gc.data || []; }
    const gt = await sb.from('gift_transactions').select('sender_id,gift_id,qty,created_at').eq('receiver_id', me).order('created_at', { ascending: false }).limit(20);
    const GT = gt.data || []; await loadProfiles(GT.map(x => x.sender_id));
    items = items.concat(GT.map(x => { const g = S.gifts.find(y => y.id === x.gift_id) || { emoji: '🎁', name: 'a gift' }; return { uid: x.sender_id, text: nameOf(x.sender_id) + ' sent you ' + g.emoji + ' ' + g.name + ' x' + x.qty, at: x.created_at }; }));
  } catch (e) {}
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
    if (t === 'home') { await loadFeed(); loadLive().then(afterBg).catch(() => {}); loadSuggest().then(afterBg).catch(() => {}); loadStories().then(afterBg).catch(() => {}); if (!S.ready.video) loadVideos().then(afterBg).catch(() => {}); }
    else if (t === 'market') await loadProducts();
    else if (t === 'chat') await loadThreads();
    else if (t === 'alerts') await loadAlerts();
    else if (t === 'video') await loadVideos();
    else if (t === 'me') await loadMe();
  } catch (e) { S.ready[t] = 'err'; toast('Could not load. Check your internet.'); }
  if (S.tab === t && !$('#over').innerHTML) render(true);
  if (S.restoreScroll && S.tab === t && t !== 'video') { const y = S.restoreScroll; S.restoreScroll = 0; setTimeout(() => { const m = $('#main'); if (m) m.scrollTop = y; }, 80); }
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
  S.user = user; S.ready = {}; S.wallet = null;
  try { await ensureProfile(user); } catch (e) { S.profile = { id: user.id, display_name: (user.email || 'Member').split('@')[0] }; S.pf[user.id] = S.profile; }
  loadPrivate().catch(() => {});
  sb.auth.getSession().then(r => { if (r.data && r.data.session) saveAccount(r.data.session); }).catch(() => {});
  loadSavedIds().catch(() => {});
  loadFollowing().catch(() => {});
  computePushOffer(); loadPrefs().catch(() => {}); subscribeCalls(); checkRinging().catch(() => {});
  clearInterval(S.liveT); S.liveT = setInterval(() => { if (S.user && S.tab === 'home' && !$('#over').innerHTML && !S.live && document.visibilityState === 'visible') loadLive().then(afterBg).catch(() => {}); }, 30000);
  if (!store.get('kihelp.tipReact')) { store.set('kihelp.tipReact', '1'); setTimeout(() => toast('Tip: press and hold the heart to pick a reaction'), 3000); }
  hideAuth(); S.tab = S.focusVideo ? 'video' : (S.restoreTab || 'home'); S.restoreTab = null; render(); refresh();
  if (S.focusPost) { const pid = S.focusPost; S.focusPost = null; openPost(pid); }
  if (S.pendingRoute) { const h = S.pendingRoute; S.pendingRoute = null; setTimeout(() => routeHash(h), 400); }
  if (S.focusGroup) { const gid = S.focusGroup; S.focusGroup = null; openGroup(gid); }
}
function clearUserState() {
  try { localStorage.removeItem('kihelp.view'); } catch (e) {} S.ovStack = []; S.suggest = null;
  clearInterval(S.liveT); if (S.live) leaveLive(true); S.lives = [];
  try { if (S.rt) sb.removeChannel(S.rt); } catch (e) {} S.rt = null; S.prefs = null; if (S.call) endCallLocal(); S.incoming = null; const ce = $('#call'); if (ce) { ce.classList.remove('open'); ce.innerHTML = ''; }
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
  const t = S.tab, home = t === 'home';
  const title = tr({ home: 'social', video: 'videos', chat: 'chats', market: 'marketplace', alerts: 'alerts', me: 'profile' }[t]);
  const act = '';
  const left = home ? '<div class="brand"></div>' : `<div class="brand"><div class="ttl2">${title}</div></div>`;
  const prof = home && S.user ? `<button class="hav" data-a="tab" data-id="me" aria-label="Profile">${avOf(S.user.id, 34)}</button>` : '';
  const gear = t === 'me' ? `<button class="ibtn" data-a="settings" aria-label="${tr('settings')}">${I.sliders}</button>` : '';
  return `${left}<div class="hr">${act}<button class="ibtn" data-a="search" aria-label="Search people">${I.search}</button><button class="ibtn" data-a="alerts" aria-label="${tr('alerts')}">${I.bell}</button>${gear}${prof}</div>`;
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
  return `<div class="pcar ${single ? 'single' : ''}"><div class="rail">${m.map(item).join('')}</div>${single ? '' : `<span class="pcount">1 / ${m.length}</span>`}</div>${single ? '' : `<div class="pdots">${m.map((_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`).join('')}</div>`}`;
}
function commentsHTML(p) {
  const top = p.cm.filter(c => !c.pid), kids = c => p.cm.filter(x => x.pid === c.id);
  const row = (c, sub) => (S.editC && S.editC.id === c.id)
    ? `<div class="cmt${sub ? ' sub' : ''}"><input id="ec${c.id}" value="${esc(c.t)}" maxlength="1000"><div class="crow"><button class="btn sm2" data-a="csave" data-id="${c.id}" data-p="${p.id}">Save</button><button class="btn alt sm2" data-a="ccancel">Cancel</button></div></div>`
    : `<div class="cmt${sub ? ' sub' : ''}"><b>${esc(c.w)}</b>${fmtText(txShow('c' + c.id, c.t))}${txLink('c' + c.id, c.t)}${c.ed ? ' <small class="ls">(edited)</small>' : ''}
      <div class="cact"><span class="ls">${ago(c.at)}</span><button data-a="creply" data-id="${c.id}" data-p="${p.id}">Reply</button>${c.uid === S.user.id ? `<button data-a="cedit" data-id="${c.id}">Edit</button><button data-a="cdel" data-id="${c.id}" data-p="${p.id}">Delete</button>` : `<button data-a="rep" data-t="comment" data-id="${c.id}" data-o="${c.uid}">Report</button>`}</div></div>`;
  return top.map(c => row(c, false) + kids(c).map(k => row(k, true)).join('')).join('');
}
const replyChip = p => S.replyC && S.replyC.p === p.id ? `<div class="rchip">Replying to <b>${esc(S.replyC.name)}</b><button data-a="creplyx" aria-label="Cancel reply">${I.x}</button></div>` : '';
const fChip = id => (id !== S.user.id && !S.following.has(id)) ? `<button class="fchip" data-a="qfollow" data-id="${id}">Follow</button>` : '';
function repostCard(p) {
  if (!p.repostOf) return '';
  const o = p.orig;
  if (!o) return '<div class="rpbox gone">This post is not available.</div>';
  const m = o.media && o.media[0];
  return `<button class="rpbox" data-a="openpost" data-id="${o.id}"><span class="rph">${avOf(o.uid, 26)}<b>${esc(nameOf(o.uid))}</b></span>${o.text ? `<span class="rpt">${esc(o.text.slice(0, 300))}</span>` : ''}${m ? (m.type === 'image' ? `<img src="${esc(m.url)}" alt="" loading="lazy">` : '<span class="rpv">▶ Video</span>') : ''}</button>`;
}
function postCard(p) {
  const rxs = Object.entries(p.rxs || {}).filter(e => e[1] > 0).sort((a, b) => b[1] - a[1]);
  const chips = rxs.map(([e, n]) => `<button class="rxchip ${p.react === e ? 'on' : ''}" data-a="rxtap" data-id="${p.id}" data-e="${e}">${e}<span>${n}</span></button>`).join('');
  const canReact = !p.allowed || p.allowed.length > 0, cmOn = p.cmOn !== false;
  return `<article class="post">
    <div class="prow"><button class="ph-row" data-a="user" data-id="${p.uid}">${avOf(p.uid)}<div><b>${esc(nameOf(p.uid))}</b><small>${p.t}${p.ed ? ' · edited' : ''} · ${visIcon(p.vis)}${p.repostOf ? ' · 🔁 reposted' : ''}</small></div></button>${fChip(p.uid)}${p.pin ? '<span class="pbadge">Pinned</span>' : ''}<span style="flex:1"></span><button class="ibtn" data-a="pmenu" data-id="${p.id}" aria-label="More options">${I.more}</button></div>
    ${p.text ? `<p class="ptext clamp${S.xp.has('p' + p.id) ? ' open' : ''}" data-xk="p${p.id}" data-dt="pt" data-id="${p.id}">${fmtText(txShow('p' + p.id, p.text))}</p>${txLink('p' + p.id, p.text)}` : ''}
    ${repostCard(p)}
    ${mediaBlock(p)}
    <div class="acts">
      <button class="${p.react === '❤️' ? 'on' : ''}" data-a="like" data-id="${p.id}" aria-label="Love">${I.heart}</button>
      ${cmOn ? `<button data-a="cmt" data-id="${p.id}" aria-label="Comments">${I.cmt}${p.cm.length}</button>` : ''}
      <button data-a="share" data-id="${p.id}" aria-label="Share">${I.share}</button>
      <button class="sp ${S.savedPosts.has(p.id) ? 'on' : ''}" data-a="psave" data-id="${p.id}" aria-label="Save post">${I.save}</button>
    </div>
    ${chips || canReact ? `<div class="rxrow">${chips}${canReact ? `<button class="rxchip add" data-a="rxadd" data-id="${p.id}" aria-label="Add a reaction">☺<span>+</span></button>` : ''}</div>` : ''}
    ${!cmOn ? '<div class="ls" style="padding:2px 16px 8px">Comments are turned off.</div>' : S.open.has(p.id) ? `<div class="cmts">${commentsHTML(p)}\n      ${replyChip(p)}\n      <div class="cin"><input id="ci${p.id}" data-mention placeholder="Write a comment" maxlength="1000"><button class="send" data-a="addcmt" data-id="${p.id}" aria-label="Send comment">${I.send}</button></div></div>` : ''}
  </article>`;
}
function viewHome() {
  if (gate()) return gate();
  const row = installBar() + notifBar() + composerBox() + quickRow() + storiesRow();
  if (!S.posts.length) return row + `<div class="empty" style="padding:60px 24px">No posts yet.<br>Be the first. Share something in the box above.</div>` + videoStrip();
  const at = Math.min(2, S.posts.length - 1);
  return row + S.posts.map((p, i) => postCard(p) + (i === 0 ? suggestStrip() : '') + (i === at ? videoStrip() : '')).join('');
}
const vgridHTML = list => list.length ? `<div class="vgrid">${list.map(v => `<button data-a="watch" data-id="${v.id}" aria-label="Watch video">${S.saver ? `<div class="ph" style="--h:${hue(v.id)};width:100%;height:100%"></div>` : `<video src="${esc(v.video_url)}#t=0.1" muted playsinline preload="metadata"></video>`}<span>${Number(v.views) || 0} views</span></button>`).join('')}</div>` : '';
function viewVideo() {
  if (gate()) return gate();
  if (!S.videos.length) return `<div class="empty" style="padding:60px 24px;color:#fff">No videos yet.<br>Tap <b>+</b> below to post the first video.</div>`;
  return `<div class="vidfeed" id="vf" tabindex="0">${S.videos.map(v => {
    const p = S.pf[v.uid] || {};
    return `<section class="vid" data-vid="${v.id}">
      <video data-dt="v" data-id="${v.id}" data-vid="${v.id}" src="${esc(v.url)}" loop playsinline muted preload="${S.saver ? 'none' : 'metadata'}"></video>
      ${S.saver && !S.loaded.has('v' + v.id) ? `<button class="vplay" data-a="vplay" data-id="${v.id}">Tap to play<br><small>Data saver is on</small></button>` : ''}
      <div class="vshade"></div>
      <button class="vmute" data-a="vmute" aria-label="Sound">${S.muted ? I.mute : I.volume}</button>
      <button class="vspd" data-a="vspeed" aria-label="Playback speed">${S.rate}x</button>
      <div class="vinfo"><b>${esc(nameOf(v.uid))}${p.username ? ' <span style="font-weight:500;opacity:.85">@' + esc(p.username) + '</span>' : ''}</b>${fChip(v.uid)}
        ${v.cap ? `<p>${esc(v.cap)}</p>` : ''}<div style="font-size:13px;opacity:.85;margin-top:4px" data-views="${v.id}">${v.views} views</div></div>
      <div class="vacts">
        <button class="va" data-a="user" data-id="${v.uid}" aria-label="Creator">${avOf(v.uid, 46)}</button>
        <button class="va ${v.liked ? 'on' : ''}" data-lk="${v.id}" data-a="vlike" data-id="${v.id}" aria-label="Like"><span class="c">${I.heart}</span><span class="n">${v.likes}</span></button>
        <button class="va" data-a="vcmt" data-id="${v.id}" aria-label="Comments"><span class="c">${I.cmt}</span><span data-cc="${v.id}">${v.cc}</span></button>
        <button class="va" data-a="vshare" data-id="${v.id}" aria-label="Share"><span class="c">${I.share}</span>Share</button>
        ${v.uid !== S.user.id ? `<button class="va" data-a="gift" data-id="${v.uid}" data-t="video" data-i="${v.id}" aria-label="Send a gift"><span class="c">🎁</span>Gift</button>` : ''}
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
  if (!items.length) return `<div class="empty">${S.products.length ? 'No items match. Clear the filters.' : 'No items for sale yet. Tap + below to sell the first item.'}</div>`;
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
  return `${bannerHTML(p)}<div class="prof"><button class="avbtn" data-a="avview" data-id="${S.user.id}" aria-label="View profile photo">${avOf(S.user.id)}</button><div><div class="big">${esc(p.display_name || 'Member')} <span class="vis" title="Public profile">${I.globe}</span></div><div class="ls">${p.username ? '@' + esc(p.username) + ' · ' : ''}${esc(p.country || '')}</div>${p.username ? '' : '<div class="ls">Add a username in Edit profile</div>'}</div></div>
    ${p.bio ? `<p style="padding:0 16px 10px;white-space:pre-wrap">${esc(p.bio)}</p>` : ''}${linksHTML(p)}
    <div class="stats"><div><b>${S.me.videos}</b><span>Videos</span></div><button data-a="flist" data-id="${S.user.id}" data-k="followers"><b>${S.me.followers}</b><span>Followers</span></button><button data-a="flist" data-id="${S.user.id}" data-k="following"><b>${S.me.following}</b><span>Following</span></button><div><b>${S.me.posts}</b><span>Posts</span></div></div>
    <div style="padding:0 16px 8px;display:grid;grid-template-columns:1fr 1fr;gap:10px"><button class="btn alt" data-a="editprofile">Edit profile</button><button class="btn alt" data-a="opensaved">Saved posts</button></div>
    <div style="padding:0 16px 8px;display:grid;grid-template-columns:1fr 1fr;gap:10px"><button class="btn alt" data-a="invite">Invite friends</button><button class="btn alt" data-a="accounts">Switch account</button></div>
    <div style="padding:0 16px 8px"><button class="btn alt" data-a="wallet">🪙 Wallet and gifts</button></div>
    <div style="padding:0 16px 8px"><button class="btn alt" data-a="mylives">🔴 My lives</button></div>
    ${meTabs()}
    <h3 class="sub">${tr('mine')}</h3>
    ${mine.length ? `<div class="grid">${mine.map(listingCard).join('')}</div>` : `<div class="empty" style="padding:20px 16px">Nothing for sale yet. Tap Market, then Sell.</div>`}`;
}
function render(keepScroll) {
  const top = $('#main').scrollTop, vf = $('#vf'), vtop = vf ? vf.scrollTop : 0;
  document.body.classList.toggle('market', S.tab === 'market');
  $('#main').classList.toggle('vmode', S.tab === 'video');
  $('#head').innerHTML = head();
  $('#main').innerHTML = { home: viewHome, video: viewVideo, chat: viewChat, market: viewMarket, alerts: viewAlerts, me: viewMe }[S.tab]();
  $('#nav').innerHTML = [['home', 'home', 'home'], ['video', 'videos', 'film'], ['create', '', 'plus'], ['chat', 'chat', 'chat'], ['market', 'market', 'shop'], ['me', 'profile', 'user']].map(([k, l, i]) => k === 'create' ? `<button class="navplus" data-a="create" aria-label="Create"><span>${I.plus}</span></button>` : `<button class="${S.tab === k ? 'on' : ''}${k === 'me' ? ' desk' : ''}" data-a="tab" data-id="${k}" aria-label="${tr(l)}"><span class="pill">${I[i]}</span>${tr(l)}</button>`).join('');
  $('#main').scrollTop = keepScroll ? top : 0;
  setTimeout(syncHist, 0);
  if (S.tab === 'video') { const nf = $('#vf'); if (nf && keepScroll && vtop) nf.scrollTop = vtop; wireVideos(); }
}
function wireVideos() {
  if (S.vio) { S.vio.disconnect(); S.vio = null; }
  const feed = $('#vf'); if (!feed) return;
  if (S.focusVideo) { const t = feed.querySelector(`.vid[data-vid="${S.focusVideo}"]`); if (t) feed.scrollTop = t.offsetTop; S.focusVideo = null; }
  S.vio = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target.querySelector('video'); if (!v) return;
    if (e.isIntersecting && e.intersectionRatio >= 0.7) {
      if (!(S.saver && !S.loaded.has('v' + v.dataset.id))) { v.muted = S.muted; v.playbackRate = S.rate; v.play().catch(() => {}); }
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
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button>${avOf(id, 38)}<b>${esc(n)}</b><span style="flex:1"></span><button class="ibtn" data-a="call" data-id="${id}" data-k="audio" aria-label="Voice call">${I.phone}</button><button class="ibtn" data-a="call" data-id="${id}" data-k="video" aria-label="Video call">${I.cam}</button></header>
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
  setTimeout(() => $('#ps') && $('#ps').focus(), 50); paintSuggestList();
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
        <div style="display:grid;grid-template-columns:${P.rel === 'received' ? '1fr 1fr' : '1fr'};gap:10px;margin-top:10px"><button class="btn alt" data-a="dm" data-id="${id}">Message</button>${P.rel === 'received' ? `<button class="btn alt" data-a="fno" data-id="${id}">Decline</button>` : ''}</div><button class="btn alt" data-a="gift" data-id="${id}" data-t="profile" style="margin-top:10px">🎁 Send a gift</button></div>`;
    }
  }
  const all = [...P.pinned, ...P.posts];
  b.innerHTML = `${bannerHTML(pr)}<div class="pcenter"><button class="avbtn" data-a="avview" data-id="${id}" aria-label="View profile photo">${avOf(id, 88)}</button><div class="big" style="margin-top:10px">${esc(pr.display_name || 'Member')} <span class="vis" title="Public profile">${I.globe}</span></div>
      <div class="ls">${pr.username ? '@' + esc(pr.username) : ''}${pr.country ? (pr.username ? ' · ' : '') + esc(pr.country) : ''}</div>
      ${pr.bio ? `<p style="margin-top:10px;white-space:pre-wrap">${esc(pr.bio)}</p>` : ''}${linksHTML(pr)}</div>
    <div class="stats" style="justify-content:center"><div><b>${P.postsN}</b><span>Posts</span></div><button data-a="flist" data-id="${id}" data-k="followers"><b>${P.followers}</b><span>Followers</span></button><button data-a="flist" data-id="${id}" data-k="following"><b>${P.followingN}</b><span>Following</span></button></div>
    ${acts}
    ${ptabs(P.tab || 'posts')}
    <div id="pposts">${P.loading ? '<div class="empty" style="padding:30px">Loading...</div>' : all.length ? (P.tab === 'photos' ? mediaGrid(all, 'image') : P.tab === 'videos' ? vgridHTML(P.vids) + mediaGrid(all, 'video') : all.map(postCard).join('')) : `<div class="empty" style="padding:30px 20px">${P.blocked ? '' : 'No posts to show.'}</div>`}</div>
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
  else if (x.t) inner += `<div class="bt clamp${S.xp.has('m' + x.id) ? ' open' : ''}" data-xk="m${x.id}">${fmtText(txShow('m' + x.id, x.t))}</div>${txLink('m' + x.id, x.t)}`;
  const core = `<div class="${cls}"${x.id ? ` data-a="mmenu" data-id="${x.id}"` : ''}>${inner}<small class="meta">${x.ed ? 'edited · ' : ''}${hm(x.at)}</small></div>`;
  if (x.me || !t) return core;
  return `<div class="mrow">${avOf(t.id, 30)}<div class="mcol"><div class="gn">${esc(nameOf(t.id))}</div>${core}</div></div>`;
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
  else if (k === 'pt') { const sm = d.nextElementSibling; if (sm && sm.classList && sm.classList.contains('seemore')) sm.click(); }
}
document.addEventListener('scroll', e => {
  const t = e.target; if (!t || !t.classList) return;
  const i = Math.round(Math.abs(t.scrollLeft) / (t.clientWidth || 1)), n = t.children ? t.children.length : 0;
  if (t.classList.contains('rail')) { const c = t.parentElement.querySelector('.pcount'); if (c) c.textContent = (i + 1) + ' / ' + n; const dd = t.parentElement.nextElementSibling; if (dd && dd.classList.contains('pdots')) [].slice.call(dd.children).forEach((d, k) => d.classList.toggle('on', k === i)); }
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
    ${kind === 'post' ? `<button class="optrow" data-a="repost" data-id="${id}">🔁 Repost to my profile</button>` : ''}
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
  if (r && p.allowed && !p.allowed.includes(r)) return toast('That reaction is not allowed on this post');
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
  const id = btn.dataset.id, p = findPost(id), list = RXLIST.filter(e => !p || !p.allowed || p.allowed.includes(e));
  if (!list.length) return toast('Reactions are turned off for this post');
  const r = btn.getBoundingClientRect(), bar = document.createElement('div'); bar.id = 'rxbar'; bar.className = 'rxbar';
  bar.innerHTML = list.map(e => `<button data-a="react" data-id="${id}" data-r="${e}" aria-label="${e}">${e}</button>`).join('');
  document.body.appendChild(bar);
  const w = bar.offsetWidth; bar.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.left)) + 'px'; bar.style.top = Math.max(8, r.top - bar.offsetHeight - 8) + 'px';
}
async function rxWho(id, emoji) {
  const { data } = await sb.from('post_likes').select('user_id').eq('post_id', +id).eq('reaction', emoji).limit(100);
  const ids = (data || []).map(x => x.user_id); await loadProfiles(ids);
  sheet(`<h2>${emoji} ${ids.length}</h2>${ids.length ? ids.map(u => `<div class="reqrow" style="padding-inline:0">${avOf(u, 40)}<div class="tx"><b>${esc(nameOf(u))}</b></div></div>`).join('') : '<div class="ls">No one yet.</div>'}`);
}
document.addEventListener('pointerdown', e => {
  const b = e.target.closest('[data-a="like"],[data-a="rxtap"]'); if (!b) return;
  S.lpFired = false; clearTimeout(S.lpT);
  S.lpT = setTimeout(() => { S.lpFired = true; if (b.dataset.a === 'like') showReactBar(b); else rxWho(b.dataset.id, b.dataset.e); }, 450);
});
['pointerup', 'pointercancel', 'scroll'].forEach(ev => document.addEventListener(ev, () => clearTimeout(S.lpT), true));
document.addEventListener('contextmenu', e => { if (e.target.closest('[data-a="like"],[data-a="rxtap"]')) e.preventDefault(); });
function paintRxEdit() {
  const E = S.rxEdit; if (!E) return;
  sheet(`<h2>Allowed reactions</h2><p class="ls" style="margin-bottom:8px">People can only react with the emojis you pick.</p><div class="rxpick">${RXLIST.map(e => `<button class="${E.sel.has(e) ? 'on' : ''}" data-a="rxsel" data-e="${e}">${e}</button>`).join('')}</div><div class="dots" style="margin:12px 0"><button class="chip" data-a="rxall">All</button><button class="chip" data-a="rxnone">None</button></div><button class="btn" data-a="rxsave">Save</button>`);
}

function syncFollowUI(id) {
  const f = S.following.has(id);
  document.querySelectorAll(`.fchip[data-id="${id}"]`).forEach(b => { if (f) b.remove(); });
  document.querySelectorAll(`.fbtn[data-id="${id}"]`).forEach(b => { b.textContent = f ? 'Following' : 'Follow'; b.classList.toggle('alt', f); });
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
  return `<div class="stories">${add}${liveItems()}${mine}${others}</div>`;
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
const composerBox = () => `<button class="composer" data-a="newpost">${avOf(S.user.id, 40)}<span class="cp">${esc(tr('mind'))}</span></button>`;
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
document.addEventListener('input', e => { if (e.target.id === 'setq') { S.setq = e.target.value; const l = $('#setlist'); if (l) l.innerHTML = settingsListHTML(); } });
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
  const body = sm ? `<button class="sharecardb" data-a="openshared" data-k="${sm[1].toLowerCase()}" data-id="${sm[2]}"><span><b>${shareLabel(sm[1])}</b><br><small>Tap to open</small></span></button>` : `<div class="bt clamp${S.xp.has('g' + m.id) ? ' open' : ''}" data-xk="g${m.id}">${fmtText(txShow('g' + m.id, m.t))}</div>${txLink('g' + m.id, m.t)}`;
  const core = `<div class="${cls}"${m.id ? ` data-a="gmmenu" data-id="${m.id}"` : ''}>${body}<small class="meta">${m.ed ? 'edited · ' : ''}${hm(m.at)}</small></div>`;
  if (mine) return core;
  return `<div class="mrow">${avOf(m.uid, 30)}<div class="mcol"><div class="gn">${esc(nameOf(m.uid))}</div>${core}</div></div>`;
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
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">Events</b><span style="flex:1"></span></header>
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
  box.innerHTML = list.length ? list.map(eventRow).join('') : '<div class="empty" style="padding:50px 24px">No events here yet.<br>Use the <b>+</b> button to create one.</div>';
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

/* ---------- gifts and wallet (TEST MODE: coins have no cash value yet) ---------- */
const coinFmt = n => Number(n || 0).toLocaleString('en-US');
async function loadGiftData() {
  if (!S.gifts) { const { data } = await sb.from('gift_catalog').select('id,name,emoji,price').eq('active', true).order('sort'); S.gifts = data || []; }
  const { data: w, error } = await sb.rpc('ensure_wallet'); if (error) throw error; S.wallet = w;
}
async function openGift(uid, tType, tId) {
  if (uid === S.user.id) return toast('You cannot send a gift to yourself');
  try { await loadGiftData(); } catch (e) { return toast('Gifts are not available right now'); }
  await loadProfiles([uid]);
  S.giftTo = { uid, tType: tType || 'profile', tId: tId || null }; S.giftSel = null; S.giftQty = 1;
  paintGiftSheet();
}
function paintGiftSheet() {
  const T = S.giftTo; if (!T) return;
  const sel = S.gifts.find(g => g.id === S.giftSel), total = sel ? sel.price * S.giftQty : 0, bal = S.wallet ? S.wallet.coins : 0;
  sheet(`<h2>Send a gift</h2>
    <div class="ls" style="margin:-6px 0 10px">To ${esc(nameOf(T.uid))}</div>
    <div class="gbal"><span>🪙 ${coinFmt(bal)} coins</span><button class="chip" data-a="coins">Get coins</button></div>
    <div class="ggrid">${S.gifts.map(g => `<button class="gcard ${S.giftSel === g.id ? 'on' : ''}" data-a="giftsel" data-id="${g.id}"><span class="ge">${g.emoji}</span><b>${esc(g.name)}</b><small>🪙 ${g.price}</small></button>`).join('')}</div>
    <div class="dots" style="margin:12px 0">${[1, 5, 10, 20].map(n => `<button class="chip ${S.giftQty === n ? 'on' : ''}" data-a="giftqty" data-id="${n}">x${n}</button>`).join('')}</div>
    <button class="btn" id="giftgo" data-a="giftsend" ${sel ? '' : 'disabled'}>${sel ? 'Send ' + sel.emoji + ' x' + S.giftQty + ' · 🪙 ' + coinFmt(total) : 'Choose a gift'}</button>
    <p class="ls" style="margin-top:10px">Test mode: coins have no cash value yet.</p>`);
}
function giftBurst(emoji, qty) {
  const n = Math.min(12, 3 + Math.floor(qty / 2));
  for (let i = 0; i < n; i++) {
    const el = document.createElement('div'); el.className = 'gburst'; el.textContent = emoji;
    el.style.left = (15 + Math.random() * 70) + 'vw'; el.style.animationDelay = (i * 90) + 'ms'; el.style.fontSize = (34 + Math.random() * 26) + 'px';
    document.body.appendChild(el); setTimeout(() => el.remove(), 2400 + i * 90);
  }
}
async function openCoins() {
  try { await loadGiftData(); } catch (e) { return toast('Your wallet is not available right now'); }
  const w = S.wallet, last = w.last_claim ? new Date(w.last_claim).getTime() : 0, wait = last + 86400000 - Date.now(), can = wait <= 0;
  sheet(`<h2>Coins</h2><div class="gbal"><span>🪙 ${coinFmt(w.coins)} coins</span></div>
    <button class="btn" data-a="claim" ${can ? '' : 'disabled'}>${can ? 'Claim 50 free test coins' : 'Next free coins in about ' + Math.max(1, Math.ceil(wait / 3600000)) + ' h'}</button>
    <div class="ls" style="margin:16px 0 6px">Buy coins</div>
    ${[['100 coins', 'Starter'], ['500 coins', 'Popular'], ['1,000 coins', 'Best value']].map(([c, l]) => `<div class="packrow"><b>${c}</b><span class="ls">${l}</span><button class="btn alt sm2" disabled>Soon</button></div>`).join('')}
    <p class="ls" style="margin-top:10px">Test mode: practice coins have no cash value. Paying with Chapa and Telebirr is not connected yet.</p>`);
}
const ledgerLabel = x => ({ claim: 'Free test coins', purchase: 'Coins bought', gift_sent: 'Gift sent: ' + (x.note || ''), gift_received: 'Gift received: ' + (x.note || ''), payout: 'Payout', adjust: 'Adjustment' }[x.kind] || x.kind);
async function openWallet() {
  clearInterval(S.gpoll); S.g = null; S.prof = null; clearInterval(S.poll); S.openThread = null;
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">Wallet and gifts</b></header><div class="setbody" id="wbody"><div class="empty" style="padding:40px">Loading...</div></div></div>`;
  try {
    await loadGiftData();
    const [lg, rx] = await Promise.all([
      sb.from('wallet_ledger').select('kind,coins,earnings,note,created_at').order('created_at', { ascending: false }).limit(30),
      sb.from('gift_transactions').select('sender_id,gift_id,qty,created_at').eq('receiver_id', S.user.id).order('created_at', { ascending: false }).limit(20)
    ]);
    const R = rx.data || [], L = lg.data || []; await loadProfiles(R.map(x => x.sender_id));
    const w = S.wallet, emo = id => (S.gifts.find(g => g.id === id) || {}).emoji || '🎁', b = $('#wbody'); if (!b) return;
    b.innerHTML = `<div style="padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div class="wcard"><small>Coins</small><b>🪙 ${coinFmt(w.coins)}</b><button class="btn sm2" data-a="coins" style="margin-top:8px">Get coins</button></div>
        <div class="wcard"><small>Creator earnings</small><b>⭐ ${coinFmt(w.earnings)}</b><button class="btn alt sm2" disabled style="margin-top:8px">Withdraw soon</button></div></div>
      <p class="ls" style="padding:0 16px 8px">Test mode: coins and earnings have no cash value yet. Creators get 50% of each gift's value as earnings. Withdrawals will open once payments are connected.</p>
      <h3 class="sub">Gifts you received</h3>
      ${R.length ? R.map(x => `<div class="item"><span style="font-size:28px">${emo(x.gift_id)}</span><p>${esc(nameOf(x.sender_id))} sent x${x.qty}<small>${ago(x.created_at)}</small></p></div>`).join('') : '<div class="empty" style="padding:20px 16px">No gifts yet.</div>'}
      <h3 class="sub">Activity</h3>
      ${L.length ? L.map(x => `<div class="item"><p>${esc(ledgerLabel(x))}<small>${ago(x.created_at)}</small></p><b>${x.coins ? (x.coins > 0 ? '+' : '') + x.coins + ' 🪙' : '+' + x.earnings + ' ⭐'}</b></div>`).join('') : '<div class="empty" style="padding:20px 16px">No activity yet.</div>'}`;
  } catch (e) { const b = $('#wbody'); if (b) b.innerHTML = '<div class="empty" style="padding:40px">Could not load your wallet.</div>'; }
}

/* ---------- push notifications ---------- */
const b64uToBytes = s => { const p = '='.repeat((4 - s.length % 4) % 4), r = atob((s + p).replace(/-/g, '+').replace(/_/g, '/')), o = new Uint8Array(r.length); for (let i = 0; i < r.length; i++) o[i] = r.charCodeAt(i); return o; };
const pushCapable = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
async function fetchVapid() { const r = await fetch(SUPA_URL + '/functions/v1/push'); const j = await r.json(); if (!j.publicKey) throw new Error('key'); return j.publicKey; }
async function devicePush() { if (!pushCapable()) return null; const reg = await navigator.serviceWorker.ready; return reg.pushManager.getSubscription(); }
async function pushStatus() {
  if (!pushCapable()) return 'unsupported';
  if (isIOS && !isStandalone()) return 'needs-install';
  if (Notification.permission === 'denied') return 'blocked';
  const sub = await devicePush(); if (!sub) return 'off';
  const { data } = await sb.from('push_subscriptions').select('endpoint').eq('user_id', S.user.id).eq('endpoint', sub.endpoint).maybeSingle();
  return data ? 'on' : 'off';
}
async function enablePush() {
  if (!pushCapable()) throw new Error('unsupported');
  const key = await fetchVapid();
  const perm = await Notification.requestPermission(); if (perm !== 'granted') throw new Error('denied');
  const reg = await navigator.serviceWorker.ready; let sub = await reg.pushManager.getSubscription();
  if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64uToBytes(key) });
  const j = sub.toJSON();
  const { error } = await sb.rpc('save_push_subscription', { p_endpoint: j.endpoint, p_p256dh: j.keys.p256dh, p_auth: j.keys.auth, p_ua: navigator.userAgent });
  if (error) throw error;
}
async function removeDevicePush() { const sub = await devicePush().catch(() => null); if (sub) await sb.rpc('remove_push_subscription', { p_endpoint: sub.endpoint }); }
function computePushOffer() { S.pushOffer = pushCapable() && Notification.permission === 'default' && !(isIOS && !isStandalone()); }
function notifBar() {
  if (!S.pushOffer || store.get('kihelp.notifDismissed')) return '';
  return `<div class="instbar"><span>Get alerts for messages and calls</span><button class="btn sm2" data-a="pushon">Turn on</button><button class="ibtn" data-a="notifx" aria-label="Dismiss">${I.x}</button></div>`;
}
async function loadPrefs() { const { data } = await sb.from('notification_prefs').select('messages,social,activity').eq('user_id', S.user.id).maybeSingle(); S.prefs = data || { messages: true, social: true, activity: true }; }
async function savePref(k, v) {
  S.prefs = Object.assign({ messages: true, social: true, activity: true }, S.prefs, { [k]: v });
  const { error } = await sb.from('notification_prefs').upsert({ user_id: S.user.id, messages: S.prefs.messages, social: S.prefs.social, activity: S.prefs.activity, updated_at: new Date().toISOString() });
  if (error) toast('Could not save');
}
async function paintPushRow() {
  const box = $('#pushrow'); if (!box) return;
  let st = 'unsupported'; try { st = await pushStatus(); } catch (e) {}
  if (!S.prefs) await loadPrefs().catch(() => { S.prefs = { messages: true, social: true, activity: true }; });
  const b2 = $('#pushrow'); if (!b2) return;
  const sw = (on, a, v) => `<button class="switch ${on ? 'on' : ''}" role="switch" aria-checked="${on}" data-a="${a}"${v ? ` data-v="${v}"` : ''}><i></i></button>`;
  const note = { unsupported: 'This browser cannot show notifications.', 'needs-install': 'On iPhone, add KiHelp to your Home Screen first, then turn notifications on.', blocked: 'Notifications are blocked. Allow them in your browser settings for this site.' }[st], p = S.prefs;
  b2.innerHTML = `<div class="srow"><div><div class="lbl">Notifications on this device</div><div class="ls">${note || 'Get alerts for messages, calls and more, even when KiHelp is closed.'}</div></div>${note ? '' : sw(st === 'on', st === 'on' ? 'pushoff' : 'pushon')}</div>
    ${st === 'on' ? `<div class="srow"><div class="lbl">Messages and calls</div>${sw(p.messages, 'prefset', 'messages')}</div><div class="srow"><div class="lbl">Friends, followers and gifts</div>${sw(p.social, 'prefset', 'social')}</div><div class="srow"><div class="lbl">Comments and mentions</div>${sw(p.activity, 'prefset', 'activity')}</div>` : ''}`;
}

/* ---------- opening links from notifications ---------- */
function routeHash(h) {
  if (!S.user || !h) return; let m;
  if ((m = h.match(/^#p=([0-9]{1,15})$/))) openPost(m[1]);
  else if ((m = h.match(/^#v=([0-9a-f-]{36})$/i))) { S.focusVideo = m[1]; ACT.watch(m[1]); }
  else if ((m = h.match(/^#g=([0-9a-f-]{36})$/i))) openGroup(m[1]);
  else if ((m = h.match(/^#c=([0-9a-f-]{36})$/i))) openThread(m[1]);
  else if ((m = h.match(/^#u=([0-9a-f-]{36})$/i))) openUser(m[1]);
  else if ((m = h.match(/^#call=([0-9a-f-]{36})$/i))) checkCall(m[1]);
  else if (h === '#n=alerts') { $('#over').innerHTML = ''; closeSheet(); S.tab = 'alerts'; render(); refresh(); }
}
if ('serviceWorker' in navigator) navigator.serviceWorker.addEventListener('message', e => { if (e.data && e.data.type === 'kihelp-open') routeHash(e.data.url); });

/* ---------- voice and video calls (peer to peer, signalled through Supabase) ---------- */
const ICE = { iceServers: [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }] };
function playRing(on) {
  clearInterval(S.ringT); if (!on) return;
  const beep = () => {
    try { const AC = window.AudioContext || window.webkitAudioContext; S.ac = S.ac || new AC(); const ac = S.ac; if (ac.state === 'suspended') ac.resume(); const o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = 440; g.gain.value = 0.08; o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + 0.35); } catch (e) {}
    try { if (navigator.vibrate) navigator.vibrate([300, 150, 300]); } catch (e) {}
  };
  beep(); S.ringT = setInterval(beep, 2200);
}
function subscribeCalls() {
  try {
    if (S.rt) sb.removeChannel(S.rt);
    const me = S.user.id;
    S.rt = sb.channel('kihelp-calls-' + me)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'calls', filter: 'callee_id=eq.' + me }, p => onIncoming(p.new))
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'calls', filter: 'caller_id=eq.' + me }, p => onCallUpdate(p.new))
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'calls', filter: 'callee_id=eq.' + me }, p => onCallUpdate(p.new))
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'call_signals', filter: 'to_id=eq.' + me }, p => handleSignal(p.new))
      .subscribe();
  } catch (e) {}
}
async function checkRinging() {
  const { data } = await sb.from('calls').select('id,caller_id,callee_id,kind,status,created_at').eq('callee_id', S.user.id).eq('status', 'ringing').gt('created_at', new Date(Date.now() - 45000).toISOString()).order('created_at', { ascending: false }).limit(1);
  if (data && data[0]) onIncoming(data[0]);
}
async function checkCall(id) {
  const { data } = await sb.from('calls').select('id,caller_id,callee_id,kind,status,created_at').eq('id', id).eq('callee_id', S.user.id).maybeSingle();
  if (data && data.status === 'ringing' && Date.now() - new Date(data.created_at).getTime() < 60000) onIncoming(data); else toast('That call has ended');
}
function callLabel(t) { const e = $('#cls'); if (e) e.textContent = t; if (S.call) S.call.label = t; }
function paintCall() {
  const c = S.call, el = $('#call'); if (!el) return;
  if (!c) { if (!S.incoming) { el.classList.remove('open'); el.innerHTML = ''; } return; }
  const video = c.kind === 'video';
  el.innerHTML = `<div class="cl-wrap ${video ? 'vid' : ''} ${c.state === 'connected' ? 'on' : ''}"><video id="crv" class="cl-remote" playsinline autoplay></video>
    ${video ? '<video id="clv" class="cl-local" playsinline autoplay muted></video>' : ''}
    <div class="cl-top"><div class="cl-av">${avOf(c.peer, 96)}</div><b>${esc(nameOf(c.peer))}</b><span id="cls">${esc(c.label || 'Calling...')}</span></div>
    <div class="cl-bar"><button class="clb" data-a="cmute" aria-label="Mute"><span>${I.mic}</span><small>Mute</small></button>
      ${video ? `<button class="clb" data-a="ccam" aria-label="Camera"><span>${I.cam}</span><small>Camera</small></button><button class="clb" data-a="cflip" aria-label="Switch camera"><span>&#8635;</span><small>Flip</small></button>` : ''}
      <button class="clb end" data-a="cend" aria-label="End call"><span>${I.phone}</span><small>End</small></button></div></div>`;
  el.classList.add('open');
  const lv = $('#clv'); if (lv) lv.srcObject = c.local;
  const rv = $('#crv'); if (rv && c.remote) { rv.srcObject = c.remote; rv.play().catch(() => {}); }
}
function paintIncoming() {
  const inc = S.incoming, el = $('#call'); if (!el) return;
  if (!inc) { playRing(false); if (!S.call) { el.classList.remove('open'); el.innerHTML = ''; } return; }
  el.innerHTML = `<div class="cl-wrap"><div class="cl-top"><div class="cl-av">${avOf(inc.caller_id, 120)}</div><b>${esc(nameOf(inc.caller_id))}</b><span>${inc.kind === 'video' ? 'Incoming video call' : 'Incoming voice call'}</span></div>
    <div class="cl-bar"><button class="clb end" data-a="cdecline" aria-label="Decline"><span>${I.phone}</span><small>Decline</small></button><button class="clb ok" data-a="caccept" aria-label="Accept"><span>${I.phone}</span><small>Accept</small></button></div></div>`;
  el.classList.add('open'); playRing(true);
}
function dismissIncoming() { if (S.incoming) clearTimeout(S.incoming.timer); S.incoming = null; paintIncoming(); }
async function onIncoming(rec) {
  if (!rec || rec.status !== 'ringing' || Date.now() - new Date(rec.created_at).getTime() > 60000) return;
  if (S.call || S.incoming) { sb.rpc('set_call_status', { p_id: rec.id, p_status: 'declined' }); return; }
  await loadProfiles([rec.caller_id]);
  S.incoming = Object.assign({}, rec, { timer: setTimeout(() => { if (S.incoming && S.incoming.id === rec.id) dismissIncoming(); }, 60000) });
  paintIncoming();
}
function onCallUpdate(rec) {
  const c = S.call;
  if (c && c.id === rec.id) {
    if (rec.status === 'accepted' && c.role === 'caller' && c.state === 'ringing') { c.state = 'connecting'; playRing(false); callLabel('Connecting...'); armConnect(); }
    else if (['declined', 'ended', 'canceled', 'missed'].includes(rec.status)) endCallLocal(rec.status === 'declined' ? nameOf(c.peer) + ' declined the call' : 'Call ended');
  }
  if (S.incoming && S.incoming.id === rec.id && rec.status !== 'ringing') dismissIncoming();
}
function armConnect() {
  const c = S.call; if (!c) return; clearTimeout(c.connT);
  c.connT = setTimeout(() => { if (S.call && S.call.id === c.id && S.call.state !== 'connected') { toast('Could not connect the call. Check your internet.'); hangup(); } }, 30000);
}
function makePC() {
  const c = S.call, pc = new RTCPeerConnection(ICE); c.pc = pc;
  c.local.getTracks().forEach(t => pc.addTrack(t, c.local));
  pc.ontrack = e => { c.remote = e.streams[0]; const v = $('#crv'); if (v) { v.srcObject = c.remote; v.play().catch(() => {}); } };
  pc.onicecandidate = e => { if (e.candidate) sendSignal('ice', e.candidate.toJSON()); };
  pc.onconnectionstatechange = () => {
    if (!S.call || S.call.pc !== pc) return;
    if (pc.connectionState === 'connected') callConnected();
    else if (pc.connectionState === 'failed') { toast('The call lost its connection'); hangup(); }
  };
  return pc;
}
async function sendSignal(kind, payload) { const c = S.call; if (!c) return; await sb.from('call_signals').insert({ call_id: c.id, from_id: S.user.id, to_id: c.peer, kind, payload }); }
async function drainIce() { const c = S.call; while (c && c.pending.length) { try { await c.pc.addIceCandidate(c.pending.shift()); } catch (e) {} } }
async function handleSignal(s) {
  const c = S.call; if (!c || s.call_id !== c.id || !c.pc) return; const pc = c.pc;
  try {
    if (s.kind === 'offer') { if (c.gotOffer) return; c.gotOffer = true; await pc.setRemoteDescription(s.payload); await drainIce(); const ans = await pc.createAnswer(); await pc.setLocalDescription(ans); await sendSignal('answer', { type: ans.type, sdp: ans.sdp }); }
    else if (s.kind === 'answer') { if (c.gotAnswer) return; c.gotAnswer = true; await pc.setRemoteDescription(s.payload); await drainIce(); }
    else if (s.kind === 'ice') { if (pc.remoteDescription) await pc.addIceCandidate(s.payload); else c.pending.push(s.payload); }
  } catch (e) {}
}
function callConnected() {
  const c = S.call; if (!c || c.state === 'connected') return;
  c.state = 'connected'; playRing(false); clearTimeout(c.ringTimer); clearTimeout(c.connT); c.t0 = Date.now();
  const w = document.querySelector('#call .cl-wrap'); if (w) w.classList.add('on');
  clearInterval(c.timer); c.timer = setInterval(() => { const s = Math.floor((Date.now() - c.t0) / 1000); callLabel(Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0')); }, 1000); callLabel('0:00');
}
function endCallLocal(msg) {
  const c = S.call; playRing(false);
  if (c) { clearTimeout(c.ringTimer); clearTimeout(c.connT); clearInterval(c.timer); try { if (c.pc) c.pc.close(); } catch (e) {} try { if (c.local) c.local.getTracks().forEach(t => t.stop()); } catch (e) {} }
  S.call = null; paintCall(); if (msg) toast(msg);
}
async function hangup() {
  const c = S.call; if (!c) return;
  try { await sb.rpc('set_call_status', { p_id: c.id, p_status: c.role === 'caller' && c.state === 'ringing' ? 'canceled' : 'ended' }); } catch (e) {}
  endCallLocal('Call ended');
}
async function startCall(uid, kind) {
  if (S.call || S.incoming || S.live) return toast('Finish your live or call first');
  if (!window.RTCPeerConnection || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return toast('Calls are not supported on this browser');
  await loadProfiles([uid]); let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: kind === 'video' ? { facingMode: 'user' } : false }); }
  catch (e) { return toast('Please allow the ' + (kind === 'video' ? 'camera and microphone' : 'microphone') + ' to call'); }
  const { data: id, error } = await sb.rpc('start_call', { p_callee: uid, p_kind: kind });
  if (error || !id) { stream.getTracks().forEach(t => t.stop()); return toast(/busy/i.test((error && error.message) || '') ? nameOf(uid) + ' is on another call' : 'Could not start the call'); }
  S.call = { id, role: 'caller', peer: uid, kind, local: stream, pending: [], state: 'ringing', label: 'Calling...' };
  paintCall(); playRing(true);
  const pc = makePC();
  try { const offer = await pc.createOffer(); await pc.setLocalDescription(offer); await sendSignal('offer', { type: offer.type, sdp: offer.sdp }); }
  catch (e) { hangup(); return toast('Could not start the call'); }
  S.call.ringTimer = setTimeout(async () => { const cc = S.call; if (cc && cc.id === id && cc.state === 'ringing') { try { await sb.rpc('set_call_status', { p_id: id, p_status: 'missed' }); } catch (e) {} endCallLocal('No answer'); } }, 45000);
}
async function acceptCall() {
  const inc = S.incoming; if (!inc) return; playRing(false); clearTimeout(inc.timer);
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: inc.kind === 'video' ? { facingMode: 'user' } : false }); }
  catch (e) { toast('Please allow the microphone to answer'); return declineCall(); }
  const { error } = await sb.rpc('set_call_status', { p_id: inc.id, p_status: 'accepted' });
  if (error) { stream.getTracks().forEach(t => t.stop()); S.incoming = null; paintIncoming(); return toast('This call has already ended'); }
  S.call = { id: inc.id, role: 'callee', peer: inc.caller_id, kind: inc.kind, local: stream, pending: [], state: 'connecting', label: 'Connecting...' };
  S.incoming = null; paintCall(); makePC(); armConnect();
  const { data } = await sb.from('call_signals').select('id,call_id,kind,payload').eq('call_id', S.call.id).eq('to_id', S.user.id).order('id');
  for (const s of (data || [])) await handleSignal(s);
}
async function declineCall() { const inc = S.incoming; if (!inc) return; try { await sb.rpc('set_call_status', { p_id: inc.id, p_status: 'declined' }); } catch (e) {} dismissIncoming(); }
async function flipCamera() {
  const c = S.call; if (!c || !c.pc) return; c.facing = c.facing === 'environment' ? 'user' : 'environment';
  try {
    const ns = await navigator.mediaDevices.getUserMedia({ video: { facingMode: c.facing } }), nt = ns.getVideoTracks()[0];
    const snd = c.pc.getSenders().find(s => s.track && s.track.kind === 'video'); if (snd) await snd.replaceTrack(nt);
    c.local.getVideoTracks().forEach(t => { t.stop(); c.local.removeTrack(t); }); c.local.addTrack(nt);
    const lv = $('#clv'); if (lv) lv.srcObject = c.local;
  } catch (e) { toast('Could not switch the camera'); }
}

/* ---------- live streaming (Agora) ---------- */
const AGORA_URLS = [
  'https://download.agora.io/sdk/release/AgoraRTC_N-4.23.2.js',
  'https://download.agora.io/sdk/release/AgoraRTC_N-4.22.0.js',
  'https://download.agora.io/sdk/release/AgoraRTC_N-4.20.2.js',
  'https://cdn.jsdelivr.net/npm/agora-rtc-sdk-ng@4.20.2/AgoraRTC_N-production.js',
  'https://cdn.jsdelivr.net/npm/agora-rtc-sdk-ng@4/AgoraRTC_N-production.js'
];
function loadAgora() {
  return new Promise((res, rej) => {
    if (window.AgoraRTC) return res(window.AgoraRTC);
    let i = 0;
    const next = () => {
      if (i >= AGORA_URLS.length) return rej(new Error('agora'));
      const s = document.createElement('script'); s.src = AGORA_URLS[i++];
      s.onload = () => window.AgoraRTC ? res(window.AgoraRTC) : next(); s.onerror = next; document.head.appendChild(s);
    };
    next();
  });
}
async function liveToken(host, role) {
  const { data: { session } } = await sb.auth.getSession();
  const r = await fetch(SUPA_URL + '/functions/v1/agora-token', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + (session ? session.access_token : ''), apikey: SUPA_KEY }, body: JSON.stringify({ channel: 'live-' + host, role }) });
  const j = await r.json().catch(() => ({})); if (!r.ok) throw new Error(j.error || 'token'); return j;
}
async function loadLive() {
  const { data, error } = await sb.from('live_streams').select('id,host_id,title,started_at').eq('status', 'live').gt('last_ping', new Date(Date.now() - 90000).toISOString()).order('started_at', { ascending: false }).limit(20);
  if (error) throw error;
  await loadProfiles((data || []).map(x => x.host_id));
  S.lives = (data || []).filter(x => x.host_id !== S.user.id);
}
const liveItems = () => (S.lives || []).map(l => `<button class="story" data-a="livewatch" data-id="${l.id}" data-h="${l.host_id}"><span class="ring live">${avOf(l.host_id, 56)}<i class="livetag">LIVE</i></span>${esc(nameOf(l.host_id).split(' ')[0])}</button>`).join('');
function openGoLive() {
  if (S.live || S.call) return toast('Finish your live or call first');
  S.liveSave = true;
  sheet(`<h2>Live streaming</h2><div class="fld"><label for="lvt">Title (optional)</label><input id="lvt" maxlength="80" placeholder="What is your live about?"></div>
    <div class="note">Anyone on KiHelp can watch. Use Wi-Fi if you can, and keep this screen open while you are live.</div>
    <div class="srow" style="padding:6px 0 14px;border:0"><div><div class="lbl">Save this live</div><div class="ls">Keep a copy in My lives. It uses your storage, about 6 MB per minute.</div></div><button class="switch on" id="lvsave" role="switch" aria-checked="true" data-a="tglsave"><i></i></button></div>
    <button class="btn" id="lvgo" data-a="lvstart">Start streaming</button>`);
}
function paintLive() {
  const L = S.live, el = $('#live'); if (!el) return;
  if (!L) { el.classList.remove('open'); el.innerHTML = ''; return; }
  const host = L.role === 'host';
  el.innerHTML = `<div class="lv-wrap"><div class="lv-video" id="lvv"></div>
    <div class="lv-top">${host ? '' : `<span class="lv-who">${avOf(L.host, 34)}<b>${esc(nameOf(L.host))}</b></span>`}<span class="lv-badge">LIVE</span><span class="lv-n" id="lvn">0 watching</span><span style="flex:1"></span>${host ? '<button class="lv-end" data-a="lvend">End</button>' : `<button class="lv-ic" data-a="lvmenu" aria-label="More options">${I.more}</button><button class="lv-ic" data-a="lvleave" aria-label="Leave">${I.x}</button>`}</div>
    ${L.title ? `<div class="lv-title">${esc(L.title)}</div>` : ''}
    <div class="lv-msgs" id="lvm"></div>
    <div class="lv-bar"><input id="lvi" maxlength="200" placeholder="Say something..." autocomplete="off"><button class="lv-ic" data-a="lvsend" aria-label="Send">${I.send}</button>${host ? '' : '<button class="lv-ic" data-a="lvgift" aria-label="Send a gift">🎁</button>'}<button class="lv-ic" data-a="lvheart" aria-label="Heart">❤️</button></div></div>`;
  el.classList.add('open');
  if (host && L.tracks && L.tracks[1]) L.tracks[1].play($('#lvv'));
  paintLiveMsgs();
}
async function addLiveMsg(row) {
  const L = S.live; if (!L || L.id !== row.stream_id) return;
  await loadProfiles([row.user_id]); if (L.msgs.some(m => m.id === row.id)) return;
  L.msgs.push({ id: row.id, uid: row.user_id, t: row.body }); if (L.msgs.length > 60) L.msgs.shift(); paintLiveMsgs();
}
function paintLiveMsgs() {
  const b = $('#lvm'), L = S.live; if (!b || !L) return;
  b.innerHTML = L.msgs.slice(-8).map(m => `<div class="lv-m"><button data-a="lvmsg" data-id="${m.uid}">${esc(nameOf(m.uid))}</button> ${esc(m.t)}</div>`).join('');
}
let lastHeart = 0;
function floatHeart() {
  const w = document.querySelector('#live .lv-wrap'); if (!w) return;
  const h = document.createElement('div'); h.className = 'lvh'; h.textContent = ['❤️', '💖', '💗', '💛'][Math.floor(Math.random() * 4)]; h.style.right = (12 + Math.random() * 56) + 'px';
  w.appendChild(h); setTimeout(() => h.remove(), 2300);
}
function joinLiveRoom() {
  const L = S.live;
  L.ch = sb.channel('kihelp-live-' + L.id, { config: { presence: { key: S.user.id }, broadcast: { self: false } } })
    .on('presence', { event: 'sync' }, () => { if (!S.live || S.live.id !== L.id) return; L.viewers = Math.max(0, Object.keys(L.ch.presenceState()).length - 1); const e = $('#lvn'); if (e) e.textContent = L.viewers + ' watching'; })
    .on('broadcast', { event: 'heart' }, () => floatHeart())
    .on('broadcast', { event: 'kick' }, ({ payload }) => { if (payload && payload.uid === S.user.id) { toast('You were removed from this live'); leaveLive(); } })
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'live_messages', filter: 'stream_id=eq.' + L.id }, p => addLiveMsg(p.new))
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'live_streams', filter: 'id=eq.' + L.id }, p => { if (p.new && p.new.status === 'ended' && S.live && S.live.role === 'viewer' && S.live.id === L.id) { toast('The live has ended'); leaveLive(); } })
    .subscribe(st => { if (st === 'SUBSCRIBED') { try { L.ch.track({ at: Date.now() }); } catch (e) {} } });
  sb.from('live_messages').select('id,stream_id,user_id,body').eq('stream_id', L.id).order('id', { ascending: false }).limit(15).then(async ({ data }) => {
    if (!data || !S.live || S.live.id !== L.id) return; await loadProfiles(data.map(x => x.user_id));
    data.reverse().forEach(r => { if (!L.msgs.some(m => m.id === r.id)) L.msgs.push({ id: r.id, uid: r.user_id, t: r.body }); }); paintLiveMsgs();
  });
}
async function leaveLive() {
  const L = S.live; if (!L) return; S.live = null;
  (L.timers || []).forEach(t => clearInterval(t));
  try { if (L.ch) sb.removeChannel(L.ch); } catch (e) {}
  try { if (L.tracks) L.tracks.forEach(t => { t.stop(); t.close(); }); } catch (e) {}
  try { if (L.client) { L.client.removeAllListeners(); await L.client.leave(); } } catch (e) {}
  paintLive();
}
async function startLive() {
  if (S.live) return; const title = ($('#lvt') ? $('#lvt').value.trim() : '').slice(0, 80);
  const fail = m => { busy('#lvgo', false, 'Start streaming'); toast(m); };
  busy('#lvgo', true, 'Starting...');
  let AR; try { AR = await loadAgora(); } catch (e) { return fail('Could not load the live video tool. Check your internet.'); }
  let tracks;
  try { const cfg = S.saver ? { width: 480, height: 854, frameRate: 20, bitrateMax: 600 } : { width: 720, height: 1280, frameRate: 24, bitrateMax: 1500 }; tracks = await AR.createMicrophoneAndCameraTracks({}, { encoderConfig: cfg }); }
  catch (e) { return fail('Please allow the camera and microphone to go live'); }
  const closeAll = () => tracks.forEach(t => { try { t.stop(); t.close(); } catch (x) {} });
  const { data: id, error } = await sb.rpc('start_live', { p_title: title || null });
  if (error || !id) { closeAll(); return fail('Could not start the live'); }
  let tk; try { tk = await liveToken(S.user.id, 'host'); } catch (e) { closeAll(); await sb.rpc('end_live'); return fail('Could not connect to the live service'); }
  const client = AR.createClient({ mode: 'live', codec: 'vp8' }); client.setClientRole('host');
  try { await client.join(tk.appId, tk.channel, tk.token, tk.uid); await client.publish(tracks); }
  catch (e) { closeAll(); try { await client.leave(); } catch (x) {} await sb.rpc('end_live'); return fail('Could not go live (' + ((e && (e.code || e.message)) || 'error') + ')'); }
  client.on('token-privilege-will-expire', async () => { try { const t = await liveToken(S.user.id, 'host'); await client.renewToken(t.token); } catch (e) {} });
  closeSheet();
  S.live = { id, host: S.user.id, role: 'host', client, tracks, title, msgs: [], viewers: 0, started: Date.now(), peak: 0, timers: [] };
  S.live.save = !!S.liveSave; paintLive(); joinLiveRoom(); startReplayRecording(S.live);
  S.live.timers.push(setInterval(() => { const L = S.live; if (L) { L.peak = Math.max(L.peak, L.viewers); sb.rpc('live_ping', { p_stream: L.id, p_viewers: L.peak }); if (L.rec && L.rec.ok > 0) sb.rpc('save_live_replay', { p_stream: L.id, p_parts: L.rec.ok, p_ext: L.rec.ext, p_seconds: Math.floor((Date.now() - L.started) / 1000) }); } }, 20000));
}
async function watchLive(streamId, hostId) {
  if (S.live || S.call) return toast('Finish your live or call first');
  let AR; try { AR = await loadAgora(); } catch (e) { return toast('Could not load the live video tool. Check your internet.'); }
  let tk; try { tk = await liveToken(hostId, 'audience'); } catch (e) { return toast(/removed/i.test(e.message || '') ? 'You were removed from this live' : 'This live is not on right now'); }
  await loadProfiles([hostId]);
  const client = AR.createClient({ mode: 'live', codec: 'vp8' }); client.setClientRole('audience');
  S.live = { id: tk.streamId || streamId, host: hostId, role: 'viewer', client, title: ((S.lives || []).find(l => l.id === streamId) || {}).title || '', msgs: [], viewers: 0, timers: [] };
  paintLive();
  client.on('user-published', async (user, type) => {
    try { await client.subscribe(user, type); } catch (e) { return; }
    if (type === 'video') { const box = $('#lvv'); if (box) { box.innerHTML = ''; user.videoTrack.play(box); } }
    if (type === 'audio') user.audioTrack.play();
  });
  client.on('user-left', () => { if (S.live && S.live.client === client) { toast('The live has ended'); leaveLive(); } });
  client.on('token-privilege-will-expire', async () => { try { const t = await liveToken(hostId, 'audience'); await client.renewToken(t.token); } catch (e) {} });
  try { await client.join(tk.appId, tk.channel, tk.token, tk.uid); }
  catch (e) { leaveLive(); return toast('Could not join the live'); }
  joinLiveRoom();
}

/* ---------- translation ---------- */
const TLANGS = [['en', 'English'], ['am', 'አማርኛ (Amharic)'], ['om', 'Afaan Oromoo'], ['ti', 'ትግርኛ (Tigrinya)'], ['so', 'Soomaali'], ['sw', 'Kiswahili'], ['ar', 'العربية (Arabic)'], ['fr', 'Français'], ['es', 'Español'], ['pt', 'Português'], ['de', 'Deutsch'], ['it', 'Italiano'], ['ru', 'Русский'], ['zh', '中文 (Chinese)'], ['ja', '日本語'], ['ko', '한국어'], ['hi', 'हिन्दी'], ['bn', 'বাংলা'], ['ur', 'اردو'], ['tr', 'Türkçe'], ['id', 'Bahasa Indonesia'], ['vi', 'Tiếng Việt'], ['th', 'ไทย'], ['nl', 'Nederlands'], ['pl', 'Polski'], ['uk', 'Українська'], ['fa', 'فارسی'], ['he', 'עברית'], ['ha', 'Hausa'], ['yo', 'Yorùbá'], ['ig', 'Igbo'], ['zu', 'isiZulu'], ['af', 'Afrikaans'], ['rw', 'Kinyarwanda'], ['mg', 'Malagasy']];
const tlangName = c => (TLANGS.find(x => x[0] === c) || [c, c])[1];
const txOk = t => typeof t === 'string' && t.trim().length >= 2 && /\p{L}/u.test(t) && !/^kihelp:\/\//.test(t);
const txShow = (k, raw) => (S.txon.has(k) && S.txout[k]) ? S.txout[k] : raw;
function txLink(k, raw) {
  if (!txOk(raw)) return '';
  S.txsrc[k] = raw;
  return S.txon.has(k) ? `<button class="txl" data-a="txt" data-k="${k}">Translated to ${esc(tlangName(S.tlang))} · See original</button><button class="txl" data-a="txchg">Change language</button>` : `<button class="txl" data-a="txt" data-k="${k}">Translate</button>`;
}
async function translateText(text, target) {
  const { data: { session } } = await sb.auth.getSession();
  const r = await fetch(SUPA_URL + '/functions/v1/translate', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + (session ? session.access_token : ''), apikey: SUPA_KEY }, body: JSON.stringify({ text: text.slice(0, 1500), target }) });
  const j = await r.json().catch(() => ({})); if (!r.ok || !j.translated) throw new Error(j.error || 'translate'); return j.translated;
}
function txRepaint() { repaint(); if ($('#msgs')) { const t = curThread(); if (t) paintMsgs(t); } if ($('#gmsgs')) paintGroupMsgs(); }
async function doTranslate(k) {
  const raw = S.txsrc[k]; if (!raw) return;
  if (!S.txout[k]) { toast('Translating...'); try { S.txout[k] = await translateText(raw, S.tlang); } catch (e) { return toast('Could not translate right now. Try again soon.'); } }
  S.txon.add(k); txRepaint();
}
function openTxLang() {
  sheet(`<h2>Translate into</h2><div class="langlist">${TLANGS.map(([c, n]) => `<button class="optrow ${S.tlang === c ? 'sel' : ''}" data-a="txlang" data-id="${c}"><span>${esc(n)}</span><span class="rdio"></span></button>`).join('')}</div>`);
}
function setTlang(c) { S.tlang = c; saveSettings(); S.txon.clear(); S.txout = {}; }
document.addEventListener('change', e => { if (e.target.id === 'tlang') { setTlang(e.target.value); toast('Translation language saved'); } });

/* ---------- profile: banner, links, tabs ---------- */
const bannerHTML = p => safeUrl(p && p.banner_url) ? `<div class="banner"><img src="${esc(p.banner_url)}" alt=""></div>` : '<div class="banner nob"></div>';
const linksHTML = p => {
  const L = (Array.isArray(p && p.links) ? p.links : []).filter(l => l && /^https:\/\//i.test(l.url || ''));
  return L.length ? `<div class="plinks">${L.map(l => { let h = ''; try { h = new URL(l.url).hostname.replace(/^www\./, ''); } catch (e) {} return `<a class="lnk" href="${esc(l.url)}" target="_blank" rel="noopener nofollow ugc">🔗 ${esc(l.label || h)}</a>`; }).join('')}</div>` : '';
};
function mediaGrid(posts, type) {
  const cells = [];
  (posts || []).forEach(p => (p.media || []).forEach((m, i) => { if (m.type === type) cells.push(`<button data-a="gview" data-id="${p.id}" data-i="${i}">${type === 'video' ? `<video src="${esc(m.url)}#t=0.1" muted playsinline preload="metadata"></video>` : `<img src="${esc(m.url)}" alt="" loading="lazy">`}</button>`); }));
  return cells.length ? `<div class="mgrid">${cells.join('')}</div>` : `<div class="empty" style="padding:30px 16px">No ${type === 'video' ? 'videos' : 'photos'} yet.</div>`;
}
const ptabs = cur => `<div class="ptabs">${[['posts', 'Posts'], ['photos', 'Photos'], ['videos', 'Videos']].map(([k, l]) => `<button class="${cur === k ? 'on' : ''}" data-a="ptab" data-id="${k}">${l}</button>`).join('')}</div>`;
function meTabs() {
  const t = S.mtab || 'posts';
  const body = t === 'posts' ? (S.myPosts.length ? S.myPosts.map(postCard).join('') : '<div class="empty" style="padding:20px 16px">No posts yet.</div>')
    : t === 'photos' ? mediaGrid(S.myPosts, 'image') : (vgridHTML(S.myVideos) + mediaGrid(S.myPosts, 'video'));
  return ptabs(t) + body;
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
  let before = 0; try { before = (await navigator.storage.estimate()).usage || 0; } catch (e) {}
  try { if (window.caches) for (const k of await caches.keys()) await caches.delete(k); } catch (e) {}
  try { sessionStorage.clear(); } catch (e) {}
  S.loaded.clear(); S.q = ''; S.cat = 'All'; S.opt = 'all'; S.sig = {};
  let after = before; try { after = (await navigator.storage.estimate()).usage || 0; } catch (e) {}
  const freed = Math.max(0, before - after);
  toast(tr('cleared') + (freed > 51200 ? ' · ' + (freed / 1048576).toFixed(1) + ' MB freed' : ''));
  showUsage();
}
let setPageKey = null;
const sw2 = (on, a, v) => `<button class="switch ${on ? 'on' : ''}" role="switch" aria-checked="${on}" data-a="${a}"${v ? ` data-v="${v}"` : ''}><i></i></button>`;
const SET_SECTIONS = [
  { title: 'How you use KiHelp', rows: [['saved', '🔖', 'Saved', 'Posts you saved'], ['notifs', '🔔', 'Notifications', 'Alerts for messages, calls and more'], ['invite', '📨', 'Invite friends', 'Share KiHelp']] },
  { title: 'Subscription', rows: [['sub', '⭐', 'Subscriptions', 'Verified badge and premium (coming soon)']] },
  { title: 'Creator tools', rows: [['dash', '📈', 'Dashboard', 'Your numbers at a glance'], ['pro', '💼', 'Professional dashboard', 'Reach, audience and earnings'], ['lives', '🔴', 'My lives', 'Watch, share or delete saved lives'], ['wallet', '🪙', 'Wallet and gifts', 'Coins and creator earnings']] },
  { title: 'Who can see you', rows: [['privacy', '🔒', 'Privacy and search', 'Find me by email or phone'], ['defvis', '🌍', 'Default post audience', 'Who sees your new posts'], ['blocked', '⛔', 'Blocked accounts', 'People you blocked']] },
  { title: 'How others can interact with you', rows: [['comments', '💬', 'Comments', 'Turn comments on or off for new posts'], ['react', '❤️', 'Reactions', 'Choose reactions allowed on new posts'], ['mentions', '@', 'Mentions', 'Who can mention you']] },
  { title: 'What you see', rows: [['lang', '🌐', 'App language', 'Language of menus and buttons'], ['tlang', '🈯', 'Translation', 'Language to translate posts into'], ['content', '👀', 'Content and data', 'Data saver and media']] },
  { title: 'Your app and media', rows: [['appearance', '🌗', 'Appearance', 'Light or dark, accent colour'], ['media', '🖼️', 'Media, storage and cache', 'Data saver, clear cache'], ['install', '📲', 'Install KiHelp', 'Add it to your home screen']] },
  { title: 'Family center', rows: [['family', '👪', 'Family center', 'Supervision tools (coming soon)']] },
  { title: 'Your orders and funds', rows: [['orders', '🧾', 'Orders', 'Purchases and sales (coming soon)'], ['funds', '💰', 'Funds and payouts', 'Wallet balance']] },
  { title: 'Help and support', rows: [['help', '❓', 'Help and support', 'Contact us or report a problem'], ['privacypol', '📄', 'Privacy Policy', ''], ['terms', '📜', 'Terms of Use', ''], ['rules', '🤝', 'Community rules', '']] },
  { title: 'Account', rows: [['accounts', '👤', 'Switch or add account', ''], ['logout', '↩️', 'Log out', ''], ['delete', '🗑️', 'Delete my account', '']] }
];
function settingsListHTML() {
  const q = (S.setq || '').trim().toLowerCase();
  const secs = SET_SECTIONS.map(s => ({ title: s.title, rows: s.rows.filter(r => !q || (r[2] + ' ' + r[3] + ' ' + s.title).toLowerCase().includes(q)) })).filter(s => s.rows.length);
  return secs.length ? secs.map(s => `<h3 class="sub setsec">${s.title}</h3>` + s.rows.map(r => `<button class="setrow" data-a="setgo" data-id="${r[0]}"><span class="si">${r[1]}</span><span class="tx"><b>${r[2]}</b>${r[3] ? `<small>${r[3]}</small>` : ''}</span><span class="chev">›</span></button>`).join('')).join('') : '<div class="empty" style="padding:40px 24px">No settings match.</div>';
}
function openSettingsHub() {
  setPageKey = null; const p = S.profile || {};
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">Settings and activity</b></header><div class="setbody" id="setbody">
    <div style="padding:12px 16px 4px"><input id="setq" type="search" placeholder="Search settings" value="${esc(S.setq || '')}"></div>
    <button class="setacct" data-a="setprof">${avOf(S.user.id, 52)}<span class="tx"><b>${esc(p.display_name || 'Member')}</b><span class="ls" style="display:block">${p.username ? '@' + esc(p.username) + ' · ' : ''}View profile</span></span><span class="chev">›</span></button>
    <div id="setlist">${settingsListHTML()}</div><div class="ls" style="padding:16px">KiHelp</div></div></div>`;
}
function setPage(title, body) {
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">${title}</b></header><div class="setbody" id="spbody">${body}</div></div>`;
}
const infoPage = (title, text) => setPage(title, `<div style="padding:20px 16px"><p>${text}</p></div>`);
function openSetPage(key) {
  setPageKey = key; const pc = S.pc || {}; const AC = { teal: '#0e6b6b', saffron: '#f0a800', violet: '#6b46c9', rose: '#d6336c' };
  if (key === 'notifs') { setPage('Notifications', '<div id="pushrow"><div class="srow"><div class="ls">Checking...</div></div></div>'); paintPushRow(); }
  else if (key === 'privacy') setPage('Privacy and search', `<div class="srow"><div><div class="lbl">Find me by email</div><div class="ls">Only people who type your exact email can find you</div></div>${sw2(pc.allow_email_search, 'tglemail')}</div>
    <div class="srow col"><div class="lbl">Phone number</div><input id="phone" type="tel" inputmode="tel" placeholder="+251912345678" value="${esc(pc.phone || '')}" maxlength="20" autocomplete="tel"><div class="ls">Include your country code. Only you can see it.</div><button class="btn alt" data-a="savephone">Save phone</button></div>
    <div class="srow"><div><div class="lbl">Find me by phone</div><div class="ls">Only people who type your exact number can find you</div></div>${sw2(pc.allow_phone_search, 'tglphone')}</div>`);
  else if (key === 'defvis') setPage('Default post audience', `<div class="srow col"><div class="lbl">New posts are seen by</div><div class="seg c3">${[['public', 'Public'], ['friends', 'Friends'], ['private', 'Only me']].map(([k, l]) => `<button class="${(S.defVis || 'public') === k ? 'on' : ''}" data-a="defvis" data-id="${k}">${l}</button>`).join('')}</div><div class="ls">You can still change it for each post.</div></div>`);
  else if (key === 'comments') setPage('Comments', `<div class="srow"><div><div class="lbl">Allow comments on new posts</div><div class="ls">Turn this off to start new posts with comments closed. You can change any post later from its menu.</div></div>${sw2(S.defComments !== false, 'tgldefcm')}</div>`);
  else if (key === 'react') setPage('Reactions', `<div style="padding:12px 16px"><p class="ls" style="margin-bottom:8px">Reactions people may use on your new posts.</p><div class="rxpick">${RXLIST.map(e => `<button class="${!S.defRx || S.defRx.includes(e) ? 'on' : ''}" data-a="defrxsel" data-e="${e}">${e}</button>`).join('')}</div><div class="dots" style="margin-top:12px"><button class="chip" data-a="defrxall">All</button><button class="chip" data-a="defrxnone">None</button></div></div>`);
  else if (key === 'mentions') infoPage('Mentions', 'Anyone on KiHelp can mention you with @' + esc((S.profile && S.profile.username) || 'username') + '. If someone bothers you, block or report them from their profile.');
  else if (key === 'lang') setPage('App language', `<div class="srow col"><select id="lang" aria-label="Language">${Object.entries(LANGS).map(([k, v]) => `<option value="${k}" ${S.lang === k ? 'selected' : ''}>${v.name}</option>`).join('')}</select></div>`);
  else if (key === 'tlang') setPage('Translation', `<div class="srow col"><div class="lbl">Translate posts and messages into</div><select id="tlang" aria-label="Translation language"><option value="">Ask me each time</option>${TLANGS.map(([c, n]) => `<option value="${c}" ${S.tlang === c ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select><div class="ls">Tap Translate under any post, comment or message.</div></div>`);
  else if (key === 'content') setPage('Content and data', `<div class="srow"><div><div class="lbl">${tr('saver')}</div><div class="ls">${tr('saverDesc')}</div></div>${sw2(S.saver, 'togglesaver')}</div>`);
  else if (key === 'appearance') setPage('Appearance', `<div class="srow col"><div class="lbl">${tr('mode')}</div><div class="seg">${['light', 'dark'].map(m => `<button class="${S.mode === m ? 'on' : ''}" data-a="mode" data-id="${m}">${tr(m)}</button>`).join('')}</div></div>
    <div class="srow col"><div class="lbl">${tr('accent')}</div><div class="dots"><button class="chip ${S.accent === 'auto' ? 'on' : ''}" data-a="accent" data-id="auto">${tr('auto')}</button>${Object.entries(AC).map(([k, c]) => `<button class="dotb ${S.accent === k ? 'on' : ''}" style="background:${c}" data-a="accent" data-id="${k}" aria-label="${k}"></button>`).join('')}</div></div>`);
  else if (key === 'media') { setPage('Media, storage and cache', `<div class="srow"><div><div class="lbl">${tr('saver')}</div><div class="ls">${tr('saverDesc')}</div></div>${sw2(S.saver, 'togglesaver')}</div>
    <div class="srow"><div><div class="lbl">${tr('storage')}</div><div class="ls" id="usage">...</div></div><button class="btn sm" data-a="clearcache">${tr('clear')}</button></div>`); showUsage(); }
  else if (key === 'sub') infoPage('Subscriptions', 'KiHelp Verified and creator subscriptions are coming once payments are connected.');
  else if (key === 'family') infoPage('Family center', 'Tools for parents and guardians to supervise teen accounts are coming soon.');
  else if (key === 'orders') infoPage('Orders', 'Your purchases and sales will appear here once checkout and delivery are connected.');
  else if (key === 'help') setPage('Help and support', `<div class="srow"><a class="lbl" href="mailto:${esc(CONTACT_EMAIL)}" style="flex:1">Contact us</a></div><div class="srow"><a class="lbl" href="mailto:${esc(CONTACT_EMAIL)}?subject=Problem%20with%20KiHelp" style="flex:1">Report a problem</a></div><div class="srow"><button class="lbl" data-a="setgo" data-id="privacypol" style="flex:1">Privacy Policy</button></div><div class="srow"><button class="lbl" data-a="setgo" data-id="terms" style="flex:1">Terms of Use</button></div><div class="srow"><button class="lbl" data-a="setgo" data-id="rules" style="flex:1">Community rules</button></div>`);
}
function openSettings() { if (setPageKey) openSetPage(setPageKey); else openSettingsHub(); }
async function openDashboard(pro) {
  setPage(pro ? 'Professional dashboard' : 'Dashboard', '<div class="empty" style="padding:40px">Loading...</div>');
  try {
    const me = S.user.id, cnt = q => q.then(r => r.count || 0);
    const pr = (await sb.from('posts').select('id,content,created_at').eq('user_id', me).order('created_at', { ascending: false }).limit(200)).data || [], pids = pr.map(x => x.id);
    const [fol, fing, rx, cm, vv, lv, gw] = await Promise.all([
      cnt(sb.from('follows').select('follower_id', { count: 'exact', head: true }).eq('following_id', me)),
      cnt(sb.from('follows').select('follower_id', { count: 'exact', head: true }).eq('follower_id', me)),
      pids.length ? sb.from('post_likes').select('post_id').in('post_id', pids).limit(5000) : Promise.resolve({ data: [] }),
      pids.length ? cnt(sb.from('comments').select('id', { count: 'exact', head: true }).in('post_id', pids)) : Promise.resolve(0),
      sb.from('videos').select('views').eq('user_id', me).limit(500),
      sb.from('live_streams').select('peak_viewers').eq('host_id', me).limit(200),
      loadGiftData().then(() => S.wallet).catch(() => null)
    ]);
    const rxs = rx.data || [], views = (vv.data || []).reduce((a, x) => a + (Number(x.views) || 0), 0), peak = (lv.data || []).reduce((a, x) => Math.max(a, x.peak_viewers || 0), 0);
    const card = (n, l) => `<div class="dcard"><b>${coinFmt(n)}</b><small>${l}</small></div>`;
    let extra = '';
    if (pro) {
      const by = {}; rxs.forEach(x => { by[x.post_id] = (by[x.post_id] || 0) + 1; });
      const top = pr.map(x => ({ x, n: by[x.id] || 0 })).sort((a, b) => b.n - a.n).slice(0, 5).filter(t => t.n > 0);
      const fl = (await sb.from('follows').select('follower_id').eq('following_id', me).limit(300)).data || [];
      await loadProfiles(fl.map(x => x.follower_id)); const cc = {}; fl.forEach(x => { const c = (S.pf[x.follower_id] || {}).country; if (c) cc[c] = (cc[c] || 0) + 1; });
      const tc = Object.entries(cc).sort((a, b) => b[1] - a[1]).slice(0, 5);
      extra = `<h3 class="sub">Top posts</h3>${top.length ? top.map(t => `<div class="item"><p>${esc((t.x.content || 'Photo or video post').slice(0, 70))}<small>${t.n} reactions</small></p></div>`).join('') : '<div class="empty" style="padding:16px">No reactions yet.</div>'}
        <h3 class="sub">Where your followers are</h3>${tc.length ? tc.map(([c, n]) => `<div class="item"><p>${esc(c)}<small>${n} follower${n === 1 ? '' : 's'}</small></p></div>`).join('') : '<div class="empty" style="padding:16px">Followers have not shared a country yet.</div>'}
        <h3 class="sub">Earnings</h3><div class="dgrid">${card(gw ? gw.earnings : 0, 'Creator earnings')}${card(gw ? gw.coins : 0, 'Coins in wallet')}</div><p class="ls" style="padding:0 16px 16px">Test mode: earnings have no cash value yet.</p>`;
    }
    const b = $('#spbody'); if (!b) return;
    b.innerHTML = `<div class="dgrid">${card(fol, 'Followers')}${card(fing, 'Following')}${card(pr.length, 'Posts')}${card(rxs.length, 'Reactions received')}${card(cm, 'Comments received')}${card(views, 'Video views')}${card(peak, 'Best live audience')}${card((S.videos || []).length ? S.myVideos.length : S.myVideos.length, 'Videos posted')}</div>${extra}`;
  } catch (e) { const b = $('#spbody'); if (b) b.innerHTML = '<div class="empty" style="padding:40px">Could not load your numbers.</div>'; }
}

/* ---------- actions ---------- */
const busy = (sel, on, label) => { const b = $(sel); if (b) { b.disabled = on; if (label) b.textContent = label; } };
const ACT = {
  tab: id => { S.tab = id; render(); refresh(); },
  retry: () => { S.ready[S.tab] = 0; render(true); refresh(); },
  amode: id => { S.authMode = id; showAuth(); },
  settings: () => openSettingsHub(),
  setprof: () => { setPageKey = null; S.ovStack.length = 0; $('#over').innerHTML = ''; S.tab = 'me'; render(); refresh(); },
  setgo: id => {
    const m = { saved: () => openSaved(), wallet: () => openWallet(), funds: () => openWallet(), lives: () => openMyLives(), blocked: () => openBlocked(), dash: () => openDashboard(false), pro: () => openDashboard(true), privacypol: () => openLegal('privacy'), terms: () => openLegal('terms'), rules: () => openLegal('rules'), accounts: () => ACT.accounts(), logout: () => ACT.logout(), delete: () => ACT.delacct(), install: () => ACT.install(), invite: () => ACT.invite() };
    if (m[id]) m[id](); else openSetPage(id);
  },
  defvis: id => { S.defVis = id; saveSettings(); openSettings(); },
  tgldefcm: () => { S.defComments = S.defComments === false; saveSettings(); openSettings(); },
  defrxsel: (id, el) => { const e = el.dataset.e, cur = new Set(S.defRx || RXLIST); cur.has(e) ? cur.delete(e) : cur.add(e); S.defRx = cur.size === RXLIST.length ? null : [...cur]; saveSettings(); openSettings(); },
  defrxall: () => { S.defRx = null; saveSettings(); openSettings(); },
  defrxnone: () => { S.defRx = []; saveSettings(); openSettings(); },
  mode: id => { S.mode = id; saveSettings(); applyTheme(); openSettings(); },
  accent: id => { S.accent = id; saveSettings(); applyTheme(); openSettings(); },
  togglesaver: () => { S.saver = !S.saver; S.loaded.clear(); saveSettings(); applyTheme(); openSettings(); },
  clearcache: () => clearCache(),
  logout: async () => {
    if (!confirm('Log out of this account?')) return;
    try { await removeDevicePush(); } catch (e) {}
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
  gview: (id, el) => { const p = findPost(id); if (p) openViewer(p.media, +el.dataset.i || 0, p.dl); },
  ptab: id => { if ($('#pposts') && S.prof) { S.prof.tab = id; paintProfile(); } else { S.mtab = id; render(true); } },
  editprofile: () => {
    const p = S.profile || {}, L = Array.isArray(p.links) ? p.links : []; S.bannerDraft = null;
    sheet(`<h2>Edit profile</h2>
      <div class="fld"><label>Banner</label><label class="up"><input type="file" id="bfile" accept="image/*" hidden><span id="bprev">${I.plus}</span>Change banner</label></div>
      <div class="fld">${uploadField('image/*', 'Change profile photo')}</div>
      <div class="fld"><label for="pn">Name</label><input id="pn" maxlength="50" value="${esc(p.display_name || '')}"></div>
      <div class="fld"><label for="pu">Username</label><div style="display:flex;align-items:center;gap:6px"><span class="lbl">@</span><input id="pu" maxlength="20" autocapitalize="none" autocomplete="off" value="${esc(p.username || '')}" placeholder="yourname"></div><div class="ls" style="margin-top:4px">3 to 20 letters, numbers or underscores</div></div>
      <div class="fld"><label for="pc">Country</label><input id="pc" maxlength="50" value="${esc(p.country || '')}"></div>
      <div class="fld"><label for="pb">About you</label><textarea id="pb" maxlength="300">${esc(p.bio || '')}</textarea></div>
      <div class="fld"><label>Links in your bio (up to 3)</label>${[0, 1, 2].map(i => `<div class="lkrow"><input id="lk${i}l" maxlength="30" placeholder="Label" value="${esc((L[i] && L[i].label) || '')}"><input id="lk${i}u" maxlength="200" inputmode="url" placeholder="https://" value="${esc((L[i] && L[i].url) || '')}"></div>`).join('')}</div>
      <button class="btn" id="profbtn" data-a="saveprofile">Save</button>`);
    bindUpload({ edit: true, ratio: '1:1' });
    const bf = $('#bfile');
    if (bf) bf.onchange = async () => {
      let f = bf.files[0]; if (!f) return; f = (await editImage(f, { ratio: '3:1' })) || f;
      S.bannerDraft = { file: f, prev: URL.createObjectURL(f) }; const bp = $('#bprev'); if (bp) bp.innerHTML = `<img src="${S.bannerDraft.prev}" alt="" style="width:56px;height:56px;border-radius:10px;object-fit:cover">`;
    };
  },
  saveprofile: async () => {
    const uname = $('#pu').value.trim().toLowerCase().replace(/^@/, '');
    if (uname && !/^[a-z0-9_]{3,20}$/.test(uname)) return toast('Username: 3 to 20 letters, numbers or _');
    const links = [];
    for (let i = 0; i < 3; i++) {
      const l = $('#lk' + i + 'l').value.trim().slice(0, 30); let u = $('#lk' + i + 'u').value.trim(); if (!u) continue;
      if (!/^https?:\/\//i.test(u)) u = 'https://' + u; u = u.replace(/^http:\/\//i, 'https://');
      if (!/^https:\/\/[^\s.]+\.[^\s]{2,}$/i.test(u)) return toast('Link ' + (i + 1) + ' does not look right');
      links.push({ label: l, url: u.slice(0, 200) });
    }
    busy('#profbtn', true, (S.draft || S.bannerDraft) ? 'Uploading...' : '...');
    const row = { username: uname || null, display_name: $('#pn').value.trim().slice(0, 50) || 'Member', country: $('#pc').value.trim().slice(0, 50) || null, bio: $('#pb').value.trim().slice(0, 300) || null, links };
    try {
      if (S.draft) row.avatar_url = (await uploadMedia(S.draft.file)).url;
      if (S.bannerDraft) row.banner_url = (await uploadMedia(S.bannerDraft.file)).url;
    } catch (e) { busy('#profbtn', false, 'Save'); return toast(upErr(e)); }
    const { error } = await sb.from('profiles').update(row).eq('id', S.user.id);
    if (error) { busy('#profbtn', false, 'Save'); return toast(error.code === '23505' ? 'That username is taken' : error.code === '23514' ? 'That username or link is not allowed' : 'Could not save'); }
    S.profile = { ...S.profile, ...row }; S.pf[S.user.id] = S.profile; closeSheet(); render(true); toast('Saved');
  },
  create: () => sheet(`<h2>Create</h2><div class="cgrid">
    <button class="ccard" data-a="cnew" data-id="live"><span>🔴</span><b>Live streaming</b><small>Broadcast now</small></button>
    <button class="ccard" data-a="cnew" data-id="video"><span>🎬</span><b>Video</b><small>Short video</small></button>
    <button class="ccard" data-a="cnew" data-id="event"><span>📅</span><b>Event</b><small>Plan a meetup</small></button>
    <button class="ccard" data-a="cnew" data-id="sell"><span>🛍️</span><b>Sell</b><small>List an item</small></button></div>
    <p class="ls" style="margin-top:12px">To write a post, use "What's on your mind?" on Home.</p>`),
  cnew: id => { closeSheet(); setTimeout(() => { const f = { video: ACT.vupload, live: ACT.golive, sell: ACT.sell, event: ACT.enew }[id]; if (f) f(); }, 60); },
  avview: id => { const p = S.pf[id], url = safeUrl(p && p.avatar_url); if (url) openViewer([{ type: 'image', url }], 0, false); else toast('No profile photo yet'); },
  xpand: (id, el) => { const t = el.previousElementSibling; if (!t) return; if (t.classList.contains('open')) { t.classList.remove('open'); if (t.dataset.xk) S.xp.delete(t.dataset.xk); el.textContent = 'See more'; } else { t.classList.add('open'); if (t.dataset.xk) S.xp.add(t.dataset.xk); el.textContent = 'See less'; } },
  sgdismiss: id => { S.suggest = (S.suggest || []).filter(p => p.id !== id); render(true); },
  sgall: () => openSearch(),
  tglsave: () => { S.liveSave = !S.liveSave; const b = $('#lvsave'); if (b) { b.classList.toggle('on', S.liveSave); b.setAttribute('aria-checked', String(S.liveSave)); } },
  mylives: () => openMyLives(),
  lvrow: id => {
    const s = (S.myLives || []).find(x => x.id === id); if (!s) return; const has = s.replay_parts > 0 && s.status !== 'live';
    sheet(`<h2>${esc(s.title || 'Live')}</h2><div class="ls" style="margin:-6px 0 8px">${esc(new Date(s.started_at).toLocaleString())}</div>
      ${has ? `<button class="optrow" data-a="lvplay" data-id="${s.id}">▶ Watch the saved live</button><button class="optrow" data-a="lvshare" data-id="${s.id}">${s.replay_public ? '🔒 Make it private again' : '🌍 Share it on my profile'}</button><button class="optrow red" data-a="lvdelrep" data-id="${s.id}">Delete the saved video</button>` : '<div class="ls" style="padding:6px 0">No saved video for this live.</div>'}
      ${s.status === 'live' ? '' : `<button class="optrow red" data-a="lvdel" data-id="${s.id}">Delete this live completely</button>`}`);
  },
  lvplay: id => { const s = (S.myLives || []).find(x => x.id === id); if (s) { closeSheet(); openReplay(s); } },
  lvshare: async id => {
    const s = (S.myLives || []).find(x => x.id === id); if (!s) return; closeSheet();
    const { error } = await sb.rpc('set_replay_public', { p_stream: id, p_public: !s.replay_public });
    if (error) return toast('Could not update'); toast(s.replay_public ? 'Now private' : 'Shared on your profile'); openMyLives();
  },
  lvdelrep: async id => {
    const s = (S.myLives || []).find(x => x.id === id); if (!s) return; closeSheet();
    if (!confirm('Delete the saved video of this live? This cannot be undone.')) return;
    await wipeReplayFiles(s); const { error } = await sb.rpc('clear_live_replay', { p_stream: id });
    if (error) return toast('Could not delete'); toast('Saved video deleted'); openMyLives();
  },
  lvdel: async id => {
    const s = (S.myLives || []).find(x => x.id === id); if (!s) return; closeSheet();
    if (!confirm('Delete this live and its saved video? This cannot be undone.')) return;
    await wipeReplayFiles(s); const { error } = await sb.rpc('remove_live', { p_stream: id });
    if (error) return toast('Could not delete'); toast('Live deleted'); openMyLives();
  },
  golive: () => openGoLive(),
  lvstart: () => startLive(),
  livewatch: (id, el) => watchLive(id, el.dataset.h),
  lvleave: () => leaveLive(),
  lvend: async () => {
    const L = S.live; if (!L || L.role !== 'host') return; if (!confirm('End your live now?')) return;
    const secs = Math.floor((Date.now() - L.started) / 1000), peak = Math.max(L.peak || 0, L.viewers || 0);
    let saved = 0; if (L.rec) { toast('Saving your live...'); try { saved = (await finishReplayRecording(L)) || 0; } catch (e) {} }
    try { await sb.rpc('live_ping', { p_stream: L.id, p_viewers: peak }); await sb.rpc('end_live'); } catch (e) {}
    await leaveLive(); toast('Live ended: ' + Math.floor(secs / 60) + ':' + String(secs % 60).padStart(2, '0') + ', up to ' + peak + ' watching' + (saved ? '. Saved to My lives' : ''));
  },
  lvsend: async () => {
    const L = S.live, i = $('#lvi'), v = i && i.value.trim(); if (!L || !v) return; i.value = '';
    const { error } = await sb.from('live_messages').insert({ stream_id: L.id, user_id: S.user.id, body: v });
    if (error) { i.value = v; toast('Could not send'); }
  },
  lvheart: () => { const L = S.live; if (!L || Date.now() - lastHeart < 150) return; lastHeart = Date.now(); floatHeart(); try { L.ch.send({ type: 'broadcast', event: 'heart', payload: {} }); } catch (e) {} },
  lvgift: () => { const L = S.live; if (L && L.role === 'viewer') openGift(L.host, 'profile', null); },
  lvmenu: () => { const L = S.live; if (L) sheet(`<h2>${esc(nameOf(L.host))}</h2><button class="optrow red" data-a="lvrpt">Report this live</button>`); },
  lvrpt: () => { const L = S.live; if (L) { closeSheet(); openReport('user', L.host, L.host); } },
  lvmsg: id => { const L = S.live; if (!L || L.role !== 'host' || id === S.user.id) return; sheet(`<h2>${esc(nameOf(id))}</h2><button class="optrow red" data-a="lvban" data-id="${id}">Remove from this live</button>`); },
  lvban: async id => {
    const L = S.live; if (!L) return; closeSheet();
    const { error } = await sb.rpc('ban_live_viewer', { p_stream: L.id, p_user: id });
    if (error) return toast('Could not remove this person');
    try { L.ch.send({ type: 'broadcast', event: 'kick', payload: { uid: id } }); } catch (e) {} toast('Removed from your live');
  },
  call: (id, el) => startCall(id, el.dataset.k),
  caccept: () => acceptCall(),
  cdecline: () => declineCall(),
  cend: () => hangup(),
  cmute: (id, el) => { const c = S.call; if (!c) return; const t = c.local.getAudioTracks(), on = !(t[0] && t[0].enabled); t.forEach(x => { x.enabled = on; }); el.classList.toggle('off', !on); },
  ccam: (id, el) => { const c = S.call; if (!c) return; const t = c.local.getVideoTracks(), on = !(t[0] && t[0].enabled); t.forEach(x => { x.enabled = on; }); el.classList.toggle('off', !on); },
  cflip: () => flipCamera(),
  pushon: async () => {
    try { await enablePush(); S.pushOffer = false; toast('Notifications are on'); }
    catch (e) { toast(e && e.message === 'denied' ? 'Notifications are blocked. Allow them in your browser settings.' : 'Could not turn on notifications'); }
    if ($('#pushrow')) paintPushRow(); else afterBg();
  },
  pushoff: async () => { try { await removeDevicePush(); toast('Notifications are off on this device'); } catch (e) { toast('Could not turn them off'); } paintPushRow(); },
  prefset: async (id, el) => { const k = el.dataset.v; await savePref(k, !(S.prefs && S.prefs[k])); paintPushRow(); },
  notifx: () => { store.set('kihelp.notifDismissed', '1'); render(true); },
  gift: (id, el) => openGift(id, el.dataset.t, el.dataset.i),
  giftsel: id => { S.giftSel = id; paintGiftSheet(); },
  giftqty: id => { S.giftQty = +id; paintGiftSheet(); },
  giftsend: async () => {
    const T = S.giftTo, g = S.gifts && S.gifts.find(x => x.id === S.giftSel); if (!T || !g) return;
    busy('#giftgo', true);
    const { data, error } = await sb.rpc('send_gift', { p_receiver: T.uid, p_gift: g.id, p_qty: S.giftQty, p_target_type: T.tType, p_target_id: T.tId ? String(T.tId) : null });
    if (error) {
      busy('#giftgo', false); const m = error.message || '';
      if (/enough coins/i.test(m)) { toast('Not enough coins'); openCoins(); } else toast(/yourself/i.test(m) ? 'You cannot send a gift to yourself' : 'Could not send the gift');
      return;
    }
    if (S.wallet) S.wallet.coins = data;
    closeSheet(); giftBurst(g.emoji, S.giftQty); toast('Sent ' + g.emoji + ' x' + S.giftQty + ' to ' + nameOf(T.uid));
  },
  coins: () => openCoins(),
  claim: async () => {
    const { data, error } = await sb.rpc('claim_test_coins');
    if (error) return toast(/later/i.test(error.message || '') ? 'You already claimed today' : 'Could not claim coins');
    if (S.wallet) S.wallet.coins = data; toast('50 coins added'); openCoins();
  },
  wallet: () => openWallet(),
  vspeed: () => {
    const r = [1, 1.5, 2, 0.5], i = r.indexOf(S.rate); S.rate = r[(i + 1) % r.length];
    document.querySelectorAll('.vid video').forEach(v => { v.playbackRate = S.rate; });
    document.querySelectorAll('.vspd').forEach(b => { b.textContent = S.rate + 'x'; });
    toast('Speed ' + S.rate + 'x');
  },
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
  gback: () => { if (layers().length) history.back(); else legacyBack(); },
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
        <button class="optrow" data-a="pcm" data-id="${p.id}">${p.cmOn === false ? '💬 Turn on comments' : '🚫 Turn off comments'}</button>
        <button class="optrow" data-a="prx" data-id="${p.id}">☺ Choose allowed reactions</button>
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
        <button class="optrow" data-a="gift" data-id="${p.uid}" data-t="post" data-i="${p.id}">🎁 Send a gift to ${esc(nameOf(p.uid))}</button>
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
    const v = document.querySelector(`video[data-vid="${id}"]`); if (v) { v.preload = 'auto'; v.muted = S.muted; v.playbackRate = S.rate; v.play().catch(() => {}); }
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

  like: id => {
    const p = findPost(id); if (!p) return;
    if (p.allowed && !p.allowed.length) return toast('Reactions are turned off for this post');
    const heart = (p.allowed && !p.allowed.includes('❤️')) ? p.allowed[0] : '❤️';
    setReaction(p, p.react ? null : heart);
  },
  react: (id, el) => { const bar = $('#rxbar'); if (bar) bar.remove(); const p = findPost(id), r = el.dataset.r; if (p && r) setReaction(p, p.react === r ? null : r); },
  rxtap: (id, el) => { const p = findPost(id), r = el.dataset.e; if (p && r) setReaction(p, p.react === r ? null : r); },
  rxadd: (id, el) => showReactBar(el),
  pcm: async id => {
    const p = findPost(id); if (!p) return; const on = p.cmOn === false;
    const { error } = await sb.from('posts').update({ comments_enabled: on }).eq('id', p.id).eq('user_id', S.user.id);
    if (error) return toast('Could not update'); p.cmOn = on; closeSheet(); repaint(); toast(on ? 'Comments are on' : 'Comments are off');
  },
  prx: id => { const p = findPost(id); if (!p) return; S.rxEdit = { id: p.id, sel: new Set(p.allowed || RXLIST) }; paintRxEdit(); },
  rxsel: (id, el) => { const E = S.rxEdit; if (!E) return; const e = el.dataset.e; E.sel.has(e) ? E.sel.delete(e) : E.sel.add(e); paintRxEdit(); },
  rxall: () => { if (S.rxEdit) { S.rxEdit.sel = new Set(RXLIST); paintRxEdit(); } },
  rxnone: () => { if (S.rxEdit) { S.rxEdit.sel = new Set(); paintRxEdit(); } },
  rxsave: async () => {
    const E = S.rxEdit; if (!E) return; const p = findPost(E.id); if (!p) return;
    const allowed = E.sel.size === RXLIST.length ? null : [...E.sel];
    const { error } = await sb.from('posts').update({ allowed_reactions: allowed }).eq('id', p.id).eq('user_id', S.user.id);
    if (error) return toast('Could not save'); p.allowed = allowed; closeSheet(); repaint(); toast('Saved');
  },
  repost: id => {
    closeSheet(); const p = findPost(id); if (!p) return;
    const base = p.repostOf ? p.orig : p; if (!base) return toast('This post is not available');
    if (!p.repostOf && p.vis !== 'public') return toast('Only public posts can be reposted');
    S.repostId = p.repostOf || p.id;
    setTimeout(() => sheet(`<h2>Repost</h2><div class="fld"><textarea id="rpt" maxlength="500" placeholder="Add a comment (optional)"></textarea></div><button class="btn" id="rpb" data-a="repostgo">Repost to my profile</button>`), 60);
  },
  repostgo: async () => {
    const id = S.repostId; if (!id) return; busy('#rpb', true, '...');
    const { error } = await sb.from('posts').insert({ user_id: S.user.id, content: ($('#rpt').value || '').trim(), repost_of: id, visibility: 'public' });
    if (error) { busy('#rpb', false, 'Repost to my profile'); return toast('Could not repost'); }
    closeSheet(); toast('Reposted to your profile'); try { await loadFeed(); } catch (e) {} render(true);
  },
  txt: async (id, el) => { const k = el.dataset.k; if (S.txon.has(k)) { S.txon.delete(k); return txRepaint(); } if (!S.tlang) { S.txPending = k; return openTxLang(); } doTranslate(k); },
  txchg: () => openTxLang(),
  txlang: id => { setTlang(id); closeSheet(); if (S.txPending) { const k = S.txPending; S.txPending = null; doTranslate(k); } else txRepaint(); },
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
  back: () => { if (layers().length) history.back(); else legacyBack(); },
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
    S.postVis = S.defVis || 'public'; S.allowDl = false; S.drafts = [];
    sheet(`<h2>New post</h2>
      <div class="fld"><textarea id="pt" data-mention maxlength="3000" placeholder="What's on your mind? Type @ to mention someone"></textarea><button class="chip" type="button" style="margin-top:8px" data-a="emo" data-t="#pt" data-p="#emop2">😊 Emoji</button><div id="emop2" class="emop" hidden></div></div>
      <div class="fld"><label class="up"><input type="file" id="files" accept="image/*,video/mp4,video/webm,video/quicktime" multiple hidden><span id="prev">${I.plus}</span><span id="addtxt">Add photos or videos</span></label><div class="thumbs" id="thumbs"></div></div>
      <div class="fld"><label>Who can see this post?</label><div class="seg c3" id="pvs">${[['public', 'Public'], ['friends', 'Friends'], ['private', 'Only me']].map(([k, l]) => `<button data-a="pvsel" data-id="${k}" class="${k === S.postVis ? 'on' : ''}">${l}</button>`).join('')}</div></div>
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
    const row = { user_id: S.user.id, content: text, visibility: S.postVis, allow_download: !!S.allowDl, comments_enabled: S.defComments !== false, allowed_reactions: S.defRx || null, media_url: media[0] ? media[0].url : null, media_type: media[0] ? media[0].type : null };
    const { data: post, error } = await sb.from('posts').insert(row).select('id').single();
    if (error || !post) { busy('#postbtn', false, tr('post')); return toast('Could not post'); }
    if (media.length) {
      const r = await sb.from('post_media').insert(media.map((m, i) => ({ post_id: post.id, user_id: S.user.id, url: m.url, type: m.type, position: i })));
      if (r.error) { await sb.from('posts').update({ deleted_at: new Date().toISOString() }).eq('id', post.id); busy('#postbtn', false, tr('post')); return toast('Could not save your photos. Try again.'); }
    }
    saveMentions(text, post.id);
    closeSheet(); try { await loadFeed(); } catch (e) {} render(); toast('Posted');
  },

  editprofile_old: () => {
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
  saveprofile_old: async () => {
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
  if ((a.dataset.a === 'like' || a.dataset.a === 'rxtap') && S.lpFired) { S.lpFired = false; return; }
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
  if (e.key === 'Enter' && e.target.id === 'lvi') ACT.lvsend();
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

/* ---------- back button, double-back to exit, staying in place after refresh ---------- */
const H = { n: 0, ignore: 0, last: 0 };
function layers() {
  const L = [], on = id => { const e = $('#' + id); return !!(e && e.classList.contains('open')); };
  if (on('call')) L.push('call');
  if (document.querySelector('.imged')) L.push('imged');
  if (on('sheet')) L.push('sheet');
  if (on('story')) L.push('story');
  if (on('live')) L.push('live');
  if (on('viewer')) L.push('viewer');
  const ov = $('#over') && $('#over').innerHTML.trim() ? Math.max(1, S.ovStack.length) : 0;
  for (let i = 0; i < ov; i++) L.push('over');
  if (S.user && S.tab !== 'home') L.push('tab');
  return L;
}
function legacyBack() {
  clearInterval(S.gpoll); S.g = null; stopRecCancel(); S.reply = null; S.editM = null; clearInterval(S.poll); S.openThread = null; S.prof = null;
  S.ovStack.length = 0; setPageKey = null; $('#over').innerHTML = ''; render(true); if (S.tab === 'chat') refresh();
}
function closeTop(name) {
  if (name === 'call') { if (S.incoming && !S.call) { declineCall(); return true; } toast('End the call first'); return false; }
  if (name === 'imged') { const b = document.querySelector('.imged [data-ie="cancel"]'); if (b) b.click(); return true; }
  if (name === 'sheet') { closeSheet(); return true; }
  if (name === 'story') { closeStory(); return true; }
  if (name === 'live') { if (S.live && S.live.role === 'viewer') { leaveLive(); return true; } toast('Tap End to finish your live'); return false; }
  if (name === 'viewer') { closeViewer(); return true; }
  if (name === 'over') {
    clearInterval(S.gpoll); clearInterval(S.poll); S.openThread = null; stopRecCancel(); S.reply = null; S.editM = null;
    if (S.ovStack.length > 1) {
      S.ovStack.pop(); const top = S.ovStack[S.ovStack.length - 1]; S.g = null; S.prof = null; S.navBack = true; setPageKey = null;
      try { top.fn(); } catch (e) {} finally { S.navBack = false; }
      return true;
    }
    legacyBack(); return true;
  }
  if (name === 'tab') { S.tab = 'home'; render(); refresh(); return true; }
  return true;
}
function syncHist() {
  if (!S.user) return;
  if (!$('#over').innerHTML.trim()) { S.ovStack.length = 0; setPageKey = null; }
  const d = layers().length;
  if (d > H.n) { for (let i = H.n; i < d; i++) history.pushState({ k: 'l' }, ''); H.n = d; }
  else if (d < H.n) { const diff = H.n - d; H.n = d; H.ignore++; history.go(-diff); }
}
function exitBack() {
  const now = Date.now();
  if (now - H.last < 2200) { history.back(); return; }
  H.last = now; toast('Press back again to exit'); history.pushState({ k: 'guard' }, '');
}
window.addEventListener('popstate', () => {
  if (H.ignore > 0) { H.ignore--; return; }
  if (!S.user) return;
  const L = layers();
  if (L.length) { H.n = Math.max(0, H.n - 1); if (!closeTop(L[0])) { history.pushState({ k: 'l' }, ''); H.n++; } setTimeout(syncHist, 0); return; }
  const k = history.state && history.state.k;
  if (!k || k === 'base') exitBack(); else history.back();
});
(function () {
  const st = history.state && history.state.k;
  if (st === 'guard') { /* page was refreshed: keep the stack */ }
  else if (st === 'l') history.replaceState({ k: 'guard' }, '');
  else { history.replaceState({ k: 'base' }, ''); history.pushState({ k: 'guard' }, ''); }
  const hq = () => setTimeout(syncHist, 0);
  ['sheet', 'viewer', 'story', 'call', 'live'].forEach(id => { const e = document.getElementById(id); if (e) new MutationObserver(hq).observe(e, { attributes: true, attributeFilter: ['class'] }); });
  new MutationObserver(hq).observe(document.getElementById('over'), { childList: true });
  new MutationObserver(hq).observe(document.getElementById('app'), { childList: true });
  ['openThread', 'openUser', 'openPost', 'openGroup', 'openGroups', 'openEvents', 'openSaved', 'openBlocked', 'openWallet', 'openSearch', 'openSettingsHub', 'openSetPage', 'openDashboard', 'openFollowList', 'openStoryComposer', 'openMyLives'].forEach(name => {
    const f = window[name]; if (typeof f !== 'function') return;
    window[name] = function () {
      const args = [].slice.call(arguments), sig = name + JSON.stringify(args.filter(a => typeof a !== 'object'));
      if (!S.navBack && S.user) { const top = S.ovStack[S.ovStack.length - 1]; if (!top || top.sig !== sig) S.ovStack.push({ sig, name, args, fn: () => f.apply(null, args) }); }
      return f.apply(this, arguments);
    };
  });
  const save = () => {
    try {
      const top = S.ovStack[S.ovStack.length - 1], pre = top && ({ openUser: '#u=', openThread: '#c=', openPost: '#p=', openGroup: '#g=' })[top.name];
      const route = pre && typeof top.args[0] === 'string' ? pre + top.args[0] : '';
      if (S.user) localStorage.setItem('kihelp.view', JSON.stringify({ tab: S.tab, route, sc: ($('#main') || {}).scrollTop || 0, t: Date.now() }));
    } catch (e) {}
  };
  window.addEventListener('pagehide', save);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') save(); });
  try {
    const v = JSON.parse(localStorage.getItem('kihelp.view') || 'null');
    if (v && Date.now() - v.t < 3600000 && !location.hash) { S.restoreTab = v.tab; S.restoreScroll = v.sc || 0; if (v.route) S.pendingRoute = v.route; }
  } catch (e) {}
})();

/* ---------- see more, post frame, suggested people ---------- */
let clampQ = 0;
function fitClamps() {
  document.querySelectorAll('.clamp').forEach(el => {
    const nx = el.nextElementSibling;
    if (nx && nx.classList.contains('seemore')) return;
    const lh = parseFloat(getComputedStyle(el).lineHeight) || 20, lines = el.classList.contains('bt') ? 4 : 3;
    if (!el.classList.contains('open')) {
      if (el.scrollHeight > el.clientHeight + 2) { const b = document.createElement('button'); b.className = 'seemore'; b.setAttribute('data-a', 'xpand'); b.textContent = 'See more'; el.insertAdjacentElement('afterend', b); }
    } else if (el.scrollHeight > lh * lines + 6) {
      const b = document.createElement('button'); b.className = 'seemore'; b.setAttribute('data-a', 'xpand'); b.textContent = 'See less'; el.insertAdjacentElement('afterend', b);
    }
  });
}
function setPostRatio(t) {
  const car = t.closest && t.closest('.pcar'); if (!car || car.dataset.ar) return;
  const first = car.querySelector('.pit'); if (!first || !first.contains(t)) return;
  const w = t.naturalWidth || t.videoWidth, h = t.naturalHeight || t.videoHeight; if (!w || !h) return;
  car.style.setProperty('--ar', Math.min(1.91, Math.max(0.8, w / h)).toFixed(3)); car.dataset.ar = '1';
}
document.addEventListener('load', e => { if (e.target && e.target.tagName === 'IMG') setPostRatio(e.target); }, true);
document.addEventListener('loadedmetadata', e => { if (e.target && e.target.tagName === 'VIDEO') setPostRatio(e.target); }, true);
async function loadSuggest() {
  const { data, error } = await sb.rpc('suggest_people', { p_limit: 15 }); if (error) throw error;
  S.suggest = data || []; S.suggest.forEach(p => { S.pf[p.id] = Object.assign({}, S.pf[p.id], p); });
}
function suggestStrip() {
  if (S.hideSuggest || !S.suggest) return '';
  const cards = S.suggest.filter(p => !S.following.has(p.id)).slice(0, 12).map(p => `<div class="sgcard"><button class="sgx" data-a="sgdismiss" data-id="${p.id}" aria-label="Hide">${I.x}</button><button class="sgav" data-a="user" data-id="${p.id}">${avOf(p.id, 64)}</button><b>${esc(p.display_name || 'Member')}</b><small>${Number(p.mutual) > 0 ? p.mutual + ' mutual' : p.username ? '@' + esc(p.username) : 'Suggested'}</small><button class="btn sm2 fbtn" data-a="qfollow" data-id="${p.id}">Follow</button></div>`).join('');
  return cards ? `<div class="sgstrip"><div class="sgh"><h3 class="sub" style="padding:0">Suggested for you</h3><button class="chip" data-a="sgall">See all</button></div><div class="vrail">${cards}</div></div>` : '';
}
async function paintSuggestList() {
  const box = $('#pres'); if (!box) return;
  try { if (!S.suggest) await loadSuggest(); } catch (e) { return; }
  const list = (S.suggest || []).filter(p => !S.following.has(p.id)); if (!$('#pres') || !list.length || ($('#ps') && $('#ps').value.trim())) return;
  $('#pres').innerHTML = `<h3 class="sub">Suggested for you</h3>` + list.map(p => `<div class="reqrow"><button data-a="user" data-id="${p.id}" style="display:flex;gap:10px;align-items:center;flex:1;min-width:0">${avOf(p.id, 46)}<span class="tx"><b>${esc(p.display_name || 'Member')}</b><span class="ls" style="display:block">${p.username ? '@' + esc(p.username) : ''}${Number(p.mutual) > 0 ? ' · ' + p.mutual + ' mutual' : ''}</span></span></button><button class="btn sm2 fbtn" data-a="qfollow" data-id="${p.id}">Follow</button></div>`).join('');
}

/* ---------- saving lives and looking after them ---------- */
function startReplayRecording(L) {
  if (!L.save || !window.MediaRecorder || !L.tracks || !L.tracks[0] || !L.tracks[1]) return;
  const mime = ['video/webm;codecs=vp8,opus', 'video/webm', 'video/mp4'].find(m => MediaRecorder.isTypeSupported(m)); if (!mime) return;
  const R = L.rec = { mime, ext: mime.indexOf('mp4') >= 0 ? 'mp4' : 'webm', n: 0, ok: 0, stop: false, queue: Promise.resolve() };
  let stream; try { stream = new MediaStream([L.tracks[0].getMediaStreamTrack(), L.tracks[1].getMediaStreamTrack()]); } catch (e) { L.rec = null; return; }
  const part = () => {
    if (R.stop) return;
    let mr; try { mr = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: S.saver ? 450000 : 800000, audioBitsPerSecond: 64000 }); } catch (e) { return; }
    const chunks = []; R.cur = mr;
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = () => { const idx = R.n++, blob = new Blob(chunks, { type: mime.split(';')[0] }); if (blob.size > 1000) R.queue = R.queue.then(() => uploadReplayPart(L, idx, blob)).catch(() => {}); if (!R.stop) part(); };
    try { mr.start(); } catch (e) { return; }
    R.timer = setTimeout(() => { try { if (mr.state !== 'inactive') mr.stop(); } catch (e) {} }, 60000);
  };
  part();
}
async function uploadReplayPart(L, idx, blob) {
  const R = L.rec; if (!R) return; const path = `${S.user.id}/live/${L.id}/${idx}.${R.ext}`;
  for (let a = 0; a < 3; a++) {
    const { error } = await sb.storage.from('media').upload(path, blob, { contentType: blob.type, cacheControl: '31536000' });
    if (!error || /exist|duplicate/i.test(error.message || '')) { R.ok = Math.max(R.ok, idx + 1); return; }
    await new Promise(r => setTimeout(r, 1500 * (a + 1)));
  }
}
async function finishReplayRecording(L) {
  const R = L.rec; if (!R) return 0; R.stop = true; clearTimeout(R.timer);
  await new Promise(res => {
    const mr = R.cur;
    if (mr && mr.state !== 'inactive') { const prev = mr.onstop; mr.onstop = () => { try { prev(); } catch (e) {} res(); }; try { mr.stop(); } catch (e) { res(); } } else res();
  });
  await R.queue.catch(() => {});
  if (R.ok > 0) await sb.rpc('save_live_replay', { p_stream: L.id, p_parts: R.ok, p_ext: R.ext, p_seconds: Math.floor((Date.now() - L.started) / 1000) });
  return R.ok;
}
const replayUrl = (s, i) => `${SUPA_URL}/storage/v1/object/public/media/${s.host_id}/live/${s.id}/${i}.${s.replay_ext}`;
const mmss = n => Math.floor(n / 60) + ':' + String(n % 60).padStart(2, '0');
async function openMyLives() {
  $('#over').innerHTML = `<div class="screen"><header><button class="ibtn flip" data-a="back" aria-label="Back">${I.back}</button><b class="ttl">My lives</b></header><div class="setbody" id="mlbody"><div class="empty" style="padding:40px">Loading...</div></div></div>`;
  const { data, error } = await sb.from('live_streams').select('id,host_id,title,started_at,ended_at,peak_viewers,replay_parts,replay_ext,replay_seconds,replay_public,status').eq('host_id', S.user.id).order('started_at', { ascending: false }).limit(50);
  const b = $('#mlbody'); if (!b) return;
  if (error) { b.innerHTML = '<div class="empty" style="padding:40px">Could not load your lives.</div>'; return; }
  S.myLives = data || [];
  b.innerHTML = S.myLives.length ? `<p class="ls" style="padding:12px 16px">Lives you saved stay here. You can watch them, share them to your profile, or delete them anytime.</p>` + S.myLives.map(s => {
    const secs = s.replay_seconds || (s.ended_at ? Math.max(0, Math.floor((new Date(s.ended_at) - new Date(s.started_at)) / 1000)) : 0);
    return `<button class="evrow" data-a="lvrow" data-id="${s.id}"><span class="evd"><b>${new Date(s.started_at).getDate()}</b><small>${esc(new Date(s.started_at).toLocaleString([], { month: 'short' }))}</small></span><span class="tx"><b>${esc(s.title || 'Live')}</b><span class="l">${mmss(secs)} · up to ${s.peak_viewers} watching</span></span><span class="pbadge">${s.status === 'live' ? 'Live now' : s.replay_parts > 0 ? (s.replay_public ? 'Shared' : 'Saved') : 'No copy'}</span></button>`;
  }).join('') : '<div class="empty" style="padding:50px 24px">No lives yet.<br>Tap Create, then Go live.</div>';
}
function openReplay(s) {
  S.viewer = { items: [], idx: 0, dl: false }; const v = $('#viewer');
  v.innerHTML = `<div class="vwtop"><button class="vwb" data-a="vclose" aria-label="Close">${I.x}</button><span id="rpn">Part 1 / ${s.replay_parts}</span><span style="width:44px"></span></div><div class="vwrail" style="display:grid;place-items:center"><video id="rpv" controls autoplay playsinline style="max-width:100%;max-height:100%"></video></div>`;
  v.classList.add('open'); let i = 0; const el = $('#rpv');
  const play = () => { el.src = replayUrl(s, i); el.play().catch(() => {}); const n = $('#rpn'); if (n) n.textContent = 'Part ' + (i + 1) + ' / ' + s.replay_parts; };
  const next = () => { if (i < s.replay_parts - 1) { i++; play(); } };
  el.onended = next; el.onerror = next; play();
}
async function wipeReplayFiles(s) {
  const paths = []; for (let i = 0; i < (s.replay_parts || 0); i++) paths.push(`${S.user.id}/live/${s.id}/${i}.${s.replay_ext}`);
  for (let k = 0; k < paths.length; k += 50) { try { await sb.storage.from('media').remove(paths.slice(k, k + 50)); } catch (e) {} }
}

async function boot() {
  const hm = location.hash.match(/^#v=([0-9a-f-]{36})$/i); if (hm) S.focusVideo = hm[1];
  const hp = location.hash.match(/^#p=([0-9]{1,15})$/); if (hp) S.focusPost = hp[1];
  const hr = location.hash.match(/^#(c|u|call|n)=/); if (hr) S.pendingRoute = location.hash;
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