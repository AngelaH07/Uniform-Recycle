export type ConditionGrade = 'Like New' | 'Very Good' | 'Good';

export type UniformCategory = 
  | 'blazer' 
  | 'jumper' 
  | 'polo' 
  | 'trouser' 
  | 'skirt' 
  | 'pe_kit' 
  | 'accessory';

export interface School {
  id: string;
  name: string;
  code: string;
  badgeSymbol: string;
  badgeBgColor: string;
  primaryColor: string;
  collectionPoint: string;
  address: string;
  dropOffHours: string;
  contactEmail: string;
  activeItemsCount: number;
}

export interface UniformItem {
  id: string;
  title: string;
  schoolId: string;
  schoolName: string;
  category: UniformCategory;
  size: string;
  gender: 'Unisex' | 'Boys' | 'Girls';
  condition: ConditionGrade;
  price: number;
  originalRetailPrice: number;
  description: string;
  imageUrl: string;
  photoName?: string;
  stockCount: number;
  badgePresent: boolean;
  sanitizedDate: string;
  features: string[];
  measurements?: {
    chestOrWaist?: string;
    length?: string;
  };
}

export interface CartItem {
  item: UniformItem;
  quantity: number;
}

export interface DonationItemInput {
  category: UniformCategory;
  size: string;
  condition: ConditionGrade;
  quantity: number;
  notes?: string;
  hasSchoolBadge: boolean;
}

export interface DonationSubmission {
  id: string;
  donorName: string;
  email: string;
  phone: string;
  schoolName: string;
  items: DonationItemInput[];
  pickupMethod: 'school_dropoff' | 'home_pickup' | 'mail_in';
  dropoffLocation?: string;
  address?: string;
  preferredDate: string;
  status: 'Pending' | 'Approved' | 'Collected' | 'Processed';
  createdAt: string;
  estimatedCredits: number;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  deliveryMethod: 'school_pickup' | 'home_delivery';
  pickupSchoolId?: string;
  deliveryAddress?: {
    street: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: 'card' | 'credits' | 'pay_on_pickup';
  status: 'Received' | 'Ready for Pickup' | 'Shipped' | 'Completed';
  createdAt: string;
  estimatedDeliveryOrPickupDate: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  subject: string;
  schoolName?: string;
  message: string;
}

export interface FilterState {
  searchQuery: string;
  schoolId: string;
  category: string;
  size: string;
  condition: string;
  maxPrice: number;
  gender: string;
  badgeOnly: boolean;
  sortBy: 'price-asc' | 'price-desc' | 'condition-best' | 'newest';
}
