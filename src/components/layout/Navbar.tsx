import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SeedLogo } from '../common/SeedLogo';
import { 
  ChevronDown, 
  MapPin, 
  X, 
  Sprout, 
  FlaskConical, 
  ArrowRight,
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
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsMegaOpen, setProductsMegaOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Body Scroll Lock when drawer is active
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

  // Auto-close mobile drawer when viewport is resized above tablet/desktop threshold (md: 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Subtle scroll listener for frosted glass enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-amber-200/40 shadow-sm'
          : 'bg-white/90 backdrop-blur-md border-b border-amber-200/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. Branding: richmud logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 rounded-lg p-0.5 flex items-center shrink-0"
            aria-label="richmud Home"
          >
            <SeedLogo size="md" />
          </button>

          {/* 2. Desktop Navigation Links (Restores seamlessly >= md: 768px) */}
          <nav className="hidden md:flex items-center h-full space-x-1 lg:space-x-1.5 xl:space-x-2">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`relative h-full flex items-center px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'home'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Home</span>
              {activePage === 'home' && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#14532D]" />
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
                className={`relative h-full flex items-center gap-1 px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                  activePage === 'about'
                    ? 'text-[#14532D] font-semibold'
                    : 'text-stone-700 hover:text-[#D4AF37]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 stroke-[1.5] transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-[#D4AF37]' : 'text-stone-400'}`} />
                {activePage === 'about' && (
                  <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#14532D]" />
                )}
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-amber-200/40 p-2">
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
              className={`relative h-full flex items-center px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'business'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Core Business</span>
              {activePage === 'business' && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#14532D]" />
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
                className={`relative h-full flex items-center gap-1 px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                  activePage === 'products'
                    ? 'text-[#14532D] font-semibold'
                    : 'text-stone-700 hover:text-[#D4AF37]'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 stroke-[1.5] transition-transform duration-200 ${productsMegaOpen ? 'rotate-180 text-[#D4AF37]' : 'text-stone-400'}`} />
                {activePage === 'products' && (
                  <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#14532D]" />
                )}
              </button>

              {productsMegaOpen && (
                <div className="absolute top-full -left-16 w-[580px] pt-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-amber-200/40 p-4">
                    <div className="flex items-center justify-between pb-2.5 border-b border-stone-100 mb-3">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">richmud Seed Catalog</span>
                      <button 
                        onClick={() => handleNavClick('products')} 
                        className="text-xs text-[#14532D] hover:text-[#1B4D3E] flex items-center gap-1 font-semibold"
                      >
                        View Full Catalog <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => handleCategoryClick('field-crops')}
                        className="text-left p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <Sprout className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Field Crops</div>
                          <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">Wheat, Paddy, Mustard, Maize</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('vegetable-seeds')}
                        className="text-left p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <Sprout className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Vegetable Seeds</div>
                          <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">22+ Hybrid Greens, Gourds & Roots</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('fodder-crops')}
                        className="text-left p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <Sprout className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Fodder Crops</div>
                          <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">NutriGold Sorghum & Berseem</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('jute-crops')}
                        className="text-left p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <Sprout className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Jute Crops</div>
                          <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">Golden Fiber Tossa & White Jute</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('crop-protection')}
                        className="col-span-2 text-left p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-amber-200/50 transition-all flex items-start gap-2.5 group bg-stone-50/50"
                      >
                        <div className="w-8 h-8 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <FlaskConical className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-[#14532D]">Crop Protection & Bio-Nutrition</div>
                          <div className="text-[11px] text-stone-500 mt-0.5">Insecticides, Curative Fungicides, Herbicides & PanVigor PGR</div>
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
              className={`relative h-full flex items-center px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'gallery'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Gallery</span>
              {activePage === 'gallery' && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#14532D]" />
              )}
            </button>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`relative h-full flex items-center px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'careers'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Careers</span>
              {activePage === 'careers' && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#14532D]" />
              )}
            </button>

            {/* Media Center */}
            <button
              onClick={() => handleNavClick('media')}
              className={`relative h-full flex items-center px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'media'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Media</span>
              {activePage === 'media' && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#14532D]" />
              )}
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`relative h-full flex items-center px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'contact'
                  ? 'text-[#14532D] font-semibold'
                  : 'text-stone-700 hover:text-[#D4AF37]'
              }`}
            >
              <span>Contact</span>
              {activePage === 'contact' && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#14532D]" />
              )}
            </button>
          </nav>

          {/* 3. Action Button: Dealer Locator (Desktop) */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <button
              onClick={() => handleNavClick('dealers')}
              className={`whitespace-nowrap px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full border transition-all duration-300 flex items-center gap-1.5 text-[10px] lg:text-[11px] font-semibold tracking-wider uppercase ${
                activePage === 'dealers'
                  ? 'bg-[#14532D] text-white border-[#14532D] shadow-sm'
                  : 'border-[#14532D]/40 text-[#14532D] hover:bg-[#14532D] hover:text-white hover:border-[#14532D] bg-transparent'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Dealer Locator</span>
            </button>
          </div>

          {/* 4. Mobile Top Bar Actions (< md: 768px): Mini CTA + Glitch-Free Animated Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Optional compact mini CTA */}
            <button
              onClick={() => handleNavClick('dealers')}
              className="px-2.5 py-1.5 rounded-full border border-[#14532D]/40 text-[#14532D] hover:bg-[#14532D] hover:text-white text-[11px] font-semibold flex items-center gap-1 transition-all touch-manipulation whitespace-nowrap active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Dealers</span>
            </button>

            {/* Glitch-Free 3-Bar to 'X' Animated Hamburger Button (44x44px touch target) */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-xl text-stone-800 hover:bg-stone-100/80 active:bg-stone-200/60 focus:outline-none transition-colors touch-manipulation select-none shrink-0"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-5 h-[2px] bg-[#1A1A1A] rounded-full transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px] !bg-[#D4AF37]' : ''
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-[#1A1A1A] rounded-full transition-all duration-200 ease-out ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-[#1A1A1A] rounded-full transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px] !bg-[#D4AF37]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* 5. Mobile Drawer & Backdrop rendered in portal to document.body to prevent containing block trap */}
    {mounted && createPortal(
      <>
        {/* Semi-Transparent Backdrop Overlay with Tap Outside Dismiss */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] transition-opacity duration-300 ease-out md:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Luxury Slide-In Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm h-full h-[100dvh] bg-white/95 backdrop-blur-xl border-l border-amber-200/40 z-[1000] flex flex-col shadow-2xl transition-transform duration-300 ease-out md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Drawer Header (Height: h-16 matched to top bar) */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-amber-200/25 shrink-0 bg-white/90">
            <button
              onClick={() => handleNavClick('home')}
              className="focus:outline-none flex items-center"
            >
              <SeedLogo size="sm" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-stone-600 hover:text-[#1A1A1A] hover:bg-stone-100/80 active:bg-stone-200/60 transition-colors touch-manipulation"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Drawer Scrollable Navigation Items */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1 overscroll-contain">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                activePage === 'home'
                  ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                  : 'text-stone-800 hover:text-[#D4AF37] hover:bg-stone-50/80'
              }`}
            >
              <span>Home</span>
              {activePage === 'home' && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
            </button>

            {/* About Us Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                  activePage === 'about'
                    ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                    : 'text-stone-800 hover:text-[#D4AF37] hover:bg-stone-50/80'
                }`}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                    mobileAboutOpen ? 'rotate-180 text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1 bg-stone-50/70 rounded-xl my-1 border-l-2 border-[#D4AF37]/50 ml-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors"
                  >
                    Corporate Overview
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors"
                  >
                    Vision, Mission & Ethos
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors"
                  >
                    Director's Journey & Heritage
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors"
                  >
                    Board of Directors & Scientists
                  </button>
                </div>
              )}
            </div>

            {/* Core Business */}
            <button
              onClick={() => handleNavClick('business')}
              className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                activePage === 'business'
                  ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                  : 'text-stone-800 hover:text-[#D4AF37] hover:bg-stone-50/80'
              }`}
            >
              <span>Core Business</span>
              {activePage === 'business' && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
            </button>

            {/* Products Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                  activePage === 'products'
                    ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                    : 'text-stone-800 hover:text-[#D4AF37] hover:bg-stone-50/80'
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                    mobileProductsOpen ? 'rotate-180 text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1 bg-stone-50/70 rounded-xl my-1 border-l-2 border-[#D4AF37]/50 ml-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => handleCategoryClick('field-crops')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                  >
                    <span>🌾 Field Crops (Paddy, Wheat)</span>
                    <ArrowRight className="w-3 h-3 text-stone-400" />
                  </button>
                  <button
                    onClick={() => handleCategoryClick('vegetable-seeds')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                  >
                    <span>🥬 Vegetable Seeds (22+ Hybrids)</span>
                    <ArrowRight className="w-3 h-3 text-stone-400" />
                  </button>
                  <button
                    onClick={() => handleCategoryClick('fodder-crops')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                  >
                    <span>🌱 Fodder Crops (Sorghum)</span>
                    <ArrowRight className="w-3 h-3 text-stone-400" />
                  </button>
                  <button
                    onClick={() => handleCategoryClick('jute-crops')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                  >
                    <span>🌾 Jute Crops (Golden Fiber)</span>
                    <ArrowRight className="w-3 h-3 text-stone-400" />
                  </button>
                  <button
                    onClick={() => handleCategoryClick('crop-protection')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-stone-700 hover:text-[#14532D] hover:bg-white transition-colors flex items-center justify-between"
                  >
                    <span>🛡️ Crop Protection & PGR</span>
                    <ArrowRight className="w-3 h-3 text-stone-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-bold text-[#14532D] hover:bg-white transition-colors flex items-center gap-1 pt-2 border-t border-stone-200/60"
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
              className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                activePage === 'gallery'
                  ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                  : 'text-stone-800 hover:text-[#D4AF37] hover:bg-stone-50/80'
              }`}
            >
              <span>Gallery</span>
              {activePage === 'gallery' && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
            </button>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                activePage === 'careers'
                  ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                  : 'text-stone-800 hover:text-[#D4AF37] hover:bg-stone-50/80'
              }`}
            >
              <span>Careers</span>
              {activePage === 'careers' && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
            </button>

            {/* Media Center */}
            <button
              onClick={() => handleNavClick('media')}
              className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                activePage === 'media'
                  ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                  : 'text-stone-800 hover:text-[#D4AF37] hover:bg-stone-50/80'
              }`}
            >
              <span>Media Center</span>
              {activePage === 'media' && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                activePage === 'contact'
                  ? 'bg-[#14532D]/10 text-[#14532D] font-semibold'
                  : 'text-stone-800 hover:text-[#D4AF37] hover:bg-stone-50/80'
              }`}
            >
              <span>Contact</span>
              {activePage === 'contact' && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
            </button>
          </div>

          {/* 7. Pinned Bottom Luxury CTAs inside Drawer */}
          <div className="p-4 border-t border-amber-200/30 bg-stone-50/95 space-y-2.5 shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button
              onClick={() => handleNavClick('dealers')}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#14532D] via-[#1B4D3E] to-[#14532D] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md border border-[#D4AF37]/40 hover:brightness-105 active:scale-[0.99] transition-all touch-manipulation"
            >
              <MapPin className="w-4 h-4 stroke-[1.5] text-[#D4AF37]" />
              <span>Dealer Locator</span>
            </button>

            <a
              href="tel:18001207267"
              className="w-full py-2.5 rounded-full border border-stone-200 text-stone-700 hover:border-[#D4AF37] hover:text-[#14532D] font-semibold text-xs flex items-center justify-center gap-2 transition-all bg-white touch-manipulation"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#14532D]" />
              <span>Kisan Helpline: 1800-120-7267</span>
            </a>
          </div>
        </div>
      </>,
      document.body
    )}
  </>
);
};
