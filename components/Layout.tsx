import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart, ShieldCheck, Phone } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useStore();
  const location = useLocation();

  // Don't show public layout for admin routes
  if (location.pathname.startsWith('/admin')) {
    return <>{children}</>;
  }

  const navLinks = NAV_LINKS;

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800 font-sans">
      {/* Top Bar */}
      <div className="bg-brand-black text-white py-2 text-xs md:text-sm text-center px-4">
        <span className="opacity-90">Running a rescue takes a village! Support our small friends today.</span>
        <Link to="/donate" className="ml-2 underline hover:text-brand-orange font-bold">Donate Now</Link>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-orange text-white p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-brand-black">
                Wee<span className="text-brand-orange">Companions</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-medium text-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`hover:text-brand-orange transition-colors ${location.pathname === link.path ? 'text-brand-orange font-bold' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link to="/shop" className="relative p-2 hover:bg-stone-100 rounded-full transition-colors">
                <ShoppingBag size={20} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>

              <Link to="/admin/dashboard" className="text-xs text-stone-400 hover:text-stone-600 border border-stone-200 px-2 py-1 rounded">
                Staff Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-lg font-medium p-2 hover:bg-stone-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-stone-100 my-2"></div>
              <Link to="/admin/dashboard" className="text-sm text-stone-500 p-2">Staff Login</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-orange text-white p-2 rounded-lg">
                  <Heart size={16} fill="currentColor" />
                </div>
                <span className="text-xl font-bold">WeeCompanions</span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">
                Dedicated to the rescue, rehabilitation, and rehoming of guinea pigs, rats, hamsters, and other small exotic mammals.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li><Link to="/animals" className="hover:text-brand-orange transition-colors">Adopt a Pet</Link></li>
                <li><Link to="/services" className="hover:text-brand-orange transition-colors">Boarding Services</Link></li>
                <li><Link to="/get-involved" className="hover:text-brand-orange transition-colors">Volunteer</Link></li>
                <li><Link to="/events" className="hover:text-brand-orange transition-colors">Upcoming Events</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={14} /> <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                   <ShieldCheck size={14} /> <span>{CONTACT_INFO.address}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Newsletter</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-orange"
                />
                <button className="bg-brand-orange px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
            <p>&copy; 2024 Wee Companions Small Animal Rescue. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;