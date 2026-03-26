import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { QuoteForm } from './QuoteForm';
import { Phone, ChevronRight } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

// Digital Tumbler Character Component
interface TumblerCharProps {
  char: string;
  index: number;
}

const TumblerChar: React.FC<TumblerCharProps> = ({ char, index }) => {
  // If space, just return spacer
  if (char === ' ') return <span className="inline-block w-[0.5em]">&nbsp;</span>;

  // Generate random numbers for the strip
  const stripLength = 15;
  const randomNumbers = Array.from({ length: stripLength }, () => Math.floor(Math.random() * 10));

  return (
    <span className="inline-block overflow-hidden h-[1em] relative w-[0.7em] align-top">
      <div
        className="flex flex-col absolute left-0 top-0 w-full"
        style={{
          animation: `tumbler 1.5s cubic-bezier(0.1, 0.9, 0.2, 1.0) forwards`,
          animationDelay: `${index * 0.1 + 0.5}s`, // Added slight initial delay
        }}
      >
        {randomNumbers.map((n, i) => (
          <span 
            key={i} 
            className="text-green-500 font-mono h-[1em] flex items-center justify-center leading-[1em] select-none"
          >
            {n}
          </span>
        ))}
        {/* The final character */}
        <span className="text-white font-mono font-bold h-[1em] flex items-center justify-center leading-[1em]">
          {char}
        </span>
      </div>
    </span>
  );
};

const DigitalTumbler: React.FC<{ text: string; delayOffset?: number }> = ({ text, delayOffset = 0 }) => {
  const [start, setStart] = useState(false);
  
  useEffect(() => {
    setStart(true);
  }, []);

  if (!start) return <span className="opacity-0">{text}</span>;

  const words = text.split(' ');
  let charIndex = 0;

  return (
    <div className="flex flex-wrap justify-center gap-x-[0.5em] gap-y-2" aria-label={text}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-flex whitespace-nowrap">
          {word.split('').map((char, i) => {
             const currentIndex = delayOffset + charIndex++;
             return <TumblerChar key={i} char={char} index={currentIndex} />;
          })}
        </span>
      ))}
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center bg-pop-dark overflow-hidden pt-20 pb-8 md:pb-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Locksmith working on car" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pop-black/90 via-pop-black/70 to-pop-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center lg:pt-12">
        
        {/* Text Content */}
        <div className="max-w-5xl flex flex-col items-center">
          {/* Badge: Slides down */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-12 mb-[15px] animate-slide-in-down w-full px-4">
            <span className="hidden sm:inline-block w-2.5 h-2.5 bg-pop-orange rounded-full animate-pulse shadow-[0_0_15px_#F58025] shrink-0"></span>
            <span className="text-xs sm:text-base font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-pop-orange text-shadow-sm text-center leading-relaxed">#1 Trusted Locksmith in Alexandria</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight text-white drop-shadow-2xl font-mono min-h-[3em] lg:min-h-0 flex flex-col items-center justify-center">
             {/* Main title animates via tumbler, but container slides left */}
             <div className="animate-slide-in-left flex flex-col lg:flex-row items-center justify-center lg:gap-[0.5em] mt-4">
                <DigitalTumbler text="Master" />
                <DigitalTumbler text="Locksmith" delayOffset={6} />
             </div>
             {/* Subtitle slides right */}
             <span className="text-pop-orange mt-4 block animate-slide-in-right text-2xl sm:text-3xl md:text-5xl tracking-normal font-sans font-bold" style={{ animationDelay: '0.3s' }}>& Unlock Services</span>
          </h1>
          
          {/* Paragraph slides up */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans mt-8 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            Fast, reliable, and licensed automotive, residential, and commercial locksmith services. Available when you need us most.
          </p>
          
          {/* Buttons slide up staggered */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 justify-center">
            <div className="animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`}>
                <Button variant="primary" className="w-full sm:w-auto text-lg px-10 h-14">
                  <Phone className="w-5 h-5 mr-2" /> Call {COMPANY_PHONE}
                </Button>
              </a>
            </div>
            <div className="animate-slide-in-up" style={{ animationDelay: '0.9s' }}>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto text-lg px-10 h-14" 
                onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
              >
                Our Services <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Horizontal Quote Form - Slides Up late */}
        <div className="w-full max-w-5xl mt-16 relative z-20 animate-slide-in-up" style={{ animationDelay: '1.1s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-pop-orange/30 to-transparent blur-xl -z-10 rounded-full"></div>
          <QuoteForm variant="horizontal" />
        </div>

      </div>
    </div>
  );
};