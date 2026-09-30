import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST } from '../data/cleaningData';
import ServiceModal from '../components/ServiceModal';
import PageBanner from '../components/PageBanner';
import { Check, Eye } from 'lucide-react';
import { SERVICE_GROUPS, SERVICE_PAGES, servicePathFor } from '../data/servicePages';

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

  return (
    <div className="pb-20 bg-white text-slate-800">
      
      {/* Photo-Backed Luxury Page Banner */}
      <PageBanner
        bgImage="/images/banner-services.jpg"
        badge="Golden Home cleaning services"
        title="Our Home Cleaning"
        highlightText="Services"
        breadcrumb="Services"
        description="Explore cleaning options for homes, apartments, villas, moves, holiday homes and household furnishings."
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

      <section className="border-b border-emerald-100 bg-[#f3faf5] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center"><span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Find the right service</span><h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">Cleaning for every kind of space</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_GROUPS.map((group) => {
              const service = SERVICE_PAGES.find((item) => item.slug === group.slugs[0]);
              return <Link key={group.name} to={`/services/${service.slug}`} className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="h-36 overflow-hidden"><img src={service.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                <div className="flex items-center justify-between p-4"><span className="font-serif text-lg font-bold text-slate-900">{group.name}</span><Eye className="h-4 w-4 text-emerald-700" /></div>
              </Link>;
            })}
          </div>
        </div>
      </section>

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
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0b462f] shadow-sm">
                    {service.tag}
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
                  <div className="grid grid-cols-1 gap-2 border-t border-slate-100 pt-4 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalService(service)}
                      className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-bold leading-none text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>Service scope</span>
                    </button>

                    <Link to={servicePathFor(service.id)} className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs font-bold leading-none text-[#0b462f] transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
                      Service details
                    </Link>

                    <button
                      type="button"
                      onClick={() => onOpenBooking({ serviceType: service.id })}
                      className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#174b32] px-3 py-2.5 text-xs font-extrabold leading-none text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#236541] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:col-span-2"
                    >
                      <span>Request booking</span>
                      <span aria-hidden="true">→</span>
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
                Before you book
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Confirm the visit details
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Share your preferred timing and cleaning priorities. We’ll confirm the service scope and availability with you.
              </p>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#29945a] hover:bg-[#197543] shadow-lg shadow-[#0b462f]/20 active:scale-95 transition-all whitespace-nowrap"
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
            onOpenBooking({ serviceType: s.id });
          }}
        />
      )}

    </div>
  );
}
