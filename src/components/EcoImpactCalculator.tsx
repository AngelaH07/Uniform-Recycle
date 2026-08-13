import React, { useState } from 'react';
import { Leaf, Droplets, Coins, Trees, Scale, Share2, Sparkles, Check } from 'lucide-react';

export const EcoImpactCalculator: React.FC = () => {
  const [blazerCount, setBlazerCount] = useState(1);
  const [jumperCount, setJumperCount] = useState(2);
  const [shirtCount, setShirtCount] = useState(3);
  const [bottomCount, setBottomCount] = useState(2);
  const [peKitCount, setPeKitCount] = useState(1);
  const [copied, setCopied] = useState(false);

  // Impact constants per item type
  // Water in Liters, CO2 in kg, Money saved in USD, Waste in kg
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

  const handleCopyImpact = () => {
    const text = `🌱 By choosing pre-loved school uniforms through GreenThread, our family saved $${dollarsSaved}, saved ${waterSavedLiters.toLocaleString()}L of water, and prevented ${co2SavedKg}kg of CO2 emissions! #UniformRecycling #SustainableSchooling`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="calculator" className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-xl border border-white/60 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl space-y-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
            <span>Interactive Eco Impact Calculator</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Calculate Your Family's Green Savings
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            See the real environmental and financial impact of choosing recycled school uniforms for your children.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Input Item Sliders/Counters */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-base font-bold text-gray-900 flex items-center justify-between">
              <span>Select Annual Uniform Items Needed:</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-1 rounded-full">
                {totalItems} {totalItems === 1 ? 'Garment' : 'Garments'} Total
              </span>
            </h3>

            <div className="space-y-4 text-xs font-medium text-gray-700">
              
              {/* Blazer Counter */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">School Blazers / Formal Jackets</span>
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
                  <span>New retail: ~$65.00</span>
                  <span className="text-emerald-700 font-semibold">Recycled: ~$12.00</span>
                </div>
              </div>

              {/* Jumper Counter */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Knit Jumpers & Cardigans</span>
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
                  <span>New retail: ~$38.00</span>
                  <span className="text-emerald-700 font-semibold">Recycled: ~$8.00</span>
                </div>
              </div>

              {/* Shirts Counter */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Polo Shirts / Button Collar Shirts</span>
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
                  <span>New retail: ~$22.00</span>
                  <span className="text-emerald-700 font-semibold">Recycled: ~$5.00</span>
                </div>
              </div>

              {/* Trousers / Skirts */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Trousers, Skirts & Pinafores</span>
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
                  <span>New retail: ~$28.00</span>
                  <span className="text-emerald-700 font-semibold">Recycled: ~$7.00</span>
                </div>
              </div>

              {/* PE Kit */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">PE Sports Kits (Top + Shorts)</span>
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
                  <span>New retail: ~$42.00</span>
                  <span className="text-emerald-700 font-semibold">Recycled: ~$9.50</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Calculated Impact Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between space-y-6 shadow-xl border border-emerald-700">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-700/60 pb-3">
                <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-300">Your Estimated Impact</span>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-2.5 py-0.5 rounded-full font-semibold">
                  1 Academic Year
                </span>
              </div>

              {/* Impact Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Dollars Saved */}
                <div className="bg-emerald-950/60 border border-emerald-600/40 p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span>Family Money Saved</span>
                  </div>
                  <div className="text-2xl font-black text-amber-300 font-display">
                    ${dollarsSaved}
                  </div>
                  <div className="text-[10px] text-emerald-200">vs new retail uniform stores</div>
                </div>

                {/* Water Saved */}
                <div className="bg-emerald-950/60 border border-emerald-600/40 p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Droplets className="w-4 h-4 text-sky-400" />
                    <span>Water Preserved</span>
                  </div>
                  <div className="text-2xl font-black text-sky-300 font-display">
                    {waterSavedLiters.toLocaleString()} L
                  </div>
                  <div className="text-[10px] text-emerald-200">Equivalent to 45 shower days</div>
                </div>

                {/* CO2 Saved */}
                <div className="bg-emerald-950/60 border border-emerald-600/40 p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span>CO2 Emissions Prevented</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-300 font-display">
                    {co2SavedKg} kg
                  </div>
                  <div className="text-[10px] text-emerald-200">Like planting {(co2SavedKg / 2.5).toFixed(0)} trees</div>
                </div>

                {/* Textile Waste */}
                <div className="bg-emerald-950/60 border border-emerald-600/40 p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Scale className="w-4 h-4 text-emerald-300" />
                    <span>Landfill Waste Diverted</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-200 font-display">
                    {wasteDivertedKg} kg
                  </div>
                  <div className="text-[10px] text-emerald-200">Zero-waste textile loop</div>
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
                    <span>Impact Summary Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share / Copy My Family Eco Badge</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

        </div>
      </div>
    </section>
  );
};
