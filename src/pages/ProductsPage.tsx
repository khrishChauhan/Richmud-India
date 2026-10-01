import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Sprout, 
  FlaskConical, 
  Layers, 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Calendar,
  Clock,
  Package,
  Award,
  BookOpen
} from 'lucide-react';
import { productsData } from '../data/products';
import { Product, ProductCategory } from '../types';

interface ProductsPageProps {
  initialCategory?: ProductCategory;
  onLocateDealer?: () => void;
}

const categoriesConfig: { id: ProductCategory; label: string; icon: any; count: number }[] = [
  { id: 'field-crops', label: 'Field Crops', icon: Sprout, count: 8 },
  { id: 'vegetable-seeds', label: 'Vegetable Seeds', icon: Sprout, count: 22 },
  { id: 'fodder-crops', label: 'Fodder Crops', icon: Sprout, count: 2 },
  { id: 'jute-crops', label: 'Jute Crops', icon: Sprout, count: 2 },
  { id: 'crop-protection', label: 'Crop Protection & PGR', icon: FlaskConical, count: 4 },
];

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  initialCategory = 'field-crops',
  onLocateDealer
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Extract available subcategories for selected category
  const subcategories = useMemo(() => {
    const list = productsData
      .filter((p) => p.category === selectedCategory)
      .map((p) => p.subcategory)
      .filter((sub): sub is string => Boolean(sub));
    return ['All', ...Array.from(new Set(list))];
  }, [selectedCategory]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Category match
      if (product.category !== selectedCategory) return false;

      // Subcategory match
      if (selectedSubcategory !== 'All' && product.subcategory !== selectedSubcategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesVernacular = product.vernacularName?.toLowerCase().includes(query);
        const matchesScientific = product.scientificName?.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesTagline = product.tagline.toLowerCase().includes(query);
        return matchesName || matchesVernacular || matchesScientific || matchesDesc || matchesTagline;
      }

      return true;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  return (
    <div className="pt-20 sm:pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400" />
            <span>Certified Hybrid & Crop Science Portfolio</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Superior Genetics for <br />
            <span className="text-gold-gradient">Abundant Harvests</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base lg:text-lg font-light leading-relaxed">
            Explore our comprehensive repository of field crops, hybrid vegetable seeds, forage cultivars, jute fiber, and crop protection science.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY SELECTOR TABS */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-luxury border border-gold-400/30 flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
          {categoriesConfig.map((cat) => {
            const isSelected = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedSubcategory('All');
                }}
                className={`px-2.5 sm:px-5 py-1.5 sm:py-3 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  isSelected
                    ? 'bg-botanical-800 text-white shadow-md border border-gold-400/50 font-bold'
                    : 'text-charcoal-800 hover:bg-botanical-50/70'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-gold-500 text-charcoal-950 shadow-sm' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. SEARCH & SUBCATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by variety name, Palak, Bhindi, Wheat..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 text-xs sm:text-sm bg-white placeholder-gray-400 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Subcategory Pills */}
          {subcategories.length > 2 && (
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold shrink-0">
                Filter:
              </span>
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedSubcategory === sub
                      ? 'bg-charcoal-900 text-gold-400 font-semibold'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Count Badge */}
          <div className="text-xs text-gray-500 font-medium whitespace-nowrap hidden lg:block">
            Showing <span className="font-bold text-charcoal-900">{filteredProducts.length}</span> varieties
          </div>

        </div>
      </section>

      {/* 4. PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 p-8 space-y-4">
            <Sprout className="w-12 h-12 text-gold-400 mx-auto opacity-50" />
            <h3 className="font-serif text-2xl font-bold text-charcoal-900">
              No matching varieties found
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
              We couldn't find any varieties matching "{searchQuery}". Try searching for another crop name or clear your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubcategory('All');
              }}
              className="px-5 py-2 rounded-full bg-gold-gradient text-charcoal-950 text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gold-300/40 hover:border-gold-500 shadow-sm hover:shadow-gold-md transition-all duration-300 flex flex-col group"
              >
                {/* Product Image */}
                <div className="h-32 sm:h-52 overflow-hidden relative bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-botanical-800 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold shadow-md border border-botanical-600 truncate max-w-[85%]">
                    {product.subcategory || product.categoryName}
                  </div>
                  {product.scientificName && (
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] text-gray-200 italic truncate">
                      {product.scientificName}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="font-serif text-sm sm:text-xl font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors leading-tight line-clamp-1 sm:line-clamp-none">
                      {product.name}
                    </h3>
                    
                    {product.vernacularName && (
                      <div className="text-[10px] sm:text-xs font-semibold text-gold-700 mt-0.5 sm:mt-1 truncate">
                        {product.vernacularName}
                      </div>
                    )}

                    <p className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-2">
                      {product.tagline}
                    </p>

                    {/* Key Traits Badges */}
                    <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
                      {product.keyTraits.slice(0, 2).map((trait, i) => (
                        <span
                          key={i}
                          className="px-1.5 sm:px-2 py-0.5 rounded bg-botanical-50 text-botanical-900 text-[9px] sm:text-[10px] font-semibold border border-botanical-200 truncate max-w-full"
                        >
                          <span className="text-botanical-700 font-bold mr-0.5 sm:mr-1">✓</span>{trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer & Drawer Trigger */}
                  <div className="pt-2 sm:pt-3 border-t border-gray-100 space-y-2">
                    {product.maturityDays && (
                      <div className="hidden sm:flex items-center justify-between text-[11px] text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gold-600" />
                          <span>Maturity:</span>
                        </span>
                        <span className="font-semibold text-charcoal-900">
                          {product.maturityDays}
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-botanical-50 hover:bg-botanical-800 hover:text-white border border-botanical-300 text-botanical-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-sm"
                    >
                      <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Specifications</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. PRODUCT SPECIFICATIONS MODAL / DRAWER */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gold-400/40 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Header Image Banner */}
            <div className="h-56 relative overflow-hidden bg-charcoal-950">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors"
                aria-label="Close Specifications Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <div className="inline-block px-3 py-1 rounded-full bg-botanical-800 text-white border border-botanical-600 text-[10px] font-bold uppercase tracking-wider shadow-md">
                  {selectedProduct.categoryName} • {selectedProduct.subcategory}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {selectedProduct.name}
                </h3>
                <div className="text-xs sm:text-sm text-gold-300 font-medium">
                  {selectedProduct.vernacularName} {selectedProduct.scientificName && `(${selectedProduct.scientificName})`}
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-botanical-800">
                  Agronomic Overview
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Trait Matrix */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-botanical-800">
                  Key Distinctive Traits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.keyTraits.map((trait, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-botanical-50/60 border border-botanical-200/80 flex items-start gap-2 text-xs text-charcoal-900"
                    >
                      <CheckCircle2 className="w-4 h-4 text-botanical-800 shrink-0 mt-0.5" />
                      <span className="font-medium">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agronomic Specifications Table */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-ivory-100 border border-gold-300/30 text-xs">
                {selectedProduct.maturityDays && (
                  <div>
                    <span className="text-gray-500 block text-[11px]">Maturity Duration:</span>
                    <span className="font-bold text-charcoal-900">{selectedProduct.maturityDays}</span>
                  </div>
                )}
                {selectedProduct.sowingSeason && (
                  <div>
                    <span className="text-gray-500 block text-[11px]">Sowing Season:</span>
                    <span className="font-bold text-charcoal-900">{selectedProduct.sowingSeason}</span>
                  </div>
                )}
                {selectedProduct.yieldPotential && (
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-gray-500 block text-[11px]">Yield Potential:</span>
                    <span className="font-bold text-botanical-800">{selectedProduct.yieldPotential}</span>
                  </div>
                )}
              </div>

              {/* Packaging Sizes */}
              {selectedProduct.packagingSizes && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-botanical-800">
                    <Package className="w-3.5 h-3.5" />
                    <span>Certified Packaging Sizes</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.packagingSizes.map((sz, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white border border-botanical-300 text-charcoal-900 text-xs font-semibold"
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Agronomy Tips */}
              {selectedProduct.agronomyTips && (
                <div className="p-4 rounded-xl bg-botanical-900 text-white border border-botanical-700 space-y-1.5 shadow-md">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gold-300">
                    <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                    <span>Recommended Agronomic Practice</span>
                  </div>
                  <p className="text-xs text-emerald-100/90 leading-relaxed font-normal">
                    {selectedProduct.agronomyTips}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-xs font-semibold uppercase tracking-wider hover:bg-gray-50"
                >
                  Close
                </button>

                {onLocateDealer && (
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      onLocateDealer();
                    }}
                    className="px-6 py-2.5 rounded-full bg-botanical-800 hover:bg-botanical-900 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 border border-gold-400/50 transition-all flex items-center gap-2"
                  >
                    <span>Locate Dealer For This Seed</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
