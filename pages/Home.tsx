
import React, { useMemo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, Trophy, Sparkles, TrendingUp, Zap, ChevronRight, Clock, Star, ShieldCheck, Flame, Tag, Target, Activity, Globe } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const { Link } = ReactRouterDOM as any;

const Home: React.FC = () => {
  const { t } = useAppContext();
  
  // Categorize for Marketplace Rows - Expanding Visibility
  const bestSellers = useMemo(() => PRODUCTS.filter(p => p.reviews > 1000).slice(0, 12), []);
  const basketballUniforms = useMemo(() => PRODUCTS.filter(p => p.id >= 801 && p.id <= 850).slice(0, 10), []);
  const gridironUniforms = useMemo(() => PRODUCTS.filter(p => p.id >= 1101 && p.id <= 1150).slice(0, 10), []);
  const baseballSeries = useMemo(() => PRODUCTS.filter(p => p.id >= 1001 && p.id <= 1010 || (p.id >= 1104 && p.id <= 1108)), []);
  
  const pencilBat = useMemo(() => PRODUCTS.find(p => p.id === 1001), []);

  return (
    <div className="bg-[#EAEDED] pb-20">
      {/* Dynamic Hero Carousel - The Diamond & Gridiron Protocol */}
      <div className="relative h-[600px] md:h-[750px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#EAEDED] z-10"></div>
        <img 
          src="https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770054612/16AMERICANFOOTBALLMODEL_swj02j.jpg" 
          alt="Sialkot Global Marketplace" 
          className="w-full h-full object-cover animate-scale-slow opacity-90"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-[1600px] mx-auto px-6">
           <div className="max-w-3xl animate-fade-in-up">
              <div className="bg-white/95 backdrop-blur-xl p-12 rounded-sm shadow-[0_80px_150px_rgba(0,0,0,0.5)] border-l-[16px] border-accent relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Globe size={300} />
                </div>
                <div className="flex items-center gap-3 mb-6">
                   <ShieldCheck className="text-accent" size={28} />
                   <span className="text-[14px] font-black uppercase tracking-[0.5em] text-gray-500 italic">Marketplace Expansion v2.0</span>
                </div>
                <h1 className="text-7xl md:text-[10rem] font-black text-[#131921] uppercase tracking-tighter italic leading-[0.75] mb-8">
                   Global <br /> <span className="text-accent underline decoration-[#131921] decoration-8 md:decoration-[24px] underline-offset-[12px]">Amazon</span>
                </h1>
                <p className="text-gray-600 font-bold mb-10 italic text-xl md:text-2xl leading-tight max-w-xl">
                   Sialkot Shop: Scaling to 1,000+ Verified Units. High-Performance Factory Sync for the USA.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/shop" className="inline-block bg-[#131921] text-white px-16 py-6 rounded-sm font-black text-lg uppercase tracking-[0.2em] hover:bg-accent hover:text-black transition-all shadow-2xl transform hover:-translate-y-2 active:scale-95">
                     Browse 1,000+ Items
                  </Link>
                  <Link to="/sport-store" className="inline-block bg-white border-2 border-gray-200 text-[#131921] px-16 py-6 rounded-sm font-black text-lg uppercase tracking-[0.2em] hover:border-accent transition-all transform hover:-translate-y-2">
                     The Sport Hub
                  </Link>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 -mt-40 relative z-30 space-y-8">
        {/* Marketplace Quad Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
           {/* Card 1: BEST SELLERS */}
           <div className="bg-white p-8 shadow-sm flex flex-col h-full hover:shadow-2xl transition-all border-b-8 border-accent group">
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Elite Marketplace</h3>
              <div className="grid grid-cols-2 gap-2 flex-grow mb-6">
                 {bestSellers.slice(0, 4).map(p => (
                   <Link key={p.id} to={`/product/${p.id}`} className="aspect-square bg-gray-50 overflow-hidden rounded-sm border border-gray-100 p-2">
                      <img src={p.image} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                   </Link>
                 ))}
              </div>
              <Link to="/shop" className="text-xs font-black text-blue-600 hover:text-accent hover:underline mt-auto uppercase tracking-widest text-center">See More Top Items</Link>
           </div>
           
           {/* Card 2: GRIDIRON PROTOCOL */}
           <div className="bg-white p-8 shadow-sm flex flex-col h-full hover:shadow-2xl transition-all border-t-8 border-green-600">
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">The $38 Field Kit</h3>
              <div className="grid grid-cols-2 gap-2 flex-grow mb-6">
                 {gridironUniforms.slice(0, 4).map(p => (
                   <Link key={p.id} to={`/product/${p.id}`} className="aspect-square bg-gray-50 overflow-hidden rounded-sm border border-gray-100 p-2">
                      <img src={p.image} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                   </Link>
                 ))}
              </div>
              <Link to="/sport-store" className="text-xs font-black text-blue-600 hover:text-green-600 hover:underline mt-auto uppercase tracking-widest text-center">Shop Field Gear</Link>
           </div>

           {/* Card 3: NEURAL SCAN CORE */}
           <div className="bg-[#131921] text-white p-8 shadow-sm flex flex-col border-t-[12px] border-accent h-full hover:shadow-2xl transition-all relative overflow-hidden group">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                 <Sparkles className="text-accent" size={24} />
                 <h3 className="text-2xl font-black uppercase italic tracking-tighter">AI Marketplace</h3>
              </div>
              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 py-4 relative z-10">
                 <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center relative">
                    <Zap size={56} className="text-accent animate-pulse" />
                 </div>
                 <p className="text-[12px] font-bold text-gray-400 px-6 leading-relaxed uppercase tracking-[0.2em]">
                    Synchronized with our 1,000 post database for instant pricing.
                 </p>
              </div>
              <Link to="/auto-pricing" className="text-xs font-black text-accent hover:text-white hover:underline mt-8 uppercase tracking-widest relative z-10 text-center">Open Scanner</Link>
           </div>

           {/* Card 4: DIAMOND SERIES */}
           <div className="bg-white p-8 shadow-sm flex flex-col h-full hover:shadow-2xl transition-all border-b-8 border-red-600">
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">BBCOR Elite</h3>
              <div className="flex-grow flex flex-col items-center justify-center group cursor-pointer">
                 <Link to="/product/1001" className="aspect-square bg-gray-50 rounded-sm overflow-hidden border border-gray-100 p-4 mb-4">
                    <img src={pencilBat?.image} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                 </Link>
                 <span className="text-2xl font-black text-red-600 italic uppercase">$150.00</span>
              </div>
              <Link to="/shop" className="text-xs font-black text-blue-600 hover:text-red-600 hover:underline mt-auto uppercase tracking-widest text-center">Shop the Diamond</Link>
           </div>
        </div>

        {/* Global Performance Row: 1,000 Post Goal */}
        <div className="bg-white p-10 shadow-sm rounded-sm border-t-8 border-accent">
           <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-6">
                <h2 className="text-3xl font-black italic tracking-tighter uppercase">The <span className="text-accent">Marketplace</span> Sync</h2>
                <div className="h-0.5 w-32 bg-gray-100 hidden sm:block"></div>
                <span className="hidden lg:inline bg-accent/10 text-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.3em] border border-accent/20">SIALKOT CORE ACTIVE</span>
              </div>
              <Link to="/shop" className="text-xs font-black text-blue-600 hover:text-accent flex items-center gap-2 group uppercase tracking-widest">
                 View All Units <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
           <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
              {bestSellers.map(product => (
                <div key={product.id} className="min-w-[280px] max-w-[280px] flex-shrink-0">
                   <ProductCard product={product} />
                </div>
              ))}
           </div>
        </div>

        {/* The Court Heritage: Pro-Am ($40) */}
        <div className="bg-white p-10 shadow-sm rounded-sm">
           <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black italic tracking-tighter uppercase">Court <span className="text-blue-600">Heritage</span> Series</h2>
              <Link to="/sport-store" className="text-xs font-black text-blue-600 hover:text-blue-800 flex items-center gap-2 group uppercase tracking-widest">
                 See All Kits <ChevronRight size={18} />
              </Link>
           </div>
           <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
              {basketballUniforms.map(product => (
                <div key={product.id} className="min-w-[240px] max-w-[240px] flex-shrink-0">
                   <ProductCard product={product} />
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
