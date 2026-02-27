
import React from 'react';
import {
    Building2,
    Mail,
    Phone,
    Facebook,
    Linkedin,
    Twitter,
    Save,
    RefreshCw,
    Clock,
    MapPin,
    Globe
} from 'lucide-react';

const ContactManagement: React.FC = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Contact <span className="text-primary-600">&amp; Socials</span></h1>
                    <p className="text-slate-500 font-medium">Update company information and public contact details.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-slate-200 text-slate-700 px-6 py-3 rounded-2xl font-bold hover:bg-slate-300 transition-all active:scale-95">
                        <RefreshCw size={18} /> Reset
                    </button>
                    <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-primary-600/20 transition-all active:scale-95 group">
                        <Save size={18} className="group-hover:scale-110 transition-transform" /> Save Changes
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Office Information */}
                <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-10 space-y-8">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-primary-50 text-primary-600 rounded-xl">
                            <Building2 size={24} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Office &amp; Identity</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Company Address</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-4 text-slate-400" size={18} />
                                <textarea
                                    rows={3}
                                    className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                    defaultValue="32/B (1st Floor), Malibagh Chowdhurypara, Malibagh, Dhaka-1219"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Primary Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                        defaultValue="info@nakshicolorchembd.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Sales Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                        defaultValue="sabuj@nakshicolorchembd.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Working Hours</label>
                            <div className="relative">
                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                    defaultValue="Saturday — Thursday: 9:00 AM - 6:00 PM"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social & Communication */}
                <div className="space-y-8">
                    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-10 space-y-8">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Social Networks</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center flex-shrink-0">
                                    <Facebook size={24} />
                                </div>
                                <input
                                    type="text"
                                    className="flex-grow px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1877F2]/40 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                    defaultValue="facebook.com/nakshicolorchembd"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center flex-shrink-0">
                                    <Linkedin size={24} />
                                </div>
                                <input
                                    type="text"
                                    className="flex-grow px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/40 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                    defaultValue="linkedin.com/company/nakshi-color-chem"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                                    <Twitter size={24} />
                                </div>
                                <input
                                    type="text"
                                    className="flex-grow px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-sm font-bold text-slate-700"
                                    defaultValue="twitter.com/nakshichem"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl p-10 space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8">
                            <Phone size={80} className="text-primary-500/10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Phone Lines</h3>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-transparent transition-all text-sm font-bold text-white"
                                    defaultValue="+8802 222221769"
                                />
                                <input
                                    type="text"
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-transparent transition-all text-sm font-bold text-white"
                                    defaultValue="+88 01799089338"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactManagement;
