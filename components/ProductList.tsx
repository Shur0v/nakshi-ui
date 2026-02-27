
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Beaker, Layers, Palette, Shield, Sparkles, Droplets,
  ArrowRight, Search, X, ChevronRight, Filter, Info,
  CheckCircle2, Globe, Database, Zap
} from 'lucide-react';

interface Product {
  name: string;
  desc: string;
}

interface Subcategory {
  name: string;
  products: Product[];
}

interface CategoryData {
  category: string;
  subcategories: Subcategory[];
}

const ProductList: React.FC = () => {
  const [data, setData] = useState<CategoryData[]>([]);
  const [activeTab, setActiveTab] = useState<'Dyes' | 'Auxiliaries'>('Dyes');
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [activeSubFilter, setActiveSubFilter] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/data/productlist.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Error loading product data:", err));
  }, []);

  // Handle clicking outside search suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter high-level categories for the main grid
  const mainCategories = useMemo(() => {
    if (!data.length) return [];
    return data.map(cat => ({
      ...cat,
      type: cat.category.toLowerCase().includes('dye') || cat.category.includes('FORON') || cat.category.includes('SERIES') ? 'Dyes' : 'Auxiliaries'
    }));
  }, [data]);

  const filteredMain = mainCategories.filter(cat => {
    if (activeTab === 'Dyes') return cat.type === 'Dyes';
    return cat.type === 'Auxiliaries';
  });

  // ── Global Search Suggestions Logic ────────────────────────────────
  const suggestions = useMemo(() => {
    if (!globalSearchQuery || globalSearchQuery.length < 2) return [];
    const query = globalSearchQuery.toLowerCase();
    const results: { type: 'Category' | 'Subcategory' | 'Product', name: string, parentCat: CategoryData, subName?: string }[] = [];

    data.forEach(cat => {
      // Match Category
      if (cat.category.toLowerCase().includes(query)) {
        results.push({ type: 'Category', name: cat.category, parentCat: cat });
      }
      cat.subcategories.forEach(sub => {
        // Match Subcategory
        if (sub.name.toLowerCase().includes(query)) {
          results.push({ type: 'Subcategory', name: sub.name, parentCat: cat });
        }
        sub.products.forEach(p => {
          // Math Product
          if (p.name.toLowerCase().includes(query)) {
            results.push({ type: 'Product', name: p.name, parentCat: cat, subName: sub.name });
          }
        });
      });
    });

    return results.slice(0, 8); // Limit suggestions
  }, [data, globalSearchQuery]);

  const openModal = (cat: CategoryData, subHighlight?: string) => {
    setSelectedCategory(cat);
    setIsModalOpen(true);
    setSearchQuery('');
    setActiveSubFilter(subHighlight || null);
    setShowSuggestions(false);
    setGlobalSearchQuery('');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    document.body.style.overflow = 'auto';
  };

  // ── Modal Search Logic (Globalized) ───────────────────────────────
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];

    // If there is a search query, we search across ALL data even in the modal
    // But we prioritize the current category at the top
    const lowerQuery = searchQuery.toLowerCase();

    if (!searchQuery) {
      let result = selectedCategory.subcategories;
      if (activeSubFilter) {
        result = result.filter(sub => sub.name === activeSubFilter);
      }
      // Return structured for display
      return [{ category: selectedCategory.category, subcategories: result }];
    }

    // Global Search within Modal
    const globalMatches: { category: string, subcategories: Subcategory[] }[] = [];

    data.forEach(cat => {
      const matchingSubs = cat.subcategories.map(sub => ({
        ...sub,
        products: sub.products.filter(p =>
          p.name.toLowerCase().includes(lowerQuery) ||
          p.desc.toLowerCase().includes(lowerQuery) ||
          sub.name.toLowerCase().includes(lowerQuery)
        )
      })).filter(sub => sub.products.length > 0);

      if (matchingSubs.length > 0) {
        globalMatches.push({ category: cat.category, subcategories: matchingSubs });
      }
    });

    // Move current selected category to front
    globalMatches.sort((a, b) => {
      if (a.category === selectedCategory.category) return -1;
      if (b.category === selectedCategory.category) return 1;
      return 0;
    });

    return globalMatches;
  }, [data, selectedCategory, searchQuery, activeSubFilter]);

  return (
    <div id="products" className="py-24 bg-white relative">
      {/* Background Decor Wrapper - Hides overflow without breaking sticky children */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-primary-100">
            <Database size={14} /> Our Full Portfolio
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Innovative Chemistry for <br /><span className="text-primary-600">Textile Performance</span>
          </h3>

          {/* ────── GLOBAL SEARCH BOX ────── */}
          <div className="max-w-2xl mx-auto relative group mt-8" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search any product, category or chemical module..."
                value={globalSearchQuery}
                onFocus={() => setShowSuggestions(true)}
                onChange={(e) => {
                  setGlobalSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                className="w-full px-14 py-5 bg-white border-2 border-primary-600 rounded-2xl focus:outline-none transition-all shadow-lg shadow-primary-100 font-semibold"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-600" size={24} />
              {globalSearchQuery && (
                <button onClick={() => setGlobalSearchQuery('')} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600">
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="p-3 bg-slate-50 border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Zap size={10} className="text-primary-600" /> Database Suggestions
                </div>
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => openModal(s.parentCat, s.type === 'Subcategory' ? s.name : undefined)}
                    className="w-full h-full text-left px-5 py-4 hover:bg-primary-50 transition-colors flex items-center justify-between group border-b border-slate-50 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        {s.type === 'Category' ? <Palette size={16} /> : s.type === 'Subcategory' ? <Layers size={16} /> : <Droplets size={16} />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-primary-700">{s.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                          {s.type} {s.subName ? `in ${s.subName}` : `in ${s.parentCat.category}`}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
                <div className="p-4 bg-slate-50 text-center">
                  <p className="text-xs text-slate-400 font-medium italic">Press Enter to see all results in detail</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1 shadow-inner translate-y-4">
            <button
              onClick={() => setActiveTab('Dyes')}
              className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'Dyes' ? 'bg-white shadow-md text-primary-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <Palette size={18} /> Dyes & Pigments
            </button>
            <button
              onClick={() => setActiveTab('Auxiliaries')}
              className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'Auxiliaries' ? 'bg-white shadow-md text-primary-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <Beaker size={18} /> Auxiliaries & Chemicals
            </button>
          </div>
        </div>

        {/* Categories Grid - Explicitly structured for sticky sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8 overflow-visible">
          <div className="grid grid-cols-1 gap-4 lg:col-span-8">
            {filteredMain.length > 0 ? (
              filteredMain.map((item, i) => (
                <button
                  key={i}
                  onClick={() => openModal(item)}
                  className="group text-left p-6 bg-white border border-slate-100 rounded-2xl hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-100 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${activeTab === 'Dyes' ? 'bg-primary-50 text-primary-600' : 'bg-indigo-50 text-indigo-600'}`}>
                        {activeTab === 'Dyes' ? <Droplets size={24} /> : <Shield size={24} />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-primary-600 transition-colors uppercase tracking-tight">{item.category}</h4>
                        <p className="text-slate-400 text-xs font-semibold">{item.subcategories.length} Product Modules</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      <ChevronRight size={20} />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.subcategories.slice(0, 3).map((sub, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-lg border border-slate-100">
                        {sub.name}
                      </span>
                    ))}
                    {item.subcategories.length > 3 && (
                      <span className="px-3 py-1 text-primary-600 text-[10px] font-bold">+{item.subcategories.length - 3} more</span>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 bg-primary-600 transition-all duration-500 w-0 group-hover:w-full" />
                </button>
              ))
            ) : (
              <div className="py-20 text-center text-slate-400 font-medium border-2 border-dashed border-slate-100 rounded-3xl">
                Loading database...
              </div>
            )}
          </div>

          {/* Sidebar Promo Area - Force Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 h-fit z-20 space-y-8 self-start">
            <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group/promo">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl group-hover/promo:scale-110 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-primary-600/40 animate-bounce-slow">
                  <Globe size={32} />
                </div>
                <h4 className="text-2xl font-black mb-6 leading-tight uppercase tracking-tighter">
                  Can't find what <br /><span className="text-primary-400">you're looking for?</span>
                </h4>
                <p className="text-slate-400 mb-10 leading-relaxed font-medium text-sm">
                  Our database is vast. If a specific chemical series isn't listed, our technical team can source it directly for you.
                </p>
                <div className="space-y-4">
                  <a href="#contact" className="flex items-center justify-between w-full px-8 py-5 bg-primary-600 rounded-2xl font-black transition-all hover:bg-primary-700 group hover:shadow-2xl hover:shadow-primary-600/40 text-sm">
                    Custom Request <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                  <a href="#contact" className="flex items-center justify-between w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold transition-all hover:bg-white/10 text-sm">
                    Sales WhatsApp <Droplets size={18} className="text-primary-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Design Filler */}
            <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl opacity-60 hover:opacity-100 transition-opacity bg-slate-50/50">
              <div className="flex items-center gap-4 text-slate-500">
                <Database size={20} className="text-primary-600" />
                <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Global Sourcing Network Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT MODAL */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={closeModal} />

          <div className="relative bg-white w-full max-w-6xl h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-500">
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/50 backdrop-blur-xl sticky top-0 z-20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-600 text-white rounded-2xl">
                  <Palette size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                    {searchQuery ? 'Global Search Results' : selectedCategory.category}
                  </h2>
                  <p className="text-slate-500 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-green-500" />
                    {searchQuery ? `Found results across database` : `Direct View: ${selectedCategory.category}`}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 flex-1 max-w-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-600" size={18} />
                  <input
                    type="text"
                    placeholder="Search across all categories & products..."
                    value={searchQuery}
                    autoFocus
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-primary-600 rounded-2xl focus:outline-none transition-all shadow-sm font-medium"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600">
                      <X size={16} />
                    </button>
                  )}
                </div>
                <button onClick={closeModal} className="p-3 bg-slate-100 text-slate-500 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex flex-1 overflow-hidden">
              {!searchQuery && (
                <div className="hidden md:flex flex-col w-72 border-r border-slate-100 bg-slate-50/30 overflow-y-auto p-6 gap-2">
                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Filter size={10} /> Filter Module
                  </h5>
                  <button
                    onClick={() => setActiveSubFilter(null)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeSubFilter === null ? 'bg-primary-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    All Subcategories
                  </button>
                  {selectedCategory.subcategories.map((sub, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSubFilter(sub.name)}
                      className={`group text-left px-4 py-3 rounded-xl text-sm font-bold transition-all border border-transparent ${activeSubFilter === sub.name ? 'bg-primary-600 text-white shadow-lg' : 'text-slate-600 hover:bg-white hover:border-slate-100 hover:shadow-sm'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{sub.name}</span>
                        <CheckCircle2 size={12} className={`transition-opacity ${activeSubFilter === sub.name ? 'opacity-100' : 'opacity-0'}`} />
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white">
                {filteredProducts.length > 0 ? (
                  <div className="space-y-12">
                    {filteredProducts.map((catMatch, i) => (
                      <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {searchQuery && (
                          <div className="px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg inline-block mb-8">
                            Category: {catMatch.category}
                          </div>
                        )}

                        {catMatch.subcategories.map((sub, subIdx) => (
                          <div key={subIdx} className="mb-12 last:mb-0">
                            <h4 className="flex items-center gap-3 text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-black">{subIdx + 1}</span>
                              {sub.name}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {sub.products.map((prod, j) => (
                                <div key={j} className="group p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-primary-200 hover:shadow-2xl transition-all duration-300">
                                  <h5 className="font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors uppercase tracking-tight text-sm">{prod.name}</h5>
                                  <p className="text-slate-500 text-[11px] font-bold leading-relaxed italic opacity-80">{prod.desc || 'Standard Specification'}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-10">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-6">
                      <Search size={40} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">No matching results</h4>
                    <p className="text-slate-500 max-w-sm">
                      We couldn't find any products matching "{searchQuery}". Try a different term or browse categories.
                    </p>
                    <button onClick={() => setSearchQuery('')} className="mt-6 px-10 py-3 bg-primary-600 text-white rounded-2xl font-bold transition-all hover:bg-primary-700 shadow-xl shadow-primary-600/20">
                      View All Products
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
