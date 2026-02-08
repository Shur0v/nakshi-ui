
import React from 'react';
import { Leaf, Droplets, ShieldCheck, Globe } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 flex items-center justify-center -rotate-12 translate-x-10">
            <Leaf size={400} />
          </div>

          <div className="max-w-3xl relative z-10">
            <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Responsible Chemistry</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
              Sustainability & Compliance
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We support responsible chemistry aligned with global market expectations. Through our product portfolio and technical guidance, we help clients improve process efficiency and work toward compliance goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: <Droplets className="text-green-600" />, title: 'Water & Energy Aware', text: 'Process efficiency support for reduced environmental footprint.' },
                { icon: <ShieldCheck className="text-green-600" />, title: 'Safer Chemistry', text: 'Prioritizing products that meet international safety standards.' },
                { icon: <Globe className="text-green-600" />, title: 'Global Compliance', text: 'Strict adherence to ZDHC, Bluesign, and Oeko-Tex requirements.' },
                { icon: <Leaf className="text-green-600" />, title: 'Future-Oriented', text: 'Supporting international ESG expectations in the textile supply chain.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-3 bg-green-100 text-green-700 rounded-full font-bold text-sm">
              <ShieldCheck size={18} /> Supporting ZDHC & Bluesign standards
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
