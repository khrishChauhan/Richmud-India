import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Newspaper, 
  Calendar, 
  Camera, 
  Clock, 
  Mail, 
  Phone,
  Building2
} from 'lucide-react';

interface MediaCenterPageProps {
  initialTab?: 'gallery' | 'releases' | 'events';
}

export const MediaCenterPage: React.FC<MediaCenterPageProps> = ({ initialTab = 'releases' }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'releases' | 'events' | 'gallery'>('all');

  useEffect(() => {
    if (initialTab === 'gallery') {
      setSelectedFilter('gallery');
    } else if (initialTab === 'releases') {
      setSelectedFilter('releases');
    } else if (initialTab === 'events') {
      setSelectedFilter('events');
    }
  }, [initialTab]);

  const announcementCards = [
    {
      id: 'media-1',
      type: 'releases',
      category: 'Press Releases & Notices',
      icon: Newspaper,
      badge: 'Announcement',
      headline: 'Uploading Soon...',
      description: 'Press releases, agronomic field trial reports, and exhibition photo galleries will be published here shortly.',
      footerTag: 'Corporate Communications',
    },
    {
      id: 'media-2',
      type: 'events',
      category: 'Field Days & Agronomic Trials',
      icon: Calendar,
      badge: 'Announcement',
      headline: 'Uploading Soon...',
      description: 'Press releases, agronomic field trial reports, and exhibition photo galleries will be published here shortly.',
      footerTag: 'Field Operations & Farmer Meets',
    },
    {
      id: 'media-3',
      type: 'gallery',
      category: 'Visual Photo Gallery',
      icon: Camera,
      badge: 'Announcement',
      headline: 'Uploading Soon...',
      description: 'Press releases, agronomic field trial reports, and exhibition photo galleries will be published here shortly.',
      footerTag: 'Documentary & Farm Records',
    },
  ];

  const filteredCards = selectedFilter === 'all' 
    ? announcementCards 
    : announcementCards.filter(c => c.type === selectedFilter);

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
            <span>Official Media Bureau</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Media & Press Centre
          </h1>

          <p className="text-gold-300 font-serif text-lg sm:text-2xl font-light italic max-w-2xl mx-auto">
            Official Announcements, Field Days & Farmer Meets
          </p>

          <p className="text-stone-300 max-w-2xl mx-auto text-xs sm:text-base font-light leading-relaxed">
            Direct bulletins, certified trial reports, and event coverage from Richmud India Pvt Ltd. (RM).
          </p>
        </div>
      </section>

      {/* 2. FILTER PILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="flex flex-wrap items-center justify-center gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-stone-200/90 shadow-sm max-w-xl mx-auto">
          {[
            { id: 'all', label: 'All Updates' },
            { id: 'releases', label: 'Press Releases' },
            { id: 'events', label: 'Field Days & Events' },
            { id: 'gallery', label: 'Photo Gallery' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. ACTIVE SECTION: MINIMALIST LUXURY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-white rounded-3xl p-8 sm:p-9 border-2 border-amber-300/60 hover:border-gold-500 shadow-sm hover:shadow-gold-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center"
              >
                <div className="space-y-5 flex flex-col items-center">
                  {/* Card Badge: "Announcement" */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                    {card.badge}
                  </span>

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-100 border border-amber-200/80 flex items-center justify-center text-stone-800 shadow-xs group-hover:scale-105 group-hover:border-gold-400 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold-600" />
                  </div>

                  {/* Headline & Description */}
                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                      {card.headline}
                    </h2>
                    <p className="text-xs uppercase tracking-wider font-semibold text-gold-700">
                      {card.category}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="flex items-center gap-1.5 font-medium text-stone-500">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    <span>In Preparation</span>
                  </span>
                  <span className="font-semibold text-emerald-800">
                    {card.footerTag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. MEDIA RELATIONS CONTACT DESK */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-stone-900 to-black text-white border border-white/10 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-gold-400">
              <Building2 className="w-4 h-4" />
              <span>Press & Media Inquiries</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Official Media Spokesperson Desk
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-md">
              For press releases, interview requests, or official statements, contact our corporate affairs team.
            </p>
          </div>

          <div className="space-y-2 text-center md:text-right shrink-0">
            <a
              href="mailto:richmudindia@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:scale-105 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>richmudindia@gmail.com</span>
            </a>
            <div className="text-xs text-stone-400 pt-1 flex items-center justify-center md:justify-end gap-2 font-mono">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <a href="tel:+917888585478" className="hover:text-gold-300">+91-7888585478</a>
              <span>/</span>
              <a href="tel:+919572144270" className="hover:text-gold-300">+91-9572144270</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
