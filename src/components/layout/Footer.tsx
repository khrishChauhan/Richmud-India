import React, { useState } from 'react';
import { SeedLogo } from '../common/SeedLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Award,
  Globe2,
  Clock
} from 'lucide-react';
import { ProductCategory } from '../../types';

interface FooterProps {
  setActivePage: (page: string) => void;
  onSelectCategory?: (category: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onSelectCategory }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNav = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCat = (cat: ProductCategory) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    setActivePage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-gray-300 pt-16 pb-8 border-t border-gold-400/20 relative overflow-hidden">
      {/* Background Subtle Gold Radiance */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      {/* Luxury Logo Watermark in Footer */}
      <img
        src="/richmud-logo.png"
        alt=""
        className="absolute -bottom-8 right-4 w-72 sm:w-96 opacity-[0.035] pointer-events-none select-none blur-[0.3px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Brand Column (Span 2 on Desktop, Full Width on Mobile) */}
          <div className="lg:col-span-2 space-y-4">
            <SeedLogo variant="dark" size="lg" />
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
              richmud is a premier agricultural crop science and seed research enterprise. 
              Guided by our pledge, <span className="text-gold-300 italic inline-flex items-center gap-1.5">"Good seed <span className="w-1.5 h-1.5 rounded-full bg-botanical-400 inline-block" /> good life"</span>, 
              we empower over 10 million farmers across India with elite hybrid genetics and harvest reliability.
            </p>

            <div className="flex flex-wrap gap-2.5 text-[11px] text-gray-400">
              <div className="flex items-center gap-1.5 bg-botanical-900/90 border border-botanical-600 px-3 py-1 rounded-full text-white shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-medium">NABL Accredited</span>
              </div>
              <div className="flex items-center gap-1.5 bg-botanical-900/90 border border-botanical-600 px-3 py-1 rounded-full text-white shadow-sm">
                <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-medium">ISTA Compliant</span>
              </div>
            </div>
          </div>

          {/* 2-Column Mobile Links Grid (Navigation & Products side by side on mobile) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-400 font-semibold font-sans">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button onClick={() => handleNav('home')} className="hover:text-gold-300 transition-colors text-left">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('about')} className="hover:text-gold-300 transition-colors text-left">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('business')} className="hover:text-gold-300 transition-colors text-left">
                    Core Business
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('products')} className="hover:text-gold-300 transition-colors text-left">
                    Seed Catalog
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('gallery')} className="hover:text-gold-300 transition-colors text-left">
                    Photo Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('dealers')} className="hover:text-gold-300 transition-colors text-gold-400 font-medium text-left">
                    Dealer Locator
                  </button>
                </li>
              </ul>
            </div>

            {/* Seed Categories */}
            <div className="space-y-3">
              <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-400 font-semibold font-sans">
                Products
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button onClick={() => handleCat('field-crops')} className="hover:text-gold-300 transition-colors text-left">
                    Field Crops
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCat('vegetable-seeds')} className="hover:text-gold-300 transition-colors text-left">
                    Vegetable Seeds
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCat('fodder-crops')} className="hover:text-gold-300 transition-colors text-left">
                    Fodder Crops
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCat('jute-crops')} className="hover:text-gold-300 transition-colors text-left">
                    Jute Crops
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCat('crop-protection')} className="hover:text-gold-300 transition-colors text-left">
                    Crop Protection
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter & Farmer Helpline */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-400 font-semibold font-sans">
              Stay Connected
            </h4>
            <p className="text-xs text-gray-400">
              Subscribe for seasonal crop advisories and variety releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email address..."
                  required
                  className="w-full bg-white/5 border border-gold-500/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-gold-gradient text-charcoal-950 rounded-lg flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-gold-400 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>

            <div className="pt-2 border-t border-gray-800">
              <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1">
                Toll-Free Farmer Advisory
              </div>
              <a
                href="tel:18001207267"
                className="text-sm sm:text-base font-serif font-bold text-gold-400 hover:text-gold-300 flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>1800-120-PANSEEDS</span>
              </a>
              <div className="text-[10px] text-gray-500 mt-0.5">Mon - Sat (9:00 AM - 6:00 PM IST)</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Corporate Info */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-gray-500 gap-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <span>© {new Date().getFullYear()} richmud India Pvt. Ltd. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="italic text-gold-400">"Good seed <span className="w-1.5 h-1.5 rounded-full bg-botanical-400 inline-block mx-0.5" /> good life"</span>
          </div>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
            <button onClick={() => handleNav('careers')} className="hover:text-gold-300 transition-colors">
              Careers
            </button>
            <button onClick={() => handleNav('media')} className="hover:text-gold-300 transition-colors">
              Press & Media
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-gold-300 transition-colors">
              Headquarters
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
