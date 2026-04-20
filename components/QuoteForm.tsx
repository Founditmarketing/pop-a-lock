import React, { useState } from 'react';
import { Button } from './Button';
import { Send, CheckCircle } from 'lucide-react';

interface QuoteFormProps {
  variant?: 'default' | 'horizontal' | 'cta';
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ variant = 'default' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an error sending your request. Please try calling us instead.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Please try calling us instead.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-white p-8 rounded-lg shadow-xl text-center border-t-4 border-pop-orange flex flex-col justify-center items-center ${variant === 'horizontal' ? 'h-auto py-4 bg-white/90 backdrop-blur' : 'h-full'}`}>
        <div className="flex items-center gap-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <h3 className="text-xl font-bold text-gray-800">Request Received!</h3>
        </div>
        <p className="text-gray-600 mt-2">We'll call you shortly.</p>
        <button className="text-pop-orange font-bold mt-2 hover:underline" onClick={() => setSubmitted(false)}>
          New Quote
        </button>
      </div>
    );
  }

  // Cool Glassmorphism Horizontal Variant (Hero)
  if (variant === 'horizontal') {
    return (
      <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] border border-white/20 w-full animate-fade-in-up">
         <div className="text-white mb-4 text-left font-semibold flex items-center gap-2">
            <div className="w-2 h-2 bg-pop-orange rounded-full animate-pulse"></div>
            <span>Get a Fast Free Quote</span>
         </div>
         <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 items-center">
            <input 
              name="name"
              type="text" 
              required 
              className="w-full md:w-1/5 px-3 py-3 bg-black/40 border border-white/10 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-pop-orange focus:border-transparent outline-none transition-all hover:bg-black/50"
              placeholder="Full Name"
            />
            <input 
              name="email"
              type="email" 
              required 
              className="w-full md:w-1/5 px-3 py-3 bg-black/40 border border-white/10 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-pop-orange focus:border-transparent outline-none transition-all hover:bg-black/50"
              placeholder="Email"
            />
            <input 
              name="phone"
              type="tel" 
              required 
              className="w-full md:w-1/5 px-3 py-3 bg-black/40 border border-white/10 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-pop-orange focus:border-transparent outline-none transition-all hover:bg-black/50"
              placeholder="Phone Number"
            />
            <select 
              name="service"
              defaultValue=""
              className="w-full md:w-1/5 px-3 py-3 bg-black/40 border border-white/10 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-pop-orange focus:border-transparent outline-none transition-all hover:bg-black/50 [&>option]:text-black"
            >
              <option value="" disabled className="text-gray-500">Service</option>
              <option className="text-black">Automotive Lockout</option>
              <option className="text-black">Residential Lockout</option>
              <option className="text-black">Commercial Service</option>
              <option className="text-black">Car Key Replacement</option>
              <option className="text-black">Other</option>
            </select>
            <div className="w-full md:w-1/5">
              <Button type="submit" fullWidth disabled={loading} className="py-3 shadow-xl text-sm">
                {loading ? 'Sending...' : 'Get Quote'}
              </Button>
            </div>
         </form>
      </div>
    );
  }

  // CTA Variant (for Orange Background)
  const isCta = variant === 'cta';
  
  return (
    <div className={`${isCta ? 'bg-white shadow-2xl' : 'bg-white shadow-xl border-t-4 border-pop-orange'} p-8 rounded-xl`}>
      <h3 className={`text-2xl font-bold mb-2 ${isCta ? 'text-gray-900' : 'text-pop-black'}`}>
        {isCta ? 'Start Your Request' : 'Get a Free Quote'}
      </h3>
      <p className="text-gray-600 mb-6">Fast response time. No hidden fees.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            name="name"
            type="text" 
            id="name" 
            required 
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-pop-orange focus:border-transparent outline-none"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            name="email"
            type="email" 
            id="email" 
            required 
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-pop-orange focus:border-transparent outline-none"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            name="phone"
            type="tel" 
            id="phone" 
            required 
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-pop-orange focus:border-transparent outline-none"
            placeholder="(555) 555-5555"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
          <select 
            name="service"
            id="service" 
            className="w-full px-4 py-2 text-black [&>option]:text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-pop-orange focus:border-transparent outline-none"
          >
            <option>Automotive Lockout</option>
            <option>Residential Lockout</option>
            <option>Commercial Service</option>
            <option>Car Key Replacement</option>
            <option>Rekey Locks</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Details (Optional)</label>
          <textarea 
            name="message"
            id="message" 
            rows={3}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-pop-orange focus:border-transparent outline-none"
            placeholder="Please describe your issue..."
          ></textarea>
        </div>

        <Button type="submit" fullWidth disabled={loading} variant={isCta ? 'dark' : 'primary'}>
          {loading ? 'Sending...' : 'Request Quote'}
          {!loading && <Send size={18} />}
        </Button>
      </form>
    </div>
  );
};