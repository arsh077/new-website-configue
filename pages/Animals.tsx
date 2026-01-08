import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight } from 'lucide-react';
import { AnimalType } from '../types';

const Animals: React.FC = () => {
  const { animals } = useStore();
  const [filter, setFilter] = useState<string>('All');

  const filteredAnimals = filter === 'All' 
    ? animals 
    : animals.filter(a => a.type === filter);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-brand-light py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-brand-black mb-4">Our Animals</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            These little cuties are looking for their forever homes. Adopt, don't shop!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-wrap gap-2 justify-center items-center border border-stone-100 max-w-4xl mx-auto mb-12">
           <div className="flex items-center gap-2 px-4 text-stone-400 font-bold uppercase text-xs tracking-wider">
             <Filter size={14} /> Filter By:
           </div>
           {['All', ...Object.values(AnimalType)].map(type => (
             <button
               key={type}
               onClick={() => setFilter(type)}
               className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                 filter === type 
                  ? 'bg-brand-black text-white shadow-md' 
                  : 'text-stone-500 hover:bg-stone-100'
               }`}
             >
               {type}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map(animal => (
            <div key={animal.id} className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={animal.imageUrl} 
                  alt={animal.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-black shadow-sm">
                  {animal.status}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-black">{animal.name}</h3>
                    <p className="text-brand-orange font-medium text-sm">{animal.type} • {animal.gender}</p>
                  </div>
                  <span className="bg-brand-light text-brand-dark px-3 py-1 rounded-lg text-xs font-bold">
                    {animal.age}
                  </span>
                </div>
                <p className="text-stone-500 mb-6 line-clamp-2">
                  {animal.description}
                </p>
                <Link 
                  to="/contact" 
                  className="w-full bg-white border-2 border-stone-200 text-brand-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  Ask about {animal.name} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animals;