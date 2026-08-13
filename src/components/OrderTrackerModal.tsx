import React, { useState } from 'react';
import { Order } from '../types';
import { SAMPLE_SCHOOLS } from '../data/mockData';
import { 
  X, 
  Search, 
  Truck, 
  CheckCircle2, 
  Clock, 
  PackageCheck, 
  Building2, 
  QrCode, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  ordersList: Order[];
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({
  isOpen,
  onClose,
  ordersList,
}) => {
  if (!isOpen) return null;

  const [searchId, setSearchId] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(ordersList[0] || null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;
    const found = ordersList.find(
      (o) => o.id.toLowerCase() === searchId.trim().toLowerCase()
    );
    if (found) {
      setSelectedOrder(found);
    } else {
      alert(`Order "${searchId}" not found. Try one of the demo orders listed below.`);
    }
  };

  const steps = [
    { label: 'Order Received', desc: 'Item reserved in eco depot' },
    { label: 'Inspected & Sanitized', desc: 'Steam cleaned & quality verified' },
    { label: 'Packed & Tagged', desc: 'Sealed in recyclable eco bag' },
    { label: 'Ready for Pickup', desc: 'Available at school reception desk' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-100 relative p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
            <Truck className="w-3.5 h-3.5" />
            <span>Order Fulfillment Tracking</span>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 font-display">
            Track Your Uniform Order
          </h2>
          <p className="text-xs text-gray-600">
            Enter your order reference code (e.g. UNIFORM-8492) to view real-time sanitization and school pickup status.
          </p>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="e.g. UNIFORM-8492"
              className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-xl bg-gray-50 focus:outline-hidden font-mono uppercase font-bold"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            Track Order
          </button>
        </form>

        {/* Pre-stored Demo Orders Quick Selector */}
        {ordersList.length > 0 && (
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-gray-500 uppercase">Select Recent Order:</span>
            <div className="flex flex-wrap gap-2">
              {ordersList.map((ord) => (
                <button
                  key={ord.id}
                  onClick={() => setSelectedOrder(ord)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                    selectedOrder?.id === ord.id
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {ord.id} ({ord.customerName.split(' ')[0]})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected Order Display */}
        {selectedOrder ? (
          <div className="space-y-6 pt-2 border-t border-gray-200">
            
            {/* Order Summary Info Bar */}
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <div className="font-extrabold text-gray-900 text-sm font-display">{selectedOrder.id}</div>
                <div className="text-gray-600">Customer: <strong>{selectedOrder.customerName}</strong> ({selectedOrder.email})</div>
                <div className="text-gray-500 text-[11px]">Ordered on {selectedOrder.createdAt} • Total: ${selectedOrder.total.toFixed(2)}</div>
              </div>

              <div className="bg-emerald-900 text-white font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{selectedOrder.status}</span>
              </div>
            </div>

            {/* Visual Progress Steps */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase">Fulfillment Timeline:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-3 rounded-xl border border-gray-200/80 text-xs space-y-1 relative"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Step 0{idx + 1}</span>
                    </div>
                    <div className="font-bold text-gray-900 text-[11px]">{step.label}</div>
                    <div className="text-[10px] text-gray-500">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collection Instructions & QR */}
            <div className="bg-emerald-950 text-white p-5 rounded-2xl space-y-3 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-xs text-left">
                <div className="font-bold text-emerald-300 text-sm flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>Pickup Location & Hours</span>
                </div>
                <p className="text-emerald-100 leading-relaxed">
                  Present this order code at <strong>St. Jude's Front Reception Desk</strong> (Green Bin #1).
                  Collection hours: Mon-Fri 8:00 AM - 4:00 PM.
                </p>
                <div className="text-[11px] text-emerald-300/90 font-medium">
                  Estimated Ready Date: {selectedOrder.estimatedDeliveryOrPickupDate}
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl text-gray-900 shrink-0 text-center">
                <QrCode className="w-16 h-16 mx-auto text-emerald-950" />
                <span className="text-[9px] font-mono font-bold block mt-1">SCAN AT DESK</span>
              </div>
            </div>

            {/* Itemized Garment List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-900 uppercase">Items in this Order ({selectedOrder.items.length}):</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {selectedOrder.items.map((ci, idx) => (
                  <div key={idx} className="bg-gray-50 p-2.5 rounded-xl border border-gray-200 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={ci.item.imageUrl} alt="" className="w-8 h-8 rounded-lg object-cover" />
                      <div>
                        <div className="font-bold text-gray-900">{ci.item.title}</div>
                        <div className="text-[10px] text-gray-500">Size: {ci.item.size} • Qty: {ci.quantity}</div>
                      </div>
                    </div>
                    <span className="font-extrabold text-gray-900">${(ci.item.price * ci.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-8 text-xs text-gray-500">
            No active order selected.
          </div>
        )}

      </div>
    </div>
  );
};
