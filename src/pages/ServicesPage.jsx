import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/cleaningData';
import ServiceModal from '../components/ServiceModal';
import PageBanner from '../components/PageBanner';
import { Check, MessageSquare, Eye } from 'lucide-react';

export default function ServicesPage({ onOpenBooking }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalService, setActiveModalService] = useState(null);

  const filteredServices = selectedFilter === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => {
        if (selectedFilter === 'villa') return s.id.includes('villa');
        if (selectedFilter === 'apartment') return s.id.includes('apartment');
        if (selectedFilter === 'move') return s.id.includes('move');
        if (selectedFilter === 'maid') return s.id.includes('maid');
        if (selectedFilter === 'furniture') return s.id.includes('furniture');
        return true;
      });

  const handleWhatsApp = (service) => {
    const text = encodeURIComponent(service.whatsappMsg || `Hi, I want to book ${service.title} in Dubai.`);
    window.open(`https://wa.me/971502116822?text=${text}`, '_blank');
  };

  return (
    <div className="pb-20 bg-white text-slate-800">
      
      {/* Photo-Backed Luxury Page Banner */}
      <PageBanner
        bgImage="/images/banner-services.jpg"
        badge="Dubai 5-Star Residential Portfolio"
        title="Our Home Cleaning"
        highlightText="Services"
        breadcrumb="Services"
        description="From high-rise Marina penthouses to private Palm Jumeirah estates, our TADBEER-certified crews deliver hospital-grade 5-star hygiene standards."
      >
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'villa', label: '🏰 Villa Deep Cleaning' },
            { id: 'apartment', label: '🏢 Apartment Cleaning' },
            { id: 'move', label: '🔑 Move-In / Move-Out' },
            { id: 'maid', label: '🧹 Maid Service' },
            { id: 'furniture', label: '🛋️ Sofa & Steam Extraction' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                selectedFilter === f.id
                  ? 'bg-[#d4af37] text-[#061810] shadow-md shadow-[#d4af37]/25 scale-105'
                  : 'bg-white/15 text-white backdrop-blur-md border border-white/20 hover:bg-white/25'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </PageBanner>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div 
                key={service.id} 
                className="rounded-3xl bg-white border border-slate-200 hover:border-[#0b462f] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left group"
              >
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0b462f] shadow-sm">
                    {service.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#06281a] px-3.5 py-1.5 rounded-xl text-white font-bold text-xs shadow-md">
                    From {service.priceStarting} AED
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#0b462f] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700">
                      {service.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Included bullets */}
                  <ul className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="w-full sm:w-auto flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>85-Pt Checklist</span>
                    </button>

                    <button
                      onClick={() => handleWhatsApp(service)}
                      className="w-full sm:w-auto flex-1 py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp Book</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Strip */}
          <div className="mt-16 p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b462f]">
                Peace of Mind Guarantee
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                24-Hour Free Re-Clean Promise
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                If your supervisor finds any corner that didn't meet our standards, we re-clean it free within 24 hours.
              </p>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] shadow-lg shadow-[#0b462f]/20 active:scale-95 transition-all whitespace-nowrap"
            >
              Book Service in 60s
            </button>
          </div>

        </div>
      </section>

      {/* Scope Checklist Modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onBookNow={(s) => {
            setActiveModalService(null);
            onOpenBooking({ serviceType: s.id, base: s.priceStarting });
          }}
        />
      )}

    </div>
  );
}
