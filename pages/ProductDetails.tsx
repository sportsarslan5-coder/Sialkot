
import React, { useState, useMemo, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Star, ShoppingCart, CheckCircle, MessageCircle, Shield, ShoppingBag, ExternalLink, Globe, Truck, Lock, RotateCcw, Plus } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS, WHATSAPP_NUMBER, AMAZON_BASE_URL } from '../constants';
import ProductCard from '../components/ProductCard';

const { useParams, Link } = ReactRouterDOM as any;

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { t, convertPrice, addToCart } = useAppContext();
  const product = PRODUCTS.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [addedToCart, setAddedToCart] = useState(false);

  const bundleProduct = useMemo(() => {
    return PRODUCTS.find(p => p.id !== product?.id && p.category === product?.category) || PRODUCTS[0];
  }, [product]);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Sialkot Marketplace`;
      window.scrollTo(0, 0);
    }
  }, [product]);

  useEffect(() => {
    if (product && product.sizes.length > 0) setSelectedSize(product.sizes[0]);
  }, [product]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500 font-black">404: MARKETPLACE_ITEM_NOT_FOUND</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleAmazonCompare = () => {
    const searchString = encodeURIComponent(product.name + " basketball jersey premium");
    window.open(`${AMAZON_BASE_URL}${searchString}`, '_blank');
  };

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8 animate-fade-in bg-[#EAEDED] min-h-screen">
        <div className="bg-white border border-gray-200 p-8 shadow-sm mb-6">
          {/* Breadcrumbs (Amazon style) */}
          <nav className="flex items-center gap-2 text-[11px] text-gray-500 font-bold mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <Link to="/" className="hover:text-[#C7511F] hover:underline">Sialkot Shop</Link>
              <span>›</span>
              <Link to="/shop" className="hover:text-[#C7511F] hover:underline">{product.category}</Link>
              <span>›</span>
              <span className="text-gray-400">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Image Section (4 columns) */}
              <div className="lg:col-span-4 space-y-4">
                  <div className="aspect-square bg-white border border-gray-100 flex items-center justify-center p-4 relative group overflow-hidden rounded-sm">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-125" 
                      />
                  </div>
              </div>

              {/* Content Section (5 columns) */}
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-200 pr-0 lg:pr-10">
                  <h1 className="text-2xl font-bold text-[#131921] leading-tight mb-2 uppercase tracking-tight">{product.name}</h1>
                  <Link to="/shop" className="text-sm font-bold text-blue-600 hover:text-[#C7511F] hover:underline mb-4 block">Visit the Sialkot Factory Store</Link>
                  
                  {/* Rating Row */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                     <div className="flex text-[#FFA41C]">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1.5} />)}
                     </div>
                     <span className="text-xs font-bold text-blue-600 hover:text-[#C7511F] cursor-pointer">{product.reviews.toLocaleString()} ratings</span>
                  </div>

                  <div className="flex flex-col mb-6">
                     <div className="flex items-baseline gap-2">
                        <span className="text-sm text-red-600 font-medium">-15%</span>
                        <div className="flex items-baseline gap-1">
                           <span className="text-xs font-bold">$</span>
                           <span className="text-3xl font-bold">{product.priceUSD.toFixed(0)}</span>
                           <span className="text-sm font-bold">00</span>
                        </div>
                     </div>
                     <span className="text-xs text-gray-500">Typical marketplace price: <span className="line-through">${(product.priceUSD * 1.15).toFixed(0)}.00</span></span>
                  </div>

                  {/* Marketplace Benefits */}
                  <div className="grid grid-cols-3 gap-2 mb-10 text-center">
                     <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded border border-gray-100 group hover:border-[#FF9900] transition-colors">
                        <RotateCcw size={20} className="text-blue-600" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-black">30-Day Returns</span>
                     </div>
                     <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded border border-gray-100 group hover:border-[#FF9900] transition-colors">
                        <Lock size={20} className="text-[#FF9900]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-black">Secure Core</span>
                     </div>
                     <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded border border-gray-100 group hover:border-[#FF9900] transition-colors">
                        <Truck size={20} className="text-green-600" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-black">USA Sync Ship</span>
                     </div>
                  </div>

                  <div className="space-y-4 mb-10">
                     <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">About this product</h3>
                     <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 font-medium leading-relaxed">
                        <li>Official Sialkot Factory Direct item</li>
                        <li>High-density performance mesh construction</li>
                        <li>Verified for NCAA and Professional league standards</li>
                        <li>Sweat-wicking core technology with thermal regulation</li>
                     </ul>
                  </div>
              </div>

              {/* Buy Box Section (3 columns) */}
              <div className="lg:col-span-3">
                 <div className="border border-gray-300 rounded-lg p-6 space-y-6 shadow-sm sticky top-28 bg-white">
                    <div className="flex flex-col gap-1">
                       <div className="flex items-baseline gap-1">
                          <span className="text-xs font-bold">$</span>
                          <span className="text-3xl font-bold">{product.priceUSD.toFixed(0)}</span>
                          <span className="text-sm font-bold">00</span>
                       </div>
                       <div className="flex items-center gap-1.5 text-blue-600 text-sm font-bold hover:underline cursor-pointer">
                          Free Returns <ChevronDown size={14} />
                       </div>
                       <span className="text-gray-600 text-sm font-medium mt-2">Delivery <span className="text-black font-bold">In 7 Days</span></span>
                    </div>

                    <div className="flex flex-col gap-4">
                       <div>
                          <span className="text-xs font-bold mb-2 block uppercase text-gray-400">Sync Size</span>
                          <select 
                            value={selectedSize} 
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2.5 px-3 text-sm focus:ring-1 focus:ring-[#FF9900] outline-none shadow-inner font-bold"
                          >
                             {product.sizes.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                       </div>

                       <div className="space-y-3">
                         <button
                            onClick={handleAddToCart}
                            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black py-3 rounded-full text-xs font-black shadow-sm transition-all border border-[#FCD200] active:scale-95 transform"
                         >
                            Add to Cart
                         </button>
                         <button
                            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                            className="w-full bg-[#FFA41C] hover:bg-[#F08804] text-black py-3 rounded-full text-xs font-black shadow-sm transition-all border border-[#D58512] active:scale-95 transform"
                         >
                            Buy Now
                         </button>
                       </div>
                    </div>

                    <div className="bg-[#EAEDED]/50 p-4 rounded text-center border border-gray-100">
                       <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">Global Price Verification</p>
                       <button 
                          onClick={handleAmazonCompare}
                          className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-gray-300 rounded text-[10px] font-bold hover:bg-gray-50 transition-colors shadow-sm"
                       >
                          {t('compareAmazon')} <ExternalLink size={12} />
                       </button>
                    </div>
                 </div>
              </div>
          </div>
        </div>

        {/* Amazon-Style "Frequently Bought Together" */}
        <div className="bg-white border border-gray-200 p-8 shadow-sm mb-6">
           <h3 className="text-xl font-bold mb-6">Frequently bought together</h3>
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-6">
                 <div className="w-32 h-32 border border-gray-100 p-2 rounded bg-white">
                    <img src={product.image} className="w-full h-full object-contain" />
                 </div>
                 <Plus className="text-gray-400" size={24} />
                 <div className="w-32 h-32 border border-gray-100 p-2 rounded bg-white">
                    <img src={bundleProduct.image} className="w-full h-full object-contain" />
                 </div>
              </div>
              <div className="flex flex-col gap-4">
                 <div className="text-sm font-medium">
                    <span className="text-gray-500">Total price: </span>
                    <span className="text-lg font-bold text-[#B12704]">${(product.priceUSD + bundleProduct.priceUSD).toFixed(2)}</span>
                 </div>
                 <button 
                   onClick={() => {
                      addToCart(product, product.sizes[0]);
                      addToCart(bundleProduct, bundleProduct.sizes[0]);
                   }}
                   className="bg-[#FFD814] text-black px-10 py-2.5 rounded-md text-xs font-bold border border-[#FCD200] shadow-sm hover:bg-[#F7CA00]"
                 >
                    Add both to Cart
                 </button>
              </div>
           </div>
        </div>

        {/* Amazon-Style "Customer also viewed" */}
        <div className="bg-white border border-gray-200 p-8 shadow-sm">
           <h3 className="text-xl font-bold mb-6">Inspired by your browsing history</h3>
           <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {PRODUCTS.filter(p => p.id !== product.id).slice(0, 10).map(p => (
                <div key={p.id} className="min-w-[180px] max-w-[180px] flex-shrink-0">
                   <ProductCard product={p} />
                </div>
              ))}
           </div>
        </div>
    </div>
  );
};

// Simplified helper
const ChevronDown = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default ProductDetails;
