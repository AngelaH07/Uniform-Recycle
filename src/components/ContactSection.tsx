import React, { useState } from 'react';
import { ContactInquiry } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SAMPLE_SCHOOLS } from '../data/mockData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  MessageSquare,
  Building2,
  Sparkles,
  Recycle,
  ShoppingBag,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  openDonationModal?: () => void;
  onSelectSchool?: (schoolId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  openDonationModal,
  onSelectSchool,
}) => {
  const { t, language } = useLanguage();
  const isZh = language === 'zh';

  const [formState, setFormState] = useState<ContactInquiry>({
    name: '',
    email: '',
    subject: 'General Inquiry',
    schoolName: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedSchoolTab, setSelectedSchoolTab] = useState<string>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: '',
          email: '',
          subject: 'General Inquiry',
          schoolName: '',
          message: '',
        });
      }, 5000);
    }, 600);
  };

  const getTranslatedSchoolName = (schoolName: string) => {
    if (!isZh) return schoolName;
    if (schoolName.includes('Universal')) return '通用基础校服 (Universal Plain)';
    if (schoolName.includes('St. Jude')) return "圣裘德学院 (St. Jude's Academy)";
    if (schoolName.includes('Oakridge')) return '橡树脊高中 (Oakridge High School)';
    if (schoolName.includes('Greenfield')) return '绿田小学 (Greenfield Primary School)';
    if (schoolName.includes('Riverside')) return '河畔文理学校 (Riverside Grammar)';
    if (schoolName.includes('Meadowbrook')) return '草甸溪社区书院 (Meadowbrook College)';
    return schoolName;
  };

  const getTranslatedCollectionPoint = (cp: string) => {
    if (!isZh) return cp;
    if (cp.includes('Central Eco')) return '中央环保回收服务中心（主街大厅）';
    if (cp.includes('Main Reception')) return '学校主楼前台接待处 - 绿色回收箱 1号';
    if (cp.includes('Student Services')) return '学生事务大厅走廊绿色投递箱';
    if (cp.includes('Parent Association')) return '家长教师联谊会（PTA）办公室服务台';
    if (cp.includes('Sports Pavilion')) return '体育馆正门入口专属更衣箱';
    if (cp.includes('Library Foyer')) return '图书馆大堂校服调剂投递站';
    return cp;
  };

  const getTranslatedHours = (hours: string) => {
    if (!isZh) return hours;
    return hours
      .replace('Mon-Fri', '周一至周五')
      .replace('Mon-Thu', '周一至周四')
      .replace('8:00 AM - 5:00 PM', '上午 8:00 – 下午 5:00')
      .replace('7:45 AM - 4:15 PM', '上午 7:45 – 下午 4:15')
      .replace('8:00 AM - 3:30 PM', '上午 8:00 – 下午 3:30')
      .replace('8:15 AM - 3:45 PM', '上午 8:15 – 下午 3:45')
      .replace('8:00 AM - 6:00 PM', '上午 8:00 – 下午 6:00')
      .replace('8:00 AM - 4:30 PM', '上午 8:00 – 下午 4:30');
  };

  const faqs = [
    {
      q: t('contact.faq1.q', 'What condition must uniforms be in to be accepted for recycling?'),
      a: t('contact.faq1.a', 'We accept gently used school blazers, knitwear, polo shirts, trousers, skirts, and PE kits that are free of large tears or unremovable heavy stains. Minor loose buttons or seam wear will be repaired by our volunteer team during inspection.'),
    },
    {
      q: t('contact.faq2.q', 'How are the recycled school uniforms sanitized and cleaned?'),
      a: t('contact.faq2.a', 'All garments undergo a 5-step hygienic process: thorough physical inspection, high-temperature hypo-allergenic steam laundering at 60°C, button/hem repairs, badge verification, and sealed eco-packaging.'),
    },
    {
      q: t('contact.faq3.q', 'Where do I collect my online uniform purchase?'),
      a: t('contact.faq3.a', "During checkout, you can select free pickup at your child's school front desk/reception area. Your order is placed in a named eco bag ready for pickup during school hours. Alternatively, we offer eco postal delivery to your home."),
    },
    {
      q: t('contact.faq4.q', 'Is Uniform Recycling a non-profit community group?'),
      a: t('contact.faq4.a', 'Yes! Uniform Recycling is a 100% community-driven, non-profit school uniform recycling initiative. All nominal fees charged ($3 - $12) directly cover eco steam cleaning, repair materials, and school drop-box maintenance.'),
    },
    {
      q: t('contact.faq5.q', "What if an ordered uniform item doesn't fit my child?"),
      a: t('contact.faq5.a', 'No problem! You can exchange any uniform within 14 days at any partner school front desk or eco depot box for a different size, or receive full recycling credit for another garment.'),
    },
  ];

  return (
    <section id="contact" className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-xl border border-white/60 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('contact.badge', 'Contact & Support')}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 font-display tracking-tight">
            {t('contact.title', 'Get in Touch With Our Recycling Team')}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {t('contact.subtitle', 'Have questions about uniform drop-offs, school partnerships, or an active order? We are here to help!')}
          </p>
        </div>

        {/* Official uniform purchase form */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-3">
          <h3 className="text-xl font-extrabold text-emerald-950">{isZh ? '想购买二手校服？' : 'Looking to Buy Pre-Loved Uniforms?'}</h3>
          <p className="text-sm text-emerald-900">{isZh ? '请填写 UR 官方问卷星购买表单，我们会根据你的需求跟进。' : 'Fill out the official UR purchase questionnaire and our team will follow up.'}</p>
          <a href="https://www.wjx.top/vm/mcN5csM.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-colors"><ShoppingBag className="w-4 h-4" />{isZh ? '前往问卷星购买校服' : 'Purchase Uniforms — Open Form'}<ExternalLink className="w-4 h-4" /></a>
        </div>

        {/* Contact Info & Inquiry Form Grid */}
        <div className="grid grid-cols-1 gap-8 items-start">
          
          {/* Direct email contact — no simulated submission */}
          <div className="w-full max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><Mail className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold text-gray-900">{isZh ? '联系 UR 团队' : 'Contact the UR Team'}</h3>
            <p className="text-sm text-gray-600">{isZh ? '有校服回收、购买或合作方面的问题？欢迎直接发送邮件给我们。' : 'Questions about uniform recycling, purchases, or partnerships? Send us an email.'}</p>
            <a href="mailto:angelahh07@163.com?subject=UR%20Uniform%20Recycle%20Inquiry" className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-colors"><Mail className="w-4 h-4" />{isZh ? '发送邮件给 UR' : 'Email the UR Team'}</a>
            <p className="text-xs text-gray-500">angelahh07@163.com</p>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-gray-100">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black text-gray-900 font-display flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-emerald-600" />
              <span>{t('contact.faqTitle', 'Frequently Asked Questions')}</span>
            </h3>
            <p className="text-xs text-gray-500">
              {t('contact.faqSubtitle', 'Quick answers regarding uniform donations, sanitization, and online purchasing')}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs text-gray-900 flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-700 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};
