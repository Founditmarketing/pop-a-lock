import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import { COMPANY_PHONE, LOGO_URL, SERVICES } from '../constants';
import { Button } from './Button';

import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40 flex flex-col">
      {/* Top Bar - Address & Hours */}
      <div className={`bg-pop-orange text-white text-xs md:text-sm transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0 opacity-0 border-none' : 'py-2 h-auto opacity-100 border-b border-orange-600'}`}>
        <div className="w-full px-4 md:px-8 xl:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 font-medium">
                <MapPin size={14} className="text-white" />
                <span>Alexandria, LA & Surrounding Areas</span>
             </div>
          </div>
          <div className="hidden md:flex items-center gap-6 font-medium">
             <div className="flex items-center gap-2">
                <Clock size={14} className="text-white" />
                <span>Everyday: 7am-9pm</span>
             </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="w-full px-4 md:px-8 xl:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Pop-A-Lock Logo" 
              className="h-12 md:h-14 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`font-semibold hover:text-pop-orange transition-colors ${isScrolled ? 'text-gray-800' : 'text-white shadow-black drop-shadow-md'}`}> Home </Link>
            
            {/* Services Dropdown */}
            <div 
               className="relative group h-full flex items-center" 
               onMouseEnter={() => setServicesOpen(true)}
               onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 font-semibold hover:text-pop-orange transition-colors outline-none focus:outline-none py-4 ${isScrolled ? 'text-gray-800' : 'text-white shadow-black drop-shadow-md'}`}>
                Services <ChevronDown size={16} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}/>
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 origin-top-left ${
                  servicesOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                 {SERVICES.map((service, idx) => (
                    <Link 
                       key={idx} 
                       to={`/services/${service.id}`}
                       className="block px-5 py-2.5 text-gray-700 hover:text-pop-orange hover:bg-orange-50 font-medium transition-colors"
                       onClick={() => setServicesOpen(false)}
                    >
                       {service.title}
                    </Link>
                 ))}
              </div>
            </div>

            <Link to="/about" className={`font-semibold hover:text-pop-orange transition-colors ${isScrolled ? 'text-gray-800' : 'text-white shadow-black drop-shadow-md'}`}> About </Link>
            <Link to="/reviews" className={`font-semibold hover:text-pop-orange transition-colors ${isScrolled ? 'text-gray-800' : 'text-white shadow-black drop-shadow-md'}`}> Reviews </Link>
            <Link to="/contact" className={`font-semibold hover:text-pop-orange transition-colors ${isScrolled ? 'text-gray-800' : 'text-white shadow-black drop-shadow-md'}`}> Contact </Link>
            <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`}>
              <Button variant={isScrolled ? "primary" : "primary"} className="py-2 px-4 text-sm">
                <Phone size={16} />
                {COMPANY_PHONE}
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-pop-orange p-2 bg-white rounded-md shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col p-4 space-y-4">
              <div className="text-sm text-gray-500 pb-2 border-b border-gray-100 mb-2">
                <p className="flex items-center gap-2 mb-1"><MapPin size={12}/> Alexandria, LA</p>
                <p className="flex items-center gap-2"><Clock size={12}/> Everyday 7am-9pm</p>
              </div>
              
              <Link to="/" className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              <div className="py-2 border-b border-gray-100">
                <button 
                  className="flex items-center justify-between w-full text-left text-gray-800 font-semibold text-lg mb-1 outline-none focus:outline-none"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Our Services
                  <ChevronDown size={20} className={`transition-transform duration-200 text-gray-500 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px] opacity-100 py-2 space-y-3' : 'max-h-0 opacity-0 space-y-0'}`}>
                  {SERVICES.map((service, idx) => (
                     <Link key={idx} to={`/services/${service.id}`} className="text-gray-600 font-medium text-base" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>{service.title}</Link>
                  ))}
                </div>
              </div>

              <Link to="/about" className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/reviews" className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
              <Link to="/contact" className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="w-full">
                 <Button fullWidth className="mt-2">
                   Call Now
                 </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};