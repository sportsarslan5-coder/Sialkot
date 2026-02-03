
import { Product, BlogPost, Translations } from './types';

export const EXCHANGE_RATE_PKR = 278.5; 
export const WHATSAPP_NUMBER = "923079490721";
export const AMAZON_BASE_URL = "https://www.amazon.com/s?k=";

export const TRANSLATIONS: Translations = {
  home: { en: 'Home', ur: 'گھر' },
  shop: { en: 'Shop', ur: 'دکان' },
  blog: { en: 'Blog', ur: 'بلاگ' },
  contact: { en: 'Contact', ur: 'رابطہ کریں' },
  cart: { en: 'Cart', ur: 'ٹوکری' },
  checkout: { en: 'Checkout', ur: 'چیک آؤٹ' },
  search: { en: 'Search 1,000+ Sialkot Items...', ur: 'مارکیٹ پلیس تلاش کریں...' },
  men: { en: 'Men', ur: 'مرد' },
  women: { en: 'Women', ur: 'خواتین' },
  kids: { en: 'Kids', ur: 'بچے' },
  autoPricing: { en: 'AI Scanner', ur: 'AI سکینر' },
  sportStore: { en: 'Sport Store', ur: 'سپورٹس اسٹور' },
  buyNow: { en: 'Shop Best Sellers', ur: ' بہترین فروخت کنندگان' },
  heroTitle: { en: 'Global Performance Marketplace', ur: 'عالمی کارکردگی کا بازار' },
  heroSubtitle: { en: 'Sialkot Shop: The Amazon of premium athletic gear. 1,000+ Units Verified.', ur: 'سیالکوٹ شاپ: پریمیم ایتھلیٹک گیئر کا ایمیزون۔ 1,000+ یونٹس کی تصدیق۔' },
  dealOfTheDay: { en: 'Today\'s Deals', ur: 'آج کی ڈیلز' },
  addToCart: { en: 'Add to Cart', ur: 'ٹوکری میں شامل کریں' },
  reviews: { en: 'Global Reviews', ur: 'عالمی جائزے' },
  emptyCart: { en: 'Your Sialkot Cart is empty', ur: 'آپ کی ٹوکری خالی ہے' },
  total: { en: 'Total Amount', ur: 'کل رقم' },
  placeOrder: { en: 'Proceed to Checkout', ur: 'چیک آؤٹ پر جائیں' },
  contactUs: { en: 'Customer Service', ur: 'کسٹمر service' },
  sendMessage: { en: 'Submit Request', ur: 'درخواست جمع کروائیں' },
  aiStylist: { en: 'Marketplace Expert', ur: 'مارکیٹ ماہر' },
  stylistIntro: { en: 'Global Intelligence active. Accessing 1,000+ item database. How can I help?', ur: 'عالمی انٹیلی جنس فعال ہے۔ 1,000+ آئٹم ڈیٹا بیس تک رسائی۔ میں کیسے مدد کر سکتا ہوں؟' },
  typing: { en: 'Syncing Catalog...', ur: 'تجزیہ کر رہا ہے...' },
  footerText: { en: '© 2024 Sialkot Global Marketplace. 1000 Post Goal Active.', ur: '© 2024 سیالکوٹ گلوبل مارکیٹ پلیس۔' },
  subscribe: { en: 'Get Daily Deals', ur: 'روزانہ کی ڈیلز حاصل کریں' },
  compareAmazon: { en: 'Compare Global Price', ur: 'عالمی قیمت کا موازنہ کریں' }
};

export const MASTER_CATALOG_DATA = `
1101-1200. Sialkot Field Series (Gridiron & American Uniforms) – $38-$40,
801-850. Court Heritage Series (Basketball Pro-Am) – $40,
901-950. Victory Lifestyle Series (Varsity Apparel) – $40-$60,
1001-1010. Pro-Diamond Equipment (Bats & Gear) – $150
`;

export const PRODUCTS: Product[] = [
  // --- DIAMOND EQUIPMENT ($150) ---
  {
    id: 1001,
    name: "Sialkot 'Pencil Protocol' Elite BBCOR Baseball Bat",
    category: "Men",
    priceUSD: 150.00,
    image: "https://res.cloudinary.com/dc0ytviey/image/upload/v1770143043/VictusPencilBBCORBaseballBat_-3_1_jfwdgj.png",
    description: "The viral sensation of the USA diamond. BBCOR-certified. Engineered for max exit velocity.",
    sizes: ["31/28", "32/29", "33/30", "34/31"],
    rating: 5.0,
    reviews: 2450
  },
  {
    id: 1004,
    name: "Diamond Series Elite 'Victus' Bat Pack",
    category: "Men",
    priceUSD: 150.00,
    image: "https://res.cloudinary.com/dc0ytviey/image/upload/v1770143317/WBD2589010__719f9aad56d543b1957031a2c5bd8981_pkkkar.jpg",
    description: "Ultimate tournament backpack. Holds 4 bats and all gear.",
    sizes: ["One Size"],
    rating: 4.9,
    reviews: 820
  },

  // --- GRIDIRON & AMERICAN UNIFORMS ($38 - $40) ---
  {
    id: 1101,
    name: "Sialkot Pro-Gridiron 'Endzone' Elite Uniform",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770054613/2_811d056b-a34e-49ea-b42f-6595878871c4_800x_kj2kke.jpg",
    description: "Double-stitched reinforced shoulders for the gridiron. High-stretch performance.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 312
  },
  {
    id: 1102,
    name: "Varsity 'Touchdown' Performance Kit",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770054614/American-Football-700-9_vpggpv.jpg",
    description: "Friday Night Lights essential. Moisture-wicking technology.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 189
  },
  {
    id: 1103,
    name: "Sialkot 'Field General' Blackout Series",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770056364/jerseys_j0kxki.jpg",
    description: "Stealth aesthetics for high-stakes games.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 95
  },
  {
    id: 1104,
    name: "Sialkot 'Infield Master' Baseball Uniform",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770048123/FD-163_FD-5060_u9c4nk.png",
    description: "Professional button-down front with reinforced knees.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 256
  },
  {
    id: 1105,
    name: "Elite 'Home Plate' Tournament Jersey",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770048123/FD-BASE-VN2-3444-nLxSniE19uaW_alt_3_x1e3hs.png",
    description: "High-performance mesh jersey with custom piping.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 178
  },
  {
    id: 1106,
    name: "Diamond Heritage 'iw4' Classic Set",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770048122/iw4bvdxfzz7ak15hcgrm_cqn51z.jpg",
    description: "Traditional aesthetic meets Sialkot core performance tech.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 64
  },
  {
    id: 1107,
    name: "NCAA 'Practice Protocol' Field Jersey",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770048125/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dhbWVjb2Nrc29ubGluZS1jb20vMjAyNi8wMS9hMDQ5ZmIxNS1ic2JfMDEyM19wcmFjdGljZV9kYXZpc18yNl81OS5qcGc_iy4soz.png",
    description: "Built for the daily grind. High-density knit construction.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 112
  },
  {
    id: 1108,
    name: "Sialkot 'Diamond Legend' Performance Set",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770055149/2026_BASE_LeggettNo7Legacy_FRONT_rkrgpu.webp",
    description: "The choice of collegiate programs across the USA.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 212
  },
  {
    id: 1109,
    name: "Endzone 'Gridiron' Pro-Level Model",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770056366/american-football-player-uniform-training-field_23-2150034543_w6cmwh.jpg",
    description: "Engineered for high-impact endzone collisions.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 340
  },
  {
    id: 1110,
    name: "Sialkot 'Field Stealth' Dark Uniform",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770056364/jerseys_j0kxki.jpg",
    description: "Stealth optics for night games. High-visibility piping.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 420
  },
  {
    id: 1111,
    name: "Sialkot 'Gridiron Stealth' Model X",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770054612/16AMERICANFOOTBALLMODEL_swj02j.jpg",
    description: "Advanced compression fit for elite skill players.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 320
  },
  {
    id: 1112,
    name: "Sialkot 'Training Protocol' Gridiron Uniform",
    category: "Men",
    priceUSD: 38.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770056366/american-football-player-uniform-training-field_23-2150034543_w6cmwh.jpg",
    description: "Professional grade training uniform. High-density stretch fabric with moisture management for elite practice sessions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 84
  },
  {
    id: 1113,
    name: "Sialkot 'American Patriot' Elite Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770128553/FB_IMG_1753631444486_vgv7it.jpg",
    description: "Signature 'American Uniform' series. High-definition sublimation with patriotic accents and advanced thermal regulation.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 42
  },
  {
    id: 1114,
    name: "Sialkot 'Stars & Stripes' Pro Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770128553/IMG_20240825_235546_falfi5.jpg",
    description: "Elite 'American Uniform' variant. Engineered for USA Pro-Am performance with ultra-breathable mesh siding.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 28
  },
  {
    id: 1115,
    name: "Sialkot 'Liberty' Performance Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770128671/FB_IMG_1747016784574_kzunjj.jpg",
    description: "The 'American Uniform' standard. Liberty edition features reinforced dual-stitch seams for heavy competition use.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 19
  },
  {
    id: 1116,
    name: "Sialkot 'Independence' Elite Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770128671/FB_IMG_1745329080230_it2zeb.jpg",
    description: "Championship-grade 'American Uniform'. Designed for the Independence Day tournaments with high-visibility graphics.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 35
  },

  // --- COURT HERITAGE ($40) ---
  {
    id: 801,
    name: "Sialkot Pro-Court 'Midnight Elite' Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959108/r2bTqPDVgvog-1_hgbxbr.jpg",
    description: "Heavy-duty mesh for the USA courts.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 1240
  },
  {
    id: 802,
    name: "Varsity Gold 'State Championship' Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959108/189-1_407fdb46-3f2a-4381-8fdd-26b09f0a65cb_mchjhk.jpg",
    description: "Varsity-grade durability. Championship standard.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 864
  },
  {
    id: 804,
    name: "Golden State 'Bay Area' Swingman",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959106/unisex-nike-stephen-curry-black-golden-state-warriors-swingman-badge-player-jersey-city-edition_pi5202000_ff_5202680-898016d5c53d4c7303a4_full_s1hfmj.jpg",
    description: "Premium swingman edition for the Bay Area.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 3201
  },
  {
    id: 805,
    name: "Precision 'Mockup' Elite Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959077/realistic-basketball-jersey-front-and-back-view-mockup-free-vector_rp66dv.jpg",
    description: "Clean lines and high-performance mesh layout.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviews: 430
  },
  {
    id: 806,
    name: "Future Star 'Youth Elite' Kit",
    category: "Kids",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959076/Youth-Basketball-Uniforms-manufacturer-Pakistan_ur1l7x.jpg",
    description: "Scaling Sialkot tech for the next generation.",
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 890
  },
  {
    id: 807,
    name: "ZWBK-700 'Armor Core' Jersey",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959075/ZWBK-700-F_vizasi.jpg",
    description: "The toughest uniform in the catalog. Virtually indestructible.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 1560
  },
  {
    id: 811,
    name: "USA National 'Olympic Protocol' Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg",
    description: "Patriotic performance. Sialkot's flagship USA kit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 5802
  },
  {
    id: 812,
    name: "Ivy League 'Maroon Heritage' Set",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959010/03-1_rok8gj.jpg",
    description: "Collegiate aesthetic with professional strength.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 670
  },
  {
    id: 813,
    name: "University Maroon 'Deep Red' Series",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959009/MaroonBasketballUniform_o6zycg.jpg",
    description: "Deep, rich tones with color-fast technology.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 980
  },
  {
    id: 821,
    name: "Sialkot 'Court-King' Pro-Shield Jersey",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/mens_bball14_vhu6hj.jpg",
    description: "Virtually indestructible shield-mesh technology.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 3120
  },
  {
    id: 825,
    name: "Chicago 'Night Ops' Reversible Jersey",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959007/Wholesale-Blank-Basketball-Uniforms-Youth-Unisex-Reversible-Basketball-Jersey_ljzsb0.webp",
    description: "Double-sided versatility for intense training.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 1450
  },
  {
    id: 830,
    name: "Brooklyn 'Iron' Streetball Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959049/Custom_Adult_Basketball_Uniforms_664264dfe7ddc_jqmbze.jpg",
    description: "The toughest kit in the 5 boroughs. Reinforced hems.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 890
  },
  {
    id: 840,
    name: "Sialkot 'Coastal Heat' Neon Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959008/1-38_ldi0e1.jpg",
    description: "High-visibility neon for the streetball circuit.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 740
  },

  // --- VICTORY LIFESTYLE ($40-$60) ---
  {
    id: 901,
    name: "Sialkot Elite 'Victory' Varsity Performance Jacket",
    category: "Men",
    priceUSD: 60.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769616663/IMG_20260128_204235_xsyqxp.png",
    description: "Pre-game tunnel walk essential. Weather-resistant.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 4280
  },
  {
    id: 903,
    name: "Sialkot Elite 'Victory' Pro-Performance Hoodie",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dc0ytviey/image/upload/v1769946031/received_636377795397638_c5nabl.jpg",
    description: "Thermal-sync technology for post-game recovery.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 1280
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Sialkot to USA: The 1,000 Post Milestone",
    summary: "How we scaled from a specialized shop to a global marketplace giant in record time.",
    date: "Feb 05, 2025",
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg"
  },
  {
    id: 2,
    title: "Gridiron Protocol: Why US High Schools Choose Sialkot",
    summary: "A deep dive into the $38 uniform that is changing the economics of American youth football.",
    date: "Jan 28, 2025",
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770054613/2_811d056b-a34e-49ea-b42f-6595878871c4_800x_kj2kke.jpg"
  }
];
