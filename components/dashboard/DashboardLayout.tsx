
import React, { useState } from 'react';
import {
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    Menu,
    X,
    Bell,
    Search,
    ExternalLink,
    PhoneCall,
    Share2,
    Image as ImageIcon
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface DashboardLayoutProps {
    children: React.ReactNode;
    onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, onLogout }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { name: 'Manage Blogs', icon: FileText, path: '/dashboard/blogs' },
        { name: 'Gallery Assets', icon: ImageIcon, path: '/dashboard/gallery' },
        { name: 'Contact & Socials', icon: Share2, path: '/dashboard/contact' },
    ];

    const handleLogout = () => {
        onLogout();
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`bg-slate-900 text-white transition-all duration-300 z-50 fixed inset-y-0 left-0 lg:relative ${isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full lg:w-20 lg:translate-x-0'
                    }`}
            >
                <div className="h-full flex flex-col p-6 overflow-hidden">
                    {/* Logo Section */}
                    <div className="mb-12">
                        <div className={`flex items-center justify-center p-[10px] bg-white rounded-2xl w-full ${isSidebarOpen ? 'h-16' : 'h-12'}`}>
                            <img src="/Nakshi-logo.svg" alt="Nakshi" className="h-full w-full object-contain" />
                        </div>
                    </div>
                    {/* Navigation */}
                    <nav className="flex-grow space-y-2">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all group ${isActive
                                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <item.icon size={20} className={isActive ? '' : 'group-hover:scale-110 transition-transform'} />
                                    {isSidebarOpen && <span className="font-bold text-sm tracking-wide">{item.name}</span>}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Bottom Actions */}
                    <div className="mt-auto space-y-4">
                        <Link
                            to="/"
                            className="flex items-center gap-4 p-4 rounded-2xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
                        >
                            <ExternalLink size={20} />
                            {isSidebarOpen && <span className="font-bold text-sm tracking-wide text-primary-500">Live Website</span>}
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-4 p-4 rounded-2xl text-rose-500 hover:bg-rose-500/10 transition-all group"
                        >
                            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                            {isSidebarOpen && <span className="font-bold text-sm tracking-wide">Logout</span>}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col h-screen overflow-hidden">
                {/* Top Header */}
                <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 hover:bg-slate-100 rounded-xl transition-colors lg:hidden"
                        >
                            <Menu size={24} className="text-slate-600" />
                        </button>
                        <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-xl text-slate-500 min-w-80">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search CMS data..."
                                className="bg-transparent border-none focus:outline-none text-sm w-full font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors relative">
                            <Bell size={20} className="text-slate-600" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="h-10 w-px bg-slate-200 mx-2" />
                        <div className="flex items-center gap-3 pl-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900">Admin</p>
                                <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">System Controller</p>
                            </div>
                            <div className="w-10 h-10 bg-slate-200 rounded-xl overflow-hidden shadow-inner">
                                <img src="https://ui-avatars.com/api/?name=Admin&background=116208&color=fff" alt="Admin" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <div className="p-8 overflow-y-auto flex-grow bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>

            {/* Mobile Overlay */}
            {!isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40"
                    onClick={() => setIsSidebarOpen(true)}
                />
            )}
        </div>
    );
};

export default DashboardLayout;
