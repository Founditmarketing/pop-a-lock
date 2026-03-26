import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { QuoteForm } from './QuoteForm';
import { ServiceMap } from './ServiceMap';
import { COMPANY_PHONE } from '../constants';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-pop-dark text-white min-h-screen flex flex-col pt-16">
       {/* Unique Hero for Contact Page */}
       <section className="relative pt-24 pb-16 md:pt-32 overflow-hidden bg-pop-dark flex items-center">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal animation="slide-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-md mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium">
              Immediate lockout assistance or customized security solutions. Reach out anytime, 24/7.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             
             {/* Left - Contact Dashboard Form */}
             <ScrollReveal animation="slide-in-right" delay="0.1s" className="order-2 lg:order-1">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl border border-gray-100">
                   <h2 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h2>
                   <p className="text-gray-500 mb-8">Fill out the form below and our dispatcher will reply quickly.</p>
                   
                   <QuoteForm variant="default" />
                </div>
             </ScrollReveal>

             {/* Right - Contact Information Display */}
             <div className="space-y-12 order-1 lg:order-2 lg:pl-8">
                <ScrollReveal animation="slide-in-left" delay="0.2s">
                   <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-pop-orange/20 rounded-2xl flex items-center justify-center shrink-0">
                         <Phone className="w-8 h-8 text-pop-orange" />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider text-sm">Call Us 24/7</h3>
                         <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="text-3xl md:text-4xl font-extrabold tracking-tight text-pop-orange hover:text-white transition-colors">
                            {COMPANY_PHONE}
                         </a>
                         <p className="text-gray-400 mt-3 font-medium">Emergency dispatch available immediately throughout Alexandria.</p>
                      </div>
                   </div>
                </ScrollReveal>
                
                <hr className="border-gray-800" />

                <ScrollReveal animation="slide-in-left" delay="0.3s">
                   <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shrink-0">
                         <MapPin className="w-8 h-8 text-gray-300" />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider text-sm">Service Area</h3>
                         <p className="text-gray-300 leading-relaxed text-lg font-medium">
                            Alexandria, LA & Surrounding Parishes. Our mobile units are permanently deployed throughout the city for rapid 15-minute response times.
                         </p>
                      </div>
                   </div>
                </ScrollReveal>

                <hr className="border-gray-800" />

                <ScrollReveal animation="slide-in-left" delay="0.4s">
                   <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shrink-0">
                         <Clock className="w-8 h-8 text-gray-300" />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider text-sm">Operating Hours</h3>
                         <ul className="text-gray-300 space-y-3 text-lg font-medium">
                            <li className="flex justify-between w-64 border-b border-gray-800 pb-2"><span>Mon - Fri</span> <span>8:00 AM - 6:00 PM</span></li>
                            <li className="flex justify-between w-64 border-b border-gray-800 pb-2"><span>Saturday</span> <span>9:00 AM - 3:00 PM</span></li>
                            <li className="flex justify-between w-64 text-pop-orange font-bold pt-1"><span>Emergency</span> <span>24/7</span></li>
                         </ul>
                      </div>
                   </div>
                </ScrollReveal>
             </div>

          </div>
        </div>
      </section>

      {/* Global Map Integration */}
      <section className="mt-8 border-t border-gray-800 relative z-0">
         <ServiceMap />
      </section>

    </div>
  );
};
