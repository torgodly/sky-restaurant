/* ═══════════════ Menu data ═══════════════
   عدّل الأصناف من هنا مباشرة — الأصل في images/menu/ والنسخ المضغوطة في images/thumbs/
   الصنف الذي بلا صورة (بدون img) يظهر كسطر نصي أنيق مثل المنيو المطبوع. */
const MENU = [
  {
    id: 'beef', en: 'Beef Burgers', label: 'برغر لحم',
    items: [
      { name: 'دبل تشيز برغر', nameEn: 'Double Cheeseburger', desc: 'قطعتان لحم عصاري، جبنة شيدر مضاعفة، طماطم، خس، صوص سكاي الخاص', descEn: 'Two juicy beef patties, double cheddar, tomato, lettuce, Sky signature sauce', img: 'images/thumbs/menu-beef-combo.jpg', tag: 'الأكثر طلبًا', tagEn: 'Best Seller' },
      { name: 'كلاسيك برغر',   nameEn: 'Classic Burger',      desc: 'قطعة لحم عصارية، جبنة شيدر، خس، طماطم، صوص سكاي', descEn: 'Juicy beef patty, cheddar, lettuce, tomato, Sky sauce' },
      { name: 'سكاي سبيشل',    nameEn: 'Sky Special',         desc: 'برغر السلسلة الخاص بصوص سكاي السري والمقرمشات', descEn: 'Our signature burger with Sky secret sauce and crispy bits', tag: 'جديد', tagEn: 'New' },
      { name: 'ماشروم برغر',   nameEn: 'Mushroom Burger',     desc: 'لحم عصاري مع فطر سوتيه وجبنة ذائبة', descEn: 'Juicy beef with sautéed mushrooms and melted cheese' },
    ],
  },
  {
    id: 'chicken', en: 'Chicken Burgers', label: 'برغر دجاج',
    items: [
      { name: 'كرسبي تشيكن', nameEn: 'Crispy Chicken', desc: 'صدر دجاج مقرمش، جبنة شيدر، كول سلو، صوص سكاي الحار', descEn: 'Crispy chicken breast, cheddar, coleslaw, Sky spicy sauce', img: 'images/thumbs/menu-chicken-combo.jpg', tag: 'مميز', tagEn: 'Featured' },
      { name: 'زنجر حار',    nameEn: 'Spicy Zinger',   desc: 'دجاج مقرمش حار، خس، جبنة، صوص حار خاص', descEn: 'Spicy crispy chicken, lettuce, cheese, special hot sauce' },
      { name: 'تشيكن سكاي',  nameEn: 'Sky Chicken',    desc: 'دبل دجاج مقرمش بصوص سكاي والجبنة الذائبة', descEn: 'Double crispy chicken with Sky sauce and melted cheese' },
    ],
  },
  {
    id: 'sides', en: 'Fries & Sides', label: 'بطاطا وسايدات',
    items: [
      { name: 'بطاطا سكاي',        nameEn: 'Sky Fries',            desc: 'بطاطا ذهبية مقرمشة بتتبيلة سكاي الخاصة', descEn: 'Golden crispy fries with Sky special seasoning', img: 'images/thumbs/menu-fries.jpg' },
      { name: 'صوص سكاي الخاص',    nameEn: 'Sky Signature Sauce',  desc: 'الصوص السري الذي يكمّل كل وجبة — اطلبه مع أي صنف', descEn: 'The secret sauce that completes every meal — add it to any item', img: 'images/thumbs/menu-sauce.jpg' },
      { name: 'بطاطا بالجبنة',     nameEn: 'Cheese Fries',         desc: 'بطاطا ذهبية مغطاة بصوص الجبنة الذائبة', descEn: 'Golden fries smothered in melted cheese sauce' },
      { name: 'أصابع موزاريلا',    nameEn: 'Mozzarella Sticks',    desc: 'قطع موزاريلا مقلية مع صوص المارينارا', descEn: 'Fried mozzarella sticks with marinara sauce' },
    ],
  },
  {
    id: 'drinks', en: 'Cold Drinks', label: 'مشروبات',
    items: [
      { name: 'مشروب غازي', nameEn: 'Soft Drinks',  desc: 'كوكاكولا · سبرايت · فانتا — مثلّج ومنعش', descEn: 'Coca-Cola · Sprite · Fanta — iced and refreshing', img: 'images/thumbs/menu-soda.jpg' },
      { name: 'عصير طبيعي', nameEn: 'Fresh Juice',  desc: 'برتقال · فراولة · مانجو — طازج يوميًا', descEn: 'Orange · Strawberry · Mango — fresh daily' },
      { name: 'سلاش سكاي',  nameEn: 'Sky Slush',    desc: 'سلاش منعش بنكهات متعددة — توت، فراولة، بلو سكاي', descEn: 'Refreshing slush in many flavors — berry, strawberry, blue sky' },
    ],
  },
  {
    id: 'desserts', en: 'Desserts', label: 'حلويات',
    items: [
      { name: 'صنداي فراولة', nameEn: 'Strawberry Sundae', desc: 'آيس كريم كريمي يعلوه صوص الفراولة', descEn: 'Creamy ice cream topped with strawberry sauce', img: 'images/thumbs/menu-sundae.jpg', tag: 'جديد', tagEn: 'New' },
    ],
  },
  {
    id: 'boxes', en: 'Family Boxes', label: 'بوكسات عائلية',
    items: [
      { name: 'بوكس العائلة',     nameEn: 'Family Box',   desc: '4 برغر مشكّل (لحم ودجاج) + 4 بطاطا سكاي', descEn: '4 mixed burgers (beef & chicken) + 4 Sky fries', img: 'images/thumbs/menu-family-box.jpg', tag: 'وفّر أكثر', tagEn: 'Save More' },
      { name: 'بوكس سكاي الكبير', nameEn: 'Sky Mega Box',  desc: '6 برغر مشكّل + 6 بطاطا سكاي — يكفي كل العائلة', descEn: '6 mixed burgers + 6 Sky fries — enough for the whole family', img: 'images/thumbs/menu-mega-box.jpg' },
      { name: 'بوكس ثنائي',       nameEn: 'Duo Box',      desc: '2 برغر + 2 بطاطا + 2 مشروب', descEn: '2 burgers + 2 fries + 2 drinks' },
    ],
  },
];

/* ═══════════════ i18n (Arabic / English) ═══════════════ */
const I18N = {
  ar: {
    'nav.home': 'الرئيسية', 'nav.policies': 'سياساتنا', 'nav.gallery': 'أجواؤنا',
    'nav.goal': 'هدفنا', 'nav.vision': 'رؤيتنا', 'nav.contact': 'تواصل معنا',
    'nav.menu': 'المنيو', 'nav.menuAria': 'القائمة',
    'hero.title1': 'مطعم سكاي', 'hero.title2': 'للفاست فود والبرغر',
    'hero.desc': 'وجهتك لعشاق الوجبات السريعة بطعم مختلف وجودة عالية. نقدم تشكيلة متنوعة من البرغر العصاري المحضّر من مكونات طازجة، والدجاج المقرمش، والبطاطا الذهبية، إلى جانب الصوصات الخاصة التي تضيف لمسة مميزة لكل وجبة.',
    'hero.tag1': 'برغر فاخر', 'hero.tag2': 'دجاج مقرمش', 'hero.tag3': 'بطاطا ذهبية', 'hero.tag4': 'صوصات خاصة',
    'hero.viewMenu': 'شاهد المنيو', 'hero.call': 'اتصل بنا',
    'policies.kicker': 'لماذا سكاي؟', 'policies.title': 'التزامنا تجاهك في كل وجبة',
    'policies.p.title': 'سياساتنا',
    'policies.p.desc': 'نلتزم بتقديم الطعام الطازج، الحفاظ على نظافة المكان والمطبخ، سرعة تجهيز الطلبات، واحترام ملاحظات العملاء لضمان أفضل تجربة ممكنة.',
    'policies.p.li1': 'طعام طازج يوميًا', 'policies.p.li2': 'نظافة تامة للمكان والمطبخ', 'policies.p.li3': 'سرعة في تجهيز الطلبات', 'policies.p.li4': 'إصغاء دائم لملاحظات عملائنا',
    'policies.s.title': 'معاييرنا',
    'policies.s.desc': 'نعتمد على مكونات مختارة بعناية، تحضير يومي، جودة ثابتة في كل وجبة، وخدمة احترافية تضع رضا العميل في المقام الأول.',
    'policies.s.li1': 'مكونات مختارة بعناية', 'policies.s.li2': 'تحضير يومي طازج', 'policies.s.li3': 'جودة ثابتة في كل وجبة', 'policies.s.li4': 'خدمة احترافية تضع رضاك أولًا',
    'gallery.kicker': 'من أجواء سكاي', 'gallery.title': 'لقطات من عالمنا',
    'goal.kicker': 'هدفنا', 'goal.title': 'وجبات لذيذة… بأسعار مناسبة وجودة تعتمد عليها',
    'goal.desc': 'تقديم وجبات فاست فود لذيذة بأسعار مناسبة وجودة يمكن للعملاء الاعتماد عليها في كل زيارة.',
    'vision.kicker': 'رؤيتنا', 'vision.title': 'علامة رائدة في عالم البرغر والفاست فود',
    'vision.desc': 'أن نرسّخ علامة سكاي كوجهة رائدة في عالم البرغر والفاست فود، بمعايير تشغيل عالمية وهوية محلية مميزة. نسعى لبناء براند موثوق يتوسع بثبات، ويُعرف بتجربة متكاملة تجمع بين الجودة، الابتكار، سرعة الخدمة، والطعم الذي يجعل العملاء يعودون إلينا بثقة في كل مرة.',
    'vision.cta': 'اكتشف قائمتنا',
    'footer.tagline': 'مطعم سكاي للفاست فود والبرغر',
    'footer.addressTitle': 'العنوان', 'footer.address': 'ليبيا — طرابلس — حي الأندلس<br/>داخل مارينا الأندلس',
    'footer.contactTitle': 'تواصل معنا', 'footer.facebook': 'فيسبوك', 'footer.instagram': 'انستغرام',
    'footer.rights': 'مطعم سكاي — جميع الحقوق محفوظة',
    'sticky.menu': 'المنيو', 'sticky.call': 'اتصل الآن',
    'menu.title': 'قائمة الطعام', 'menu.location': 'مارينا الأندلس — طرابلس', 'menu.order': 'اطلب الآن',
  },
  en: {
    'nav.home': 'Home', 'nav.policies': 'Policies', 'nav.gallery': 'Gallery',
    'nav.goal': 'Goal', 'nav.vision': 'Vision', 'nav.contact': 'Contact',
    'nav.menu': 'Menu', 'nav.menuAria': 'Menu',
    'hero.title1': 'Sky Restaurant', 'hero.title2': 'Fast Food & Burgers',
    'hero.desc': 'Your destination for fast-food lovers who want a different taste and top quality. We serve a wide range of juicy burgers made from fresh ingredients, crispy chicken, golden fries, and signature sauces that add a special touch to every meal.',
    'hero.tag1': 'Premium Burgers', 'hero.tag2': 'Crispy Chicken', 'hero.tag3': 'Golden Fries', 'hero.tag4': 'Signature Sauces',
    'hero.viewMenu': 'View Menu', 'hero.call': 'Call Us',
    'policies.kicker': 'Why Sky?', 'policies.title': 'Our commitment to you in every meal',
    'policies.p.title': 'Our Policies',
    'policies.p.desc': 'We are committed to serving fresh food, keeping the place and kitchen clean, preparing orders quickly, and respecting customer feedback to ensure the best possible experience.',
    'policies.p.li1': 'Fresh food daily', 'policies.p.li2': 'Spotless place and kitchen', 'policies.p.li3': 'Fast order preparation', 'policies.p.li4': 'Always listening to our customers',
    'policies.s.title': 'Our Standards',
    'policies.s.desc': 'We rely on carefully selected ingredients, daily preparation, consistent quality in every meal, and professional service that puts customer satisfaction first.',
    'policies.s.li1': 'Carefully selected ingredients', 'policies.s.li2': 'Fresh daily preparation', 'policies.s.li3': 'Consistent quality every time', 'policies.s.li4': 'Professional service, your satisfaction first',
    'gallery.kicker': 'Sky vibes', 'gallery.title': 'Snapshots from our world',
    'goal.kicker': 'Our Goal', 'goal.title': 'Delicious meals… at fair prices with quality you can rely on',
    'goal.desc': 'To serve delicious fast-food meals at fair prices, with quality customers can count on every visit.',
    'vision.kicker': 'Our Vision', 'vision.title': 'A leading brand in the world of burgers & fast food',
    'vision.desc': 'To establish Sky as a leading destination in the world of burgers and fast food, with world-class operating standards and a distinctive local identity. We aim to build a trusted brand that grows steadily, known for a complete experience combining quality, innovation, fast service, and a taste that brings customers back with confidence every time.',
    'vision.cta': 'Explore our menu',
    'footer.tagline': 'Sky Restaurant — Fast Food & Burgers',
    'footer.addressTitle': 'Address', 'footer.address': 'Libya — Tripoli — Al-Andalus<br/>Inside Marina Al-Andalus',
    'footer.contactTitle': 'Contact Us', 'footer.facebook': 'Facebook', 'footer.instagram': 'Instagram',
    'footer.rights': 'Sky Restaurant — All rights reserved',
    'sticky.menu': 'Menu', 'sticky.call': 'Call Now',
    'menu.title': 'Our Menu', 'menu.location': 'Marina Al-Andalus — Tripoli', 'menu.order': 'Order Now',
  },
};

let LANG = localStorage.getItem('lang') || 'ar';
const isEn = () => LANG === 'en';
// pick localized field from a menu item/category
const tf = (obj, field) => (isEn() && obj[field + 'En'] != null) ? obj[field + 'En'] : obj[field];

function applyLang(lang) {
  LANG = (lang === 'en') ? 'en' : 'ar';
  localStorage.setItem('lang', LANG);
  const dict = I18N[LANG];

  document.documentElement.lang = LANG;
  document.documentElement.dir = isEn() ? 'ltr' : 'rtl';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const v = dict[el.dataset.i18nAria];
    if (v != null) el.setAttribute('aria-label', v);
  });
  document.querySelectorAll('.lang-label').forEach(el => {
    el.textContent = isEn() ? 'ع' : 'EN';
    // optical centering: Tajawal's caps sit high, Arabic glyph sits low
    el.style.transform = isEn() ? 'translateY(-1px)' : 'translateY(2px)';
  });

  if (menuBuilt) { buildTabs(); buildItems(); setActiveTab(MENU[0].id); }
}

function toggleLang() { applyLang(isEn() ? 'ar' : 'en'); }

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
      ${isEn() ? cat.en : cat.label}
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
            <h4 class="text-xl sm:text-2xl font-black text-sky-950">${isEn() ? cat.en : cat.label}</h4>
          </header>

          <!-- photo items -->
          ${cat.items.some(i => i.img) ? `
          <div class="grid sm:grid-cols-2 gap-4 mb-4">
            ${cat.items.filter(i => i.img).map(item => `
              <article class="bg-white rounded-2xl border border-sky-100 shadow-card overflow-hidden md:hover:-translate-y-1 transition-transform duration-300">
                <div class="relative h-44 sm:h-48 bg-white">
                  <img src="${item.img}" alt="${tf(item, 'name')}" loading="lazy"
                       onerror="this.onerror=null;this.src='images/placeholder.svg'"
                       class="w-full h-full object-contain p-2" />
                  ${item.tag ? `<span class="absolute top-3 ${isEn() ? 'left-3' : 'right-3'} text-[11px] font-extrabold bg-gold text-white px-2.5 py-1 rounded-full shadow">${tf(item, 'tag')}</span>` : ''}
                </div>
                <div class="px-4 pb-4 pt-1 text-center">
                  <h5 class="font-black text-sky-950 text-lg">${tf(item, 'name')}</h5>
                  <p class="text-sm text-sky-900/60 leading-relaxed mt-1">${tf(item, 'desc')}</p>
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
                  <h5 class="font-extrabold text-sky-950 inline">${tf(item, 'name')}</h5>
                  ${item.tag ? `<span class="text-[10px] font-extrabold bg-gold/15 text-amber-600 px-2 py-0.5 rounded-full ${isEn() ? 'ml-1.5' : 'mr-1.5'}">${tf(item, 'tag')}</span>` : ''}
                  <p class="text-sm text-sky-900/60 leading-relaxed">${tf(item, 'desc')}</p>
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
        <p class="font-script text-3xl text-sky-400 leading-tight mb-1" dir="ltr">Sky it, Love it</p>
        ${I18N[LANG]['menu.location']} &nbsp;·&nbsp; <span dir="ltr">0910 86 8888</span>
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
  navbar.classList.toggle('nav-solid', solid);
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

/* ═══════════════ Apply saved language on load ═══════════════ */
applyLang(LANG);
