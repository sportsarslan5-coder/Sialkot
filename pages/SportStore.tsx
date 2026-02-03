
import React, { useMemo } from 'react';
// Added react-router-dom import to fix Link errors
import * as ReactRouterDOM from 'react-router-dom';
import { Trophy, Zap, Activity, Target, ArrowRight, Filter, Construction, ShieldCheck, Globe } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

// Define Link from ReactRouterDOM
const { Link } = ReactRouterDOM as any;

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
    { name: 'Varsity', icon: <Trophy size={24} />, image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Sport Hero - Optimized for USA Basketball Excellence */}
      <div className="relative h-[85vh] bg-[#131921] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#131921] via-[#131921]/60 to-transparent z-10"></div>
        <img 
          src="https://res.cloudinary.com/dzt2nrkjr/image/upload/v1769959046/usa-basketball-uniforms_lmxidn.jpg" 
          alt="USA Basketball Elite" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-scale-slow"
        />
        
        <div className="max-w-[1600px] mx-auto px-6 w-full relative z-20">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-3 bg-[#FF9900] text-black px-8 py-3 rounded-full text-[14px] font-black uppercase tracking-widest shadow-[0_0_40px_rgba(255,153,0,0.3)] border-2 border-white/20">
               <Trophy size={20} className="animate-bounce" /> USA Pro-Am Master Protocol
            </div>
            <h1 className="text-7xl md:text-[12rem] font-black text-white italic tracking-tighter uppercase leading-[0.7] select-none">
              Court <br />
              <span className="text-[#FF9900] underline decoration-white decoration-8 md:decoration-[20px] underline-offset-[15px]">Kings</span>
            </h1>
            <p className="text-2xl md:text-4xl text-gray-200 font-bold italic border-l-[12px] border-[#FF9900] pl-12 bg-black/40 backdrop-blur-2xl p-8 rounded-r-[4rem] max-w-3xl shadow-3xl border border-white/10">
              Direct from the Sialkot Engine to the USA Varsity Circuit. Engineered for NCAA, Pro-Am, and Streetball dominance.
            </p>
            <div className="pt-8 flex flex-wrap gap-8">
               <button className="bg-white text-black px-20 py-10 rounded-full font-black text-2xl uppercase italic tracking-tighter hover:bg-[#FF9900] transition-all flex items-center gap-6 group shadow-2xl transform hover:scale-110 active:scale-95">
                 Shop the Hub <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform duration-300" />
               </button>
               <div className="flex items-center gap-5 text-white/90 font-black uppercase tracking-[0.4em] text-[12px] bg-white/5 px-10 py-5 rounded-full backdrop-blur-md border border-white/20">
                 <ShieldCheck size={32} className="text-[#FF9900]" /> Auth. Global Partner
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Sport Types - Visual Navigation */}
      <div className="max-w-[1600px] mx-auto px-6 -mt-32 relative z-30 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {sportCategories.map((cat) => (
            <div key={cat.name} className="group relative h-96 rounded-[4.5rem] overflow-hidden shadow-2xl border-8 border-white transition-all cursor-pointer transform hover:-translate-y-5 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent group-hover:from-black/20 transition-all z-10 duration-700"></div>
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-150" />
              <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
                <div className="text-[#FF9900] mb-6 transform group-hover:scale-125 transition-transform">{cat.icon}</div>
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none">{cat.name}</h3>
                <div className="h-3 w-20 bg-[#FF9900] mt-6 group-hover:w-full transition-all duration-1000 rounded-full shadow-[0_0_20px_#FF9900]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Basketball Uniforms Section - The $40 Core */}
      <div className="bg-[#EAEDED] py-32">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-28 gap-12">
            <div className="max-w-3xl">
               <div className="flex items-center gap-4 text-[#FF9900] mb-6">
                 <Zap size={32} fill="currentColor" className="animate-pulse" />
                 <span className="font-black uppercase tracking-[0.5em] text-sm">USA Varsity Core Protocol V4.0</span>
               </div>
               <h2 className="text-6xl md:text-9xl font-black text-[#131921] italic tracking-tighter uppercase leading-none">The <span className="text-[#FF9900] underline decoration-black decoration-[15px] underline-offset-[12px]">Grand</span> Hub</h2>
               <p className="text-gray-500 mt-10 font-bold italic text-2xl leading-relaxed border-l-8 border-[#FF9900] pl-10">
                 21 Professional Grade Uniforms. Engineered for the buzzer-beater moments. Verified Global Pricing: $40.00 Fixed Rate.
               </p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-200 flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-[12px] font-black uppercase text-gray-400 tracking-widest">Global Status</span>
                  <span className="text-blue-600 font-black text-lg uppercase tracking-tighter flex items-center gap-2">
                    <Globe size={18} /> Catalog Sync Active
                  </span>
               </div>
               <div className="h-14 w-14 border-8 border-[#FF9900] border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
            {performanceHighlights.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* High-Octane Branding Banner */}
          <div className="mt-40 bg-black rounded-[6rem] p-20 md:p-36 relative overflow-hidden border-8 border-[#FF9900]/10 shadow-[0_100px_200px_rgba(0,0,0,0.7)]">
             <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#FF9900]/15 rounded-full blur-[250px] -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[200px] translate-y-1/2 -translate-x-1/4"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-28">
                <div className="text-center lg:text-left max-w-5xl">
                   <h2 className="text-7xl md:text-[11rem] font-black text-white italic tracking-tighter uppercase mb-12 leading-[0.75]">
                     Varsity <br /> <span className="text-[#FF9900] underline decoration-white/20">Legacy</span>
                   </h2>
                   <p className="text-gray-300 text-3xl md:text-4xl font-medium leading-relaxed italic border-l-[16px] border-[#FF9900] pl-16 max-w-4xl py-6 bg-white/5 rounded-r-4xl">
                     Sialkot Shop is the verified engine of the USA Pro-Am scene. Our $40 elite uniforms are built for the heavy grind, the fast break, and the legacy. Join the core protocol.
                   </p>
                </div>
                <div className="flex flex-col items-center gap-12">
                   <Link to="/shop" className="bg-[#FF9900] text-black px-24 py-12 rounded-[4rem] font-black text-5xl uppercase italic tracking-tighter hover:bg-white transition-all shadow-[0_40px_100px_rgba(255,153,0,0.5)] transform hover:scale-110 active:scale-90 relative group">
                      <span className="relative z-10">Get Your Kit</span>
                      <div className="absolute inset-0 bg-white rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity blur-3xl"></div>
                   </Link>
                   <div className="flex flex-col items-center">
                      <span className="text-white/40 text-[12px] font-black uppercase tracking-[0.6em] mb-4 italic">Worldwide Factory Sync Protocol</span>
                      <div className="flex gap-4">
                         <div className="w-3 h-3 bg-[#FF9900] rounded-full animate-ping"></div>
                         <div className="w-3 h-3 bg-blue-600 rounded-full animate-ping delay-150"></div>
                         <div className="w-3 h-3 bg-white rounded-full animate-ping delay-300"></div>
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
