import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StoreContextType, Animal, Product, Lead } from '../types';
import { MOCK_ANIMALS, MOCK_PRODUCTS, INITIAL_LEADS } from '../constants';

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [animals] = useState<Animal[]>(MOCK_ANIMALS);
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [cart, setCart] = useState<Product[]>([]);

  const addLead = (newLeadData: Omit<Lead, 'id' | 'date' | 'status'>) => {
    const newLead: Lead = {
      ...newLeadData,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    // Prepend to list for "Instant CRM" feel
    setLeads(prev => [newLead, ...prev]);
  };

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <StoreContext.Provider value={{ animals, products, leads, addLead, updateLeadStatus, cart, addToCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};