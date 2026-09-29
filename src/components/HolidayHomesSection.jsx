import React from 'react';
import { CalendarCheck, ShieldCheck, Camera, Sparkles, Key, CheckCircle2, MessageSquare } from 'lucide-react';

export default function HolidayHomesSection({ onOpenBooking }) {
  const steps = [
    {
      icon: CalendarCheck,
      title: '1. Same-Day Express Turnaround',
      desc: 'Seamless cleaning between 11:00 AM check-out and 3:00 PM check-in, ready for your next VIP guest.'
    },
    {
      icon: Sparkles,
      title: '2. 5-Star Hotel Linen & Toiletries',
      desc: 'Freshly laundered crisp bed linens, fluffy bath towels, and restocking luxury shampoo, soaps, and tea/coffee.'
    },
    {
      icon: Camera,
      title: '3. Photo Inspection Report',
      desc: 'Our supervisor takes photos of key handover areas and alerts you immediately on WhatsApp if any damage or forgotten item is spotted.'
    },
    {
      icon: Key,
      title: '4. Lockbox & Key Management',
      desc: 'Coordinate effortlessly with smart lock codes, concierge key reception, or lockboxes across Dubai Marina and Downtown.'
    }
  ];

  return (
    <section id="holiday-homes" className="py-24 bg-[#061810] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-bold uppercase tracking-widest text-red-300">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
            Airbnb & Short-Term Rental Partner
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Dubai <span className="gold-shimmer-text">Holiday Home Turnovers</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Keep your 5-star Superhost rating intact. We manage end-to-end turnover cleaning for vacation apartments and luxury villas.
          </p>
        </div>

        {/* 4 Feature Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-[#092217]/80 backdrop-blur-xl border border-white/10 hover:border-[#d4af37]/50 transition space-y-3 shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0e3524] border border-[#d4af37]/30 flex items-center justify-center text-[#f5d77f]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-base text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action card */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#0c2e1f] via-[#092217] to-[#0c2e1f] border border-[#d4af37]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase text-[#f5d77f] tracking-wider">
              Managing 3 or more properties?
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Get Custom Volume Rates for Dubai Holiday Homes
            </h3>
            <p className="text-xs text-slate-300">
              Contracted turnarounds from 199 AED per turnover with guaranteed 4-hour completion.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBooking({ serviceType: 'holiday-homes', base: 199 })}
              className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#061810] bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#e5c07b] hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#d4af37]/25"
            >
              Book Holiday Turnover
            </button>
            <a
              href="https://wa.me/971502116822?text=Hello%20Golden%20Home%2C%20I%20manage%20Holiday%20Homes%20in%20Dubai%20and%20need%20custom%20turnover%20rates."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/60 transition flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Rates</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
