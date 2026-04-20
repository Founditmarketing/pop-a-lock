import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, COMPANY_PHONE } from '../constants';
import { QuoteForm } from './QuoteForm';
import { Button } from './Button';
import { CheckCircle, Phone, ArrowLeft, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 bg-gray-50 text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pop-black/70 flex flex-col justify-center items-center text-center px-4">
          <ScrollReveal animation="slide-in-up">
            <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
            <div className="w-16 h-16 bg-pop-orange rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg">
              <service.icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
              Trusted, professional, and fast {service.title.toLowerCase()} in Alexandria.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal animation="slide-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-pop-orange pl-4">
                About This Service
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {service.longDescription}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-up" delay="0.2s">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:border-pop-orange/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <span className="font-semibold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-up" delay="0.3s">
              <div className="bg-pop-dark rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden mt-8">
                 <div className="absolute inset-0 bg-pop-orange/10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                 <div className="relative z-10">
                   <h3 className="text-2xl md:text-3xl font-bold mb-4">Need {service.title} Now?</h3>
                   <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                     Our technicians are standing by to assist you. Call us for immediate dispatch or schedule an appointment.
                   </p>
                   <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`}>
                     <Button variant="primary" className="text-lg px-8 py-4 mx-auto">
                       <Phone className="mr-2 w-5 h-5"/> Call {COMPANY_PHONE}
                     </Button>
                   </a>
                 </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
               <ScrollReveal animation="slide-in-left" delay="0.4s">
                <QuoteForm variant="default" />
              </ScrollReveal>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-pop-orange" />
                  Availability
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Emergency Service</span>
                    <span className="font-bold text-green-600">24/7 Open</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Mon - Fri</span>
                    <span className="font-bold text-gray-900">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-bold text-gray-900">9:00 AM - 3:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};