import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './input.css';

const phone = '+918369012575';
const address = 'Opp. Alibag Nagarpalika, Chendhare, Alibag, Maharashtra 402201';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`Maifil Restaurant ${address}`);
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`Maifil Restaurant ${address}`)}&output=embed`;

const iconPaths = {
  star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  fork: '<path d="M6 3v6M3 3v3a3 3 0 0 0 6 0V3M6 9v12M18 3v18M18 3a4 4 0 0 0-4 4v4h4"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13C4 5 20 4 20 4s-1 16-9 16Z"/><path d="M8 16c2-3 5-5 9-7"/>',
  fish: '<path d="M6.5 12c1.6-3.2 4.3-5 8.5-5 3 0 5.5 2 7 5-1.5 3-4 5-7 5-4.2 0-6.9-1.8-8.5-5Z"/><path d="M6.5 12 3 9v6l3.5-3ZM15 10h.01M18 10h.01"/><path d="M10 8.5c-.5-1.7-.2-3.2 1-4.5M10 15.5c-.5 1.7-.2 3.2 1 4.5"/>',
  whatsapp: '<path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.7 8.7 0 0 1-4-.9L3 21l1.9-5.2a8.5 8.5 0 1 1 16.1-4.3Z"/><path d="M8.5 9.5c.8 2.2 2.3 3.7 4.5 4.5l1.2-1.2c.3-.3.7-.4 1.1-.2l1.7.8c.4.2.6.6.5 1-.2 1.1-1.2 1.8-2.4 1.7-3.3-.4-6.6-3.7-7-7-.1-1.2.6-2.2 1.7-2.4.4-.1.8.1 1 .5l.8 1.7c.2.4.1.8-.2 1.1Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  drink: '<path d="M8 2h8l-.8 3.5 1.6 2.1-2.4 13.9h-4.8L7.2 7.6l1.6-2.1L8 2Z"/><path d="M8 5.5h8M9 13h6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
};

const icon = (name, size = 18, extra = '') => `<svg class="${extra}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${iconPaths[name]}</svg>`;
const orderUrl = (dish = '') => {
  const text = dish
    ? `Hello Maifil Restaurant, I would like to order ${dish}. Please let me know if it is available.`
    : 'Hello Maifil Restaurant, I want to place an order/table inquiry.';
  return `https://wa.me/918369012575?text=${encodeURIComponent(text)}`;
};

const specialties = [
  { name: 'Special Ghee Biryani', description: 'Slow-cooked, fragrant and famous for a reason.', price: 320, image: 'biryani', badge: 'Most loved' },
  { name: 'Surmai Fish Thali', description: 'A generous catch with soft bhakri and coastal sides.', price: 390, image: 'seafood', badge: 'Coastal favourite' },
  { name: 'Tandoori Kebabs', description: 'Smoky, tender bites with a little char from the tandoor.', price: 340, image: 'tandoori', badge: 'From the grill' },
  { name: 'Indo-Chinese Platter', description: 'Big flavour, colourful plates, something for everyone.', price: 280, image: 'chinese', badge: 'Made to share' },
];

const menu = [
  { name: 'Special Ghee Biryani', category: 'biryani', veg: false, price: 320, description: 'Aromatic basmati layered with ghee, spices and fried onions.', popular: true },
  { name: 'Chicken Dum Biryani', category: 'biryani', veg: false, price: 290, description: 'Tender chicken, long-grain rice and slow-cooked dum flavour.' },
  { name: 'Veg Dum Biryani', category: 'biryani', veg: true, price: 240, description: 'Seasonal vegetables, fragrant rice and gentle warming spices.' },
  { name: 'Surmai Fish Thali', category: 'seafood', veg: false, price: 390, description: 'A generous surmai piece, soft bhakri and coastal accompaniments.', popular: true },
  { name: 'Fresh Fish Thali', category: 'seafood', veg: false, price: 350, description: 'Today’s catch served with local sides, rice and bhakri.' },
  { name: 'Prawn Masala Thali', category: 'seafood', veg: false, price: 380, description: 'A coastal favourite with fragrant masala and homestyle sides.' },
  { name: 'Tandoori Chicken', category: 'tandoori', veg: false, price: 360, description: 'Charred at the edges, juicy in the middle, served hot.' },
  { name: 'Chicken Seekh Kebab', category: 'tandoori', veg: false, price: 320, description: 'Spiced and grilled for a smoky, savoury bite.' },
  { name: 'Paneer Tikka', category: 'tandoori', veg: true, price: 280, description: 'Marinated paneer and peppers from the tandoor.' },
  { name: 'Chicken Hakka Noodles', category: 'chinese', veg: false, price: 240, description: 'Wok-tossed noodles, crisp vegetables and savoury seasoning.' },
  { name: 'Chicken Chilli', category: 'chinese', veg: false, price: 280, description: 'A lively Indo-Chinese favourite with peppers and spring onion.' },
  { name: 'Veg Manchurian', category: 'chinese', veg: true, price: 220, description: 'Crisp vegetable bites in a rich, tangy sauce.' },
  { name: 'Kokum Sharbat', category: 'beverages', veg: true, price: 80, description: 'A bright, cooling Konkan classic.' },
  { name: 'Solkadhi', category: 'beverages', veg: true, price: 90, description: 'Cool kokum and coconut, a gentle finish to a coastal meal.' },
  { name: 'Masala Chaas', category: 'beverages', veg: true, price: 70, description: 'Chilled buttermilk with a touch of spice.' },
];

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="site-nav">
    <div class="site-nav-inner mx-auto flex h-[78px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
      <a href="#home" class="site-brand flex min-w-0 items-center gap-3" aria-label="Maifil Restaurant home"><img class="brand-seal brand-logo" src="./images/maifil-logo.svg" alt="" aria-hidden="true" /><span class="brand-lockup"><strong>Maifil Restaurant</strong><small>माइफिल रेस्टोरेंट · Alibag</small></span></a>
      <div class="site-rating hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold md:flex" aria-label="Rated 4.9 out of 5 from 69 or more Google reviews">${icon('star', 14, 'fill-maifil-gold text-maifil-gold')}<strong>4.9</strong><span>· 69+ Google reviews</span></div>
      <div class="site-rating-mobile flex items-center gap-1.5 rounded-full px-2.5 py-2 text-[11px] font-bold sm:hidden" aria-label="Rated 4.9 stars">${icon('star', 13, 'fill-maifil-gold text-maifil-gold')}<span>4.9</span></div>
      <nav class="site-desktop-links hidden items-center gap-5 text-sm font-medium lg:flex" aria-label="Main navigation"><a href="#home">Home</a><a href="#menu">Menu</a><a href="#reviews">Reviews</a><a href="#visit">Find us</a></nav>
      <div class="site-nav-actions hidden shrink-0 items-center gap-2 md:flex"><a class="nav-call inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold" href="tel:+918369012575">${icon('phone', 15)}<span>Call</span></a><a class="nav-book inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold sm:px-5 sm:text-sm" href="${orderUrl()}" target="_blank" rel="noreferrer">Book a Table <span aria-hidden="true">↗</span></a></div>
      <button class="mobile-nav-toggle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:hidden" type="button" aria-label="Open navigation menu" aria-controls="mobile-nav" aria-expanded="false">${icon('menu', 20)}</button>
    </div>
    <nav id="mobile-nav" class="mobile-nav hidden" aria-label="Mobile navigation"><div class="mobile-nav-rating">${icon('star', 15, 'fill-maifil-gold text-maifil-gold')}<strong>4.9</strong><span>69+ Google reviews</span><span class="mobile-open-time">Open daily · 7 PM onwards</span></div><div class="mobile-nav-links"><a href="#home"><span>Home</span><span>01</span></a><a href="#menu"><span>Explore the menu</span><span>02</span></a><a href="#reviews"><span>Guest reviews</span><span>03</span></a><a href="#visit"><span>Location &amp; hours</span><span>04</span></a></div><a class="mobile-nav-order" href="${orderUrl()}" target="_blank" rel="noreferrer">${icon('whatsapp', 17)} Order or book on WhatsApp <span aria-hidden="true">↗</span></a></nav>
  </header>

  <main id="home" class="overflow-hidden pb-24 md:pb-0">
    <section class="hero-venue" aria-labelledby="hero-title">
      <div class="hero-frame"><img class="hero-venue-photo" src="./images/maifil-exterior-v2.png" alt="The glowing Maifil sign and warmly lit restaurant entrance in Alibag" /><div class="hero-veil"></div>
        <div class="hero-copy"><div class="hero-rating">${icon('star', 15, 'fill-maifil-gold text-maifil-gold')} <span>4.9</span><span class="hero-rating-separator">·</span><span>69+ Google reviews</span></div><p class="hero-welcome">A little taste of</p><h1 id="hero-title">Alibag<span class="hero-period">.</span></h1><p class="hero-description">Meet me at Maifil. For slow-cooked ghee biryani, fresh coastal thalis and one more story around the table.</p><div class="hero-actions"><a class="hero-button hero-button-gold" href="#menu">Explore the menu <span>↓</span></a><a class="hero-button hero-button-light" href="${orderUrl()}" target="_blank" rel="noreferrer">${icon('whatsapp', 17)} Order on WhatsApp</a></div><div class="hero-meta"><span>${icon('clock', 15)} Every evening · 7 PM onwards</span><i></i><span>${icon('fork', 15)} Dine in · Pickup · Delivery</span></div></div>
      </div>
    </section>

    <section class="biryani-feature" aria-labelledby="biryani-feature-title">
      <div class="biryani-feature-inner">
        <div class="biryani-feature-photo image-reveal"><img src="./images/ghee-biryani.png" alt="Maifil-style ghee biryani served in a copper pot beside the Konkan coast" loading="lazy" /><span class="biryani-photo-caption"><span class="biryani-caption-star">★</span><span><strong>A guest favourite</strong><small>Maifil’s Special Ghee Biryani</small></span></span></div>
        <div class="biryani-feature-copy"><p class="biryani-eyebrow"><span></span>THE ONE THEY COME BACK FOR</p><h2 id="biryani-feature-title">Good things take time. <em>Biryani is one of them.</em></h2><p>Fragrant rice, warming spices and that unmistakable ghee finish. Settle in for a plate worth slowing down for.</p><div class="biryani-feature-actions"><a href="#menu" class="biryani-menu-link">Discover the menu <span aria-hidden="true">↗</span></a><a href="${orderUrl('Special Ghee Biryani')}" class="biryani-wa-link" target="_blank" rel="noreferrer">${icon('whatsapp', 17)} Order this favourite</a></div><span class="biryani-signature">MAIFIL · ALIBAG</span></div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="bestsellers-heading">
      <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p class="text-xs font-bold uppercase tracking-[.18em] text-maifil-red">From our kitchen</p><h2 id="bestsellers-heading" class="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Chef’s bestsellers</h2></div><p class="max-w-md text-sm leading-6 text-stone-600">The dishes guests come back for. Made to order, served generously, and best enjoyed together.</p></div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${specialties.map((item) => { const crops = { biryani: ['0%', '0%'], seafood: ['-50%', '0%'], tandoori: ['0%', '-50%'], chinese: ['-50%', '-50%'] }; const [cropX, cropY] = crops[item.image]; return `<article class="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift"><div class="menu-photo image-reveal relative h-44 overflow-hidden"><img class="photo-crop" src="./images/menu-contact-sheet.png" alt="${item.name}" style="--crop-x:${cropX};--crop-y:${cropY}" /><span class="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-stone-700 shadow-card">${item.badge}</span></div><div class="p-4"><div class="flex items-start justify-between gap-2"><h3 class="font-heading text-base font-semibold">${item.name}</h3><span class="shrink-0 rounded-lg bg-amber-50 px-2 py-1 text-sm font-bold text-maifil-red">₹${item.price}</span></div><p class="mt-2 min-h-10 text-xs leading-5 text-stone-600">${item.description}</p><a class="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#18794E] px-3 text-xs font-semibold text-white transition hover:bg-green-800" href="${orderUrl(item.name)}" target="_blank" rel="noreferrer">${icon('whatsapp', 15)} Order via WhatsApp</a></div></article>`; }).join('')}</div>
      <p class="mt-4 text-[11px] leading-5 text-stone-500">Sample prices are estimates for this website concept; please ask Maifil to confirm current menu and prices.</p>
    </section>

    <section id="menu" class="bg-white py-16 sm:py-20" aria-labelledby="menu-heading">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p class="text-xs font-bold uppercase tracking-[.18em] text-maifil-red">A little something for everyone</p><h2 id="menu-heading" class="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Explore the menu</h2></div><a class="hidden items-center gap-2 text-sm font-semibold text-maifil-red sm:inline-flex" href="${orderUrl()}" target="_blank" rel="noreferrer">Ask us about today’s specials ${icon('arrow', 16)}</a></div>
        <div class="no-scrollbar -mx-4 mt-7 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" role="group" aria-label="Filter menu by category"><button class="menu-filter active" type="button" data-filter="all" aria-pressed="true">All</button><button class="menu-filter" type="button" data-filter="biryani" aria-pressed="false">Biryani Specials</button><button class="menu-filter" type="button" data-filter="seafood" aria-pressed="false">Seafood &amp; Thali</button><button class="menu-filter" type="button" data-filter="tandoori" aria-pressed="false">Tandoori &amp; Kebabs</button><button class="menu-filter" type="button" data-filter="chinese" aria-pressed="false">Chinese</button><button class="menu-filter" type="button" data-filter="beverages" aria-pressed="false">Beverages</button></div>
        <div class="mt-7 grid items-center gap-6 lg:grid-cols-[1.15fr_.85fr] lg:gap-10">
          <div>
            <div id="menu-grid" class="menu-orbit-stage relative h-[320px] overflow-hidden rounded-[1.75rem] bg-[#191715] sm:h-[410px]" role="region" aria-label="Interactive 3D dish carousel" tabindex="0"></div>
            <div class="mt-3 flex items-center justify-between gap-4"><span id="menu-position" class="font-body text-xs font-semibold tabular-nums text-stone-500">01 / 15</span><div class="menu-progress-track flex-1"><span id="menu-progress"></span></div><div class="flex gap-2"><button class="menu-scroll-button menu-scroll-prev" type="button" aria-label="Previous dish" title="Previous dish">${icon('chevron', 17, 'rotate-180')}</button><button class="menu-scroll-button menu-scroll-next" type="button" aria-label="Next dish" title="Next dish">${icon('chevron', 17)}</button></div></div>
            <p class="mt-2 text-[11px] text-stone-500">Swipe, drag, scroll, or use the arrows to explore.</p>
          </div>
          <aside id="menu-details" class="rounded-[1.6rem] border border-stone-100 bg-maifil-cream p-5 shadow-card sm:p-7" aria-live="polite">
            <div class="flex items-center justify-between gap-3"><span id="menu-detail-category" class="text-[10px] font-bold uppercase tracking-[.18em] text-maifil-red">Biryani Specials</span><span id="menu-detail-popular" class="hidden rounded-full bg-amber-100 px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-amber-800">Guest favourite</span></div>
            <h3 id="menu-detail-name" class="mt-3 font-heading text-2xl font-semibold tracking-tight text-maifil-ink sm:text-3xl">Special Ghee Biryani</h3>
            <p id="menu-detail-description" class="mt-3 min-h-12 text-sm leading-6 text-stone-600">Aromatic basmati layered with ghee, spices and fried onions.</p>
            <div class="mt-5 flex items-center justify-between gap-4 border-t border-stone-200 pt-4"><span id="menu-detail-diet" class="inline-flex items-center gap-2 text-xs font-medium text-rose-700"><span class="diet-mark nonveg"></span>Non-vegetarian</span><span class="text-[10px] font-semibold uppercase tracking-widest text-stone-400">Sample price</span></div>
            <div class="mt-2 flex items-end justify-between gap-3"><span id="menu-detail-price" class="font-heading text-3xl font-semibold text-maifil-red">₹320</span><a id="menu-detail-order" class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#18794E] px-4 text-xs font-bold text-white shadow-card transition hover:bg-green-800" href="${orderUrl('Special Ghee Biryani')}" target="_blank" rel="noreferrer">${icon('whatsapp', 16)} Order this dish</a></div>
          </aside>
        </div>
        <p class="mt-3 text-[11px] text-stone-500">Prices shown are sample estimates and may vary. Please confirm with the restaurant.</p>
      </div>
    </section>

    <section id="reviews" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="reviews-heading">
      <div class="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p class="text-xs font-bold uppercase tracking-[.18em] text-maifil-red">Kind words, happy tables</p><h2 id="reviews-heading" class="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Loved by Alibag</h2></div><div class="flex items-center gap-3 self-start rounded-2xl border border-amber-200 bg-white px-4 py-3 shadow-card sm:self-auto"><span class="text-3xl font-bold tracking-tight">4.9</span><span><span class="block text-sm tracking-widest text-maifil-gold">★★★★★</span><small class="block text-xs text-stone-500">out of 5 · 69+ Google Reviews</small></span></div></div>
      <div class="grid gap-4 md:grid-cols-3"><article class="rounded-2xl bg-white p-5 shadow-card"><div class="text-sm tracking-widest text-maifil-gold" aria-label="5 out of 5 stars">★★★★★</div><blockquote class="mt-3 font-heading text-lg font-medium leading-7">“The ghee biryani was delicious—well worth the local recommendation.”</blockquote><p class="mt-5 text-xs font-semibold text-stone-500">Chinmay Patil <span class="font-normal">· Local Guide</span></p></article><article class="rounded-2xl bg-white p-5 shadow-card"><div class="text-sm tracking-widest text-maifil-gold" aria-label="5 out of 5 stars">★★★★★</div><blockquote class="mt-3 font-heading text-lg font-medium leading-7">“A generous Surmai piece, with soft bhakri. A lovely Alibag meal.”</blockquote><p class="mt-5 text-xs font-semibold text-stone-500">Vinay Singh <span class="font-normal">· Local Guide</span></p></article><article class="rounded-2xl bg-white p-5 shadow-card"><div class="text-sm tracking-widest text-maifil-gold" aria-label="5 out of 5 stars">★★★★★</div><blockquote class="mt-3 font-heading text-lg font-medium leading-7">“Guests praise the pleasant ambience, generous portions and excellent service.”</blockquote><p class="mt-5 text-xs font-semibold text-stone-500">Maifil guest review summary</p></article></div>
      <p class="mt-4 text-[10px] leading-5 text-stone-500">Review highlights are paraphrased from the guest feedback provided for this site.</p>
    </section>

    <section id="visit" class="bg-[#241F1C] py-16 text-white sm:py-20" aria-labelledby="visit-heading"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-8 max-w-xl"><p class="text-xs font-bold uppercase tracking-[.18em] text-maifil-gold">Come by for dinner</p><h2 id="visit-heading" class="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Find your table in Alibag</h2></div>
      <div class="grid gap-4 lg:grid-cols-[.92fr_1.08fr]"><div class="grid gap-3 sm:grid-cols-2"><article class="rounded-2xl border border-white/10 bg-white/5 p-5"><span class="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-maifil-gold">${icon('pin', 19)}</span><h3 class="font-heading text-base font-semibold">Address</h3><p class="mt-2 text-sm leading-6 text-stone-300">${address}</p></article><article class="rounded-2xl border border-white/10 bg-white/5 p-5"><span class="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-maifil-gold">${icon('clock', 19)}</span><h3 class="font-heading text-base font-semibold">Opening hours</h3><p class="mt-2 text-sm leading-6 text-stone-300">Open daily<br><b class="text-white">7:00 PM onwards</b></p></article><article class="rounded-2xl border border-white/10 bg-white/5 p-5"><span class="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-maifil-gold">${icon('phone', 19)}</span><h3 class="font-heading text-base font-semibold">Call or WhatsApp</h3><p class="mt-2 text-sm leading-6 text-stone-300"><a class="hover:text-white" href="tel:+918369012575">+91 83690 12575</a></p></article><article class="rounded-2xl border border-white/10 bg-white/5 p-5"><span class="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-maifil-gold">${icon('fork', 19)}</span><h3 class="font-heading text-base font-semibold">Service options</h3><p class="mt-2 text-sm leading-6 text-stone-300">Dine-in · Kerbside pickup<br>No-contact delivery</p></article></div>
        <div class="map-card relative min-h-[340px] overflow-hidden rounded-2xl border border-amber-100 bg-amber-50 shadow-lift"><iframe class="absolute inset-0 h-full w-full border-0" src="${mapEmbedUrl}" title="Google Map showing Maifil Restaurant in Chendhare, Alibag" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a class="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 pr-5 text-left text-stone-900 shadow-lift transition hover:scale-[1.02] hover:border-maifil-gold" href="${mapUrl}" target="_blank" rel="noreferrer" aria-label="Open Maifil Restaurant in Google Maps"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-maifil-red text-white">${icon('pin', 21)}</span><span><b class="block font-heading text-sm">Maifil Restaurant</b><small class="mt-0.5 block text-xs font-medium text-maifil-red">Open in Google Maps ↗</small></span></a><div class="pointer-events-none absolute bottom-3 left-3 z-10 max-w-[70%] rounded-xl border border-stone-100 bg-white/95 p-3 text-xs text-stone-700 shadow-card"><b class="block">Opp. Alibag Nagarpalika</b><span class="mt-1 block text-stone-500">Chendhare, Alibag · Maharashtra 402201</span></div></div></div>
    </div></section>
  </main>

  <footer class="site-footer">
    <div class="site-footer-main mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="footer-brand"><a href="#home" class="footer-brand-link" aria-label="Maifil Restaurant home"><img class="brand-seal brand-logo footer-logo" src="./images/maifil-logo.svg" alt="Maifil Restaurant logo" /></a><p>A table worth gathering around. Come for the biryani, stay for the evening.</p><span class="footer-rating">${icon('star', 14, 'fill-maifil-gold text-maifil-gold')} <strong>4.9</strong><span>· 69+ Google reviews</span></span></div>
      <div class="footer-links"><h2>Explore</h2><a href="#menu">Our menu</a><a href="#reviews">Guest reviews</a><a href="#visit">Find us</a><a href="${mapUrl}" target="_blank" rel="noreferrer">Get directions ${icon('arrow', 13)}</a></div>
      <div class="footer-contact"><h2>Come by this evening</h2><p>${icon('clock', 16)} <span>Open daily<br /><strong>7:00 PM onwards</strong></span></p><p>${icon('pin', 16)} <span>Opp. Alibag Nagarpalika<br /><strong>Chendhare, Alibag 402201</strong></span></p><a class="footer-phone" href="tel:+918369012575">${icon('phone', 15)} +91 83690 12575</a></div>
    </div>
    <div class="site-footer-bottom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><span>© ${new Date().getFullYear()} Maifil Restaurant</span><span>Made for good food &amp; good company.</span><a href="${mapUrl}" target="_blank" rel="noreferrer">Leave a Google review ↗</a></div>
  </footer>

  <nav class="mobile-order-bar fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-stone-200 bg-white/95 p-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,.09)] backdrop-blur md:hidden" aria-label="Quick contact"><a class="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#18794E] px-3 text-xs font-bold text-white" href="${orderUrl()}" target="_blank" rel="noreferrer">${icon('whatsapp', 17)} Order on WhatsApp</a><a class="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-maifil-red px-3 text-xs font-bold text-white" href="tel:+918369012575">${icon('phone', 17)} Call restaurant</a></nav>
`;

const dishGrid = document.querySelector('#menu-grid');
const scrollPrev = document.querySelector('.menu-scroll-prev');
const scrollNext = document.querySelector('.menu-scroll-next');
const menuPosition = document.querySelector('#menu-position');
const menuProgress = document.querySelector('#menu-progress');
const detailCategory = document.querySelector('#menu-detail-category');
const detailName = document.querySelector('#menu-detail-name');
const detailDescription = document.querySelector('#menu-detail-description');
const detailDiet = document.querySelector('#menu-detail-diet');
const detailPrice = document.querySelector('#menu-detail-price');
const detailOrder = document.querySelector('#menu-detail-order');
const detailPopular = document.querySelector('#menu-detail-popular');
const categories = {
  all: 'All',
  biryani: 'Biryani Specials',
  seafood: 'Seafood & Thali',
  tandoori: 'Tandoori & Kebabs',
  chinese: 'Chinese',
  beverages: 'Beverages',
};
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const photoRevealObserver = !reduceMotion && 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-image-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -36px 0px' })
  : null;

function observePhotoReveals(root = document) {
  root.querySelectorAll('.image-reveal:not([data-reveal-observed])').forEach((element, index) => {
    element.dataset.revealObserved = 'true';
    element.style.setProperty('--photo-reveal-delay', `${Math.min(index % 4, 3) * 85}ms`);
    if (photoRevealObserver) photoRevealObserver.observe(element);
    else element.classList.add('is-image-visible');
  });
}

let activeCategory = 'all';
let activeIndex = 0;
let dragStartX = null;
let orbitFrame = null;

function filteredMenu() {
  return activeCategory === 'all' ? menu : menu.filter((dish) => dish.category === activeCategory);
}

function renderMenu() {
  const items = filteredMenu();
  activeIndex = (activeIndex + items.length) % items.length;
  const activeDish = items[activeIndex];
  const crops = { biryani: ['0%', '0%'], seafood: ['-50%', '0%'], tandoori: ['0%', '-50%'], chinese: ['-50%', '-50%'], beverages: ['-50%', '-50%'] };
  const half = Math.floor(items.length / 2);
  const step = Math.min(dishGrid.clientWidth * 0.35, 238);
  const visibleDishes = items.map((dish, index) => {
    let offset = index - activeIndex;
    if (offset > half) offset -= items.length;
    if (offset < -half) offset += items.length;
    return { dish, index, offset };
  }).filter(({ offset }) => Math.abs(offset) <= 2);

  dishGrid.setAttribute('aria-busy', 'true');
  dishGrid.innerHTML = `
    <div class="orbit-backdrop" aria-hidden="true"><span class="orbit-latitude orbit-latitude-a"></span><span class="orbit-latitude orbit-latitude-b"></span><span class="orbit-speck orbit-speck-a"></span><span class="orbit-speck orbit-speck-b"></span><span class="orbit-speck orbit-speck-c"></span><span class="orbit-speck orbit-speck-d"></span><span class="orbit-stage-kicker">MAIFIL&nbsp; · &nbsp;THE MENU</span><span class="orbit-stage-count">${String(activeIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}</span></div>
    ${visibleDishes.map(({ dish, index, offset }) => {
      const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.65;
      const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.76 : 0.34;
      return `<button class="orbit-dish-card ${offset === 0 ? 'is-active' : ''}" type="button" data-index="${index}" aria-pressed="${offset === 0}" aria-label="${dish.name}, ₹${dish.price}. ${offset === 0 ? 'Selected' : 'Select dish'}" style="--card-x:${offset * step}px;--card-z:${-Math.abs(offset) * 82}px;--card-turn:${-offset * 23}deg;--card-scale:${scale};--card-alpha:${opacity};--card-delay:${Math.abs(offset) * 65}ms">
        <span class="orbit-card-photo image-reveal">${dish.category === 'beverages' ? `<span class="orbit-drink-art">${icon('drink', 39)}</span>` : `<img src="./images/menu-contact-sheet.png" alt="" style="--crop-x:${crops[dish.category][0]};--crop-y:${crops[dish.category][1]}" />`}</span>
        <span class="orbit-card-copy"><span class="orbit-card-kind">${categories[dish.category]}</span><span class="orbit-card-name">${dish.name}</span><span class="orbit-card-price">₹${dish.price}</span></span>
      </button>`;
    }).join('')}
    <span class="orbit-scroll-cue" aria-hidden="true">SCROLL TO EXPLORE&nbsp; ↓</span>`;
  dishGrid.setAttribute('aria-busy', 'false');
  observePhotoReveals(dishGrid);
  dishGrid.setAttribute('aria-label', `${activeDish.name} selected. ${items.length} dishes in ${categories[activeCategory]}. Use arrow keys, swipe, or the previous and next buttons.`);
  detailCategory.textContent = categories[activeDish.category];
  detailName.textContent = activeDish.name;
  detailDescription.textContent = activeDish.description;
  detailDiet.innerHTML = `<span class="diet-mark ${activeDish.veg ? 'veg' : 'nonveg'}"></span>${activeDish.veg ? 'Vegetarian' : 'Non-vegetarian'}`;
  detailPrice.textContent = `₹${activeDish.price}`;
  detailOrder.href = orderUrl(activeDish.name);
  detailPopular.classList.toggle('hidden', !activeDish.popular);
  menuPosition.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
  menuProgress.style.width = `${((activeIndex + 1) / items.length) * 100}%`;
  if (reduceMotion || !('IntersectionObserver' in window)) dishGrid.classList.add('is-ready');
}

function moveDish(direction) {
  const items = filteredMenu();
  activeIndex = (activeIndex + direction + items.length) % items.length;
  renderMenu();
}

renderMenu();
observePhotoReveals();
if (!reduceMotion && 'IntersectionObserver' in window) {
  const orbitObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      dishGrid.classList.add('is-ready');
      orbitObserver.disconnect();
    }
  }, { threshold: 0.14 });
  orbitObserver.observe(dishGrid);
}

const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const setMobileNavOpen = (open) => {
  mobileNav.classList.toggle('hidden', !open);
  mobileNavToggle.setAttribute('aria-expanded', String(open));
  mobileNavToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  mobileNavToggle.innerHTML = icon(open ? 'close' : 'menu', 20);
};
mobileNavToggle.addEventListener('click', () => setMobileNavOpen(mobileNavToggle.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMobileNavOpen(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileNavToggle.getAttribute('aria-expanded') === 'true') {
    setMobileNavOpen(false);
    mobileNavToggle.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-nav') && mobileNavToggle.getAttribute('aria-expanded') === 'true') setMobileNavOpen(false);
});

document.querySelectorAll('.menu-filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.menu-filter').forEach((filter) => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  activeCategory = button.dataset.filter;
  activeIndex = 0;
  renderMenu();
}));
scrollPrev.addEventListener('click', () => moveDish(-1));
scrollNext.addEventListener('click', () => moveDish(1));
dishGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.orbit-dish-card');
  if (!card) return;
  activeIndex = Number(card.dataset.index);
  renderMenu();
});
dishGrid.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    moveDish(event.key === 'ArrowRight' ? 1 : -1);
  }
});
dishGrid.addEventListener('wheel', (event) => {
  if (Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 12) {
    event.preventDefault();
    moveDish(event.deltaX > 0 ? 1 : -1);
  }
}, { passive: false });
dishGrid.addEventListener('pointerdown', (event) => { dragStartX = event.clientX; });
dishGrid.addEventListener('pointerup', (event) => {
  if (dragStartX === null) return;
  const distance = event.clientX - dragStartX;
  if (Math.abs(distance) > 42) moveDish(distance < 0 ? 1 : -1);
  dragStartX = null;
});
dishGrid.addEventListener('pointercancel', () => { dragStartX = null; });
window.addEventListener('scroll', () => {
  if (reduceMotion || orbitFrame !== null) return;
  orbitFrame = requestAnimationFrame(() => {
    const rect = dishGrid.getBoundingClientRect();
    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    dishGrid.style.setProperty('--scroll-turn', `${(progress - 0.5) * 70}deg`);
    orbitFrame = null;
  });
}, { passive: true });
window.addEventListener('resize', () => renderMenu());
