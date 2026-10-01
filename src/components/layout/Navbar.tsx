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
          ? 'bg-white/95 backdrop-blur-md shadow-luxury border-b border-gold-400/20 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-gold-400/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-none focus:ring-2 focus:ring-gold-400/50 rounded-lg p-1"
          >
            <SeedLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                activePage === 'home'
                  ? 'text-charcoal-950 font-bold border-b-2 border-botanical-800'
                  : 'text-charcoal-800 hover:text-gold-600'
              }`}
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                  activePage === 'about'
                    ? 'text-charcoal-950 font-bold border-b-2 border-botanical-800'
                    : 'text-charcoal-800 hover:text-gold-600'
                }`}
              >
                About Us
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-botanical-800' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gold-300/30 p-2 backdrop-blur-lg">
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-botanical-50 text-xs font-medium text-charcoal-900 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-charcoal-900 group-hover:text-botanical-800">Corporate Overview</div>
                        <div className="text-[11px] text-gray-500">30+ years of seed excellence</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-botanical-700 transition-opacity" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-botanical-50 text-xs font-medium text-charcoal-900 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-charcoal-900 group-hover:text-botanical-800">Vision, Mission & Ethos</div>
                        <div className="text-[11px] text-gray-500">Our guiding principles</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-botanical-700 transition-opacity" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-botanical-50 text-xs font-medium text-charcoal-900 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-charcoal-900 group-hover:text-botanical-800">Director's Journey</div>
                        <div className="text-[11px] text-gray-500">Founding story & milestones</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-botanical-700 transition-opacity" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-botanical-50 text-xs font-medium text-charcoal-900 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-charcoal-900 group-hover:text-botanical-800">Board & Leadership</div>
                        <div className="text-[11px] text-gray-500">Visionary scientific leadership</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-botanical-700 transition-opacity" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Core Business */}
            <button
              onClick={() => handleNavClick('business')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                activePage === 'business'
                  ? 'text-charcoal-950 font-bold border-b-2 border-botanical-800'
                  : 'text-charcoal-800 hover:text-gold-600'
              }`}
            >
              Core Business
            </button>

            {/* Products Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsMegaOpen(true)}
              onMouseLeave={() => setProductsMegaOpen(false)}
            >
              <button
                onClick={() => handleNavClick('products')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                  activePage === 'products'
                    ? 'text-charcoal-950 font-bold border-b-2 border-botanical-800'
                    : 'text-charcoal-800 hover:text-gold-600'
                }`}
              >
                Products
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsMegaOpen ? 'rotate-180 text-botanical-800' : ''}`} />
              </button>

              {productsMegaOpen && (
                <div className="absolute top-full -left-20 w-[640px] pt-2 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gold-300/30 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
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
                        className="text-left p-3 rounded-xl hover:bg-botanical-50/60 border border-transparent hover:border-botanical-300/40 transition-all flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-botanical-100 text-botanical-800 flex items-center justify-center shrink-0 group-hover:bg-botanical-800 group-hover:text-white transition-colors">
                          <Sprout className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-charcoal-900 group-hover:text-botanical-900">Field Crops</div>
                          <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Wheat, Paddy, Mustard, Maize, Pulses</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('vegetable-seeds')}
                        className="text-left p-3 rounded-xl hover:bg-botanical-50/60 border border-transparent hover:border-botanical-300/40 transition-all flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-botanical-100 text-botanical-800 flex items-center justify-center shrink-0 group-hover:bg-botanical-800 group-hover:text-white transition-colors">
                          <Sprout className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-charcoal-900 group-hover:text-botanical-900">Vegetable Seeds</div>
                          <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">22+ Hybrid Greens, Gourds, Roots & Solanaceous</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('fodder-crops')}
                        className="text-left p-3 rounded-xl hover:bg-botanical-50/60 border border-transparent hover:border-botanical-300/40 transition-all flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-botanical-100 text-botanical-800 flex items-center justify-center shrink-0 group-hover:bg-botanical-800 group-hover:text-white transition-colors">
                          <Sprout className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-charcoal-900 group-hover:text-botanical-900">Fodder Crops</div>
                          <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">NutriGold Sorghum, Berseem Clover</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('jute-crops')}
                        className="text-left p-3 rounded-xl hover:bg-botanical-50/60 border border-transparent hover:border-botanical-300/40 transition-all flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-botanical-100 text-botanical-800 flex items-center justify-center shrink-0 group-hover:bg-botanical-800 group-hover:text-white transition-colors">
                          <Sprout className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-charcoal-900 group-hover:text-botanical-900">Jute Crops</div>
                          <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Golden Fiber Tossa & White Jute</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleCategoryClick('crop-protection')}
                        className="col-span-2 text-left p-3 rounded-xl hover:bg-botanical-50/60 border border-transparent hover:border-botanical-300/40 transition-all flex items-start gap-3 group bg-botanical-50/40"
                      >
                        <div className="w-9 h-9 rounded-lg bg-botanical-200 text-botanical-900 flex items-center justify-center shrink-0 group-hover:bg-botanical-800 group-hover:text-white transition-colors">
                          <FlaskConical className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-charcoal-900 group-hover:text-botanical-900">Crop Protection & Bio-Nutrition</div>
                          <div className="text-[11px] text-gray-500 mt-0.5">Systemic Insecticides, Broad-spectrum Fungicides, Herbicides & PanVigor PGR</div>
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
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                activePage === 'gallery'
                  ? 'text-charcoal-950 font-bold border-b-2 border-botanical-800'
                  : 'text-charcoal-800 hover:text-gold-600'
              }`}
            >
              Gallery
            </button>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                activePage === 'careers'
                  ? 'text-charcoal-950 font-bold border-b-2 border-botanical-800'
                  : 'text-charcoal-800 hover:text-gold-600'
              }`}
            >
              Careers
            </button>

            {/* Media Center */}
            <button
              onClick={() => handleNavClick('media')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                activePage === 'media'
                  ? 'text-charcoal-950 font-bold border-b-2 border-botanical-800'
                  : 'text-charcoal-800 hover:text-gold-600'
              }`}
            >
              Media Center
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                activePage === 'contact'
                  ? 'text-charcoal-950 font-bold border-b-2 border-botanical-800'
                  : 'text-charcoal-800 hover:text-gold-600'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Button: Dealer Locator */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('dealers')}
              className={`relative group overflow-hidden px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase shadow-md ${
                activePage === 'dealers'
                  ? 'bg-botanical-900 text-gold-300 border-gold-400 font-bold ring-2 ring-botanical-700 shadow-gold-sm'
                  : 'bg-botanical-800 hover:bg-botanical-900 text-white border-gold-400/40 hover:border-gold-300 shadow-sm'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-gold-300 group-hover:scale-110 transition-transform" />
              <span>Dealer Locator</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('dealers')}
              className="px-3 py-1.5 rounded-full border border-botanical-700 text-white text-xs font-semibold flex items-center gap-1 bg-botanical-800 shadow-sm"
            >
              <MapPin className="w-3 h-3 text-gold-300" />
              <span>Dealers</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-800 hover:text-gold-600 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gold-300/30 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'home' ? 'bg-botanical-50 text-botanical-900 font-semibold' : 'text-charcoal-900'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'about' ? 'bg-botanical-50 text-botanical-900 font-semibold' : 'text-charcoal-900'
              }`}
            >
              About Us (Overview, Vision & Leadership)
            </button>

            <button
              onClick={() => handleNavClick('business')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'business' ? 'bg-botanical-50 text-botanical-900 font-semibold' : 'text-charcoal-900'
              }`}
            >
              Core Business (R&D, QA & Marketing)
            </button>

            <div className="py-2 border-y border-gray-100 my-2">
              <div className="text-xs uppercase tracking-wider text-botanical-800 font-semibold px-3 mb-2">
                Products Catalog
              </div>
              <div className="grid grid-cols-2 gap-1 px-1">
                <button
                  onClick={() => handleCategoryClick('field-crops')}
                  className="text-left px-2.5 py-1.5 rounded-md text-xs hover:bg-botanical-50 text-gray-700 font-medium"
                >
                  🌾 Field Crops
                </button>
                <button
                  onClick={() => handleCategoryClick('vegetable-seeds')}
                  className="text-left px-2.5 py-1.5 rounded-md text-xs hover:bg-botanical-50 text-gray-700 font-medium"
                >
                  🥬 Vegetable Seeds
                </button>
                <button
                  onClick={() => handleCategoryClick('fodder-crops')}
                  className="text-left px-2.5 py-1.5 rounded-md text-xs hover:bg-botanical-50 text-gray-700 font-medium"
                >
                  🌱 Fodder Crops
                </button>
                <button
                  onClick={() => handleCategoryClick('jute-crops')}
                  className="text-left px-2.5 py-1.5 rounded-md text-xs hover:bg-botanical-50 text-gray-700 font-medium"
                >
                  🌾 Jute Crops
                </button>
                <button
                  onClick={() => handleCategoryClick('crop-protection')}
                  className="col-span-2 text-left px-2.5 py-1.5 rounded-md text-xs hover:bg-botanical-50 text-gray-700 font-medium"
                >
                  🛡️ Crop Protection & Bio-Nutrition
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'gallery' ? 'bg-botanical-50 text-botanical-900 font-semibold' : 'text-charcoal-900'
              }`}
            >
              Gallery
            </button>

            <button
              onClick={() => handleNavClick('careers')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'careers' ? 'bg-botanical-50 text-botanical-900 font-semibold' : 'text-charcoal-900'
              }`}
            >
              Careers & Internships
            </button>

            <button
              onClick={() => handleNavClick('media')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'media' ? 'bg-botanical-50 text-botanical-900 font-semibold' : 'text-charcoal-900'
              }`}
            >
              Media Center
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'contact' ? 'bg-botanical-50 text-botanical-900 font-semibold' : 'text-charcoal-900'
              }`}
            >
              Contact Us
            </button>

            <div className="pt-3">
              <button
                onClick={() => handleNavClick('dealers')}
                className="w-full py-2.5 rounded-xl bg-botanical-800 hover:bg-botanical-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md border border-gold-400/40"
              >
                <MapPin className="w-4 h-4 text-gold-300" />
                Find Dealer Near You
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
