
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Closed by default on mobile
    const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true); // Open by default on desktop
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
                className={`bg-slate-900 text-white transition-all duration-300 z-50 fixed inset-y-0 left-0 lg:relative ${isSidebarOpen
                    ? 'w-72 translate-x-0'
                    : '-translate-x-full lg:translate-x-0 ' + (isDesktopSidebarOpen ? 'lg:w-72' : 'lg:w-20')
                    }`}
            >
                <div className="h-full flex flex-col p-6 overflow-hidden">
                    {/* Sidebar Header (Mobile Only) */}
                    <div className="flex items-center justify-between mb-8 lg:hidden">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Navigation</span>
                        <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-slate-400 hover:text-white">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Logo Section */}
                    <div className="mb-12">
                        <div className={`flex items-center justify-center p-[10px] bg-white rounded-2xl w-full transition-all duration-300 ${(isSidebarOpen || isDesktopSidebarOpen) ? 'h-16' : 'h-12'}`}>
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
                                    {(isSidebarOpen || isDesktopSidebarOpen) && <span className="font-bold text-sm tracking-wide">{item.name}</span>}
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
                            {(isSidebarOpen || isDesktopSidebarOpen) && <span className="font-bold text-sm tracking-wide text-primary-500">Live Website</span>}
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-4 p-4 rounded-2xl text-rose-500 hover:bg-rose-500/10 transition-all group"
                        >
                            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                            {(isSidebarOpen || isDesktopSidebarOpen) && <span className="font-bold text-sm tracking-wide">Logout</span>}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col h-screen overflow-hidden">
                {/* Top Header */}
                <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2 hover:bg-slate-100 rounded-xl transition-colors lg:hidden text-slate-600"
                        >
                            <Menu size={24} />
                        </button>
                        <button
                            onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)}
                            className="p-2 hover:bg-slate-100 rounded-xl transition-colors hidden lg:block text-slate-600"
                        >
                            <Menu size={20} />
                        </button>
                        <div className="hidden xl:flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-xl text-slate-500 min-w-80">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search CMS data..."
                                className="bg-transparent border-none focus:outline-none text-sm w-full font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <button className="p-2 md:p-2.5 hover:bg-slate-100 rounded-xl transition-colors relative">
                            <Bell size={20} className="text-slate-600" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="h-8 md:h-10 w-px bg-slate-200 mx-1 md:mx-2" />
                        <div className="flex items-center gap-2 md:gap-3 pl-1 md:pl-2">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-black text-slate-900 leading-none">Admin</p>
                                <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mt-1">System Controller</p>
                            </div>
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-200 rounded-xl overflow-hidden shadow-inner flex-shrink-0">
                                <img src="https://ui-avatars.com/api/?name=Admin&background=116208&color=fff" alt="Admin" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <div className="p-4 md:p-8 overflow-y-auto flex-grow bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40 transition-all duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default DashboardLayout;
