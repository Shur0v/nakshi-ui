
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

            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6">Leadership Perspective</h2>
            <h3 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              Message From the CEO
            </h3>

            <div className="relative z-10">
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed italic mb-10">
                "Nakshi Color Chem is built on technical precision, integrity, and long-term partnership. As Bangladesh’s Sole Authorized Distributor of Archroma Textile Effects, we are committed to reliable supply, responsible chemistry, and strong technical support—helping our clients deliver consistent quality and meet global standards with confidence."
              </p>

              <div className="border-l-2 border-blue-500 pl-6">
                <h4 className="text-xl font-bold">Engr. Japar Uddin Chowdhury (Sabuj)</h4>
                <p className="text-blue-400 font-medium">Cheif Executive Officer(CEO) <br /> Nakshi Color Chem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
