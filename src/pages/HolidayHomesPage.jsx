import React from 'react';
import PageBanner from '../components/PageBanner';
import { CalendarCheck, Camera, Sparkles, Key, CheckCircle2, MessageSquare } from 'lucide-react';

export default function HolidayHomesPage({ onOpenBooking }) {
  const packages = [
    {
      type: 'Studio Apartment',
      price: 180,
      time: '2 - 2.5 hours',
      features: ['Linen change & bed making', 'Bathroom deep sanitization', 'Replenish toiletries & tea kit', 'Kitchen wipe down & dishwasher check', 'WhatsApp photo handover report']
    },
    {
      type: '1 Bedroom Apartment',
      price: 240,
      time: '2.5 - 3 hours',
      features: ['Master bedroom fresh linen setup', 'Full bathroom calcium descaling', 'Balcony dust sweep & glass wipe', 'Restock guest welcome amenities', 'Damage & left-item photo audit']
    },
    {
      type: '2 Bedroom Apartment',
      price: 320,
      time: '3 - 4 hours',
      features: ['2 Bedrooms hotel corner linen setup', '2 Bathrooms hospital grade sanitization', 'Balcony sand wash & glass buffing', 'Living room sofa & rug HEPA vacuum', 'Digital lockbox verification']
    },
    {
      type: 'Luxury Villa / Penthouse',
      price: 550,
      time: '4 - 5 hours',
      features: ['Multi-bedroom executive setup', 'Terrace & private pool deck wash', 'Full kitchen sanitizing & fridge check', 'High-gloss marble floor conditioning', 'Priority Superhost same-day dispatch']
    }
  ];

  return (
    <div className="pb-20 bg-white text-slate-800">
      
      {/* Photo-Backed Luxury Banner */}
      <PageBanner
        bgImage="/images/banner-holiday.jpg"
        badge="Airbnb & Dubai Vacation Rental Specialist"
        title="Guest-Ready"
        highlightText="Holiday Home Turnovers"
        breadcrumb="Holiday Homes"
        description="Maintain your 5-star Superhost rating effortlessly. Express turnover cleaning between 11:00 AM check-out and 3:00 PM check-in across Dubai Marina, Downtown, JBR & Palm Jumeirah."
      />

      {/* 4 Protocol Pillars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: CalendarCheck, title: 'Same-Day Fast Turnaround', desc: 'Guaranteed completion between 11am and 3pm so your next guests walk into a fresh home.' },
              { icon: Sparkles, title: 'Hotel-Grade Linen & Towels', desc: 'Clean, crisp laundered sheets, fluffy folded towels, and luxury toiletries neatly arranged.' },
              { icon: Camera, title: 'Photo Inspection Report', desc: 'WhatsApp photo updates sent directly to you reporting damages, stains, or items left behind.' },
              { icon: Key, title: 'Lockbox & Key Access', desc: 'Seamless key coordination via digital smart locks, building security, or lockbox keys.' }
            ].map((col, i) => {
              const Icon = col.icon;
              return (
                <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-600 transition space-y-3 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0b462f] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-slate-900">{col.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{col.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Turnover Pricing Packages */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b462f] bg-emerald-100 px-3 py-1 rounded-full">
              Transparent Dubai Rates
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Turnover Cleaning Rates
            </h2>
            <p className="text-sm text-slate-600">
              Fixed, predictable pricing for Dubai vacation rental operators and individual hosts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#0b462f] shadow-sm hover:shadow-xl transition flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider">
                    {pkg.time}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    {pkg.type}
                  </h3>
                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="font-serif text-3xl font-extrabold text-[#0b462f]">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-bold text-slate-600">AED / turnover</span>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-[11px]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onOpenBooking({ serviceType: 'holiday-homes', base: pkg.price })}
                    className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] transition shadow-md"
                  >
                    Schedule Turnover
                  </button>
                  <a
                    href={`https://wa.me/971502116822?text=${encodeURIComponent(`Hi Golden Home, I need Holiday Home turnover cleaning for a ${pkg.type} in Dubai.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl font-semibold text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Volume CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#06281a] via-[#0b462f] to-[#06281a] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f5d77f]">
                Property Management Portfolios
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Managing 3 or More Holiday Apartments?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                We provide dedicated account managers, bulk contract discounts, and prioritized same-day emergency dispatch.
              </p>
            </div>

            <a
              href="https://wa.me/971502116822?text=Hello%20Golden%20Home%2C%20I%20manage%20multiple%20holiday%20home%20apartments%20in%20Dubai%20and%20want%20custom%20partnership%20rates."
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#06281a] bg-[#f5d77f] hover:bg-white transition shadow-xl whitespace-nowrap"
            >
              Contact Account Manager
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
