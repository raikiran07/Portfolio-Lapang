export interface Fighter {
  name: string;
  nickname: string;
  tagline: string;
  disciplines: string[];
  bio: string;
  stats: FighterStats;
  achievements: Achievement[];
  socialMedia: SocialMedia;
  contact: ContactInfo;
}

export interface FighterStats {
  height: string;
  weight: string;
  reach: string;
  stance: string;
  experience: number;
  homeGym: string;
  record: {
    wins: number;
    losses: number;
    draws: number;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'championship' | 'tournament' | 'award' | 'record';
  image?: string;
}

export interface SocialMedia {
  instagram: string;
  youtube: string;
  twitter: string;
  facebook: string;
  followers: {
    instagram: number;
    youtube: number;
    twitter: number;
    facebook: number;
  };
}

export interface ContactInfo {
  email: string;
  phone: string;
  gym: string;
  location: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'training' | 'fight' | 'championship' | 'team' | 'personal';
  title?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
} 