import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Lead } from '../../types';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Leads: React.FC = () => {
  const { leads, updateLeadStatus } = useStore();

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-stone-800">Leads & CRM</h2>
          <p className="text-stone-500">Manage incoming inquiries from website forms instantly.</p>
        </div>
        <div className="flex gap-2">
           <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex items-center gap-1">
             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> Live Sync Active
           </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200">
              <th className="p-4 text-xs font-bold text-stone-500 uppercase">Status</th>
              <th className="p-4 text-xs font-bold text-stone-500 uppercase">Date</th>
              <th className="p-4 text-xs font-bold text-stone-500 uppercase">Contact Name</th>
              <th className="p-4 text-xs font-bold text-stone-500 uppercase">Interest</th>
              <th className="p-4 text-xs font-bold text-stone-500 uppercase">Message</th>
              <th className="p-4 text-xs font-bold text-stone-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-stone-50 transition-colors">
                <td className="p-4">
                  <select 
                    value={lead.status}
                    onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead['status'])}
                    className={`text-xs font-bold px-3 py-1 rounded-full border-none focus:ring-2 cursor-pointer ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                      lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>
                <td className="p-4 text-sm text-stone-500 font-mono">{lead.date}</td>
                <td className="p-4">
                  <div className="font-bold text-stone-800">{lead.name}</div>
                  <div className="flex gap-2 mt-1">
                     <a href={`tel:${lead.phone}`} className="text-stone-400 hover:text-brand-orange" title="Call"><Phone size={14} /></a>
                     <a href={`mailto:${lead.email}`} className="text-stone-400 hover:text-brand-orange" title="Email"><Mail size={14} /></a>
                  </div>
                </td>
                <td className="p-4 text-sm font-medium text-brand-dark">{lead.interest}</td>
                <td className="p-4 text-sm text-stone-500 max-w-xs truncate" title={lead.message}>
                  {lead.message || '-'}
                </td>
                <td className="p-4">
                  <button className="text-stone-400 hover:text-brand-black p-2 border border-stone-200 rounded-lg hover:bg-white transition-all">
                    <MessageSquare size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {leads.length === 0 && (
          <div className="p-12 text-center text-stone-400">
            No leads found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Leads;