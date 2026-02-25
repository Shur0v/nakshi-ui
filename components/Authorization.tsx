
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

const agreements = [
    { src: '/agreement1.jpg', label: 'Distribution Agreement — Page 1' },
    { src: '/agreement2.jpg', label: 'Distribution Agreement — Page 2' },
];

const Authorization: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [lightbox, setLightbox] = useState<string | null>(null);

    const prev = () => setCurrent((c) => (c - 1 + agreements.length) % agreements.length);
    const next = () => setCurrent((c) => (c + 1) % agreements.length);

    return (
        <div className="py-20 bg-white" id="authorization">
            <div className="container mx-auto px-6">

                {/* ── Header — centred ── */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-3">
                        Our Authorization &amp; Global Partnership
                    </p>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Trusted Global Partnership <span className="text-primary-600">Since 2015</span>
                    </h3>
                    <p className="text-slate-500 text-[15px] leading-relaxed">
                        Nakshi Color Chem is the officially appointed distributor of{' '}
                        <span className="font-semibold text-slate-700">Huntsman (Singapore) PTE LTD</span> for
                        its Textile Effects division in Bangladesh — authorized by a formal Distribution
                        Agreement executed on <span className="font-semibold text-slate-700">April 16, 2015</span>.
                    </p>
                </div>

                {/* ── Image slider — centred ── */}
                <div className="max-w-xl mx-auto">
                    {/* Slider frame */}
                    <div
                        className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl cursor-zoom-in group"
                        onClick={() => setLightbox(agreements[current].src)}
                    >
                        {/* Images */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {agreements.map((ag) => (
                                <img
                                    key={ag.src}
                                    src={ag.src}
                                    alt={ag.label}
                                    className="w-full flex-shrink-0 object-cover"
                                    style={{ minWidth: '100%' }}
                                    loading="lazy"
                                />
                            ))}
                        </div>

                        {/* Click-to-view hint */}
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/15 transition-all duration-300 flex items-center justify-center pointer-events-none">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-4 py-2 rounded-full shadow">
                                Click to view full image
                            </span>
                        </div>

                        {/* Prev arrow */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-2 shadow transition-all"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Next arrow */}
                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-2 shadow transition-all"
                        >
                            <ChevronRight size={18} />
                        </button>

                        {/* Label bar */}
                        <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex items-center gap-2">
                            <ShieldCheck size={13} className="text-primary-600 flex-shrink-0" />
                            <span className="text-xs font-semibold text-slate-600">{agreements[current].label}</span>
                            <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                Official
                            </span>
                        </div>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {agreements.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`rounded-full transition-all ${i === current ? 'bg-primary-600 w-6 h-2' : 'bg-slate-300 w-2 h-2'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Lightbox Modal ── */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-5 right-5 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                        onClick={() => setLightbox(null)}
                    >
                        <X size={26} />
                    </button>
                    <img
                        src={lightbox}
                        alt="Agreement document"
                        className="max-w-full max-h-[92vh] object-contain rounded-xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Authorization;
