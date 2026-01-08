import { Animal, AnimalType, Product, Service, Lead } from './types';

// Contact Information
export const CONTACT_INFO = {
  phone: '(555) 123-4567',
  email: 'hello@weecompanions.org',
  address: 'San Diego, CA'
};

// Site Statistics
export const SITE_STATS = [
  { label: 'Animals Rescued', val: '5,000+' },
  { label: 'Volunteers', val: '120+' },
  { label: 'Years Active', val: '20+' },
  { label: 'Happy Families', val: '4,500+' },
];

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Animals', path: '/animals' },
  { name: 'Services', path: '/services' },
  { name: 'Shop', path: '/shop' },
  { name: 'Contact', path: '/contact' },
  { name: 'Donate', path: '/donate' }
];

// Admin Navigation Links
export const ADMIN_NAV_LINKS = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: 'BarChart3' },
  { name: 'Leads', path: '/admin/leads', icon: 'Users' },
  { name: 'Animals', path: '/admin/animals', icon: 'Heart' },
  { name: 'Orders', path: '/admin/orders', icon: 'ShoppingBag' },
  { name: 'Settings', path: '/admin/settings', icon: 'Settings' }
];

// Donation Amounts
export const DONATION_AMOUNTS = ['$10', '$25', '$50', '$100'];

export const MOCK_ANIMALS: Animal[] = [
  {
    id: '1',
    name: 'Oreo',
    type: AnimalType.GUINEA_PIG,
    age: '2 years',
    gender: 'Male',
    description: 'A sweet boar looking for a friend. He loves parsley!',
    imageUrl: 'https://picsum.photos/seed/gp1/600/600',
    status: 'Available'
  },
  {
    id: '2',
    name: 'Pip & Squeak',
    type: AnimalType.RAT,
    age: '6 months',
    gender: 'Female',
    description: 'Bonded pair of sisters. Very active and intelligent.',
    imageUrl: 'https://picsum.photos/seed/rat1/600/600',
    status: 'Available'
  },
  {
    id: '3',
    name: 'Thumper',
    type: AnimalType.RABBIT,
    age: '1 year',
    gender: 'Male',
    description: 'Neutered male bunny. Free roam experience.',
    imageUrl: 'https://picsum.photos/seed/bun1/600/600',
    status: 'Pending'
  },
  {
    id: '4',
    name: 'Hammy',
    type: AnimalType.HAMSTER,
    age: '1 year',
    gender: 'Female',
    description: 'Syrian hamster. Needs a large enclosure.',
    imageUrl: 'https://picsum.photos/seed/ham1/600/600',
    status: 'Available'
  },
  {
    id: '5',
    name: 'Cocoa & Marshmallow',
    type: AnimalType.GUINEA_PIG,
    age: '3 years',
    gender: 'Female',
    description: 'Bonded pair of sows. Very social and love floor time.',
    imageUrl: 'https://picsum.photos/seed/gp2/600/600',
    status: 'Available'
  },
  {
    id: '6',
    name: 'Whiskers',
    type: AnimalType.RAT,
    age: '1 year',
    gender: 'Male',
    description: 'Friendly male rat. Great with handling and very curious.',
    imageUrl: 'https://picsum.photos/seed/rat2/600/600',
    status: 'Available'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Cozy Fleece Hidey', price: 25.00, category: 'Accessories', imageUrl: 'https://picsum.photos/seed/hidey/400/400' },
  { id: 'p2', name: 'Timothy Hay (5lb)', price: 18.50, category: 'Food', imageUrl: 'https://picsum.photos/seed/hay/400/400' },
  { id: 'p3', name: 'Wooden Chew Toys', price: 12.00, category: 'Toys', imageUrl: 'https://picsum.photos/seed/toy/400/400' },
  { id: 'p4', name: 'Vitamin C Drops', price: 8.00, category: 'Health', imageUrl: 'https://picsum.photos/seed/vit/400/400' },
  { id: 'p5', name: 'Large Water Bottle', price: 15.00, category: 'Accessories', imageUrl: 'https://picsum.photos/seed/bottle/400/400' },
  { id: 'p6', name: 'Pellet Food (10lb)', price: 22.00, category: 'Food', imageUrl: 'https://picsum.photos/seed/pellets/400/400' },
  { id: 'p7', name: 'Exercise Wheel', price: 35.00, category: 'Toys', imageUrl: 'https://picsum.photos/seed/wheel/400/400' },
  { id: 'p8', name: 'Bedding (Paper)', price: 16.00, category: 'Accessories', imageUrl: 'https://picsum.photos/seed/bedding/400/400' },
];

export const MOCK_SERVICES: Service[] = [
  { id: 's1', title: 'Small Animal Boarding', description: 'Safe, specialized care while you are away.', priceStart: '$15/day', icon: 'Home' },
  { id: 's2', title: 'Grooming & Nail Trims', description: 'Expert nail trims for wiggle worms.', priceStart: '$10', icon: 'Scissors' },
  { id: 's3', title: 'Health Checks', description: 'Wellness exams for preventative care.', priceStart: '$20', icon: 'Stethoscope' },
];

export const INITIAL_LEADS: Lead[] = [
  { id: 'l1', name: 'John Doe', email: 'john@example.com', phone: '555-0123', interest: 'Adoption - Oreo', status: 'New', date: '2023-10-25', message: 'I have a cage ready.' },
  { id: 'l2', name: 'Sarah Smith', email: 'sarah@example.com', phone: '555-9876', interest: 'Volunteering', status: 'Contacted', date: '2023-10-24', message: 'Available weekends.' },
  { id: 'l3', name: 'Mike Johnson', email: 'mike@example.com', phone: '555-5555', interest: 'Boarding Services', status: 'New', date: '2023-10-26', message: 'Need boarding for 2 guinea pigs next week.' },
  { id: 'l4', name: 'Emily Davis', email: 'emily@example.com', phone: '555-7777', interest: 'Adoption - Pip & Squeak', status: 'New', date: '2023-10-27', message: 'First time rat owner, have done research.' },
];