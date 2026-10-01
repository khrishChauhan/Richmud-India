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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-gray-800/80">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <SeedLogo variant="dark" size="lg" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md pt-2">
              PAN Seeds is a premier agricultural crop science and seed research enterprise. 
              Guided by our pledge, <span className="text-gold-300 italic inline-flex items-center gap-1.5">"Good seed <span className="w-1.5 h-1.5 rounded-full bg-botanical-400 inline-block" /> good life"</span>, 
              we empower over 10 million farmers across India with elite hybrid genetics, 
              high vitality germination, and unyielding harvest reliability.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5 bg-white/5 border border-gold-500/20 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-botanical-400" />
                <span>NABL Accredited Testing</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-gold-500/20 px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5 text-botanical-400" />
                <span>ISTA Compliant Standards</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-gold-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-gold-300 transition-colors">
                  About Us & Leadership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('business')} className="hover:text-gold-300 transition-colors">
                  Core Business & R&D
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-gold-300 transition-colors">
                  Seed Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-gold-300 transition-colors">
                  Photo & Field Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('dealers')} className="hover:text-gold-300 transition-colors text-gold-400 font-medium">
                  Dealer Locator
                </button>
              </li>
            </ul>
          </div>

          {/* Seed Categories */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-sans">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleCat('field-crops')} className="hover:text-gold-300 transition-colors">
                  Field Crops (Wheat, Paddy, Mustard)
                </button>
              </li>
              <li>
                <button onClick={() => handleCat('vegetable-seeds')} className="hover:text-gold-300 transition-colors">
                  Vegetable Seeds (22+ Hybrids)
                </button>
              </li>
              <li>
                <button onClick={() => handleCat('fodder-crops')} className="hover:text-gold-300 transition-colors">
                  Fodder Crops (NutriGold Sorghum)
                </button>
              </li>
              <li>
                <button onClick={() => handleCat('jute-crops')} className="hover:text-gold-300 transition-colors">
                  Jute Crops (Tossa Golden Fiber)
                </button>
              </li>
              <li>
                <button onClick={() => handleCat('crop-protection')} className="hover:text-gold-300 transition-colors">
                  Crop Protection & Nutrition
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter & Farmer Helpline */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-sans">
              Stay Connected
            </h4>
            <p className="text-xs text-gray-400">
              Subscribe to the PAN Seeds Agronomy Journal for seasonal crop advisories, market updates, and new variety launches.
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
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-1">
                Toll-Free Farmer Advisory
              </div>
              <a
                href="tel:18001207267"
                className="text-base font-serif font-bold text-gold-400 hover:text-gold-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                1800-120-PANSEEDS (7267)
              </a>
              <div className="text-[11px] text-gray-500 mt-0.5">Mon - Sat (9:00 AM - 6:00 PM IST)</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Corporate Info */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} PAN Seeds Pvt. Ltd. All Rights Reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline italic text-gold-400">"Good seed <span className="w-1.5 h-1.5 rounded-full bg-botanical-400 inline-block mx-0.5" /> good life"</span>
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('careers')} className="hover:text-gold-300 transition-colors">
              Careers
            </button>
            <button onClick={() => handleNav('media')} className="hover:text-gold-300 transition-colors">
              Press & Media
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-gold-300 transition-colors">
              Corporate Headquarters
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
