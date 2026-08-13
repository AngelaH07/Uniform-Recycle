import React, { useState } from 'react';
import { ContactInquiry } from '../types';
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
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<ContactInquiry>({
    name: '',
    email: '',
    subject: 'General Inquiry',
    schoolName: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
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
    }, 4000);
  };

  const faqs = [
    {
      q: 'What condition must uniforms be in to be accepted for recycling?',
      a: 'We accept gently used school blazers, knitwear, polo shirts, trousers, skirts, and PE kits that are free of large tears or unremovable heavy stains. Minor loose buttons or seam wear will be repaired by our volunteer team during inspection.',
    },
    {
      q: 'How are the recycled school uniforms sanitized and cleaned?',
      a: 'All garments undergo a 5-step hygienic process: thorough physical inspection, high-temperature hypo-allergenic steam laundering at 60°C, button/hem repairs, badge verification, and sealed eco-packaging.',
    },
    {
      q: 'Where do I collect my online uniform purchase?',
      a: 'During checkout, you can select free pickup at your child\'s school front desk/reception area. Your order is placed in a named eco bag ready for pickup during school hours. Alternatively, we offer eco postal delivery to your home.',
    },
    {
      q: 'Is Uniform Recycling a non-profit community group?',
      a: 'Yes! Uniform Recycling is a 100% community-driven, non-profit school uniform recycling initiative. All nominal fees charged ($3 - $12) directly cover eco steam cleaning, repair materials, and school drop-box maintenance.',
    },
    {
      q: 'What if an ordered uniform item doesn\'t fit my child?',
      a: 'No problem! You can exchange any uniform within 14 days at any partner school front desk or eco depot box for a different size, or receive full recycling credit for another garment.',
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
            <span>Contact & Support</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 font-display tracking-tight">
            Get in Touch With Our Recycling Team
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Have questions about uniform drop-offs, school partnerships, or an active order? We are here to help!
          </p>
        </div>

        {/* Contact Info & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-emerald-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-emerald-700 space-y-6">
              
              <div className="space-y-2">
                <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                  Central Recycling Depot
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  GreenThread Community Hub
                </h3>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Our main processing center inspects, sanitizes, and catalogs over 1,000 recycled school garments every month.
                </p>
              </div>

              <div className="space-y-4 text-xs text-emerald-100 border-t border-emerald-800 pt-5">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Main Collection Hub:</strong>
                    <span>100 Eco Green Way, Community District Center, Main Hall</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block text-white font-bold">Helpline & WhatsApp:</strong>
                    <span>(555) 019-RECYCLE / (555) 019-7329</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block text-white font-bold">Email Support:</strong>
                    <span>support@greenthreaduniforms.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Depot Drop-Off Hours:</strong>
                    <span>Monday – Friday: 8:00 AM – 5:00 PM</span>
                    <div className="text-[10px] text-emerald-300">School reception boxes available 24/7</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md space-y-4">
            
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900 font-display">Send Us a Direct Inquiry</h3>
              <p className="text-xs text-gray-500">
                Fill out the form below and our eco coordinator will respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-gray-900 text-base">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-gray-600">
                  Thank you, {formState.name}. We have received your message and sent a confirmation to {formState.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Maria Garcia"
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-hidden focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="maria@example.com"
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-hidden focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Inquiry Topic</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-hidden font-medium"
                    >
                      <option value="General Inquiry">General Question</option>
                      <option value="Donation Pickup">Donation / Drop-Off Help</option>
                      <option value="School Partnership">School Partnership Request</option>
                      <option value="Order Tracking">Order / Size Exchange</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">School Name (Optional)</label>
                    <input
                      type="text"
                      value={formState.schoolName}
                      onChange={(e) => setFormState({ ...formState, schoolName: e.target.value })}
                      placeholder="e.g. St. Jude's Academy"
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-hidden focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="How can we help you or your school community today?"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-hidden focus:border-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>

              </form>
            )}

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black text-gray-900 font-display flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-emerald-600" />
              <span>Frequently Asked Questions</span>
            </h3>
            <p className="text-xs text-gray-500">Quick answers regarding uniform donations, sanitization, and online purchasing</p>
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
