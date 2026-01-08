import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PawPrint, Heart, Star } from 'lucide-react';
import { SITE_STATS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-[#FFFBF0] overflow-hidden pt-12 md:pt-20 pb-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-light text-brand-dark px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider">
                <Star size={14} fill="currentColor" /> San Diego's Small Animal Rescue
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-brand-black leading-[1.1]">
                Small Pets,<br/>
                <span className="text-brand-orange">Big Hearts.</span>
              </h1>
              <p className="text-lg text-stone-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Wee Companions rescues, rehabilitates, and rehomes guinea pigs, rats, hamsters and more. Find your perfect little best friend today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/animals" className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
                  Adopt a Pet <PawPrint size={20} />
                </Link>
                <Link to="/donate" className="bg-white text-brand-black border-2 border-stone-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center justify-center">
                  Donate Now
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
               {/* Abstract Background Blobs */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cream/30 rounded-full blur-3xl -z-10"></div>
               <img 
                src="https://picsum.photos/seed/guineapighero/800/800" 
                alt="Happy Guinea Pig" 
                className="w-full h-auto rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="bg-white py-12 border-b border-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SITE_STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-1">{stat.val}</h3>
                <p className="text-sm font-medium text-stone-400 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / How we help */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">More Than Just Rescues</h2>
            <p className="text-stone-500">We provide a full circle of care for small animals, ensuring they live happy, healthy lives even when their owners are away.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-all group">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <PawPrint className="text-brand-orange" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Adoption Center</h3>
              <p className="text-stone-500 mb-6">Meet our adoptable animals. We ensure every pet is healthy and socialized before finding them a forever home.</p>
              <Link to="/animals" className="text-brand-orange font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Meet Animals <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-all group">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Heart className="text-brand-dark" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Boarding Services</h3>
              <p className="text-stone-500 mb-6">Going on vacation? We offer specialized boarding for small mammals with experienced caretakers.</p>
              <Link to="/services" className="text-brand-dark font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Book Boarding <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-all group">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Star className="text-brand-cream" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">The Wee Shop</h3>
              <p className="text-stone-500 mb-6">Buy high-quality hay, hideys, and toys. 100% of proceeds go directly to supporting the rescue.</p>
              <Link to="/shop" className="text-brand-orange font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Shop Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black text-white py-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full blur-[100px] opacity-20"></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to make a difference?</h2>
            <p className="text-stone-400 max-w-xl mx-auto mb-10 text-lg">Whether you adopt, donate, or volunteer, you are saving lives. Join our mission today.</p>
            <Link to="/contact" className="bg-white text-brand-black px-10 py-4 rounded-xl font-bold hover:bg-brand-orange hover:text-white transition-colors">
              Get in Touch
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;