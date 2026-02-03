
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
  search: { en: 'Search Sialkot Marketplace...', ur: 'مارکیٹ پلیس تلاش کریں...' },
  men: { en: 'Men', ur: 'مرد' },
  women: { en: 'Women', ur: 'خواتین' },
  kids: { en: 'Kids', ur: 'بچے' },
  autoPricing: { en: 'AI Scanner', ur: 'AI سکینر' },
  sportStore: { en: 'Sport Store', ur: 'سپورٹس اسٹور' },
  buyNow: { en: 'Shop Best Sellers', ur: ' بہترین فروخت کنندگان' },
  heroTitle: { en: 'Global Performance Marketplace', ur: 'عالمی کارکردگی کا بازار' },
  heroSubtitle: { en: 'Sialkot Shop: The Amazon of premium athletic gear. Verified for USA.', ur: 'سیالکوٹ شاپ: پریمیم ایتھلیٹک گیئر کا ایمیزون۔ امریکہ کے لیے تصدیق شدہ۔' },
  dealOfTheDay: { en: 'Today\'s Deals', ur: 'آج کی ڈیلز' },
  addToCart: { en: 'Add to Cart', ur: 'ٹوکری میں شامل کریں' },
  reviews: { en: 'Global Reviews', ur: 'عالمی جائزے' },
  emptyCart: { en: 'Your Sialkot Cart is empty', ur: 'آپ کی ٹوکری خالی ہے' },
  total: { en: 'Total Amount', ur: 'کل رقم' },
  placeOrder: { en: 'Proceed to Checkout', ur: 'چیک آؤٹ پر جائیں' },
  contactUs: { en: 'Customer Service', ur: 'کسٹمر سروس' },
  sendMessage: { en: 'Submit Request', ur: 'درخواست جمع کروائیں' },
  aiStylist: { en: 'Marketplace Expert', ur: 'مارکیٹ ماہر' },
  stylistIntro: { en: 'Global Intelligence active. How can I assist your purchase today?', ur: 'عالمی انٹیلی جنس فعال ہے۔ آج میں آپ کی خریداری میں کیسے مدد کر سکتا ہوں؟' },
  typing: { en: 'Analyzing Catalog...', ur: 'تجزیہ کر رہا ہے...' },
  footerText: { en: '© 2024 Sialkot Global Marketplace. All rights reserved.', ur: '© 2024 سیالکوٹ گلوبل مارکیٹ پلیس۔' },
  subscribe: { en: 'Get Daily Deals', ur: 'روزانہ کی ڈیلز حاصل کریں' },
  compareAmazon: { en: 'Compare Global Price', ur: 'عالمی قیمت کا موازنہ کریں' }
};

export const MASTER_CATALOG_DATA = `
902. Sialkot Pro-Flex "Essential" Performance Hoodie – $30,
901. Sialkot Elite "Victory" Varsity Performance Jacket – $60,
801. Sialkot Pro-Court "Midnight Elite" Uniform – $40,
802. Varsity Gold "State Championship" Kit – $40,
803. Brooklyn "Asphalt" Streetball Jersey – $40,
804. Golden State "Bay Area" Swingman – $40,
805. Manhattan "Precision" Performance Kit – $40,
806. Youth "Future Star" All-Star Uniform – $40,
807. Pro-Level "ZWBK-700" Performance Suit – $40,
808. Chicago "Windy City" Redline Edition – $40,
809. Custom Adult "Full-Court" Elite Uniform – $40,
810. NCAA "Heritage" Blue & White Edition – $40,
811. USA National "Olympic Protocol" Kit – $40,
812. Maroon "Ivy League" Traditionalist Set – $40,
813. University Maroon "Deep Red" Tournament Suit – $40,
814. Neon "Voltage" High-Visibility Uniform – $40,
815. Cobalt "Blue Flame" Performance Set – $40,
816. Reversible "Dual-Threat" Training Jersey – $40,
817. Stealth "Ghost" Elite Combat Kit – $40,
818. Urban "Concrete" Grey Streetball Suit – $40,
819. Throwback "Retro-Court" 90s Style Edition – $40,
820. Pro-Am "Legacy" Elite Jersey Series – $40,
821. Sialkot "Court-King" High-Durability Kit – $40
`;

export const PRODUCTS: Product[] = [
  {
    id: 902,
    name: "Sialkot Pro-Flex 'Essential' Performance Hoodie",
    category: "Men",
    priceUSD: 30.00,
    image: "https://res.cloudinary.com/dc0ytviey/image/upload/v1769946034/received_844928150918253_juleng.jpg",
    description: "Disrupting the market with uncompromised quality. The Pro-Flex Essential Hoodie features a heavy-weight cotton blend with a tailored athletic fit. Engineered for the USA athlete who demands performance at a fair price. The new campus standard.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 822
  },
  {
    id: 901,
    name: "Sialkot Elite 'Victory' Varsity Performance Jacket",
    category: "Men",
    priceUSD: 60.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769616663/IMG_20260128_204235_xsyqxp.png",
    description: "The ultimate layering piece for the American athlete. Pre-game tunnel walk ready. Engineered with a weather-resistant outer shell and premium insulated interior for championship-level warmth. A USA varsity staple redefined.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 428
  },
  {
    id: 1,
    name: "Urban Force One - Triple White Edition",
    category: "Men",
    priceUSD: 110.00,
    image: "https://images.unsplash.com/photo-15950653106-6c9ebd614d3a?w=800&q=80",
    description: "The top-rated street sneaker in our global catalog. Features genuine leather and advanced cushioning technology. A USA streetball staple.",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    rating: 4.9,
    reviews: 15402
  },
  {
    id: 801,
    name: "Sialkot Pro-Court 'Midnight Elite' Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959108/r2bTqPDVgvog-1_hgbxbr.jpg",
    description: "Dominance starts with the right gear. Engineered for the USA courts with heavy-duty mesh and a compression fit that moves with you. Built for winners.",
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
    description: "Gold-standard aesthetics with varsity-grade durability. Features Sialkot's legendary sweat-wicking fabric for high-stakes games.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 864
  },
  {
    id: 803,
    name: "Brooklyn 'Asphalt' Streetball Jersey",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959108/r2bTqPDVgvog-1_hgbxbr.jpg",
    description: "Tough enough for the concrete courts of NY. Breathable side-panels and extra-deep mesh for maximum ventilation.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 512
  },
  {
    id: 804,
    name: "Golden State 'Bay Area' Swingman",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959106/unisex-nike-stephen-curry-black-golden-state-warriors-swingman-badge-player-jersey-city-edition_pi5202000_ff_5202680-898016d5c53d4c7303a4_full_s1hfmj.jpg",
    description: "Premium swingman edition. Features reinforced lettering and a high-mobility cut, identical to the kits used by legends.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 3201
  },
  {
    id: 805,
    name: "Manhattan 'Precision' Performance Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959077/realistic-basketball-jersey-front-and-back-view-mockup-free-vector_rp66dv.jpg",
    description: "Architectural design for the court. A precise, ergonomic fit that minimizes drag and maximizes vertical jump potential.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 672
  },
  {
    id: 806,
    name: "Youth 'Future Star' All-Star Uniform",
    category: "Kids",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959076/Youth-Basketball-Uniforms-manufacturer-Pakistan_ur1l7x.jpg",
    description: "Designed for the next generation of NBA talent. Lightweight, flexible, and virtually indestructible for all-day practice.",
    sizes: ["S", "M", "L"],
    rating: 5.0,
    reviews: 1560
  },
  {
    id: 807,
    name: "Pro-Level 'ZWBK-700' Performance Suit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959075/ZWBK-700-F_vizasi.jpg",
    description: "Industrial strength court-wear. The ZWBK-700 series is the toughest uniform in Sialkot's arsenal.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 890
  },
  {
    id: 808,
    name: "Chicago 'Windy City' Redline Edition",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959050/188-1_59d0b9a1-c567-4ad9-ad5f-2ba062b470d6_pao8pn.jpg",
    description: "Aggressive styling for the Windy City. Bold red accents on a deep black chassis. Intimidate the competition.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 2105
  },
  {
    id: 809,
    name: "Custom Adult 'Full-Court' Elite Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959049/Custom_Adult_Basketball_Uniforms_664264dfe7ddc_jqmbze.jpg",
    description: "Handcrafted durability. This custom-grade kit offers a tailored feel for adult leagues across the United States.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 1420
  },
  {
    id: 810,
    name: "NCAA 'Heritage' Blue & White Edition",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959047/s-l1200_szuyx4.jpg",
    description: "Classic college ball aesthetic. Features advanced thermal-regulation fabric and national-tier craftsmanship.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 1150
  },
  {
    id: 811,
    name: "USA National 'Olympic Protocol' Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg",
    description: "The gold standard of patriotic performance. Sialkot's flagship USA kit, favored by Pro-Am tournament organizers.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 5802
  },
  {
    id: 812,
    name: "Maroon 'Ivy League' Traditionalist Set",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959010/03-1_rok8gj.jpg",
    description: "Sophistication meets strength. A traditional maroon kit designed for high-end collegiate athletic programs.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 540
  },
  {
    id: 813,
    name: "University Maroon 'Deep Red' Series",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959009/MaroonBasketballUniform_o6zycg.jpg",
    description: "Deep, rich tones for the ultimate court presence. This series uses Sialkot's exclusive color-fast technology.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 980
  },
  {
    id: 814,
    name: "Neon 'Voltage' Performance Set",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959008/1-38_ldi0e1.jpg",
    description: "High-voltage design for high-energy players. Engineered with lightweight ripstop mesh and glow-piping.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 720
  },
  {
    id: 815,
    name: "Cobalt 'Blue Flame' Tournament Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959008/1-42_u5zayn.jpg",
    description: "Cool confidence under pressure. The Cobalt Blue Flame series offers a professional finish for elite teams.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 1045
  },
  {
    id: 816,
    name: "Reversible 'Dual-Threat' Training Jersey",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959007/Wholesale-Blank-Basketball-Uniforms-Youth-Unisex-Reversible-Basketball-Jersey_ljzsb0.webp",
    description: "Versatility for the grind. Sialkot's #1 training jersey for the USA market. Switch colors in seconds.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviews: 3120
  },
  {
    id: 817,
    name: "Stealth 'Ghost' Elite Combat Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/Custom_Adult_Basketball_Uniforms_664264dfe7ddc_zhcmjr.jpg",
    description: "Unseen, unbeatable. Features low-drag fabric and a silent-move silhouette for speed players.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 610
  },
  {
    id: 818,
    name: "Urban 'Concrete' Grey Streetball Suit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/183-1_a1023030-c00d-43ad-8f5c-1541d6348c01_bqxydt.jpg",
    description: "Inspired by Rucker Park legends. Handles the roughest concrete courts with ease. Legendary Sialkot durability.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 1240
  },
  {
    id: 819,
    name: "Throwback 'Retro-Court' 90s Edition",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/71uA4UbhXvL._AC_UY1000__rhhrri.jpg",
    description: "Retro graphics and oversized cuts meet modern fabric technology for the ultimate throwback experience.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 1870
  },
  {
    id: 820,
    name: "Pro-Am 'Legacy' Elite Jersey Series",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958928/BSuit0040_900x_g9jbkf.jpg",
    description: "Build your legacy. The preferred choice for elite independent leagues in the USA. Superior comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 2045
  },
  {
    id: 821,
    name: "Sialkot 'Court-King' Pro-Shield Jersey",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/mens_bball14_vhu6hj.jpg",
    description: "Rule the court. Features Sialkot's Shield-Mesh tech, making it virtually indestructible during high-contact play.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 3120
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Sialkot to USA: Dominating the Pro-Am Circuit",
    summary: "How our latest $40 uniform collection is taking American college and independent leagues by storm.",
    date: "Dec 25, 2024",
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg"
  }
];
