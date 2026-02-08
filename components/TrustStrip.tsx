
import React from 'react';
import { ShieldCheck, Clock, Users, Zap } from 'lucide-react';

const TrustStrip: React.FC = () => {
  const items = [
    { icon: <Clock className="text-primary-600" />, title: 'Years of Experience', desc: 'Deep industry knowledge' },
    { icon: <ShieldCheck className="text-primary-600" />, title: 'Certified & Compliant', desc: 'Global safety standards' },
    { icon: <Users className="text-primary-600" />, title: 'Technical Support', desc: 'Expert engineering team' },
    { icon: <Zap className="text-primary-600" />, title: 'Fast Response', desc: 'Bangladesh-wide coverage' },
  ];

  return (
    <div className="bg-white border-b border-slate-100 py-10 relative z-20 shadow-lg -mt-8 mx-4 rounded-2xl md:mx-auto md:max-w-6xl">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="p-3 bg-primary-50 rounded-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
              <p className="text-slate-500 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-8 flex justify-center items-center gap-6 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Trusted Distributor of</span>
        <img
          src="/Archroma-Management.png"
          alt="Archroma Management"
          className="h-12 object-contain"
        />
      </div> */}
    </div>
  );
};

export default TrustStrip;
