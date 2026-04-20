import React from 'react';
import { SERVICES } from '../constants';
import { Phone, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './Button';
import { QuoteForm } from './QuoteForm';

export const SmartKeyPage: React.FC = () => {
  const service = SERVICES.find(s => s.id === 'smart-key');
  if (!service) return null;

  return (
    <div className="bg-white">
      {/* 1. Page Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-pop-dark flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center scale-105 filter brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-pop-black via-pop-black/90 to-pop-black/70 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <ScrollReveal animation="slide-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md mb-4">{service.title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-medium">{service.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Body Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8 lg:sticky lg:top-32 h-fit">
              <ScrollReveal animation="slide-in-left">
                <div className="inline-block bg-pop-orange/10 px-4 py-1.5 rounded-full text-pop-orange font-bold text-sm tracking-wider uppercase border border-pop-orange/20 mb-2">
                   Professional Service
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">Fast, Reliable, & Secure</h2>
              </ScrollReveal>

              <ScrollReveal animation="slide-in-left" delay="0.1s">
                <p className="text-lg text-gray-600 leading-relaxed">{service.longDescription}</p>
              </ScrollReveal>

              <ScrollReveal animation="slide-in-up" delay="0.2s">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-pop-orange w-5 h-5 shrink-0" />
                      <span className="font-bold text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Interactive Sidebar */}
            <ScrollReveal animation="slide-in-right" delay="0.3s" className="lg:pl-8">
              <div className="bg-pop-dark rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Request a Fast Quote</h3>
                <p className="text-gray-400 mb-8 relative z-10">Need immediate assistance or planning a security upgrade? Fill out the form below.</p>
                <div className="relative z-10">
                  <QuoteForm variant="cta" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Call to Action Strip */}
      <section className="bg-pop-orange py-16 relative overflow-hidden text-center border-t border-orange-500">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
           <ScrollReveal animation="slide-in-up">
             <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-sm">We're Ready To Help Right Now</h2>
             <a href="tel:3184876736" className="inline-block">
               <Button variant="dark" className="text-xl px-10 py-5 shadow-xl hover:scale-105 transition-transform">
                 <Phone className="mr-3"/> Call (318) 487-6736
               </Button>
             </a>
           </ScrollReveal>
         </div>
      </section>
    </div>
  );
};
