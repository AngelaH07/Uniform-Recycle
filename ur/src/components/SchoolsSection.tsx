import React from 'react';
import { SAMPLE_SCHOOLS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { Building2, MapPin, Clock, Mail, ShoppingBag, Recycle, ExternalLink } from 'lucide-react';

interface SchoolsSectionProps {
  onSelectSchool: (schoolId: string) => void;
  openDonationModal: () => void;
}

export const SchoolsSection: React.FC<SchoolsSectionProps> = ({
  onSelectSchool,
  openDonationModal,
}) => {
  const { t } = useLanguage();

  return (
    <section id="schools" className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-xl border border-white/60 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t('schools.badge', 'Partner Schools & Drop-off Network')}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 font-display tracking-tight">
            {t('schools.title', 'Our Participating School Partners')}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            {t('schools.subtitle', 'Each partner school hosts an eco drop-off container and acts as a free collection desk for parents.')}
          </p>
        </div>

        {/* School Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_SCHOOLS.map((school) => (
            <div
              key={school.id}
              className="bg-gray-50/70 rounded-3xl p-6 border border-gray-200 shadow-xs hover:shadow-md transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* School Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-xs ${school.badgeBgColor}`}>
                      {school.badgeSymbol}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-gray-900 font-display leading-tight">
                        {school.name}
                      </h3>
                      <span className="text-[11px] font-bold text-gray-500 font-mono">
                        {t('schools.code', 'Code')}: {school.code}
                      </span>
                    </div>
                  </div>

                  <span className="bg-emerald-100 text-emerald-900 text-xs font-extrabold px-3 py-1 rounded-full">
                    {school.activeItemsCount} {t('schools.items', 'Items')}
                  </span>
                </div>

                {/* Info List */}
                <div className="space-y-2.5 text-xs text-gray-700 bg-white p-4 rounded-2xl border border-gray-200/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">{t('schools.collectionPoint', 'Collection Point:')}</strong>
                      <span>{school.collectionPoint}</span>
                      <div className="text-[10px] text-gray-500">{school.address}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
                    <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span><strong>{t('schools.dropHours', 'Drop Hours:')}</strong> {school.dropOffHours}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span><strong>{t('schools.ecoRep', 'Eco Rep:')}</strong> {school.contactEmail}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => onSelectSchool(school.id)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{t('schools.shopUniforms', 'Shop Uniforms')}</span>
                </button>

                <button
                  onClick={openDonationModal}
                  className="bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Recycle className="w-3.5 h-3.5" />
                  <span>{t('schools.dropOffItems', 'Drop Off Items')}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* School Partnership Invitation Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-950 text-white rounded-3xl p-8 lg:p-10 shadow-xl border border-emerald-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="bg-emerald-400 text-emerald-950 text-xs font-black px-3 py-1 rounded-full uppercase">
              {t('schools.notListed', 'Is Your School Not Listed?')}
            </span>
            <h3 className="text-2xl font-black text-white font-display">
              {t('schools.bringTitle', 'Bring GreenThread Recycling To Your School Community')}
            </h3>
            <p className="text-xs text-emerald-100 leading-relaxed">
              {t('schools.bringDesc', 'We provide free eco drop-off boxes, custom collection passes, and volunteer setup for school parent-teacher associations.')}
            </p>
          </div>

          <a
            href="#contact"
            className="bg-amber-400 hover:bg-amber-300 text-amber-950 font-extrabold text-xs px-6 py-3.5 rounded-2xl transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>{t('schools.requestKit', 'Request School Setup Kit')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        </div>
      </div>
    </section>
  );
};
