
import React from 'react';
import {
    Users,
    Eye,
    MessageSquare,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Database,
    Globe,
    Plus
} from 'lucide-react';

const Overview: React.FC = () => {
    const stats = [
        { name: 'Total Visits', value: '12,842', trend: '+12.5%', isUp: true, icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
        { name: 'Product Inquiries', value: '482', trend: '+5.2%', isUp: true, icon: MessageSquare, color: 'text-primary-600', bg: 'bg-primary-50' },
        { name: 'Blog Views', value: '3,109', trend: '-2.4%', isUp: false, icon: Database, color: 'text-amber-600', bg: 'bg-amber-50' },
        { name: 'Active Sessions', value: '24', trend: '+18.1%', isUp: true, icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tighter">System <span className="text-primary-600">Overview</span></h1>
                    <p className="text-slate-500 font-medium">Monitoring site health and user engagement.</p>
                </div>
                <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary-600/20 transition-all active:scale-[0.98]">
                    <Plus size={20} /> New Blog Post
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:border-primary-100 group">
                        <div className="flex items-center justify-between mb-6">
                            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon size={24} />
                            </div>
                            <div className={`flex items-center gap-1 text-xs font-black uppercase tracking-widest ${stat.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.trend}
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-none">{stat.name}</p>
                    </div>
                ))}
            </div>

            {/* Main Sections UI */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Inquiries List (Dummy) */}
                <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden p-6 md:p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Recent Inquiries</h3>
                        <button className="text-primary-600 font-black text-xs uppercase tracking-widest hover:underline">View All</button>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors border border-transparent hover:border-slate-100 cursor-pointer group">
                                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                                    {i === 1 ? 'ZT' : i === 2 ? 'BK' : 'MD'}
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-sm font-bold text-slate-900">Zeenat Textiles Ltd.</h4>
                                    <p className="text-xs text-slate-500 font-medium">Inquiry about High Performance Reactive Dyes</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">2h Ago</p>
                                    <span className="px-2 py-0.5 bg-primary-50 text-primary-600 text-[10px] font-black rounded-lg uppercase tracking-widest">New</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Health (Dummy) */}
                <div className="bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 md:p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8">
                        <TrendingUp size={64} className="text-primary-500/20 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col">
                        <h3 className="text-xl font-black text-white uppercase tracking-tight mb-8">Infrastructure Status</h3>
                        <div className="space-y-8 flex-grow">
                            <div className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Database Uptime</p>
                                    <p className="text-primary-400 text-sm font-black">99.98%</p>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary-500 w-[99.9%] rounded-full shadow-[0_0_10px_rgba(17,98,8,1)]" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Server Response</p>
                                    <p className="text-blue-400 text-sm font-black">120ms</p>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
                                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">All Systems Operational</span>
                            </div>
                            <p className="text-slate-500 text-[10px] font-bold">Updated {new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
