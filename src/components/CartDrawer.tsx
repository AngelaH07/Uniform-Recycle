import React, { useState } from 'react';
import { CartItem, Order } from '../types';
import { SAMPLE_SCHOOLS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Building2, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  Copy, 
  Check,
  ExternalLink,
  ClipboardList,
  AlertCircle,
  FileText
} from 'lucide-react';

const PURCHASE_FORM_URL = 'https://www.wjx.top/vm/mcN5csM.aspx';

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

  const { t, translateCondition, language } = useLanguage();
  const isZh = language === 'zh';

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
  const [listCopied, setListCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

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
      setPromoMessage(isZh ? '已享受10%绿色环保社区折扣！' : '10% Eco Community Discount Applied!');
    } else if (code === 'SWAPCREDIT' || code === 'GREENPOINTS') {
      const disc = Math.min(10, subtotal);
      setDiscountAmount(disc);
      setPromoMessage(isZh ? '已抵扣 ¥10 校服回收调剂积分！' : '¥10 Recycling Credit Applied!');
    } else {
      setPromoMessage(isZh ? '无效优惠码。可尝试 ECO10 或 SWAPCREDIT' : 'Invalid promo code. Try ECO10 or SWAPCREDIT');
    }
  };

  const handleCopyCartSummary = () => {
    if (items.length === 0) return;
    const itemsText = items
      .map((ci, idx) => `${idx + 1}. ${ci.item.title} (尺码: ${ci.item.size}) x${ci.quantity} - ¥${(ci.item.price * ci.quantity).toFixed(2)}`)
      .join('\n');
    const summaryText = isZh 
      ? `【绿色循环校服选购清单】\n${itemsText}\n-------------------\n商品小计: ¥${subtotal.toFixed(2)}\n折扣优惠: -¥${discountAmount.toFixed(2)}\n总计金额: ¥${total.toFixed(2)}\n购买登记问卷链接: ${PURCHASE_FORM_URL}`
      : `[GreenThread Recycled Uniform Order List]\n${itemsText}\n-------------------\nSubtotal: ¥${subtotal.toFixed(2)}\nDiscount: -¥${discountAmount.toFixed(2)}\nEstimated Total: ¥${total.toFixed(2)}\nPurchase Form Link: ${PURCHASE_FORM_URL}`;
    
    navigator.clipboard.writeText(summaryText);
    setListCopied(true);
    setTimeout(() => setListCopied(false), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PURCHASE_FORM_URL);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2500);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !email || !phone) return;

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
      estimatedDeliveryOrPickupDate: isZh ? '今日即可自取（学校开放时间内）' : 'Available Today (within school hours)',
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
              {checkoutStep === 'cart' && (isZh ? '您的校服购物车' : 'Your Recycled Uniform Basket')}
              {checkoutStep === 'checkout' && (isZh ? '校服购买与问卷星表单登记' : 'Purchase via Official Form')}
              {checkoutStep === 'confirmation' && (isZh ? '购买表单登记就绪！' : 'Order Ready for Form Submission')}
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
                  <h3 className="font-bold text-gray-900 text-base">{t('cart.empty', 'Your basket is empty.')}</h3>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    {t('cart.emptyDesc', 'Browse our pre-loved uniform store catalog to add blazers, sweaters, shirts, or sports kits.')}
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    {t('cart.startShopping', 'Browse Uniform Catalog')}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  
                  {/* Notice about Questionnaire purchasing system */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="text-xs font-extrabold text-emerald-950">
                          {isZh ? '校服购买与支付说明' : 'Uniform Purchase & Payment Notice'}
                        </h4>
                        <p className="text-[11px] text-emerald-800 leading-relaxed">
                          {isZh 
                            ? '我们暂未开通线上自动收银系统，校服购买及信息登记统一通过官方问卷星进行处理。选好校服后请点击下方链接完成购买：'
                            : 'We do not have an automated online payment system yet. Please click the official questionnaire link to submit your uniform order and details:'}
                        </p>
                      </div>
                    </div>

                    {/* Direct Link Action Card */}
                    <div className="bg-white p-3 rounded-xl border border-emerald-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                          {isZh ? '官方问卷星购买链接' : 'Official Purchase Link'}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                          {isZh ? '点击即达' : 'Direct Link'}
                        </span>
                      </div>
                      
                      <a
                        href={PURCHASE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-2 p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs group"
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <ExternalLink className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="truncate">{isZh ? '👉 点击前往问卷星完成校服购买' : '👉 Click to Purchase via Form'}</span>
                        </div>
                        <span className="text-[10px] font-mono bg-emerald-700 px-1.5 py-0.5 rounded text-emerald-100 shrink-0">
                          wjx.top
                        </span>
                      </a>

                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={handleCopyCartSummary}
                          className="flex-1 flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-100 py-1.5 px-2 rounded-lg transition-colors cursor-pointer"
                        >
                          {listCopied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <ClipboardList className="w-3.5 h-3.5" />}
                          <span>{listCopied ? (isZh ? '清单已复制！' : 'Copied List!') : (isZh ? '复制选购清单' : 'Copy Items List')}</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCopyLink}
                          className="flex items-center justify-center gap-1 text-[11px] font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 py-1.5 px-2.5 rounded-lg transition-colors cursor-pointer"
                        >
                          {linkCopied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{linkCopied ? (isZh ? '链接已复制' : 'Copied Link') : (isZh ? '复制链接' : 'Copy Link')}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium pt-1">
                    <span>{t('cart.itemsSummary', 'Order Items ({count})').replace('{count}', items.length.toString())}</span>
                    <button
                      onClick={onClearCart}
                      className="text-rose-600 hover:underline font-bold cursor-pointer"
                    >
                      {isZh ? '清空购物车' : 'Empty Basket'}
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
                            <span>{t('product.size', 'Size:')} {cartItem.item.size}</span>
                            <span className="text-emerald-700 font-bold">{translateCondition(cartItem.item.condition)}</span>
                          </div>
                          <div className="font-extrabold text-xs text-gray-900 font-display">
                            ¥{cartItem.item.price.toFixed(2)}
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => onRemoveItem(cartItem.item.id)}
                            className="text-gray-400 hover:text-rose-600 p-1 cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white text-xs font-bold">
                            <button
                              onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                              className="px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2">{cartItem.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                              className="px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
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
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">{t('cart.promoCode', 'Promo / Credit Code')}:</label>
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
                        className="bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-gray-800 cursor-pointer"
                      >
                        {t('cart.apply', 'Apply')}
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

          {/* STEP 2: PURCHASE GUIDANCE & QUESTIONNAIRE FORM */}
          {checkoutStep === 'checkout' && (
            <div className="space-y-5 text-xs">
              
              {/* Questionnaire Link Hero Banner */}
              <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white p-5 rounded-2xl shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-emerald-300 font-extrabold text-sm">
                  <FileText className="w-5 h-5" />
                  <span>{isZh ? '问卷星校服购买通道' : 'Official Purchase Questionnaire'}</span>
                </div>

                <p className="text-xs text-emerald-100 leading-relaxed">
                  {isZh 
                    ? '由于暂未开通自动收银支付系统，请点击下方链接进入官方问卷星，填写学生信息、校服款式尺码及自取/收货方式即可完成购买！'
                    : 'We do not have an automated online payment gateway. Please click the official questionnaire link below to complete your uniform order and payment details.'}
                </p>

                {/* Big Direct Button */}
                <a
                  href={PURCHASE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold text-xs py-3.5 px-4 rounded-xl transition-all shadow-md group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{isZh ? '👉 点击前往问卷星完成校服购买' : '👉 Go to Official Purchase Form'}</span>
                </a>

                {/* Direct Link string */}
                <div className="bg-emerald-900/80 p-2.5 rounded-xl border border-emerald-700/60 flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-emerald-200 truncate select-all">
                    {PURCHASE_FORM_URL}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="shrink-0 text-[10px] bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-bold px-2 py-1 rounded-md transition-colors cursor-pointer"
                  >
                    {linkCopied ? (isZh ? '已复制' : 'Copied') : (isZh ? '复制链接' : 'Copy')}
                  </button>
                </div>
              </div>

              {/* Step-by-step Guide */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3">
                <h3 className="font-extrabold text-gray-900 uppercase tracking-wider text-[11px]">
                  {isZh ? '校服购买四步指引' : '4-Step Purchasing Guide'}
                </h3>

                <div className="space-y-2.5 text-gray-700 text-[11px]">
                  <div className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-800 font-bold rounded-full flex items-center justify-center shrink-0 text-[10px]">1</span>
                    <div>
                      <strong className="text-gray-900">{isZh ? '核对并复制选购清单' : 'Review & Copy Order Summary'}</strong>
                      <p className="text-gray-500">{isZh ? '确认您所选校服的款式、尺码与总价，可一键复制清单以便在问卷中核对。' : 'Check selected uniforms, sizes, and price.'}</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-800 font-bold rounded-full flex items-center justify-center shrink-0 text-[10px]">2</span>
                    <div>
                      <strong className="text-gray-900">{isZh ? '点击链接进入问卷星' : 'Open the Questionnaire'}</strong>
                      <p className="text-gray-500">{isZh ? '打开问卷星链接（支持微信、手机或电脑浏览器直接填写）。' : 'Open wjx.top link in any browser or WeChat.'}</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-800 font-bold rounded-full flex items-center justify-center shrink-0 text-[10px]">3</span>
                    <div>
                      <strong className="text-gray-900">{isZh ? '填写学生及自取/收货信息' : 'Fill in Student & Pickup Info'}</strong>
                      <p className="text-gray-500">{isZh ? '填报家长姓名、联系电话、学生班级及学校前台自取或配送地址。' : 'Submit contact details and pickup choice.'}</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-800 font-bold rounded-full flex items-center justify-center shrink-0 text-[10px]">4</span>
                    <div>
                      <strong className="text-gray-900">{isZh ? '完成支付并备货' : 'Complete Payment & Packaging'}</strong>
                      <p className="text-gray-500">{isZh ? '问卷内完成支付后，学校环保服务台将为您打包并通知领取。' : 'School eco desk will prepare and package your uniform.'}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleCopyCartSummary}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-50 rounded-xl font-bold transition-colors cursor-pointer"
                  >
                    {listCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <ClipboardList className="w-4 h-4" />}
                    <span>{listCopied ? (isZh ? '选购清单已复制到剪贴板！' : 'Order List Copied to Clipboard!') : (isZh ? '📋 一键复制当前选购校服清单' : '📋 Copy Selected Uniforms Summary')}</span>
                  </button>
                </div>
              </div>

              {/* Optional Contact form if user also wants local order receipt */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-gray-900 uppercase tracking-wider text-[11px]">
                    {isZh ? '生成本地自取凭证（可选）' : 'Generate Local Pickup Pass (Optional)'}
                  </h3>
                  <span className="text-[10px] text-gray-400">{isZh ? '便携保存' : 'Offline Save'}</span>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">{t('cart.fullName', 'Full Name')} *</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. David Miller"
                    className="w-full p-2 border border-gray-200 rounded-xl bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">{t('cart.email', 'Email Address')}</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="david@example.com"
                      className="w-full p-2 border border-gray-200 rounded-xl bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">{t('cart.phone', 'Phone Number')}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 012-3456"
                      className="w-full p-2 border border-gray-200 rounded-xl bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">{t('cart.selectPickupSchool', 'Select Pickup School Desk')}:</label>
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
              </div>

            </div>
          )}

          {/* STEP 3: ORDER CONFIRMATION */}
          {checkoutStep === 'confirmation' && completedOrder && (
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-gray-900 font-display">
                  {isZh ? '选购登记成功！' : t('cart.orderSuccess', 'Order Placed Successfully!')}
                </h3>
                <p className="text-xs text-gray-600">
                  {t('cart.orderCode', 'Order Reference Code')}:
                </p>
                <div className="inline-flex items-center gap-2 bg-gray-100 font-mono font-bold text-sm px-3 py-1.5 rounded-xl text-gray-900">
                  <span>{completedOrder.id}</span>
                  <button onClick={copyOrderCode} className="text-emerald-700 hover:text-emerald-900 cursor-pointer">
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Wenjuanxing direct prompt */}
              <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-2xl text-left space-y-2">
                <div className="font-extrabold text-xs text-emerald-950 flex items-center gap-1.5">
                  <ExternalLink className="w-4 h-4 text-emerald-700" />
                  <span>{isZh ? '请前往问卷星完成最后购买登记' : 'Complete in Wenjuanxing Form'}</span>
                </div>
                <p className="text-[11px] text-emerald-800">
                  {isZh ? '点击下方链接打开问卷星，附带您的订单号：' : 'Click the link to finalize details in the form:'} <strong className="font-mono">{completedOrder.id}</strong>
                </p>
                <a
                  href={PURCHASE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors"
                >
                  {isZh ? '👉 打开问卷星购买表单 (wjx.top)' : '👉 Open Purchase Form'}
                </a>
              </div>

              {/* QR Receipt Card */}
              <div className="bg-emerald-950 text-white p-5 rounded-2xl text-left space-y-3 shadow-lg">
                <div className="flex items-center justify-between border-b border-emerald-800 pb-2 text-xs">
                  <div>
                    <div className="text-emerald-300 font-bold">{t('cart.pickupPass', 'School Desk Pickup Pass')}</div>
                    <div className="text-[10px] text-emerald-200">{completedOrder.customerName}</div>
                  </div>
                  <QrCode className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="text-xs space-y-1 text-emerald-100">
                  <div><strong>{t('cart.total', 'Total')}:</strong> ¥{completedOrder.total.toFixed(2)}</div>
                  <div><strong>{t('cart.deliveryMethod', 'Method')}:</strong> {completedOrder.deliveryMethod === 'school_pickup' ? t('cart.schoolPickup', 'School Front Desk Pickup (Free)') : t('cart.homeDelivery', 'Eco Home Delivery')}</div>
                  <div><strong>{t('product.condition', 'Status')}:</strong> <span className="text-emerald-300 font-bold">{isZh ? '已就绪等待自取' : completedOrder.status}</span></div>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 italic">
                {t('cart.pickupPassDesc', 'Show this code or barcode at your school reception desk to collect your uniform package.')}
              </p>

            </div>
          )}

        </div>

        {/* Footer Actions / Totals */}
        <div className="p-5 border-t border-gray-200 bg-gray-50 space-y-3">
          
          {checkoutStep !== 'confirmation' && (
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>{t('cart.subtotal', 'Subtotal')}:</span>
                <span className="font-bold text-gray-900">¥{subtotal.toFixed(2)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>{t('cart.discount', 'Discount')}:</span>
                  <span>-¥{discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>{t('cart.delivery', 'Delivery Fee')}:</span>
                <span className="font-bold text-gray-900">
                  {deliveryFee === 0 ? t('cart.freeSchoolPickup', 'Free (School Desk Pickup)') : `¥${deliveryFee.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-sm font-black text-gray-900 pt-2 border-t border-gray-200 font-display">
                <span>{t('cart.total', 'Total')}:</span>
                <span className="text-emerald-800">¥{total.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Action Button Controls */}
          {checkoutStep === 'cart' && items.length > 0 && (
            <div className="space-y-2">
              <a
                href={PURCHASE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>{isZh ? '👉 前往问卷星购买校服' : '👉 Click to Purchase via Form'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setCheckoutStep('checkout')}
                className="w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{isZh ? '查看购买流程与表单指引' : 'View Purchase Guide & Options'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {checkoutStep === 'checkout' && (
            <div className="space-y-2">
              <a
                href={PURCHASE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>{isZh ? '👉 直接前往问卷星完成购买' : '👉 Open Purchase Form (wjx.top)'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs py-2.5 rounded-xl cursor-pointer"
                >
                  {isZh ? '返回购物车' : 'Back to Cart'}
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    if (customerName.trim()) {
                      handlePlaceOrder(e);
                    } else {
                      window.open(PURCHASE_FORM_URL, '_blank');
                    }
                  }}
                  className="w-1/2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{customerName.trim() ? (isZh ? '保存本地凭证' : 'Save Pass') : (isZh ? '打开问卷' : 'Open Form')}</span>
                </button>
              </div>
            </div>
          )}

          {checkoutStep === 'confirmation' && (
            <div className="space-y-2">
              <a
                href={PURCHASE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{isZh ? '前往问卷星提交订单' : 'Go to Form to Finalize'}</span>
              </a>

              <button
                onClick={() => {
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs py-2.5 rounded-xl cursor-pointer"
              >
                {t('cart.continueShopping', 'Continue Shopping')}
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
