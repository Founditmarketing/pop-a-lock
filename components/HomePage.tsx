import React, { useState, useEffect } from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Reviews } from './Reviews';
import { ServiceMap } from './ServiceMap';
import { Button } from './Button';
import { QuoteForm } from './QuoteForm';
import { ShieldCheck, Award, Heart, Key, Lock, Truck, Phone, CheckCircle, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HomePage: React.FC = () => {
  const [activeTrustIndex, setActiveTrustIndex] = useState(0);

  const trustItems = [
    { icon: ShieldCheck, title: "Licensed & Bonded", desc: "Fully Insured" },
    { icon: Award, title: "Expert Technicians", desc: "Certified Pros" },
    { icon: Heart, title: "PALSavesKids™", desc: "Free Child Rescue" },
    { icon: Key, title: "Key Programming", desc: "Advanced Tech" },
    { icon: Lock, title: "High Security", desc: "Commercial Grade" },
    { icon: Truck, title: "Mobile Service", desc: "We Come To You" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTrustIndex((current) => (current + 1) % trustItems.length);
    }, 2500); 
    return () => clearInterval(timer);
  }, [trustItems.length]);

  return (
    <>
      <Hero />
      
      {/* Trust Indicators Carousel */}
      <section className="bg-pop-black py-8 border-b border-gray-800 overflow-hidden relative">
        {/* === Desktop Marquee === */}
        <div className="hidden md:flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {/* Gradient Masks for smooth fade edges (Desktop) */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-pop-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-pop-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Original Set */}
          <div className="flex shrink-0 gap-16 px-8">
            {trustItems.map((item, idx) => (
              <div key={`trust-${idx}`} className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-pop-orange transition-colors duration-300 shrink-0 transform group-hover:rotate-6 transition-transform">
                  <item.icon className="w-6 h-6 text-pop-orange group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-none mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate Set for Seamless Loop */}
          <div className="flex shrink-0 gap-16 px-8">
            {trustItems.map((item, idx) => (
              <div key={`trust-dup-${idx}`} className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-pop-orange transition-colors duration-300 shrink-0 transform group-hover:rotate-6 transition-transform">
                  <item.icon className="w-6 h-6 text-pop-orange group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-none mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
           {/* Triplicate Set for wider screens */}
           <div className="flex shrink-0 gap-16 px-8">
            {trustItems.map((item, idx) => (
              <div key={`trust-trip-${idx}`} className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-pop-orange transition-colors duration-300 shrink-0 transform group-hover:rotate-6 transition-transform">
                  <item.icon className="w-6 h-6 text-pop-orange group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-none mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Mobile Flip Carousel === */}
        <div className="md:hidden relative w-full overflow-hidden px-4">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeTrustIndex * 100}%)` }}
          >
            {trustItems.map((item, idx) => (
              <div key={`trust-mobile-${idx}`} className="w-full shrink-0 flex items-center justify-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-pop-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-none mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {trustItems.map((_, idx) => (
              <div 
                key={`dot-${idx}`}
                onClick={() => setActiveTrustIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${idx === activeTrustIndex ? 'bg-pop-orange' : 'bg-gray-700'}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Services />
      
      <Reviews />

      {/* Call To Action Strip with Form */}
      <section className="py-24 bg-pop-orange relative overflow-hidden">
         {/* Decorative abstract lines */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Text Column */}
            <div className="text-left space-y-8">
              <ScrollReveal animation="slide-in-left">
                <div className="inline-block bg-black/20 px-4 py-1.5 rounded-full text-white font-bold text-sm tracking-wider uppercase border border-white/10">
                   24/7 Emergency Service
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-in-left" delay="0.1s">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                  Locked Out?<br/>We're On The Way.
                </h2>
                <p className="text-xl text-white/95 font-medium leading-relaxed max-w-lg mt-4">
                  Don't stress. Our mobile units are patrolling Alexandria and ready to help you get back to your day immediately.
                </p>
              </ScrollReveal>

              {/* Common Issues Checklist */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-white">
                 {[
                   "Keys Locked inside",
                   "Lost Car Keys",
                   "Broken Locks",
                   "New Home Re-key"
                   ].map((item, i) => (
                   <ScrollReveal key={i} animation="slide-in-right" delay={`${0.2 + (i * 0.1)}s`}>
                     <div className="flex items-center gap-2 font-medium hover:translate-x-1 transition-transform cursor-default">
                        <CheckCircle className="text-white w-5 h-5 fill-black/20" /> {item}
                     </div>
                   </ScrollReveal>
                 ))}
              </div>

              <ScrollReveal animation="slide-in-up" delay="0.6s">
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a href="tel:3184434444" className="w-full sm:w-auto">
                    <Button variant="dark" className="text-lg px-8 py-5 shadow-2xl h-full w-full">
                      <Phone className="mr-2"/> Call (318) 443-4444
                    </Button>
                  </a>
                </div>
              </ScrollReveal>

              {/* Steps Visualizer */}
              <ScrollReveal animation="fade-in-up" delay="0.8s">
                <div className="flex gap-8 pt-8 border-t border-white/20 mt-8">
                   <div className="flex flex-col gap-1 group">
                      <div className="flex items-center gap-2 text-white/90 font-bold group-hover:text-white transition-colors"><Phone size={16} className="group-hover:rotate-12 transition-transform"/> 1. Call</div>
                      <span className="text-xs text-white/70">Immediate Dispatch</span>
                   </div>
                   <div className="hidden sm:block w-px bg-white/30 h-10"></div>
                   <div className="flex flex-col gap-1 group">
                      <div className="flex items-center gap-2 text-white/90 font-bold group-hover:text-white transition-colors"><Clock size={16} className="group-hover:spin transition-transform"/> 2. Wait</div>
                      <span className="text-xs text-white/70">~15 Min Arrival</span>
                   </div>
                   <div className="hidden sm:block w-px bg-white/30 h-10"></div>
                   <div className="flex flex-col gap-1 group">
                      <div className="flex items-center gap-2 text-white/90 font-bold group-hover:text-white transition-colors"><ShieldCheck size={16} className="group-hover:scale-110 transition-transform"/> 3. Done</div>
                      <span className="text-xs text-white/70">Back to Safety</span>
                   </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Form Column */}
            <ScrollReveal animation="slide-in-right" delay="0.4s" className="w-full max-w-md mx-auto lg:ml-auto relative">
               {/* Badge */}
               <div className="absolute -top-6 -right-6 z-20 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-yellow-400 text-pop-black font-bold w-24 h-24 rounded-full flex items-center justify-center text-center text-xs shadow-xl border-4 border-white transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                     100%<br/>Satisfaction<br/>Guarantee
                  </div>
               </div>
               <QuoteForm variant="cta" />
            </ScrollReveal>

          </div>
        </div>
      </section>

      <ServiceMap />
    </>
  );
};