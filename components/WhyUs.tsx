
import React from 'react';
import { Award, Wrench, Package, MessageSquareText } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="text-blue-600" />,
      title: 'Authorized Archroma Partnership',
      desc: 'Trusted distribution with consistent standards and documentation.'
    },
    {
      icon: <Wrench className="text-blue-600" />,
      title: 'Technical & Engineering-Driven Support',
      desc: 'Guidance from experienced professionals for stable results.'
    },
    {
      icon: <Package className="text-blue-600" />,
      title: 'Reliable Availability',
      desc: 'Support for both high-demand and specialty product needs.'
    },
    {
      icon: <MessageSquareText className="text-blue-600" />,
      title: 'Fast, Clear Communication',
      desc: 'Responsive coordination aligned with production timelines.'
    }
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Value + Trust</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Why Work With Us</h3>
          <p className="text-xl text-slate-600">A dependable local partner with global backing—focused on performance, continuity, and support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 leading-snug">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-[2rem] p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 text-white">
          <div className="flex-1 relative z-10">
            <h4 className="text-3xl font-bold mb-6">Precision in every drop.</h4>
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              We understand that in textile chemistry, consistency is everything. Our collaboration with Archroma ensures you get the highest grade chemicals with predictable results every time.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-lg transition-transform hover:scale-105 active:scale-95">
              Request Technical Datasheet
            </a>
          </div>
          <div className="w-full lg:w-1/3 relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img
              src="/drop.png"
              alt="Textile lab technician measuring chemical solution"
              className="w-full aspect-square object-cover object-top"
            />
          </div>
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
