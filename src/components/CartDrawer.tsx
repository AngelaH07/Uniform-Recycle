import React, { useState } from 'react';
import { CartItem, Order } from '../types';
import { SAMPLE_SCHOOLS } from '../data/mockData';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Building2, 
  Truck, 
  ShieldCheck, 
  Tag, 
  CheckCircle2, 
  QrCode, 
  Printer, 
  Copy, 
  Check
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onCompleteOrder: (order: Order) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCompleteOrder,
}) => {
  if (!isOpen) return null;

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'confirmation'>('cart');
  
  // Checkout form state
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'school_pickup' | 'home_delivery'>('school_pickup');
  const [pickupSchoolId, setPickupSchoolId] = useState('school-st-judes');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'credits' | 'pay_on_pickup'>('pay_on_pickup');

  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [copied, setCopied] = useState(false);

  // Calculations
  const subtotal = items.reduce((sum, cartItem) => sum + (cartItem.item.price * cartItem.quantity), 0);
  const deliveryFee = deliveryMethod === 'home_delivery' ? 2.99 : 0;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'ECO10' || code === 'RECYCLE10') {
      const disc = Number((subtotal * 0.10).toFixed(2));
      setDiscountAmount(disc);
      setPromoMessage('10% Eco Community Discount Applied!');
    } else if (code === 'SWAPCREDIT' || code === 'GREENPOINTS') {
      const disc = Math.min(10, subtotal);
      setDiscountAmount(disc);
      setPromoMessage('$10 Recycling Credit Applied!');
    } else {
      setPromoMessage('Invalid promo code. Try ECO10 or SWAPCREDIT');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !email || !phone) return;

    const selectedSchool = SAMPLE_SCHOOLS.find(s => s.id === pickupSchoolId);

    const newOrder: Order = {
      id: `UNIFORM-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      email,
      phone,
      items: [...items],
      subtotal,
      discount: discountAmount,
      deliveryFee,
      total,
      deliveryMethod,
      pickupSchoolId: deliveryMethod === 'school_pickup' ? pickupSchoolId : undefined,
      deliveryAddress: deliveryMethod === 'home_delivery' ? { street, city, postalCode } : undefined,
      paymentMethod,
      status: 'Ready for Pickup',
      createdAt: new Date().toISOString().split('T')[0],
      estimatedDeliveryOrPickupDate: 'Available Today (within school hours)',
    };

    onCompleteOrder(newOrder);
    setCompletedOrder(newOrder);
    onClearCart();
    setCheckoutStep('confirmation');
  };

  const copyOrderCode = () => {
    if (completedOrder) {
      navigator.clipboard.writeText(completedOrder.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between relative animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-emerald-900 text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-emerald-300" />
            <h2 className="font-extrabold text-base font-display">
              {checkoutStep === 'cart' && 'Your Recycled Uniform Basket'}
              {checkoutStep === 'checkout' && 'Checkout & Fulfillment'}
              {checkoutStep === 'confirmation' && 'Order Confirmed!'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-emerald-800 text-emerald-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* STEP 1: CART ITEMS */}
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">Your Basket is Empty</h3>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    Browse our pre-loved uniform store catalog to add blazers, sweaters, shirts, or sports kits.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    Start Shopping Uniforms
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>{items.length} item(s) selected</span>
                    <button
                      onClick={onClearCart}
                      className="text-rose-600 hover:underline font-bold"
                    >
                      Empty Basket
                    </button>
                  </div>

                  {/* Item Rows */}
                  <div className="space-y-3">
                    {items.map((cartItem) => (
                      <div
                        key={cartItem.item.id}
                        className="bg-gray-50 p-3 rounded-2xl border border-gray-200 flex gap-3 items-center justify-between"
                      >
                        <img
                          src={cartItem.item.imageUrl}
                          alt={cartItem.item.title}
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 rounded-xl object-cover border border-gray-200 shrink-0"
                        />

                        <div className="flex-1 space-y-1">
                          <h4 className="font-bold text-xs text-gray-900 line-clamp-1">
                            {cartItem.item.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[10px] text-gray-500">
                            <span>Size: {cartItem.item.size}</span>
                            <span className="text-emerald-700 font-bold">{cartItem.item.condition}</span>
                          </div>
                          <div className="font-extrabold text-xs text-gray-900 font-display">
                            ${cartItem.item.price.toFixed(2)}
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => onRemoveItem(cartItem.item.id)}
                            className="text-gray-400 hover:text-rose-600 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white text-xs font-bold">
                            <button
                              onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                              className="px-2 py-0.5 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="px-2">{cartItem.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                              className="px-2 py-0.5 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>

                  {/* Promo Code Input */}
                  <form onSubmit={handleApplyPromo} className="pt-2">
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">Promo Code / Credit Token:</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Try ECO10 or SWAPCREDIT"
                        className="flex-1 px-3 py-1.5 text-xs border border-gray-200 rounded-xl uppercase font-mono"
                      />
                      <button
                        type="submit"
                        className="bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-gray-800"
                      >
                        Apply
                      </button>
                    </div>
                    {promoMessage && (
                      <p className={`text-[10px] font-bold mt-1 ${discountAmount > 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {promoMessage}
                      </p>
                    )}
                  </form>

                </div>
              )}
            </>
          )}

          {/* STEP 2: CHECKOUT FORM */}
          {checkoutStep === 'checkout' && (
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-5 text-xs">
              
              {/* Contact Info */}
              <div className="space-y-3 bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
                <h3 className="font-extrabold text-gray-900 uppercase tracking-wider text-[11px]">
                  1. Parent / Guardian Contact
                </h3>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. David Miller"
                    className="w-full p-2 border border-gray-200 rounded-xl bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="david@example.com"
                      className="w-full p-2 border border-gray-200 rounded-xl bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 012-3456"
                      className="w-full p-2 border border-gray-200 rounded-xl bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="space-y-3 bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
                <h3 className="font-extrabold text-gray-900 uppercase tracking-wider text-[11px]">
                  2. Collection / Delivery Option
                </h3>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('school_pickup')}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      deliveryMethod === 'school_pickup'
                        ? 'bg-emerald-100 border-emerald-600 text-emerald-950 font-bold'
                        : 'bg-white border-gray-200 text-gray-700'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-emerald-700 mb-1" />
                    <div className="font-bold">School Desk Pickup</div>
                    <div className="text-[10px] text-emerald-700 font-extrabold">FREE</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('home_delivery')}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      deliveryMethod === 'home_delivery'
                        ? 'bg-emerald-100 border-emerald-600 text-emerald-950 font-bold'
                        : 'bg-white border-gray-200 text-gray-700'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-emerald-700 mb-1" />
                    <div className="font-bold">Eco Postal Shipping</div>
                    <div className="text-[10px] text-gray-600">$2.99 Fee</div>
                  </button>
                </div>

                {deliveryMethod === 'school_pickup' ? (
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Select Collection School Front Desk:</label>
                    <select
                      value={pickupSchoolId}
                      onChange={(e) => setPickupSchoolId(e.target.value)}
                      className="w-full p-2 border border-gray-200 rounded-xl bg-white font-medium"
                    >
                      {SAMPLE_SCHOOLS.map((s) => (
                        <option key={s.id} value={s.id}>{s.name} ({s.collectionPoint})</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <input
                      type="text"
                      required
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="Street Address"
                      className="w-full p-2 border border-gray-200 rounded-xl bg-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className="w-full p-2 border border-gray-200 rounded-xl bg-white"
                      />
                      <input
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="Postal / Zip Code"
                        className="w-full p-2 border border-gray-200 rounded-xl bg-white"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="space-y-2 bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
                <h3 className="font-extrabold text-gray-900 uppercase tracking-wider text-[11px]">
                  3. Payment Selection
                </h3>

                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-2 p-2 bg-white rounded-xl border border-gray-200 cursor-pointer font-semibold">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'pay_on_pickup'}
                      onChange={() => setPaymentMethod('pay_on_pickup')}
                      className="accent-emerald-600"
                    />
                    <span>Pay Cash/Card on School Pickup ($0 advance fee)</span>
                  </label>

                  <label className="flex items-center gap-2 p-2 bg-white rounded-xl border border-gray-200 cursor-pointer font-semibold">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="accent-emerald-600"
                    />
                    <span>Online Debit/Credit Card (Simulated instant payment)</span>
                  </label>

                  <label className="flex items-center gap-2 p-2 bg-white rounded-xl border border-gray-200 cursor-pointer font-semibold">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'credits'}
                      onChange={() => setPaymentMethod('credits')}
                      className="accent-emerald-600"
                    />
                    <span>Redeem Uniform Donation Credits</span>
                  </label>
                </div>
              </div>

            </form>
          )}

          {/* STEP 3: ORDER CONFIRMATION */}
          {checkoutStep === 'confirmation' && completedOrder && (
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-gray-900 font-display">
                  Order Successfully Reserved!
                </h3>
                <p className="text-xs text-gray-600">
                  Your recycled uniform order reference is:
                </p>
                <div className="inline-flex items-center gap-2 bg-gray-100 font-mono font-bold text-sm px-3 py-1.5 rounded-xl text-gray-900">
                  <span>{completedOrder.id}</span>
                  <button onClick={copyOrderCode} className="text-emerald-700 hover:text-emerald-900">
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* QR Receipt Card */}
              <div className="bg-emerald-950 text-white p-5 rounded-2xl text-left space-y-3 shadow-lg">
                <div className="flex items-center justify-between border-b border-emerald-800 pb-2 text-xs">
                  <div>
                    <div className="text-emerald-300 font-bold">COLLECTION PICKUP PASS</div>
                    <div className="text-[10px] text-emerald-200">{completedOrder.customerName}</div>
                  </div>
                  <QrCode className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="text-xs space-y-1 text-emerald-100">
                  <div><strong>Total Amount:</strong> ${completedOrder.total.toFixed(2)}</div>
                  <div><strong>Pickup Option:</strong> {completedOrder.deliveryMethod === 'school_pickup' ? 'School Reception Desk' : 'Postal Address'}</div>
                  <div><strong>Status:</strong> <span className="text-emerald-300 font-bold">{completedOrder.status}</span></div>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 italic">
                A confirmation receipt with collection guidelines was sent to {completedOrder.email}.
              </p>

            </div>
          )}

        </div>

        {/* Footer Actions / Totals */}
        <div className="p-5 border-t border-gray-200 bg-gray-50 space-y-3">
          
          {checkoutStep !== 'confirmation' && (
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Recycling Discount:</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping / Collection:</span>
                <span className="font-bold text-gray-900">
                  {deliveryFee === 0 ? 'FREE (School Pickup)' : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-sm font-black text-gray-900 pt-2 border-t border-gray-200 font-display">
                <span>Total Amount:</span>
                <span className="text-emerald-800">${total.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Action Button Controls */}
          {checkoutStep === 'cart' && items.length > 0 && (
            <button
              onClick={() => setCheckoutStep('checkout')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Collection / Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {checkoutStep === 'checkout' && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCheckoutStep('cart')}
                className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs py-3.5 rounded-xl cursor-pointer"
              >
                Back to Cart
              </button>
              <button
                type="submit"
                form="checkout-form"
                className="w-2/3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Confirm Order (${total.toFixed(2)})</span>
              </button>
            </div>
          )}

          {checkoutStep === 'confirmation' && (
            <button
              onClick={() => {
                setCheckoutStep('cart');
                onClose();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 rounded-xl cursor-pointer"
            >
              Done & Return to Store
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
