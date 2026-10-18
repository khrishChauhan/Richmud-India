import React from 'react';
import { 
  Sparkles, 
  Mail, 
  ArrowRight,
  Briefcase,
  GraduationCap,
  Sprout
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const hiringCards = [
    {
      id: 'hiring-1',
      badge: 'R&D & Seed Breeding',
      icon: Sprout,
      domain: 'Crop Genetics & Biotechnology',
    },
    {
      id: 'hiring-2',
      badge: 'Field Operations & Supply Chain',
      icon: Briefcase,
      domain: 'Logistics, Plant & Seed Processing',
    },
    {
      id: 'hiring-3',
      badge: 'Agronomy & Farmer Advisory',
      icon: GraduationCap,
      domain: 'Regional Field Trials & Dealer Outreach',
    },
  ];

  return (
    <div className="pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative py-14 sm:py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          {/* Centered Logo & Badge Stack */}
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
            {/* Logo wrapped in solid black container */}
            <div className="bg-black rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3.5 inline-flex items-center justify-center border border-white/10 shadow-xl my-2">
              <img
                src="/richmud-crest-logo.png"
                alt="Richmud"
                className="h-24 sm:h-32 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-xs font-semibold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Mud To Gold</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Careers at Richmud
          </h1>

          <p className="text-gold-300 font-serif text-lg sm:text-2xl font-light italic max-w-2xl mx-auto">
            Shape the Future of Indian Agriculture
          </p>

          <p className="text-stone-300 max-w-2xl mx-auto text-xs sm:text-base font-light leading-relaxed">
            Join a mission-driven agricultural enterprise committed to enriching soil, boosting farm yields, and driving rural prosperity across India.
          </p>
        </div>
      </section>

      {/* 2. ACTIVE SECTION: SLEEK GOLD-BORDERED PLACEHOLDER CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {hiringCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-white rounded-3xl p-8 sm:p-9 border-2 border-amber-300/70 hover:border-gold-500 shadow-luxury hover:shadow-gold-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center"
              >
                <div className="space-y-5 flex flex-col items-center">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                    {card.badge}
                  </span>

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-100 border border-amber-200/80 flex items-center justify-center text-stone-800 shadow-xs group-hover:scale-105 group-hover:border-gold-400 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold-600" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                      Hiring Soon
                    </h2>
                    <p className="text-xs uppercase tracking-wider font-semibold text-gold-700">
                      {card.domain}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                      Exciting opportunities across Agri-input research, operations & field agronomy.
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-6 mt-6 border-t border-stone-100">
                  <a
                    href="mailto:richmudindia@gmail.com?subject=Job%20Application%20-%20Richmud%20India%20Pvt%20Ltd"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-stone-900 hover:bg-black text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-gold-md hover:ring-2 hover:ring-gold-400/40 transition-all duration-300 group/btn"
                  >
                    <Mail className="w-4 h-4 text-gold-400" />
                    <span>Send your CV/Resume to richmudindia@gmail.com</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TALENT COMMUNITY NOTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-2xs space-y-3">
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Prospective Talent & Internships
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl mx-auto">
            We are always eager to connect with passionate agricultural professionals, plant breeding scholars, and field executives. Even if your specialized profile is not listed today, write to us with your portfolio.
          </p>
          <div className="pt-2">
            <a
              href="mailto:richmudindia@gmail.com"
              className="text-xs font-bold text-emerald-800 hover:text-gold-700 font-mono underline decoration-gold-400 decoration-2 underline-offset-4 transition-colors"
            >
              richmudindia@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
