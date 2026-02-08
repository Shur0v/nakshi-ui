
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about.png"
                alt="Modern textile dyeing facility"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary-600/5 rounded-full blur-3xl -z-0" />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">Company Overview</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              About Nakshi Color Chem
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nakshi Color Chem is a Bangladesh-based textile chemical distributor focused on coloration and performance solutions for dyeing, washing, and finishing operations. We combine local market understanding with global technical standards through our partnership with Archroma Textile Effects.
            </p>

            <div className="space-y-4">
              {[
                'Reliable product availability for routine and specialized needs',
                'Technical, engineering-driven guidance for stable production results',
                'Responsible chemistry aligned with modern compliance expectations'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-slate-800 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 min-w-[200px]">
                <div className="text-3xl font-black text-primary-600 mb-1">Since 2013</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-tight whitespace-nowrap">Authorized Distributor</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 min-w-[200px]">
                <div className="text-3xl font-black text-primary-600 mb-1">100%</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-tight">Archroma Authorized</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 min-w-[200px]">
                <div className="text-3xl font-black text-primary-600 mb-1">Local</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-tight">Bangladesh Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
