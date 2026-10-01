import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Sprout, 
  FlaskConical, 
  CheckCircle,
  ExternalLink,
  MapPin,
  Leaf
} from 'lucide-react';
import { directorSpotlight, coreStats } from '../data/company';
import { productsData } from '../data/products';
import { ProductCategory } from '../types';

interface HomePageProps {
  setActivePage: (page: string) => void;
  onSelectCategory?: (category: ProductCategory) => void;
}

const heroSlides = [
  {
    title: 'The Gold Standard in Seed Science',
    subtitle: 'NURTURING HARVESTS • ENRICHING LIVES',
    description: 'Engineering climate-smart hybrids with supreme genetic vigor to secure high-yield prosperity for over 10 million Indian farmers.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85',
    ctaPrimary: 'Explore Seed Catalog',
    ctaPrimaryPage: 'products',
    ctaSecondary: 'Find Nearest Dealer',
    ctaSecondaryPage: 'dealers',
  },
  {
    title: 'High-Vitality Vegetable Hybrids',
    subtitle: '22+ COMMERCIAL CROPS • UNMATCHED UNIFORMITY',
    description: 'From deep crimson red carrots to export-grade blocky bell peppers, discover seeds tailored for market dominance.',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1920&q=85',
    ctaPrimary: 'Vegetable Portfolio',
    ctaPrimaryPage: 'products',
    ctaSecondary: 'Research Facilities',
    ctaSecondaryPage: 'business',
  },
  {
    title: 'Precision R&D & Genetic Purity',
    subtitle: 'NABL ACCREDITED • 30+ YEARS OF EXCELLENCE',
    description: 'Combining traditional field breeding with molecular marker-assisted selection to defeat emerging pathogens and drought.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=85',
    ctaPrimary: 'Discover Core Business',
    ctaPrimaryPage: 'business',
    ctaSecondary: 'Director\'s Vision',
    ctaSecondaryPage: 'about',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, onSelectCategory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="pt-20">
      {/* 1. HERO SLIDER / CAROUSEL */}
      <section 
        className="relative h-[82vh] min-h-[580px] max-h-[820px] overflow-hidden bg-charcoal-950 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Cinematic Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
            </div>

            {/* Slide Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-2xl space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-xs font-semibold tracking-widest uppercase shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span className="text-white font-medium">{slide.subtitle}</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                  {slide.title.split(' ')[0]}{' '}
                  <span className="text-gold-gradient">
                    {slide.title.split(' ').slice(1).join(' ')}
                  </span>
                </h1>

                {/* Subtitle / Description */}
                <p className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActivePage(slide.ctaPrimaryPage)}
                    className="px-7 py-3.5 rounded-full bg-gold-gradient text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-md hover:scale-105 transition-all flex items-center gap-2 group hover:ring-2 hover:ring-botanical-800/30"
                  >
                    <span>{slide.ctaPrimary}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setActivePage(slide.ctaSecondaryPage)}
                    className="px-6 py-3.5 rounded-full bg-botanical-800/80 hover:bg-botanical-800 backdrop-blur-md border border-botanical-500/50 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm hover:ring-2 hover:ring-gold-400/40"
                  >
                    <span>{slide.ctaSecondary}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Nav Arrows */}
        <div className="absolute bottom-10 right-8 z-20 hidden sm:flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            className="w-11 h-11 rounded-full bg-black/40 hover:bg-gold-500/80 text-white hover:text-black border border-white/20 flex items-center justify-center transition-all backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="w-11 h-11 rounded-full bg-black/40 hover:bg-gold-500/80 text-white hover:text-black border border-white/20 flex items-center justify-center transition-all backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentSlide ? 'w-8 bg-gold-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. CORE STATS COUNTER BAR */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-luxury border border-gold-400/20 p-6 sm:p-8 backdrop-blur-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {coreStats.map((stat, i) => (
              <div key={i} className={`pt-4 sm:pt-0 ${i !== 0 ? 'sm:pl-6' : ''}`}>
                <div className="flex items-center gap-2">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gold-gradient tracking-tight">
                    {stat.value}
                  </div>
                  {i === 2 && (
                    <span className="w-2 h-2 rounded-full bg-botanical-600 inline-block animate-pulse" title="10M+ Farmers Empowered" />
                  )}
                </div>
                <div className="text-sm font-semibold text-charcoal-900 mt-1 font-sans">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIRECTOR'S SPOTLIGHT SECTION */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Director's Portrait Card */}
            <div className="lg:col-span-5 relative">
              {/* Gold Outline Frame */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-gold-400/30 transform -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gold-300/40">
                <img
                  src={directorSpotlight.portraitImage}
                  alt={directorSpotlight.name}
                  className="w-full h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gold Gradient Label Plate */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-white">
                  <div className="font-serif text-2xl font-bold tracking-wide">
                    {directorSpotlight.name}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gold-400 font-medium mt-1">
                    {directorSpotlight.designation}
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    {directorSpotlight.experience}
                  </div>
                </div>
              </div>
            </div>

            {/* Message & Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white bg-botanical-800 px-4 py-1.5 rounded-full border border-botanical-700 shadow-sm">
                <Leaf className="w-3.5 h-3.5 text-emerald-300" />
                <span>Founding Leadership & Ethos</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 leading-tight">
                "When the seed is pure, <span className="text-gold-gradient">life flourishes."</span>
              </h2>

              {/* Quote Block with Gold Quotation Accent */}
              <div className="relative pl-6 border-l-2 border-botanical-700 italic text-gray-700 text-lg leading-relaxed">
                <Quote className="absolute -top-3 -left-3 w-6 h-6 text-gold-400 opacity-40" />
                {directorSpotlight.shortQuote}
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {directorSpotlight.fullMessage}
              </p>

              {/* Signature and CTA */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-6 border-t border-gold-300/30">
                <div>
                  <div className="font-serif italic text-2xl text-botanical-900 tracking-wider font-semibold">
                    Pradeep K. Pan
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">
                    Founder & Managing Director
                  </div>
                </div>

                <button
                  onClick={() => setActivePage('about')}
                  className="px-6 py-2.5 rounded-full border-2 border-botanical-800 text-botanical-900 hover:bg-botanical-800 hover:text-white transition-all text-xs font-semibold tracking-wider uppercase flex items-center gap-2 shadow-sm"
                >
                  <span>Explore 30-Year Journey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FEATURED VERTICALS PREVIEW */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
              Proprietary Crop Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Cultivating Excellence Across <span className="text-gold-gradient">Every Soil</span>
            </h2>
            <p className="text-sm text-gray-600">
              From staple food crops powering national grain reserves to high-value horticulture and integrated crop protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Field Crops Card */}
            <div 
              onClick={() => {
                if (onSelectCategory) onSelectCategory('field-crops');
                setActivePage('products');
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-ivory-50 border border-gold-300/30 hover:border-botanical-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
                  alt="Field Crops"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-botanical-800 text-white border border-botanical-600 text-xs font-bold uppercase tracking-wider shadow-md">
                  Cereals & Pulses
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-serif font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors">
                  Field Crops
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Wheat (Pan Ratna), Hybrid Paddy (Pan Samrat), Sona Mustard, Maize, Gram, and high-protein Lentils.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-botanical-800 group-hover:text-botanical-900">
                  <span>View Varieties</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Vegetable Seeds Card */}
            <div 
              onClick={() => {
                if (onSelectCategory) onSelectCategory('vegetable-seeds');
                setActivePage('products');
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-ivory-50 border border-gold-300/30 hover:border-botanical-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"
                  alt="Vegetable Seeds"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-botanical-800 text-white border border-botanical-600 text-xs font-bold uppercase tracking-wider shadow-md">
                  22+ Hybrid Greens & Fruits
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-serif font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors">
                  Vegetable Seeds
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Export-grade Okra, Hot Chili, Snow White Muli, Sweet Watermelon, Palak, Dhaniya, Tomato, and Gourds.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-botanical-800 group-hover:text-botanical-900">
                  <span>Explore Vegetables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Crop Protection Card */}
            <div 
              onClick={() => {
                if (onSelectCategory) onSelectCategory('crop-protection');
                setActivePage('products');
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-ivory-50 border border-gold-300/30 hover:border-botanical-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80"
                  alt="Crop Protection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-botanical-800 text-white border border-botanical-600 text-xs font-bold uppercase tracking-wider shadow-md">
                  Crop Care & PGR
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-serif font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors">
                  Crop Protection
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Systemic insecticides, curative fungicides, selective herbicides, and seaweed-based PanVigor bio-stimulants.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-botanical-800 group-hover:text-botanical-900">
                  <span>View Formulations</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="py-20 bg-ivory-100 border-t border-gold-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-botanical-800 font-bold">
                Flagship Cultivars
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 mt-1">
                Distinguished <span className="text-gold-gradient">Seed Selections</span>
              </h2>
            </div>

            <button
              onClick={() => setActivePage('products')}
              className="mt-4 sm:mt-0 text-xs uppercase tracking-wider font-bold text-botanical-800 hover:text-botanical-950 flex items-center gap-1.5"
            >
              <span>Browse Full 30+ Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActivePage('products')}
                className="bg-white rounded-2xl overflow-hidden border border-gold-300/30 hover:border-botanical-600 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-botanical-800 text-white px-3 py-1 rounded-full text-[11px] font-bold border border-botanical-600 shadow-sm">
                    {product.categoryName}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors">
                      {product.name}
                    </h4>
                    {product.vernacularName && (
                      <div className="text-xs text-gold-700 font-medium">
                        {product.vernacularName}
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                      {product.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-medium">
                      {product.maturityDays || 'High Yield'}
                    </span>
                    <span className="text-botanical-800 font-bold group-hover:underline flex items-center gap-1">
                      Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MINIMALIST LUXURY CTA BANNER */}
      <section className="py-20 bg-gradient-to-br from-[#0a231b] via-[#143e32] to-[#1b4d3e] text-white relative overflow-hidden border-t border-botanical-700/40">
        {/* Subtle Gold Shimmer Backdrop */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Sprout className="w-4 h-4 text-emerald-300" />
            <span>Grow with PAN Seeds</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Partner with India’s Most Trusted <br />
            <span className="text-gold-gradient">Seed Science Network</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Whether you are a progressive grower seeking certified high-vigor hybrids or a reputable agri-input distributor aiming to become an authorized PAN Seeds dealer, our doors are open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActivePage('dealers')}
              className="px-8 py-3.5 rounded-full bg-gold-gradient text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-md hover:scale-105 transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Locate Certified Dealer</span>
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="px-8 py-3.5 rounded-full bg-botanical-900/80 hover:bg-botanical-900 border border-gold-400/50 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Apply for Dealership</span>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
