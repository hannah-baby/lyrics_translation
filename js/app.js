import { categories, posts } from './posts.js';
const byId = new Map(posts.map(post => [post.id, post]));
let selected = categories[0];
const search = document.querySelector('#search');
const cards = document.querySelector('#articles');

/** Escape an arbitrary string for HTML text/attribute insertion. Returns safe HTML text. */
function escape(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

/** Build trusted local cover markup for one post object. Returns an HTML string. */
function cover(post) {
  return `<img src="${escape(post.cover)}" alt="" loading="lazy" width="800" height="480">`;
}

/** Render current category/search results in O(n) time and O(n) output space. */
function render() {
  const query = search.value.trim().toLocaleLowerCase();
  const visible = posts.filter(post => (selected === categories[0] || post.category === selected) && `${post.title} ${post.subtitle} ${post.excerpt}`.toLocaleLowerCase().includes(query));
  cards.innerHTML = visible.map(post => `<a class="card" href="#post/${encodeURIComponent(post.id)}"><div class="card-cover">${cover(post)}<span class="cover-label">漢娜的收藏</span></div><div class="card-body"><div class="meta"><span class="tag">${escape(post.category)}</span><span>${post.minutes} 分鐘閱讀</span></div><h3>${escape(post.title)}</h3><p class="subtitle">${escape(post.subtitle)}</p><p class="excerpt">${escape(post.excerpt)}</p><div class="card-bottom"><time datetime="${post.date}">${post.date.replaceAll('-', '.')}</time><span class="read-more">閱讀文章 ↗</span></div></div></a>`).join('');
  document.querySelector('#count').textContent = String(visible.length).padStart(2, '0');
  document.querySelector('#empty').hidden = visible.length !== 0;
  document.querySelector('#status').textContent = `顯示 ${visible.length} 篇文章`;
  document.querySelectorAll('[data-category]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === selected)));
}

/** Render a hash-linked article or the collection. Unknown IDs show a recovery link. */
function route() {
  const isArticle = location.hash.startsWith('#post/');
  const reader = document.querySelector('#reader');
  document.querySelector('#collection').hidden = isArticle;
  document.querySelector('.welcome').hidden = isArticle;
  reader.hidden = !isArticle;
  if (!isArticle) { document.title = '漢娜的翻譯小窩'; return; }
  const post = byId.get(location.hash.slice(6));
  reader.innerHTML = `<a class="back-link" href="#collection">← 回到文章收藏</a>` + (post ? `<p class="eyebrow">${escape(post.category)} · ${post.date}</p><h1 id="article-title" tabindex="-1">${escape(post.title)}</h1><p class="subtitle">${escape(post.subtitle)}</p>${cover(post)}${post.body.map(paragraph => `<p>${escape(paragraph)}</p>`).join('')}` : '<h1 id="article-title" tabindex="-1">找不到這篇文章</h1><p>請回到文章收藏，選擇其他文章。</p>');
  document.title = `${post?.title || '找不到文章'}｜漢娜的翻譯小窩`;
  document.querySelector('#article-title').focus({ preventScroll: true });
  reader.scrollIntoView({ block: 'start' });
}

/** Initialize category controls, cached counts, and accessible client-side navigation. */
function initialize() {
  const counts = new Map(categories.map(category => [category, 0]));
  posts.forEach(post => counts.set(post.category, (counts.get(post.category) || 0) + 1));
  counts.set(categories[0], posts.length);
  document.querySelector('#navigation').innerHTML = categories.map((category, index) => `<button type="button" data-category="${category}"><span class="nav-icon" aria-hidden="true">${['⌂', '♫', '▤', '✎'][index]}</span>${category}<small>${counts.get(category)}</small></button>`).join('');
  document.querySelector('#filters').innerHTML = categories.map(category => `<button type="button" data-category="${category}">${category}</button>`).join('');
  document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
    selected = button.dataset.category;
    if (location.hash.startsWith('#post/')) location.hash = 'collection';
    render();
  }));
  search.addEventListener('input', render);
  window.addEventListener('hashchange', route);
  render();
  route();
}
initialize();
