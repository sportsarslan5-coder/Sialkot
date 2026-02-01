
import React, { useMemo } from 'react';
import { Trophy, Zap, Activity, Target, ArrowRight, Filter, Construction, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const SportStore: React.FC = () => {
  const { t } = useAppContext();

  // Load the massive new Basketball Uniform collection (IDs 801-821)
  const performanceHighlights = useMemo(() => {
    return PRODUCTS.filter(p => p.id >= 801 && p.id <= 821);
  }, []);

  const sportCategories = [
    { name: 'Basketball', icon: <Target size={24} />, image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80' },
    { name: 'Football', icon: <Activity size={24} />, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80' },
    { name: 'Training', icon: <Zap size={24} />, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80' },
    { name: 'Cricket', icon: <Trophy size={24} />, image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Sport Hero - Optimized for USA Basketball Excellence */}
      <div className="relative h-[80vh] bg-black overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
        <img 
          src="https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg" 
          alt="USA Basketball Elite" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-scale-slow"
        />
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 bg-accent text-black px-6 py-2.5 rounded-full text-[14px] font-black uppercase tracking-widest shadow-[0_0_30px_rgba(255,215,0,0.4)] border-2 border-white/20">
               <Trophy size={18} className="animate-bounce" /> USA Pro-Am Master Series
            </div>
            <h1 className="text-7xl md:text-[11rem] font-black text-white italic tracking-tighter uppercase leading-[0.75] select-none">
              Elite <br />
              <span className="text-accent underline decoration-white decoration-8 md:decoration-[16px] underline-offset-[12px]">Court</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 font-bold italic border-l-[10px] border-accent pl-10 bg-black/30 backdrop-blur-xl p-6 rounded-r-[3rem] max-w-2xl shadow-2xl">
              From Sialkot to the States. Engineered for NCAA, Pro-Am, and Streetball dominance. The legend is here.
            </p>
            <div className="pt-8 flex flex-wrap gap-6">
               <button className="bg-white text-black px-16 py-8 rounded-full font-black text-lg uppercase tracking-widest hover:bg-accent transition-all flex items-center gap-4 group shadow-[0_30px_60px_rgba(255,255,255,0.1)] transform hover:scale-110 active:scale-95">
                 Shop Collection <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-300" />
               </button>
               <div className="flex items-center gap-4 text-white/90 font-black uppercase tracking-[0.3em] text-[11px] bg-black/40 px-8 py-4 rounded-full backdrop-blur-md border border-white/10">
                 <ShieldCheck size={28} className="text-accent" /> Authentic Sialkot Craft
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Sport Types */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-30 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sportCategories.map((cat) => (
            <div key={cat.name} className="group relative h-80 rounded-[4rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.3)] border-4 border-white transition-all cursor-pointer transform hover:-translate-y-4 hover:rotate-2">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors z-10 duration-500"></div>
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-150" />
              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                <div className="text-accent mb-4 transform group-hover:scale-125 transition-transform">{cat.icon}</div>
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none">{cat.name}</h3>
                <div className="h-2 w-16 bg-accent mt-5 group-hover:w-full transition-all duration-700 rounded-full shadow-[0_0_15px_#FFD700]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Basketball Uniforms Section */}
      <div className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
               <div className="flex items-center gap-3 text-accent mb-4">
                 <Zap size={28} fill="currentColor" className="animate-pulse" />
                 <span className="font-black uppercase tracking-[0.4em] text-sm">USA Varsity Core Protocol</span>
               </div>
               <h2 className="text-6xl md:text-8xl font-black text-primary italic tracking-tighter uppercase leading-none">The <span className="text-accent underline decoration-black decoration-[12px] underline-offset-[10px]">Grand</span> Collection</h2>
               <p className="text-gray-400 mt-8 font-bold italic text-lg leading-relaxed">21 Professional Grade Uniforms. Engineered for the buzzer-beater moments. Flat-rate $40 for the USA leagues.</p>
            </div>
            <div className="bg-white px-8 py-5 rounded-[2rem] shadow-2xl border border-gray-100 flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-[11px] font-black uppercase text-gray-400 tracking-widest">Active Sync Status</span>
                  <span className="text-green-600 font-black text-sm uppercase">Catalog Loaded (21 Units)</span>
               </div>
               <div className="h-10 w-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>

          {performanceHighlights.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
              {performanceHighlights.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-40 text-center bg-white rounded-[5rem] border-8 border-dashed border-gray-100 shadow-inner">
               <Construction size={100} className="text-gray-200 mb-10 animate-bounce" />
               <h3 className="text-4xl font-black text-gray-200 uppercase italic tracking-tighter">Syncing Pro-Court Assets</h3>
               <p className="text-sm text-gray-300 font-bold uppercase tracking-[0.6em] mt-5">Awaiting USA Varsity Protocol Verification...</p>
            </div>
          )}

          {/* Special USA Performance Banner - Epic Final Call */}
          <div className="mt-32 bg-black rounded-[5rem] p-16 md:p-32 relative overflow-hidden border-4 border-accent/20 shadow-[0_80px_160px_rgba(0,0,0,0.6)]">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/15 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-24">
                <div className="text-center lg:text-left max-w-4xl">
                   <h2 className="text-7xl md:text-[9rem] font-black text-white italic tracking-tighter uppercase mb-10 leading-[0.8]">
                     Championship <br /> <span className="text-accent underline decoration-white/20">Heritage</span>
                   </h2>
                   <p className="text-gray-300 text-3xl font-medium leading-relaxed italic border-l-[12px] border-accent pl-12 max-w-3xl py-4 bg-white/5 rounded-r-3xl">
                     Sialkot Shop is the official engine of the USA Pro-Am scene. Our $40 elite uniforms are built for the heavy grind, the fast break, and the legacy. Join the core.
                   </p>
                </div>
                <div className="flex flex-col items-center gap-10">
                   <button className="bg-accent text-black px-24 py-12 rounded-[3rem] font-black text-4xl uppercase italic tracking-tighter hover:bg-white transition-all shadow-[0_30px_90px_rgba(255,215,0,0.4)] transform hover:scale-110 active:scale-90 relative group">
                      <span className="relative z-10">Order Your Kit</span>
                      <div className="absolute inset-0 bg-white rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
                   </button>
                   <div className="flex flex-col items-center">
                      <span className="text-white/60 text-sm font-black uppercase tracking-[0.5em] mb-2">Worldwide Express Sync</span>
                      <div className="flex gap-2">
                         <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
                         <div className="w-2 h-2 bg-accent rounded-full animate-ping delay-75"></div>
                         <div className="w-2 h-2 bg-accent rounded-full animate-ping delay-150"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportStore;
