
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, MessageCircle, Instagram, Facebook, Twitter, ArrowUp, Sparkles, Trophy } from 'lucide-react';
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
    { name: 'home', path: '/' },
    { name: 'shop', path: '/shop' },
    { name: 'sportStore', path: '/sport-store', icon: <Trophy size={14} className="inline mr-1 text-accent" /> },
    { name: 'men', path: '/shop?category=Men' },
    { name: 'autoPricing', path: '/auto-pricing', icon: <Sparkles size={14} className="inline mr-1 text-accent" /> },
    { name: 'blog', path: '/blog' },
    { name: 'contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path.includes('?')) {
        return location.search.includes(path.split('?')[1]);
    }
    return location.pathname === path && location.search === '';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-black">
      {/* Top Bar */}
      <div className="bg-black text-white py-2.5 px-4 text-xs tracking-wide z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 opacity-90">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <MessageCircle size={14} /> <span className="font-medium">WhatsApp Support: 0307 9490 721</span>
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 cursor-pointer text-xs">
                <button onClick={() => setLanguage('en')} className={`font-bold transition-colors ${language === 'en' ? 'text-accent' : 'text-gray-500 hover:text-white'}`}>EN</button>
                <span className="text-gray-700">/</span>
                <button onClick={() => setLanguage('ur')} className={`font-bold transition-colors ${language === 'ur' ? 'text-accent' : 'text-gray-500 hover:text-white'}`}>UR</button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer text-xs">
                <button onClick={() => setCurrency('USD')} className={`font-bold transition-colors ${currency === 'USD' ? 'text-accent' : 'text-gray-500 hover:text-white'}`}>USD</button>
                <span className="text-gray-700">/</span>
                <button onClick={() => setCurrency('PKR')} className={`font-bold transition-colors ${currency === 'PKR' ? 'text-accent' : 'text-gray-500 hover:text-white'}`}>PKR</button>
            </div>
          </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 py-2' 
            : 'bg-white border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl md:text-3xl font-black tracking-tighter group">
                SIALKOT<span className="text-accent group-hover:text-black transition-colors duration-300"> </span>SHOP
              </Link>
            </div>

            <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[10px] lg:text-xs font-semibold uppercase tracking-wider transition-all duration-200 relative group flex items-center whitespace-nowrap ${
                    isActive(link.path) ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {link.icon && link.icon}
                  {t(link.name)}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block text-gray-600 hover:text-black">
                <Search size={18} />
              </button>
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group text-gray-600 hover:text-black">
                <ShoppingBag size={18} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-accent text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </Link>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full left-0 z-30 animate-slide-down shadow-xl h-screen">
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-bold rounded-xl transition-colors flex items-center gap-2 ${
                    isActive(link.path) 
                      ? 'bg-accent/10 text-black border-l-4 border-accent' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  {link.icon && React.cloneElement(link.icon as React.ReactElement<any>, { size: 20 })}
                  {t(link.name)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow bg-white relative">
        {children}
      </main>

      <footer className="bg-[#050505] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <h3 className="text-3xl font-black tracking-tighter">SIALKOT<span className="text-accent"> </span>SHOP</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        From Sialkot to the World. We provide elite athletic gear and high-performance fashion for the global market.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-lg text-white tracking-wide">{t('shop')}</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link to="/shop?category=Men" className="hover:text-accent transition-colors">Men's Collection</Link></li>
                        <li><Link to="/sport-store" className="hover:text-accent transition-colors">Sport Store</Link></li>
                        <li><Link to="/auto-pricing" className="hover:text-accent transition-colors">AI Neural Scan</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-lg text-white tracking-wide">Customer Protocol</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link to="/contact" className="hover:text-accent transition-colors">Order Tracking</Link></li>
                        <li><Link to="/contact" className="hover:text-accent transition-colors">Global Shipping</Link></li>
                        <li><Link to="/contact" className="hover:text-accent transition-colors">Returns & Claims</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-lg text-white tracking-wide">{t('subscribe')}</h4>
                    <div className="relative">
                        <input 
                            type="email" 
                            placeholder="Gmail Address" 
                            className="bg-white/10 text-white px-5 py-3 pr-12 outline-none w-full text-sm rounded-lg border border-transparent focus:border-accent" 
                        />
                        <button className="absolute right-1 top-1 bottom-1 bg-accent text-black px-3 rounded-md font-bold">
                            <ArrowUp size={18} className="rotate-90" />
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                <div>{t('footerText')}</div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
