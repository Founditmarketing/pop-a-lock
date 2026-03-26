import { Car, Home, Building2, Key, Clock, ShieldCheck, MapPin, Phone, Facebook, Instagram, Twitter, Wrench, Heart, Truck, Radio } from 'lucide-react';
import { ServiceItem, ChatPrompt, SocialLink, Review } from './types';

export const COMPANY_PHONE = "(318) 443-4444";
export const COMPANY_NAME = "Pop-A-Lock of Alexandria";
export const LOGO_URL = "/logo.png";

export const SERVICES: ServiceItem[] = [
  {
    id: 'auto-lockout',
    title: 'Auto Lockouts',
    description: 'Locked out of your car? We open vehicles fast without damaging the door or lock mechanism.',
    longDescription: 'Being locked out of your vehicle can be stressful and dangerous. Our certified automotive locksmiths are equipped with the latest tools to open your car door quickly and safely, without causing any damage to the vehicle\'s frame, windows, or lock mechanism. We service all makes and models, including luxury vehicles and semi-trucks.',
    features: ['Fast 15-30 Minute Arrival', 'Damage-Free Opening Guarantee', '24/7 Emergency Service', 'All Makes & Models Supported'],
    icon: Car,
    image: '/service-auto-lockout.png'
  },
  {
    id: 'home-lockout',
    title: 'Home / Lockout',
    description: 'Emergency residential lockout service. We get you back into your home safely and quickly.',
    longDescription: 'Locked out of your house or apartment? Do not break a window! Our residential locksmiths can pick or bypass your lock to get you back inside your home safely. We treat your property with respect and can also provide key duplication or lock rekeying on the spot if you have lost your keys.',
    features: ['Non-Destructive Entry', 'Key Duplication On-Site', 'Licensed & Insured Technicians', 'Residential Security Assessment'],
    icon: Home,
    image: '/service-repair-install.png'
  },
  {
    id: 'commercial-auto',
    title: 'Commercial Auto',
    description: 'Fleet vehicle unlocking and key services for businesses and dealerships.',
    longDescription: 'We provide comprehensive locksmith services for commercial fleets, car dealerships, and rental agencies. Whether you need emergency unlocking for a delivery truck or bulk key programming for your fleet, Pop-A-Lock offers reliable business accounts and priority service.',
    features: ['Priority Business Accounts', 'Bulk Key Duplication', 'Fleet Vehicle Unlocking', 'High-Security Key Programming'],
    icon: Truck,
    image: '/service-commercial-auto.png'
  },
  {
    id: 'commercial-lockout',
    title: 'Commercial / Lockout',
    description: 'Business lockouts, office unlock services, and file cabinet access for commercial properties.',
    longDescription: 'Time is money. If you are locked out of your office or business, we will get you back in fast. We also handle file cabinet lockouts, safe opening, and can upgrade your business security with high-security locks and master key systems.',
    features: ['Office Door Unlocking', 'File Cabinet & Desk Locks', 'Master Key Systems', 'Commercial Grade Hardware'],
    icon: Building2,
    image: '/service-commercial-lockout.png'
  },
  {
    id: 'smart-key',
    title: 'Smart Key Makes',
    description: 'Programming for push-to-start fobs, transponder keys, and keyless entry remotes.',
    longDescription: 'Lost your car key fob? The dealer is expensive and requires towing. We come to you and cut and program smart keys, transponder keys, and proximity fobs on the spot for a fraction of the dealer cost.',
    features: ['On-Site Programming', 'Cheaper Than Dealership', 'Transponder Keys', 'Push-to-Start Fobs'],
    icon: Radio,
    image: '/service-smart-key.png'
  },
  {
    id: 'repair-install',
    title: 'Lock Repair / Install',
    description: 'Fixing broken locks or installing brand new high-security hardware for home or business.',
    longDescription: 'We repair sticky, broken, or damaged locks to restore their function. If a lock is beyond repair or you want an upgrade, we install high-quality deadbolts, knob locks, and electronic keypad locks to enhance your security.',
    features: ['Deadbolt Installation', 'Smart Lock Installation', 'Broken Key Extraction', 'Hardware Repair'],
    icon: Wrench,
    image: '/service-trunk-latch.png'
  },
  {
    id: 'home-rekey',
    title: 'Home Lock Rekeying',
    description: 'Change your keys without changing your locks. Cost-effective security for new homeowners.',
    longDescription: 'Moving into a new home? You never know who has a copy of the old keys. Rekeying changes the internal pins of your existing locks so old keys no longer work. It is a secure and cost-effective alternative to replacing all your hardware.',
    features: ['Cost-Effective Security', 'One Key for All Locks', 'New Homeowner Essential', 'Master Keying Available'],
    icon: Key,
    image: '/service-rekey.png'
  },
  {
    id: 'palsaveskids',
    title: 'PAL Saves Kids',
    description: 'FREE emergency car door unlocking if a child or pet is locked inside a vehicle.',
    longDescription: 'This FREE community service was launched by Pop-A-Lock to save lives. If a child or pet is locked inside a vehicle, call 911 and then call us. We will rush to the scene and unlock the car door free of charge as our top priority.',
    features: ['100% Free Service', 'Top Priority Dispatch', 'Child Safety Focused', 'Community Dedication'],
    icon: Heart,
    image: '/service-pal-saves-kids.png'
  },
];

export const CHAT_PROMPTS: ChatPrompt[] = [
  {
    id: '1',
    question: "How fast can you arrive?",
    answer: "We pride ourselves on speed! Typically, our technicians arrive within 15-30 minutes depending on traffic and your specific location in Alexandria.",
  },
  {
    id: '2',
    question: "Do you unlock cars?",
    answer: "Yes! We are the leading experts in car door unlocking. Our PALSavesKids™ program even unlocks car doors for free if a child is locked inside.",
  },
  {
    id: '3',
    question: "How much does it cost?",
    answer: "Pricing depends on the specific service and time of day. We offer competitive, upfront pricing. Please fill out the quote form or call us for a free estimate!",
  },
  {
    id: '4',
    question: "Are you licensed?",
    answer: "Absolutely. Pop-A-Lock is a fully licensed, bonded, and insured locksmith service. You can trust our uniformed technicians.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', url: '#', icon: Facebook },
  { name: 'Instagram', url: '#', icon: Instagram },
  { name: 'Twitter', url: '#', icon: Twitter },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    handle: '@sarahj_alexandria',
    content: 'Locked my keys in the car at the grocery store. Pop-A-Lock was there in 20 minutes! Super professional and kind.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    handle: '@mchen_biz',
    content: 'We use Pop-A-Lock for all our commercial property rekeying. They are consistent, fair with pricing, and always do a great job.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '3',
    name: 'Emily Davis',
    handle: '@emilyd_mom',
    content: 'The technician was so polite and even made me a spare key on the spot. I feel so much safer now. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '4',
    name: 'David Wilson',
    handle: '@dwilson88',
    content: 'Fastest service in town. I called three other places that didn\'t answer. Pop-A-Lock picked up immediately.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
  }
];