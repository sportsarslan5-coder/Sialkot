
import React, { useState, useMemo, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Star, ShoppingCart, CheckCircle, MessageCircle, Shield, ShoppingBag, ExternalLink, Globe, Truck, Lock, RotateCcw } from 'lucide-react';
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
    <div className="max-w-[1500px] mx-auto px-4 py-8 animate-fade-in bg-white border border-gray-200 my-4 shadow-sm">
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
                <div className="aspect-square bg-white border border-gray-100 flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain cursor-zoom-in" 
                    />
                </div>
            </div>

            {/* Content Section (5 columns) */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-200 pr-0 lg:pr-10">
                <h1 className="text-2xl font-bold text-[#131921] leading-tight mb-2">{product.name}</h1>
                <Link to="/shop" className="text-sm font-bold text-blue-600 hover:text-[#C7511F] hover:underline mb-4 block">Visit the Sialkot Store</Link>
                
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
                   <span className="text-xs text-gray-500">Typical price: <span className="line-through">${(product.priceUSD * 1.15).toFixed(0)}.00</span></span>
                </div>

                {/* Benefits List (Amazon style) */}
                <div className="space-y-4 text-sm mb-8">
                   <div className="flex items-start gap-3">
                      <Shield size={18} className="text-[#FF9900]" />
                      <p><span className="font-bold">Authenticity Guarantee:</span> Every item verified by Sialkot Core protocol.</p>
                   </div>
                   <div className="flex items-start gap-3">
                      <Globe size={18} className="text-blue-600" />
                      <p><span className="font-bold">Marketplace Sync:</span> Verified global pricing model active.</p>
                   </div>
                   <div className="flex items-start gap-3">
                      <Truck size={18} className="text-[#232F3E]" />
                      <p><span className="font-bold">Fast Fulfillment:</span> 7-day express to major USA hubs.</p>
                   </div>
                </div>

                <div className="space-y-2 mb-10">
                   <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">About this item</h3>
                   <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 font-medium">
                      <li>Sialkot Factory-Direct Performance</li>
                      <li>High-durability sweat-wicking mesh chassis</li>
                      <li>Reinforced stitching for collegiate and pro-am play</li>
                      <li>Authentic USA Varsity sizing and cut</li>
                   </ul>
                </div>
            </div>

            {/* Buy Box Section (3 columns) */}
            <div className="lg:col-span-3">
               <div className="border border-gray-300 rounded-lg p-6 space-y-6 shadow-sm sticky top-28">
                  <div className="flex flex-col gap-1">
                     <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold">$</span>
                        <span className="text-3xl font-bold">{product.priceUSD.toFixed(0)}</span>
                        <span className="text-sm font-bold">00</span>
                     </div>
                     <span className="text-blue-600 text-sm font-bold">Free Returns</span>
                     <span className="text-gray-600 text-sm font-bold">Delivery <span className="text-black">Wednesday, Dec 27</span></span>
                  </div>

                  <div className="flex flex-col gap-4">
                     <div>
                        <span className="text-xs font-bold mb-2 block uppercase text-gray-400">Select Size</span>
                        <select 
                          value={selectedSize} 
                          onChange={(e) => setSelectedSize(e.target.value)}
                          className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-1 focus:ring-[#FF9900] outline-none shadow-inner font-bold"
                        >
                           {product.sizes.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                     </div>

                     <button
                        onClick={handleAddToCart}
                        className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black py-2.5 rounded-full text-xs font-black shadow-sm transition-colors border border-[#FCD200]"
                     >
                        Add to Cart
                     </button>
                     <button
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                        className="w-full bg-[#FFA41C] hover:bg-[#F08804] text-black py-2.5 rounded-full text-xs font-black shadow-sm transition-colors border border-[#D58512]"
                     >
                        Buy Now
                     </button>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-gray-100">
                     <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-gray-500">Ships from</span>
                        <span className="text-black">Sialkot Global</span>
                     </div>
                     <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-gray-500">Sold by</span>
                        <span className="text-black">Sialkot Shop Factory</span>
                     </div>
                     <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-gray-500">Returns</span>
                        <span className="text-blue-600">Eligible for 30-day sync</span>
                     </div>
                     <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-gray-500">Payment</span>
                        <span className="text-blue-600">Secure Protocol</span>
                     </div>
                  </div>

                  <div className="bg-[#EAEDED] p-4 rounded text-center">
                     <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Global Price Verification</p>
                     <button 
                        onClick={handleAmazonCompare}
                        className="flex items-center justify-center gap-2 w-full py-2 bg-white border border-gray-300 rounded text-[10px] font-bold hover:bg-gray-50 transition-colors"
                     >
                        {t('compareAmazon')} <ExternalLink size={12} />
                     </button>
                  </div>
               </div>
            </div>
        </div>
    </div>
  );
};

export default ProductDetails;
