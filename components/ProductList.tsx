
import React, { useState } from 'react';
import { Beaker, Layers, Palette, Shield, Sparkles, Droplets, ArrowRight } from 'lucide-react';

const ProductList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Dyes' | 'Auxiliaries'>('Dyes');

  const dyes = [
    { title: 'Reactive Dyes', brand: 'Novacron / Avitera series', desc: 'For strong shade performance and process stability for reactive dyeing operations.' },
    { title: 'Disperse Dyes', brand: 'Terasil series', desc: 'For polyester dyeing with consistent results and production efficiency.' },
    { title: 'Direct Dyes', brand: 'Indosol series', desc: 'For dependable application where direct dye processes are used.' },
    { title: 'Pigment Printing Colors', brand: 'Printofix series', desc: 'For pigment printing systems requiring stable print quality.' },
  ];

  const auxiliaries = [
    { title: 'Pretreatment Chemicals', desc: 'Enzymes, wetting agents, stabilizers, and related preparations for controlled processing.' },
    { title: 'Dyeing Auxiliaries', desc: 'Levelling agents, pH buffers, dispersing agents, washing-off agents, and performance enhancers.' },
    { title: 'Fixing Agents', desc: 'Fixation support products for improved fastness performance.' },
    { title: 'Optical Brightening Agents (OBA)', desc: 'Brightening solutions for cotton and polyester applications.' },
    { title: 'Softening', desc: 'Cationic / non-ionic / silicone softeners for improved hand-feel and performance.' },
    { title: 'Finishing', desc: 'Ordinary + Special: Moisture management, repellency support, sewability improvement, and more.' },
    { title: 'Printing Auxiliaries', desc: 'Thickeners, binders, fixing agents, and softeners for pigment printing workflows.' },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Portfolio</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Product List (High-Level Categories)</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We provide a broad portfolio of textile dyes and auxiliaries from Archroma. To keep your selection accurate and compliant, we share detailed specifications upon request.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1">
            <button 
              onClick={() => setActiveTab('Dyes')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'Dyes' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Dyes
            </button>
            <button 
              onClick={() => setActiveTab('Auxiliaries')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'Auxiliaries' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Auxiliaries & Chemicals
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 gap-4">
            {activeTab === 'Dyes' ? (
              dyes.map((item, i) => (
                <div key={i} className="group p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                      <Palette size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-blue-600 text-xs font-bold uppercase tracking-wide">{item.brand}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))
            ) : (
              auxiliaries.map((item, i) => (
                <div key={i} className="group p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                      <Beaker size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))
            )}
          </div>

          <div className="sticky top-28 bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Need a specific product or shade?</h4>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Share your fabric type, process, and target performance. We’ll recommend the right solution and provide full technical data.
            </p>
            <div className="space-y-4">
              <a href="#contact" className="flex items-center justify-between w-full px-6 py-4 bg-blue-600 rounded-xl font-bold transition-all hover:bg-blue-700">
                Request Product Details <ArrowRight size={20} />
              </a>
              <a href="#contact" className="flex items-center justify-between w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl font-bold transition-all hover:bg-white/20">
                Talk to Technical Team <ArrowRight size={20} />
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <img 
                  src="https://picsum.photos/seed/shades/100/100" 
                  alt="Color shade cards" 
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-xs text-slate-400 italic">
                  *Detailed shade matching and laboratory support available nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
