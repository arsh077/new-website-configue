import React from 'react';
import LeadForm from '../components/LeadForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 bg-brand-black text-white relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
             <h1 className="text-4xl font-black mb-6">Get in Touch</h1>
             <p className="text-stone-400 mb-12">Have questions about adoption, surrenders, or volunteering? We'd love to hear from you.</p>
             
             <div className="space-y-8 relative z-10">
               <div className="flex items-start gap-4">
                 <MapPin className="text-brand-orange mt-1" />
                 <div>
                   <h3 className="font-bold text-lg">Visit Us</h3>
                   <p className="text-stone-400 text-sm">123 Rescue Lane<br/>San Diego, CA 92101</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <Mail className="text-brand-orange mt-1" />
                 <div>
                   <h3 className="font-bold text-lg">Email Us</h3>
                   <p className="text-stone-400 text-sm">hello@weecompanions.org</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <Phone className="text-brand-orange mt-1" />
                 <div>
                   <h3 className="font-bold text-lg">Call Us</h3>
                   <p className="text-stone-400 text-sm">(555) 123-4567</p>
                 </div>
               </div>
             </div>
          </div>
          <div className="md:w-1/2 p-12">
            <h2 className="text-2xl font-bold mb-6 text-brand-black">Send a Message</h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;