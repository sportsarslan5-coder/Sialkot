
import React, { useMemo } from 'react';
import { Trophy, Zap, Activity, Target, ArrowRight, Filter, Construction } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const SportStore: React.FC = () => {
  const { t } = useAppContext();

  // The collection is currently being cleared to make room for the new requested items.
  const performanceHighlights = useMemo(() => {
    // Current highlights removed as per request. Ready for new IDs or custom data.
    return [];
  }, []);

  const sportCategories = [
    { name: 'Football', icon: <Activity size={24} />, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80' },
    { name: 'Cricket', icon: <Trophy size={24} />, image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80' },
    { name: 'Training', icon: <Zap size={24} />, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80' },
    { name: 'Athletics', icon: <Target size={24} />, image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Sport Hero */}
      <div className="relative h-[65vh] bg-black overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&q=80" 
          alt="Athletics" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 animate-scale-slow"
        />
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
               <Trophy size={14} /> Professional Series
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85]">
              Core <br />
              <span className="text-accent">Athlete</span>
            </h1>
            <p className="text-xl text-gray-300 font-medium italic border-l-4 border-accent pl-6">
              Precision gear for Sialkot's elite. Every item engineered for high-performance impact.
            </p>
            <div className="pt-4">
               <button className="bg-white text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-accent transition-all flex items-center gap-2 group">
                 Explore Gear <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Sport Types */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-30 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportCategories.map((cat) => (
            <div key={cat.name} className="group relative h-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-all cursor-pointer">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="text-accent mb-2">{cat.icon}</div>
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">{cat.name}</h3>
                <div className="h-1 w-10 bg-accent mt-3 group-hover:w-20 transition-all rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Gear Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
               <div className="flex items-center gap-2 text-accent mb-2">
                 <Zap size={20} fill="currentColor" />
                 <span className="font-black uppercase tracking-widest text-xs">Active Neural Selection</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-primary italic tracking-tighter uppercase leading-none">High <span className="text-accent">Output</span></h2>
            </div>
          </div>

          {performanceHighlights.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceHighlights.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-200 shadow-inner">
               <Construction size={64} className="text-gray-300 mb-6 animate-pulse" />
               <h3 className="text-2xl font-black text-gray-300 uppercase italic tracking-tighter">Syncing New Collection</h3>
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Awaiting protocol update from core command...</p>
            </div>
          )}

          {/* Teamwear Banner */}
          <div className="mt-24 bg-black rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden border border-accent/20">
             <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="text-center lg:text-left max-w-2xl">
                   <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-6 leading-[0.9]">
                     Custom <br /> <span className="text-accent">Team Kits</span>
                   </h2>
                   <p className="text-gray-400 text-xl font-medium leading-relaxed italic border-l-4 border-accent pl-8">
                     Outfit your squad with Sialkot's finest sublimation technology. Lightweight, durable, and built for battle.
                   </p>
                </div>
                <button className="bg-accent text-black px-14 py-7 rounded-full font-black text-xl uppercase italic tracking-tighter hover:bg-white transition-all shadow-[0_20px_50px_rgba(255,215,0,0.2)]">
                   Enquire Now
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportStore;
