
import { Product, BlogPost, Translations } from './types';

export const EXCHANGE_RATE_PKR = 278.5; 
export const WHATSAPP_NUMBER = "923079490721";

export const TRANSLATIONS: Translations = {
  home: { en: 'Home', ur: 'گھر' },
  shop: { en: 'Shop', ur: 'دکان' },
  blog: { en: 'Blog', ur: 'بلاگ' },
  contact: { en: 'Contact', ur: 'رابطہ کریں' },
  cart: { en: 'Cart', ur: 'ٹوکری' },
  checkout: { en: 'Checkout', ur: 'چیک آؤٹ' },
  search: { en: 'Search sneakers...', ur: 'جوتے تلاش کریں...' },
  men: { en: 'Men', ur: 'مرد' },
  women: { en: 'Women', ur: 'خواتین' },
  kids: { en: 'Kids', ur: 'بچے' },
  autoPricing: { en: 'AI Scanner', ur: 'AI سکینر' },
  sportStore: { en: 'Sport Store', ur: 'سپورٹس اسٹور' },
  buyNow: { en: 'Shop Best Sellers', ur: ' بہترین فروخت کنندگان' },
  heroTitle: { en: 'Sialkot\'s Finest Kicks', ur: 'سیالکوٹ کے بہترین جوتے' },
  heroSubtitle: { en: 'The active system is online. Identify, price, and dominate with Sialkot Shop.', ur: 'ایکٹو سسٹم آن لائن ہے۔ سیالکوٹ شاپ کے ساتھ شناخت، قیمت اور غلبہ حاصل کریں۔' },
  dealOfTheDay: { en: 'Active Drops', ur: 'ایکٹو ڈراپس' },
  addToCart: { en: 'Add to Cart', ur: 'ٹوکری میں شامل کریں' },
  reviews: { en: 'System Reviews', ur: 'نظام کے جائزے' },
  emptyCart: { en: 'Your cart is empty', ur: 'آپ کی ٹوکری خالی خالی ہے' },
  total: { en: 'Total', ur: 'کل' },
  placeOrder: { en: 'Verify on WhatsApp', ur: 'واٹس ایپ پر تصدیق کریں' },
  contactUs: { en: 'Get Active', ur: 'رابطہ کریں' },
  sendMessage: { en: 'Send Message', ur: 'پیغام بھیجیں' },
  aiStylist: { en: 'Active Expert', ur: 'ایکٹو ماہر' },
  stylistIntro: { en: 'Active Intelligence ready. How can I improve your style today?', ur: 'ایکٹو انٹیلی جنس تیار ہے۔ آج میں آپ کے انداز کو کیسے بہتر بنا سکتا ہوں؟' },
  typing: { en: 'Processing Data...', ur: 'ڈیٹا پروسیسنگ...' },
  footerText: { en: '© 2024 Sialkot Shop. System Core: Active.', ur: '© 2024 سیالکوٹ شاپ۔ سسٹم کور: ایکٹو۔' },
  subscribe: { en: 'Join the Core', ur: 'کور میں شامل ہوں' }
};

// Expanded Master Catalog for AI Recognition & Store IDs
export const MASTER_CATALOG_DATA = `
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
    id: 1,
    name: "Urban Force One",
    category: "Men",
    priceUSD: 110.00,
    image: "https://images.unsplash.com/photo-15950653106-6c9ebd614d3a?w=800&q=80",
    description: "The #1 street style staple. Crisp white leather upper with a chunky sole.",
    sizes: ["US 9", "US 10", "US 11", "US 12"],
    rating: 5.0,
    reviews: 12500
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
    reviews: 84
  },
  {
    id: 802,
    name: "Varsity Gold 'State Championship' Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959108/189-1_407fdb46-3f2a-4381-8fdd-26b09f0a65cb_mchjhk.jpg",
    description: "Stand out on the court. This varsity-grade uniform features gold-standard aesthetics and Sialkot's legendary sweat-wicking fabric for the final buzzer.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 112
  },
  {
    id: 804,
    name: "Golden State 'Bay Area' Swingman",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959106/unisex-nike-stephen-curry-black-golden-state-warriors-swingman-badge-player-jersey-city-edition_pi5202000_ff_5202680-898016d5c53d4c7303a4_full_s1hfmj.jpg",
    description: "Premium swingman edition. Features reinforced lettering and a high-mobility cut, identical to the kits used by legends in California and beyond.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 430
  },
  {
    id: 805,
    name: "Manhattan 'Precision' Performance Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959077/realistic-basketball-jersey-front-and-back-view-mockup-free-vector_rp66dv.jpg",
    description: "Architectural design for the court. A precise, ergonomic fit that minimizes drag and maximizes vertical jump potential. Sialkot's tech-series masterpiece.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 67
  },
  {
    id: 806,
    name: "Youth 'Future Star' All-Star Uniform",
    category: "Kids",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959076/Youth-Basketball-Uniforms-manufacturer-Pakistan_ur1l7x.jpg",
    description: "The dream starts here. Designed specifically for the next generation of NBA talent, offering unparalleled comfort and durability for all-day practice.",
    sizes: ["S", "M", "L"],
    rating: 5.0,
    reviews: 156
  },
  {
    id: 807,
    name: "Pro-Level 'ZWBK-700' Performance Suit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959075/ZWBK-700-F_vizasi.jpg",
    description: "Industrial strength court-wear. The ZWBK-700 series is the toughest uniform in Sialkot's arsenal, built to survive the most aggressive streetball sessions.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 89
  },
  {
    id: 808,
    name: "Chicago 'Windy City' Redline Edition",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959050/188-1_59d0b9a1-c567-4ad9-ad5f-2ba062b470d6_pao8pn.jpg",
    description: "Aggressive styling for the Windy City. Bold red accents on a deep black chassis make this the most intimidating kit on the court this season.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 210
  },
  {
    id: 809,
    name: "Custom Adult 'Full-Court' Elite Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959049/Custom_Adult_Basketball_Uniforms_664264dfe7ddc_jqmbze.jpg",
    description: "Professional aesthetics, handcrafted durability. This custom-grade kit offers a tailored feel for adult leagues across the United States.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 142
  },
  {
    id: 810,
    name: "NCAA 'Heritage' Blue & White Edition",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959047/s-l1200_szuyx4.jpg",
    description: "Classic college ball aesthetic. Breathable side-panels and extra-deep mesh for maximum ventilation during those intense overtime games.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 115
  },
  {
    id: 811,
    name: "USA National 'Olympic Protocol' Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg",
    description: "The gold standard of patriotic performance. Sialkot's flagship USA kit, featuring advanced thermal-regulation fabric and national-tier craftsmanship.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 580
  },
  {
    id: 812,
    name: "Maroon 'Ivy League' Traditionalist Set",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959010/03-1_rok8gj.jpg",
    description: "Sophistication meets strength. A traditional maroon kit designed for high-end collegiate athletic programs in the American Northeast.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 54
  },
  {
    id: 813,
    name: "University Maroon 'Deep Red' Series",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959009/MaroonBasketballUniform_o6zycg.jpg",
    description: "Deep, rich tones for the ultimate court presence. This series uses Sialkot's exclusive color-fast technology to stay vibrant wash after wash.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 98
  },
  {
    id: 814,
    name: "Neon 'Voltage' Performance Set",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959008/1-38_ldi0e1.jpg",
    description: "High-voltage design for high-energy players. Engineered with lightweight ripstop mesh and glow-piping for maximum court visibility.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 72
  },
  {
    id: 815,
    name: "Cobalt 'Blue Flame' Tournament Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959008/1-42_u5zayn.jpg",
    description: "Cool confidence under pressure. The Cobalt Blue Flame series is favored by tournament organizers for its durability and professional finish.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 104
  },
  {
    id: 816,
    name: "Reversible 'Dual-Threat' Training Jersey",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959007/Wholesale-Blank-Basketball-Uniforms-Youth-Unisex-Reversible-Basketball-Jersey_ljzsb0.webp",
    description: "Versatility for the grind. Sialkot's #1 training jersey for the USA market. Switch colors in seconds for scrimmage matches and practice drills.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviews: 312
  },
  {
    id: 817,
    name: "Stealth 'Ghost' Elite Combat Kit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/Custom_Adult_Basketball_Uniforms_664264dfe7ddc_zhcmjr.jpg",
    description: "Unseen, unbeatable. The Stealth Ghost uniform features low-drag fabric and a silent-move silhouette for players who rely on speed and agility.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 61
  },
  {
    id: 818,
    name: "Urban 'Concrete' Grey Streetball Suit",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/183-1_a1023030-c00d-43ad-8f5c-1541d6348c01_bqxydt.jpg",
    description: "Inspired by the Rucker Park legends. A heavy-duty streetball suit that handles the roughest concrete courts with ease. Legendary Sialkot durability.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 124
  },
  {
    id: 819,
    name: "Throwback 'Retro-Court' 90s Edition",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/71uA4UbhXvL._AC_UY1000__rhhrri.jpg",
    description: "Bringing back the golden era of basketball. Retro graphics and oversized cuts meet modern fabric technology for the ultimate throwback experience.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 187
  },
  {
    id: 820,
    name: "Pro-Am 'Legacy' Elite Jersey Series",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958928/BSuit0040_900x_g9jbkf.jpg",
    description: "Build your legacy. The Pro-Am series is the preferred choice for elite independent leagues in the USA. Superior comfort, professional look.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 204
  },
  {
    id: 821,
    name: "Sialkot 'Court-King' Pro-Shield",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/mens_bball14_vhu6hj.jpg",
    description: "Rule the court. The Court-King uniform features Sialkot's Shield-Mesh tech, making it virtually indestructible during high-contact play.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 312
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Sialkot to USA: Dominating the Court",
    summary: "How our latest basketball uniform collection is taking American high school and college leagues by storm.",
    date: "Dec 15, 2024",
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg"
  }
];
