import React, { useState, useMemo } from 'react';
import { UniformItem, UniformCategory, ConditionGrade } from '../types';
import { SAMPLE_SCHOOLS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Tag, 
  Package, 
  Check, 
  SlidersHorizontal,
  Layers,
  ArrowUpDown
} from 'lucide-react';

interface StoreCatalogProps {
  items: UniformItem[];
  onSelectItem: (item: UniformItem) => void;
  onAddToCart: (item: UniformItem) => void;
  savedItemIds: string[];
  onToggleSave: (id: string) => void;
  searchQueryFilter: string;
  setSearchQueryFilter: (val: string) => void;
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
  const { t, translateCategory, translateCondition, language } = useLanguage();
  const isZh = language === 'zh';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price_low' | 'price_high' | 'savings'>('recommended');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: isZh ? '全部品类' : 'All Categories' },
    { id: 'blazer', label: isZh ? '外套/冲锋衣/西装' : 'Blazers & Jackets' },
    { id: 'jumper', label: isZh ? '卫衣/针织衫' : 'Sweatshirts & Jumpers' },
    { id: 'polo', label: isZh ? 'Polo衫/衬衫' : 'Polo & Shirts' },
    { id: 'trouser', label: isZh ? '长裤/运动裤' : 'Trousers & Pants' },
    { id: 'skirt', label: isZh ? '短裙/百褶裙' : 'Skirts' },
    { id: 'pe_kit', label: isZh ? '运动装备/短裤' : 'PE Sports Kits' },
    { id: 'accessory', label: isZh ? '领带/配饰' : 'Ties & Accessories' },
  ];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // School filter
      if (selectedSchool !== 'all' && item.schoolId !== selectedSchool) {
        return false;
      }
      // Condition filter
      if (selectedCondition !== 'all' && item.condition !== selectedCondition) {
        return false;
      }
      // Search query
      if (searchQueryFilter.trim()) {
        const query = searchQueryFilter.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesPhoto = item.photoName ? item.photoName.toLowerCase().includes(query) : false;
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesSize = item.size.toLowerCase().includes(query);
        const matchesSchool = item.schoolName.toLowerCase().includes(query);
        if (!matchesTitle && !matchesPhoto && !matchesDesc && !matchesSize && !matchesSchool) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_low') return a.price - b.price;
      if (sortBy === 'price_high') return b.price - a.price;
      if (sortBy === 'savings') {
        const savA = a.originalRetailPrice - a.price;
        const savB = b.originalRetailPrice - b.price;
        return savB - savA;
      }
      return 0; // recommended default
    });
  }, [items, selectedCategory, selectedSchool, selectedCondition, searchQueryFilter, sortBy]);

  const handleQuickAdd = (e: React.MouseEvent, item: UniformItem) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedAnimationId(item.id);
    setTimeout(() => setAddedAnimationId(null), 1200);
  };

  return (
    <div id="store" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Catalog Banner & Bundle Banner */}
      <div className="bg-linear-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            {isZh ? '100% 专业高温蒸汽消毒 · 如新质感' : '60°C Steam Sanitized · 100% Quality Checked'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight">
            {isZh ? '优质二手校园校服精选' : 'Pre-Loved Verified School Uniforms'}
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            {isZh 
              ? '所有衣物均经过严格人工质检、无损修整及高温消毒，让每件校服在孩子间温暖传递，为家庭节省开支、为地球减负。' 
              : 'Every piece is sanitized, inspected, and verified with all official school badges intact. Save up to 80% compared to brand new uniform retail.'}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onAddBundleToCart('school-all')}
              className="bg-emerald-400 hover:bg-emerald-300 text-emerald-950 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Package className="w-4 h-4" />
              {isZh ? '一键加购热门校服开学套装 (享额外15%优惠)' : 'Add Back-to-School Bundle (Save Extra 15%)'}
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 space-y-4">
        
        {/* Top Controls: Search and Sorter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQueryFilter}
              onChange={(e) => setSearchQueryFilter(e.target.value)}
              placeholder={isZh ? '搜索校服、品类、尺码或学校...' : 'Search by uniform title, size, keyword or school...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all"
            />
            {searchQueryFilter && (
              <button
                onClick={() => setSearchQueryFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold px-1.5 py-0.5"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 shrink-0">
              <ArrowUpDown className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isZh ? '排序方式:' : 'Sort:'}</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              <option value="recommended">{isZh ? '推荐精选' : 'Recommended'}</option>
              <option value="price_low">{isZh ? '价格: 从低到高' : 'Price: Low to High'}</option>
              <option value="price_high">{isZh ? '价格: 从高到低' : 'Price: High to Low'}</option>
              <option value="savings">{isZh ? '最高节省额度' : 'Biggest Savings'}</option>
            </select>
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Secondary Filters */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-1 font-bold text-slate-700">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span>{isZh ? '精准筛选:' : 'Filter:'}</span>
          </div>

          {/* School Select */}
          <select
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
            className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-xs font-medium focus:ring-1 focus:ring-emerald-500"
          >
            <option value="all">{isZh ? '全部学校 / 通用校服' : 'All Partner Schools'}</option>
            {SAMPLE_SCHOOLS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          {/* Condition Select */}
          <select
            value={selectedCondition}
            onChange={(e) => setSelectedCondition(e.target.value)}
            className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-xs font-medium focus:ring-1 focus:ring-emerald-500"
          >
            <option value="all">{isZh ? '全部成色状态' : 'All Conditions'}</option>
            <option value="New with Tags">{isZh ? '全新带吊牌' : 'New with Tags'}</option>
            <option value="Like New">{isZh ? '几乎全新 (99新)' : 'Like New'}</option>
            <option value="Very Good">{isZh ? '良好成色 (95新)' : 'Very Good'}</option>
            <option value="Good">{isZh ? '日常好成色 (90新)' : 'Good'}</option>
          </select>

          {(selectedCategory !== 'all' || selectedSchool !== 'all' || selectedCondition !== 'all' || searchQueryFilter) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSchool('all');
                setSelectedCondition('all');
                setSearchQueryFilter('');
              }}
              className="text-emerald-700 hover:text-emerald-900 font-bold underline text-xs cursor-pointer ml-auto"
            >
              {isZh ? '重置所有筛选' : 'Reset Filters'}
            </button>
          )}
        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
        <span>
          {isZh ? `找到 ${filteredItems.length} 件符合条件的校服` : `Showing ${filteredItems.length} available items`}
        </span>
        <span className="text-emerald-700 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          {isZh ? '支持学校前台自提 / 环保物流送货' : 'Campus Pickup & Eco Home Delivery Available'}
        </span>
      </div>

      {/* Product Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8 space-y-4">
          <Package className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">
            {isZh ? '未找到匹配的校服项目' : 'No Uniform Items Found'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {isZh ? '尝试放宽筛选条件，或直接提交捐赠与求购需求，我们会在校内库存到货时第一时间通知您。' : 'Try adjusting your search filters or check back soon as new school batches arrive daily.'}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedSchool('all');
              setSelectedCondition('all');
              setSearchQueryFilter('');
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            {isZh ? '查看全部可用校服' : 'View All Available Items'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isSaved = savedItemIds.includes(item.id);
            const savings = item.originalRetailPrice - item.price;
            const savingsPct = Math.round((savings / item.originalRetailPrice) * 100);
            const isJustAdded = addedAnimationId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col cursor-pointer relative"
              >
                {/* Image & Badges Container */}
                <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Savings Pill */}
                  <div className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                    {isZh ? `省 ${savingsPct}%` : `Save ${savingsPct}%`}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(item.id);
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                      isSaved
                        ? 'bg-rose-50 text-rose-500 fill-rose-500'
                        : 'bg-white/90 text-slate-400 hover:text-rose-500 hover:bg-white'
                    }`}
                    title={isSaved ? 'Remove from Wishlist' : 'Save to Wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Condition Tag bottom */}
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {translateCondition(item.condition)}
                  </div>

                  {/* Photo Name Pill */}
                  {item.photoName && (
                    <div className="absolute top-10 left-3 bg-slate-800/85 backdrop-blur-xs text-slate-100 text-[9px] font-mono font-medium px-2 py-0.5 rounded-md border border-slate-700/50">
                      {item.photoName}
                    </div>
                  )}

                  {/* Stock count */}
                  <div className="absolute bottom-3 right-3 bg-emerald-950/80 backdrop-blur-xs text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {isZh ? `库存: ${item.stockCount} 件` : `${item.stockCount} in stock`}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                      <span>{item.schoolName}</span>
                      <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[10px] font-bold">
                        {item.size}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-sm text-slate-900 line-clamp-1 group-hover:text-emerald-700 transition-colors font-display">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                  {/* Price and Add Button */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-emerald-700 font-display">
                          ¥{item.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ¥{item.originalRetailPrice.toFixed(2)}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold block">
                        {isZh ? `立省 ¥${savings.toFixed(2)}` : `Save ¥${savings.toFixed(2)}`}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleQuickAdd(e, item)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs active:scale-95 cursor-pointer ${
                        isJustAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{isZh ? '已加入' : 'Added!'}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>{isZh ? '加购' : 'Add'}</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
