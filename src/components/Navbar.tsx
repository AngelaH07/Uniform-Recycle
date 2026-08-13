import React from 'react';
import { Recycle, ShoppingBag, Heart, Search, Truck, MapPin, Sparkles, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  openCart: () => void;
  openDonationModal: () => void;
  openOrderTracker: () => void;
  savedCount: number;
  openSavedModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  openDonationModal,
  openOrderTracker,
  savedCount,
  openSavedModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { id: 'about', label: t('nav.recycling', 'Uniform Recycling') },
    { id: 'store', label: t('nav.store', 'Uniform Store') },
    { id: 'calculator', label: t('nav.eco', 'Eco Impact') },
    { id: 'contact', label: t('nav.contact', 'Contact & Drop-offs') },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-[#0F172A] text-white px-4 py-2 text-xs font-medium text-center flex flex-wrap items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#059669] animate-pulse" />
        <span className="text-[#94A3B8]">{t('banner.active', 'Community Uniform Recycling & Swap Drive Active! Free delivery on school pickup orders.')}</span>
        <button 
          onClick={openDonationModal}
          className="text-[#059669] hover:underline font-bold ml-1 cursor-pointer"
        >
          {t('banner.donateLink', 'Donate Pre-Loved Uniforms →')}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#059669] rounded-xl flex items-center justify-center text-white shadow-sm group-hover:bg-[#047857] transition-colors">
              <Recycle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl sm:text-2xl tracking-tight text-[#0F172A] font-display">
                  {t('nav.recycling', 'Uniform Recycling')}
                </span>
                <span className="bg-[#DCFCE7] text-[#166534] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider hidden xs:inline">
                  {t('nav.hub', 'Community Hub')}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-[#64748B]">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#059669] font-black'
                      : 'hover:text-[#0F172A]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 border border-slate-200 rounded-xl transition-all cursor-pointer shadow-2xs"
              title="Switch Language / 切换语言"
            >
              <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-black uppercase tracking-wider">{language === 'en' ? '中文' : 'English'}</span>
            </button>

            {/* Track Order */}
            <button
              onClick={openOrderTracker}
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#1E293B] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
              title="Track your pickup or delivery"
            >
              <Truck className="w-4 h-4 text-[#059669]" />
              <span>{t('nav.trackOrder', 'Track Order')}</span>
            </button>

            {/* Saved Items */}
            <button
              onClick={openSavedModal}
              className="relative p-2.5 text-[#64748B] hover:text-[#059669] hover:bg-[#DCFCE7]/50 rounded-xl transition-colors cursor-pointer"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm shadow-emerald-100 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden xs:inline">{t('nav.basket', 'Basket')}</span>
              {cartCount > 0 && (
                <span className="bg-[#0F172A] text-white text-xs px-2 py-0.5 rounded-full font-extrabold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Donate Primary CTA */}
            <button
              onClick={openDonationModal}
              className="hidden md:flex items-center gap-2 bg-[#1E293B] hover:bg-[#334155] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Recycle className="w-4 h-4 text-[#34D399]" />
              <span>{t('nav.donate', 'Donate Items')}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#64748B] hover:text-[#0F172A] focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === link.id
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-slate-100 text-slate-800 font-bold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 border border-slate-200"
            >
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>{language === 'en' ? '切换为中文 (Chinese)' : 'Switch to English'}</span>
            </button>

            <button
              onClick={() => {
                openDonationModal();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-emerald-600 text-white font-bold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-xs"
            >
              <Recycle className="w-4 h-4" />
              <span>{t('nav.donate', 'Donate Items')}</span>
            </button>

            <button
              onClick={() => {
                openOrderTracker();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gray-100 text-gray-800 font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4 text-emerald-700" />
              <span>{t('nav.trackOrder', 'Track Existing Order')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

