import React from 'react';
import { MOCK_SERVICES } from '../constants';
import LeadForm from '../components/LeadForm';
import { Home, Scissors, Stethoscope } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Home': Home,
  'Scissors': Scissors,
  'Stethoscope': Stethoscope
};

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-8 mt-2">Services for your<br/>Small Companions.</h1>
            <p className="text-stone-500 text-lg mb-12">
              We know how hard it is to find specialized care for exotics. That's why we offer boarding and grooming services run by experienced rescue staff.
            </p>

            <div className="space-y-6">
              {MOCK_SERVICES.map(service => {
                const Icon = iconMap[service.icon];
                return (
                  <div key={service.id} className="flex gap-4 p-6 rounded-2xl bg-stone-50 border border-stone-100">
                    <div className="bg-white p-3 rounded-xl h-fit shadow-sm text-brand-dark">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-black">{service.title}</h3>
                      <p className="text-stone-500 mb-2">{service.description}</p>
                      <span className="inline-block bg-brand-cream/30 text-brand-orange font-bold px-3 py-1 rounded-lg text-sm">
                        Starts at {service.priceStart}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-brand-black text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full blur-[80px] opacity-20 -mr-10 -mt-10"></div>
             <h2 className="text-3xl font-bold mb-6 relative z-10">Book a Service</h2>
             <p className="text-stone-400 mb-8 relative z-10">
               Fill out the form below to request a booking. We will check availability and call you back to confirm.
             </p>
             <div className="relative z-10 text-stone-800 bg-white p-6 rounded-2xl">
               <LeadForm interest="Service Booking" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;