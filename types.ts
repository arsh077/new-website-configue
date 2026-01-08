export enum AnimalType {
  GUINEA_PIG = 'Guinea Pig',
  RAT = 'Rat',
  HAMSTER = 'Hamster',
  CHINCHILLA = 'Chinchilla',
  RABBIT = 'Rabbit'
}

export interface Animal {
  id: string;
  name: string;
  type: AnimalType;
  age: string;
  gender: 'Male' | 'Female';
  description: string;
  imageUrl: string;
  status: 'Available' | 'Pending' | 'Adopted';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceStart: string;
  icon: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string; // e.g., "Adoption - Oreo", "Volunteering"
  status: 'New' | 'Contacted' | 'Closed';
  date: string;
  message?: string;
}

export interface StoreContextType {
  animals: Animal[];
  products: Product[];
  leads: Lead[];
  addLead: (lead: Omit<Lead, 'id' | 'date' | 'status'>) => void;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  cart: Product[];
  addToCart: (product: Product) => void;
}