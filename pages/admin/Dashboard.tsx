import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Users, PawPrint, DollarSign, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { leads, animals } = useStore();

  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const availableAnimals = animals.filter(a => a.status === 'Available').length;

  const stats = [
    { label: 'New Leads', value: newLeadsCount, icon: Users, color: 'bg-blue-500' },
    { label: 'Animals in Care', value: animals.length, icon: PawPrint, color: 'bg-brand-orange' },
    { label: 'Available for Adoption', value: availableAnimals, icon: Activity, color: 'bg-green-500' },
    { label: 'Monthly Donations', value: '$2,450', icon: DollarSign, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-800 mb-8">Dashboard Overview</h2>
      
      <div className="grid grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-4">
            <div className={`${stat.color} p-4 rounded-xl text-white shadow-lg shadow-gray-200`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-stone-400 font-bold uppercase">{stat.label}</p>
              <p className="text-2xl font-black text-stone-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <h3 className="text-xl font-bold text-stone-800">Recent Leads</h3>
             <Link to="/admin/leads" className="text-sm text-blue-500 font-bold hover:underline">View All</Link>
           </div>
           <div className="space-y-4">
             {leads.slice(0, 5).map(lead => (
               <div key={lead.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-xl hover:bg-blue-50 transition-colors border border-stone-100">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${lead.status === 'New' ? 'bg-blue-500' : 'bg-stone-300'}`}></div>
                    <div>
                      <p className="font-bold text-stone-800">{lead.name}</p>
                      <p className="text-xs text-stone-500">{lead.interest}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-stone-400">{lead.date}</span>
               </div>
             ))}
           </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
           <h3 className="text-xl font-bold text-stone-800 mb-6">Rescue Tasks</h3>
           <div className="space-y-3">
             {['Vet check for Thumper', 'Order more Timothy Hay', 'Update website photos', 'Call volunteer coordinator'].map((task, i) => (
               <div key={i} className="flex items-center gap-3 p-3 hover:bg-stone-50 rounded-lg cursor-pointer">
                 <input type="checkbox" className="w-5 h-5 rounded text-brand-orange focus:ring-brand-orange" />
                 <span className="text-stone-600 font-medium">{task}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;