import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Building2,
  Headphones,
  Check
} from 'lucide-react';

const subjects = [
  { id: 'dealership', label: 'Authorized Dealership / Distributorship' },
  { id: 'farmer-help', label: 'Farmer Advisory & Agri Input Guidance' },
  { id: 'bulk-order', label: 'Bulk Commercial Seeds & Input Orders' },
  { id: 'corporate', label: 'Corporate & Official Inquiries' },
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
    <div className="pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative py-14 sm:py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          {/* Logo wrapped in solid black container */}
          <div className="bg-black rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3.5 inline-flex items-center justify-center border border-white/10 shadow-xl mx-auto my-2">
            <img
              src="/richmud-crest-logo.png"
              alt="Richmud"
              className="h-24 sm:h-32 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Direct Communications</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Contact Richmud India
          </h1>

          <p className="text-gold-300 font-serif text-lg sm:text-2xl font-light italic max-w-2xl mx-auto">
            Mud To Gold
          </p>

          <p className="text-stone-300 max-w-2xl mx-auto text-xs sm:text-base font-light leading-relaxed">
            Connect directly with our corporate headquarters, agronomic advisory team, and commercial distribution managers.
          </p>
        </div>
      </section>

      {/* 2. DUAL COLUMN LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Contact & Corporate Details (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Toll-Free / Direct Farmer Care Box */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-botanical-900 via-botanical-800 to-[#12362b] text-white border-2 border-gold-400/40 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gold-300">
                <Headphones className="w-4 h-4 text-emerald-400" />
                <span>Dedicated Farmer & Dealer Hotline</span>
              </div>
              <div className="space-y-2 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                <a
                  href="tel:+917888585478"
                  className="block hover:text-gold-300 transition-colors"
                >
                  +91-7888585478
                </a>
                <a
                  href="tel:+919572144270"
                  className="block hover:text-gold-300 transition-colors text-xl sm:text-2xl"
                >
                  +91-9572144270
                </a>
              </div>
              <div className="text-xs font-medium text-emerald-100/90 leading-relaxed">
                Direct hotline for farmers, retail seed dealers, and agricultural partners across India.
              </div>
              <div className="text-[11px] pt-1 text-emerald-200/80 border-t border-emerald-700/50">
                Monday to Saturday: 9:00 AM – 6:00 PM IST
              </div>
            </div>

            {/* Corporate Headquarters Card */}
            <div className="p-7 rounded-3xl bg-white border border-gold-300/60 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Corporate Office
                  </h3>
                  <div className="text-xs font-semibold text-emerald-800">Richmud India Pvt Ltd. (RM)</div>
                </div>
              </div>

              <div className="space-y-4 text-xs text-stone-600 pl-3 border-l-2 border-gold-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-stone-800 leading-relaxed">
                    Corporate Office: Richmud India Pvt Ltd., Halsi, Lakhisarai, Bihar, India — Pincode: 811306 / 811311
                  </span>
                </div>
                
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                    <a href="tel:+917888585478" className="hover:text-emerald-700 font-mono text-xs font-bold text-stone-800 transition-colors">
                      +91-7888585478
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                    <a href="tel:+919572144270" className="hover:text-emerald-700 font-mono text-xs font-bold text-stone-800 transition-colors">
                      +91-9572144270
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                  <a href="mailto:richmudindia@gmail.com" className="hover:text-emerald-700 font-semibold text-stone-800 transition-colors">
                    richmudindia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quality & Assurance Footnote */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
              <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Richmud India Pvt Ltd. operates with certified seed standards ensuring high germination, purity, and robust crop performance.
              </span>
            </div>

          </div>

          {/* Right Column: Premium Gold-Accented Contact Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border-2 border-gold-400/40 shadow-luxury">
            
            <div className="space-y-2 mb-8">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold">
                Direct Inquiry Portal
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Send an Official <span className="text-gold-gradient">Dispatch</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                Specify your requirement below to route your message to our authorized team.
              </p>
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-stone-900">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Richmud India Pvt Ltd. Our representative will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Interactive Subject Picker */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-stone-900 mb-2">
                    Inquiry Nature / Subject *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {subjects.map((sub) => (
                      <button
                        type="button"
                        key={sub.id}
                        onClick={() => setSelectedSubject(sub.id)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                          selectedSubject === sub.id
                            ? 'bg-stone-900 border-stone-900 text-white shadow-sm font-bold ring-1 ring-gold-400/50'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-gold-400 hover:bg-stone-100/70'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{sub.label}</span>
                          {selectedSubject === sub.id && (
                            <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 ml-1" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-stone-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91-7888585478"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-stone-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="richmudindia@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-stone-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      State / District
                    </label>
                    <input
                      type="text"
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      placeholder="e.g. Lakhisarai, Bihar"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-stone-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding dealership inquiries, crop seed varieties, or questions..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-stone-50 focus:bg-white"
                  />
                </div>

                {/* Submit button: Luxury Gold Submit Button as requested */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-9 py-4 rounded-full bg-gold-gradient hover:opacity-95 text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-md hover:scale-[1.02] border border-amber-400/80 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-charcoal-950" />
                    <span>Send Inquiry</span>
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
