import React, { useState, useMemo } from 'react';
import { UniformItem, School, FilterState } from '../types';
import { SAMPLE_SCHOOLS } from '../data/mockData';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  Eye, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Tag, 
  RotateCcw,
  Package,
  Plus
} from 'lucide-react';

interface StoreCatalogProps {
  items: UniformItem[];
  onSelectItem: (item: UniformItem) => void;
  onAddToCart: (item: UniformItem) => void;
  savedItemIds: string[];
  onToggleSave: (itemId: string) => void;
  searchQueryFilter: string;
  setSearchQueryFilter: (term: string) => void;
  onAddBundleToCart: (schoolId: string) => void;
}

export const StoreCatalog: React.FC<StoreCatalogProps> = ({
  items,
  onSelectItem,
  onAddToCart,
  savedItemIds,
  onToggleSave,
  searchQueryFilter,
  setSearchQueryFilter,
  onAddBundleToCart,
}) => {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(20);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'condition-best' | 'newest'>('price-asc');
  const [badgeOnly, setBadgeOnly] = useState<boolean>(false);
  const [showBundleNotice, setShowBundleNotice] = useState<boolean>(true);

  // Filter logic
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Search
      if (searchQueryFilter.trim()) {
        const query = searchQueryFilter.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchSchool = item.schoolName.toLowerCase().includes(query);
        const matchCat = item.category.toLowerCase().includes(query);
        if (!matchTitle && !matchSchool && !matchCat) return false;
      }

      // School
      if (selectedSchoolId !== 'all' && item.schoolId !== selectedSchoolId) {
        return false;
      }

      // Category
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Size
      if (selectedSize !== 'all' && !item.size.toLowerCase().includes(selectedSize.toLowerCase())) {
        return false;
      }

      // Condition
      if (selectedCondition !== 'all' && item.condition !== selectedCondition) {
        return false;
      }

      // Price
      if (item.price > maxPrice) {
        return false;
      }

      // Badge
      if (badgeOnly && !item.badgePresent) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'condition-best') {
        const score = { 'Like New': 3, 'Very Good': 2, 'Good': 1 };
        return score[b.condition] - score[a.condition];
      }
      return b.id.localeCompare(a.id);
    });
  }, [
    items,
    searchQueryFilter,
    selectedSchoolId,
    selectedCategory,
    selectedSize,
    selectedCondition,
    maxPrice,
    sortBy,
    badgeOnly,
  ]);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'blazer', label: 'Blazers & Jackets' },
    { id: 'jumper', label: 'Jumpers & Knitwear' },
    { id: 'polo', label: 'Shirts & Polos' },
    { id: 'trouser', label: 'Trousers' },
    { id: 'skirt', label: 'Skirts' },
    { id: 'pe_kit', label: 'PE Kits' },
    { id: 'accessory', label: 'Ties & Accessories' },
  ];

  const resetFilters = () => {
    setSelectedSchoolId('all');
    setSelectedCategory('all');
    setSelectedSize('all');
    setSelectedCondition('all');
    setMaxPrice(20);
    setSearchQueryFilter('');
    setBadgeOnly(false);
    setSortBy('price-asc');
  };

  return (
    <section id="store" className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-xl border border-white/60 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl space-y-8">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Online Recycled Uniform Store</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 font-display">
              Pre-Loved Uniform Catalog
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Showing {filteredItems.length} verified eco-sanitized garments ready for re-use
            </p>
          </div>

          {/* Quick Filter Reset */}
          {(selectedSchoolId !== 'all' || selectedCategory !== 'all' || searchQueryFilter || badgeOnly) && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-3.5 py-2 rounded-xl font-bold transition-colors cursor-pointer self-start md:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Active Filters</span>
            </button>
          )}
        </div>

        {/* Smart Bundle Promotion Banner */}
        {showBundleNotice && (
          <div className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white rounded-2xl p-5 border border-emerald-600 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center shrink-0">
                <Package className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <span>Need a full uniform kit? Try the Uniform Starter Bundle</span>
                  <span className="bg-amber-400 text-amber-950 text-[10px] font-black px-2 py-0.5 rounded-md">Save Extra 15%</span>
                </h4>
                <p className="text-xs text-emerald-100/90">
                  Includes 1 Blazer, 1 Jumper, 2 Shirts & 1 Trouser/Skirt packaged in a reusable eco bag.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onAddBundleToCart('school-uniforms')}
                className="bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Starter Bundle ($28.00)</span>
              </button>
              <button
                onClick={() => setShowBundleNotice(false)}
                className="text-emerald-300 hover:text-white text-xs px-2 py-1"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-gray-200">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold whitespace-nowrap rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-100 text-emerald-900 font-extrabold border-b-2 border-emerald-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Filters Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQueryFilter}
              onChange={(e) => setSearchQueryFilter(e.target.value)}
              placeholder="Filter title or keyword..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-200 rounded-xl focus:outline-hidden focus:border-emerald-600"
            />
          </div>

          {/* Size Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Size:</span>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-xl p-1.5 focus:outline-hidden bg-white"
            >
              <option value="all">All Sizes</option>
              <option value="5-6">5-6 yrs</option>
              <option value="7-8">7-8 yrs</option>
              <option value="9-10">9-10 yrs</option>
              <option value="11-12">11-12 yrs</option>
              <option value="13-14">13-14 yrs</option>
              <option value="15-16">15-16 yrs</option>
              <option value="One Size">One Size</option>
            </select>
          </div>

          {/* Condition Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Condition:</span>
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-xl p-1.5 focus:outline-hidden bg-white"
            >
              <option value="all">All Conditions</option>
              <option value="Like New">Like New (Mint)</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good Condition</option>
            </select>
          </div>

          {/* Price Range Slider */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-[11px] font-medium text-gray-600">
              <span>Max Price:</span>
              <span className="font-bold text-emerald-700">${maxPrice}.00</span>
            </div>
            <input
              type="range"
              min="3"
              max="20"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full text-xs border border-gray-200 rounded-xl p-1.5 focus:outline-hidden bg-white font-medium"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="condition-best">Best Condition First</option>
              <option value="newest">Recently Listed</option>
            </select>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No Uniform Items Found</h3>
            <p className="text-xs text-gray-500">
              We couldn't find any items matching your selected school or filter parameters. Try broadening your filter or clearing search terms.
            </p>
            <button
              onClick={resetFilters}
              className="bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const isSaved = savedItemIds.includes(item.id);
              const savings = item.originalRetailPrice - item.price;
              
              return (
                <div
                  key={item.id}
                  className="bg-[#F8FAFC] rounded-3xl border border-[#F1F5F9] shadow-xs hover:border-[#059669] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  
                  {/* Image Container */}
                  <div className="relative bg-white aspect-4/3 overflow-hidden border-b border-[#F1F5F9]">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                      {item.photoName && (
                        <span className="bg-[#059669] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                          <span>📷 {item.photoName}</span>
                        </span>
                      )}
                      <span className="bg-[#0F172A]/90 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs">
                        {item.schoolName}
                      </span>
                      {item.badgePresent && (
                        <span className="bg-[#DCFCE7] text-[#166534] text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <span>Official Crest</span>
                        </span>
                      )}
                    </div>

                    {/* Save Heart Button */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                      <button
                        onClick={() => onToggleSave(item.id)}
                        className={`p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                          isSaved
                            ? 'bg-rose-500 text-white'
                            : 'bg-white/90 text-[#64748B] hover:bg-white hover:text-rose-500 border border-[#E2E8F0]'
                        }`}
                        title="Save to Wishlist"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    {/* Condition Tag at Bottom Left */}
                    <div className="absolute bottom-2.5 left-2.5">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs ${
                        item.condition === 'Like New'
                          ? 'bg-[#059669] text-white'
                          : item.condition === 'Very Good'
                          ? 'bg-teal-700 text-white'
                          : 'bg-amber-600 text-white'
                      }`}>
                        {item.condition}
                      </span>
                    </div>

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0F172A]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <button
                        onClick={() => onSelectItem(item)}
                        className="bg-white text-[#0F172A] font-bold text-xs px-4 py-2 rounded-xl shadow-md hover:bg-[#DCFCE7] transition-all flex items-center gap-1.5 cursor-pointer transform translate-y-2 group-hover:translate-y-0"
                      >
                        <Eye className="w-4 h-4 text-[#059669]" />
                        <span>Inspect & Details</span>
                      </button>
                    </div>

                  </div>

                  {/* Product Details Content */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-[#64748B]">
                        <span className="font-bold text-[#1E293B] uppercase tracking-wide">Size: {item.size}</span>
                        <span className="text-[#059669] font-bold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Sanitized
                        </span>
                      </div>

                      <h3 
                        onClick={() => onSelectItem(item)}
                        className="font-bold text-[#0F172A] text-sm line-clamp-2 hover:text-[#059669] transition-colors cursor-pointer leading-snug"
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Price & Retail Savings */}
                    <div className="pt-3 border-t border-[#E2E8F0]/80 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-xl font-black text-[#059669] font-display">
                            ${item.price.toFixed(2)}
                          </span>
                          <span className="text-xs text-[#94A3B8] line-through ml-1.5">
                            ${item.originalRetailPrice.toFixed(2)}
                          </span>
                        </div>

                        <span className="text-[10px] bg-[#DCFCE7] text-[#166534] font-extrabold px-2.5 py-0.5 rounded-full">
                          Save ${savings.toFixed(0)}
                        </span>
                      </div>

                      {/* Action Buttons matching Sleek Interface template */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          onClick={() => onSelectItem(item)}
                          className="w-full py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#1E293B] hover:bg-[#1E293B] hover:text-white transition-colors cursor-pointer text-center"
                        >
                          Details
                        </button>

                        <button
                          onClick={() => onAddToCart(item)}
                          className="w-full py-2 bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs rounded-xl transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-1"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

        </div>
      </div>
    </section>
  );
};
