import React, { useState } from 'react';
import { UniformCategory, ConditionGrade, DonationItemInput, DonationSubmission } from '../types';
import { SAMPLE_SCHOOLS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Recycle, 
  Plus, 
  Trash2, 
  Upload, 
  MapPin, 
  CheckCircle2, 
  Coins, 
  Printer, 
  QrCode
} from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitDonation: (submission: DonationSubmission) => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  onSubmitDonation,
}) => {
  if (!isOpen) return null;

  const { t, translateCategory, translateCondition, language } = useLanguage();
  const isZh = language === 'zh';

  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [schoolName, setSchoolName] = useState("St. Jude's Academy");
  const [pickupMethod, setPickupMethod] = useState<'school_dropoff' | 'home_pickup' | 'mail_in'>('school_dropoff');
  const [dropoffLocation, setDropoffLocation] = useState("St. Jude's Main Reception Green Bin");
  const [homeAddress, setHomeAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('2026-08-18');
  
  const [items, setItems] = useState<DonationItemInput[]>([
    {
      category: 'blazer',
      size: '11-12 yrs',
      condition: 'Very Good',
      quantity: 1,
      hasSchoolBadge: true,
      notes: isZh ? '清洁完好无破损' : 'Clean, no tear'
    }
  ]);

  const [completedSubmission, setCompletedSubmission] = useState<DonationSubmission | null>(null);

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        category: 'jumper',
        size: '9-10 yrs',
        condition: 'Good',
        quantity: 1,
        hasSchoolBadge: true,
      }
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const handleItemChange = (index: number, field: keyof DonationItemInput, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const calculateCredits = () => {
    return items.reduce((acc, item) => {
      const base = item.category === 'blazer' ? 15 : item.category === 'jumper' ? 10 : 5;
      return acc + (base * item.quantity);
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !email || !phone) return;

    const submission: DonationSubmission = {
      id: `DONATE-${Math.floor(100000 + Math.random() * 900000)}`,
      donorName,
      email,
      phone,
      schoolName,
      items,
      pickupMethod,
      dropoffLocation: pickupMethod === 'school_dropoff' ? dropoffLocation : undefined,
      address: pickupMethod === 'home_pickup' ? homeAddress : undefined,
      preferredDate,
      status: 'Pending',
      createdAt: new Date().toISOString().split('T')[0],
      estimatedCredits: calculateCredits(),
    };

    onSubmitDonation(submission);
    setCompletedSubmission(submission);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-emerald-100 relative p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!completedSubmission ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Modal Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
                <Recycle className="w-3.5 h-3.5" />
                <span>{t('donation.portalBadge', 'Uniform Recycling & Swap Portal')}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 font-display">
                {t('donation.title', 'Donate or Trade-in Pre-Loved School Uniforms')}
              </h2>
              <p className="text-xs text-gray-600">
                {t('donation.subtitle', 'Outgrown blazers, jumpers, or polo shirts? Drop them off to earn recycling credits and help another school family.')}
              </p>
            </div>

            {/* Step 1: Donor Details */}
            <div className="space-y-3 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
              <h3 className="text-xs font-extrabold text-emerald-900 uppercase tracking-wider">
                {t('donation.step1', '1. Contact & School Details')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">{t('donation.fullName', 'Your Full Name')} *</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">{t('donation.email', 'Email Address')} *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">{t('donation.phone', 'Phone Number')} *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 019-2834"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-white focus:outline-hidden focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">{t('donation.school', 'Primary School / Institution')}</label>
                  <select
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-white focus:outline-hidden font-medium"
                  >
                    {SAMPLE_SCHOOLS.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Items to Donate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">
                  {t('donation.step3', '3. Garments You Want To Donate')} ({items.length})
                </h3>
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="text-xs bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t('donation.addItem', '+ Add Another Garment')}</span>
                </button>
              </div>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200 text-xs space-y-2 relative">
                    {items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(idx)}
                        className="absolute top-2.5 right-2.5 text-gray-400 hover:text-rose-600 p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div>
                        <label className="block text-gray-600 font-semibold text-[10px]">{t('donation.cat', 'Category')}</label>
                        <select
                          value={item.category}
                          onChange={(e) => handleItemChange(idx, 'category', e.target.value)}
                          className="w-full p-1.5 border border-gray-200 rounded-lg bg-white"
                        >
                          <option value="blazer">{translateCategory('blazer')}</option>
                          <option value="jumper">{translateCategory('jumper')}</option>
                          <option value="polo">{translateCategory('polo')}</option>
                          <option value="trouser">{translateCategory('trouser')}</option>
                          <option value="skirt">{translateCategory('skirt')}</option>
                          <option value="pe_kit">{translateCategory('pe_kit')}</option>
                          <option value="accessory">{translateCategory('accessory')}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-600 font-semibold text-[10px]">{t('donation.size', 'Size')}</label>
                        <select
                          value={item.size}
                          onChange={(e) => handleItemChange(idx, 'size', e.target.value)}
                          className="w-full p-1.5 border border-gray-200 rounded-lg bg-white"
                        >
                          <option value="5-6 yrs">5-6 yrs</option>
                          <option value="7-8 yrs">7-8 yrs</option>
                          <option value="9-10 yrs">9-10 yrs</option>
                          <option value="11-12 yrs">11-12 yrs</option>
                          <option value="13-14 yrs">13-14 yrs</option>
                          <option value="15-16 yrs">15-16 yrs</option>
                          <option value="One Size">One Size</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-600 font-semibold text-[10px]">{t('donation.cond', 'Condition')}</label>
                        <select
                          value={item.condition}
                          onChange={(e) => handleItemChange(idx, 'condition', e.target.value)}
                          className="w-full p-1.5 border border-gray-200 rounded-lg bg-white"
                        >
                          <option value="Like New">{translateCondition('Like New')}</option>
                          <option value="Very Good">{translateCondition('Very Good')}</option>
                          <option value="Good">{translateCondition('Good')}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-600 font-semibold text-[10px]">{t('donation.qty', 'Quantity')}</label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(idx, 'quantity', Number(e.target.value))}
                          className="w-full p-1.5 border border-gray-200 rounded-lg bg-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-1 border-t border-gray-200/60">
                      <label className="flex items-center gap-1.5 cursor-pointer text-gray-700 font-medium">
                        <input
                          type="checkbox"
                          checked={item.hasSchoolBadge}
                          onChange={(e) => handleItemChange(idx, 'hasSchoolBadge', e.target.checked)}
                          className="rounded-sm accent-emerald-600"
                        />
                        <span>{t('donation.badgeCheckbox', 'Includes Official Embroidered School Crest/Badge')}</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Pickup or Drop-off Method */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">
                {t('donation.step2', '2. Collection Method')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPickupMethod('school_dropoff')}
                  className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                    pickupMethod === 'school_dropoff'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
                  <div className="font-bold">{t('donation.schoolDropoff', 'Drop off at School Reception (Free)')}</div>
                  <div className="text-[10px] text-gray-500">{t('donation.dropoffDesc', 'Drop your bag directly into the marked GreenThread eco box.')}</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPickupMethod('home_pickup')}
                  className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                    pickupMethod === 'home_pickup'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Recycle className="w-4 h-4 text-emerald-600 mb-1" />
                  <div className="font-bold">{t('donation.homePickup', 'Home Courier Pickup')}</div>
                  <div className="text-[10px] text-gray-500">{isZh ? '环保回收专车预约' : 'Free community van'}</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPickupMethod('mail_in')}
                  className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                    pickupMethod === 'mail_in'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Upload className="w-4 h-4 text-emerald-600 mb-1" />
                  <div className="font-bold">{isZh ? '邮寄投递' : 'Prepaid Postal Tag'}</div>
                  <div className="text-[10px] text-gray-500">{isZh ? '打印免邮寄件标签' : 'Print shipping label'}</div>
                </button>
              </div>

              {pickupMethod === 'school_dropoff' && (
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-xs">
                  <label className="block text-gray-700 font-semibold mb-1">{isZh ? '选择学校前台接待处：' : 'Select Reception Drop Location:'}</label>
                  <select
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    className="w-full p-2 border border-gray-200 rounded-lg bg-white"
                  >
                    {SAMPLE_SCHOOLS.map((s) => (
                      <option key={s.id} value={`${s.name} - ${s.collectionPoint}`}>
                        {s.name} ({s.collectionPoint})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {pickupMethod === 'home_pickup' && (
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-xs">
                  <label className="block text-gray-700 font-semibold mb-1">{t('donation.homeAddress', 'Home Street Address')}:</label>
                  <input
                    type="text"
                    required
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                    placeholder={isZh ? '街道地址，门牌号，城市，邮编' : 'Street address, city, zip code'}
                    className="w-full p-2 border border-gray-200 rounded-lg bg-white"
                  />
                </div>
              )}
            </div>

            {/* Estimated Reward Banner */}
            <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl flex items-center justify-between text-xs text-amber-900">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <span className="font-bold">{t('donation.estimatedCredits', 'Estimated Eco Recycling Credits:')} </span>
                  <span>{calculateCredits()} {isZh ? '积分（每5分抵扣$1）' : 'Points ($1 credit per 5 points)'}</span>
                </div>
              </div>
              <span className="text-[10px] bg-amber-200 font-extrabold px-2 py-0.5 rounded-full">{isZh ? '自动计算' : 'Automated'}</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3.5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Recycle className="w-5 h-5" />
              <span>{t('donation.submit', 'Generate Donation & Drop-Off Pass')}</span>
            </button>

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {t('donation.passTitle', 'Donation Pass Generated!')}
              </span>
              <h2 className="text-2xl font-black text-gray-900 font-display">
                {isZh ? `感谢您的爱心与支持，${completedSubmission.donorName}！` : `Thank You, ${completedSubmission.donorName}!`}
              </h2>
              <p className="text-xs text-gray-600 max-w-md mx-auto">
                {isZh ? (
                  <>您的校服捐赠投递请求 <strong>#{completedSubmission.id}</strong> 已成功登记，您已获得 <strong>{completedSubmission.estimatedCredits} 环保调剂积分</strong>！</>
                ) : (
                  <>Your uniform donation request <strong>#{completedSubmission.id}</strong> is registered. You earned <strong>{completedSubmission.estimatedCredits} Eco Credits</strong>!</>
                )}
              </p>
            </div>

            {/* Drop Off Pass Card */}
            <div className="bg-emerald-950 text-white p-6 rounded-2xl max-w-md mx-auto text-left space-y-4 shadow-xl border border-emerald-700">
              <div className="flex items-center justify-between border-b border-emerald-800 pb-3">
                <div>
                  <div className="text-xs text-emerald-300 font-semibold">{t('donation.passId', 'Donation Pass Code')}</div>
                  <div className="font-mono text-lg font-black text-white">{completedSubmission.id}</div>
                </div>
                <QrCode className="w-10 h-10 text-emerald-400" />
              </div>

              <div className="space-y-1.5 text-xs text-emerald-100">
                <div><strong>{t('donation.fullName', 'Donor')}:</strong> {completedSubmission.donorName}</div>
                <div><strong>{t('donation.school', 'School')}:</strong> {completedSubmission.schoolName}</div>
                <div><strong>{isZh ? '捐赠件数:' : 'Items:'}</strong> {completedSubmission.items.length} {isZh ? '件校服' : 'garment(s)'}</div>
                <div><strong>{isZh ? '交付方式:' : 'Method:'}</strong> {completedSubmission.pickupMethod === 'school_dropoff' ? completedSubmission.dropoffLocation : (isZh ? '上门回收' : 'Home Collection')}</div>
                <div><strong>{isZh ? '状态:' : 'Status:'}</strong> <span className="text-emerald-300 font-bold">{isZh ? '凭证生效中（随时前往投递）' : 'Pass Active (Drop off anytime)'}</span></div>
              </div>
            </div>

            {/* Instructions list */}
            <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl text-left text-xs space-y-1 max-w-md mx-auto border border-emerald-200">
              <div className="font-bold">{t('donation.dropInstructions', 'Drop-Off Instructions:')}</div>
              <div>1. {t('donation.instruction1', 'Place clean garments in a reusable bag.')}</div>
              <div>2. {t('donation.instruction2', 'Write your Donation Pass Code on the bag label.')}</div>
              <div>3. {t('donation.instruction3', 'Deposit at your school reception desk or green collection box.')}</div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>{t('donation.printVoucher', 'Print Voucher')}</span>
              </button>

              <button
                onClick={() => {
                  setCompletedSubmission(null);
                  onClose();
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                {t('donation.done', 'Done')}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
