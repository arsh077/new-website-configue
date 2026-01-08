import React from 'react';
import { Heart, Gift, Clock } from 'lucide-react';
import { DONATION_AMOUNTS } from '../constants';

const Donate: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-cream/20 py-24 text-center">
        <div className="container mx-auto px-6">
           <Heart size={48} className="text-brand-orange mx-auto mb-6" fill="currentColor" />
           <h1 className="text-5xl md:text-6xl font-black text-brand-black mb-6">Support Our Mission</h1>
           <p className="text-xl text-stone-600 max-w-2xl mx-auto">
             As a non-profit, we rely entirely on the generosity of animal lovers like you.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cash Donation */}
          <div className="bg-stone-50 border-2 border-brand-orange rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-xl">MOST POPULAR</div>
             <Gift className="text-brand-orange mb-6" size={40} />
             <h3 className="text-2xl font-bold text-brand-black mb-4">Make a Donation</h3>
             <p className="text-stone-500 mb-8">One-time or monthly donations cover vet bills, food, and bedding for our rescues.</p>
             <div className="grid grid-cols-3 gap-2 mb-4">
               {DONATION_AMOUNTS.slice(0, 3).map(amt => (
                 <button key={amt} className="border border-stone-300 rounded-lg py-2 hover:border-brand-orange hover:bg-brand-orange hover:text-white transition-all font-bold text-stone-600">
                   {amt}
                 </button>
               ))}
             </div>
             <button className="w-full bg-brand-orange text-white py-3 rounded-xl font-bold hover:bg-orange-600">Donate Funds</button>
          </div>

          {/* Volunteer */}
          <div className="bg-white border border-stone-200 rounded-3xl p-8 hover:shadow-xl transition-all">
             <Clock className="text-brand-dark mb-6" size={40} />
             <h3 className="text-2xl font-bold text-brand-black mb-4">Volunteer Time</h3>
             <p className="text-stone-500 mb-8">We need help with cage cleaning, socialization, and event staffing. Join our volunteer family!</p>
             <button className="w-full bg-brand-dark text-white py-3 rounded-xl font-bold hover:bg-teal-600">Apply to Volunteer</button>
          </div>

           {/* Amazon Wishlist */}
           <div className="bg-white border border-stone-200 rounded-3xl p-8 hover:shadow-xl transition-all">
             <Gift className="text-purple-500 mb-6" size={40} />
             <h3 className="text-2xl font-bold text-brand-black mb-4">Amazon Wishlist</h3>
             <p className="text-stone-500 mb-8">Send supplies directly to our door. We always need fleece, hay, and pellets.</p>
             <button className="w-full bg-stone-800 text-white py-3 rounded-xl font-bold hover:bg-black">View Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;