
import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'CEO Message', href: '#message' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Products', href: '#products' },
    { label: 'Support', href: '#support' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5'
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Container - Adjusted for visibility against dark/light backgrounds */}
        <a href="#home" className="flex items-center gap-3">
          <div className={`transition-all duration-300 flex items-center px-3 rounded-lg ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14 bg-white/10 backdrop-blur-sm'}`}>
            <img
              src="/nakshi.png"
              alt="Nakshi Color Chem"
              className={`h-full object-contain ${!isScrolled ? 'brightness-0 invert' : ''}`}
              onError={(e) => {
                // Fallback text if image fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-bold transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-800' : 'text-white'
                }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Request Info <ChevronRight size={16} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-800 text-lg font-medium hover:text-blue-600 border-b border-slate-50 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-4 rounded-xl text-center font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Product Info
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
