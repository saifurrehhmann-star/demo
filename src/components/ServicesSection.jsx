import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/cleaningData';
import ServiceModal from './ServiceModal';
import { Sparkles, ArrowRight, Check, Eye, MessageSquare } from 'lucide-react';

export default function ServicesSection({ onOpenBooking }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (service) => {
    onOpenBooking({ serviceType: service.id, base: service.priceStarting });
  };

  const handleWhatsAppBooking = (service) => {
    const text = encodeURIComponent(service.whatsappMsg || `Hi, I want to book ${service.title} in Dubai.`);
    window.open(`https://wa.me/971502116822?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-[#05170f] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Eco Bright Pro style) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2e1f] border border-[#d4af37]/30 text-xs font-bold uppercase tracking-widest text-[#f5d77f]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            We Offer Top-Notch Cleaning Services
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Residential <span className="gold-shimmer-text">Cleaning Portfolio</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Dedicated exclusively to Dubai homes, villas, apartments, and holiday rentals. Cleaned to immaculate 5-star hotel hygiene standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div 
              key={service.id}
              className="group relative rounded-3xl bg-[#092217]/85 backdrop-blur-xl border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10 hover:-translate-y-1.5"
            >
              {/* Thumbnail Header */}
              <div className="relative h-52 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092217] via-[#092217]/35 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#061810]/90 text-[#f5d77f] border border-[#d4af37]/40 backdrop-blur-md shadow-md">
                    {service.tag}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 right-4 bg-[#061810]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-slate-400 block -mb-1">Starting from</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-lg font-bold text-[#f5d77f]">{service.priceStarting}</span>
                    <span className="text-[11px] font-semibold text-slate-200">AED</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f5d77f] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action Buttons (Eco Bright Pro style Book Now + Scope) */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full sm:w-auto flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-[#061810]/80 border border-white/15 hover:border-[#d4af37] hover:text-white transition flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>85-Pt Scope</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppBooking(service)}
                    className="w-full sm:w-auto flex-1 py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/60 transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Book Now</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Scope Modal */}
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
            onBookNow={handleBookNow}
          />
        )}

      </div>
    </section>
  );
}
