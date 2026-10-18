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
  PhoneCall,
  Camera,
  Newspaper,
  Calendar,
  Mail
} from 'lucide-react';
import { ProductCategory } from '../../types';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onSelectCategory?: (category: ProductCategory) => void;
  onSelectMediaTab?: (tab: 'gallery' | 'releases' | 'events') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activePage, 
  setActivePage,
  onSelectCategory,
  onSelectMediaTab
}) => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsMegaOpen, setProductsMegaOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

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

  // Scroll listener for elevation border & glass intensity
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
    setMediaDropdownOpen(false);
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

  const handleMediaClick = (tab: 'gallery' | 'releases' | 'events') => {
    if (onSelectMediaTab) {
      onSelectMediaTab(tab);
    }
    setActivePage('media');
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setProductsMegaOpen(false);
    setMediaDropdownOpen(false);
    setTimeout(() => {
      const sectionId = tab === 'gallery' ? 'gallery-section' : 'press-section';
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212] border-b border-gold-400/25 shadow-2xl'
          : 'bg-[#121212] border-b border-gold-400/15'
      }`}
        style={{ backgroundColor: '#121212' }}
      >
        {/* Top Luxury Announcement & Contact Bar (Desktop) */}
        <div className="hidden lg:block bg-black text-gray-300 text-[11px] border-b border-gold-400/15 py-1 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-stone-300">
              <span className="text-gold-400 font-semibold font-serif">Richmud India Pvt Ltd. (RM)</span>
              <span className="text-stone-600">•</span>
              <span className="italic text-gold-400/90 font-serif">"Mud To Gold"</span>
              <span className="text-stone-600">•</span>
              <span className="text-stone-400">Corporate Office: Halsi, Lakhisarai, Bihar — 811306 / 811311</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-stone-300">
                <PhoneCall className="w-3 h-3 text-gold-400" />
                <a href="tel:+917888585478" className="hover:text-gold-300 font-mono transition-colors">+91-7888585478</a>
                <span className="text-stone-600">/</span>
                <a href="tel:+919572144270" className="hover:text-gold-300 font-mono transition-colors">+91-9572144270</a>
              </div>
              <span className="text-stone-600">•</span>
              <a href="mailto:richmudindia@gmail.com" className="hover:text-gold-300 transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3 text-gold-400" />
                <span>richmudindia@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 transition-all duration-300">
          
          {/* Mobile Left: Glitch-Free 3-Bar to 'X' Animated Hamburger Button (< md: 768px) */}
          <div className="flex md:hidden items-center shrink-0 w-20 sm:w-24 justify-start">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-xl text-gold-400 hover:bg-white/10 active:bg-white/20 focus:outline-none transition-colors touch-manipulation select-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-5 h-[2px] bg-gold-400 rounded-full transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px] !bg-emerald-400' : ''
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-gold-400 rounded-full transition-all duration-200 ease-out ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-gold-400 rounded-full transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px] !bg-emerald-400' : ''
                }`}
              />
            </button>
          </div>

          {/* 1. Branding: richmud logo (Centered on mobile, left-aligned on desktop) */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="focus:outline-none focus:ring-1 focus:ring-gold-400/50 rounded-xl p-1 flex items-center transition-transform duration-200 hover:scale-[1.02]"
              aria-label="richmud Home"
            >
              <SeedLogo size="md" />
            </button>
          </div>

          {/* 2. Desktop Navigation Links (Restores seamlessly >= md: 768px) */}
          <nav className="hidden md:flex items-center h-full space-x-1 lg:space-x-1.5 xl:space-x-2">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`relative h-full flex items-center px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'home'
                  ? 'text-gold-300 font-semibold'
                  : 'text-gold-400 hover:text-emerald-400'
              }`}
            >
              <span>Home</span>
              {activePage === 'home' && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
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
                    ? 'text-gold-300 font-semibold'
                    : 'text-gold-400 hover:text-emerald-400'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 stroke-[1.5] transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-emerald-400' : 'text-gold-400/70'}`} />
                {activePage === 'about' && (
                  <span className="absolute bottom-0 inset-x-2 h-[2px] bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div 
                    className="bg-[#141414] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] border border-gold-400/35 p-2"
                    style={{ backgroundColor: '#141414' }}
                  >
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 text-xs font-medium text-stone-200 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-gold-300 group-hover:text-emerald-400 transition-colors">Corporate Overview</div>
                        <div className="text-[11px] text-gray-400">30+ years of seed excellence</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 text-xs font-medium text-stone-200 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-gold-300 group-hover:text-emerald-400 transition-colors">Vision, Mission & Ethos</div>
                        <div className="text-[11px] text-gray-400">Our guiding principles</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 text-xs font-medium text-stone-200 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-gold-300 group-hover:text-emerald-400 transition-colors">Director's Journey</div>
                        <div className="text-[11px] text-gray-400">Founding story & milestones</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 text-xs font-medium text-stone-200 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-gold-300 group-hover:text-emerald-400 transition-colors">Board & Leadership</div>
                        <div className="text-[11px] text-gray-400">Visionary scientific leadership</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
                    </button>
                  </div>
                </div>
              )}
            </div>

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
                    ? 'text-gold-300 font-semibold'
                    : 'text-gold-400 hover:text-emerald-400'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 stroke-[1.5] transition-transform duration-200 ${productsMegaOpen ? 'rotate-180 text-emerald-400' : 'text-gold-400/70'}`} />
                {activePage === 'products' && (
                  <span className="absolute bottom-0 inset-x-2 h-[2px] bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </button>

              {productsMegaOpen && (
                <div className="absolute top-full -left-16 w-[580px] pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div 
                    className="bg-[#141414] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-gold-400/35 p-4"
                    style={{ backgroundColor: '#141414' }}
                  >
                    <div className="flex items-center justify-between pb-2.5 border-b border-gray-800 mb-3">
                      <span className="text-xs uppercase tracking-wider font-semibold text-gold-400">richmud Seed Catalog</span>
                      <button 
                        onClick={() => handleNavClick('products')} 
                        className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold transition-colors"
                      >
                        View Full Catalog <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => handleCategoryClick('field-crops')}
                        className="text-left p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-gold-400/15 hover:border-gold-400/40 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Sprout className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-gold-300 group-hover:text-emerald-400 transition-colors">Field Crops</div>
                          <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">Wheat, Paddy, Mustard, Maize</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('vegetable-seeds')}
                        className="text-left p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-gold-400/15 hover:border-gold-400/40 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Sprout className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-gold-300 group-hover:text-emerald-400 transition-colors">Vegetable Seeds</div>
                          <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">22+ Hybrid Greens, Gourds & Roots</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('fodder-crops')}
                        className="text-left p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-gold-400/15 hover:border-gold-400/40 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Sprout className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-gold-300 group-hover:text-emerald-400 transition-colors">Fodder Crops</div>
                          <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">NutriGold Sorghum & Berseem</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('jute-crops')}
                        className="text-left p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-gold-400/15 hover:border-gold-400/40 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Sprout className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-gold-300 group-hover:text-emerald-400 transition-colors">Jute Crops</div>
                          <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">Golden Fiber Tossa & White Jute</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('crop-protection')}
                        className="col-span-2 text-left p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-gold-400/15 hover:border-gold-400/40 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <FlaskConical className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-gold-300 group-hover:text-emerald-400 transition-colors">Crop Protection & Bio-Nutrition</div>
                          <div className="text-[11px] text-gray-400 mt-0.5">Insecticides, Fungicides, Herbicides & PGR</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`relative h-full flex items-center px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'careers'
                  ? 'text-gold-300 font-semibold'
                  : 'text-gold-400 hover:text-emerald-400'
              }`}
            >
              <span>Careers</span>
              {activePage === 'careers' && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              )}
            </button>

            {/* Media Centre Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setMediaDropdownOpen(true)}
              onMouseLeave={() => setMediaDropdownOpen(false)}
            >
              <button
                onClick={() => handleMediaClick('gallery')}
                className={`relative h-full flex items-center gap-1 px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                  activePage === 'media'
                    ? 'text-gold-300 font-semibold'
                    : 'text-gold-400 hover:text-emerald-400'
                }`}
              >
                <span>Media Centre</span>
                <ChevronDown className={`w-3.5 h-3.5 stroke-[1.5] transition-transform duration-200 ${mediaDropdownOpen ? 'rotate-180 text-emerald-400' : 'text-gold-400/70'}`} />
                {activePage === 'media' && (
                  <span className="absolute bottom-0 inset-x-2 h-[2px] bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </button>

              {mediaDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div 
                    className="bg-[#141414] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] border border-gold-400/35 p-2"
                    style={{ backgroundColor: '#141414' }}
                  >
                    {/* 1. Gallery */}
                    <button
                      onClick={() => handleMediaClick('gallery')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 text-xs font-medium text-stone-200 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Camera className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-gold-300 group-hover:text-emerald-400 transition-colors">Gallery</div>
                          <div className="text-[11px] text-gray-400">Photographs & field chronicles</div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
                    </button>

                    {/* 2. Press Release */}
                    <button
                      onClick={() => handleMediaClick('releases')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 text-xs font-medium text-stone-200 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Newspaper className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-gold-300 group-hover:text-emerald-400 transition-colors">Press Release</div>
                          <div className="text-[11px] text-gray-400">Official dispatches & news</div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
                    </button>

                    {/* 3. Events */}
                    <button
                      onClick={() => handleMediaClick('events')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 text-xs font-medium text-stone-200 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-gold-300 group-hover:text-emerald-400 transition-colors">Events</div>
                          <div className="text-[11px] text-gray-400">Exhibitions & kisan melas</div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`relative h-full flex items-center px-2.5 lg:px-3 text-xs lg:text-[13px] whitespace-nowrap font-medium tracking-wide transition-colors duration-200 ${
                activePage === 'contact'
                  ? 'text-gold-300 font-semibold'
                  : 'text-gold-400 hover:text-emerald-400'
              }`}
            >
              <span>Contact</span>
              {activePage === 'contact' && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              )}
            </button>
          </nav>

          {/* 3. Action Button: Dealer Locator (Desktop) */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <button
              onClick={() => handleNavClick('dealers')}
              className={`whitespace-nowrap px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full border transition-all duration-300 flex items-center gap-1.5 text-[10px] lg:text-[11px] font-semibold tracking-wider uppercase ${
                activePage === 'dealers'
                  ? 'bg-botanical-800 text-white border-emerald-400 shadow-sm'
                  : 'border-gold-400/40 text-gold-400 hover:bg-botanical-800 hover:text-white hover:border-emerald-400 bg-transparent'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Dealer Locator</span>
            </button>
          </div>

          {/* 4. Mobile Right: Dealers Action Button (< md: 768px) */}
          <div className="flex md:hidden items-center shrink-0 w-20 sm:w-24 justify-end">
            <button
              onClick={() => handleNavClick('dealers')}
              className="px-2.5 py-1.5 rounded-full border border-gold-400/40 text-gold-400 hover:bg-botanical-800 hover:text-white hover:border-emerald-400 text-[11px] font-semibold flex items-center gap-1 transition-all touch-manipulation whitespace-nowrap active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Dealers</span>
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
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] transition-opacity duration-300 ease-out md:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Luxury Slide-In Mobile Drawer (Opens from LEFT, Footer Dark Theme #121212) */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm h-full h-[100dvh] bg-[#121212] border-r border-gold-400/20 z-[1000] flex flex-col shadow-2xl transition-transform duration-300 ease-out md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ backgroundColor: '#121212' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Drawer Header (Height: matched to top bar) */}
          <div 
            className="flex items-center justify-between px-5 h-16 sm:h-20 border-b border-gold-400/20 shrink-0 bg-[#121212]"
            style={{ backgroundColor: '#121212' }}
          >
            <button
              onClick={() => handleNavClick('home')}
              className="focus:outline-none flex items-center transition-transform duration-200 hover:scale-[1.02]"
            >
              <SeedLogo size="sm" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-gold-400 hover:text-emerald-400 hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation"
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
                  ? 'bg-white/10 text-gold-300 font-semibold border-l-2 border-emerald-400'
                  : 'text-gold-400 hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              <span>Home</span>
              {activePage === 'home' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
            </button>

            {/* About Us Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                  activePage === 'about'
                    ? 'bg-white/10 text-gold-300 font-semibold border-l-2 border-emerald-400'
                    : 'text-gold-400 hover:text-emerald-400 hover:bg-white/5'
                }`}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 text-gold-400/70 transition-transform duration-300 ${
                    mobileAboutOpen ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1 bg-black/40 rounded-xl my-1 border-l-2 border-gold-400/40 ml-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors"
                  >
                    Corporate Overview
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors"
                  >
                    Vision, Mission & Ethos
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors"
                  >
                    Director's Journey & Heritage
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors"
                  >
                    Board of Directors & Scientists
                  </button>
                </div>
              )}
            </div>

            {/* Products Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                  activePage === 'products'
                    ? 'bg-white/10 text-gold-300 font-semibold border-l-2 border-emerald-400'
                    : 'text-gold-400 hover:text-emerald-400 hover:bg-white/5'
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 text-gold-400/70 transition-transform duration-300 ${
                    mobileProductsOpen ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1 bg-black/40 rounded-xl my-1 border-l-2 border-gold-400/40 ml-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => handleCategoryClick('field-crops')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>Field Crops (Paddy, Wheat)</span>
                    <ArrowRight className="w-3 h-3 text-gold-400/60" />
                  </button>
                  <button
                    onClick={() => handleCategoryClick('vegetable-seeds')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>Vegetable Seeds (22+ Hybrids)</span>
                    <ArrowRight className="w-3 h-3 text-gold-400/60" />
                  </button>
                  <button
                    onClick={() => handleCategoryClick('fodder-crops')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>Fodder Crops (Sorghum)</span>
                    <ArrowRight className="w-3 h-3 text-gold-400/60" />
                  </button>
                  <button
                    onClick={() => handleCategoryClick('jute-crops')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>Jute Crops (Golden Fiber)</span>
                    <ArrowRight className="w-3 h-3 text-gold-400/60" />
                  </button>
                  <button
                    onClick={() => handleCategoryClick('crop-protection')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>Crop Protection & PGR</span>
                    <ArrowRight className="w-3 h-3 text-gold-400/60" />
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 hover:bg-white/5 transition-colors flex items-center gap-1 pt-2 border-t border-gray-800"
                  >
                    <span>View All 30+ Varieties</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                activePage === 'careers'
                  ? 'bg-white/10 text-gold-300 font-semibold border-l-2 border-emerald-400'
                  : 'text-gold-400 hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              <span>Careers</span>
              {activePage === 'careers' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
            </button>

            {/* Media Centre Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                  activePage === 'media'
                    ? 'bg-white/10 text-gold-300 font-semibold border-l-2 border-emerald-400'
                    : 'text-gold-400 hover:text-emerald-400 hover:bg-white/5'
                }`}
              >
                <span>Media Centre</span>
                <ChevronDown
                  className={`w-4 h-4 text-gold-400/70 transition-transform duration-300 ${
                    mobileMediaOpen ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>

              {mobileMediaOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1 bg-black/40 rounded-xl my-1 border-l-2 border-gold-400/40 ml-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => handleMediaClick('gallery')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>Gallery</span>
                    <ArrowRight className="w-3 h-3 text-gold-400/60" />
                  </button>
                  <button
                    onClick={() => handleMediaClick('releases')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>Press Release</span>
                    <ArrowRight className="w-3 h-3 text-gold-400/60" />
                  </button>
                  <button
                    onClick={() => handleMediaClick('events')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>Events</span>
                    <ArrowRight className="w-3 h-3 text-gold-400/60" />
                  </button>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                activePage === 'contact'
                  ? 'bg-white/10 text-gold-300 font-semibold border-l-2 border-emerald-400'
                  : 'text-gold-400 hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              <span>Contact</span>
              {activePage === 'contact' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
            </button>
          </div>

          {/* 7. Pinned Bottom Luxury CTAs inside Drawer */}
          <div 
            className="p-4 border-t border-gold-400/20 bg-[#121212] space-y-2.5 shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]"
            style={{ backgroundColor: '#121212' }}
          >
            <button
              onClick={() => handleNavClick('dealers')}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#14532D] via-[#1B4D3E] to-[#14532D] text-gold-300 font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md border border-gold-400/40 hover:text-white hover:brightness-110 active:scale-[0.99] transition-all touch-manipulation"
            >
              <MapPin className="w-4 h-4 stroke-[1.5] text-gold-400" />
              <span>Dealer Locator</span>
            </button>

            <div className="space-y-1.5 pt-0.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+917888585478"
                  className="py-2.5 px-2 rounded-xl border border-gold-400/30 text-gold-300 hover:border-emerald-400 hover:text-emerald-400 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all bg-white/5 touch-manipulation text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+91-7888585478</span>
                </a>
                <a
                  href="tel:+919572144270"
                  className="py-2.5 px-2 rounded-xl border border-gold-400/30 text-gold-300 hover:border-emerald-400 hover:text-emerald-400 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all bg-white/5 touch-manipulation text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+91-9572144270</span>
                </a>
              </div>

              <a
                href="mailto:richmudindia@gmail.com"
                className="w-full py-2 rounded-xl border border-gold-400/20 text-gray-300 hover:text-gold-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-all bg-white/5"
              >
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>richmudindia@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </>,
      document.body
    )}
  </>
);
};
