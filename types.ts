import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: LucideIcon;
  image: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
}

export interface ChatPrompt {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Review {
  id: string;
  name: string;
  handle: string;
  content: string;
  avatar: string;
}