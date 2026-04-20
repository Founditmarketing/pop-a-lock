import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-pop-dark text-white relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 relative z-10">
          <ScrollReveal animation="slide-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Dependable <span className="text-pop-orange">Security Solutions</span><br />
              for Your Peace of Mind
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Professional locksmith services tailored to your specific needs.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SERVICES.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              animation="slide-in-up" 
              delay={`${index * 0.1}s`}
              className="h-full"
            >
              <Link 
                to={`/services/${service.id}`}
                className="block group relative h-[350px] rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-gray-800 hover:border-pop-orange transition-colors duration-300"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Darker overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 bg-pop-orange rounded-lg flex items-center justify-center mb-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <div className="h-1 w-12 bg-pop-orange mb-3 transition-all duration-300 group-hover:w-full"></div>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-100 group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-pop-orange font-bold text-sm uppercase tracking-wider mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    Book Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};