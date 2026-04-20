import React from 'react';
import { Phone, Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './Button';

export const ReviewsPage: React.FC = () => {
  const reviews = [
    { author: "Amanda T.", text: "Awesome job. Friendly people. Got the job done in no time.", date: "1 week ago" },
    { author: "Davis K.", text: "Quick arrival and the technician's kindness... really appreciated it in an inconvenient situation.", date: "1 month ago" },
    { author: "Sarah M.", text: "Lost my single transponder key. They came out and programmed a new one for me right in my driveway. Saved me a huge towing fee to the dealership.", date: "2 months ago" },
    { author: "Michael C.", text: "Great service! I was locked out of my house at 10 PM. The locksmith arrived quickly and got me in without damaging the lock. Highly recommend Pop-A-Lock.", date: "4 months ago" },
    { author: "Robert L.", text: "Very professional and courteous. Rekeyed the locks on my entire business in under two hours. Clean, fast, and fair pricing.", date: "6 months ago" },
    { author: "John D.", text: "Locked my keys in my car. The dispatcher was helpful and the technician came out in 15 minutes. Super fast and professional!", date: "8 months ago" },
  ];

  return (
    <div className="bg-white">
      {/* 1. Page Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-pop-dark flex items-center min-h-[40vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Pop-A-Lock Reviews" 
            className="w-full h-full object-cover object-center scale-105 filter grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pop-black via-pop-black/90 to-pop-black/70 mix-blend-multiply"></div>
        </div>
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <ScrollReveal animation="slide-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md mb-4">
              Our Reviews
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-medium">
              See what the Alexandria community has to say about our trusted locksmith services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Reviews Grid Section */}
      <section className="py-20 md:py-28 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal animation="slide-in-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Five-Star Service Guaranteed
              </h2>
              <p className="text-lg text-gray-600">
                We take immense pride in our reputation. Don't just take our word for it—read our 5-star Google Reviews from real customers who trusted us in an emergency.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <ScrollReveal key={idx} animation="slide-in-up" delay={`${idx * 0.1}s`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                    <span className="font-bold text-gray-900">{review.author}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{review.date}</span>
                      {/* Simple CSS Google G icon substitute */}
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">G</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. Call to Action Strip */}
      <section className="bg-pop-orange py-16 relative overflow-hidden text-center border-t border-orange-500">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
           <ScrollReveal animation="slide-in-up">
             <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-sm">
               Had a Great Experience? Let Us Know!
             </h2>
             <a href="https://www.google.com/maps/place/Pop-A-Lock/@31.2897157,-92.4973367,17z/data=!4m8!3m7!1s0x863ab4fed44eccf9:0x7706bddf981e04b8!8m2!3d31.2897157!4d-92.4973367!9m1!1b1!16s%2Fg%2F1tkc71bg?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-block">
               <Button variant="dark" className="text-xl px-10 py-5 shadow-xl hover:scale-105 transition-transform">
                 <Star className="mr-3"/> Leave Your Own Review
               </Button>
             </a>
           </ScrollReveal>
         </div>
      </section>

    </div>
  );
};
