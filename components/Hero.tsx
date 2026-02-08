
import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Layers, FlaskConical, Leaf } from 'lucide-react';

const videos = [
  "/vid1.mp4",
  "/vid2.mp4",
  "/vid3.mp4"
];

const Hero: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Setting src directly on video element is more reliable for dynamic source changes
      video.src = videos[currentVideo];
      video.load();
      video.play().catch(e => {
        console.warn("Autoplay was prevented. User interaction required.", e);
      });
    }
  }, [currentVideo]);

  const badges = [
    { icon: <Layers size={18} />, text: '500+ Products' },
    { icon: <FlaskConical size={18} />, text: 'Technical & Lab Support' },
    { icon: <Leaf size={18} />, text: 'Sustainable Chemistry' },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900 py-28 md:py-0">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          onEnded={handleVideoEnd}
          autoPlay
          muted
          loop={false}
          playsInline
          className="w-full h-full object-cover brightness-[0.45] scale-[1.01]"
          aria-label="Textile chemistry innovation - dynamic color reaction video background."
        />
        {/* Gradients and Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-slate-900/50" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 z-10 text-white text-center md:text-left">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both">
          <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-400/30 px-3 py-1 rounded-full text-primary-300 text-xs font-bold tracking-widest uppercase mb-6">
            Authorized Distributor of Archroma
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
            Textile Color & Chemical <br />
            <span className="text-primary-400">Solutions, Backed by Archroma</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed">
            We support Bangladesh’s textile industry with reliable supply, technical expertise, and responsible chemistry helping factories achieve consistent quality and global compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-primary-900 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
            >
              Contact Our Technical Team
            </a>
            <a
              href="#products"
              className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl font-bold transition-all hover:bg-white/10 hover:border-white/50"
            >
              Explore Product Categories
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[10px] md:text-sm text-slate-300">
            {badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 whitespace-nowrap">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => document.getElementById('about')?.scrollIntoView()}>
        <ArrowDown className="text-white" />
      </div>
    </div>
  );
};

export default Hero;
