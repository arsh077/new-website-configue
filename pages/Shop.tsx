import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingCart, Plus } from 'lucide-react';

const Shop: React.FC = () => {
  const { products, addToCart } = useStore();

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-brand-cream/30 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4">Wee Shop</h1>
          <p className="text-stone-600 max-w-xl text-lg">
            100% of proceeds support the animals. Get high-quality supplies vetted by our experts.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow border border-stone-100 flex flex-col">
              <div className="bg-stone-100 rounded-xl h-48 mb-4 overflow-hidden relative group">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-3 right-3 bg-brand-black text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all hover:bg-brand-orange"
                >
                  <Plus size={20} />
                </button>
              </div>
              <div className="flex-1">
                 <p className="text-xs text-stone-400 font-bold uppercase mb-1">{product.category}</p>
                 <h3 className="font-bold text-lg text-brand-black mb-2">{product.name}</h3>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-stone-100">
                <span className="text-xl font-bold text-brand-orange">${product.price.toFixed(2)}</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="text-sm font-medium text-stone-500 hover:text-brand-black flex items-center gap-1"
                >
                  <ShoppingCart size={14} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;