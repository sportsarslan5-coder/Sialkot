
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
801. Sialkot Pro-Court "Midnight Elite" Uniform – $40,
802. Varsity Gold "State Championship" Kit – $40,
804. Golden State "Bay Area" Swingman – $40,
811. USA National "Olympic Protocol" Kit – $40,
818. Urban "Concrete" Grey Streetball Suit – $40,
821. Sialkot "Court-King" High-Durability Kit – $40,
1. Urban Force One Sneakers – $110,
2. Pro-Training Compression Tee – $25,
3. Elite Performance Shorts – $30,
4. Sialkot Signature Basketball – $35
`;

export const PRODUCTS: Product[] = [
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
    id: 811,
    name: "USA National 'Olympic Protocol' Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg",
    description: "Sialkot's flagship USA kit. Thermal-regulation fabric used by elite collegiate and pro-am players across the states.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 842
  },
  {
    id: 801,
    name: "Sialkot Pro-Court 'Midnight Elite' Uniform",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959108/r2bTqPDVgvog-1_hgbxbr.jpg",
    description: "Professional grade basketball uniform with Sialkot's exclusive sweat-wicking tech. #1 Best Seller in Men's Sportswear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 312
  },
  {
    id: 808,
    name: "Chicago 'Windy City' Redline Edition",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959050/188-1_59d0b9a1-c567-4ad9-ad5f-2ba062b470d6_pao8pn.jpg",
    description: "Aggressive styling for high-intensity play. A favorite for Chicago-based independent leagues.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 156
  },
  {
    id: 804,
    name: "Golden State 'Bay Area' Swingman",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959106/unisex-nike-stephen-curry-black-golden-state-warriors-swingman-badge-player-jersey-city-edition_pi5202000_ff_5202680-898016d5c53d4c7303a4_full_s1hfmj.jpg",
    description: "Premium swingman jersey with detailed stitching and durable fabric. Engineered for the Bay Area streetball legend.",
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviews: 924
  },
  {
    id: 301,
    name: "Pro-Training Compression Tee",
    category: "Men",
    priceUSD: 25.00,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    description: "Multi-purpose compression gear for football, basketball, and training. Breathable and resilient.",
    sizes: ["M", "L", "XL"],
    rating: 4.7,
    reviews: 2105
  },
  {
    id: 806,
    name: "Youth 'Future Star' All-Star Uniform",
    category: "Kids",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959076/Youth-Basketball-Uniforms-manufacturer-Pakistan_ur1l7x.jpg",
    description: "Empowering young athletes with pro-level gear. Lightweight and flexible.",
    sizes: ["S", "M", "L"],
    rating: 5.0,
    reviews: 45
  },
  {
    id: 821,
    name: "Sialkot 'Court-King' Pro-Shield Jersey",
    category: "Men",
    priceUSD: 40.00,
    image: "https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769958927/mens_bball14_vhu6hj.jpg",
    description: "Our most durable basketball jersey. Guaranteed to last multiple seasons of high-contact play.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 128
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Sialkot Global Marketplace: Why We Compare Prices",
    summary: "How transparency and global price-syncing are changing the way American athletes buy gear.",
    date: "Dec 20, 2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  }
];
