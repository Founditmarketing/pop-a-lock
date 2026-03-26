import React, { useState } from 'react';
import { X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_PHONE, SERVICES } from '../constants';
import { Button } from './Button';

// Custom Solid Unlocked Icon
const SolidUnlock: React.FC<{ size?: number, className?: string }> = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={size} height={size} fill="currentColor" className={className}>
    {/* Solid Unlocked Padlock with a keyhole */}
    <path d="M224 64c-44.2 0-80 35.8-80 80v48H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80V144C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1 .8-42.6-15.2C283.4 82.6 255.9 64 224 64zm-8 232v48c0 13.3 10.7 24 24 24s24-10.7 24-24V296c14.7-6.2 24-20.9 24-38.1c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 17.2 9.3 32 24 38.1z"/>
  </svg>
);

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[1001] flex flex-col items-end">
      {/* Expanded Actions Window */}
      {isOpen && (
        <div className="bg-white w-[320px] md:w-[350px] rounded-2xl shadow-2xl border border-gray-200 mb-4 overflow-hidden flex flex-col animate-slide-in-up origin-bottom-right transition-all">
          {/* Header */}
          <div className="bg-pop-dark p-4 flex justify-between items-center text-white border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="bg-pop-orange/20 rounded-lg p-2">
                <SolidUnlock size={20} className="text-pop-orange" />
              </div>
              <span className="font-bold tracking-wide">Help Needed?</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white bg-gray-800 hover:bg-red-500 rounded-full transition-colors p-1"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Top Half: Emergency Override */}
          <div className="p-6 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
             
             <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] mb-4 border border-red-100 shadow-sm animate-pulse">
               Emergency
             </div>
             <h3 className="text-lg font-extrabold text-gray-900 mb-2 leading-tight">Locked Out Right Now?</h3>
             <p className="text-xs text-gray-500 mb-5 max-w-[200px]">Mobile dispatch is available 24/7 for immediate commercial or residential help.</p>
             <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="block w-full">
               <Button variant="primary" fullWidth className="h-14 text-base shadow-xl hover:-translate-y-1 transition-transform group relative overflow-hidden">
                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
                 <Phone className="w-5 h-5 mr-3 animate-bounce" style={{ animationDuration: '2s' }} />
                 Call {COMPANY_PHONE}
               </Button>
             </a>
          </div>

          {/* Bottom Half: Rapid Request Dropdown */}
          <div className="p-6 bg-white relative">
             <h3 className="text-sm font-bold text-gray-800 mb-4 tracking-tight uppercase border-b border-gray-100 pb-2">Or Request Service</h3>
             
             <form className="space-y-4" onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Your request has been received! A dispatcher will contact you immediately.'); 
                setIsOpen(false); 
             }}>
                
                <div>
                  <select 
                     className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg focus:ring-2 focus:ring-pop-orange/20 focus:border-pop-orange block p-3 outline-none transition-all cursor-pointer appearance-none shadow-sm"
                     required
                     defaultValue=""
                     style={{ backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                  >
                     <option value="" disabled>Select the service you need...</option>
                     {SERVICES.map(service => (
                        <option key={service.id} value={service.id}>{service.title}</option>
                     ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Full Name" required className="block w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium rounded-lg focus:ring-2 focus:ring-pop-orange/20 focus:border-pop-orange p-3 outline-none transition-all shadow-sm" />
                  <input type="tel" placeholder="Phone" required className="block w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium rounded-lg focus:ring-2 focus:ring-pop-orange/20 focus:border-pop-orange p-3 outline-none transition-all shadow-sm" />
                </div>
                
                <Button variant="dark" fullWidth type="submit" className="mt-2 h-12 text-sm shadow-md group">
                  Send Request <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
             </form>
          </div>
        </div>
      )}

      {/* Primary Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'rotate-90 opacity-0 scale-50 pointer-events-none absolute' : 'rotate-0 opacity-100 scale-100'} transition-all duration-300 ease-out bg-pop-orange hover:bg-orange-600 text-white p-4 md:p-5 rounded-full shadow-[0_4px_25px_rgba(245,128,37,0.5)] hover:shadow-[0_8px_30px_rgba(245,128,37,0.6)] transform hover:-translate-y-1 z-50 flex items-center justify-center cursor-pointer overflow-hidden border-2 border-orange-400/50`}
        aria-label="Open assistance menu"
      >
        <SolidUnlock size={32} className="text-white" />
      </button>
    </div>
  );
};