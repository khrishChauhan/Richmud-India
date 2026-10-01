import React, { useState } from 'react';
import { 
  Newspaper, 
  Calendar, 
  Download, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink,
  Award,
  FileText,
  CheckCircle2,
  X
} from 'lucide-react';
import { pressReleases, agriEvents } from '../data/media';
import { MediaArticle } from '../types';

export const MediaCenterPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'releases' | 'events'>('releases');
  const [selectedArticle, setSelectedArticle] = useState<MediaArticle | null>(null);
  const [pressKitDownloaded, setPressKitDownloaded] = useState(false);

  const handleDownloadPressKit = () => {
    setPressKitDownloaded(true);
    setTimeout(() => setPressKitDownloaded(false), 4000);
  };

  const upcomingEvents = agriEvents.filter((e) => e.status === 'Upcoming');
  const pastEvents = agriEvents.filter((e) => e.status === 'Past');

  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>News & Corporate Communications</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            PAN Seeds <br />
            <span className="text-gold-gradient">Media Center & Field Events</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Stay informed with our official corporate press releases, research breakthroughs, and upcoming national agri-expositions.
          </p>
        </div>
      </section>

      {/* 2. SEGMENTED TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-gray-200">
          
          <div className="flex items-center gap-2 bg-ivory-200 p-1.5 rounded-2xl">
            <button
              onClick={() => setActiveTab('releases')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'releases'
                  ? 'bg-botanical-800 text-white font-bold shadow-md'
                  : 'text-gray-600 hover:text-charcoal-900'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>Press Releases & Bulletins</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'events'
                  ? 'bg-botanical-800 text-white font-bold shadow-md'
                  : 'text-gray-600 hover:text-charcoal-900'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Agri Expos & Field Days</span>
            </button>
          </div>

          {/* Download Press Kit Button */}
          <button
            onClick={handleDownloadPressKit}
            className="px-5 py-2.5 rounded-full border border-botanical-700 bg-botanical-50 text-botanical-900 hover:bg-botanical-800 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4 text-botanical-700 group-hover:text-white" />
            <span>{pressKitDownloaded ? 'Press Kit Downloaded!' : 'Download Official Media Kit (PDF)'}</span>
          </button>

        </div>
      </section>

      {/* 3. CONTENT DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {activeTab === 'releases' ? (
          /* Press Releases Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gold-300/40 hover:border-botanical-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-botanical-800 text-white px-3 py-1 rounded-full text-[11px] font-bold border border-botanical-600 shadow-sm">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold-600" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="text-xs font-bold text-botanical-800 hover:text-botanical-950 flex items-center gap-1.5 group-hover:underline"
                    >
                      <span>Read Full Release</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-gray-400">
                      Official Dispatch
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Events Segment */
          <div className="space-y-12">
            
            {/* Upcoming Expos */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-charcoal-900 font-bold flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold-500" />
                Upcoming Exhibitions & Kisan Days
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-6 rounded-2xl bg-white border border-gold-400/50 shadow-sm hover:shadow-gold-md transition-all space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-gold-gradient text-charcoal-950 text-[10px] font-bold uppercase tracking-wider">
                        Confirmed Upcoming
                      </span>
                      <span className="text-xs font-bold text-gold-800">
                        {event.date}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl font-bold text-charcoal-900">
                      {event.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {event.description}
                    </p>

                    {event.highlight && (
                      <div className="p-3 rounded-xl bg-ivory-100 border border-gold-200 text-xs text-charcoal-900 font-medium">
                        ★ Highlight: {event.highlight}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Past Milestones */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-charcoal-900 font-bold flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gray-400" />
                Past Conventions & Symposia
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-6 rounded-2xl bg-ivory-50 border border-gray-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-[10px] font-bold uppercase tracking-wider">
                        Concluded
                      </span>
                      <span className="text-xs font-semibold text-gray-500">
                        {event.date}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl font-bold text-charcoal-900">
                      {event.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {event.description}
                    </p>

                    {event.attendees && (
                      <div className="flex items-center gap-2 text-xs text-gold-800 font-semibold">
                        <Users className="w-3.5 h-3.5 text-gold-600" />
                        <span>Participation: {event.attendees}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </section>

      {/* 4. ARTICLE FULL MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gold-400/40 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Close Article Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-700">
                <span>{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 leading-snug">
                {selectedArticle.title}
              </h3>

              <div className="rounded-2xl overflow-hidden my-4 border border-gold-300/40">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                <p className="font-medium text-charcoal-900 italic">
                  {selectedArticle.summary}
                </p>
                <p>
                  {selectedArticle.content}
                </p>
                <p>
                  For media inquiries, press interviews with Dr. Ananya Pan or Shri Pradeep Kumar Pan, or certified high-resolution photo assets, please contact <a href="mailto:media@panseeds.in" className="text-gold-700 underline font-semibold">media@panseeds.in</a>.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  PAN Seeds Communications Bureau
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2 rounded-full bg-charcoal-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black"
                >
                  Close Release
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
