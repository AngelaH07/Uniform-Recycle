import React from 'react';
import { STACK_IMAGE, TESTIMONIALS } from '../data/mockData';
import { 
  Recycle, 
  Sparkles, 
  ShieldCheck, 
  Coins, 
  Trees, 
  CheckCircle2, 
  ArrowRight,
  Heart,
  Droplets,
  PackageCheck,
  Building2,
  Users
} from 'lucide-react';

interface ProjectInfoProps {
  openDonationModal: () => void;
  scrollToStore: () => void;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ openDonationModal, scrollToStore }) => {
  const processSteps = [
    {
      number: '01',
      title: 'School Drop-Off & Donation',
      desc: 'Parents drop off outgrown, pre-loved school blazers, sweaters, shirts, and skirts at our eco dropboxes located right in partner school reception areas or community hubs.',
      icon: Recycle,
      color: 'bg-[#DCFCE7] text-[#166534] border-[#059669]',
    },
    {
      number: '02',
      title: 'Inspection & Eco Sanitization',
      desc: 'Every garment undergoes 5-point quality inspection: seam checks, button replacement, embroidered crest verification, and high-temperature hypo-allergenic steam laundering.',
      icon: ShieldCheck,
      color: 'bg-[#DCFCE7] text-[#166534] border-[#059669]',
    },
    {
      number: '03',
      title: 'Graded & Cataloged Online',
      desc: 'Clean garments are photographed, condition-graded (Like New, Very Good, Good), tagged with exact size measurements, and uploaded to our online recycling store.',
      icon: PackageCheck,
      color: 'bg-[#DCFCE7] text-[#166534] border-[#059669]',
    },
    {
      number: '04',
      title: 'Affordable Re-Love & Pickup',
      desc: 'Families order online at up to 80% off retail pricing or redeem donation credits. Pickup is free from school front desks or delivered directly to homes.',
      icon: Coins,
      color: 'bg-[#DCFCE7] text-[#166534] border-[#059669]',
    },
  ];

  const qualityStandards = [
    'Zero Stains & Clean Collars',
    'Intact Embroidered Badges & Crests',
    'Fully Functional Zips, Buttons & Hemlines',
    'Hypo-Allergenic Steam Sanitized',
    'Accurate Measurements & Size Tagged',
    '100% Eco-Friendly Recyclable Packaging',
  ];

  return (
    <section id="about" className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-xl border border-white/60 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl space-y-16">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Trees className="w-3.5 h-3.5 text-[#059669]" />
            <span>Our Sustainability Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Bridging Eco-Consciousness & Family Affordability
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed">
            School uniforms are a necessity, but children outgrow them every 6–9 months. Millions of wearable school blazers and shirts end up in landfills, while families spend hundreds on new kit every term. Our community recycling scheme makes school uniforms sustainable, accessible, and affordable for everyone.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 font-display">How The Circular Uniform Recycling Works</h3>
            <p className="text-xs text-gray-500">Simple, transparent, and community-powered in 4 steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl border ${step.color} flex items-center justify-center`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-gray-300 font-display">{step.number}</span>
                    </div>

                    <h4 className="text-base font-bold text-gray-900">{step.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">{step.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Quality Assurance</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Promotional Stack Image & Quality Promise Banner */}
        <div className="bg-white rounded-3xl border border-emerald-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          <div className="lg:col-span-6 relative h-64 lg:h-auto min-h-[320px]">
            <img
              src={STACK_IMAGE}
              alt="Neatly stacked recycled school uniforms"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-emerald-950 shadow-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Inspected & Steam Sanitized Garments</span>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Our Quality Guarantee
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900 font-display">
                Every Recycled Garment Looks, Feels & Smells Brand New
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We know parents want their children to look smart and proud in school. That's why we never list torn, stained, or heavily worn items.
              </p>

              {/* Quality Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {qualityStandards.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <button
                onClick={openDonationModal}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Recycle className="w-4 h-4" />
                <span>Donate Pre-Loved Uniforms</span>
              </button>
              
              <button
                onClick={scrollToStore}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs px-5 py-3 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Browse Store Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-extrabold text-gray-900 font-display">Loved By Parents, Schools & Eco Clubs</h3>
            <p className="text-xs text-gray-500">Real feedback from local families in our uniform exchange network</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between space-y-4">
                <p className="text-xs text-gray-700 italic leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-emerald-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-gray-900">{t.author}</div>
                    <div className="text-[11px] text-emerald-700 font-medium">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};
