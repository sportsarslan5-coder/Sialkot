
import React, { useMemo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Trophy, Zap, Activity, Target, ArrowRight, ShieldCheck, Globe, ChevronRight } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const { Link } = ReactRouterDOM as any;

const SportStore: React.FC = () => {
  const { t } = useAppContext();

  const basketballUniforms = useMemo(() => {
    return PRODUCTS.filter(p => p.id >= 801 && p.id <= 821);
  }, []);

  const gridironFootball = useMemo(() => {
    return PRODUCTS.filter(p => p.id >= 1101 && p.id <= 1115 && !p.name.includes("Baseball") && !p.name.includes("Diamond"));
  }, []);

  const baseballDiamond = useMemo(() => {
    return PRODUCTS.filter(p => p.id >= 1001 && p.id <= 1006 || (p.id >= 1104 && p.id <= 1108));
  }, []);

  const sportCategories = [
    { name: 'Football', icon: <Activity size={24} />, image: 'https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770054613/2_811d056b-a34e-49ea-b42f-6595878871c4_800x_kj2kke.jpg' },
    { name: 'Baseball', icon: <Target size={24} />, image: 'https://res.cloudinary.com/dc0ytviey/image/upload/v1770143043/VictusPencilBBCORBaseballBat_-3_1_jfwdgj.png' },
    { name: 'Basketball', icon: <Trophy size={24} />, image: 'https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg' },
    { name: 'Training', icon: <Zap size={24} />, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Sport Hero - Optimized for USA Excellence */}
      <div className="relative h-[85vh] bg-[#131921] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#131921] via-[#131921]/60 to-transparent z-10"></div>
        <img 
          src="https://res.cloudinary.com/dzt2nrkjr/image/upload/v1770054612/16AMERICANFOOTBALLMODEL_swj02j.jpg" 
          alt="USA Performance Hub" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-scale-slow"
        />
        
        <div className="max-w-[1600px] mx-auto px-6 w-full relative z-20">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-3 rounded-full text-[14px] font-black uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(34,197,94,0.3)] border-2 border-white/20">
               <Trophy size={20} className="animate-bounce" /> Multi-Sport Performance Sync
            </div>
            <h1 className="text-7xl md:text-[12rem] font-black text-white italic tracking-tighter uppercase leading-[0.7] select-none">
              Elite <br />
              <span className="text-green-600 underline decoration-white decoration-8 md:decoration-[20px] underline-offset-[15px]">Field</span>
            </h1>
            <p className="text-2xl md:text-4xl text-gray-200 font-bold italic border-l-[12px] border-green-600 pl-12 bg-black/40 backdrop-blur-2xl p-8 rounded-r-[4rem] max-w-3xl shadow-3xl border border-white/10">
              The dual-sport engine is now triple. Sialkot Core tech powering the USA Gridiron, Pro-Am Basketball, and the Elite Baseball Diamond.
            </p>
            <div className="pt-8 flex flex-wrap gap-8">
               <button className="bg-white text-black px-20 py-10 rounded-full font-black text-2xl uppercase italic tracking-tighter hover:bg-green-600 hover:text-white transition-all flex items-center gap-6 group shadow-2xl transform hover:scale-110 active:scale-95">
                 Shop the Hub <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform duration-300" />
               </button>
               <div className="flex items-center gap-5 text-white/90 font-black uppercase tracking-[0.4em] text-[12px] bg-white/5 px-10 py-5 rounded-full backdrop-blur-md border border-white/20">
                 <ShieldCheck size={32} className="text-green-600" /> Auth. Manufacturing Partner
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Sport Types */}
      <div className="max-w-[1600px] mx-auto px-6 -mt-32 relative z-30 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {sportCategories.map((cat) => (
            <div key={cat.name} className="group relative h-96 rounded-[4.5rem] overflow-hidden shadow-2xl border-8 border-white transition-all cursor-pointer transform hover:-translate-y-5 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent group-hover:from-black/20 transition-all z-10 duration-700"></div>
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-150" />
              <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
                <div className="text-green-600 mb-6 transform group-hover:scale-125 transition-transform">{cat.icon}</div>
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none">{cat.name}</h3>
                <div className="h-3 w-20 bg-green-600 mt-6 group-hover:w-full transition-all duration-1000 rounded-full shadow-[0_0_20px_#16a34a]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gridiron Section - THE GRIDIRON HUB */}
      <div className="bg-[#f8f8f8] py-32 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-28 gap-12">
            <div className="max-w-3xl">
               <div className="flex items-center gap-4 text-green-600 mb-6">
                 <Zap size={32} fill="currentColor" className="animate-pulse" />
                 <span className="font-black uppercase tracking-[0.5em] text-sm">Gridiron Core Protocol v1.0</span>
               </div>
               <h2 className="text-6xl md:text-9xl font-black text-[#131921] italic tracking-tighter uppercase leading-none">The <span className="text-green-600 underline decoration-black decoration-[15px] underline-offset-[12px]">Football</span> Hub</h2>
               <p className="text-gray-500 mt-10 font-bold italic text-2xl leading-relaxed border-l-8 border-green-600 pl-10">
                 Elite American Football Uniforms. Verified for USA High-Impact Standards. Price: $38.00 Unity Rate.
               </p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-200 flex items-center gap-8">
               <div className="flex flex-col text-right">
                  <span className="text-[12px] font-black uppercase text-gray-400 tracking-widest">Field Status</span>
                  <span className="text-green-600 font-black text-lg uppercase tracking-tighter flex items-center justify-end gap-2">
                    <Globe size={18} /> US Gridiron Ready
                  </span>
               </div>
               <div className="h-14 w-14 border-8 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
            {gridironFootball.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Baseball Hub */}
      <div className="bg-white py-32 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6">
           <div className="flex items-center gap-6 mb-20">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-[#131921]">The <span className="text-red-600">Diamond</span> Heritage</h2>
              <div className="h-0.5 flex-grow bg-gray-100"></div>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {baseballDiamond.slice(0, 8).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default SportStore;
