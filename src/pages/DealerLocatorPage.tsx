import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Navigation, 
  Sparkles,
  Building,
  CheckCircle2,
  ChevronRight,
  Filter
} from 'lucide-react';
import { dealersData, statesList } from '../data/dealers';
import { Dealer } from '../types';

export const DealerLocatorPage: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('All States');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDealerId, setActiveDealerId] = useState<string>(dealersData[0]?.id || '');

  // Filtered dealers
  const filteredDealers = useMemo(() => {
    return dealersData.filter((dealer) => {
      // State filter
      if (selectedState !== 'All States' && dealer.state !== selectedState) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          dealer.name.toLowerCase().includes(q) ||
          dealer.city.toLowerCase().includes(q) ||
          dealer.contactPerson.toLowerCase().includes(q) ||
          dealer.pincode.includes(q) ||
          dealer.address.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedState, searchQuery]);

  const activeDealer = useMemo(() => {
    return (
      filteredDealers.find((d) => d.id === activeDealerId) ||
      filteredDealers[0] ||
      null
    );
  }, [filteredDealers, activeDealerId]);

  return (
    <div className="pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:w-3.5 text-gold-400" />
            <span>Authorized Distribution Network</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Locate a Certified <br />
            <span className="text-gold-gradient">PAN Seeds Stockist</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base lg:text-lg font-light leading-relaxed">
            Find authentic PAN Seeds dealers, certified agro-input stores, and regional stockists near you. Guaranteed 100% genuine seed lots.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & STATE FILTER BAR */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-4 shadow-luxury border border-gold-400/30 flex flex-col md:flex-row items-center gap-4">
          
          {/* State Dropdown */}
          <div className="w-full md:w-64">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-1">
              Select State
            </label>
            <div className="relative">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-ivory-50 border border-gold-300/60 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:border-gold-500 appearance-none"
              >
                {statesList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <Filter className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gold-600 pointer-events-none" />
            </div>
          </div>

          {/* Search Box */}
          <div className="flex-1 w-full">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-1">
              Search by City, Mandi, Dealer Name or Pincode
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Ludhiana, Karnal, 141001, Kisan Suvidha..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-ivory-50 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Results Badge */}
          <div className="hidden md:flex flex-col items-end shrink-0 pt-4">
            <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
              Verified Stockists
            </span>
            <span className="font-serif text-lg font-bold text-botanical-800">
              {filteredDealers.length} Located
            </span>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SPLIT VIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Dealer Cards List (Span 5) */}
          <div className="lg:col-span-5 space-y-4 max-h-[750px] overflow-y-auto pr-2">
            {filteredDealers.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center border border-dashed border-gray-200 space-y-3">
                <Building className="w-10 h-10 text-gold-400 mx-auto opacity-50" />
                <h4 className="font-serif text-lg font-bold text-charcoal-900">
                  No stockists found
                </h4>
                <p className="text-xs text-gray-500">
                  No registered dealers matched your filter criteria. Try selecting "All States" or call our toll-free farmer helpline.
                </p>
                <a
                  href="tel:18001207267"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-botanical-800 hover:underline pt-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 1800-120-PANSEEDS (7267)</span>
                </a>
              </div>
            ) : (
              filteredDealers.map((dealer) => {
                const isSelected = activeDealer?.id === dealer.id;
                return (
                  <div
                    key={dealer.id}
                    onClick={() => setActiveDealerId(dealer.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-botanical-600 shadow-xl ring-2 ring-botanical-600/30'
                        : 'bg-white/80 hover:bg-white border-gold-200 hover:border-botanical-400 shadow-sm'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-botanical-800 px-3 py-1 rounded-full border border-botanical-600 shadow-sm">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Authorized Dealer</span>
                        </span>
                        <span className="text-xs font-bold text-charcoal-800">
                          {dealer.city}, {dealer.state}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-charcoal-900 leading-snug">
                        {dealer.name}
                      </h3>

                      <div className="text-xs text-gold-700 font-medium">
                        Contact Person: {dealer.contactPerson}
                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed">
                        {dealer.address} • Pincode: {dealer.pincode}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                      <a
                        href={`tel:${dealer.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 font-bold text-charcoal-900 hover:text-gold-700 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-gold-600" />
                        <span>{dealer.phone}</span>
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDealerId(dealer.id);
                        }}
                        className="text-xs font-semibold text-gold-700 hover:text-gold-900 flex items-center gap-1"
                      >
                        <span>Focus on Map</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Side: Interactive Mock Map Container (Span 7) */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="bg-charcoal-950 rounded-3xl p-6 border-2 border-gold-400/30 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-between">
              
              {/* Map Canvas Background Grid */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Map Title Header */}
              <div className="relative z-10 flex items-center justify-between text-white border-b border-gray-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gold-400 animate-pulse" />
                  <span className="font-serif text-lg font-bold tracking-wide">
                    PAN Seeds Pan-India Supply Grid
                  </span>
                </div>
                <div className="text-xs text-gold-400 font-mono">
                  Active Region: {selectedState}
                </div>
              </div>

              {/* Simulated Geographic Interactive Canvas with Pins */}
              <div className="relative flex-1 my-6 min-h-[380px] bg-charcoal-900/60 rounded-2xl border border-gold-500/20 overflow-hidden flex items-center justify-center">
                
                {/* Visual Geographic Contour Motif */}
                <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M20 15 Q35 10 50 20 T70 30 T80 50 T65 75 T45 85 T25 70 T15 45 Z" fill="#D4AF37" />
                  <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="25" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
                </svg>

                {/* Dealer Pins */}
                {filteredDealers.map((dealer) => {
                  const isSelected = activeDealer?.id === dealer.id;
                  return (
                    <button
                      key={dealer.id}
                      onClick={() => setActiveDealerId(dealer.id)}
                      style={{
                        left: `${dealer.coordinates.x}%`,
                        top: `${dealer.coordinates.y}%`,
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-transform ${
                        isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                      }`}
                      aria-label={`View dealer ${dealer.name}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-gold-gradient text-charcoal-950 shadow-gold-md ring-4 ring-gold-400/40'
                            : 'bg-charcoal-900 border border-gold-400 text-gold-400 group-hover:bg-gold-500 group-hover:text-charcoal-950'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>

                      {/* Pin Tooltip */}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-black/90 text-white text-[10px] font-semibold px-2 py-1 rounded whitespace-nowrap border border-gold-400/40 shadow-lg">
                        {dealer.city}: {dealer.name}
                      </span>
                    </button>
                  );
                })}

                {/* Selected Dealer Highlight Callout Card (Floating in Map) */}
                {activeDealer && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-gold-400 shadow-2xl z-30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase text-botanical-900 bg-botanical-100/90 px-2 py-0.5 rounded-md border border-botanical-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-botanical-700" />
                        <span>Selected Certified Outlet</span>
                      </div>
                      <div className="font-serif text-lg font-bold text-charcoal-900">
                        {activeDealer.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {activeDealer.address}, {activeDealer.city} ({activeDealer.state})
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`tel:${activeDealer.phone}`}
                        className="px-4 py-2 rounded-xl bg-gold-gradient text-charcoal-950 font-bold text-xs flex items-center gap-1.5 shadow-gold-sm hover:opacity-95 hover:ring-2 hover:ring-botanical-800/25"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Now</span>
                      </a>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(`${activeDealer.name} ${activeDealer.city}`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl border border-gray-300 text-charcoal-800 hover:bg-gray-100 text-xs flex items-center justify-center"
                        title="Open in Google Maps"
                      >
                        <Navigation className="w-4 h-4 text-gold-700" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Footer Note */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-2 border-t border-gray-800 pt-3">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-botanical-400" />
                  <span>All dealers stock genuine sealed PAN Seeds pouches with QR verification.</span>
                </div>
                <div className="text-gold-400 font-medium">
                  Need Dealership? Inquire via Contact Page
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
