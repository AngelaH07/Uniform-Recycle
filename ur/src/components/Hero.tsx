import React from 'react';
import { HERO_IMAGE, ECO_STATISTICS } from '../data/mockData';
import { Search, ShieldCheck, Leaf, Sparkles, ArrowRight, Recycle, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSearch: (term: string) => void;
  openDonationModal: () => void;
  scrollToStore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, openDonationModal, scrollToStore }) => {
  const [searchInput, setSearchInput] = React.useState('');
  const { t } = useLanguage();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      scrollToStore();
    }
  };

  return (
    <section className="py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Main Surface Advertisement & Introduction Hero Card with Provided Campus Photo Background */}
        <div 
          className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-cover bg-center p-6 sm:p-10 lg:p-12 text-white"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          {/* Subtle dark gradient overlay for optimal legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/40 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Clear Introduction & Advert directly over the campus photo */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-5 text-white">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 bg-[#DCFCE7] text-[#166534] rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                <Leaf className="w-3.5 h-3.5 text-[#059669]" />
                <span>{t('hero.badge', 'Official School Uniform Recycling Drive')}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight font-display text-white [text-shadow:_0_3px_10px_rgba(0,0,0,0.9)]">
                {t('hero.title', 'UNIFORM RECYCLING')}
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#34D399] mt-2 [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]">
                  {t('hero.subtitle', 'Smart for Your Wallet. Kind to Our Planet.')}
                </span>
              </h1>

              {/* Comprehensive Introduction & Advert Body */}
              <div className="space-y-3 text-white max-w-2xl [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]">
                <p className="text-base sm:text-lg font-bold leading-relaxed">
                  {t('hero.intro1', "Welcome to our school's official Uniform Recycling Initiative! Children outgrow school blazers, sweaters, and PE kits every few months. Instead of letting top-quality uniforms sit unused in closets or end up in landfills, our community initiative gives them a fresh second life.")}
                </p>
                <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                  ✨ {t('hero.intro2', 'Save up to 80% on official school blazers, ties, jumpers, and sports kit. Every single item donated is thoroughly inspected, repaired, and steam-sanitized at 60°C to look and feel brand new.')}
                </p>
              </div>

              {/* Search Widget */}
              <form onSubmit={handleSearchSubmit} className="relative max-w-xl pt-1">
                <div className="flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-slate-200 focus-within:ring-2 focus-within:ring-[#059669] transition-all">
                  <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder={t('hero.searchPlaceholder', 'Search uniform item (e.g. Blazer, PE Kit, Polo)...')}
                    className="w-full px-3 py-2 text-sm text-[#0F172A] focus:outline-hidden placeholder-slate-400 font-medium bg-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-1.5 shrink-0"
                  >
                    <span>{t('hero.searchButton', 'Search')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-white drop-shadow-md mt-2 ml-1 flex items-center gap-3 font-semibold">
                  <span className="font-bold text-[#34D399]">{t('hero.popular', 'Popular:')}</span>
                  <button type="button" onClick={() => onSearch("Blazer")} className="hover:text-[#34D399] underline">{t('hero.blazers', 'Blazers')}</button>
                  <button type="button" onClick={() => onSearch("Jumper")} className="hover:text-[#34D399] underline">{t('hero.jumpers', 'Jumpers')}</button>
                  <button type="button" onClick={() => onSearch("PE Kit")} className="hover:text-[#34D399] underline">{t('hero.peKits', 'PE Kits')}</button>
                </p>
              </form>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 items-center pt-2">
                <button
                  onClick={scrollToStore}
                  className="bg-[#059669] hover:bg-[#047857] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>{t('hero.browseStore', 'Browse Pre-Loved Uniforms')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={openDonationModal}
                  className="bg-slate-900/80 hover:bg-slate-900 border border-white/30 text-white px-7 py-3.5 rounded-2xl font-bold text-sm backdrop-blur-md transition-all cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  <Recycle className="w-4 h-4 text-[#34D399]" />
                  <span>{t('hero.donateItems', 'Donate Outgrown Items')}</span>
                </button>
              </div>

            </div>

            {/* Right Column Metrics Badge */}
            <div className="lg:col-span-4 flex flex-col gap-4 justify-center">
              
              {/* Live Eco Metrics Pill */}
              <div className="bg-slate-900/90 border border-white/20 backdrop-blur-md text-white p-4 sm:p-5 rounded-2xl grid grid-cols-3 gap-2 sm:gap-3 text-center text-xs shadow-2xl">
                <div className="space-y-0.5">
                  <span className="text-[#34D399] font-black text-lg sm:text-xl md:text-2xl block font-display leading-tight">
                    322+
                  </span>
                  <span className="text-slate-300 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold block">
                    {t('hero.statItems', 'Items Saved')}
                  </span>
                </div>

                <div className="space-y-0.5 border-x border-white/15 px-1 sm:px-2">
                  <span className="text-[#34D399] font-black text-lg sm:text-xl md:text-2xl block font-display leading-tight">
                    17,892+
                  </span>
                  <span className="text-slate-300 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold block">
                    {t('hero.statSavings', 'Family Saved')} (RMB)
                  </span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[#34D399] font-black text-lg sm:text-xl md:text-2xl block font-display leading-tight">
                    924 kg+
                  </span>
                  <span className="text-slate-300 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold block">
                    {t('hero.statCo2', 'CO₂ Diverted')}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Trust badges footer */}
          <div className="relative z-10 mt-8 pt-4 border-t border-white/15 flex flex-wrap gap-6 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#34D399]" />
              <span>{t('footer.sanitizationStd', '60°C Steam Sanitization Certified')}</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#34D399]" />
              <span>{t('hero.nonprofit', 'Non-Profit Community Drive')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#34D399]" />
              <span>{t('hero.freeDropoff', 'Free Reception Drop-Off')}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


