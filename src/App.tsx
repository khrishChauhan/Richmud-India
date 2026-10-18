import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BusinessPage } from './pages/BusinessPage';
import { ProductsPage } from './pages/ProductsPage';
import { CareersPage } from './pages/CareersPage';
import { DealerLocatorPage } from './pages/DealerLocatorPage';
import { MediaCenterPage } from './pages/MediaCenterPage';
import { ContactPage } from './pages/ContactPage';
import { ProductCategory } from './types';
import { Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('field-crops');
  const [mediaTab, setMediaTab] = useState<'gallery' | 'releases' | 'events'>('gallery');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync hash routing with state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'gallery') {
        setMediaTab('gallery');
        setActivePage('media');
        return;
      }
      if (hash === 'press-releases' || hash === 'releases') {
        setMediaTab('releases');
        setActivePage('media');
        return;
      }
      if (hash === 'events') {
        setMediaTab('events');
        setActivePage('media');
        return;
      }
      const validPages = [
        'home', 
        'about', 
        'business', 
        'products', 
        'careers', 
        'dealers', 
        'media', 
        'contact'
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    // On initial mount
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document.title to always be richmud
  useEffect(() => {
    document.title = 'richmud';
  }, [activePage]);

  // Update hash when activePage changes
  const handlePageChange = (page: string) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Category select handler
  const handleSelectCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
    handlePageChange('products');
  };

  // Media tab select handler
  const handleSelectMediaTab = (tab: 'gallery' | 'releases' | 'events') => {
    setMediaTab(tab);
    handlePageChange('media');
  };

  // Scroll to top indicator
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] flex flex-col font-sans selection:bg-gold-500 selection:text-white w-full max-w-full overflow-x-clip">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onSelectCategory={handleSelectCategory}
        onSelectMediaTab={handleSelectMediaTab}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full max-w-full">
        {activePage === 'home' && (
          <HomePage
            setActivePage={handlePageChange}
            onSelectCategory={handleSelectCategory}
          />
        )}
        {activePage === 'about' && <AboutPage setActivePage={handlePageChange} />}
        {activePage === 'business' && <BusinessPage />}
        {activePage === 'products' && (
          <ProductsPage
            initialCategory={selectedCategory}
            onLocateDealer={() => handlePageChange('dealers')}
          />
        )}
        {activePage === 'careers' && <CareersPage />}
        {activePage === 'dealers' && (
          <DealerLocatorPage setActivePage={handlePageChange} />
        )}
        {activePage === 'media' && <MediaCenterPage initialTab={mediaTab} />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Global Luxury Footer */}
      <Footer
        setActivePage={handlePageChange}
        onSelectCategory={handleSelectCategory}
      />

      {/* Floating Action Button: Quick Farmer Call + Back to Top */}
      <div className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto">
        {/* Floating Helpline Pill (Desktop) */}
        <div
          className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-botanical-900/95 backdrop-blur-md border border-gold-400/50 shadow-gold-md hover:bg-botanical-800 transition-all text-white select-none"
        >
          <div className="w-7 h-7 rounded-full bg-gold-gradient flex items-center justify-center text-charcoal-950 font-bold shadow-sm">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <div className="text-[10px] uppercase font-bold text-gold-300 tracking-wider">
              Kisan Helpline
            </div>
            <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
              <a href="tel:+917888585478" className="hover:text-gold-300 transition-colors" title="Call +91-7888585478">
                +91-7888585478
              </a>
              <span className="text-gold-400/60">•</span>
              <a href="tel:+919572144270" className="hover:text-gold-300 transition-colors" title="Call +91-9572144270">
                +91-9572144270
              </a>
            </div>
          </div>
        </div>

        {/* Floating Helpline Button (Mobile) */}
        <a
          href="tel:+917888585478"
          className="flex sm:hidden w-11 h-11 rounded-full bg-botanical-900/95 backdrop-blur-md border border-gold-400/60 shadow-lg items-center justify-center text-white"
          aria-label="Call Kisan Helpline +91-7888585478"
        >
          <Phone className="w-4 h-4 text-gold-400" />
        </a>

        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-charcoal-900 text-gold-400 hover:bg-black hover:text-gold-300 border border-gold-400/40 shadow-lg flex items-center justify-center transition-all animate-in fade-in"
          >
            <ArrowUp className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
