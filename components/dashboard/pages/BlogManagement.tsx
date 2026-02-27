
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
        story: "...",
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
        story: "...",
        author: 'Nakshi Team',
        date: 'February 10, 2026',
        readTime: '8 min read',
        category: 'Company Story',
        images: [{ url: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/05/23142317/bamboo-chairs-plants-rug-flooring-768x512.jpg', caption: 'Office' }],
    },
    {
        id: 3,
        title: 'Sustainable Chemistry: Meeting ZDHC & REACH Standards in Bangladesh',
        excerpt: "Global fashion brands are tightening their MRSL compliance requirements.",
        story: "...",
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
        story: "...",
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
        story: "...",
        author: 'Md. Rafiqul Islam',
        date: 'December 20, 2025',
        readTime: '7 min read',
        category: 'Technical Insight',
        images: [{ url: 'https://blogs.airbrickinfra.com/wp-content/uploads/2024/03/Office-Interior-Design.jpg', caption: 'Office' }],
    }
];

const BlogManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageMethod, setImageMethod] = useState<'upload' | 'link'>('upload');

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
                            onClick={() => setIsModalOpen(true)}
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
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Blog Article</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Category</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Author</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Status</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {mockPosts.map((post) => (
                                    <tr key={post.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-12 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200">
                                                    <img src={post.images[0].url} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-primary-600 transition-colors">{post.title}</h4>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                                                            <Calendar size={10} /> {post.date}
                                                        </span>
                                                        <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                                                            <ImageIcon size={10} /> {post.images.length} Media
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black rounded-lg uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <User size={14} className="text-slate-400" />
                                                <span className="text-sm font-bold text-slate-700">{post.author}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 text-emerald-600">
                                                <CheckCircle2 size={16} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Published</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="inline-flex items-center gap-2">
                                                <button className="p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                                                    <Edit3 size={16} />
                                                </button>
                                                <button className="p-2.5 bg-slate-100 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-sm">
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

            {/* ─── ADD BLOG MODAL ─── */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center">
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />

                    <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative z-10 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                        {/* Header */}
                        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Assemble <span className="text-primary-600">New Story</span></h2>
                                <p className="text-slate-500 text-sm font-medium">Capture industry insights and milestones.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-500/10 transition-all active:scale-95"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="flex-grow overflow-y-auto p-8 space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Basic Details */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Article Title</label>
                                        <div className="relative group">
                                            <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                                            <input type="text" placeholder="e.g. The Future of Textiles" className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Category</label>
                                            <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700 appearance-none">
                                                <option>Technical Insight</option>
                                                <option>Company Story</option>
                                                <option>Sustainability</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Read Time</label>
                                            <div className="relative">
                                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                                <input type="text" placeholder="5 min" className="w-full pl-11 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Author Name</label>
                                        <div className="relative">
                                            <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input type="text" placeholder="Md. Name" className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700" />
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
                                                <input type="text" placeholder="https://images.unsplash.com/..." className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700" />
                                            </div>
                                            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-medium text-slate-500 italic">
                                                Preview will appear once a valid image link is detected.
                                            </div>
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
                                        placeholder="Write the technical insights or company milestones here..."
                                        className="w-full pl-12 pr-5 py-5 bg-slate-50 border border-slate-100 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-medium text-slate-700 leading-relaxed"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-8 border-t border-slate-100 flex items-center justify-end gap-4 bg-slate-50/50">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
                            >
                                Discard
                            </button>
                            <button className="px-10 py-4 bg-primary-600 text-white rounded-2xl font-black shadow-xl shadow-primary-600/20 hover:bg-primary-700 transition-all flex items-center gap-3 active:scale-95 group">
                                Publish Story <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogManagement;
