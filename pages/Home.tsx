
import React, { useMemo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, Trophy, Sparkles, TrendingUp, Zap, ChevronRight, Clock, Star, ShieldCheck, Flame, Tag, Target } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const { Link } = ReactRouterDOM as any;

const Home: React.FC = () => {
  const { t } = useAppContext();
  
  // Categorize for Marketplace Rows
  const bestSellers = useMemo(() => PRODUCTS.filter(p => p.reviews > 1000).slice(0, 8), []);
  const uniforms = useMemo(() => PRODUCTS.filter(p => p.id >= 801 && p.id <= 821), []);
  const baseballSeries = useMemo(() => PRODUCTS.filter(p => p.id >= 1001 && p.id <= 1006), []);
  const pencilBat = useMemo(() => PRODUCTS.find(p => p.id === 1001), []);
  const victoryJacket = useMemo(() => PRODUCTS.find(p => p.id === 901), []);
  const victoryHoodie = useMemo(() => PRODUCTS.find(p => p.id === 903), []);

  return (
    <div className="bg-[#EAEDED] pb-20">
      {/* Dynamic Hero Carousel - The Diamond Series Protocol */}
      <div className="relative h-[500px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#EAEDED] z-10"></div>
        <img 
          src="https://res.cloudinary.com/dc0ytviey/image/upload/v1770143043/VictusPencilBBCORBaseballBat_-3_1_jfwdgj.png" 
          alt="Diamond Series Elite" 
          className="w-full h-full object-cover animate-scale-slow opacity-80"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-[1600px] mx-auto px-6">
           <div className="max-w-2xl animate-fade-in-up">
              <div className="bg-white/95 backdrop-blur-lg p-12 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.3)] border-l-[12px] border-red-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Target size={200} />
                </div>
                <div className="flex items-center gap-2 mb-6">
                   <ShieldCheck className="text-red-600" size={24} />
                   <span className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-500 italic">Diamond Series Protocol v1.5</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-[#131921] uppercase tracking-tighter italic leading-[0.8] mb-8">
                   Pencil <br /> <span className="text-red-600 underline decoration-[#131921] decoration-8 underline-offset-8">Protocol</span>
                </h1>
                <p className="text-gray-600 font-bold mb-10 italic text-lg leading-relaxed max-w-lg">
                   The viral USA sensation. $150 direct from the Sialkot Core. Exit velocity verified. BBCOR Certified.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to={`/product/1001`} className="inline-block bg-[#131921] text-white px-12 py-5 rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:bg-red-600 transition-all shadow-2xl transform hover:-translate-y-1">
                     Claim the Bat
                  </Link>
                  <Link to="/sport-store" className="inline-block bg-white border-2 border-gray-200 text-[#131921] px-12 py-5 rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:border-red-600 transition-all transform hover:-translate-y-1">
                     Explore Series
                  </Link>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 -mt-32 relative z-30 space-y-8">
        {/* Quad Card Grid: Performance Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
           {/* Card 1: PENCIL BAT SPOTLIGHT */}
           <div className="bg-white p-8 shadow-sm flex flex-col h-full hover:shadow-2xl transition-all border-b-8 border-red-600">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-2xl font-black uppercase italic tracking-tighter">BBCOR Elite</h3>
                 <Flame size={24} className="text-red-600 animate-pulse" />
              </div>
              <div className="flex-grow flex flex-col items-center">
                 <Link to="/product/1001" className="block relative aspect-square bg-gray-50 mb-6 overflow-hidden rounded group border border-gray-100 p-4">
                    <img src={pencilBat?.image} className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-1000" />
                    <div className="absolute top-2 right-2 bg-black text-white text-[10px] font-black px-3 py-1 rounded-sm shadow-xl">VIRAL DROP</div>
                 </Link>
                 <div className="text-center">
                    <p className="text-lg font-black text-[#131921] mb-2 uppercase italic tracking-tighter">Pencil Protocol Bat</p>
                    <div className="flex items-baseline justify-center gap-1 text-red-600 font-black">
                       <span className="text-sm">$</span>
                       <span className="text-3xl">150</span>
                       <span className="text-sm">.00</span>
                    </div>
                 </div>
              </div>
              <Link to="/product/1001" className="text-xs font-black text-blue-600 hover:text-red-600 hover:underline mt-8 uppercase tracking-widest text-center">Secure the Sync</Link>
           </div>
           
           {/* Card 2: THE VICTORY SERIES (Jacket & Hoodie) */}
           <div className="bg-white p-8 shadow-sm flex flex-col h-full hover:shadow-2xl transition-all border-t-8 border-[#FF9900]">
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Victory Series</h3>
              <div className="grid grid-cols-2 gap-4 flex-grow mb-6">
                 <Link to="/product/901" className="group flex flex-col gap-2">
                    <div className="aspect-square bg-gray-50 rounded-sm overflow-hidden border border-gray-100 p-2">
                       <img src={victoryJacket?.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter text-[#131921] truncate">Varsity Jacket</span>
                 </Link>
                 <Link to="/product/903" className="group flex flex-col gap-2">
                    <div className="aspect-square bg-gray-50 rounded-sm overflow-hidden border border-gray-100 p-2">
                       <img src={victoryHoodie?.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter text-[#131921] truncate">Victory Hoodie</span>
                 </Link>
              </div>
              <Link to="/shop" className="text-xs font-black text-blue-600 hover:text-red-600 hover:underline mt-auto uppercase tracking-widest text-center">Shop Victory Hub</Link>
           </div>

           {/* Card 3: NEURAL SCAN PROMOTION */}
           <div className="bg-[#131921] text-white p-8 shadow-sm flex flex-col border-t-[12px] border-red-600 h-full hover:shadow-2xl transition-all relative overflow-hidden group">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                 <Sparkles className="text-red-600" size={20} />
                 <h3 className="text-2xl font-black uppercase italic tracking-tighter">Neural Core</h3>
              </div>
              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 py-4 relative z-10">
                 <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center relative">
                    <Zap size={56} className="text-red-600 animate-pulse" />
                    <div className="absolute inset-0 border-4 border-red-600/30 rounded-full border-dashed animate-spin-slow"></div>
                 </div>
                 <p className="text-[12px] font-bold text-gray-400 px-6 leading-relaxed uppercase tracking-[0.2em]">
                    Visual Recognition Protocol active. Detect any pro gear instantly.
                 </p>
              </div>
              <Link to="/auto-pricing" className="text-xs font-black text-red-600 hover:text-white hover:underline mt-8 uppercase tracking-widest relative z-10 text-center">Open Scanner</Link>
           </div>

           {/* Card 4: VARSITY COURT HUB */}
           <div className="bg-white p-8 shadow-sm flex flex-col h-full hover:shadow-2xl transition-all border-b-8 border-[#FF9900]">
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Court Essentials</h3>
              <div className="grid grid-cols-2 gap-2 flex-grow mb-6">
                 {uniforms.slice(0, 4).map(p => (
                   <Link key={p.id} to={`/product/${p.id}`} className="aspect-square bg-gray-50 overflow-hidden group rounded-sm border border-gray-100">
                      <img src={p.image} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                   </Link>
                 ))}
              </div>
              <Link to="/sport-store" className="text-xs font-black text-blue-600 hover:text-[#FF9900] hover:underline mt-auto uppercase tracking-widest text-center">Enter Court Hub</Link>
           </div>
        </div>

        {/* The Court Heritage: Horizontal Scroller (IDs 801-821) */}
        <div className="bg-white p-10 shadow-sm rounded-sm">
           <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-6">
                <h2 className="text-3xl font-black italic tracking-tighter uppercase">The <span className="text-[#FF9900]">Court Heritage</span> USA Pro-Am</h2>
                <div className="h-0.5 w-32 bg-gray-100 hidden sm:block"></div>
                <span className="hidden lg:inline bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.3em] border border-blue-200">USA COURT SYNC ACTIVE</span>
              </div>
              <Link to="/sport-store" className="text-xs font-black text-blue-600 hover:text-[#FF9900] flex items-center gap-2 group uppercase tracking-widest">
                 View All Kits <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
           <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
              {uniforms.map(product => (
                <div key={product.id} className="min-w-[280px] max-w-[280px] flex-shrink-0">
                   <ProductCard product={product} />
                </div>
              ))}
           </div>
        </div>

        {/* The Diamond Protocol: Horizontal Scroller */}
        <div className="bg-white p-10 shadow-sm rounded-sm">
           <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-6">
                <h2 className="text-3xl font-black italic tracking-tighter uppercase">The <span className="text-red-600">Diamond</span> Series Hub</h2>
                <div className="h-0.5 w-32 bg-gray-100 hidden sm:block"></div>
                <span className="hidden lg:inline bg-red-100 text-red-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.3em] border border-red-200">USA BASEBALL PROTOCOL</span>
              </div>
              <Link to="/shop" className="text-xs font-black text-blue-600 hover:text-red-600 flex items-center gap-2 group uppercase tracking-widest">
                 View the Diamond <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
           <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
              {baseballSeries.map(product => (
                <div key={product.id} className="min-w-[280px] max-w-[280px] flex-shrink-0">
                   <ProductCard product={product} />
                </div>
              ))}
           </div>
        </div>

        {/* Best Sellers Row */}
        <div className="bg-white p-10 shadow-sm rounded-sm">
           <div className="flex items-center gap-6 mb-10">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Global <span className="text-blue-600">Performance</span> Sync</h2>
              <div className="h-0.5 flex-grow bg-gray-100"></div>
           </div>
           <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
              {bestSellers.map(product => (
                <div key={product.id} className="min-w-[240px] max-w-[240px] flex-shrink-0">
                   <ProductCard product={product} />
                </div>
              ))}
           </div>
        </div>

        {/* Final Branding Banner */}
        <div className="bg-[#131921] text-white p-20 rounded shadow-[0_100px_150px_rgba(0,0,0,0.5)] relative overflow-hidden group border-b-[20px] border-red-600">
           <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
           <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px] group-hover:scale-125 transition-transform duration-[2000ms]"></div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="text-center lg:text-left max-w-3xl">
                 <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-sm text-xs font-black uppercase tracking-[0.5em] mb-6 shadow-2xl">Elite USA Partner</div>
                 <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 leading-[0.8] text-white drop-shadow-2xl">
                    Home Run <br /> <span className="text-red-600">Protocol</span>
                 </h2>
                 <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[12px] flex items-center gap-3 justify-center lg:justify-start">
                    <Clock size={18} className="animate-pulse text-red-600" /> Active Sync: 1500+ Units Shipped This Week
                 </p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-10">
                 <div className="flex flex-col items-center">
                    <span className="text-6xl font-black text-white italic tracking-tighter">4.9/5</span>
                    <div className="flex text-red-600 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black">Performance Rating</span>
                 </div>
                 <div className="hidden md:block w-[2px] h-24 bg-white/10"></div>
                 <Link to="/shop" className="bg-white text-black px-16 py-7 rounded-sm font-black text-lg uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-[0_30px_60px_rgba(255,255,255,0.1)]">
                    Secure Gear
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
