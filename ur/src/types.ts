export type UniformCategory = 'blazer' | 'jumper' | 'polo' | 'trouser' | 'skirt' | 'pe_kit' | 'accessory' | 'all';

export type ConditionGrade = 'New with Tags' | 'Like New' | 'Very Good' | 'Good';

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
  photoName?: string;
  schoolId: string;
  schoolName: string;
  category: UniformCategory;
  size: string;
  gender: 'Boys' | 'Girls' | 'Unisex';
  condition: ConditionGrade;
  price: number;
  originalRetailPrice: number;
  description: string;
  imageUrl: string;
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
  paymentMethod: 'card' | 'pay_on_pickup' | 'wechat' | 'alipay';
  status: 'Order Placed' | 'Sanitizing' | 'Ready for Pickup' | 'Shipped' | 'Completed';
  createdAt: string;
  estimatedDeliveryOrPickupDate: string;
}

export interface DonationItemInput {
  category: UniformCategory;
  gender: 'Boys' | 'Girls' | 'Unisex';
  size: string;
  condition: ConditionGrade;
  schoolId: string;
  hasSchoolBadge: boolean;
  quantity?: number;
  notes?: string;
  photoUrl?: string;
}

export interface DonationSubmission {
  id: string;
  donorName: string;
  email: string;
  phone: string;
  schoolName: string;
  items: DonationItemInput[];
  estimatedVoucherValue?: number;
  estimatedCredits?: number;
  pickupMethod: 'school_dropoff' | 'home_pickup' | 'mail_in';
  dropoffLocation?: string;
  homeAddress?: string;
  address?: string;
  preferredDate?: string;
  status?: string;
  createdAt: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  schoolId: string;
  inquiryType: 'general' | 'donation' | 'partnership' | 'feedback';
  message: string;
}
