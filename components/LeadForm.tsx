import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Send, CheckCircle } from 'lucide-react';

interface LeadFormProps {
  interest?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ interest = 'General Inquiry' }) => {
  const { addLead } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interest: interest,
      message: formData.message
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">We received your inquiry. Our team will call you shortly at <span className="font-bold">{formData.phone}</span>.</p>
        <button 
          onClick={() => { setSubmitted(false); setFormData({name:'', email:'', phone:'', message:''}); }}
          className="mt-6 text-sm text-green-700 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
          <input 
            type="text" 
            required 
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
          <input 
            type="tel" 
            required 
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
        <input 
          type="email" 
          required 
          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
          placeholder="jane@example.com"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">Message</label>
        <textarea 
          rows={4}
          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all resize-none"
          placeholder={`I'm interested in ${interest}...`}
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>
      <button 
        type="submit"
        className="w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
      >
        Send Inquiry <Send size={18} />
      </button>
      <p className="text-xs text-stone-400 text-center mt-2">
        We typically respond within 24 hours.
      </p>
    </form>
  );
};

export default LeadForm;