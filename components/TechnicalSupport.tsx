
import React from 'react';
import { Microscope, Info, TestTube, Headphones } from 'lucide-react';

const TechnicalSupport: React.FC = () => {
  const services = [
    {
      icon: <Microscope size={32} className="text-primary-600" />,
      title: 'Testing & Lab Support',
      desc: 'Testing guidance and process recommendations for optimal results.'
    },
    {
      icon: <Info size={32} className="text-primary-600" />,
      title: 'Information Services',
      desc: 'Support around industry expectations, compliance, and process updates.'
    },
    {
      icon: <TestTube size={32} className="text-primary-600" />,
      title: 'Sampling & Customization',
      desc: 'Selecting suitable solutions specifically tailored for your operation.'
    },
    {
      icon: <Headphones size={32} className="text-primary-600" />,
      title: 'After-Sales Support',
      desc: 'Ongoing coordination to maintain results and supply continuity.'
    }
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">Service Ecosystem</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Technical & Lab Support</h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Our support goes beyond supply. We work with your team to help you achieve consistent results and reduce trial-and-error in your production facility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="mb-4">{s.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/labsupport.png"
                alt="Textile testing lab with spectrophotometer"
                className="w-full h-auto"
              />
            </div>
            {/* Achievement Badge Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Support</span>
              </div>
              <p className="text-sm font-bold text-slate-800 leading-snug">
                On-site assistance available for urgent production challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupport;
