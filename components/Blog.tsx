
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, User, Clock } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    story: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    images: { url: string; caption: string }[];
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'The Science Behind Reactive Dyeing in Modern Textile Mills',
        excerpt:
            "Reactive dyes form a covalent bond with the fibre, giving unmatched wash and light fastness. We explore the chemistry and best practices our technical team follows on the factory floor.",
        story: [
            "Reactive dyeing is one of the most widely used colouration processes in the textile industry today. Unlike disperse or vat dyes, reactive dyes form a true covalent bond with the cellulosic fibre — typically cotton — resulting in outstanding wash fastness and brilliant shade depth.",
            "At Nakshi Color Chem, our technical team works directly with dyehouse supervisors and lab chemists to optimise every stage of the process: from initial dissolution and addition, through the salt-alkali fixation curve, to the final neutralisation and soaping sequence.",
            "One of the most common challenges we encounter is 'pale ending' — where the final metres of a dye run come out lighter than the rest of the batch. This is caused by inconsistent liquor ratio management or temperature fluctuation in the dyeing machine. Our engineers have developed a correction protocol that prevents this in over 95% of cases just by standardising the salt and soda-ash addition schedule.",
            "Temperature control is equally critical. Most medium-reactivity dyes fix optimally between 60°C and 80°C, while bi-functional reactives require a tighter 80-85°C window. Straying outside that band — even by 3-5°C — can reduce fixation efficiency by 8-12%, leading to excess unfixed dye, higher washing costs, and a duller final shade.",
            "We also emphasise the importance of water quality. Even mild hardness (above 50 ppm) can precipitate salt complexes that settle on the fabric and cause uneven dye uptake. A simple in-line softener, combined with correct pH buffers, eliminates this risk entirely.",
            "Our goal is simple: help every factory we serve produce consistent, compliant, and commercially competitive fabric — every batch, every time.",
        ].join('\n\n'),
        author: 'Md. Rafiqul Islam',
        date: 'February 18, 2026',
        readTime: '6 min read',
        category: 'Technical Insight',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1715593949273-09009558300a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D',
                caption: 'Our modern technical operations office in Dhaka',
            },
            {
                url: 'https://st.hzcdn.com/simgs/3dd1656603689533_14-8331/home-design.jpg',
                caption: 'State-of-the-art lab workspace for dye formulation',
            },
            {
                url: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/05/23163145/modern-office-interior-design-with-partition-plants.jpg',
                caption: 'Open-plan workspace supporting collaborative technical work',
            },
        ],
    },
    {
        id: 2,
        title: 'From Archroma Partnership to 500+ Products: Our 10-Year Journey',
        excerpt:
            "From our first delivery of Archroma auxiliaries in 2013 to managing a portfolio of over 500 products today, this is the story of Nakshi Color Chem's growth and commitment to Bangladesh's garment sector.",
        story: [
            "When Nakshi Color Chem was founded in 2013, the Bangladesh textile industry was at a pivotal moment. The Rana Plaza tragedy had just reshaped global buyer expectations around compliance, traceability, and responsible chemistry. Factories were under pressure to move away from restricted substances and adopt safer, more transparent supply chains.",
            "We entered the market with a clear proposition: provide locally-available, globally-compliant textile chemicals backed by world-class technical support. Our initial portfolio was modest — a curated range of Archroma auxiliaries for pre-treatment, dyeing, and finishing. But within two years, we had earned the trust of over 40 dyehouses across Gazipur, Narayanganj, and Chittagong.",
            "The Huntsman Textile Effects distributorship, which we held proudly from 2015 to 2025, was a defining chapter. It extended our technical reach into high-performance reactive and disperse dyes, and gave our team access to world-class training programmes in Singapore and Germany. The knowledge our engineers gained during that decade continues to define how we approach problem-solving today.",
            "Today, our portfolio spans over 500 products — from optical brightening agents and wetting agents to enzyme systems and specialty softeners. Every product we list has gone through our own laboratory evaluation and is fully compliant with REACH, bluesign, and ZDHC MRSL Level 1 requirements.",
            "We remain a proudly Bangladeshi company, built on local relationships, international standards, and an unrelenting commitment to the factories and people we serve.",
        ].join('\n\n'),
        author: 'Nakshi Color Chem Team',
        date: 'February 10, 2026',
        readTime: '8 min read',
        category: 'Company Story',
        images: [
            {
                url: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/05/23142317/bamboo-chairs-plants-rug-flooring-768x512.jpg',
                caption: 'Our welcoming client meeting room',
            },
            {
                url: 'https://i.pinimg.com/1200x/20/29/21/2029213676f2070e3d671564a7bf5b3c.jpg',
                caption: 'Modern interior of our Gazipur distribution centre office',
            },
            {
                url: 'https://i.pinimg.com/1200x/89/fa/ed/89faed9e59af682bed5471c4a7a02427.jpg',
                caption: 'Product planning sessions — where new ideas take shape',
            },
        ],
    },
    {
        id: 3,
        title: 'Sustainable Chemistry: Meeting ZDHC & REACH Standards in Bangladesh',
        excerpt:
            "Global fashion brands are tightening their MRSL compliance requirements. Here's how Nakshi Color Chem helps local factories stay ahead — without sacrificing productivity or cost efficiency.",
        story: [
            "The Zero Discharge of Hazardous Chemicals (ZDHC) programme has fundamentally changed how the textile industry thinks about chemical management. For Bangladesh — the world's second-largest garment exporter — keeping up with buyer-mandated ZDHC MRSL compliance is no longer optional. It is a commercial necessity.",
            "Nakshi Color Chem has been working with factories on ZDHC compliance since 2017, long before it became a mainstream requirement. We started by helping our clients build their Chemical Inventory Management Systems (CIMS) — a structured database of every chemical used on-site, cross-referenced against the MRSL.",
            "One of the most frequent challenges is the use of legacy auxiliaries that contain restricted substances — particularly certain wetting agents based on APEO surfactants, or cationic softeners with high DMDHEU content. We work with factories to phase these out gradually, replacing them with ZDHC Gateway-certified alternatives that perform at least as well, and often better.",
            "We also offer complimentary wastewater advisory services. When a factory's effluent exceeds permissible limits for pH, COD, or specific heavy metals, our technical team conducts an on-site chemical audit to trace the root cause — which is almost always an uncontrolled process or an unchecked chemical input.",
            "Compliance is not just about avoiding penalties. Factories that operate with a clean, traceable chemical system gain a real competitive advantage: faster buyer audits, fewer corrective action requests, and the ability to attract premium orders from brands with strict sustainability commitments.",
            "We believe sustainable chemistry and profitable manufacturing are not opposing forces. They are, in fact, the same goal viewed from two different angles.",
        ].join('\n\n'),
        author: 'Sustainability Desk',
        date: 'January 28, 2026',
        readTime: '7 min read',
        category: 'Sustainability',
        images: [
            {
                url: 'https://t4.ftcdn.net/jpg/06/11/99/21/360_F_611992113_5AUkeTHqNkRnJg5NSsSVaxxGM8KAexir.jpg',
                caption: 'Sustainability review meeting with factory partners',
            },
            {
                url: 'https://officebanao.com/wp-content/uploads/2024/05/business-meeting-working-room-office-building.jpg',
                caption: 'Compliance workshop at our Dhaka headquarters',
            },
            {
                url: 'https://thumbs.dreamstime.com/b/modern-office-interior-13654524.jpg',
                caption: 'Clean and organised chemical documentation office',
            },
        ],
    },
    {
        id: 4,
        title: 'Building a World-Class Technical Team in Bangladesh',
        excerpt:
            "Behind every successful chemical supply is a team of trained engineers and chemists. We share how Nakshi Color Chem invests in people to deliver unmatched on-site and remote technical support.",
        story: [
            "The textile chemical industry is only as strong as the people behind it. At Nakshi Color Chem, we have made it a core principle to invest in our technical team just as seriously as we invest in our product portfolio. From in-house training programmes to international certification courses, our engineers are continuously developing their expertise.",
            "Our technical support division currently comprises 12 field engineers and 4 laboratory specialists, each responsible for specific customer accounts and product categories. Every engineer undergoes a six-month onboarding period that combines hands-on lab work at our Dhaka facility with supervised factory visits across the key textile clusters in Gazipur, Narayanganj, and Chittagong.",
            "One of our proudest achievements is our factory visit programme. Every customer — large or small — receives at least two scheduled technical visits per year, plus on-call support for production emergencies. Our average response time for urgent factory issues is under four hours, which our customers consistently rank as one of the most valued aspects of working with us.",
            "We also run quarterly knowledge-sharing workshops, where our engineers present case studies from recent factory challenges they have resolved. These sessions have become a practical learning forum, not just for our team, but for the factory technical managers who attend as invited guests.",
            "People are the foundation of trust. And trust, in an industry as competitive and technically demanding as textile chemicals, is the only sustainable edge.",
        ].join('\n\n'),
        author: 'Operations Team',
        date: 'January 15, 2026',
        readTime: '5 min read',
        category: 'Company Story',
        images: [
            {
                url: 'https://zeroinchinteriorsltd.com/wp-content/uploads/2025/06/modern-ceo-md-room-interior-design.jpg',
                caption: "MD's office — where strategy and vision come together",
            },
            {
                url: 'https://thearchitectsdiary.com/wp-content/uploads/2024/08/IT-office-interior-design-3.jpg',
                caption: 'Our technical and IT workspace at headquarters',
            },
            {
                url: 'https://img.freepik.com/premium-photo/modern-office-interior-design-3d-realistic-render_471440-161.jpg?semt=ais_user_personalization&w=740&q=80',
                caption: 'Planned expansion of our operations floor — 2026',
            },
        ],
    },
    {
        id: 5,
        title: 'Pre-Treatment Excellence: Why Scouring & Bleaching Define Final Fabric Quality',
        excerpt:
            "A perfect dye result begins long before the dye even enters the machine. Discover how proper pre-treatment preparation sets the foundation for consistent colour and quality in every production run.",
        story: [
            "Pre-treatment is perhaps the most underappreciated phase of the wet processing sequence. Yet it is the single most important determinant of final fabric quality. A poorly scoured or inadequately bleached substrate will produce uneven dye uptake regardless of how carefully the dyeing stage is managed.",
            "Scouring removes the natural waxes, oils, and processing aids deposited during spinning and weaving. Without thorough scouring, these hydrophobic barriers prevent the dye liquor from penetrating the fibre evenly. The result: patchy, unlevel dyeing that cannot be corrected at a later stage without expensive re-processing.",
            "Bleaching — typically with hydrogen peroxide under alkaline conditions — aims to destroy the natural pigments in cotton, achieving a consistent base whiteness (CIE whiteness above 80) before any colour is applied. We work with factories to optimise their peroxide concentration, pH, temperature, and time parameters to achieve maximum whiteness with minimum fibre damage.",
            "At Nakshi Color Chem, we supply a complete range of pre-treatment auxiliaries: wetting agents, sequestering agents, stabilisers, and enzymatic bio-scouring preparations. Our enzymatic range is particularly popular with factories targeting lower water and energy consumption — bio-scouring can reduce water usage by up to 30% versus conventional alkali scouring.",
            "The bottom line: invest in pre-treatment, and your dyeing results will take care of themselves. Cut corners on preparation, and no amount of expensive dye or skilled labour will produce a premium fabric.",
        ].join('\n\n'),
        author: 'Md. Rafiqul Islam',
        date: 'December 20, 2025',
        readTime: '7 min read',
        category: 'Technical Insight',
        images: [
            {
                url: 'https://blogs.airbrickinfra.com/wp-content/uploads/2024/03/Office-Interior-Design.jpg',
                caption: 'Technical documentation area at our laboratory office',
            },
            {
                url: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2025/04/Luxury-office-by-Decorilla-office-interior-decorators-Barbara-C-1024x792.jpg',
                caption: 'Premium client consultation suite at our Dhaka office',
            },
            {
                url: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-kamo11235-667838.jpg&fm=jpg',
                caption: 'Factory-floor technical support session in progress',
            },
        ],
    },
];

/* ─── Image Carousel ─────────────────────────────────────────────────── */
const ImageCarousel: React.FC<{ images: BlogPost['images']; compact?: boolean }> = ({
    images,
    compact = false,
}) => {
    const [current, setCurrent] = useState(0);

    const prev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    const next = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrent((c) => (c + 1) % images.length);
    };

    return (
        <div
            className={`relative overflow-hidden ${compact ? 'aspect-[16/9] rounded-xl' : 'aspect-[16/9] rounded-2xl'
                } bg-slate-200`}
        >
            {/* Sliding strip */}
            <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover flex-shrink-0"
                        style={{ minWidth: '100%' }}
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Prev / Next */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-1.5 transition-all backdrop-blur-sm"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-1.5 transition-all backdrop-blur-sm"
                    >
                        <ChevronRight size={18} />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent(i);
                                }}
                                className={`rounded-full transition-all ${i === current ? 'bg-white w-5 h-2' : 'bg-white/50 w-2 h-2'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 pointer-events-none">
                <p className="text-white text-xs">{images[current].caption}</p>
            </div>
        </div>
    );
};

/* ─── Category colours ───────────────────────────────────────────────── */
const categoryColors: Record<string, string> = {
    'Technical Insight': 'bg-blue-100 text-blue-700',
    'Company Story': 'bg-amber-100 text-amber-700',
    Sustainability: 'bg-emerald-100 text-emerald-700',
};

/* ─── Blog Modal ─────────────────────────────────────────────────────── */
const BlogModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => (
    <div
        className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
        onClick={onClose}
    >
        <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-700 rounded-full p-2 shadow-lg transition-all hover:scale-110"
            >
                <X size={20} />
            </button>

            {/* Image carousel */}
            <div className="w-full">
                <ImageCarousel images={post.images} />
            </div>

            {/* Content */}
            <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                        className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-600'
                            }`}
                    >
                        {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock size={12} /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                        <User size={12} /> {post.author}
                    </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                    {post.title}
                </h2>

                <div className="space-y-4 text-slate-700 leading-relaxed">
                    {post.story.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

/* ─── Blog Card ──────────────────────────────────────────────────────── */
const BlogCard: React.FC<{ post: BlogPost; onClick: () => void }> = ({ post, onClick }) => (
    <div
        className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
        onClick={onClick}
    >
        <div className="flex-shrink-0">
            <ImageCarousel images={post.images} compact />
        </div>

        <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-3">
                <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-600'
                        }`}
                >
                    {post.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock size={11} /> {post.readTime}
                </span>
            </div>

            <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug line-clamp-2">
                {post.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center">
                        <User size={13} className="text-primary-600" />
                    </div>
                    <span className="text-xs text-slate-600 font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Calendar size={11} /> {post.date}
                </div>
            </div>
        </div>
    </div>
);

/* ─── Main Blog Section ──────────────────────────────────────────────── */
const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;

    const canPrev = startIndex > 0;
    const canNext = startIndex + visibleCount < blogPosts.length;
    const visiblePosts = blogPosts.slice(startIndex, startIndex + visibleCount);

    return (
        <div className="py-24 bg-slate-50" id="blog">
            <div className="container mx-auto px-6">
                {/* Section header + arrow controls */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">
                            Industry Insights
                        </h2>
                        <h3 className="text-4xl font-extrabold text-slate-900">Blog &amp; Stories</h3>
                        <p className="text-lg text-slate-600 mt-3 max-w-xl">
                            Technical knowledge, company milestones, and industry perspectives from our team.
                        </p>
                    </div>

                    {/* Arrow swipe buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setStartIndex((s) => Math.max(s - 1, 0))}
                            disabled={!canPrev}
                            className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all ${canPrev
                                    ? 'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                                    : 'border-slate-200 text-slate-300 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() =>
                                setStartIndex((s) => Math.min(s + 1, blogPosts.length - visibleCount))
                            }
                            disabled={!canNext}
                            className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all ${canNext
                                    ? 'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                                    : 'border-slate-200 text-slate-300 cursor-not-allowed'
                                }`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Cards grid — always 3 visible */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visiblePosts.map((post) => (
                        <BlogCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
                    ))}
                </div>

                {/* Dot indicators */}
                {blogPosts.length > visibleCount && (
                    <div className="flex justify-center gap-2 mt-10">
                        {Array.from({ length: blogPosts.length - visibleCount + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setStartIndex(i)}
                                className={`rounded-full transition-all ${i === startIndex ? 'bg-primary-600 w-6 h-2.5' : 'bg-slate-300 w-2.5 h-2.5'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedPost && (
                <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
            )}
        </div>
    );
};

export default Blog;
