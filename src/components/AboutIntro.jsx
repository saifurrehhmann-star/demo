import React, { useState } from 'react';
import { Play, Check, ShieldCheck, Sparkles, X, Star } from 'lucide-react';
import { TRUST_COUNTERS } from '../data/cleaningData';

export default function AboutIntro({ onOpenBooking }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 bg-[#05170f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Col Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Video Play Button Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl group">
              <img 
                src="/images/staff-team.jpg" 
                alt="Golden Home Professional Housekeeping Staff in Dubai" 
                className="w-full h-[460px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061810]/90 via-transparent to-transparent" />

              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="relative group/btn flex items-center justify-center w-20 h-20 rounded-full bg-[#d4af37] text-[#061810] shadow-2xl shadow-[#d4af37]/50 hover:scale-110 active:scale-95 transition-all"
                  aria-label="Watch Golden Home Dubai Cleaning Video"
                >
                  <span className="absolute -inset-3 rounded-full border-2 border-[#d4af37]/60 animate-ping opacity-75" />
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>

              {/* Floating Bottom Left Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#082015]/90 backdrop-blur-xl border border-[#d4af37]/40 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#f5d77f] tracking-wider block">
                    Certified Home Care
                  </span>
                  <p className="text-xs text-white font-semibold">
                    100% Dedicated to Residential Living
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Core Commitments (Eco Bright Pro style) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2e1f] border border-[#d4af37]/30 text-xs font-bold uppercase tracking-widest text-[#f5d77f]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Dubai’s Trusted Home Care Specialists
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Your Trusted Deep Cleaning Company in <span className="gold-shimmer-text">Dubai</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At <strong>Golden Home</strong>, we believe a home is your private sanctuary. We specialize exclusively in residential properties — delivering bespoke cleaning services designed for Dubai’s luxury villas, private residences, penthouses, and holiday homes.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Unlike generic cleaners who mix office and commercial jobs, our team is 100% dedicated to delicate residential finishes: Italian marble, imported quartz, crystal chandeliers, and luxury upholstery. Using certified non-toxic chemicals, we keep your family space sparkling, hygienic, and fresh.
            </p>

            {/* Two Commitment Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#092217]/75 border border-white/10 hover:border-[#d4af37]/40 transition">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-white">
                    We Are Committed
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Your complete satisfaction is our primary metric. If any room fails to meet your expectations, we return and re-clean within 24 hours free of charge.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#092217]/75 border border-white/10 hover:border-[#d4af37]/40 transition">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-white">
                    Customer Focused Reviews
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    We listen carefully to Dubai homeowners. Transparent, unedited WhatsApp feedback from residents in Palm Jumeirah, Marina, and Downtown is our biggest asset.
                  </p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#061810] bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#e5c07b] hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#d4af37]/25"
              >
                Schedule A Service
              </button>
              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl font-semibold text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                Explore Home Services
              </a>
            </div>

          </div>

        </div>

        {/* 4 Trust Metrics Counter Strip (Eco Bright Pro style) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#082015] border border-[#d4af37]/30 shadow-2xl">
          {TRUST_COUNTERS.map((item, idx) => (
            <div key={idx} className="text-center p-3">
              <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#f5d77f]">
                {item.count}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-black border-2 border-[#d4af37] shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                title="Golden Home Video Tour"
                src="https://www.youtube.com/embed/VjQHWq1zjP0?autoplay=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
