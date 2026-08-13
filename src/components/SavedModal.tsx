import React from 'react';
import { UniformItem } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface SavedModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: UniformItem[];
  onRemoveSave: (itemId: string) => void;
  onAddToCart: (item: UniformItem) => void;
}

export const SavedModal: React.FC<SavedModalProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveSave,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-emerald-100 relative p-6 space-y-5">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <Heart className="w-5 h-5 text-rose-500 fill-current" />
          <h3 className="font-extrabold text-base text-gray-900 font-display">
            Saved Wishlist ({savedItems.length})
          </h3>
        </div>

        {savedItems.length === 0 ? (
          <div className="text-center py-10 text-xs text-gray-500 space-y-2">
            <p>You haven't saved any uniform items to your wishlist yet.</p>
            <p>Click the heart icon on any uniform card in the store catalog to save it for later.</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 p-3 rounded-2xl border border-gray-200 flex items-center justify-between gap-3 text-xs"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-12 h-12 rounded-xl object-cover border border-gray-200 shrink-0"
                />

                <div className="flex-1 space-y-0.5">
                  <h4 className="font-bold text-gray-900 line-clamp-1">{item.title}</h4>
                  <div className="text-[10px] text-gray-500">{item.schoolName} • Size: {item.size}</div>
                  <div className="font-extrabold text-gray-900 font-display">${item.price.toFixed(2)}</div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onAddToCart(item)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>

                  <button
                    onClick={() => onRemoveSave(item.id)}
                    className="p-1.5 text-gray-400 hover:text-rose-600 cursor-pointer"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
