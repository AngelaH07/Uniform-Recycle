import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Heart, 
  Sparkles, 
  Users, 
  Calendar, 
  Recycle, 
  ArrowRight, 
  Maximize2, 
  X,
  Compass
} from 'lucide-react';

// Documentary photographs
import photo1Default from '../assets/images/Photo 1.jpg';
import photo2Default from '../assets/images/Photo 2.jpg';
import photo3Default from '../assets/images/Photo 3.jpg';
import photo4Default from '../assets/images/Photo 4.jpg';
import photo5Default from '../assets/images/Photo 5.jpg';
import photo6Default from '../assets/images/Photo 6.jpg';

interface AboutUsSectionProps {
  scrollToStore?: () => void;
  openDonationModal?: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ scrollToStore, openDonationModal }) => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string; alt: string } | null>(null);

  return (
    <section id="about-us" className="py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#059669]" />
            <span>{isZh ? '关于我们 • UNIFORM RECYCLE' : 'ABOUT US • UNIFORM RECYCLE'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-display tracking-tight">
            {isZh ? '我们的历程' : 'Our Journey'}
          </h1>

          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed font-normal">
            {isZh 
              ? '从四位初创成员到不断壮大的社区，Uniform Recycle 让闲置校服重获新生，将点滴行动汇聚成更深远的正向影响。' 
              : 'From four founding members to a growing community, Uniform Recycle gives pre-loved school uniforms a second life while turning small actions into a wider positive impact.'}
          </p>
        </div>

        {/* Milestone 1: PHOTO 1 — Spring 2025 */}
        <article className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300">
          {/* PHOTO 1 — Spring 2025 (Placed first) */}
          <div 
            className="relative group overflow-hidden bg-slate-100 cursor-pointer"
            onClick={() => setLightboxImage({
              src: photo1Default,
              caption: isZh ? '照片 1 — 2025年春季：初心萌芽' : 'PHOTO 1 — Spring 2025: Where It All Began',
              alt: 'Spring 2025 First charity sale'
            })}
          >
            <img
              src={photo1Default}
              alt="Spring 2025 - First charity uniform sale organized by four founding members"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 md:h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            
            {/* Photo Label / Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/85 backdrop-blur-md text-white text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-md border border-white/20">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>PHOTO 1 — {isZh ? '2025年春季' : 'Spring 2025'}</span>
            </div>

            {/* View Full Image Overlay Icon */}
            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
              <span
                className="bg-slate-900/80 text-white p-2 rounded-xl backdrop-blur-md transition-colors shadow-sm flex items-center gap-1.5 text-xs font-medium"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">{isZh ? '放大查看' : 'Expand'}</span>
              </span>
            </div>
          </div>

          {/* Matching Text (Directly underneath photograph) */}
          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display tracking-tight flex items-center gap-3">
              <span>{isZh ? '初心萌芽' : 'Where It All Began'}</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {isZh
                ? '2024年底创立之初，Uniform Recycle (UR) 怀揣着一个朴素的使命：让校服重获新生。我们的四位初创成员于2025年春季组织了第一场校园义卖活动，收集、清洗并循环售卖闲置校服。这是一次微小的起点，却是让可持续环保理念融入校园社区的第一步。'
                : 'Established at the end of 2024, Uniform Recycle (UR) began with a simple mission: to give school uniforms a second life. Our four founding members organized our first charity sale in spring 2025, collecting, cleaning, and reselling pre-loved school uniforms. It was a small beginning, but the first step towards making sustainability part of our school community.'}
            </p>
          </div>
        </article>

        {/* Milestone 2: PHOTO 2 — Summer 2025 */}
        <article className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300">
          {/* PHOTO 2 — Summer 2025 (Placed first) */}
          <div 
            className="relative group overflow-hidden bg-slate-100 cursor-pointer"
            onClick={() => setLightboxImage({
              src: photo2Default,
              caption: isZh ? '照片 2 — 2025年夏季：壮大团队，倍增力量' : 'PHOTO 2 — Summer 2025: A Bigger Team, A Greater Impact',
              alt: 'Summer 2025 Charity uniform sale'
            })}
          >
            <img
              src={photo2Default}
              alt="Summer 2025 - Charity uniform sale"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 md:h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Photo Label / Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/85 backdrop-blur-md text-white text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-md border border-white/20">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>PHOTO 2 — {isZh ? '2025年夏季' : 'Summer 2025'}</span>
            </div>

            {/* View Full Image Overlay Icon */}
            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
              <span
                className="bg-slate-900/80 text-white p-2 rounded-xl backdrop-blur-md transition-colors shadow-sm flex items-center gap-1.5 text-xs font-medium"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">{isZh ? '放大查看' : 'Expand'}</span>
              </span>
            </div>
          </div>

          {/* Matching Text (Directly underneath photograph) */}
          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display tracking-tight">
              {isZh ? '壮大团队，倍增力量' : 'A Bigger Team, A Greater Impact'}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {isZh
                ? '在2025年夏季的义卖活动中，我们的团队持续壮大。随着更多伙伴奉献出他们的时间与精力，UR获得了蓬勃动力，更加坚定了对可持续发展实践与社区服务的承诺。每一件重获新生的校服、每一双伸出的援助之手，都让我们距离目标更进一步。'
                : 'At our charity sale in summer 2025, our team continued to expand. With more people contributing their time and energy, UR gained momentum and strengthened its commitment to sustainable practices and community service. Every uniform reused and every helping hand brought us one step closer to our goals.'}
            </p>
          </div>
        </article>

        {/* Milestone 3: PHOTOS 3 & 4 — Winter 2025 (Both photos together with one shared caption) */}
        <article className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300">
          {/* Shared Photo Label / Caption placed first */}
          <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-wide">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>PHOTOS 3 & 4 — {isZh ? '2025年冬季' : 'Winter 2025'}</span>
            </div>
            <span className="text-[11px] text-slate-300 font-medium">
              {isZh ? '爱心捐赠项目与义卖活动' : 'Donation Project & Charity Sale'}
            </span>
          </div>

          {/* PHOTOS 3 & 4 Together in responsive 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-slate-100">
            {/* Photo 3 */}
            <div 
              className="relative group overflow-hidden rounded-2xl bg-slate-200 cursor-pointer"
              onClick={() => setLightboxImage({
                src: photo3Default,
                caption: isZh ? '照片 3 — 2025年冬季：爱心捐赠项目' : 'PHOTO 3 — Winter 2025: Donation Project',
                alt: 'Winter 2025 Donation Project'
              })}
            >
              <img
                src={photo3Default}
                alt="Winter 2025 - Donation Project and Collection Drive"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                Photo 3: {isZh ? '爱心捐赠' : 'Donation Project'}
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="bg-slate-900/80 text-white p-1.5 rounded-lg backdrop-blur-md transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Photo 4 */}
            <div 
              className="relative group overflow-hidden rounded-2xl bg-slate-200 cursor-pointer"
              onClick={() => setLightboxImage({
                src: photo4Default,
                caption: isZh ? '照片 4 — 2025年冬季：义卖活动' : 'PHOTO 4 — Winter 2025: Charity Sale',
                alt: 'Winter 2025 Charity Sale'
              })}
            >
              <img
                src={photo4Default}
                alt="Winter 2025 - UR Charity Sale & Volunteer Team"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                Photo 4: {isZh ? '义卖展区' : 'Charity Sale'}
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="bg-slate-900/80 text-white p-1.5 rounded-lg backdrop-blur-md transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Matching Text (Directly underneath photographs) */}
          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display tracking-tight">
              {isZh ? '携手成长' : 'Growing Together'}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {isZh
                ? '到了2025年冬季的义卖活动，UR开始茁壮成长，吸引了更多伙伴凝聚在我们的共同愿景之下。我们还发起了捐赠项目，将行动延伸至回收与义卖之外。最初的小小倡议，正在逐步汇聚成为带来积极改变的集体力量。'
                : 'By our charity sale in winter 2025, UR had begun to grow, bringing more members together around our shared vision. We also launched a donation project, expanding our efforts beyond recycling and resale. What started as a small initiative was gradually becoming a collective effort to make a positive difference.'}
            </p>
          </div>
        </article>

        {/* Milestone 4: PHOTO 5 — Spring 2026 */}
        <article className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300">
          {/* PHOTO 5 — Spring 2026 (Placed first) */}
          <div 
            className="relative group overflow-hidden bg-slate-100 cursor-pointer"
            onClick={() => setLightboxImage({
              src: photo5Default,
              caption: isZh ? '照片 5 — 2026年春季：拓宽边界，传递温情' : 'PHOTO 5 — Spring 2026: Extending Our Reach',
              alt: 'Spring 2026 Charity project supporting mountainous areas'
            })}
          >
            <img
              src={photo5Default}
              alt="Spring 2026 - Partnership with public welfare project supporting children in mountainous areas"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 md:h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Photo Label / Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/85 backdrop-blur-md text-white text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-md border border-white/20">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>PHOTO 5 — {isZh ? '2026年春季' : 'Spring 2026'}</span>
            </div>

            {/* View Full Image Overlay Icon */}
            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
              <span
                className="bg-slate-900/80 text-white p-2 rounded-xl backdrop-blur-md transition-colors shadow-sm flex items-center gap-1.5 text-xs font-medium"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">{isZh ? '放大查看' : 'Expand'}</span>
              </span>
            </div>
          </div>

          {/* Matching Text (Directly underneath photograph) */}
          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display tracking-tight">
              {isZh ? '拓宽边界，传递温情' : 'Extending Our Reach'}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {isZh
                ? '我们在2026年春季举办的义卖活动标志着又一个重要里程碑。通过与公益项目的合作，我们捐赠了善款以资助山区儿童。这次合作将我们工作的积极影响拓展至校园大门之外，把回收校服的微小行动与更为广阔的关爱与奉献精神紧密相连。'
                : 'Our charity sale in spring 2026 marked another important milestone. Through a partnership with a public welfare project, we donated funds to support children in mountainous areas. This collaboration helped extend the impact of our work beyond the school gates, connecting the simple act of recycling uniforms with a broader spirit of care and giving.'}
            </p>
          </div>
        </article>

        {/* Milestone 5: PHOTO 6 — Founding Members & Supervisor */}
        <article className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300">
          {/* PHOTO 6 — Founding Members & Supervisor (Placed first) */}
          <div 
            className="relative group overflow-hidden bg-slate-100 cursor-pointer"
            onClick={() => setLightboxImage({
              src: photo6Default,
              caption: isZh ? '照片 6 — 初创成员与指导老师：UR背后的同行者' : 'PHOTO 6 — Founding Members & Supervisor: The People Behind UR',
              alt: 'Founding Members and Supervisor'
            })}
          >
            <img
              src={photo6Default}
              alt="Founding Members and Supervisor of Uniform Recycle"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 md:h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Photo Label / Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/85 backdrop-blur-md text-white text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-md border border-white/20">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>PHOTO 6 — {isZh ? '初创成员与指导老师' : 'Founding Members & Supervisor'}</span>
            </div>

            {/* View Full Image Overlay Icon */}
            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
              <span
                className="bg-slate-900/80 text-white p-2 rounded-xl backdrop-blur-md transition-colors shadow-sm flex items-center gap-1.5 text-xs font-medium"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">{isZh ? '放大查看' : 'Expand'}</span>
              </span>
            </div>
          </div>

          {/* Matching Text (Directly underneath photograph) */}
          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display tracking-tight">
              {isZh ? 'UR背后的同行者' : 'The People Behind UR'}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {isZh
                ? '在每一个里程碑背后，都站着一群笃信同一份事业的伙伴。这张照片汇聚了我们的四位初创成员与指导老师，老师的耐心指引与全心投入，帮助UR从一个微小的想法逐步成长为不断深化的公益实践。我们的旅程提醒着我们：有意义的改变始于微小的行动——并在人们携手同行时绽放无限可能。'
                : 'Behind every milestone is a group of people who believe in the same cause. This photograph brings together our four founding members and our supervisor, whose guidance and dedication have helped UR grow from a small idea into a continuing initiative. Our journey reminds us that meaningful change begins with small actions—and grows when people work together.'}
            </p>
          </div>
        </article>

        {/* Closing Line Card */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-400/20 border border-emerald-400/30 text-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>{isZh ? '行动箴言' : 'Our Creed'}</span>
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-white leading-tight">
              “{isZh ? '一件校服，重焕新生；微小行动，深远影响。' : 'One uniform, a second life; one small action, a wider impact.'}”
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              {scrollToStore && (
                <button
                  onClick={scrollToStore}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Recycle className="w-4 h-4" />
                  <span>{isZh ? '浏览校服循环商店' : 'Explore Recycled Uniforms'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {openDonationModal && (
                <button
                  onClick={openDonationModal}
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Heart className="w-4 h-4 text-emerald-300" />
                  <span>{isZh ? '捐赠闲置校服' : 'Donate Pre-Loved Items'}</span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="max-w-5xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <span className="text-xs sm:text-sm font-bold text-slate-300">{lightboxImage.caption}</span>
              <button 
                onClick={() => setLightboxImage(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 flex items-center justify-center max-h-[80vh] overflow-hidden">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
