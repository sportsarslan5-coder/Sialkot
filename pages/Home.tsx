
import React, { useMemo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, Trophy, Sparkles, TrendingUp, Zap, ChevronRight, Clock, Star, ShieldCheck, Flame } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const { Link } = ReactRouterDOM as any;

const Home: React.FC = () => {
  const { t } = useAppContext();
  
  // Categorize for Amazon Rows
  const bestSellers = useMemo(() => PRODUCTS.filter(p => p.reviews > 1000).slice(0, 8), []);
  const uniforms = useMemo(() => PRODUCTS.filter(p => p.id >= 801 && p.id <= 821).slice(0, 8), []);
  const victoryJacket = useMemo(() => PRODUCTS.find(p => p.id === 901), []);
  const lightningDeal = PRODUCTS.find(p => p.id === 811) || PRODUCTS[0];

  return (
    <div className="bg-[#EAEDED] pb-20">
      {/* Amazon Hero Carousel - Optimized for USA Performance */}
      <div className="relative h-[450px] md:h-[650px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#EAEDED] z-10"></div>
        <img 
          src="https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg" 
          alt="Featured Global Deal" 
          className="w-full h-full object-cover animate-scale-slow opacity-90"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-[1600px] mx-auto px-6">
           <div className="max-w-xl animate-fade-in-up">
              <div className="bg-white/95 backdrop-blur-md p-10 rounded shadow-2xl border-l-8 border-[#FF9900] holographic-glow">
                <div className="flex items-center gap-2 mb-4">
                   <ShieldCheck className="text-[#FF9900]" size={20} />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">USA Varsity Standard</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-[#131921] uppercase tracking-tighter italic leading-[0.85] mb-6">
                   Elite <br /> <span className="text-[#FF9900]">Court</span> Heritage
                </h1>
                <p className="text-gray-600 font-bold mb-8 italic text-sm leading-relaxed">Direct Sialkot Pricing ($40) verified for NCAA and Pro-Am leagues. Join the elite elite circle.</p>
                <div className="flex gap-4">
                  <Link to="/sport-store" className="inline-block bg-[#FF9900] text-[#131921] px-10 py-4 rounded font-black text-xs uppercase tracking-widest hover:bg-[#F08804] transition-all shadow-lg hover:shadow-[#FF9900]/20 transform hover:-translate-y-1">
                     Shop Uniforms
                  </Link>
                  <Link to="/auto-pricing" className="hidden sm:inline-block bg-[#131921] text-white px-10 py-4 rounded font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg transform hover:-translate-y-1">
                     Neural Scan
                  </Link>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 -mt-40 relative z-30 space-y-8">
        {/* Amazon-Style Row 1: The "Quad Card" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
           {/* Card 1: NEW JACKET SPOTLIGHT - Tunnel Walk Protocol */}
           <div className="bg-white p-6 shadow-sm flex flex-col h-full hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-xl font-bold uppercase italic tracking-tighter">Tunnel Walk Essentials</h3>
                 <Flame size={20} className="text-red-600 animate-pulse" />
              </div>
              <div className="flex-grow flex flex-col items-center">
                 <Link to="/product/901" className="block relative aspect-square bg-gray-50 mb-4 overflow-hidden rounded group border border-gray-100">
                    <img src={victoryJacket?.image} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-[10px] font-black text-center py-1 uppercase tracking-widest">Limited Drop</div>
                 </Link>
                 <div className="text-center">
                    <p className="text-sm font-black text-[#131921] mb-1">Victory Performance Jacket</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-3">Sync Protocol $60.00</p>
                 </div>
              </div>
              <Link to="/product/901" className="text-xs font-bold text-blue-600 hover:text-[#C7511F] hover:underline mt-auto">Secure the Piece</Link>
           </div>
           
           {/* Card 2: Lightning Deal Mockup */}
           <div className="bg-white p-6 shadow-sm flex flex-col relative overflow-hidden h-full hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 bg-[#CC0C39] text-white px-3 py-1 text-[10px] font-bold uppercase italic">
                 Lightning Deal
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase italic tracking-tighter">Today's Deals</h3>
              <div className="flex-grow flex flex-col justify-center">
                 <Link to={`/product/${lightningDeal.id}`} className="block relative aspect-square bg-gray-50 mb-4 overflow-hidden rounded group">
                    <img src={lightningDeal.image} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                 </Link>
                 <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#CC0C39] text-white px-2 py-0.5 rounded text-[11px] font-bold">Factory Price</span>
                    <span className="text-[#CC0C39] text-xs font-bold uppercase tracking-widest">Sialkot Direct</span>
                 </div>
                 <p className="text-sm font-bold text-[#131921] line-clamp-1">{lightningDeal.name}</p>
              </div>
              <Link to="/shop" className="text-xs font-bold text-blue-600 hover:text-[#C7511F] hover:underline mt-6">See all deals</Link>
           </div>

           {/* Card 3: Neural Core Promotion */}
           <div className="bg-[#131921] text-white p-6 shadow-sm flex flex-col border-t-4 border-[#FF9900] h-full hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                 <Sparkles className="text-[#FF9900]" size={16} />
                 <h3 className="text-xl font-bold uppercase italic tracking-tighter">Neural Sync</h3>
              </div>
              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 py-4">
                 <div className="w-28 h-28 bg-white/5 rounded-full flex items-center justify-center relative">
                    <Zap size={44} className="text-[#FF9900] animate-pulse" />
                    <div className="absolute inset-0 border-2 border-[#FF9900] rounded-full border-dashed animate-spin-slow"></div>
                 </div>
                 <p className="text-[11px] font-medium text-gray-400 px-4 leading-relaxed uppercase tracking-widest">
                    Identify any pro uniform and unlock factory pricing protocol instantly.
                 </p>
              </div>
              <Link to="/auto-pricing" className="text-xs font-bold text-[#FF9900] hover:text-white hover:underline mt-6">Open Scanner Protocol</Link>
           </div>

           {/* Card 4: Varsity Spotlight Grid */}
           <div className="bg-white p-6 shadow-sm flex flex-col h-full hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 uppercase italic tracking-tighter">Elite Varsity Series</h3>
              <div className="grid grid-cols-2 gap-2 flex-grow mb-6">
                 {uniforms.slice(0, 4).map(p => (
                   <Link key={p.id} to={`/product/${p.id}`} className="aspect-square bg-gray-50 overflow-hidden group rounded-sm border border-gray-100">
                      <img src={p.image} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                   </Link>
                 ))}
              </div>
              <Link to="/sport-store" className="text-xs font-bold text-blue-600 hover:text-[#C7511F] hover:underline mt-auto">View all collections</Link>
           </div>
        </div>

        {/* Amazon-Style Row: The Scrolling $40 Hub */}
        <div className="bg-white p-8 shadow-sm rounded-sm">
           <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-black italic tracking-tighter uppercase">USA <span className="text-[#FF9900]">Pro-Am</span> Master Collection</h2>
                <span className="hidden sm:inline bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Global Sync: Active</span>
              </div>
              <Link to="/sport-store" className="text-xs font-bold text-blue-600 hover:text-[#C7511F] flex items-center gap-1 group">
                 Shop the hub <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
           <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
              {uniforms.map(product => (
                <div key={product.id} className="min-w-[220px] max-w-[220px] flex-shrink-0">
                   <ProductCard product={product} />
                </div>
              ))}
              <div className="min-w-[220px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded group hover:border-[#FF9900] transition-colors cursor-pointer bg-gray-50/50">
                  <Link to="/sport-store" className="flex flex-col items-center gap-3 text-gray-300 group-hover:text-[#FF9900]">
                    <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center">
                       <ChevronRight size={32} />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.3em]">View 21 Items</span>
                  </Link>
              </div>
           </div>
        </div>

        {/* Secondary Scroller: Inspired by your browsing */}
        <div className="bg-white p-8 shadow-sm rounded-sm">
           <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl font-bold uppercase italic tracking-tighter">Inspired by <span className="text-blue-600">Global Trends</span></h2>
              <div className="h-0.5 flex-grow bg-gray-100"></div>
           </div>
           <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
              {bestSellers.map(product => (
                <div key={product.id} className="min-w-[200px] max-w-[200px] flex-shrink-0">
                   <div className="group cursor-pointer">
                      <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden mb-3 rounded bg-white border border-gray-100 p-3 group-hover:shadow-md transition-shadow">
                         <img src={product.image} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" />
                      </Link>
                      <div className="flex items-center gap-1 mb-1.5">
                         <div className="flex text-[#FFA41C]">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < 4 ? "currentColor" : "none"} strokeWidth={2} />)}
                         </div>
                         <span className="text-[10px] text-blue-600 font-bold hover:underline">({product.reviews})</span>
                      </div>
                      <div className="flex items-baseline gap-1 text-[#131921] font-black">
                         <span className="text-[10px]">$</span>
                         <span className="text-xl leading-none">{product.priceUSD.toFixed(0)}</span>
                         <span className="text-[10px]">00</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* High-Impact Brand Banner Strip */}
        <div className="bg-black text-white p-16 rounded shadow-2xl relative overflow-hidden group border-2 border-[#FF9900]/20">
           <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900]/20 to-transparent"></div>
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF9900]/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left max-w-2xl">
                 <div className="inline-block bg-[#FF9900] text-black px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] mb-4">Marketplace Exclusive</div>
                 <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-4 leading-[0.85]">The <span className="text-[#FF9900]">Buzzer Beater</span> <br /> Global Sync Special</h2>
                 <p className="text-gray-400 font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 justify-center md:justify-start">
                    <Clock size={14} className="animate-pulse" /> Active Protocol: 12 Hours Remaining
                 </p>
              </div>
              <div className="flex items-center gap-8">
                 <div className="hidden lg:flex flex-col items-center">
                    <span className="text-4xl font-black text-white">4.9</span>
                    <div className="flex text-[#FF9900] mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <span className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">Avg Rating</span>
                 </div>
                 <div className="hidden lg:block w-[1px] h-16 bg-white/10"></div>
                 <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-[#FF9900]">21k+</span>
                    <span className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">Units Synced</span>
                 </div>
                 <Link to="/shop" className="bg-white text-black px-12 py-5 rounded font-black text-sm uppercase tracking-widest hover:bg-[#FF9900] transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                    Claim Your Kit
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
