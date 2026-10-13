import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Leaf, 
  Droplets, 
  Coins, 
  Scale, 
  Share2, 
  Sparkles, 
  Check, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Flame, 
  RefreshCw,
  ArrowRight,
  Zap,
  Globe2
} from 'lucide-react';

export const EcoImpactCalculator: React.FC = () => {
  const { t, language } = useLanguage();
  const isZh = language === 'zh';

  const [blazerCount, setBlazerCount] = useState(1);
  const [jumperCount, setJumperCount] = useState(2);
  const [shirtCount, setShirtCount] = useState(3);
  const [bottomCount, setBottomCount] = useState(2);
  const [peKitCount, setPeKitCount] = useState(1);
  const [copied, setCopied] = useState(false);

  // Calculations
  const totalItems = blazerCount + jumperCount + shirtCount + bottomCount + peKitCount;

  const waterSavedLiters = (
    blazerCount * 4500 +
    jumperCount * 2700 +
    shirtCount * 1800 +
    bottomCount * 3200 +
    peKitCount * 2100
  );

  const co2SavedKg = Number((
    blazerCount * 12.5 +
    jumperCount * 8.2 +
    shirtCount * 5.1 +
    bottomCount * 9.0 +
    peKitCount * 6.4
  ).toFixed(1));

  const dollarsSaved = (
    blazerCount * 55 +
    jumperCount * 30 +
    shirtCount * 18 +
    bottomCount * 22 +
    peKitCount * 32
  );

  const wasteDivertedKg = Number((
    blazerCount * 0.8 +
    jumperCount * 0.45 +
    shirtCount * 0.25 +
    bottomCount * 0.5 +
    peKitCount * 0.35
  ).toFixed(1));

  const showerCount = Math.round(waterSavedLiters / 65);
  const treesPlanted = Math.max(1, Math.round(co2SavedKg / 2.5));

  const handleCopyImpact = () => {
    const text = isZh
      ? `🌱 通过绿色校服回收调剂项目，我们家庭节省了 $${dollarsSaved} 开支，节约水资源 ${waterSavedLiters.toLocaleString()} 升（相当于 ${showerCount} 次淋浴），减排 ${co2SavedKg} kg 碳排放（相当于植树 ${treesPlanted} 棵）！#校服循环 #绿色校园`
      : `🌱 By choosing pre-loved school uniforms through GreenThread, our family saved $${dollarsSaved}, saved ${waterSavedLiters.toLocaleString()}L of water (~${showerCount} showers), and prevented ${co2SavedKg}kg of CO2 emissions (~${treesPlanted} trees planted)! #UniformRecycling #SustainableSchooling`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="calculator" className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-xl border border-white/60 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
            <span>{t('eco.badge', 'Interactive Eco Impact Calculator')}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0F172A] font-display tracking-tight">
            {t('eco.title', "Calculate Your Family's Green Savings")}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t('eco.subtitle', 'See the real environmental and financial impact of choosing recycled school uniforms for your children.')}
          </p>
        </div>

        {/* Main Interactive Calculator Area */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Input Item Sliders/Counters */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-base font-bold text-gray-900 flex items-center justify-between">
              <span>{t('eco.annualNeeds', 'Select Annual Uniform Items Needed:')}</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-3 py-1 rounded-full">
                {totalItems} {isZh ? t('eco.garmentsTotal', '件校服总计') : (totalItems === 1 ? 'Garment Total' : 'Garments Total')}
              </span>
            </h3>

            <div className="space-y-4 text-xs font-medium text-gray-700">
              
              {/* Blazer Counter */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">{t('eco.blazersLabel', 'School Blazers / Formal Jackets')}</span>
                  <span className="font-extrabold text-emerald-700 text-sm">{blazerCount}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={blazerCount}
                    onChange={(e) => setBlazerCount(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>
                <div className="text-[10px] text-gray-500 flex justify-between">
                  <span>{t('eco.newRetail', 'New retail: ~$')}65.00</span>
                  <span className="text-emerald-700 font-semibold">{t('eco.recycledPrice', 'Recycled: ~$')}12.00</span>
                </div>
              </div>

              {/* Jumper Counter */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">{t('eco.jumpersLabel', 'Knit Jumpers & Cardigans')}</span>
                  <span className="font-extrabold text-emerald-700 text-sm">{jumperCount}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="6"
                    value={jumperCount}
                    onChange={(e) => setJumperCount(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>
                <div className="text-[10px] text-gray-500 flex justify-between">
                  <span>{t('eco.newRetail', 'New retail: ~$')}38.00</span>
                  <span className="text-emerald-700 font-semibold">{t('eco.recycledPrice', 'Recycled: ~$')}8.00</span>
                </div>
              </div>

              {/* Shirts Counter */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">{t('eco.shirtsLabel', 'Polo Shirts / Button Collar Shirts')}</span>
                  <span className="font-extrabold text-emerald-700 text-sm">{shirtCount}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={shirtCount}
                    onChange={(e) => setShirtCount(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>
                <div className="text-[10px] text-gray-500 flex justify-between">
                  <span>{t('eco.newRetail', 'New retail: ~$')}22.00</span>
                  <span className="text-emerald-700 font-semibold">{t('eco.recycledPrice', 'Recycled: ~$')}5.00</span>
                </div>
              </div>

              {/* Trousers / Skirts */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">{t('eco.bottomsLabel', 'Trousers, Shorts & Pleated Skirts')}</span>
                  <span className="font-extrabold text-emerald-700 text-sm">{bottomCount}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="8"
                    value={bottomCount}
                    onChange={(e) => setBottomCount(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>
                <div className="text-[10px] text-gray-500 flex justify-between">
                  <span>{t('eco.newRetail', 'New retail: ~$')}28.00</span>
                  <span className="text-emerald-700 font-semibold">{t('eco.recycledPrice', 'Recycled: ~$')}7.00</span>
                </div>
              </div>

              {/* PE Kit */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">{t('eco.peKitsLabel', 'PE & Sports Activity Kits')}</span>
                  <span className="font-extrabold text-emerald-700 text-sm">{peKitCount}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={peKitCount}
                    onChange={(e) => setPeKitCount(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>
                <div className="text-[10px] text-gray-500 flex justify-between">
                  <span>{t('eco.newRetail', 'New retail: ~$')}42.00</span>
                  <span className="text-emerald-700 font-semibold">{t('eco.recycledPrice', 'Recycled: ~$')}9.50</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Calculated Impact Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between space-y-6 shadow-xl border border-emerald-700">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-700/60 pb-3">
                <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-300">
                  {t('eco.estimatedImpact', 'Your Estimated Impact')}
                </span>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-2.5 py-0.5 rounded-full font-semibold">
                  {t('eco.oneYear', '1 Academic Year')}
                </span>
              </div>

              {/* Impact Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Dollars Saved */}
                <div className="bg-emerald-950/60 border border-emerald-600/40 p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span>{t('eco.moneySaved', 'Family Money Saved')}</span>
                  </div>
                  <div className="text-2xl font-black text-amber-300 font-display">
                    ${dollarsSaved}
                  </div>
                  <div className="text-[10px] text-emerald-200">
                    {t('eco.moneyEquiv', 'vs new retail uniform stores')}
                  </div>
                </div>

                {/* Water Saved */}
                <div className="bg-emerald-950/60 border border-emerald-600/40 p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Droplets className="w-4 h-4 text-sky-400" />
                    <span>{t('eco.waterSaved', 'Water Preserved')}</span>
                  </div>
                  <div className="text-2xl font-black text-sky-300 font-display">
                    {waterSavedLiters.toLocaleString()} {t('eco.waterUnit', 'Liters')}
                  </div>
                  <div className="text-[10px] text-emerald-200">
                    {t('eco.waterEquiv', 'Equal to ~{count} domestic showers').replace('{count}', showerCount.toString())}
                  </div>
                </div>

                {/* CO2 Saved */}
                <div className="bg-emerald-950/60 border border-emerald-600/40 p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span>{t('eco.co2Prevented', 'CO₂ Emissions Prevented')}</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-300 font-display">
                    {co2SavedKg} {isZh ? '公斤' : 'kg'}
                  </div>
                  <div className="text-[10px] text-emerald-200">
                    {t('eco.co2Equiv', 'Equal to planting ~{count} trees').replace('{count}', treesPlanted.toString())}
                  </div>
                </div>

                {/* Textile Waste */}
                <div className="bg-emerald-950/60 border border-emerald-600/40 p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Scale className="w-4 h-4 text-emerald-300" />
                    <span>{t('eco.wasteDiverted', 'Landfill Waste Diverted')}</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-200 font-display">
                    {wasteDivertedKg} {isZh ? '公斤' : 'kg'}
                  </div>
                  <div className="text-[10px] text-emerald-200">
                    {t('eco.wasteEquiv', 'Zero-waste textile loop')}
                  </div>
                </div>

              </div>
            </div>

            {/* Share / Copy Result Button */}
            <div className="pt-2 border-t border-emerald-700/60 space-y-2">
              <button
                onClick={handleCopyImpact}
                className="w-full bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>{t('eco.shareCopied', 'Impact Summary Copied to Clipboard!')}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>{t('eco.shareBtn', 'Share / Copy My Family Eco Badge')}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

        {/* Textile Lifecycle Comparison Section */}
        <div className="space-y-6 pt-6 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <h3 className="text-xl font-black text-gray-900 font-display">
              {t('eco.breakdownTitle', 'Textile Lifecycle Comparison')}
            </h3>
            <p className="text-xs text-gray-500">
              {t('eco.breakdownSubtitle', 'Why uniform recycling creates a dramatic reduction in resource consumption:')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* New Garment Footprint */}
            <div className="bg-rose-50/60 border border-rose-200/80 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs">
                  ✕
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900 font-display">
                    {t('eco.newGarment', 'Brand New Garment')}
                  </h4>
                  <span className="text-[10px] text-rose-700 font-semibold">{isZh ? '高耗水、高碳排传统供应链' : 'High environmental drain model'}</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>{t('eco.virginCotton', 'Virgin cotton farming & pesticide use')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>{t('eco.syntheticDyes', 'Industrial chemical dye runoff')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>{t('eco.fastFashion', 'Short 9-month average lifespan')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>{t('eco.landfillEnd', '100% destined for municipal landfill')}</span>
                </li>
              </ul>
            </div>

            {/* Recycled Circular Loop */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900 font-display">
                    {t('eco.recycledGarment', 'GreenThread Recycled')}
                  </h4>
                  <span className="text-[10px] text-emerald-700 font-semibold">{isZh ? '零废弃、闭环社区循环模式' : 'Zero-waste circular lifecycle'}</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>{t('eco.zeroAgriculture', 'Zero agricultural resource drain')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>{t('eco.gentleSteam', 'Hypo-allergenic steam sanitization')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>{t('eco.extendedLife', 'Re-worn for 2–3 additional academic cycles')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>{t('eco.closedLoop', 'Closed-loop community redistribution')}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Collective Community Milestones */}
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200/80 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              {isZh ? '社区累积成效' : 'Community Cumulative Progress'}
            </span>
            <h4 className="text-lg font-bold text-gray-900 font-display">
              {t('eco.communityGoalTitle', 'Community Collective Green Milestones')}
            </h4>
            <p className="text-xs text-gray-500">
              {t('eco.communityGoalSubtitle', 'Our network of partner schools and families have achieved together:')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            
            <div className="bg-white p-4 rounded-2xl border border-gray-200/70 shadow-2xs space-y-1">
              <div className="text-2xl font-black text-indigo-600 font-display">322+</div>
              <div className="text-xs font-bold text-gray-800">{t('eco.totalGarmentsSaved', 'Garments Saved from Waste')}</div>
              <div className="text-[10px] text-gray-500">{isZh ? '100%经过60°C高温消毒' : '100% steam sanitized'}</div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200/70 shadow-2xs space-y-1">
              <div className="text-2xl font-black text-amber-600 font-display">17,892+ RMB</div>
              <div className="text-xs font-bold text-gray-800">{t('eco.totalFamiliesHelped', 'Families Supported')}</div>
              <div className="text-[10px] text-gray-500">{isZh ? '累计为家庭节省开支 (RMB)' : 'Total family budget saved'}</div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200/70 shadow-2xs space-y-1">
              <div className="text-2xl font-black text-emerald-600 font-display">924 kg+</div>
              <div className="text-xs font-bold text-gray-800">{t('eco.totalCo2Prevented', 'Total Carbon Prevented')}</div>
              <div className="text-[10px] text-gray-500">{isZh ? '累计减少二氧化碳排放' : 'CO₂ emissions diverted'}</div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200/70 shadow-2xs space-y-1">
              <div className="text-2xl font-black text-sky-600 font-display">1.12M L</div>
              <div className="text-xs font-bold text-gray-800">{t('eco.totalWaterDiverted', 'Total Water Preserved')}</div>
              <div className="text-[10px] text-gray-500">{isZh ? '节约珍贵水资源' : 'Potable water conserved'}</div>
            </div>

          </div>
        </div>

        </div>
      </div>
    </section>
  );
};
