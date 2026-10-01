import React, { useState } from 'react';
import { 
  Eye, 
  Target, 
  Award, 
  Calendar, 
  ArrowRight, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Quote,
  ChevronRight,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { 
  visionMissionValues, 
  timelineMilestones, 
  leadershipTeam, 
  directorSpotlight 
} from '../data/company';
import { Leader } from '../types';

export const AboutPage: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const boardMembers = leadershipTeam.filter((l) => l.role === 'board');
  const executiveMembers = leadershipTeam.filter((l) => l.role === 'executive');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Eye':
        return <Eye className="w-6 h-6 text-gold-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-gold-600" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6 text-gold-600" />;
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
            <span>Legacy of Trust Since 1992</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Nurturing India's Soil with <br />
            <span className="text-gold-gradient">Purity, Science & Integrity</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base lg:text-lg font-light leading-relaxed">
            PAN Seeds was forged on a sacred contract with the Indian farmer: that every grain sown will germinate with vitality and bear fruitful harvest.
          </p>
        </div>
      </section>

      {/* 2. CORPORATE OVERVIEW & ETHOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-widest text-botanical-800 font-bold">
                Our Corporate Ethos
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 leading-tight">
                Three Decades of Pioneering <br />
                <span className="text-gold-gradient">Agricultural Transformation</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Founded in 1992 in the fertile agro-ecological heartland of Eastern India, PAN Seeds has grown into one of the country’s premier indigenous seed conglomerates. Our tagline, <span className="font-semibold text-charcoal-900 italic">"Good seed good life"</span>, is not merely a brand slogan — it is our operational philosophy.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We believe that agricultural prosperity begins in the seed embryo. By uniting time-honored farmer wisdom with ultramodern molecular biotechnology, marker-assisted breeding, and ISO/ISTA-certified quality laboratories, we equip farmers to triumph over erratic weather, emerging pests, and water scarcity.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-botanical-800 text-white border border-botanical-700 shadow-md">
                  <div className="text-2xl font-serif font-bold text-white">100%</div>
                  <div className="text-xs text-emerald-100 font-medium mt-1">Certified Genetic Purity Standard</div>
                </div>
                <div className="p-4 rounded-xl bg-ivory-50 border border-gold-300/30">
                  <div className="text-2xl font-serif font-bold text-gold-700">4 R&D Stations</div>
                  <div className="text-xs text-gray-600 font-medium mt-1">Multi-Climate Screening Facilities</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gold-300/40">
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80"
                  alt="Farmers with PAN Seeds"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              {/* Floating luxury badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-gold-md border border-gold-400/40 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-botanical-800 flex items-center justify-center text-white shrink-0 border border-botanical-600 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-charcoal-900">Seeds Act 1966 & ISTA</div>
                    <div className="text-xs text-gray-500">Exceeding national germination benchmarks</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISION, MISSION & VALUES (3 LUXURY CARDS) */}
      <section className="py-20 bg-ivory-100 border-y border-gold-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
              Guiding North Star
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Vision, Mission & <span className="text-gold-gradient">Core Values</span>
            </h2>
            <p className="text-sm text-gray-600">
              The foundational pillars that anchor our scientific pursuits and community partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionMissionValues.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gold-300/40 hover:border-gold-500 shadow-sm hover:shadow-gold-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    {getIcon(card.iconName)}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gold-600 font-semibold">
                    {card.tagline}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal-900">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-charcoal-900">
                  <span>PAN Seeds Commitment</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-botanical-700 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIRECTOR'S JOURNEY TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
              Chronicles of Progress
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Director's Journey & <span className="text-gold-gradient">Key Milestones</span>
            </h2>
            <p className="text-sm text-gray-600">
              Tracing thirty-three years of groundbreaking seed trials, infrastructure milestones, and nationwide farmer empowerment.
            </p>
          </div>

          <div className="relative border-l-2 border-gold-400/40 ml-4 sm:ml-32 space-y-12">
            {timelineMilestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Year Marker Badge */}
                <div className="sm:absolute sm:-left-32 sm:top-0 mb-2 sm:mb-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-50 border border-gold-400 text-gold-800 font-serif font-bold text-sm tracking-wider shadow-sm">
                    {item.year}
                  </span>
                </div>

                {/* Node Bullet on Timeline Line */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-gold-500 group-hover:bg-gold-500 transition-colors shadow-sm" />

                {/* Milestone Content Box */}
                <div className="bg-ivory-50 rounded-2xl p-6 border border-gold-200/50 hover:border-gold-400 transition-all shadow-sm hover:shadow-gold-sm">
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-gold-200/60 text-gold-900 mb-2">
                    {item.tag}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP SECTION */}
      <section className="py-20 bg-ivory-50 border-t border-gold-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
              Architects of Crop Science
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Board of Directors & <span className="text-gold-gradient">Leadership</span>
            </h2>
            <p className="text-sm text-gray-600">
              Governed by distinguished plant geneticists, agribusiness strategists, and agronomy experts dedicated to scientific excellence.
            </p>
          </div>

          {/* Board of Directors */}
          <div className="mb-16">
            <h3 className="text-xs uppercase tracking-widest text-charcoal-900 font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-500" />
              Board of Directors
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boardMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gold-300/40 hover:border-gold-500 shadow-sm hover:shadow-gold-md transition-all duration-300 flex flex-col group"
                >
                  <div className="h-72 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <button
                        onClick={() => setSelectedLeader(member)}
                        className="w-full py-2.5 rounded-full bg-gold-gradient text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                      >
                        <span>View Full Biography</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-charcoal-900">
                        {member.name}
                      </h4>
                      <div className="text-xs text-gold-700 font-semibold mt-1">
                        {member.designation}
                      </div>
                      <p className="text-xs text-gray-500 mt-2 line-clamp-3">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-medium">Exp: {member.experience}</span>
                      <button
                        onClick={() => setSelectedLeader(member)}
                        className="text-gold-700 font-bold hover:underline"
                      >
                        Read Profile →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Management Team */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-charcoal-900 font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-500" />
              Executive Management Team
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {executiveMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl p-5 border border-gold-200/60 hover:border-gold-400 shadow-sm transition-all flex items-start gap-4 group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-xl object-cover object-top border border-gold-300/40 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-base font-bold text-charcoal-900 truncate">
                      {member.name}
                    </h5>
                    <div className="text-[11px] text-gold-700 font-semibold mt-0.5">
                      {member.designation}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                      {member.credentials}
                    </div>
                    <button
                      onClick={() => setSelectedLeader(member)}
                      className="mt-2 text-[11px] text-gold-700 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Bio & Credentials</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BIO MODAL FOR LEADERS */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gold-400/40 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Close Biography Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover object-top border-2 border-gold-400 shrink-0 shadow-md"
              />
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold uppercase tracking-wider">
                  {selectedLeader.role === 'board' ? 'Board of Directors' : 'Executive Management'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                  {selectedLeader.name}
                </h3>
                <div className="text-sm font-semibold text-gold-700">
                  {selectedLeader.designation}
                </div>
                {selectedLeader.credentials && (
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <GraduationCap className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{selectedLeader.credentials}</span>
                  </div>
                )}
                {selectedLeader.experience && (
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Briefcase className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>Experience: {selectedLeader.experience}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-gold-800">
                Executive Profile & Vision
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedLeader.bio}
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-6 py-2.5 rounded-full bg-charcoal-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Close Biography
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
