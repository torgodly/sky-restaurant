/* ═══════════════ Menu data ═══════════════
   عدّل الأصناف من هنا مباشرة — الأصل في images/menu/ والنسخ المضغوطة في images/thumbs/
   الصنف الذي بلا صورة (بدون img) يظهر كسطر نصي أنيق مثل المنيو المطبوع. */
const MENU = [
  {
    id: 'beef', en: 'Beef Burgers', label: 'برغر لحم', emoji: '🍔',
    items: [
      { name: 'دبل تشيز برغر', desc: 'قطعتان لحم عصاري، جبنة شيدر مضاعفة، طماطم، خس، صوص سكاي الخاص', img: 'images/thumbs/menu-beef-combo.jpg', tag: 'الأكثر طلبًا' },
      { name: 'كلاسيك برغر',   desc: 'قطعة لحم عصارية، جبنة شيدر، خس، طماطم، صوص سكاي' },
      { name: 'سكاي سبيشل',    desc: 'برغر السلسلة الخاص بصوص سكاي السري والمقرمشات', tag: 'جديد' },
      { name: 'ماشروم برغر',   desc: 'لحم عصاري مع فطر سوتيه وجبنة ذائبة' },
    ],
  },
  {
    id: 'chicken', en: 'Chicken Burgers', label: 'برغر دجاج', emoji: '🍗',
    items: [
      { name: 'كرسبي تشيكن', desc: 'صدر دجاج مقرمش، جبنة شيدر، كول سلو، صوص سكاي الحار', img: 'images/thumbs/menu-chicken-combo.jpg', tag: 'مميز' },
      { name: 'زنجر حار',    desc: 'دجاج مقرمش حار، خس، جبنة، صوص حار خاص' },
      { name: 'تشيكن سكاي',  desc: 'دبل دجاج مقرمش بصوص سكاي والجبنة الذائبة' },
    ],
  },
  {
    id: 'sides', en: 'Fries & Sides', label: 'بطاطا وسايدات', emoji: '🍟',
    items: [
      { name: 'بطاطا سكاي',        desc: 'بطاطا ذهبية مقرمشة بتتبيلة سكاي الخاصة', img: 'images/thumbs/menu-fries.jpg' },
      { name: 'صوص سكاي الخاص',    desc: 'الصوص السري الذي يكمّل كل وجبة — اطلبه مع أي صنف', img: 'images/thumbs/menu-sauce.jpg' },
      { name: 'بطاطا بالجبنة',     desc: 'بطاطا ذهبية مغطاة بصوص الجبنة الذائبة' },
      { name: 'أصابع موزاريلا',    desc: 'قطع موزاريلا مقلية مع صوص المارينارا' },
    ],
  },
  {
    id: 'drinks', en: 'Cold Drinks', label: 'مشروبات', emoji: '🥤',
    items: [
      { name: 'مشروب غازي', desc: 'كوكاكولا · سبرايت · فانتا — مثلّج ومنعش', img: 'images/thumbs/menu-soda.jpg' },
      { name: 'عصير طبيعي', desc: 'برتقال · فراولة · مانجو — طازج يوميًا' },
      { name: 'سلاش سكاي',  desc: 'سلاش منعش بنكهات متعددة — توت، فراولة، بلو سكاي' },
    ],
  },
  {
    id: 'desserts', en: 'Desserts', label: 'حلويات', emoji: '🍦',
    items: [
      { name: 'صنداي فراولة', desc: 'آيس كريم كريمي يعلوه صوص الفراولة', img: 'images/thumbs/menu-sundae.jpg', tag: 'جديد' },
    ],
  },
  {
    id: 'boxes', en: 'Family Boxes', label: 'بوكسات عائلية', emoji: '📦',
    items: [
      { name: 'بوكس العائلة',     desc: '4 برغر مشكّل (لحم ودجاج) + 4 بطاطا سكاي', img: 'images/thumbs/menu-family-box.jpg', tag: 'وفّر أكثر' },
      { name: 'بوكس سكاي الكبير', desc: '6 برغر مشكّل + 6 بطاطا سكاي — يكفي كل العائلة', img: 'images/thumbs/menu-mega-box.jpg' },
      { name: 'بوكس ثنائي',       desc: '2 برغر + 2 بطاطا + 2 مشروب' },
    ],
  },
];

/* ═══════════════ Menu modal ═══════════════ */
const modal   = document.getElementById('menuModal');
const tabsEl  = document.getElementById('menuTabs');
const itemsEl = document.getElementById('menuItems');
let menuBuilt = false;

function buildTabs() {
  tabsEl.innerHTML = MENU.map((cat, i) => `
    <button data-cat="${cat.id}"
      class="menu-tab whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-sm font-extrabold transition
             ${i === 0 ? 'bg-white text-sky-600 shadow' : 'bg-white/15 text-white hover:bg-white/25'}">
      ${cat.emoji} ${cat.label}
    </button>`).join('');

  tabsEl.querySelectorAll('.menu-tab').forEach(btn =>
    btn.addEventListener('click', () => {
      setActiveTab(btn.dataset.cat);
      const section = itemsEl.querySelector(`#cat-${btn.dataset.cat}`);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
  );
}

function setActiveTab(catId) {
  tabsEl.querySelectorAll('.menu-tab').forEach(b => {
    const active = b.dataset.cat === catId;
    b.classList.toggle('bg-white', active);
    b.classList.toggle('text-sky-600', active);
    b.classList.toggle('shadow', active);
    b.classList.toggle('bg-white/15', !active);
    b.classList.toggle('text-white', !active);
  });
  const activeBtn = tabsEl.querySelector(`[data-cat="${catId}"]`);
  if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function buildItems() {
  itemsEl.innerHTML = `
    <div class="max-w-2xl mx-auto">
      <!-- menu sheet heading -->
      <div class="text-center pt-1 pb-2">
        <p class="text-[11px] tracking-[0.35em] font-bold text-sky-400 uppercase">Fast Food &amp; Burger</p>
        <div class="flex items-center justify-center gap-3 mt-3 text-sky-300">
          <span class="h-px w-16 bg-sky-200"></span>
          <span class="text-sky-400">✦</span>
          <span class="h-px w-16 bg-sky-200"></span>
        </div>
      </div>

      ${MENU.map(cat => `
        <section id="cat-${cat.id}" data-cat="${cat.id}" class="pt-6 pb-2">
          <!-- section header -->
          <header class="text-center mb-5">
            <p class="font-script text-3xl text-sky-400/90 leading-none mb-1.5">${cat.en}</p>
            <h4 class="text-xl sm:text-2xl font-black text-sky-950">${cat.emoji} ${cat.label}</h4>
          </header>

          <!-- photo items -->
          ${cat.items.some(i => i.img) ? `
          <div class="grid sm:grid-cols-2 gap-4 mb-4">
            ${cat.items.filter(i => i.img).map(item => `
              <article class="bg-white rounded-2xl border border-sky-100 shadow-card overflow-hidden md:hover:-translate-y-1 transition-transform duration-300">
                <div class="relative h-44 sm:h-48 bg-white">
                  <img src="${item.img}" alt="${item.name}" loading="lazy"
                       onerror="this.onerror=null;this.src='images/placeholder.svg'"
                       class="w-full h-full object-contain p-2" />
                  ${item.tag ? `<span class="absolute top-3 right-3 text-[11px] font-extrabold bg-gold text-white px-2.5 py-1 rounded-full shadow">${item.tag}</span>` : ''}
                </div>
                <div class="px-4 pb-4 pt-1 text-center">
                  <h5 class="font-black text-sky-950 text-lg">${item.name}</h5>
                  <p class="text-sm text-sky-900/60 leading-relaxed mt-1">${item.desc}</p>
                </div>
              </article>`).join('')}
          </div>` : ''}

          <!-- text-only items, like a printed menu -->
          ${cat.items.some(i => !i.img) ? `
          <div class="px-2 sm:px-6">
            ${cat.items.filter(i => !i.img).map(item => `
              <div class="py-3 border-b border-dashed border-sky-200/80 last:border-0 flex items-baseline gap-3">
                <span class="text-sky-300 text-xs shrink-0">✦</span>
                <div>
                  <h5 class="font-extrabold text-sky-950 inline">${item.name}</h5>
                  ${item.tag ? `<span class="text-[10px] font-extrabold bg-gold/15 text-amber-600 px-2 py-0.5 rounded-full mr-1.5">${item.tag}</span>` : ''}
                  <p class="text-sm text-sky-900/60 leading-relaxed">${item.desc}</p>
                </div>
              </div>`).join('')}
          </div>` : ''}

          <!-- section divider -->
          <div class="flex items-center justify-center gap-3 mt-7 text-sky-200">
            <span class="h-px w-20 bg-sky-100"></span>
            <span class="font-script text-xl text-sky-300">Sky</span>
            <span class="h-px w-20 bg-sky-100"></span>
          </div>
        </section>`).join('')}

      <!-- menu sheet footer -->
      <div class="text-center pt-4 pb-2 text-sky-900/50 text-sm font-bold leading-relaxed">
        Life is better with fresh fries on hand<br/>
        📍 مارينا الأندلس — طرابلس &nbsp;·&nbsp; <span dir="ltr">0910 86 8888</span>
      </div>
    </div>`;

  // scrollspy: highlight the tab of the section in view
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) setActiveTab(e.target.dataset.cat); });
  }, { root: itemsEl, rootMargin: '-20% 0px -70% 0px' });
  itemsEl.querySelectorAll('section[data-cat]').forEach(s => spy.observe(s));
}

function openMenu() {
  if (!menuBuilt) { buildTabs(); buildItems(); menuBuilt = true; }
  itemsEl.scrollTop = 0;
  setActiveTab(MENU[0].id);
  modal.classList.remove('hidden');
  requestAnimationFrame(() => modal.classList.remove('hidden-anim'));
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  modal.classList.add('hidden-anim');
  setTimeout(() => modal.classList.add('hidden'), 350);
  document.body.style.overflow = '';
}

/* ═══════════════ Gallery lightbox ═══════════════ */
const lightbox   = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCap');
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
let lightboxIndex = 0;

function renderLightbox() {
  const btn = galleryItems[lightboxIndex];
  lightboxImg.style.opacity = '0.3';
  lightboxImg.onload = () => { lightboxImg.style.opacity = '1'; };
  lightboxImg.src = btn.dataset.full;
  lightboxImg.alt = btn.dataset.alt || '';
  lightboxCap.textContent = btn.dataset.alt || '';
}

function openLightbox(i) {
  lightboxIndex = i;
  renderLightbox();
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryItems.length) % galleryItems.length;
  renderLightbox();
}

galleryItems.forEach((btn, i) => btn.addEventListener('click', () => openLightbox(i)));

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('hidden')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lightboxNav(-1); /* RTL: right arrow = previous */
    if (e.key === 'ArrowLeft')  lightboxNav(1);
    return;
  }
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeMenu();
});

/* ═══════════════ Navbar: solid on scroll ═══════════════ */
const navbar = document.getElementById('navbar');
function onScroll() {
  const solid = window.scrollY > 40;
  navbar.classList.toggle('bg-white/90', solid);
  navbar.classList.toggle('backdrop-blur', solid);
  navbar.classList.toggle('shadow-card', solid);
  navbar.querySelectorAll('.nav-links, .nav-logo').forEach(el => {
    el.classList.toggle('text-white', !solid);
    el.classList.toggle('!text-sky-600', solid);
  });
  const cta = navbar.querySelector('.nav-cta');
  if (cta) {
    cta.classList.toggle('bg-white', !solid);
    cta.classList.toggle('!bg-sky-500', solid);
    cta.classList.toggle('!text-white', solid);
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ═══════════════ Mobile menu ═══════════════ */
const mobileBtn  = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('.mobile-link').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.add('hidden'))
);

/* ═══════════════ Scroll reveal ═══════════════ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ═══════════════ Footer year ═══════════════ */
document.getElementById('year').textContent = new Date().getFullYear();
