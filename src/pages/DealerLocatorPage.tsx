import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  Phone, 
  Search, 
  Lock, 
  PlusCircle, 
  Trash2, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Store, 
  Clock, 
  ExternalLink,
  RotateCcw,
  Building,
  KeyRound,
  AlertCircle
} from 'lucide-react';

export interface ManagedDealer {
  id: string;
  name: string;
  contactPerson: string;
  cityAndState: string;
  phone: string;
  address: string;
}

const DEFAULT_DEALERS: ManagedDealer[] = [
  {
    id: 'rm-dl-01',
    name: 'Kisan Seva Kendra',
    contactPerson: 'Suresh Prasad Singh',
    cityAndState: 'Lakhisarai, Bihar',
    phone: '',
    address: '',
  },
  {
    id: 'rm-dl-02',
    name: 'Maa Vaishno Krishi Seva Kendra',
    contactPerson: 'Rajiv Kumar',
    cityAndState: 'Lakhisarai, Bihar',
    phone: '',
    address: '',
  },
];

const PLACEHOLDER_CARDS = [
  {
    id: 'ph-1',
    badge: 'Network Expansion',
    headline: 'Uploading Soon...',
    description: 'New dealer verification and stock audit currently underway for regional agricultural centers.',
    footerTag: 'Verification In Progress',
  },
  {
    id: 'ph-2',
    badge: 'Kisan Seva Kendra',
    headline: 'Uploading Soon...',
    description: 'Direct farm-gate distribution hubs onboarding across Eastern & Northern zones.',
    footerTag: 'Expansion Underway',
  },
  {
    id: 'ph-3',
    badge: 'Regional Stockist',
    headline: 'Uploading Soon...',
    description: 'Certified hybrid seed stockists and distribution partners being vetted.',
    footerTag: 'Appointment Pending',
  },
];

const LOCAL_STORAGE_KEY = 'richmud_authorized_dealers_v3';
const ADMIN_PIN = 'RM2025';

interface DealerLocatorPageProps {
  setActivePage?: (page: string) => void;
}

export const DealerLocatorPage: React.FC<DealerLocatorPageProps> = ({ setActivePage }) => {
  // Dealers state with localStorage persistence
  const [dealers, setDealers] = useState<ManagedDealer[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error reading dealers from localStorage:', e);
    }
    return DEFAULT_DEALERS;
  });

  // Persist dealers on change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dealers));
    } catch (e) {
      console.error('Error saving dealers to localStorage:', e);
    }
  }, [dealers]);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Admin Portal State
  const [showPinModal, setShowPinModal] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [isManagementOpen, setIsManagementOpen] = useState(false);

  // New dealer form state
  const [newDealerName, setNewDealerName] = useState('');
  const [newProprietor, setNewProprietor] = useState('');
  const [newCityState, setNewCityState] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [formSuccessMessage, setFormSuccessMessage] = useState('');

  // Filtered dealers based on search
  const filteredDealers = useMemo(() => {
    if (!searchQuery.trim()) return dealers;
    const q = searchQuery.toLowerCase().trim();
    return dealers.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.contactPerson.toLowerCase().includes(q) ||
        d.cityAndState.toLowerCase().includes(q) ||
        d.address.toLowerCase().includes(q) ||
        d.phone.includes(q)
    );
  }, [dealers, searchQuery]);

  // Handle PIN verification
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPin.trim().toUpperCase() === ADMIN_PIN) {
      setPinError('');
      setEnteredPin('');
      setShowPinModal(false);
      setIsManagementOpen(true);
    } else {
      setPinError('Incorrect PIN. Please enter the valid security code (Default: RM2025).');
    }
  };

  // Handle adding new dealer
  const handleAddDealer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDealerName.trim() || !newCityState.trim() || !newPhone.trim()) {
      return;
    }

    const created: ManagedDealer = {
      id: `dl-${Date.now()}`,
      name: newDealerName.trim(),
      contactPerson: newProprietor.trim() || 'Authorized Representative',
      cityAndState: newCityState.trim(),
      phone: newPhone.trim(),
      address: newAddress.trim() || `${newCityState.trim()}, India`,
    };

    setDealers((prev) => [created, ...prev]);
    setNewDealerName('');
    setNewProprietor('');
    setNewCityState('');
    setNewPhone('');
    setNewAddress('');
    setFormSuccessMessage(`"${created.name}" was successfully added to Authorized Dealers!`);

    setTimeout(() => {
      setFormSuccessMessage('');
    }, 4000);
  };

  // Handle deleting dealer
  const handleDeleteDealer = (id: string, name: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove "${name}" from Authorized Dealers?`
    );
    if (confirmed) {
      setDealers((prev) => prev.filter((d) => d.id !== id));
    }
  };

  // Handle reset to default seed
  const handleResetDefaults = () => {
    const confirmed = window.confirm(
      'Reset Authorized Dealers back to default initial records?'
    );
    if (confirmed) {
      setDealers(DEFAULT_DEALERS);
      setFormSuccessMessage('Authorized Dealers restored to initial defaults.');
      setTimeout(() => setFormSuccessMessage(''), 3000);
    }
  };

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

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-xs font-semibold uppercase tracking-widest shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Certified Stockist Network</span>
              </div>

              {/* Discrete Dealer Admin Access Button */}
              <button
                onClick={() => {
                  setPinError('');
                  setEnteredPin('');
                  setShowPinModal(true);
                }}
                title="Richmud Team Dealer Admin Portal"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900/90 hover:bg-black text-gold-400 hover:text-gold-300 border border-gold-500/40 text-xs font-semibold tracking-wider transition-all shadow-sm cursor-pointer hover:border-gold-400"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Dealer Admin</span>
              </button>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Authorized Dealers & Stockists
          </h1>

          <p className="text-gold-300 font-serif text-lg sm:text-2xl font-light italic max-w-2xl mx-auto">
            Mud To Gold
          </p>

          <p className="text-stone-300 max-w-2xl mx-auto text-xs sm:text-base font-light leading-relaxed">
            Locate certified Richmud seed stockists and authorized agro-retail hubs ensuring genuine, high-germination seed lots.
          </p>
        </div>
      </section>

      {/* 2. SEARCH BAR & QUICK STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-luxury border border-amber-300/60 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by dealer name, proprietor, district, or city..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-stone-50 focus:bg-white"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto shrink-0 text-xs">
            <span className="text-stone-500 font-medium">
              Active Outlets: <strong className="text-emerald-800 font-bold">{dealers.length}</strong>
            </span>
            <button
              onClick={() => {
                setPinError('');
                setEnteredPin('');
                setShowPinModal(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition-colors cursor-pointer"
            >
              <KeyRound className="w-3.5 h-3.5 text-gold-600" />
              <span>Manage Dealers</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. DEALERS GRID: ACTIVE DEALERS + PLACEHOLDER CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Verified Stockists & Network Expansion
            </h2>
            <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
              Bihar & Pan-India Hubs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            
            {/* Active Registered Dealers */}
            {filteredDealers.map((dealer) => (
              <div
                key={dealer.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-stone-200/90 hover:border-emerald-700/60 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Authorized Dealer</span>
                    </span>
                    <span className="text-xs font-semibold text-stone-500">
                      {dealer.cityAndState}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                      {dealer.name}
                    </h3>
                    <p className="text-xs font-semibold text-gold-700 mt-1">
                      Proprietor: {dealer.contactPerson}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* 2 to 3 Elegant Placeholder Cards showing "Uploading Soon..." alongside active dealers */}
            {PLACEHOLDER_CARDS.map((card) => (
              <div
                key={card.id}
                className="group relative bg-stone-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border-2 border-dashed border-amber-300/80 hover:border-solid hover:border-gold-400 shadow-2xs hover:shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center"
              >
                <div className="space-y-4 flex flex-col items-center">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200/80 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                    {card.badge}
                  </span>

                  <div className="w-14 h-14 rounded-2xl bg-amber-50/80 border border-amber-200/60 flex items-center justify-center text-amber-700 shadow-2xs">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-950 transition-colors">
                      {card.headline}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed max-w-xs mx-auto">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-amber-200/40 text-[10px] uppercase tracking-wider font-bold text-amber-700">
                  {card.footerTag}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. DEALERSHIP ONBOARDING CTA BANNER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-botanical-900 via-stone-950 to-black text-white border-2 border-gold-400/40 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400">
              Commercial Distributorship
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Become an Authorized Richmud Stockist
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-md">
              Partner with Richmud India Pvt Ltd. to retail elite hybrid seeds and certified Agri inputs with protected territory rights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (setActivePage) {
                  setActivePage('contact');
                } else {
                  window.location.hash = 'contact';
                }
              }}
              className="px-6 py-3 rounded-full bg-gold-gradient text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:scale-105 transition-all cursor-pointer"
            >
              Apply for Dealership
            </button>
            <a
              href="tel:+917888585478"
              className="px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-mono text-xs transition-colors"
            >
              +91-7888585478
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. MODAL 1: PIN AUTHENTICATION MODAL                      */}
      {/* ========================================================= */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-7 shadow-2xl border-2 border-gold-400/40 relative">
            <button
              onClick={() => {
                setShowPinModal(false);
                setPinError('');
                setEnteredPin('');
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-gold-300 flex items-center justify-center text-gold-700 mx-auto shadow-2xs">
                <Lock className="w-6 h-6 text-gold-600" />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Dealer Admin Access
                </h3>
                <p className="text-xs text-stone-500">
                  Enter security PIN to access the Authorized Dealer management panel.
                </p>
                <div className="text-[11px] font-mono text-gold-700 pt-1">
                  Default Access PIN: <span className="font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">RM2025</span>
                </div>
              </div>

              <form onSubmit={handlePinSubmit} className="space-y-4 text-left">
                <div>
                  <input
                    type="password"
                    autoFocus
                    required
                    value={enteredPin}
                    onChange={(e) => {
                      setEnteredPin(e.target.value);
                      setPinError('');
                    }}
                    placeholder="Enter PIN (RM2025)"
                    className="w-full text-center tracking-widest font-mono text-base px-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40 bg-stone-50"
                  />
                  {pinError && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-600 mt-2 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{pinError}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-stone-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-md hover:ring-2 hover:ring-gold-400/50 transition-all cursor-pointer"
                >
                  Authenticate & Open
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. MODAL 2: DEALER SELF-MANAGEMENT PORTAL (ADD / REMOVE)  */}
      {/* ========================================================= */}
      {isManagementOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border-2 border-gold-400/60 relative my-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-stone-200 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Authenticated Session • Richmud Team Portal</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Dealer Self-Management Portal
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Add or remove Authorized Dealers in real-time. Changes persist in your browser across all sessions.
                </p>
              </div>

              <button
                onClick={() => setIsManagementOpen(false)}
                className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors shrink-0 cursor-pointer"
                aria-label="Close Admin Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Notification alert */}
            {formSuccessMessage && (
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{formSuccessMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              
              {/* Form Column: Add New Dealer (Span 5) */}
              <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-5 border border-stone-200/90 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                  <PlusCircle className="w-4 h-4 text-gold-600" />
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    Add New Authorized Dealer
                  </h4>
                </div>

                <form onSubmit={handleAddDealer} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-stone-700 mb-1">
                      Dealer Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newDealerName}
                      onChange={(e) => setNewDealerName(e.target.value)}
                      placeholder="e.g. Kisan Seva Kendra"
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:border-gold-500 text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-stone-700 mb-1">
                      Proprietor / Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={newProprietor}
                      onChange={(e) => setNewProprietor(e.target.value)}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:border-gold-500 text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-stone-700 mb-1">
                      District / City & State *
                    </label>
                    <input
                      type="text"
                      required
                      value={newCityState}
                      onChange={(e) => setNewCityState(e.target.value)}
                      placeholder="e.g. Lakhisarai, Bihar"
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:border-gold-500 text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      placeholder="e.g. +91-9572144270"
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:border-gold-500 text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-stone-700 mb-1">
                      Address / Location *
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                      placeholder="e.g. Main Market, Station Road, Halsi"
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:border-gold-500 text-xs bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-gold-gradient text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Save Authorized Dealer</span>
                  </button>
                </form>
              </div>

              {/* List Column: Active Dealers Management (Span 7) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <Store className="w-4 h-4 text-emerald-800" />
                    <h4 className="font-serif text-base font-bold text-stone-900">
                      Currently Active Dealers ({dealers.length})
                    </h4>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetDefaults}
                    className="text-[11px] font-semibold text-stone-500 hover:text-stone-800 flex items-center gap-1 transition-colors cursor-pointer"
                    title="Restore initial default dealers"
                  >
                    <RotateCcw className="w-3 h-3 text-gold-600" />
                    <span>Restore Defaults</span>
                  </button>
                </div>

                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                  {dealers.length === 0 ? (
                    <div className="p-8 text-center bg-stone-50 rounded-2xl border border-dashed border-stone-300 space-y-2">
                      <p className="text-xs text-stone-500">
                        No authorized dealers currently registered.
                      </p>
                      <button
                        onClick={handleResetDefaults}
                        className="text-xs font-bold text-gold-700 hover:underline"
                      >
                        Restore initial default records
                      </button>
                    </div>
                  ) : (
                    dealers.map((dealer, idx) => (
                      <div
                        key={dealer.id}
                        className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:border-gold-400 flex items-start justify-between gap-3 transition-colors"
                      >
                        <div className="space-y-1 text-left">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-600 font-bold text-[10px] flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <h5 className="font-serif font-bold text-sm text-stone-900">
                              {dealer.name}
                            </h5>
                          </div>
                          <div className="text-xs text-gold-700 font-medium pl-7">
                            Proprietor: {dealer.contactPerson} • {dealer.cityAndState}
                          </div>
                          {dealer.address ? (
                            <div className="text-[11px] text-stone-500 pl-7">
                              {dealer.address}
                            </div>
                          ) : null}
                          {dealer.phone ? (
                            <div className="text-xs font-mono font-semibold text-stone-700 pl-7 pt-0.5">
                              📞 {dealer.phone}
                            </div>
                          ) : null}
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteDealer(dealer.id, dealer.name)}
                          className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors shrink-0 cursor-pointer"
                          title={`Delete ${dealer.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <span>All changes automatically update the public website.</span>
              <button
                onClick={() => setIsManagementOpen(false)}
                className="px-5 py-2 rounded-full bg-stone-900 hover:bg-black text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Done / Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
