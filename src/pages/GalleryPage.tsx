import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Eye, 
  Maximize2 
} from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { GalleryItem } from '../types';

const categories = [
  { id: 'all', label: 'All Photographs' },
  { id: 'labs', label: 'R&D Labs' },
  { id: 'trials', label: 'Farm Trials' },
  { id: 'meets', label: 'Farmer Meets' },
  { id: 'awards', label: 'Award Ceremonies' },
];

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeLightboxItem: GalleryItem | null = 
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Visual Chronicles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Field Stories & <br />
            <span className="text-gold-gradient">Moments of Discovery</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            A photographic lens into our molecular breeding laboratories, lush multi-location trial fields, and vibrant kisan gatherings across India.
          </p>
        </div>
      </section>

      {/* 2. FILTER PILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-gray-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gold-gradient text-charcoal-950 font-bold shadow-gold-sm scale-105'
                  : 'bg-white border border-gray-200 text-charcoal-800 hover:border-gold-400 hover:bg-gold-50/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gold-300/30 hover:border-gold-500 shadow-sm hover:shadow-gold-md transition-all duration-300 flex flex-col"
            >
              <div className="h-72 overflow-hidden relative bg-charcoal-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold-500/90 text-charcoal-950 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-charcoal-900 border border-gold-300/40">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gold-600" />
                    <span>{item.date}</span>
                  </span>
                  <span className="flex items-center gap-1 text-gold-700 font-medium">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate max-w-[150px]">{item.location}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FULLSCREEN LIGHTBOX PREVIEW */}
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
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
