import React, { useState } from 'react';
import { UniformItem } from '../types';
import { 
  X, 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Ruler, 
  Droplets, 
  Leaf, 
  Tag, 
  Share2, 
  Heart,
  Truck,
  Building2,
  Check
} from 'lucide-react';

interface ProductDetailModalProps {
  item: UniformItem | null;
  onClose: () => void;
  onAddToCart: (item: UniformItem, qty: number) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onAddToCart,
  isSaved,
  onToggleSave,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [copied, setCopied] = useState(false);

  const savings = item.originalRetailPrice - item.price;
  const savingsPct = Math.round((savings / item.originalRetailPrice) * 100);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-100 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Column: Image & Badges */}
          <div className="md:col-span-5 bg-gray-50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200">
            <div className="space-y-4">
              <div className="relative aspect-4/3 md:aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                  {item.photoName && (
                    <span className="bg-emerald-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                      📷 {item.photoName}
                    </span>
                  )}
                  <span className="bg-emerald-900/90 backdrop-blur-md text-emerald-100 text-xs font-bold px-3 py-1 rounded-full">
                    {item.schoolName}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-amber-400 text-amber-950 font-black text-xs px-2.5 py-1 rounded-md shadow-xs">
                  {savingsPct}% OFF RETAIL
                </div>
              </div>

              {/* Sanitization Verification Stamp Box */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Sanitization Verification Stamp</span>
                </div>
                <p className="text-[11px] text-emerald-800">
                  Laundered at 60°C & high-pressure steam treated on {item.sanitizedDate}. Hygenic & ready for schoolwear.
                </p>
              </div>

              {/* Eco Savings Callout */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-teal-900">
                  <Droplets className="w-4 h-4 text-sky-600" />
                  <span>Environmental Savings</span>
                </div>
                <p className="text-[11px] text-teal-800">
                  Re-using this {item.category} saves approximately ~2,400L of water and 6.5kg of carbon emissions.
                </p>
              </div>
            </div>

            {/* Wishlist & Share */}
            <div className="flex items-center gap-2 pt-4">
              <button
                onClick={() => onToggleSave(item.id)}
                className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                  isSaved
                    ? 'bg-rose-50 border-rose-300 text-rose-600'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                <span>{isSaved ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                title="Copy Link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Right Column: Title, Measurements, Price & Add to Cart */}
          <div className="md:col-span-7 p-6 lg:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Category & School Badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-gray-100 text-gray-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md uppercase">
                  {item.category}
                </span>
                <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ${
                  item.condition === 'Like New' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                }`}>
                  Condition: {item.condition}
                </span>
                {item.badgePresent && (
                  <span className="bg-indigo-50 text-indigo-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                    ⚜️ Official School Crest
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-xl font-extrabold text-gray-900 font-display leading-snug">
                {item.title}
              </h2>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
                <div className="text-2xl font-black text-gray-900 font-display">
                  ${item.price.toFixed(2)}
                </div>
                <div className="text-xs text-gray-500">
                  <span className="line-through">${item.originalRetailPrice.toFixed(2)} retail</span>
                  <span className="text-emerald-700 font-bold ml-2">Save ${(savings).toFixed(2)}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Size & Measurements */}
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-emerald-600" />
                    <span>Garment Size: {item.size}</span>
                  </span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-[11px] text-emerald-700 font-bold underline hover:text-emerald-900 cursor-pointer"
                  >
                    {showSizeGuide ? 'Hide Size Chart' : 'View Size Chart'}
                  </button>
                </div>

                {item.measurements && (
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-200/60">
                    {item.measurements.chestOrWaist && (
                      <div>Chest/Waist: <strong className="text-gray-900">{item.measurements.chestOrWaist}</strong></div>
                    )}
                    {item.measurements.length && (
                      <div>Back Length: <strong className="text-gray-900">{item.measurements.length}</strong></div>
                    )}
                  </div>
                )}
              </div>

              {/* Size Guide Table Drawer */}
              {showSizeGuide && (
                <div className="bg-white p-3 rounded-xl border border-emerald-200 text-[11px] space-y-2 shadow-inner">
                  <h4 className="font-bold text-gray-900">Standard UK/US School Uniform Size Guide</h4>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500">
                        <th className="py-1">Age Group</th>
                        <th className="py-1">Height</th>
                        <th className="py-1">Chest</th>
                        <th className="py-1">Waist</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                      <tr><td className="py-1 font-semibold">5-6 Yrs</td><td>116 cm</td><td>24" (61cm)</td><td>22" (56cm)</td></tr>
                      <tr><td className="py-1 font-semibold">7-8 Yrs</td><td>128 cm</td><td>26" (66cm)</td><td>23.5" (60cm)</td></tr>
                      <tr><td className="py-1 font-semibold">9-10 Yrs</td><td>140 cm</td><td>28" (71cm)</td><td>25" (64cm)</td></tr>
                      <tr><td className="py-1 font-semibold">11-12 Yrs</td><td>152 cm</td><td>31" (78cm)</td><td>26.5" (67cm)</td></tr>
                      <tr><td className="py-1 font-semibold">13-14 Yrs</td><td>164 cm</td><td>34" (86cm)</td><td>28" (71cm)</td></tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Key Features Bullet List */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-gray-900">Inspected Garment Features:</span>
                <div className="grid grid-cols-2 gap-1.5 text-xs text-gray-700">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pickup / Delivery Notice */}
              <div className="flex items-center gap-3 text-xs text-gray-600 pt-2 border-t border-gray-100">
                <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Available for <strong>Free School Front Desk Pickup</strong> or home delivery.</span>
              </div>

            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-bold text-xs text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(item.stockCount, quantity + 1))}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <div className="text-xs text-emerald-700 font-bold">
                  {item.stockCount > 0 ? `${item.stockCount} Available in Eco Depot` : 'Out of Stock'}
                </div>
              </div>

              <button
                onClick={() => {
                  onAddToCart(item, quantity);
                  onClose();
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3.5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add {quantity} to Basket • ${(item.price * quantity).toFixed(2)}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
