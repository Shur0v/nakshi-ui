
import React, { useState } from 'react';
import {
    Plus,
    Edit3,
    Trash2,
    X,
    Calendar,
    User,
    Image as ImageIcon,
    CheckCircle2,
    Upload,
    Link as LinkIcon,
    ChevronRight,
    Type,
    FileText,
    Clock
} from 'lucide-react';

// Re-using the blog data interface for consistency
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

const mockPosts: BlogPost[] = [
    {
        id: 1,
        title: 'The Science Behind Reactive Dyeing in Modern Textile Mills',
        excerpt: "Reactive dyes form a covalent bond with the fibre, giving unmatched wash and light fastness.",
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
        images: [{ url: 'https://images.unsplash.com/photo-1715593949273-09009558300a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D', caption: 'Office' }],
    },
    {
        id: 2,
        title: 'From Archroma Partnership to 500+ Products: Our 10-Year Journey',
        excerpt: "From our first delivery of Archroma auxiliaries in 2013 to managing a portfolio of over 500 products.",
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
        images: [{ url: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/05/23142317/bamboo-chairs-plants-rug-flooring-768x512.jpg', caption: 'Office' }],
    },
    {
        id: 3,
        title: 'Sustainable Chemistry: Meeting ZDHC & REACH Standards in Bangladesh',
        excerpt: "Global fashion brands are tightening their MRSL compliance requirements.",
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
        images: [{ url: 'https://t4.ftcdn.net/jpg/06/11/99/21/360_F_611992113_5AUkeTHqNkRnJg5NSsSVaxxGM8KAexir.jpg', caption: 'Office' }],
    },
    {
        id: 4,
        title: 'Building a World-Class Technical Team in Bangladesh',
        excerpt: "Behind every successful chemical supply is a team of trained engineers and chemists.",
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
        images: [{ url: 'https://zeroinchinteriorsltd.com/wp-content/uploads/2025/06/modern-ceo-md-room-interior-design.jpg', caption: 'Office' }],
    },
    {
        id: 5,
        title: 'Pre-Treatment Excellence: Why Scouring & Bleaching Define Final Fabric Quality',
        excerpt: "A perfect dye result begins long before the dye even enters the machine.",
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
        images: [{ url: 'https://blogs.airbrickinfra.com/wp-content/uploads/2024/03/Office-Interior-Design.jpg', caption: 'Office' }],
    }
];

const BlogManagement: React.FC = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);
    const [imageMethod, setImageMethod] = useState<'upload' | 'link'>('upload');
    const [posts, setPosts] = useState(mockPosts);

    const openEditModal = (post: BlogPost) => {
        setEditingPost(post);
        setIsEditModalOpen(true);
        setImageMethod('link'); // Default to link for editing existing ones for now
    };

    const openDeleteModal = (post: BlogPost) => {
        setPostToDelete(post);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (postToDelete) {
            setPosts(posts.filter(p => p.id !== postToDelete.id));
            setIsDeleteModalOpen(false);
            setPostToDelete(null);
        }
    };

    return (
        <>
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Blog <span className="text-primary-600">Management</span></h1>
                        <p className="text-slate-500 font-medium">Create, edit, and organize your technical stories.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary-600/20 transition-all group active:scale-95"
                        >
                            <Plus size={18} className="group-hover:rotate-90 transition-transform" /> New Entry
                        </button>
                    </div>
                </div>



                {/* Table / List */}
                <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Blog Article</th>
                                    <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Category</th>
                                    <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-center">Author</th>
                                    <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-center">Status</th>
                                    <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {posts.map((post) => (
                                    <tr key={post.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-4 md:px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-12 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200 hidden sm:block">
                                                    <img src={post.images[0].url} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-primary-600 transition-colors text-sm md:text-base">{post.title}</h4>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                                                            <Calendar size={10} /> {post.date}
                                                        </span>
                                                        <span className="hidden xs:flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                                                            <ImageIcon size={10} /> {post.images.length} Media
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 md:px-8 py-6">
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black rounded-lg uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="px-4 md:px-8 py-6 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <User size={14} className="text-slate-400" />
                                                <span className="text-xs md:text-sm font-bold text-slate-700 whitespace-nowrap">{post.author}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 md:px-8 py-6 text-center">
                                            <div className="flex items-center justify-center gap-2 text-emerald-600">
                                                <CheckCircle2 size={16} />
                                                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Published</span>
                                            </div>
                                        </td>
                                        <td className="px-4 md:px-8 py-6 text-right">
                                            <div className="inline-flex items-center gap-2">
                                                <button
                                                    onClick={() => openEditModal(post)}
                                                    className="p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-primary-600 hover:text-white transition-all shadow-sm active:scale-95"
                                                >
                                                    <Edit3 size={16} />
                                                </button>
                                                <button
                                                    onClick={() => openDeleteModal(post)}
                                                    className="p-2.5 bg-slate-100 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-sm active:scale-95"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 bg-slate-50 border-t border-slate-200 text-center">
                        <button className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] hover:text-primary-600 transition-colors">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </div>

            {/* ─── ADD/EDIT BLOG MODAL ─── */}
            {(isAddModalOpen || isEditModalOpen) && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center">
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); }} />

                    <div className="bg-white w-full sm:max-w-4xl h-full sm:h-auto sm:max-h-[100vh] sm:rounded-none shadow-2xl relative z-10 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                        {/* Header */}
                        <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase">
                                    {isEditModalOpen ? (
                                        <>Modify <span className="text-primary-600">Story</span></>
                                    ) : (
                                        <>Assemble <span className="text-primary-600">New Story</span></>
                                    )}
                                </h2>
                                <p className="text-slate-500 text-xs md:text-sm font-medium">Capture industry insights and milestones.</p>
                            </div>
                            <button
                                onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); }}
                                className="w-10 h-10 md:w-12 md:h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-500/10 transition-all active:scale-95"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 md:space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Basic Details */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Article Title</label>
                                        <div className="relative group">
                                            <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                                            <input
                                                type="text"
                                                defaultValue={editingPost?.title || ''}
                                                placeholder="e.g. The Future of Textiles"
                                                className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Category</label>
                                            <select
                                                defaultValue={editingPost?.category || 'Technical Insight'}
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700 appearance-none"
                                            >
                                                <option>Technical Insight</option>
                                                <option>Company Story</option>
                                                <option>Sustainability</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Read Time</label>
                                            <div className="relative">
                                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                                <input
                                                    type="text"
                                                    defaultValue={editingPost?.readTime || ''}
                                                    placeholder="5 min"
                                                    className="w-full pl-11 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Author Name</label>
                                        <div className="relative">
                                            <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="text"
                                                defaultValue={editingPost?.author || ''}
                                                placeholder="Md. Name"
                                                className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Media Selection */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between ml-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Featured Asset</label>
                                        <div className="flex bg-slate-100 p-1 rounded-xl">
                                            <button
                                                onClick={() => setImageMethod('upload')}
                                                className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${imageMethod === 'upload' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-400'}`}
                                            >
                                                <Upload size={12} className="inline mr-1" /> File
                                            </button>
                                            <button
                                                onClick={() => setImageMethod('link')}
                                                className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${imageMethod === 'link' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-400'}`}
                                            >
                                                <LinkIcon size={12} className="inline mr-1" /> URL
                                            </button>
                                        </div>
                                    </div>

                                    {imageMethod === 'upload' ? (
                                        <div className="h-[188px] border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-6 bg-slate-50/50 hover:bg-primary-50 hover:border-primary-200 transition-all group cursor-pointer">
                                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary-600 group-hover:scale-110 transition-all mb-4">
                                                <Upload size={24} />
                                            </div>
                                            <p className="text-xs font-bold text-slate-500 group-hover:text-primary-600 transition-colors">Drag assets here or <span className="text-primary-600 underline">Browse</span></p>
                                            <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-2 font-black">Max 10MB • JPG, PNG, WEBP</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="relative">
                                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                <input
                                                    type="text"
                                                    defaultValue={editingPost?.images[0]?.url || ''}
                                                    placeholder="https://images.unsplash.com/..."
                                                    className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                                />
                                            </div>
                                            {editingPost?.images[0]?.url && (
                                                <div className="h-32 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
                                                    <img src={editingPost.images[0].url} alt="" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Detailed Content */}
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center justify-between ml-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Detailed Story Content</label>
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Supports Markdown Rendering</span>
                                </div>
                                <div className="relative group">
                                    <FileText className="absolute left-4 top-4 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                                    <textarea
                                        rows={8}
                                        defaultValue={editingPost?.story || ''}
                                        placeholder="Write the technical insights or company milestones here..."
                                        className="w-full pl-12 pr-5 py-5 bg-slate-50 border border-slate-100 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-medium text-slate-700 leading-relaxed"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 md:p-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3 md:gap-4 bg-slate-50/50">
                            <button
                                onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); }}
                                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
                            >
                                Discard
                            </button>
                            <button
                                onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); }}
                                className="w-full sm:w-auto px-10 py-4 bg-primary-600 text-white rounded-2xl font-black shadow-xl shadow-primary-600/20 hover:bg-primary-700 transition-all flex items-center justify-center gap-3 active:scale-95 group"
                            >
                                {isEditModalOpen ? 'Save Changes' : 'Publish Story'} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ─── DELETE CONFIRMATION MODAL ─── */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center">
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsDeleteModalOpen(false)} />

                    <div className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl relative z-10 p-8 flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
                        <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-3xl flex items-center justify-center mb-6">
                            <Trash2 size={40} />
                        </div>
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">Remove Article?</h2>
                        <p className="text-slate-500 text-sm font-medium mb-8">
                            This action is permanent and will remove "{postToDelete?.title}" from the live blog immediately.
                        </p>

                        <div className="flex gap-3 w-full">
                            <button
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="flex-grow py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95 text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="flex-grow py-4 bg-rose-500 text-white rounded-2xl font-black shadow-lg shadow-rose-500/20 hover:bg-rose-600 transition-all active:scale-95 text-sm"
                            >
                                Delete Story
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogManagement;
