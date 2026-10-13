import React from 'react';
import { Recycle, ShieldCheck, Trees, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  scrollToTop: () => void;
  openDonationModal: () => void;
  scrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToTop, openDonationModal, scrollToSection }) => {
  const { t, language } = useLanguage();
  const isZh = language === 'zh';

  return (
    <footer className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A]/95 text-white text-xs border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-10">
        
        {/* Top Impact Metric Header Bar matching Sleek Interface Footer */}
        <div className="bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-8 sm:gap-16 items-center justify-center md:justify-start">
            <div className="flex flex-col">
              <span className="text-[#059669] font-black text-3xl font-display">322+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">{t('footer.itemsSaved', 'Items Saved')}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#059669] font-black text-3xl font-display">17,892+ RMB</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">{t('footer.familySavings', 'Family Savings')}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#059669] font-black text-3xl font-display">924kg+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">{t('footer.co2Diverted', 'CO2 Diverted')}</span>
            </div>
          </div>

          <button
            onClick={openDonationModal}
            className="bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs px-6 py-3.5 rounded-2xl transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Recycle className="w-4 h-4" />
            <span>{t('footer.donatePreLoved', 'Donate Pre-Loved Uniforms')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-bold shadow-xs">
                <Recycle className="w-6 h-6" />
              </div>
              <span className="font-black text-2xl text-white font-display tracking-tight">
                {t('footer.brand', 'Uniform Recycling')}
              </span>
            </div>
            
            <p className="text-[#94A3B8] leading-relaxed">
              {t('footer.tagline', 'A community-powered non-profit school uniform recycling project. Empowering families with affordable, eco-sanitized schoolwear while cutting textile waste in our schools.')}
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#34D399] font-bold">
              <Trees className="w-4 h-4 text-[#059669]" />
              <span>{t('footer.partnerSchools', "Partnered with St. Jude's Academy & Regional Schools")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider font-display">{t('footer.navigation', 'Navigation')}</h4>
            <ul className="space-y-2 text-[#94A3B8] font-medium">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white cursor-pointer">{t('nav.recycling', 'Uniform Recycling')}</button></li>
              <li><button onClick={() => scrollToSection('about-us')} className="hover:text-white cursor-pointer">{t('nav.aboutUs', 'About Us')}</button></li>
              <li><button onClick={() => scrollToSection('survey')} className="hover:text-white cursor-pointer">{t('nav.survey', 'Survey & Intention')}</button></li>
              <li><button onClick={() => scrollToSection('store')} className="hover:text-white cursor-pointer">{t('nav.store', 'Uniform Store')}</button></li>
              <li><button onClick={() => scrollToSection('calculator')} className="hover:text-white cursor-pointer">{t('footer.ecoCalculator', 'Eco Calculator')}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white cursor-pointer">{t('nav.contact', 'Contact & Drop-offs')}</button></li>
            </ul>
          </div>

          {/* Recycled Categories */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider font-display">{t('footer.garmentCategories', 'Garment Categories')}</h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li><span>{t('footer.blazers', 'Official Embroidered Blazers')}</span></li>
              <li><span>{t('footer.jumpers', 'Knit V-Neck Jumpers & Cardigans')}</span></li>
              <li><span>{t('footer.shirts', 'Cotton Polo Shirts & Shirts')}</span></li>
              <li><span>{t('footer.skirts', 'Pleated Skirts & School Trousers')}</span></li>
              <li><span>{t('footer.sports', 'PE Sport Kits & House Ties')}</span></li>
            </ul>
          </div>

          {/* Drop-off Callout */}
          <div className="md:col-span-3 space-y-3 bg-[#1E293B] p-5 rounded-2xl border border-slate-800">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider flex items-center gap-1.5 font-display">
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              <span>{t('footer.outgrownTitle', 'Outgrown Uniforms?')}</span>
            </h4>
            <p className="text-[11px] text-[#94A3B8] leading-relaxed">
              {t('footer.outgrownDesc', "Donate your child's pre-loved uniform items at any partner school reception desk or request a home pickup kit.")}
            </p>
            <button
              onClick={openDonationModal}
              className="w-full bg-[#DCFCE7] hover:bg-emerald-200 text-[#166534] font-extrabold text-xs py-2.5 rounded-xl transition-all cursor-pointer text-center"
            >
              {t('footer.donateNow', 'Donate Items Now')}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8]">
          <div>
            © {new Date().getFullYear()} {t('footer.copyright', 'Uniform Recycling Group. All Rights Reserved.')}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={scrollToTop} className="hover:text-white flex items-center gap-1 cursor-pointer font-bold">
              <span>{t('footer.backToTop', 'Back to Top')}</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#059669]" />
            </button>
          </div>
        </div>

        {/* Web Designer & Contact Credit in Bright Yellow */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center sm:justify-between gap-3 text-xs font-bold" style={{ color: '#FFE600' }}>
          <div className="flex items-center gap-2">
            <span>{isZh ? '网页开发者:骆弈帆' : 'Web Designer: Raven Luo'}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="mailto:ravenluo0705@gmail.com"
              className="hover:underline transition-opacity hover:opacity-90"
              style={{ color: '#FFE600' }}
            >
              Email:ravenluo0705@gmail.com
            </a>
          </div>
        </div>

        </div>
      </div>
    </footer>
  );
};
