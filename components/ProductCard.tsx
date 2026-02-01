
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Star, ShoppingCart, Eye, Sparkles, Truck, CheckCircle } from 'lucide-react';
import { Product } from '../types';
import { useAppContext } from './AppContext';

const { Link } = ReactRouterDOM as any;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { convertPrice, addToCart, t } = useAppContext();
  const isUniform = product.id >= 801 && product.id <= 821;
  const isBestSeller = product.reviews > 500;

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-3 hover:shadow-lg transition-shadow flex flex-col h-full group relative overflow-hidden">
      {/* Marketplace Badges */}
      {isBestSeller && (
        <div className="absolute top-0 left-0 bg-[#E47911] text-white text-[9px] font-bold px-3 py-1 z-20 shadow-md">
           #1 Best Seller
        </div>
      )}
      {!isBestSeller && product.rating >= 4.9 && (
        <div className="absolute top-0 left-0 bg-[#232F3E] text-white text-[9px] font-bold px-3 py-1 z-20 shadow-md">
           Sialkot's Choice
        </div>
      )}

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden mb-3">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {isUniform && (
          <div className="absolute bottom-2 left-2 bg-blue-600/90 text-white text-[8px] font-black px-2 py-0.5 rounded shadow-lg backdrop-blur-sm">
             GLOBAL SYNC
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="hover:text-[#C7511F] transition-colors">
           <h3 className="text-sm font-medium leading-tight line-clamp-2 h-10 mb-1">{product.name}</h3>
        </Link>
        
        {/* Rating Row (Amazon Style) */}
        <div className="flex items-center gap-1.5 mb-2">
           <div className="flex text-[#FFA41C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1.5} />
              ))}
           </div>
           <ChevronDown size={10} className="text-gray-500" />
           <span className="text-xs text-blue-600 font-medium hover:text-[#C7511F] cursor-pointer">{product.reviews.toLocaleString()}</span>
        </div>

        {/* Price Row */}
        <div className="mt-auto">
           <div className="flex items-baseline gap-1 mb-1">
              <span className="text-xs font-bold">$</span>
              <span className="text-2xl font-bold leading-none">{product.priceUSD.toFixed(0)}</span>
              <span className="text-xs font-bold">00</span>
           </div>
           
           <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">Fulfilled by Sialkot</span>
              <div className="flex items-center gap-0.5">
                 <Truck size={12} className="text-blue-600" />
                 <span className="text-[10px] font-black text-blue-600 uppercase">Express</span>
              </div>
           </div>

           {/* Amazon Amber Button */}
           <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, product.sizes[0]);
              }}
              className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black py-2 rounded-full text-xs font-bold shadow-sm transition-colors border border-[#FCD200] active:scale-95 transform"
           >
              Add to Cart
           </button>
        </div>
      </div>
    </div>
  );
};

// Helper for rating chevron
const ChevronDown = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default ProductCard;
