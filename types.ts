
export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Dyes' | 'Auxiliaries';
  subCategory: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}
