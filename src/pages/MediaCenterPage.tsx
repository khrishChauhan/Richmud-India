import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Maximize2,
  Newspaper, 
  Download, 
  ArrowRight, 
  Clock, 
  Users, 
  Camera
} from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { pressReleases, agriEvents } from '../data/media';
import { GalleryItem, MediaArticle } from '../types';

const galleryCategories = [
  { id: 'all', label: 'All Photographs' },
  { id: 'labs', label: 'R&D Labs' },
  { id: 'trials', label: 'Farm Trials' },
  { id: 'meets', label: 'Farmer Meets' },
  { id: 'awards', label: 'Award Ceremonies' },
];

export const MediaCenterPage: React.FC = () => {
  // Gallery State
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Press & Events State
  const [activeTab, setActiveTab] = useState<'releases' | 'events'>('releases');
  const [selectedArticle, setSelectedArticle] = useState<MediaArticle | null>(null);
  const [pressKitDownloaded, setPressKitDownloaded] = useState(false);

  // Filtered Gallery Items
  const filteredGalleryItems = useMemo(() => {
    if (selectedGalleryCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedGalleryCategory);
  }, [selectedGalleryCategory]);

  const activeLightboxItem: GalleryItem | null = 
    lightboxIndex !== null ? filteredGalleryItems[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredGalleryItems.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredGalleryItems.length);
    }
  };

  const handleDownloadPressKit = () => {
    setPressKitDownloaded(true);
    setTimeout(() => setPressKitDownloaded(false), 4000);
  };

  const upcomingEvents = agriEvents.filter((e) => e.status === 'Upcoming');
  const pastEvents = agriEvents.filter((e) => e.status === 'Past');

  return (
    <div className="pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
          <img
            src="/richmud-crest-logo.png"
            alt="richmud"
            className="h-16 sm:h-20 md:h-24 mx-auto w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-2 transition-transform duration-300 hover:scale-[1.03]"
          />
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:w-3.5 text-gold-400" />
            <span>Visual Chronicles & Media Bureau</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            richmud <br />
            <span className="text-gold-gradient">Media Center & Field Stories</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base lg:text-lg font-light leading-relaxed">
            Explore our visual photographic journey across trial farms, breeding labs, and farmer meets, alongside official press releases and national agri-expos.
          </p>
        </div>
      </section>

      {/* 2. SECTION 1: VISUAL CHRONICLES & PHOTO GALLERY (FIRST AS REQUESTED) */}
      <section id="gallery-section" className="pt-12 sm:pt-16 pb-14 border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/40 text-gold-700 text-[11px] font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-gold-600" />
              <span>Photo Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal-900 tracking-tight">
              Field Stories & Discovery Moments
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
              A high-definition photographic lens into our molecular breeding laboratories, lush multi-location trial fields, and vibrant kisan gatherings across India.
            </p>
          </div>

          {/* Gallery Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedGalleryCategory(cat.id)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedGalleryCategory === cat.id
                    ? 'bg-gold-gradient text-charcoal-950 font-bold shadow-gold-sm scale-105'
                    : 'bg-white border border-gray-200 text-charcoal-800 hover:border-gold-400 hover:bg-gold-50/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry / Grid (2-Column Mobile, 3-Column Desktop) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 pt-4">
            {filteredGalleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gold-300/30 hover:border-gold-500 shadow-sm hover:shadow-gold-md transition-all duration-300 flex flex-col"
              >
                <div className="h-36 sm:h-72 overflow-hidden relative bg-charcoal-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gold-500/90 text-charcoal-950 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-lg">
                      <Maximize2 className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                  </div>

                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold text-charcoal-900 border border-gold-300/40 truncate max-w-[85%]">
                    {item.categoryLabel}
                  </div>
                </div>

                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="font-serif text-sm sm:text-lg font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors line-clamp-1 sm:line-clamp-none">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] sm:text-[11px] text-gray-500">
                    <span className="flex items-center gap-1 truncate">
                      <Calendar className="w-3 h-3 text-gold-600 shrink-0" />
                      <span>{item.date}</span>
                    </span>
                    <span className="hidden sm:flex items-center gap-1 text-gold-700 font-medium truncate max-w-[120px]">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: PRESS RELEASES & AGRI EXPOS */}
      <section id="press-section" className="pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-botanical-900/10 border border-botanical-500/30 text-botanical-800 text-[11px] font-semibold uppercase tracking-wider">
              <Newspaper className="w-3.5 h-3.5 text-botanical-700" />
              <span>Press & Communications</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal-900 tracking-tight">
              News Dispatches & Agri Expos
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
              Official press releases, scientific achievements, and upcoming farmer field days.
            </p>
          </div>

          {/* Segmented Tabs & Download Kit Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-ivory-200 p-1 sm:p-1.5 rounded-2xl w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('releases')}
                className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                  activeTab === 'releases'
                    ? 'bg-botanical-800 text-white font-bold shadow-md'
                    : 'text-gray-600 hover:text-charcoal-900'
                }`}
              >
                <Newspaper className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span>Press Releases</span>
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                  activeTab === 'events'
                    ? 'bg-botanical-800 text-white font-bold shadow-md'
                    : 'text-gray-600 hover:text-charcoal-900'
                }`}
              >
                <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span>Agri Expos</span>
              </button>
            </div>

            {/* Download Press Kit Button */}
            <button
              onClick={handleDownloadPressKit}
              className="w-full sm:w-auto justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-botanical-700 bg-botanical-50 text-botanical-900 hover:bg-botanical-800 hover:text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              <Download className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-botanical-700 group-hover:text-white" />
              <span>{pressKitDownloaded ? 'Press Kit Downloaded!' : 'Download Official Media Kit (PDF)'}</span>
            </button>
          </div>

          {/* Content Display: Releases vs Events */}
          <div>
            {activeTab === 'releases' ? (
              /* Press Releases Grid (2-Column on Mobile) */
              <div className="grid grid-cols-2 gap-3 sm:gap-8">
                {pressReleases.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gold-300/40 hover:border-botanical-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    <div className="h-32 sm:h-56 overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-botanical-800 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold border border-botanical-600 shadow-sm truncate max-w-[85%]">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
                          <span>{article.date}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="hidden sm:flex items-center gap-1">
                            <Clock className="w-3 h-3 text-gold-600" />
                            <span>{article.readTime}</span>
                          </span>
                        </div>

                        <h3 className="font-serif text-sm sm:text-2xl font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors leading-snug line-clamp-2 sm:line-clamp-none">
                          {article.title}
                        </h3>

                        <p className="text-[11px] sm:text-sm text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {article.summary}
                        </p>
                      </div>

                      <div className="pt-2 sm:pt-4 border-t border-gray-100 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedArticle(article)}
                          className="text-[10px] sm:text-xs font-bold text-botanical-800 hover:text-botanical-950 flex items-center gap-1 sm:gap-1.5 group-hover:underline"
                        >
                          <span>Read Release</span>
                          <ArrowRight className="w-3 sm:w-3.5 h-3 sm:w-3.5" />
                        </button>
                        <span className="text-[10px] sm:text-[11px] text-gray-400 hidden sm:inline">
                          Official Dispatch
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Events Segment */
              <div className="space-y-8 sm:space-y-12">
                {/* Upcoming Expos */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xs uppercase tracking-widest text-charcoal-900 font-bold flex items-center gap-2">
                    <span className="w-6 sm:w-8 h-0.5 bg-gold-500" />
                    Upcoming Exhibitions & Kisan Days
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className="p-4 sm:p-6 rounded-2xl bg-white border border-gold-400/50 shadow-sm hover:shadow-gold-md transition-all space-y-3 sm:space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gold-gradient text-charcoal-950 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                            Confirmed Upcoming
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-gold-800">
                            {event.date}
                          </span>
                        </div>

                        <h4 className="font-serif text-lg sm:text-2xl font-bold text-charcoal-900">
                          {event.title}
                        </h4>

                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold-600 shrink-0" />
                          <span>{event.location}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {event.description}
                        </p>

                        {event.highlight && (
                          <div className="p-2.5 sm:p-3 rounded-xl bg-ivory-100 border border-gold-200 text-xs text-charcoal-900 font-medium">
                            ★ Highlight: {event.highlight}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Past Milestones */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xs uppercase tracking-widest text-charcoal-900 font-bold flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-gray-400" />
                    Past Conventions & Symposia
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {pastEvents.map((event) => (
                      <div
                        key={event.id}
                        className="p-4 sm:p-6 rounded-2xl bg-ivory-50 border border-gray-200 shadow-sm space-y-3 sm:space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gray-200 text-gray-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                            Concluded
                          </span>
                          <span className="text-[11px] sm:text-xs font-semibold text-gray-500">
                            {event.date}
                          </span>
                        </div>

                        <h4 className="font-serif text-lg sm:text-2xl font-bold text-charcoal-900">
                          {event.title}
                        </h4>

                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-400 shrink-0" />
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
          </div>

        </div>
      </section>

      {/* 4. FULLSCREEN LIGHTBOX PREVIEW MODAL */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white z-50 transition-colors"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white z-50 transition-colors"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="max-w-5xl w-full bg-charcoal-900 rounded-3xl overflow-hidden shadow-2xl border border-gold-400/30 flex flex-col md:flex-row max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-white space-y-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 text-xs font-semibold uppercase tracking-wider">
                  {activeLightboxItem.categoryLabel}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  {activeLightboxItem.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeLightboxItem.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-800 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>{activeLightboxItem.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>{activeLightboxItem.location}</span>
                </div>
                <div className="text-[11px] text-gray-500 pt-2">
                  Image {lightboxIndex + 1} of {filteredGalleryItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. ARTICLE FULL MODAL */}
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
                  For media inquiries, press interviews with Dr. Ananya Pan or Shri Pradeep Kumar Pan, or certified high-resolution photo assets, please contact <a href="mailto:media@richmud.in" className="text-gold-700 underline font-semibold">media@richmud.in</a>.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  richmud Communications Bureau
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
