
import React from 'react';
import { Quote } from 'lucide-react';

const CeoMessage: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl">
          {/* Left Side: CEO Image */}
          <div className="w-full md:w-2/5 relative">
            <img
              src="/ceo.png"
              alt="CEO of Nakshi Color Chem"
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent md:hidden" />
          </div>

          {/* Right Side: Message */}
          <div className="w-full md:w-3/5 p-8 md:p-16 lg:p-24 flex flex-col justify-center text-white relative">
            <Quote size={64} className="absolute top-10 right-10 text-white/5 -z-0" />

            <h2 className="text-primary-400 font-bold uppercase tracking-widest text-xs mb-6">Leadership Perspective</h2>
            <h3 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              Message From the CEO
            </h3>

            <div className="relative z-10">
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed italic mb-10">
                "My career in the textile industry began in 2001, guided by a strong belief in technical precision and integrity. After the early success of Optitex Solution (2009) and Green Solution (2011), Nakshi Color Chem was established in 2013. We proudly served as a distributor for Huntsman Textile Effects from 2015 to 2025 and now manage a portfolio of over 500 premium products. <br /> <br />

                Through trusted global partnerships, strong technical support, and responsible chemistry, we remain committed to supporting Bangladesh’s textile industry with reliability, transparency, and long-term value."
              </p>

              <div className="border-l-2 border-primary-500 pl-6">
                <h4 className="text-xl font-bold">Engr. Japar Uddin Chowdhury (Sabuj)</h4>
                <p className="text-primary-400 font-medium">Cheif Executive Officer(CEO) <br /> Nakshi Color Chem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
