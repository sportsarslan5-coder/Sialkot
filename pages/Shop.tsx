
import React, { useState, useMemo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Filter, Star, ChevronDown, Grid, List, SortAsc } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const { useLocation } = ReactRouterDOM as any;

const Shop: React.FC = () => {
  const { t, convertPrice } = useAppContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [priceRange, setPriceRange] = useState<number>(200);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState('featured');

  React.useEffect(() => {
     setActiveCategory(searchParams.get('category') || 'All');
  }, [location.search]);

  const categories = ['All', 'Men', 'Women', 'Kids'];

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    result = result.filter(p => p.priceUSD <= priceRange);
    result = result.filter(p => p.rating >= minRating);

    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.priceUSD - b.priceUSD);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.priceUSD - a.priceUSD);
    if (sortBy === 'top-rated') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, priceRange, minRating, sortBy]);

  return (
    <div className="bg-white min-h-screen">
      {/* Search Result Info Bar */}
      <div className="border-b border-gray-200 bg-white py-3 px-6 shadow-sm">
         <div className="max-w-[1600px] mx-auto flex justify-between items-center text-sm font-medium">
            <div className="text-gray-600">
               1-{filteredProducts.length} of {PRODUCTS.length} results for <span className="text-[#C7511F] font-bold italic">"{activeCategory}"</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="text-[11px] uppercase tracking-widest text-gray-400">Sort by:</span>
               <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-100 border border-gray-300 rounded-md px-3 py-1 text-xs font-bold outline-none focus:ring-1 focus:ring-[#FF9900]"
               >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="top-rated">Avg. Customer Review</option>
               </select>
            </div>
         </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-8 flex flex-col lg:flex-row gap-10">
        {/* Amazon-Style Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8 animate-fade-in">
           {/* Category Section */}
           <section>
              <h4 className="text-sm font-bold mb-3 uppercase tracking-tight">Category</h4>
              <ul className="space-y-2">
                 {categories.map(cat => (
                   <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm hover:text-[#C7511F] transition-colors ${activeCategory === cat ? 'text-[#C7511F] font-bold' : 'text-gray-700'}`}
                      >
                         {cat}
                      </button>
                   </li>
                 ))}
              </ul>
           </section>

           {/* Customer Reviews Section */}
           <section>
              <h4 className="text-sm font-bold mb-3 uppercase tracking-tight">Customer Reviews</h4>
              <ul className="space-y-3">
                 {[4, 3, 2, 1].map(stars => (
                   <li key={stars}>
                      <button 
                        onClick={() => setMinRating(stars)}
                        className={`flex items-center gap-1.5 group text-sm ${minRating === stars ? 'font-bold' : ''}`}
                      >
                         <div className="flex text-[#FFA41C]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} fill={i < stars ? "currentColor" : "none"} strokeWidth={1.5} />
                            ))}
                         </div>
                         <span className="text-gray-600 group-hover:text-[#C7511F]">& Up</span>
                      </button>
                   </li>
                 ))}
                 <li>
                    <button onClick={() => setMinRating(0)} className="text-xs text-blue-600 hover:text-[#C7511F]">Clear</button>
                 </li>
              </ul>
           </section>

           {/* Price Section */}
           <section>
              <h4 className="text-sm font-bold mb-3 uppercase tracking-tight">Price Range</h4>
              <div className="space-y-4">
                 <input 
                  type="range" 
                  min="0" 
                  max="200" 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF9900]"
                 />
                 <div className="flex justify-between text-xs font-bold text-gray-500">
                    <span>$0</span>
                    <span className="text-[#C7511F]">${priceRange}</span>
                 </div>
                 <div className="flex gap-2">
                    <button className="text-[10px] bg-white border border-gray-300 rounded px-2 py-1 shadow-sm hover:bg-gray-50">Go</button>
                 </div>
              </div>
           </section>

           {/* New Arrivals */}
           <section className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="text-xs font-black mb-3 uppercase tracking-widest text-gray-400">Sync Spotlight</h4>
              <div className="space-y-4">
                 <div className="flex gap-3 items-center group cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded border border-gray-200 overflow-hidden">
                       <img src={PRODUCTS[1].image} className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <span className="text-[10px] block font-bold group-hover:text-[#C7511F] line-clamp-1">Varsity Pro Kit</span>
                       <span className="text-[10px] text-gray-400">$40.00</span>
                    </div>
                 </div>
              </div>
           </section>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-40 bg-gray-50 rounded-2xl border-4 border-dashed border-gray-100">
              <div className="text-6xl mb-6">🔍</div>
              <h2 className="text-2xl font-black text-gray-300 uppercase tracking-tighter">No items match your sync</h2>
              <p className="text-gray-400 mt-2 font-medium">Try adjusting your price or rating protocols.</p>
              <button 
                onClick={() => {
                   setActiveCategory('All');
                   setPriceRange(200);
                   setMinRating(0);
                }}
                className="mt-8 text-blue-600 font-bold hover:underline"
              >
                Reset Marketplace Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
