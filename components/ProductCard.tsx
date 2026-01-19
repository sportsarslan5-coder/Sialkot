
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Star, ShoppingCart, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';

const { Link } = ReactRouterDOM as any;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { convertPrice, addToCart, t } = useAppContext();
  const isSpecial = product.id === 36; // Mr Beast Shoe ID

  return (
    <div className="group relative flex flex-col h-full">
      {/* Image Container */}
      <div className={`relative aspect-square overflow-hidden rounded-[1.5rem] bg-gray-100 mb-4 shadow-sm transition-all duration-500 group-hover:shadow-2xl ${isSpecial ? 'ring-2 ring-accent ring-offset-2' : ''}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions - The "Two Things" */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          <Link 
            to={`/product/${product.id}`}
            className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 hover:scale-110 shadow-lg hover:rotate-12"
            title="View Details"
          >
            <Eye size={22} strokeWidth={2} />
          </Link>
          <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product, product.sizes[0]);
            }}
            className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 hover:scale-110 shadow-lg hover:-rotate-12"
            title={t('addToCart')}
          >
            <ShoppingCart size={22} strokeWidth={2} />
          </button>
        </div>

        {/* Badges */}
        {product.rating >= 4.9 && !isSpecial && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm flex items-center gap-1">
                <Star size={10} className="fill-accent text-accent" /> Best Seller
            </div>
        )}
        {isSpecial && (
            <div className="absolute top-3 left-3 bg-accent text-black text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg flex items-center gap-1 animate-pulse-slow">
                <Sparkles size={10} /> Limited Edition
            </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow px-2">
        <div className="flex justify-between items-start mb-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded-full">{product.category}</span>
          <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-1.5 py-0.5 rounded-md">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-bold text-black">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="block group-hover:text-accent transition-colors duration-200">
          <h3 className="text-lg font-bold text-primary leading-tight mb-1.5 line-clamp-1">{product.name}</h3>
        </Link>
        
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <span className={`text-lg font-black ${isSpecial ? 'text-accent' : 'text-primary'}`}>{convertPrice(product.priceUSD)}</span>
          <div className="text-xs text-gray-400 font-medium group-hover:text-black transition-colors">{product.reviews} Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
