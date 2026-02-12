
export interface SiteConfig {
  companyName: string;
  primaryColor: string;
  secondaryColor: string;
  ceoName: string;
  address: string;
  phone: string;
  email: string;
  vision: string;
  naverStoreUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  date: string;
}

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  content: string;
  category: '공지사항' | '보도자료' | '채용';
}
