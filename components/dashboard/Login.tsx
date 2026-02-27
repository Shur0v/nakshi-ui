
import React, { useState } from 'react';
import { ShieldCheck, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API delay
        setTimeout(() => {
            onLogin();
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top_right,rgba(17,98,8,0.1),transparent),radial-gradient(circle_at_bottom_left,rgba(106,21,44,0.1),transparent)]">
            <div className="w-full max-w-md">
                {/* Logo Area */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center h-20 w-auto mb-6 group transition-all hover:scale-105 p-4 bg-white rounded-[1.5rem] shadow-2xl">
                        <img src="/Nakshi-logo.svg" alt="Nakshi" className="h-full object-contain" />
                    </div>
                    <p className="text-slate-500 font-medium">Secure access to Nakshi CMS</p>
                </div>

                {/* Login Card */}
                <div className="bg-slate-800/50 backdrop-blur-xl p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary-500 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="text"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@nakshi.com"
                                    className="w-full pl-12 pr-5 py-4 bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Secure Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary-500 transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-5 py-4 bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 text-white font-black py-4 rounded-2xl shadow-xl shadow-primary-600/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98] group"
                        >
                            {loading ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <>
                                    Authenticate <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">
                            Authorized Personnel Only
                        </p>
                    </div>
                </div>

                {/* Footer info */}
                <p className="text-center text-slate-600 text-xs mt-10 font-bold uppercase tracking-widest leading-loose">
                    256-BIT ENCRYPTION ACTIVE <br /> IP LOGGING ENABLED
                </p>
            </div>
        </div>
    );
};

export default Login;
