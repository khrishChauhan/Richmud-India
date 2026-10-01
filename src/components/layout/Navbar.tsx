import React, { useState, useEffect } from 'react';
import { SeedLogo } from '../common/SeedLogo';
import { 
  ChevronDown, 
  MapPin, 
  Menu, 
  X, 
  Sprout, 
  FlaskConical, 
  Users, 
  Award, 
  Calendar, 
  Briefcase, 
  ArrowRight,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { ProductCategory } from '../../types';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onSelectCategory?: (category: ProductCategory) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activePage, 
  setActivePage,
  onSelectCategory 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsMegaOpen, setProductsMegaOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setProductsMegaOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: ProductCategory) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    setActivePage('products');
    setProductsMegaOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-amber-200/30'
          : 'bg-white/85 backdrop-blur-md border-b border-amber-200/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] sm:h-[72px]">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-none focus:ring-1 focus:ring-gold-400/50 rounded-lg p-0.5 flex items-center shrink-0"
          >
            <SeedLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center h-full space-x-0.5 xl:space-x-1">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`relative h-full flex items-center px-3 text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'home'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Home</span>
              {activePage === 'home' && (
                <span className="absolute bottom-0 inset-x-2.5 h-[1.5px] bg-[#14532D]" />
              )}
            </button>

            {/* About Us Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`relative h-full flex items-center gap-1.5 px-3 text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                  activePage === 'about'
                    ? 'text-[#14532D] font-semibold'
                    : 'text-stone-700 hover:text-[#D4AF37]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 stroke-[1.5] transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-gold-600' : 'text-stone-400'}`} />
                {activePage === 'about' && (
                  <span className="absolute bottom-0 inset-x-2.5 h-[1.5px] bg-[#14532D]" />
                )}
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-1.5 z-50">
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-amber-200/40 p-2 animate-in fade-in zoom-in-95 duration-150">
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-50 text-xs font-medium text-stone-800 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-stone-900 group-hover:text-[#14532D]">Corporate Overview</div>
                        <div className="text-[11px] text-stone-500">30+ years of seed excellence</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#14532D] transition-opacity" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-50 text-xs font-medium text-stone-800 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-stone-900 group-hover:text-[#14532D]">Vision, Mission & Ethos</div>
                        <div className="text-[11px] text-stone-500">Our guiding principles</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#14532D] transition-opacity" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-50 text-xs font-medium text-stone-800 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-stone-900 group-hover:text-[#14532D]">Director's Journey</div>
                        <div className="text-[11px] text-stone-500">Founding story & milestones</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#14532D] transition-opacity" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-50 text-xs font-medium text-stone-800 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-stone-900 group-hover:text-[#14532D]">Board & Leadership</div>
                        <div className="text-[11px] text-stone-500">Visionary scientific leadership</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#14532D] transition-opacity" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Core Business */}
            <button
              onClick={() => handleNavClick('business')}
              className={`relative h-full flex items-center px-3 text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'business'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Core Business</span>
              {activePage === 'business' && (
                <span className="absolute bottom-0 inset-x-2.5 h-[1.5px] bg-[#14532D]" />
              )}
            </button>

            {/* Products Mega Menu */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setProductsMegaOpen(true)}
              onMouseLeave={() => setProductsMegaOpen(false)}
            >
              <button
                onClick={() => handleNavClick('products')}
                className={`relative h-full flex items-center gap-1.5 px-3 text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                  activePage === 'products'
                    ? 'text-[#14532D] font-semibold'
                    : 'text-stone-700 hover:text-[#D4AF37]'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 stroke-[1.5] transition-transform duration-200 ${productsMegaOpen ? 'rotate-180 text-gold-600' : 'text-stone-400'}`} />
                {activePage === 'products' && (
                  <span className="absolute bottom-0 inset-x-2.5 h-[1.5px] bg-[#14532D]" />
                )}
              </button>

              {productsMegaOpen && (
                <div className="absolute top-full -left-20 w-[640px] pt-1.5 z-50">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-amber-200/40 p-5 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-3">
                      <span className="text-xs uppercase tracking-wider font-semibold text-gold-700">Seed Catalog & Crop Science</span>
                      <button 
                        onClick={() => handleNavClick('products')} 
                        className="text-xs text-gold-600 hover:text-gold-800 flex items-center gap-1 font-medium"
                      >
                        View Full Catalog <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleCategoryClick('field-crops')}
                        className="text-left p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <Sprout className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Field Crops</div>
                          <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">Wheat, Paddy, Mustard, Maize, Pulses</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('vegetable-seeds')}
                        className="text-left p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <Sprout className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Vegetable Seeds</div>
                          <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">22+ Hybrid Greens, Gourds, Roots & Solanaceous</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('fodder-crops')}
                        className="text-left p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <Sprout className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Fodder Crops</div>
                          <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">NutriGold Sorghum, Berseem Clover</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('jute-crops')}
                        className="text-left p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <Sprout className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Jute Crops</div>
                          <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">Golden Fiber Tossa & White Jute</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('crop-protection')}
                        className="col-span-2 text-left p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-3 group bg-stone-50/50"
                      >
                        <div className="w-9 h-9 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <FlaskConical className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Crop Protection & Bio-Nutrition</div>
                          <div className="text-[11px] text-stone-500 mt-0.5">Systemic Insecticides, Broad-spectrum Fungicides, Herbicides & PanVigor PGR</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Gallery */}
            <button
              onClick={() => handleNavClick('gallery')}
              className={`relative h-full flex items-center px-3 text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'gallery'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Gallery</span>
              {activePage === 'gallery' && (
                <span className="absolute bottom-0 inset-x-2.5 h-[1.5px] bg-[#14532D]" />
              )}
            </button>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`relative h-full flex items-center px-3 text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'careers'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Careers</span>
              {activePage === 'careers' && (
                <span className="absolute bottom-0 inset-x-2.5 h-[1.5px] bg-[#14532D]" />
              )}
            </button>

            {/* Media Center */}
            <button
              onClick={() => handleNavClick('media')}
              className={`relative h-full flex items-center px-3 text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'media'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Media Center</span>
              {activePage === 'media' && (
                <span className="absolute bottom-0 inset-x-2.5 h-[1.5px] bg-[#14532D]" />
              )}
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`relative h-full flex items-center px-3 text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'contact'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Contact</span>
              {activePage === 'contact' && (
                <span className="absolute bottom-0 inset-x-2.5 h-[1.5px] bg-[#14532D]" />
              )}
            </button>
          </nav>

          {/* Action Button: Dealer Locator */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <button
              onClick={() => handleNavClick('dealers')}
              className={`whitespace-nowrap px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase ${
                activePage === 'dealers'
                  ? 'bg-[#14532D] text-white border-[#14532D] shadow-sm'
                  : 'border-[#14532D]/40 text-[#14532D] hover:bg-[#14532D] hover:text-white hover:border-[#14532D] bg-transparent'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Dealer Locator</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={() => handleNavClick('dealers')}
              className="px-3 py-1.5 rounded-full border border-[#14532D]/40 text-[#14532D] text-[11px] font-semibold flex items-center gap-1 hover:bg-[#14532D] hover:text-white transition-colors whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Dealers</span>
            </button>

            {/* Accessible Animated Hamburger Button (44x44px touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl text-stone-800 hover:bg-stone-100/70 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-5 h-[2px] bg-stone-800 rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-stone-800 rounded-full transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-stone-800 rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-over Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-stone-950/40 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Luxury Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[86%] max-w-sm bg-white/95 backdrop-blur-2xl border-l border-amber-200/40 z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-[70px] border-b border-amber-200/25 shrink-0 bg-white/60">
          <SeedLogo size="sm" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Drawer Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 overscroll-contain">
          {/* Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-between ${
              activePage === 'home'
                ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span>Home</span>
            {activePage === 'home' && <span className="w-1.5 h-1.5 rounded-full bg-[#14532D]" />}
          </button>

          {/* About Us Accordion */}
          <div className="rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-between ${
                activePage === 'about'
                  ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                  : 'text-stone-800 hover:bg-stone-50'
              }`}
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                  mobileAboutOpen ? 'rotate-180 text-gold-600' : ''
                }`}
              />
            </button>

            {mobileAboutOpen && (
              <div className="pl-4 pr-1 py-1 space-y-1 bg-stone-50/70 rounded-xl my-1 border-l-2 border-gold-400/40 ml-3">
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors"
                >
                  Corporate Overview
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors"
                >
                  Vision, Mission & Ethos
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors"
                >
                  Director's Journey & Heritage
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors"
                >
                  Board of Directors & Scientists
                </button>
              </div>
            )}
          </div>

          {/* Core Business */}
          <button
            onClick={() => handleNavClick('business')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-between ${
              activePage === 'business'
                ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span>Core Business</span>
            {activePage === 'business' && <span className="w-1.5 h-1.5 rounded-full bg-[#14532D]" />}
          </button>

          {/* Products / Core Business Accordion */}
          <div className="rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-between ${
                activePage === 'products'
                  ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                  : 'text-stone-800 hover:bg-stone-50'
              }`}
            >
              <span>Products Catalog</span>
              <ChevronDown
                className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                  mobileProductsOpen ? 'rotate-180 text-gold-600' : ''
                }`}
              />
            </button>

            {mobileProductsOpen && (
              <div className="pl-4 pr-1 py-1 space-y-1 bg-stone-50/70 rounded-xl my-1 border-l-2 border-gold-400/40 ml-3">
                <button
                  onClick={() => handleCategoryClick('field-crops')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                >
                  <span>🌾 Field Crops (Paddy, Wheat)</span>
                  <ArrowRight className="w-3 h-3 text-stone-400" />
                </button>
                <button
                  onClick={() => handleCategoryClick('vegetable-seeds')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                >
                  <span>🥬 Vegetable Seeds (22+ Hybrids)</span>
                  <ArrowRight className="w-3 h-3 text-stone-400" />
                </button>
                <button
                  onClick={() => handleCategoryClick('fodder-crops')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                >
                  <span>🌱 Fodder Crops (Sorghum)</span>
                  <ArrowRight className="w-3 h-3 text-stone-400" />
                </button>
                <button
                  onClick={() => handleCategoryClick('jute-crops')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                >
                  <span>🌾 Jute Crops (Golden Fiber)</span>
                  <ArrowRight className="w-3 h-3 text-stone-400" />
                </button>
                <button
                  onClick={() => handleCategoryClick('crop-protection')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                >
                  <span>🛡️ Crop Protection & PGR</span>
                  <ArrowRight className="w-3 h-3 text-stone-400" />
                </button>
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-[#14532D] hover:bg-white transition-colors flex items-center gap-1 pt-2 border-t border-stone-200/60"
                >
                  <span>View All 30+ Varieties</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Gallery */}
          <button
            onClick={() => handleNavClick('gallery')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-between ${
              activePage === 'gallery'
                ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span>Photo & Field Gallery</span>
            {activePage === 'gallery' && <span className="w-1.5 h-1.5 rounded-full bg-[#14532D]" />}
          </button>

          {/* Careers */}
          <button
            onClick={() => handleNavClick('careers')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-between ${
              activePage === 'careers'
                ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span>Careers & Internships</span>
            {activePage === 'careers' && <span className="w-1.5 h-1.5 rounded-full bg-[#14532D]" />}
          </button>

          {/* Media Center */}
          <button
            onClick={() => handleNavClick('media')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-between ${
              activePage === 'media'
                ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span>Media Center</span>
            {activePage === 'media' && <span className="w-1.5 h-1.5 rounded-full bg-[#14532D]" />}
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-between ${
              activePage === 'contact'
                ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            <span>Contact Us</span>
            {activePage === 'contact' && <span className="w-1.5 h-1.5 rounded-full bg-[#14532D]" />}
          </button>
        </div>

        {/* Quick-Action Pinned Bottom */}
        <div className="p-4 border-t border-amber-200/30 bg-stone-50/80 space-y-2.5 shrink-0">
          <button
            onClick={() => handleNavClick('dealers')}
            className="w-full py-2.5 rounded-full bg-[#14532D] text-white hover:bg-[#1B4D3E] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Locate Authorized Dealer</span>
          </button>
          <a
            href="tel:18001207267"
            className="w-full py-2 rounded-full border border-stone-300 text-stone-700 hover:border-gold-500 hover:text-gold-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all bg-white"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#14532D]" />
            <span>Kisan Helpline: 1800-120-7267</span>
          </a>
        </div>
      </div>
    </header>
  );
};
