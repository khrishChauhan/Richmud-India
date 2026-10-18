import React from 'react';
import { 
  ArrowRight, 
  Quote, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Sprout, 
  FlaskConical, 
  CheckCircle,
  ExternalLink,
  MapPin,
  Leaf,
  User
} from 'lucide-react';
import { directorSpotlight, coreStats } from '../data/company';
import { productsData } from '../data/products';
import { ProductCategory } from '../types';

interface HomePageProps {
  setActivePage: (page: string) => void;
  onSelectCategory?: (category: ProductCategory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, onSelectCategory }) => {
  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* 1. MINIMAL LUXURY HERO CANVAS */}
      <section className="relative h-[36vh] sm:h-[44vh] min-h-[280px] sm:min-h-[340px] max-h-[460px] overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#ECE5D8] border-b border-amber-200/50 flex items-center justify-center">
        {/* Subtle Ambient Gold Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/25 via-amber-100/10 to-transparent pointer-events-none" />
        
        {/* Decorative Hairline Gold Frame Accent */}
        <div className="absolute inset-5 sm:inset-10 border border-amber-300/30 rounded-3xl pointer-events-none" />
        <div className="absolute inset-7 sm:inset-12 border border-amber-400/15 rounded-2xl pointer-events-none" />

        {/* Minimalist Refined Centerpiece Placeholder */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-black rounded-2xl p-4 sm:p-5 inline-flex items-center justify-center border border-amber-200/30 shadow-luxury">
            <img
              src="/richmud-crest-logo.png"
              alt="Richmud"
              className="h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-md"
            />
          </div>
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

      {/* 2.5. OUR STORY SNIPPET: WHO WE ARE / OUR ROOTS */}
      <section className="py-14 sm:py-20 bg-stone-50/70 border-b border-gold-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gold-300/40 shadow-sm relative overflow-hidden">
            {/* Subtle decorative accent */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-bl-full pointer-events-none -z-0" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Narrative Teaser */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300/40">
                  <Sprout className="w-3.5 h-3.5 text-gold-600" />
                  <span>WHO WE ARE • OUR ROOTS</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
                  Empowering the Farming Community from <br className="hidden sm:inline" />
                  <span className="text-gold-gradient">Bihar's Agricultural Heartland</span>
                </h2>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Richmud India Pvt Ltd. (RM) is an agri-input startup founded in 2025 in Halsi, Lakhisarai, Bihar. Deeply committed to ground-level farming challenges, we deliver high-quality crop seeds, Agrochemicals, PGR’s, non-FCO fertilizer, and Agri services to elevate farmer prosperity.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setActivePage('about')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all group"
                  >
                    <span>Read Our Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: 3 Key Highlight Counters */}
              <div className="lg:col-span-5 grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-gold-300/30 shadow-2xs">
                  <div className="text-2xl sm:text-4xl font-serif font-bold text-gold-gradient">
                    2025
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-stone-900 uppercase tracking-wider mt-1">
                    Year Founded
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    Halsi, Lakhisarai
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-gold-300/30 shadow-2xs">
                  <div className="text-2xl sm:text-4xl font-serif font-bold text-gold-gradient">
                    Bihar
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-stone-900 uppercase tracking-wider mt-1">
                    Heartland
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    Ground Operations
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-gold-300/30 shadow-2xs">
                  <div className="text-2xl sm:text-4xl font-serif font-bold text-gold-gradient">
                    5+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-stone-900 uppercase tracking-wider mt-1">
                    Agri Verticals
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    Seeds, PGR & More
                  </div>
                </div>
              </div>

            </div>
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
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-stone-50 border border-amber-200/40 h-[460px] flex items-center justify-center">
                <div className="flex flex-col items-center justify-center p-8 text-center space-y-3">
                  <div className="w-24 h-24 rounded-full bg-stone-100 border border-amber-200/60 shadow-inner flex items-center justify-center">
                    <User className="w-14 h-14 text-amber-600/30 stroke-[1.25]" />
                  </div>
                </div>
                
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
                <span>Founding Leadership & Vision</span>
              </div>

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
                    {directorSpotlight.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">
                    {directorSpotlight.designation}
                  </div>
                </div>

                <button
                  onClick={() => setActivePage('about')}
                  className="px-6 py-2.5 rounded-full border-2 border-botanical-800 text-botanical-900 hover:bg-botanical-800 hover:text-white transition-all text-xs font-semibold tracking-wider uppercase flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Director's Journey & Team</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Field Crops Card */}
            <div 
              onClick={() => {
                if (onSelectCategory) onSelectCategory('field-crops');
                setActivePage('products');
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-ivory-50 border border-gold-300/30 hover:border-botanical-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="h-44 sm:h-60 overflow-hidden relative bg-black border-b border-amber-200/40 flex items-center justify-center p-3 sm:p-5">
                <img
                  src="/coming-soon-gold.png"
                  alt="Field Crops"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-botanical-800 text-white border border-botanical-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md z-10">
                  Cereals & Pulses
                </span>
              </div>
              <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors">
                  Field Crops
                </h3>
                <div className="pt-1 sm:pt-2 flex items-center gap-1.5 text-xs font-bold text-botanical-800 group-hover:text-botanical-900">
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
              <div className="h-44 sm:h-60 overflow-hidden relative bg-black border-b border-amber-200/40 flex items-center justify-center p-3 sm:p-5">
                <img
                  src="/coming-soon-gold.png"
                  alt="Vegetable Seeds"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-botanical-800 text-white border border-botanical-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md z-10">
                  22+ Hybrid Greens & Fruits
                </span>
              </div>
              <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors">
                  Vegetable Seeds
                </h3>
                <div className="pt-1 sm:pt-2 flex items-center gap-1.5 text-xs font-bold text-botanical-800 group-hover:text-botanical-900">
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
              <div className="h-44 sm:h-60 overflow-hidden relative bg-black border-b border-amber-200/40 flex items-center justify-center p-3 sm:p-5">
                <img
                  src="/coming-soon-gold.png"
                  alt="Crop Protection"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-botanical-800 text-white border border-botanical-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md z-10">
                  Crop Care & PGR
                </span>
              </div>
              <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors">
                  Crop Protection
                </h3>
                <div className="pt-1 sm:pt-2 flex items-center gap-1.5 text-xs font-bold text-botanical-800 group-hover:text-botanical-900">
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

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActivePage('products')}
                className="bg-white rounded-2xl overflow-hidden border border-amber-200/50 hover:border-botanical-600 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group"
              >
                <div className="h-32 sm:h-44 md:h-48 overflow-hidden relative bg-black border-b border-amber-200/40 flex items-center justify-center p-2.5 sm:p-3.5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-botanical-800 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold border border-botanical-600 shadow-sm truncate max-w-[85%]">
                    {product.categoryName}
                  </div>
                </div>

                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                  <div className="text-center">
                    <h4 className="font-serif text-base sm:text-xl font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors text-center tracking-wide">
                      {product.name}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-center text-[10px] sm:text-xs">
                    <span className="text-botanical-800 font-bold group-hover:underline flex items-center gap-1 shrink-0">
                      View Variety <ArrowRight className="w-3 h-3" />
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-black rounded-2xl px-5 py-3 inline-flex items-center justify-center border border-white/10 shadow-xl mb-2">
              <img
                src="/richmud-crest-logo.png"
                alt="richmud"
                className="h-24 sm:h-32 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Sprout className="w-4 h-4 text-emerald-300" />
              <span>Grow with richmud</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Partner with India’s Most Trusted <br />
            <span className="text-gold-gradient">Seed Science Network</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Whether you are a progressive grower seeking certified high-vigor hybrids or a reputable agri-input distributor aiming to become an authorized richmud dealer, our doors are open.
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
