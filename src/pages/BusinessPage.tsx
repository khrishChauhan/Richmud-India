import React, { useState } from 'react';
import { 
  FlaskConical, 
  ShieldCheck, 
  TrendingUp, 
  Dna, 
  Microscope, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Truck,
  Users2,
  Cpu,
  Layers
} from 'lucide-react';

interface Pillar {
  id: string;
  number: string;
  name: string;
  badge: string;
  icon: any;
  headline: string;
  tagline: string;
  overview: string;
  stats: { value: string; label: string }[];
  keyHighlights: { title: string; desc: string }[];
  image: string;
}

const pillars: Pillar[] = [
  {
    id: 'rd',
    number: '01',
    name: 'Research & Development',
    badge: 'Genetic Vanguard',
    icon: FlaskConical,
    headline: 'Molecular Crop Breeding & Climate-Smart Hybridization',
    tagline: 'Where plant genomics meet traditional agronomist instinct',
    overview: 'Our R&D division is the scientific heartbeat of PAN Seeds. Spread across 4 multi-location research stations and central biotechnology laboratories, our team of Ph.D. geneticists, plant pathologists, and breeders work tirelessly to isolate traits for drought tolerance, heat endurance, and viral immunity.',
    stats: [
      { value: '45+ Acres', label: 'Breeding & Trial Plots' },
      { value: '20,000+', label: 'Germplasm Accessions' },
      { value: '7+ Years', label: 'Rigorous Multi-Zone Testing' },
    ],
    keyHighlights: [
      {
        title: 'Marker-Assisted Selection (MAS)',
        desc: 'Accelerating breeding timelines by identifying target DNA markers for viral resistance (ToLCV, YVMV) at seedling stage.',
      },
      {
        title: 'Germplasm Cryo-Vault',
        desc: 'Preserving thousands of indigenous and wild crop relatives to provide genetic diversity for the next century of breeding.',
      },
      {
        title: 'Multi-Climate Testing Network',
        desc: 'Screening seed candidates across 18 distinct Indian agro-climatic zones before commercial release.',
      },
      {
        title: 'Precision Hydroponics & Greenhouses',
        desc: 'Climate-controlled automated greenhouses for year-round rapid generation advancement and backcrossing.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'qa',
    number: '02',
    name: 'Quality Assurance',
    badge: 'Zero-Defect Guarantee',
    icon: ShieldCheck,
    headline: 'NABL Accredited Testing & Seed Longevity Standards',
    tagline: 'Guaranteed 98%+ physical purity and exceptional germination vigor',
    overview: 'Every single seed pouch that bears the PAN Seeds emblem passes through our high-precision Quality Assurance laboratories. Certified under Seeds Act guidelines and international ISTA protocols, our QA specialists verify physical purity, moisture stability, and seedling vigor before dispatch.',
    stats: [
      { value: '98%+', label: 'Physical Purity Standard' },
      { value: '100% GOT', label: 'Grow-Out Genetic Verification' },
      { value: '3-Layer', label: 'Foil Moisture Barrier Pack' },
    ],
    keyHighlights: [
      {
        title: 'Automated Seed Germination Chambers',
        desc: 'Calibrated photoperiod and temperature cabinets simulating diverse field soil conditions to certify sprout power.',
      },
      {
        title: 'Grow-Out Tests (GOT)',
        desc: 'Verifying true hybrid vigor and genetic uniformity in live field plots prior to commercial lot certification.',
      },
      {
        title: 'Advanced Seed Coating Technology',
        desc: 'Polymer film coating containing micronutrient primers and eco-safe bio-fungicides for protected seedling establishment.',
      },
      {
        title: 'Accelerated Aging Assays',
        desc: 'Thermal stress simulations verifying that seed vigor remains immaculate throughout transportation and storage.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sales',
    number: '03',
    name: 'Sales & Marketing',
    badge: 'Grassroots Reach',
    icon: TrendingUp,
    headline: 'Nationwide Distribution & Farmer Advisory Ecosystem',
    tagline: 'Connecting 8,500+ dealers with 10 million progressive growers',
    overview: 'High quality seeds are only as good as the trust they foster in rural communities. Our nationwide sales and extension network operates through verified agricultural input dealers, supported by dedicated agronomists who live and work side-by-side with farming cooperatives.',
    stats: [
      { value: '8,500+', label: 'Authorized Seed Stockists' },
      { value: '22 States', label: 'Pan-India Distribution' },
      { value: '1,500+', label: 'Annual Kisan Field Melas' },
    ],
    keyHighlights: [
      {
        title: 'Anti-Counterfeiting QR Serialization',
        desc: 'Every seed pouch features a tamper-proof QR code that farmers scan to instantly verify authenticity and batch origin.',
      },
      {
        title: 'Grassroots Kisan Melas & Demos',
        desc: 'Hands-on field days showing farmers standing crop comparisons, yield metrics, and direct harvest weigh-ins.',
      },
      {
        title: 'Toll-Free Agronomist Hotline',
        desc: 'Multi-lingual customer support offering personalized sowing recommendations and disease diagnostics in 6 regional languages.',
      },
      {
        title: 'Rapid Cold-Chain Logistics',
        desc: 'Climate-monitored warehouse hubs ensuring seed viability is preserved from regional factory to remote village mandis.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
  },
];

export const BusinessPage: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('rd');

  const activePillar = pillars.find((p) => p.id === activePillarId) || pillars[0];

  return (
    <div className="pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:w-3.5 text-gold-400" />
            <span>Industrial & Scientific Engine</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Our Core Business & <br />
            <span className="text-gold-gradient">The 3-Pillar Enterprise</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base lg:text-lg font-light leading-relaxed">
            From molecular DNA sequencing in our biotechnology laboratories to climate-controlled packaging and grassroots farmer education.
          </p>
        </div>
      </section>

      {/* 2. PILLAR NAVIGATION TABS */}
      <section className="relative z-20 -mt-8 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-2 shadow-luxury border border-gold-400/30 grid grid-cols-1 md:grid-cols-3 gap-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-3.5 ${
                  isSelected
                    ? 'bg-botanical-800 text-white shadow-md border border-gold-400/50'
                    : 'hover:bg-botanical-50/70 text-charcoal-800'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-gold-500 text-charcoal-950 font-bold shadow-sm' : 'bg-botanical-100 text-botanical-800 border border-botanical-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${isSelected ? 'text-gold-300' : 'text-gray-500'}`}>
                    Pillar {pillar.number}
                  </div>
                  <div className="text-sm font-bold font-serif">
                    {pillar.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. ACTIVE PILLAR SHOWCASE */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-botanical-800 border border-botanical-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <span>Pillar {activePillar.number}: {activePillar.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 leading-tight">
                {activePillar.headline}
              </h2>

              <p className="text-base text-gold-700 font-medium italic">
                "{activePillar.tagline}"
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {activePillar.overview}
              </p>

              {/* Key Metrics Counters */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-y border-gray-100 py-6">
                {activePillar.stats.map((st, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-700">
                      {st.value}
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-0.5">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights 2x2 Grid */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs uppercase tracking-widest text-charcoal-900 font-bold">
                  Operational Core Capabilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activePillar.keyHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-ivory-50 border border-gold-300/30 hover:border-gold-500 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-charcoal-900">
                        <CheckCircle2 className="w-4 h-4 text-botanical-700 shrink-0" />
                        <span>{hl.title}</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed pl-6">
                        {hl.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-400/30 sticky top-28">
                <img
                  src={activePillar.image}
                  alt={activePillar.name}
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                    PAN Seeds Infrastructure
                  </div>
                  <div className="font-serif text-2xl font-bold mt-1">
                    {activePillar.name} Facilities
                  </div>
                  <p className="text-xs text-gray-300 mt-2">
                    Engineered to global standards for high seed vigor, longevity, and disease resistance.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INTEGRATED VALUE CHAIN BANNER */}
      <section className="py-16 bg-ivory-100 border-t border-gold-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs uppercase tracking-widest text-gold-700 font-semibold">
            Seamless Synergies
          </div>
          <h2 className="text-3xl font-serif font-bold text-charcoal-900">
            From Lab Bench to the Harvest Floor
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our three pillars do not operate in silos. Plant breeding insights flow directly to our quality controllers, whose findings guide field agronomists working directly with farmers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
            <div className="p-6 rounded-2xl bg-white border border-gold-300/30 text-center space-y-2">
              <div className="font-serif text-lg font-bold text-charcoal-900">1. Discovery</div>
              <div className="text-xs text-gray-500">Molecular breeding & trait mapping under stress regimes</div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gold-300/30 text-center space-y-2">
              <div className="font-serif text-lg font-bold text-charcoal-900">2. Certification</div>
              <div className="text-xs text-gray-500">NABL rigor, ISTA germination verification & anti-counterfeiting</div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gold-300/30 text-center space-y-2">
              <div className="font-serif text-lg font-bold text-charcoal-900">3. Harvest Success</div>
              <div className="text-xs text-gray-500">Last-mile cold delivery, dealer support & agronomist helplines</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
