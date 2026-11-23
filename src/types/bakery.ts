export type ProductCategory = 'classic' | 'bento' | 'mousse' | 'dessert';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  priceFrom: number | null;
  priceType: 'starting' | 'fixed' | 'custom';
  servings: string;
  image: string;
  seasonal?: boolean;
}

export interface ReviewItem {
  id: string;
  customerName: string;
  location: string;
  orderedItem: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | 'Cakes'
    | 'Bento Cakes'
    | 'Bento & Heart Cakes'
    | 'Decorated Cakes'
    | 'Desserts'
    | 'Seasonal & Custom'
    | 'Celebrations';
  image: string;
}

export interface CustomInquiryInput {
  cakeType: 'Custom Celebration Cake' | 'Custom Bento Cake' | 'General Order';
  customerName: string;
  desiredDate: string;
  portions: string;
  flavour: string;
  themeOrInscription: string;
  notes: string;
}

export interface StudioSettings {
  whatsappNumber: string;
  whatsappDisplay: string;
  instagramHandle: string;
  instagramUrl: string;
  location: string;
}
