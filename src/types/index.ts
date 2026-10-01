export type ProductCategory = 
  | 'field-crops'
  | 'vegetable-seeds'
  | 'fodder-crops'
  | 'jute-crops'
  | 'crop-protection';

export interface Product {
  id: string;
  name: string;
  vernacularName?: string;
  scientificName?: string;
  category: ProductCategory;
  categoryName: string;
  subcategory?: string;
  tagline: string;
  image: string;
  description: string;
  keyTraits: string[];
  maturityDays?: string;
  sowingSeason?: string;
  yieldPotential?: string;
  packagingSizes?: string[];
  agronomyTips?: string;
  featured?: boolean;
}

export interface Leader {
  id: string;
  name: string;
  designation: string;
  role: 'board' | 'executive';
  image: string;
  quote?: string;
  bio: string;
  credentials?: string;
  experience?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface Dealer {
  id: string;
  name: string;
  contactPerson: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  pincode: string;
  coordinates: { x: number; y: number }; // percentage on map
  isAuthorized: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'labs' | 'trials' | 'meets' | 'awards';
  categoryLabel: string;
  image: string;
  date: string;
  location: string;
  description: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Fellowship';
  experience: string;
  openings: number;
  description: string;
  qualifications: string[];
  isInternship: boolean;
}

export interface MediaArticle {
  id: string;
  title: string;
  date: string;
  category: 'Press Release' | 'Corporate' | 'Award' | 'Event';
  summary: string;
  content: string;
  image: string;
  readTime: string;
}

export interface AgriEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'Upcoming' | 'Past';
  description: string;
  attendees?: string;
  highlight?: string;
}
