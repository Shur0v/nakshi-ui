
import React, { useState } from 'react';
import {
    Plus,
    Trash2,
    X,
    Upload,
    Link as LinkIcon,
    ChevronRight,
    Filter,
    Image as ImageIcon,
    Grid
} from 'lucide-react';

interface GalleryImage {
    url: string;
    alt: string;
}

const sourceImages: GalleryImage[] = [
    { url: 'https://images.stockcake.com/public/f/d/2/fd2a5e87-2695-4361-b55e-7f48a887469d_large/textile-factory-colors-stockcake.jpg', alt: 'Textile Factory Colors' },
    { url: 'https://www.shutterstock.com/image-photo/amritsar-punjab-indiamarch-16-2016-600nw-2475301311.jpg', alt: 'Textile Dyeing Operations' },
    { url: 'https://5.imimg.com/data5/SELLER/Default/2022/9/YT/MF/QL/3526160/0w8a5619-1024x683.jpg', alt: 'Fabric Processing' },
    { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzV8DAiC4F3YeyHuzhm5BS7EE17IfSHkNkrxrQWDxZiSPpexiy2htVqvLymIBQhkCXVtsqlRD32rFSxNKtJChZzRHBytviiqXkuJH3HOSTGb8BuXX8kq860717wTbIwxA58wIDb-4rDTOA/s1600/dyeing_textileaid.blogspot.com.jpg', alt: 'Textile Dyeing Process' },
    { url: 'https://www.shutterstock.com/image-photo/amritsar-punjab-indiamarch-16-2016-600nw-2475301313.jpg', alt: 'Fabric Dyeing Workshop' },
    { url: 'https://t4.ftcdn.net/jpg/09/32/04/49/360_F_932044993_ZU2a1Km73TwgJAgnNABiKInMuYhigfVy.jpg', alt: 'Textile Chemical Solutions' },
    { url: 'https://t3.ftcdn.net/jpg/10/84/16/28/360_F_1084162889_Y54hXPD6JCdGjM8rm6A72hKHDCeZWQ7l.jpg', alt: 'Fabric Processing Lab' },
    { url: 'https://seamapparel.com/wp-content/uploads/2024/07/fabric-dyeing-2.jpg', alt: 'Fabric Dyeing' },
    { url: 'https://t3.ftcdn.net/jpg/19/08/83/02/360_F_1908830225_ZEGE8E7GfsyzZC9IjYo3uz4g4XJuXusq.jpg', alt: 'Textile Industry Operations' },
    { url: 'https://images.squarespace-cdn.com/content/v1/53c95abee4b0e7d8eb3d6cf2/39ede217-76d4-47ce-90dc-e53655229b34/22bog-textiles-span-superJumbo-v2.jpg', alt: 'Textile Operations' },
    { url: 'https://t4.ftcdn.net/jpg/19/09/28/61/360_F_1909286192_LMuyygYIipex8vBXniBzTi4RMsUBADMe.jpg', alt: 'Coloring & Finishing' },
    { url: 'https://t3.ftcdn.net/jpg/19/11/81/10/360_F_1911811016_q4hmj9BskXKz1YHSjg2cCC8vS6EjiFFW.jpg', alt: 'Textile Production' },
    { url: 'https://img.freepik.com/premium-photo/pile-bright-multicolored-pieces-fabric-bazaar_789279-20170.jpg', alt: 'Multicolored Fabric Pile' }
];

const GalleryManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
    const [imageMethod, setImageMethod] = useState<'upload' | 'link'>('upload');
    const [images, setImages] = useState(sourceImages);
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
    const [isSortOpen, setIsSortOpen] = useState(false);

    const handleSort = (order: 'newest' | 'oldest') => {
        setSortOrder(order);
        setIsSortOpen(false);
        const sorted = [...images].reverse(); // Simple toggle for mock data
        setImages(sorted);
    };

    const openDeleteModal = (index: number) => {
        setDeletingIndex(index);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (deletingIndex !== null) {
            setImages(images.filter((_, i) => i !== deletingIndex));
            setIsDeleteModalOpen(false);
            setDeletingIndex(null);
        }
    };

    return (
        <>
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Gallery <span className="text-primary-600">Assets</span></h1>
                        <p className="text-slate-500 font-medium">Manage and organize visual content for the live website.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <button
                                onClick={() => setIsSortOpen(!isSortOpen)}
                                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
                            >
                                <Filter size={18} /> Sort: {sortOrder === 'newest' ? 'Newest' : 'Oldest'}
                            </button>

                            {isSortOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                                    <button
                                        onClick={() => handleSort('newest')}
                                        className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${sortOrder === 'newest' ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        Newest First
                                    </button>
                                    <button
                                        onClick={() => handleSort('oldest')}
                                        className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${sortOrder === 'oldest' ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        Oldest First
                                    </button>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary-600/20 transition-all group active:scale-95"
                        >
                            <Plus size={18} className="group-hover:rotate-90 transition-transform" /> Add Asset
                        </button>
                    </div>
                </div>

                {/* Assets Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="group relative aspect-square bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl hover:border-primary-100 transition-all duration-300"
                        >
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                                <button
                                    onClick={() => openDeleteModal(i)}
                                    className="w-12 h-12 bg-rose-500 text-white rounded-2xl flex items-center justify-center hover:bg-rose-600 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg shadow-rose-500/20"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>

                            {/* Caption Tag */}
                            <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                <p className="text-[10px] font-black text-white uppercase tracking-widest truncate bg-slate-900/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-center">
                                    {img.alt}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Empty State / Add Placeholder */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center gap-4 text-slate-400 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all group"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Plus size={28} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest">Add New Image</span>
                    </button>
                </div>
            </div>

            {/* ─── ADD ASSET MODAL ─── */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center">
                    {/* Backdrop fixes - separate element for full coverage */}
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />

                    <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative z-10 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                        {/* Header */}
                        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Upload <span className="text-primary-600">Visual</span></h2>
                                <p className="text-slate-500 text-sm font-medium">Add new operational or industry photos.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-100 transition-all active:scale-95"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="p-8 space-y-8 overflow-y-auto">
                            {/* Method Toggle */}
                            <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full">
                                <button
                                    onClick={() => setImageMethod('upload')}
                                    className={`flex-grow flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${imageMethod === 'upload' ? 'bg-white text-primary-600 shadow-xl shadow-slate-200' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    <Upload size={16} /> Local Upload
                                </button>
                                <button
                                    onClick={() => setImageMethod('link')}
                                    className={`flex-grow flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${imageMethod === 'link' ? 'bg-white text-primary-600 shadow-xl shadow-slate-200' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    <LinkIcon size={16} /> Static Link
                                </button>
                            </div>

                            {/* Content Side */}
                            <div className="space-y-6">
                                {imageMethod === 'upload' ? (
                                    <div className="h-64 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center p-8 bg-slate-50/50 hover:bg-primary-50 hover:border-primary-200 transition-all group cursor-pointer">
                                        <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary-600 group-hover:scale-110 transition-all mb-4">
                                            <Upload size={32} />
                                        </div>
                                        <p className="text-sm font-bold text-slate-500 group-hover:text-primary-600 transition-colors text-center">
                                            Drop high-resolution image here <br /> or <span className="text-primary-600 underline">Select File</span>
                                        </p>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-4 font-black">PNG, JPG, WEBP • Max 25MB</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Asset URL</label>
                                        <div className="relative group">
                                            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                                            <input type="text" placeholder="https://domain.com/image.jpg" className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700" />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Short Description / Alt Text</label>
                                    <div className="relative group">
                                        <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                                        <input type="text" placeholder="e.g. Laboratory testing of reactive dyes" className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-8 border-t border-slate-100 flex items-center justify-end gap-4 bg-slate-50/50">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
                            >
                                Discard
                            </button>
                            <button className="px-10 py-4 bg-primary-600 text-white rounded-2xl font-black shadow-xl shadow-primary-600/20 hover:bg-primary-700 transition-all flex items-center gap-3 active:scale-95 group">
                                Add to Gallery <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">Remove Asset?</h2>
                        <p className="text-slate-500 text-sm font-medium mb-8">
                            This action is permanent and will remove the visual from the live gallery immediately.
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
                                Delete Asset
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryManagement;
