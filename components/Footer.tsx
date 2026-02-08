
import React from 'react';
import { Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-16 w-auto flex items-center">
                <img
                  src="/nakshi.png"
                  alt="Nakshi Color Chem"
                  className="h-full object-contain brightness-0 invert"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Authorized Distributor of Archroma Textile Effects in Bangladesh. We provide technical precision, reliable supply, and sustainable chemical solutions for the textile industry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-4 text-slate-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#products" className="hover:text-white transition-colors">Product List</a>
              <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4 text-slate-400 text-sm">
              <div>
                <span className="block font-semibold text-white mb-1">Office:</span>
                32/B (1st Floor), Malibagh Chowdhurypara, Malibagh, Dhaka-1219
              </div>
              <div>
                <span className="block font-semibold text-white mb-1">Email:</span>
                <a href="mailto:info@nakshicolorchembd.com" className="hover:text-blue-400 transition-colors">info@nakshicolorchembd.com</a><br />
                <a href="mailto:sabuj@nakshicolorchembd.com" className="hover:text-blue-400 transition-colors">sabuj@nakshicolorchembd.com</a>
              </div>
              <div>
                <span className="block font-semibold text-white mb-1">Phone:</span>
                <a href="tel:+8802222221769" className="hover:text-blue-400 transition-colors block">+8802 222221769</a>
                <a href="tel:+8801799089338" className="hover:text-blue-400 transition-colors block">+88 01799089338</a>
                <a href="tel:+8801722199933" className="hover:text-blue-400 transition-colors block">+88 01722199933</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm text-center md:text-left">
            <p>© {new Date().getFullYear()} Nakshi Color Chem. All rights reserved.</p>
            <p className="mt-1 text-xs">Product availability and specifications are provided upon request.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
          >
            Back to Top
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
