import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Building2,
  Headphones,
  FileCheck
} from 'lucide-react';

const subjects = [
  { id: 'dealership', label: 'Authorized Dealership / Distributorship' },
  { id: 'farmer-help', label: 'Farmer Advisory & Crop Disease Help' },
  { id: 'bulk-order', label: 'Bulk Commercial Seed Order' },
  { id: 'corporate', label: 'General Corporate & Press Inquiry' },
];

export const ContactPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('dealership');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [stateName, setStateName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && email) {
      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setPhone('');
        setEmail('');
        setStateName('');
        setMessage('');
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:w-3.5 text-gold-400" />
            <span>Connect with PAN Seeds</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            How Can We Assist <br />
            <span className="text-gold-gradient">Your Agricultural Journey?</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base lg:text-lg font-light leading-relaxed">
            Whether inquiring about dealership opportunities, seed certifications, or technical agronomy advisory, our specialists are at your service.
          </p>
        </div>
      </section>

      {/* 2. DUAL COLUMN LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate & Regional Information (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Toll-Free Farmer Care Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-botanical-900 via-botanical-800 to-[#12362b] text-white border border-gold-400/40 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gold-300">
                <Headphones className="w-4 h-4 text-emerald-400" />
                <span>Dedicated Farmer Support Hotline</span>
              </div>
              <div className="font-serif text-3xl font-bold tracking-tight text-white">
                1800-120-PANSEEDS
              </div>
              <div className="text-xs font-medium text-emerald-100/90">
                (1800-120-7267) • Toll-free across India in 6 regional languages
              </div>
              <div className="text-[11px] pt-1 text-emerald-200/80">
                Monday to Saturday: 9:00 AM – 6:00 PM IST
              </div>
            </div>

            {/* Corporate Headquarters */}
            <div className="p-6 rounded-2xl bg-white border border-gold-300/40 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-900">
                    Corporate Headquarters
                  </h3>
                  <div className="text-xs text-gray-500">Registered Office</div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-gray-600 pl-2 border-l-2 border-gold-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>
                    PAN Seeds Tower, 18 Netaji Subhash Road, BBD Bagh, Kolkata — 700001, West Bengal, India.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>+91 (033) 2248-7890 / 2248-7891</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>corporate@panseeds.in / info@panseeds.in</span>
                </div>
              </div>
            </div>

            {/* Central Biotech Research Station */}
            <div className="p-6 rounded-2xl bg-white border border-gold-300/40 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-900">
                    Central R&D & Seed Labs
                  </h3>
                  <div className="text-xs text-gray-500">Biotech & QA Center</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-600 pl-2 border-l-2 border-gold-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>
                    NH-19 Agri Innovation Campus, Bardhaman — 713104, West Bengal.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>research@panseeds.in</span>
                </div>
              </div>
            </div>

            {/* Certification Footnote */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-ivory-100 border border-gold-200/60 text-xs text-gray-600">
              <ShieldCheck className="w-5 h-5 text-botanical-700 shrink-0" />
              <span>
                All communications are recorded for quality assurance under ISTA and Seeds Act protocols.
              </span>
            </div>

          </div>

          {/* Right Column: Premium Gold-accented Contact Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border-2 border-gold-400/40 shadow-luxury">
            
            <div className="space-y-2 mb-8">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold">
                Direct Inquiry Portal
              </span>
              <h2 className="text-3xl font-serif font-bold text-charcoal-900">
                Send an Official <span className="text-gold-gradient">Dispatch</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Please specify your requirement below to route your message to the appropriate agricultural division.
              </p>
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-botanical-100 border border-botanical-400 text-botanical-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-charcoal-900">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you for reaching out to PAN Seeds. An authorized regional representative or technical agronomist will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Interactive Subject Picker */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-charcoal-900 mb-2">
                    Inquiry Nature / Department *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {subjects.map((sub) => (
                      <button
                        type="button"
                        key={sub.id}
                        onClick={() => setSelectedSubject(sub.id)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                          selectedSubject === sub.id
                            ? 'bg-botanical-800 border-botanical-700 text-white shadow-sm font-bold'
                            : 'bg-ivory-50 border-gray-200 text-gray-700 hover:border-botanical-400'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-ivory-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-ivory-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@business.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-ivory-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      State / District
                    </label>
                    <input
                      type="text"
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      placeholder="e.g. Punjab / Ludhiana"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-ivory-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding seed quantities, retail license status, or agronomy questions..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-ivory-50 focus:bg-white"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-botanical-800 hover:bg-botanical-900 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 border border-gold-400/40 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-gold-300" />
                    <span>Transmit Message</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>
    </div>
  );
};
