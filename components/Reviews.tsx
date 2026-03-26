import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-pop-black text-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <ScrollReveal animation="slide-in-left" className="w-full">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Public Cheers <span className="text-pop-orange">For Us!</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-lg">
                "Switching to Pop-A-Lock was the best decision. The ease of use and the support provided are outstanding!"
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-in-right">
            <button className="bg-pop-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 group">
              VIEW ALL TESTIMONIALS <ArrowRightDouble className="group-hover:translate-x-1 transition-transform" />
            </button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, index) => (
            <ScrollReveal key={review.id} animation="slide-in-up" delay={`${index * 0.15}s`}>
              <div className="bg-white rounded-xl p-8 shadow-xl text-gray-800 relative group hover:-translate-y-1 transition-transform duration-300 border-b-4 border-transparent hover:border-pop-orange">
                <Quote className="absolute top-8 right-8 text-pop-orange/20 w-16 h-16 group-hover:text-pop-orange/40 transition-colors group-hover:scale-110 transform duration-300" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-50 group-hover:border-pop-orange/20 transition-colors"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{review.name}</h3>
                    <p className="text-pop-orange font-medium text-sm">{review.handle}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-pop-orange text-pop-orange" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed font-medium">
                  {review.content}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRightDouble = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13 17L18 12L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 17L11 12L6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);