
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
  buyNow: { en: 'Shop Best Sellers', ur: ' بہترین فروخت کنندگان' },
  heroTitle: { en: 'Sialkot\'s Finest Kicks', ur: 'سیالکوٹ کے بہترین جوتے' },
  heroSubtitle: { en: 'Universal Product Scanner. Identify, price, and order anything.', ur: 'یونیورسل پروڈکٹ اسکینر۔ کسی بھی چیز کی شناخت، قیمت اور آرڈر کریں۔' },
  dealOfTheDay: { en: 'Top Best Sellers', ur: 'ٹاپ بہترین فروخت کنندگان' },
  addToCart: { en: 'Add to Cart', ur: 'ٹوکری میں شامل کریں' },
  reviews: { en: 'Customer Reviews', ur: 'کسٹمر کے جائزے' },
  emptyCart: { en: 'Your cart is empty', ur: 'آپ کی ٹوکری خالی ہے' },
  total: { en: 'Total', ur: 'کل' },
  placeOrder: { en: 'Place Order on WhatsApp', ur: 'واٹس ایپ پر آرڈر کریں' },
  contactUs: { en: 'Contact Us', ur: 'ہم سے رابطہ کریں' },
  sendMessage: { en: 'Send Message', ur: 'پیغام بھیجیں' },
  aiStylist: { en: 'Shopping Expert', ur: 'شاپنگ ماہر' },
  stylistIntro: { en: 'Hi! I can help you identify any product and place an order.', ur: 'ہائے! میں کسی بھی پروڈکٹ کی شناخت کرنے اور آرڈر دینے میں آپ کی مدد کر سکتا ہوں۔' },
  typing: { en: 'AI is thinking...', ur: 'AI سوچ رہا ہے...' },
  footerText: { en: '© 2024 Sialkot Shop. All rights reserved.', ur: '© 2024 سیالکوٹ شاپ۔ جملہ حقوق محفوظ ہیں۔' },
  subscribe: { en: 'Subscribe', ur: 'سبسکرائب' }
};

// Full 500 Item Master Catalog for AI Recognition
export const MASTER_CATALOG_DATA = `
1. Basic T-Shirt – $20, 2. Premium T-Shirt – $28, 3. Graphic T-Shirt – $30, 4. Polo Shirt – $32, 5. Long Sleeve T-Shirt – $26, 6. Half Sleeve Shirt – $29, 7. Formal Shirt – $40, 8. Office Shirt – $38, 9. Linen Shirt – $42, 10. Denim Shirt – $45, 11. Hoodie – $45, 12. Oversized Hoodie – $52, 13. Zipper Hoodie – $48, 14. Fashion Hoodie – $55, 15. Sweatshirt – $40, 16. Crewneck Sweatshirt – $44, 17. Jacket – $65, 18. Denim Jacket – $85, 19. Leather Jacket – $120, 20. Bomber Jacket – $95, 21. Windbreaker – $70, 22. Rain Jacket – $75, 23. Waterproof Jacket – $88, 24. Puffer Jacket – $105, 25. Down Jacket – $115, 26. Winter Coat – $135, 27. Trench Coat – $120, 28. Blazer – $90, 29. Formal Blazer – $95, 30. Sports Jacket – $80, 31. Tracksuit – $75, 32. Team Tracksuit – $85, 33. Joggers – $40, 34. Sweatpants – $38, 35. Cargo Pants – $55, 36. Khaki Pants – $45, 37. Jeans – $60, 38. Ripped Jeans – $65, 39. Slim Fit Jeans – $58, 40. Straight Jeans – $55, 41. Shorts – $30, 42. Denim Shorts – $35, 43. Sport Shorts – $28, 44. Cycling Shorts – $34, 45. Sleep Shorts – $22, 46. Leggings – $30, 47. Winter Leggings – $42, 48. Yoga Pants – $38, 49. Jeggings – $34, 50. Lounge Wear – $60, 51. Nightwear Set – $45, 52. Pajama Set – $48, 53. Bathrobe – $55, 54. Jumpsuit – $65, 55. Romper – $50, 56. Skirt – $35, 57. Long Skirt – $40, 58. Mini Skirt – $32, 59. Dress – $70, 60. Casual Dress – $60, 61. Party Dress – $85, 62. Evening Gown – $120, 63. Sports Bra – $32, 64. Workout Top – $28, 65. Compression Shirt – $36, 66. Base Layer – $40, 67. Thermal Wear – $45, 68. Vest – $35, 69. Cardigan – $50, 70. Sweater – $48, 71. Kids T-Shirt – $18, 72. Kids Hoodie – $30, 73. Kids Jacket – $55, 74. Baby Romper – $22, 75. Baby Suit – $35, 76. School Uniform – $45, 77. College Hoodie – $50, 78. Lab Coat – $42, 79. Chef Coat – $48, 80. Nurse Scrubs – $55, 81. Scrub Pants – $40, 82. Construction Vest – $30, 83. Safety Jacket – $45, 84. Rain Poncho – $25, 85. Cycling Jersey – $45, 86. Football Jersey – $60, 87. Cricket Jersey – $58, 88. Basketball Jersey – $55, 89. Baseball Jersey – $52, 90. Custom Jersey – $70, 91. Training Vest – $28, 92. Gym Tank Top – $24, 93. Muscle Shirt – $26, 94. Beach Wear Set – $48, 95. Swim Shorts – $35, 96. Swimsuit – $55, 97. Bikini – $60, 98. Rash Guard – $42, 99. Surf Suit – $75, 100. Thermal Socks – $20, 101. Wool Sweater – $55, 102. Cashmere Sweater – $120, 103. Long Coat – $140, 104. Faux Fur Coat – $130, 105. Parka Jacket – $125, 106. Sherpa Jacket – $110, 107. Softshell Jacket – $95, 108. Fleece Jacket – $85, 109. Quilted Jacket – $100, 110. Track Pants – $45, 111. Running Tights – $38, 112. Compression Pants – $42, 113. Dance Wear – $50, 114. Yoga Set – $65, 115. Pilates Outfit – $60, 116. Martial Arts Uniform – $90, 117. Karate Gi – $95, 118. Taekwondo Suit – $92, 119. Judo Uniform – $98, 120. Boxing Shorts – $35, 121. Wrestling Singlet – $55, 122. Cycling Bib Shorts – $75, 123. Ski Pants – $110, 124. Ski Jacket – $150, 125. Snow Suit – $165, 126. Thermal Shirt – $48, 127. Thermal Pants – $50, 128. Hunting Jacket – $120, 129. Tactical Pants – $85, 130. Military Jacket – $140, 131. Safari Shirt – $55, 132. Fishing Vest – $65, 133. Rain Suit – $90, 134. Work Overalls – $75, 135. Mechanic Suit – $80, 136. Coveralls – $78, 137. Apron – $25, 138. Kitchen Apron – $28, 139. Barber Cape – $30, 140. Salon Gown – $35, 141. Spa Robe – $65, 142. Hospital Gown – $40, 143. Patient Wear – $38, 144. Maternity Dress – $60, 145. Nursing Top – $45, 146. Maternity Leggings – $50, 147. Ethnic Kurta – $55, 148. Kurta Pajama – $70, 149. Sherwani – $180, 150. Waistcoat – $65, 151. Nehru Jacket – $85, 152. Abaya – $120, 153. Hijab – $25, 154. Kaftan – $75, 155. Thobe – $90, 156. Ihram – $45, 157. Dance Costume – $95, 158. Stage Costume – $110, 159. Halloween Costume – $80, 160. Santa Suit – $85, 161. Mascot Costume – $250, 162. Animal Costume – $180, 163. Cosplay Outfit – $150, 164. Anime Costume – $140, 165. Superhero Suit – $160, 166. Racing Suit – $220, 167. Firefighter Suit – $260, 168. Pilot Uniform – $180, 169. Airline Crew Uniform – $170, 170. Security Uniform – $120, 171. Police Uniform – $150, 172. Army Combat Suit – $200, 173. Camouflage Pants – $75, 174. Camouflage Shirt – $65, 175. Tactical Vest – $95, 176. Bulletproof Vest – $320, 177. Rainproof Pants – $60, 178. Windproof Jacket – $85, 179. Heat Resistant Suit – $280, 180. Cold Storage Suit – $240, 181. Medical PPE Kit – $75, 182. Disposable Gown – $20, 183. Disposable Coverall – $30, 184. Lab Scrubs Set – $65, 185. X-Ray Lead Apron – $150, 186. Welding Jacket – $110, 187. Flame Resistant Pants – $95, 188. Arc Flash Suit – $350, 189. Chemical Resistant Suit – $300, 190. Hazmat Suit – $420, 191. Diving Suit – $220, 192. Wetsuit – $180, 193. Dry Suit – $350, 194. Surf Shorts – $45, 195. Beach Towel – $30, 196. Bath Towel – $28, 197. Hand Towel – $15, 198. Bath Mat – $22, 199. Robe Towel Set – $65, 200. Premium Lounge Set – $95, 201. Sneakers – $120, 202. Running Shoes – $100, 203. Training Shoes – $95, 204. Trail Shoes – $110, 205. Hiking Boots – $140, 206. Leather Boots – $135, 207. Chelsea Boots – $125, 208. Formal Shoes – $115, 209. Loafers – $90, 210. Sandals – $30, 211. Slippers – $22, 212. Flip Flops – $20, 213. Sports Sandals – $38, 214. Football Cleats – $130, 215. Cricket Shoes – $120, 216. Basketball Shoes – $150, 217. Tennis Shoes – $125, 218. Golf Shoes – $160, 219. Boxing Shoes – $95, 220. Wrestling Shoes – $90, 221. Cycling Shoes – $140, 222. Skate Shoes – $110, 223. Work Boots – $150, 224. Safety Shoes – $130, 225. Steel Toe Boots – $160, 226. Rain Boots – $55, 227. Snow Boots – $145, 228. Ski Boots – $220, 229. Military Boots – $180, 230. Tactical Boots – $165, 231. Kids Sneakers – $60, 232. Kids Sandals – $30, 233. Baby Shoes – $25, 234. School Shoes – $55, 235. Orthopedic Shoes – $140, 236. Diabetic Shoes – $135, 237. Slip Resistant Shoes – $120, 238. Chef Shoes – $110, 239. Nurse Shoes – $105, 240. Hospital Clogs – $90, 241. Backpack – $55, 242. Laptop Bag – $60, 243. Travel Backpack – $75, 244. Hiking Backpack – $120, 245. School Bag – $45, 246. College Bag – $55, 247. Office Bag – $70, 248. Leather Backpack – $130, 249. Crossbody Bag – $45, 250. Sling Bag – $40, 251. Messenger Bag – $65, 252. Tote Bag – $50, 253. Handbag – $75, 254. Clutch Bag – $45, 255. Shoulder Bag – $70, 256. Gym Bag – $55, 257. Duffle Bag – $65, 258. Sports Kit Bag – $70, 259. Travel Duffel – $85, 260. Wheeled Duffel – $120, 261. Suitcase Small – $140, 262. Suitcase Medium – $180, 263. Suitcase Large – $220, 264. Cabin Luggage – $160, 265. Hard Shell Luggage – $240, 266. Garment Bag – $90, 267. Shoe Bag – $25, 268. Laundry Bag – $20, 269. Camera Bag – $85, 270. Drone Bag – $120, 271. Wallet – $25, 272. Leather Wallet – $45, 273. Card Holder – $18, 274. Money Clip – $22, 275. Coin Pouch – $15, 276. Belt – $28, 277. Leather Belt – $40, 278. Tactical Belt – $55, 279. Fashion Belt – $35, 280. Suspenders – $30, 281. Watch – $65, 282. Smart Watch – $180, 283. Sports Watch – $120, 284. Luxury Watch – $350, 285. Fitness Band – $85, 286. Sunglasses – $40, 287. Sports Sunglasses – $55, 288. Polarized Sunglasses – $70, 289. Reading Glasses – $30, 290. Blue Light Glasses – $35, 291. Cap – $25, 292. Snapback Cap – $28, 293. Baseball Cap – $26, 294. Beanie – $20, 295. Bucket Hat – $26, 296. Fedora Hat – $38, 297. Sun Hat – $35, 298. Winter Hat – $30, 299. Helmet – $95, 300. Motorcycle Helmet – $180, 301. Cycling Helmet – $120, 302. Ski Helmet – $160, 303. Safety Helmet – $45, 304. Face Mask – $10, 305. Sports Mask – $18, 306. Balaclava – $25, 307. Neck Gaiter – $20, 308. Scarf – $22, 309. Wool Scarf – $35, 310. Shawl – $30, 311. Gloves – $20, 312. Winter Gloves – $26, 313. Touchscreen Gloves – $30, 314. Boxing Gloves – $85, 315. Gym Gloves – $25, 316. Cycling Gloves – $35, 317. Ski Gloves – $65, 318. Safety Gloves – $30, 319. Socks Pack – $18, 320. Ankle Socks – $12, 321. Crew Socks – $15, 322. Compression Socks – $22, 323. Thermal Socks – $20, 324. Arm Sleeves – $18, 325. Knee Support – $30, 326. Elbow Support – $28, 327. Wrist Support – $22, 328. Ankle Support – $25, 329. Back Support Belt – $45, 330. Posture Corrector – $35, 331. Sports Towel – $20, 332. Gym Towel – $18, 333. Cooling Towel – $22, 334. Headband – $15, 335. Sweatband – $12, 336. Bandana – $10, 337. Hair Cap – $8, 338. Jewelry Set – $75, 339. Necklace – $45, 340. Bracelet – $35, 341. Ring – $40, 342. Earrings – $30, 343. Cufflinks – $35, 344. Tie – $20, 345. Bow Tie – $22, 346. Pocket Square – $15, 347. Handkerchief – $10, 348. Keychain – $12, 349. Phone Pouch – $20, 350. Waist Bag – $35, 351. Running Belt – $30, 352. Travel Organizer – $40, 353. Passport Holder – $25, 354. ID Card Holder – $15, 355. Luggage Tag – $10, 356. Shoe Cleaner Kit – $20, 357. Shoe Polish Kit – $25, 358. Sneaker Cleaner – $22, 359. Shoe Deodorizer – $15, 360. Clothing Steamer – $85, 361. Iron Press – $75, 362. Fabric Shaver – $35, 363. Lint Roller – $10, 364. Wardrobe Organizer – $45, 365. Hanger Set – $25, 366. Storage Box – $40, 367. Vacuum Storage Bag – $30, 368. Shoe Rack – $85, 369. Coat Rack – $90, 370. Laundry Basket – $35, 371. Drying Rack – $75, 372. Travel Pillow – $30, 373. Eye Mask – $15, 374. Ear Plugs – $10, 375. Travel Blanket – $45, 376. Picnic Blanket – $55, 377. Sleeping Bag – $120, 378. Camping Mat – $65, 379. Tent – $220, 380. Camping Chair – $75, 381. Camping Table – $95, 382. Thermal Flask – $35, 383. Water Bottle – $25, 384. Sports Bottle – $30, 385. Hydration Pack – $85, 386. Lunch Box – $20, 387. Food Container Set – $35, 388. Cooler Bag – $55, 389. Ice Pack – $10, 390. First Aid Kit – $45, 391. Emergency Kit – $75, 392. Survival Kit – $120, 393. Torch Light – $25, 394. Head Lamp – $35, 395. Power Bank – $45, 396. Travel Adapter – $30, 397. Luggage Scale – $20, 398. GPS Tracker – $85, 399. Smart Tag – $35, 400. Anti Theft Lock – $25, 401. Cable Lock – $20, 402. RFID Wallet – $55, 403. Money Belt – $30, 404. Travel Safe – $120, 405. Fireproof Bag – $75, 406. Waterproof Pouch – $25, 407. Dry Bag – $45, 408. Rain Cover – $20, 409. Umbrella – $30, 410. Windproof Umbrella – $45, 411. Compact Umbrella – $25, 412. Golf Umbrella – $55, 413. Travel Kit – $40, 414. Grooming Kit – $35, 415. Shaving Kit – $30, 416. Toiletry Bag – $25, 417. Makeup Bag – $35, 418. Cosmetic Organizer – $45, 419. Jewelry Organizer – $40, 420. Shoe Organizer – $50, 421. Closet Organizer – $85, 422. Drawer Organizer – $30, 423. Storage Basket – $35, 424. Foldable Box – $25, 425. Laundry Organizer – $40, 426. Travel Cube Set – $45, 427. Packing Cubes – $40, 428. Compression Bags – $35, 429. Suit Cover – $30, 430. Garment Steamer – $95, 431. Mini Iron – $55, 432. Sewing Kit – $15, 433. Repair Kit – $25, 434. Shoe Repair Kit – $30, 435. Button Set – $10, 436. Fabric Tape – $8, 437. Tailor Measuring Tape – $5, 438. Clothes Brush – $12, 439. Fabric Spray – $15, 440. Odor Remover – $18, 441. Anti Wrinkle Spray – $20, 442. Shoe Tree – $25, 443. Boot Shaper – $30, 444. Hat Box – $45, 445. Watch Box – $65, 446. Sunglasses Case – $15, 447. Phone Case – $20, 448. Tablet Sleeve – $35, 449. Laptop Sleeve – $45, 450. Camera Strap – $30, 451. Camera Cleaning Kit – $25, 452. Lens Pouch – $20, 453. Tripod Bag – $40, 454. Drone Case – $95, 455. Action Cam Mount – $30, 456. Sports Armband – $18, 457. Running Light – $25, 458. Reflective Vest – $30, 459. Safety Whistle – $5, 460. Emergency Blanket – $15, 461. Rain Poncho – $20, 462. Travel Raincoat – $35, 463. Folding Cap – $22, 464. UV Protection Sleeves – $18, 465. Cooling Cap – $28, 466. Thermal Cap – $25, 467. Sweat Proof Headband – $15, 468. Gym Sack – $20, 469. Drawstring Bag – $18, 470. Reusable Tote – $15, 471. Eco Shopping Bag – $12, 472. Beach Bag – $45, 473. Straw Hat – $30, 474. Beach Slippers – $25, 475. Pool Slides – $28, 476. Water Shoes – $40, 477. Snorkeling Fins – $85, 478. Snorkel Mask – $75, 479. Diving Goggles – $55, 480. Swim Cap – $15, 481. Ear Plugs Swim – $10, 482. Towel Poncho – $45, 483. Beach Chair – $95, 484. Sun Shade Tent – $140, 485. Picnic Basket – $85, 486. Hammock – $65, 487. Outdoor Mat – $45, 488. Folding Stool – $35, 489. Camping Stove – $120, 490. Gas Canister – $25, 491. Cookware Set – $95, 492. Camping Kettle – $40, 493. Portable Grill – $150, 494. BBQ Tools Set – $75, 495. Fire Starter – $20, 496. Survival Knife – $85, 497. Multi Tool – $65, 498. Compass – $25, 499. Emergency Radio – $95, 500. Solar Charger – $110
`;

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Urban Force One",
    category: "Men",
    priceUSD: 145.00,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    description: "The #1 street style staple. Crisp white leather upper with a chunky sole.",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    rating: 5.0,
    reviews: 1250
  },
  {
    id: 36,
    name: "Mr. Beast Blue Signature",
    category: "Men",
    priceUSD: 150.00,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80",
    description: "The ultimate collector's item. Radiant electric blue colorway inspired by the Mr. Beast logo.",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    rating: 5.0,
    reviews: 10000
  },
  {
    id: 101,
    name: "Sialkot Speed Runner",
    category: "Men",
    priceUSD: 120.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    description: "Lightweight, breathable, and designed for explosive speed on the track.",
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    rating: 4.8,
    reviews: 850
  },
  {
    id: 102,
    name: "Heritage Leather Classic",
    category: "Men",
    priceUSD: 110.00,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    description: "Timeless design meeting modern comfort in premium full-grain leather.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.9,
    reviews: 420
  },
  {
    id: 103,
    name: "Pro Court Low",
    category: "Men",
    priceUSD: 95.00,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    description: "The essential court sneaker with enhanced cushioning for all-day wear.",
    sizes: ["US 9", "US 10", "US 11", "US 12"],
    rating: 4.7,
    reviews: 310
  },
  {
    id: 104,
    name: "Arctic Trail Boots",
    category: "Men",
    priceUSD: 145.00,
    image: "https://images.unsplash.com/photo-1520639889313-7272170b1c39?w=800&q=80",
    description: "Waterproof and insulated, built to conquer the most challenging winter terrains.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 5.0,
    reviews: 120
  },
  {
    id: 105,
    name: "Neon Glow High-Tops",
    category: "Men",
    priceUSD: 130.00,
    image: "https://images.unsplash.com/photo-1514989940723-78e071f5b771?w=800&q=80",
    description: "Make a statement with these vibrant high-tops featuring reflective accents.",
    sizes: ["US 8", "US 9", "US 10"],
    rating: 4.6,
    reviews: 540
  },
  {
    id: 106,
    name: "Minimalist Knit Trainer",
    category: "Men",
    priceUSD: 85.00,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    description: "A seamless knit upper that provides a sock-like fit for ultimate mobility.",
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    rating: 4.5,
    reviews: 720
  },
  {
    id: 107,
    name: "Carbon Fiber Sprint",
    category: "Men",
    priceUSD: 160.00,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
    description: "Advanced carbon fiber plating for maximum energy return in every stride.",
    sizes: ["US 9", "US 10", "US 11"],
    rating: 4.9,
    reviews: 150
  },
  {
    id: 108,
    name: "Vintage Suede Loafer",
    category: "Men",
    priceUSD: 90.00,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80",
    description: "Classic sophisticated suede loafers that pair perfectly with any formal attire.",
    sizes: ["US 8", "US 9", "US 10"],
    rating: 4.4,
    reviews: 290
  },
  {
    id: 109,
    name: "Street Glide Skateshoes",
    category: "Men",
    priceUSD: 105.00,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    description: "Reinforced vulcanized soles for extreme durability and superior board feel.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.8,
    reviews: 610
  },
  {
    id: 110,
    name: "Desert Sand Hiking",
    category: "Men",
    priceUSD: 115.00,
    image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    description: "Tough nubuck leather construction with multi-directional traction for trails.",
    sizes: ["US 9", "US 10", "US 11"],
    rating: 4.7,
    reviews: 380
  },
  {
    id: 111,
    name: "Midnight Stealth Sneaker",
    category: "Men",
    priceUSD: 140.00,
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&q=80",
    description: "Triple black aesthetic with a futuristic silhouette and hidden lacing system.",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    rating: 4.9,
    reviews: 940
  },
  {
    id: 112,
    name: "Retro Wave Runner",
    category: "Men",
    priceUSD: 125.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    description: "90s inspired bulky sneaker with modern comfort foam technology.",
    sizes: ["US 8", "US 9", "US 10"],
    rating: 4.6,
    reviews: 530
  },
  {
    id: 113,
    name: "Gold Leaf Executive",
    category: "Men",
    priceUSD: 180.00,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80",
    description: "Luxury dress shoes featuring hand-stitched details and gold metallic accents.",
    sizes: ["US 9", "US 10", "US 11"],
    rating: 5.0,
    reviews: 85
  },
  {
    id: 114,
    name: "Breathable Mesh Runner",
    category: "Men",
    priceUSD: 75.00,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&q=80",
    description: "The perfect everyday gym shoe with superior airflow and stability.",
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    rating: 4.3,
    reviews: 640
  },
  {
    id: 115,
    name: "Rugged Terrain Pro",
    category: "Men",
    priceUSD: 135.00,
    image: "https://images.unsplash.com/photo-1534653299134-96a171b61581?w=800&q=80",
    description: "Hardcore outdoor shoes for rock climbing and steep mountain hiking.",
    sizes: ["US 8", "US 9", "US 10"],
    rating: 4.8,
    reviews: 210
  },
  {
    id: 116,
    name: "Classic Canvas Slip-on",
    category: "Men",
    priceUSD: 60.00,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    description: "Comfortable, easy-to-wear canvas shoes for casual weekends.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    rating: 4.2,
    reviews: 890
  },
  {
    id: 117,
    name: "Elite Performance Cleats",
    category: "Men",
    priceUSD: 155.00,
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800&q=80",
    description: "Professional grade soccer cleats for maximum traction on natural grass.",
    sizes: ["US 8", "US 9", "US 10"],
    rating: 4.9,
    reviews: 175
  },
  {
    id: 118,
    name: "Urban Rhythm Mid-Top",
    category: "Men",
    priceUSD: 120.00,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    description: "Sleek mid-top design that bridges the gap between athletic and casual.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.7,
    reviews: 460
  },
  {
    id: 119,
    name: "Velocity Ultra Lite",
    category: "Men",
    priceUSD: 98.00,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80",
    description: "Our lightest running shoe yet, featuring advanced ultra-lite foam.",
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    rating: 4.5,
    reviews: 580
  },
  {
    id: 120,
    name: "Heritage Sialkot Pride",
    category: "Men",
    priceUSD: 130.00,
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&q=80",
    description: "A special edition celebrating our Sialkot roots with local artisan details.",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    rating: 5.0,
    reviews: 320
  },
  {
    id: 121,
    name: "Hyper-Speed Elite - Electric Crimson",
    category: "Men",
    priceUSD: 135.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    description: "High-performance training shoe in vibrant crimson, featuring split-sole technology.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.9,
    reviews: 154
  },
  {
    id: 122,
    name: "Hyper-Speed Elite - Cobalt Surge",
    category: "Men",
    priceUSD: 135.00,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    description: "Unmatched stability and response in a deep cobalt blue colorway.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.8,
    reviews: 210
  },
  {
    id: 123,
    name: "Hyper-Speed Elite - Solar Orange",
    category: "Men",
    priceUSD: 135.00,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    description: "Radiant solar orange finish with reinforced mesh for extreme workouts.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.7,
    reviews: 98
  },
  {
    id: 124,
    name: "Hyper-Speed Elite - Royal Purple",
    category: "Men",
    priceUSD: 135.00,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80",
    description: "Premium athletic performance meets a majestic purple aesthetic.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.9,
    reviews: 312
  },
  {
    id: 125,
    name: "Hyper-Speed Elite - Cyber Pink",
    category: "Men",
    priceUSD: 135.00,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    description: "Bold cyber pink silhouette designed for those who demand attention and speed.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 5.0,
    reviews: 440
  },
  {
    id: 126,
    name: "Hyper-Speed Elite - Tropical Teal",
    category: "Men",
    priceUSD: 135.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    description: "Refreshing tropical teal tones with our signature breathable foam sole.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.6,
    reviews: 187
  },
  {
    id: 127,
    name: "Hyper-Speed Elite - Stealth Onyx",
    category: "Men",
    priceUSD: 140.00,
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&q=80",
    description: "Matte onyx black finish for a stealthy look in any training environment.",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    rating: 4.9,
    reviews: 560
  },
  {
    id: 128,
    name: "Hyper-Speed Elite - Pure Platinum",
    category: "Men",
    priceUSD: 140.00,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    description: "Crisp platinum white with silver accents for a clean, professional look.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.8,
    reviews: 225
  },
  {
    id: 129,
    name: "Hyper-Speed Elite - Volt Lime",
    category: "Men",
    priceUSD: 135.00,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&q=80",
    description: "Classic volt lime colorway as seen in elite international competitions.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.7,
    reviews: 130
  },
  {
    id: 130,
    name: "Hyper-Speed Elite - Midnight Navy",
    category: "Men",
    priceUSD: 135.00,
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800&q=80",
    description: "Deep midnight navy for a sophisticated and versatile athletic performance shoe.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    rating: 4.8,
    reviews: 195
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "AI Recognition: The Future of Shopping",
    summary: "How our new AI Scanner identifies 500+ items instantly for our customers.",
    date: "Dec 01, 2024",
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&q=80"
  }
];
