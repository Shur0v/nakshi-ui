
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="w-full lg:w-2/5 flex flex-col">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Contact Us</h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Tell us your fabric type, process, and required performance. Our team will respond with the right product direction and technical guidance.
            </p>

            <div className="space-y-8 flex-grow">
              <div className="flex gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-blue-600 h-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Office Address</h4>
                  <p className="text-slate-500 text-sm">House #02 (2nd Floor), Road #06, Sector #04, Uttara, Dhaka-1230, Bangladesh</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-blue-600 h-fit">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-500 text-sm">+880 1234 567890</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-blue-600 h-fit">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-500 text-sm">info@nakshicolorchem.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-blue-600 h-fit">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Business Hours</h4>
                  <p className="text-slate-500 text-sm">Saturday — Thursday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-600 p-6 rounded-2xl text-white shadow-lg">
              <h4 className="font-bold mb-2">Service Areas</h4>
              <p className="text-white/80 text-sm">Nationwide Support in Bangladesh - Specialized logistics for major industrial hubs.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 h-full">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full content-between" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Company / Factory Name</label>
                  <input type="text" placeholder="Global Textiles Ltd" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email / Phone</label>
                  <input type="text" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">City</label>
                  <input type="text" placeholder="Dhaka" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Process Type</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                    <option>Dyeing</option>
                    <option>Washing</option>
                    <option>Finishing</option>
                    <option>Printing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Fabric Type</label>
                  <input type="text" placeholder="Cotton, Polyester, etc." className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea rows={4} placeholder="How can we help your operations today?" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                    Send Message <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
