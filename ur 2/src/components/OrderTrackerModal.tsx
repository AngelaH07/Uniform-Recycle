import React, { useState } from 'react';
import { Order } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Search, 
  Truck, 
  CheckCircle2, 
  Building2, 
  QrCode
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

  const { t, language } = useLanguage();
  const isZh = language === 'zh';

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
      alert(isZh ? `未找到订单 "${searchId}"。请尝试选择下方的演示订单。` : `Order "${searchId}" not found. Try one of the demo orders listed below.`);
    }
  };

  const steps = isZh ? [
    { label: '订单已接收', desc: '校服已在环保仓库锁定预留' },
    { label: '检验与高温消毒', desc: '完成专业蒸汽清洗与严格质检' },
    { label: '环保打包与挂签', desc: '已使用可生物降解防尘袋封装' },
    { label: '已备好随时自取', desc: '存放在学校前台接待处绿色回收箱' },
  ] : [
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
            <span>{t('tracker.badge', 'Order Fulfillment Tracking')}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 font-display">
            {t('tracker.title', 'Track Your Uniform Order')}
          </h2>
          <p className="text-xs text-gray-600">
            {t('tracker.subtitle', 'Enter your order reference code (e.g. UNIFORM-8492) to view real-time sanitization and school pickup status.')}
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
              placeholder={t('tracker.placeholder', 'e.g. UNIFORM-8492')}
              className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-xl bg-gray-50 focus:outline-hidden font-mono uppercase font-bold"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            {t('tracker.trackBtn', 'Track Order')}
          </button>
        </form>

        {/* Pre-stored Demo Orders Quick Selector */}
        {ordersList.length > 0 && (
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-gray-500 uppercase">{t('tracker.selectRecent', 'Select Recent Order:')}</span>
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
                <div className="text-gray-600">{isZh ? '客户：' : 'Customer:'} <strong>{selectedOrder.customerName}</strong> ({selectedOrder.email})</div>
                <div className="text-gray-500 text-[11px]">{isZh ? `下单日期：${selectedOrder.createdAt} • 总额：` : `Ordered on ${selectedOrder.createdAt} • Total: `}¥{selectedOrder.total.toFixed(2)}</div>
              </div>

              <div className="bg-emerald-900 text-white font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{isZh ? '已就绪等待自取' : selectedOrder.status}</span>
              </div>
            </div>

            {/* Visual Progress Steps */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase">{t('tracker.timeline', 'Fulfillment Timeline:')}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-3 rounded-xl border border-gray-200/80 text-xs space-y-1 relative"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{isZh ? `步骤 0${idx + 1}` : `Step 0${idx + 1}`}</span>
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
                  <span>{t('tracker.pickupLocation', 'Pickup Location & Hours')}</span>
                </div>
                <p className="text-emerald-100 leading-relaxed">
                  {isZh 
                    ? '请在学校前台接待处出示此订单码（绿色回收箱 1号）。开放自取时间：周一至周五 8:00 AM - 4:00 PM。'
                    : "Present this order code at your school's Front Reception Desk (Green Bin #1). Collection hours: Mon-Fri 8:00 AM - 4:00 PM."
                  }
                </p>
                <div className="text-[11px] text-emerald-300/90 font-medium">
                  {isZh ? '预计可自取日期：' : 'Estimated Ready Date: '}{selectedOrder.estimatedDeliveryOrPickupDate}
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl text-gray-900 shrink-0 text-center">
                <QrCode className="w-16 h-16 mx-auto text-emerald-950" />
                <span className="text-[9px] font-mono font-bold block mt-1">{isZh ? '前台核销码' : 'SCAN AT DESK'}</span>
              </div>
            </div>

            {/* Itemized Garment List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-900 uppercase">
                {t('tracker.itemsInOrder', 'Items in this Order ({count}):').replace('{count}', selectedOrder.items.length.toString())}
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {selectedOrder.items.map((ci, idx) => (
                  <div key={idx} className="bg-gray-50 p-2.5 rounded-xl border border-gray-200 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={ci.item.imageUrl} alt="" className="w-8 h-8 rounded-lg object-cover" />
                      <div>
                        <div className="font-bold text-gray-900">{ci.item.title}</div>
                        <div className="text-[10px] text-gray-500">{t('product.size', 'Size:')} {ci.item.size} • {isZh ? '数量：' : 'Qty: '}{ci.quantity}</div>
                      </div>
                    </div>
                    <span className="font-extrabold text-gray-900">¥{(ci.item.price * ci.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-8 text-xs text-gray-500">
            {t('tracker.noOrder', 'No active order selected.')}
          </div>
        )}

      </div>
    </div>
  );
};
