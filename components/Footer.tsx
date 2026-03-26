import React from 'react';
import { SOCIAL_LINKS, COMPANY_PHONE, LOGO_URL } from '../constants';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pop-black text-white pt-16 pb-8" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <img 
               src={LOGO_URL} 
               alt="Pop-A-Lock"
               className="h-12 object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Alexandria's most trusted locksmith. Committed to safety, speed, and customer satisfaction since 1991.
            </p>
            <div className="flex gap-4 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pop-orange transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-pop-orange transition-colors">Home</Link></li>
              <li><a href="/#services" className="hover:text-pop-orange transition-colors">Services</a></li>
              <li><Link to="/about" className="hover:text-pop-orange transition-colors">About Us</Link></li>
              <li><Link to="/services/palsaveskids" className="hover:text-pop-orange transition-colors">PALSavesKids™</Link></li>
              <li><Link to="/privacy" className="hover:text-pop-orange transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pop-orange shrink-0 mt-1" />
                <span>Serving Alexandria, LA<br/>and surrounding areas</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pop-orange shrink-0" />
                <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="hover:text-white">{COMPANY_PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pop-orange shrink-0" />
                <a href="mailto:service@popalock.com" className="hover:text-white">service@popalock.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Emergency Svc</span>
                <span className="text-white font-semibold">24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pop-A-Lock of Alexandria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};