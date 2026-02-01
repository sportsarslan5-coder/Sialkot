
import React, { useMemo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, Trophy, Sparkles, TrendingUp, Zap, ChevronRight } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const { Link } = ReactRouterDOM as any;

const Home: React.FC = () => {
  const { t } = useAppContext();
  
  // Categorize for Amazon Rows
  const bestSellers = useMemo(() => PRODUCTS.filter(p => p.reviews > 500).slice(0, 6), []);
  const uniforms = useMemo(() => PRODUCTS.filter(p => p.id >= 801 && p.id <= 821).slice(0, 6), []);
  const topRated = useMemo(() => PRODUCTS.filter(p => p.rating >= 4.9).slice(0, 6), []);

  return (
    <div className="bg-[#EAEDED] pb-20">
      {/* Amazon Hero Carousel (Simulated) */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#EAEDED] z-10"></div>
        <img 
          src="https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg" 
          alt="Featured Global Deal" 
          className="w-full h-full object-cover animate-scale-slow"
        />
        <div className="absolute inset-x-0 bottom-40 z-20 max-w-7xl mx-auto px-4">
           <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded shadow-2xl max-w-xl border-l-8 border-[#FF9900]">
              <h1 className="text-4xl md:text-5xl font-black text-[#131921] uppercase tracking-tighter italic leading-none mb-4">
                 Global <br /> <span className="text-[#FF9900]">Uniform</span> Hub
              </h1>
              <p className="text-gray-600 font-bold mb-8 italic">Direct from Sialkot Factory to USA Courts. Fast Sync active.</p>
              <Link to="/sport-store" className="bg-[#FF9900] text-[#131921] px-10 py-4 rounded font-black text-sm uppercase tracking-widest hover:bg-[#F08804] transition-colors shadow-lg">
                 Explore Varsity Deals
              </Link>
           </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 -mt-32 relative z-30">
        {/* Amazon-Style Row 1: Top Row Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
           {/* Card 1 */}
           <div className="bg-white p-6 shadow-sm flex flex-col h-full">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter italic">Varsity Uniforms</h3>
              <div className="grid grid-cols-2 gap-2 flex-grow mb-4">
                 {uniforms.slice(0, 4).map(p => (
                   <Link key={p.id} to={`/product/${p.id}`} className="group relative aspect-square overflow-hidden bg-gray-50">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                   </Link>
                 ))}
              </div>
              <Link to="/sport-store" className="text-xs font-bold text-blue-600 hover:text-[#C7511F] hover:underline">See more basketball gear</Link>
           </div>
           
           {/* Card 2 */}
           <div className="bg-white p-6 shadow-sm flex flex-col h-full">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter italic">USA Best Sellers</h3>
              <Link to={`/product/${PRODUCTS[0].id}`} className="block relative aspect-video overflow-hidden mb-4 bg-gray-50">
                 <img src={PRODUCTS[0].image} alt="Best Seller" className="w-full h-full object-cover" />
                 <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">20% OFF</div>
              </Link>
              <p className="text-xs text-gray-500 mb-4 line-clamp-2">The most recognized street silhouette in our global marketplace.</p>
              <Link to="/shop" className="text-xs font-bold text-blue-600 hover:text-[#C7511F] hover:underline mt-auto">Shop now</Link>
           </div>

           {/* Card 3 - Neural Core Promo */}
           <div className="bg-white p-6 shadow-sm flex flex-col h-full border-t-4 border-[#FF9900]">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter italic">AI Neural Price</h3>
              <div className="flex-grow flex flex-col items-center justify-center text-center p-4 bg-gray-50 rounded-lg mb-4">
                 <Sparkles size={48} className="text-[#FF9900] mb-4 animate-pulse" />
                 <p className="text-sm font-bold text-primary italic leading-relaxed">Scan any product photo to find the best Sialkot factory price instantly.</p>
              </div>
              <Link to="/auto-pricing" className="text-xs font-bold text-blue-600 hover:text-[#C7511F] hover:underline mt-auto">Open Scanner Core</Link>
           </div>

           {/* Card 4 - Shop by Category */}
           <div className="bg-white p-6 shadow-sm flex flex-col h-full">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter italic">Global Categories</h3>
              <div className="grid grid-cols-2 gap-4 flex-grow mb-4">
                 {['Men', 'Women', 'Kids', 'Sport'].map(cat => (
                   <Link key={cat} to="/shop" className="flex flex-col items-center gap-2 group">
                      <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                         <Zap size={24} className="text-gray-400 group-hover:text-[#FF9900]" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{cat}</span>
                   </Link>
                 ))}
              </div>
              <Link to="/shop" className="text-xs font-bold text-blue-600 hover:text-[#C7511F] hover:underline">View all collections</Link>
           </div>
        </div>

        {/* Amazon-Style Horizontal Scroll Row 1 */}
        <div className="bg-white p-6 shadow-sm mb-10">
           <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-black tracking-tighter uppercase italic">Best Sellers <span className="text-[#FF9900]">in Sportswear</span></h2>
              <div className="h-0.5 flex-grow bg-gray-100"></div>
           </div>
           <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
              {bestSellers.map(product => (
                <div key={product.id} className="min-w-[240px] max-w-[240px]">
                   <ProductCard product={product} />
                </div>
              ))}
              <div className="min-w-[200px] flex items-center justify-center group cursor-pointer border-2 border-dashed border-gray-100 rounded-sm hover:border-[#FF9900] transition-colors">
                 <Link to="/shop" className="flex flex-col items-center text-gray-400 group-hover:text-[#FF9900]">
                    <ChevronRight size={48} />
                    <span className="text-xs font-black uppercase tracking-widest">See All</span>
                 </Link>
              </div>
           </div>
        </div>

        {/* Amazon-Style Horizontal Scroll Row 2 */}
        <div className="bg-white p-6 shadow-sm mb-10">
           <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-black tracking-tighter uppercase italic text-blue-600">Top Rated <span className="text-gray-300">Inspired by Trends</span></h2>
              <div className="h-0.5 flex-grow bg-gray-100"></div>
           </div>
           <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
              {topRated.map(product => (
                <div key={product.id} className="min-w-[240px] max-w-[240px]">
                   <ProductCard product={product} />
                </div>
              ))}
           </div>
        </div>

        {/* Sign In Banner (Amazon Style) */}
        <div className="bg-white py-10 border-y border-gray-200 shadow-inner flex flex-col items-center justify-center text-center">
           <div className="h-1 w-20 bg-gray-100 rounded-full mb-8"></div>
           <p className="text-xs font-bold text-primary mb-3">See personalized recommendations</p>
           <button className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#131921] px-20 py-2 rounded-md font-black text-sm border border-[#FCD200] shadow-sm active:scale-95 mb-3">
              Sign in
           </button>
           <p className="text-[10px] text-gray-500 font-bold">New customer? <span className="text-blue-600 hover:text-[#C7511F] cursor-pointer">Start here.</span></p>
           <div className="h-1 w-20 bg-gray-100 rounded-full mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
