import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, PawPrint, ShoppingBag, Settings, LogOut } from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Leads & CRM', path: '/admin/leads', icon: Users },
    { name: 'Animals', path: '/admin/animals', icon: PawPrint },
    { name: 'Shop Orders', path: '/admin/orders', icon: ShoppingBag },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-brand-black text-stone-300 flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6">
         <h1 className="text-xl font-bold text-white tracking-tight">WC Admin</h1>
         <p className="text-xs text-stone-500 mt-1">Manage Rescue Operations</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-brand-orange text-white shadow-lg' 
                  : 'hover:bg-white/10 hover:text-white'
              }`}
            >
              <link.icon size={18} />
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors text-stone-400">
          <LogOut size={18} />
          <span className="text-sm font-medium">Exit to Website</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;