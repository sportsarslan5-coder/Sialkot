
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, MessageCircle, Instagram, Facebook, ArrowUp, Sparkles, Trophy, Globe, ShieldCheck, MapPin, ChevronDown, Home, User, Bell } from 'lucide-react';
import { useAppContext } from './AppContext';
import { WHATSAPP_NUMBER } from '../constants';

const { Link, useLocation } = ReactRouterDOM as any;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { 
    t, cart, language, setLanguage, currency, setCurrency 
  } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'home', path: '/', icon: <Home size={18} /> },
    { name: 'shop', path: '/shop', icon: <ShoppingBag size={18} /> },
    { name: 'sportStore', path: '/sport-store', icon: <Trophy size={18} /> },
    { name: 'autoPricing', path: '/auto-pricing', icon: <Sparkles size={18} /> },
  ];

  const isActive = (path: string) => {
    if (path.includes('?')) {
        return location.search.includes(path.split('?')[1]);
    }
    return location.pathname === path && location.search === '';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-black">
      {/* Amazon-Inspired Global Top Bar */}
      <div className="bg-[#131921] text-white py-2 px-4 text-xs z-50">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-1 group whitespace-nowrap">
            SIALKOT<span className="text-[#FF9900]">SHOP</span>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400 font-bold ml-1 hidden sm:block">.GLOBAL</span>
          </Link>

          {/* Location Selector (Amazon Style) */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 border border-transparent hover:border-white rounded-sm cursor-pointer transition-colors group">
             <MapPin size={18} className="text-gray-300 mt-1" />
             <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 leading-none">Deliver to</span>
                <span className="text-sm font-bold leading-none">United States</span>
             </div>
          </div>

          {/* Amazon-Style Search Bar */}
          <div className="flex-grow flex items-center max-w-4xl h-10 group relative">
             <div className="hidden md:flex items-center gap-1 px-3 bg-gray-100 h-full text-black text-xs border-r border-gray-300 rounded-l-md hover:bg-gray-200 cursor-pointer">
                All <ChevronDown size={14} />
             </div>
             <input 
                type="text" 
                placeholder={t('search')} 
                className="w-full h-full px-4 text-black outline-none focus:ring-2 focus:ring-[#FF9900] transition-all" 
             />
             <button className="bg-[#FF9900] hover:bg-[#F08804] text-[#131921] h-full px-5 rounded-r-md transition-colors">
                <Search size={22} strokeWidth={2.5} />
             </button>
          </div>

          {/* Accounts & Lists */}
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 border border-transparent hover:border-white rounded-sm cursor-pointer transition-colors">
             <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 leading-none">Hello, Sign in</span>
                <span className="text-sm font-bold leading-none flex items-center gap-1">Account & Lists <ChevronDown size={14} /></span>
             </div>
          </div>

          {/* Cart (Amazon Style) */}
          <Link to="/cart" className="flex items-end gap-1 px-3 py-1.5 border border-transparent hover:border-white rounded-sm cursor-pointer transition-colors group relative">
             <div className="relative">
                <ShoppingBag size={28} className="text-white" />
                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[#FF9900] text-sm font-black pt-1">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
             </div>
             <span className="text-sm font-bold pb-1 hidden sm:block">Cart</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Secondary Nav Bar (Amazon Style "All") */}
      <div className="bg-[#232F3E] text-white py-2 px-4 text-sm z-40 overflow-x-auto whitespace-nowrap scrollbar-hide">
         <div className="max-w-[1600px] mx-auto flex items-center gap-6">
            <button className="flex items-center gap-1 font-bold hover:border-white border border-transparent px-2 py-1 rounded-sm">
               <Menu size={18} /> All
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:border-white border border-transparent px-2 py-1 rounded-sm text-xs font-bold uppercase tracking-wide flex items-center gap-2 ${isActive(link.path) ? 'bg-white/10' : ''}`}
              >
                {t(link.name)}
              </Link>
            ))}
            <div className="ml-auto flex items-center gap-4">
               <span className="text-xs font-bold text-[#FF9900] animate-pulse hidden sm:inline">USA Deals Protocol Active</span>
               <div className="flex items-center gap-2">
                  <button onClick={() => setCurrency('USD')} className={`text-xs font-bold ${currency === 'USD' ? 'text-white underline underline-offset-4' : 'text-gray-400'}`}>USD</button>
                  <button onClick={() => setCurrency('PKR')} className={`text-xs font-bold ${currency === 'PKR' ? 'text-white underline underline-offset-4' : 'text-gray-400'}`}>PKR</button>
               </div>
            </div>
         </div>
      </div>

      <main className="flex-grow bg-[#EAEDED] relative pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile App Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden flex justify-around items-center py-2.5 px-6 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
         {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`flex flex-col items-center gap-1 transition-colors ${isActive(link.path) ? 'text-[#FF9900]' : 'text-gray-400'}`}
            >
               {link.icon}
               <span className="text-[10px] font-bold uppercase tracking-widest">{t(link.name)}</span>
            </Link>
         ))}
         <Link 
            to="/cart" 
            className={`flex flex-col items-center gap-1 transition-colors relative ${isActive('/cart') ? 'text-[#FF9900]' : 'text-gray-400'}`}
          >
             <ShoppingBag size={18} />
             <span className="text-[10px] font-bold uppercase tracking-widest">{t('cart')}</span>
             {cart.length > 0 && (
               <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                  {cart.length}
               </span>
             )}
         </Link>
      </div>

      {/* Back to top (Amazon style) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-[#37475A] hover:bg-[#485769] text-white py-4 text-xs font-bold text-center transition-colors"
      >
        Back to top
      </button>

      <footer className="bg-[#232F3E] text-white py-16 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm border-b border-white/10 pb-16">
            <div className="space-y-4">
               <h4 className="font-bold text-lg">Get to Know Us</h4>
               <ul className="space-y-2 text-gray-300">
                  <li><Link to="/blog" className="hover:underline">Marketplace Blog</Link></li>
                  <li><Link to="/contact" className="hover:underline">About Sialkot Global</Link></li>
                  <li className="flex items-center gap-2 text-[#FF9900] font-black"><ShieldCheck size={16} /> Verified Authenticity</li>
               </ul>
            </div>
            <div className="space-y-4">
               <h4 className="font-bold text-lg">Marketplace Services</h4>
               <ul className="space-y-2 text-gray-300">
                  <li><Link to="/auto-pricing" className="hover:underline">Neural Price Sync</Link></li>
                  <li><Link to="/sport-store" className="hover:underline">Varsity Solutions</Link></li>
                  <li className="flex items-center gap-2 text-blue-400 font-bold"><Globe size={16} /> Global Shipping Sync</li>
               </ul>
            </div>
            <div className="space-y-4">
               <h4 className="font-bold text-lg">Amazon Marketplace Partner</h4>
               <ul className="space-y-2 text-gray-300">
                  <li className="bg-white/5 p-4 rounded-lg border border-white/10">
                     <p className="text-[10px] leading-relaxed">Sialkot Shop operates on global marketplace standards, ensuring cross-platform price transparency and high-performance fulfillment.</p>
                  </li>
               </ul>
            </div>
            <div className="space-y-4">
               <h4 className="font-bold text-lg">Contact Marketplace</h4>
               <div className="flex flex-col gap-2 text-gray-300">
                  <span className="font-bold text-white">WhatsApp Global:</span>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-[#FF9900] hover:underline font-black text-lg">0307 9490 721</a>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">Available 24/7 (PKT)</span>
               </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-10 text-center flex flex-col items-center gap-4">
            <Link to="/" className="text-3xl font-black text-white italic tracking-tighter">SIALKOT<span className="text-[#FF9900]">SHOP</span></Link>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
               <span className="hover:underline cursor-pointer">Conditions of Use</span>
               <span className="hover:underline cursor-pointer">Privacy Notice</span>
               <span className="hover:underline cursor-pointer">Interest-Based Ads</span>
            </div>
            <p className="text-[10px] text-gray-500 font-bold mt-4">{t('footerText')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
