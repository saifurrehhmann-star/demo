import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Star, Award, CheckCircle, ArrowRight, Clock, Building2, MapPin } from 'lucide-react';
import { DUBAI_AREAS } from '../data/cleaningData';

export default function Hero({ onOpenBooking, onQuickEstimate }) {
  const [propertyType, setPropertyType] = useState('apartment');
  const [serviceType, setServiceType] = useState('deep-clean');
  const [area, setArea] = useState('Downtown Dubai');

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    onQuickEstimate({ propertyType, serviceType, area });
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Photography with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-penthouse.jpg" 
          alt="Dubai Luxury Penthouse" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
        />
        {/* Multi-layered Rich Emerald & Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05170f]/95 via-[#061810]/85 to-[#061810]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061810] via-transparent to-[#061810]/80" />
        
        {/* Subtle Gold Ambient Glow */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Dubai Luxury Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a281c] border border-[#d4af37]/40 shadow-lg shadow-black/40">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
              </span>
              <span className="text-xs uppercase font-bold tracking-widest text-[#f5d77f]">
                Dubai's Premier 5-Star Residential Care
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              The Gold Standard in{' '}
              <span className="gold-shimmer-text">Dubai Villa & Home</span>{' '}
              Deep Cleaning
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Hospitality-grade sanitization, German steam extraction, and TADBEER-certified maids for Dubai’s most discerning residences. Backed by our <span className="text-[#f5d77f] font-semibold">100% Ejari Deposit Return Guarantee</span>.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Ejari Deposit Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>TADBEER Staff</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Sparkles className="w-4 h-4 text-[#f5d77f] flex-shrink-0" />
                <span>Eco Municipality Safe</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider text-[#061810] bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#e5c07b] hover:shadow-xl hover:shadow-[#d4af37]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3 border border-[#fff4c2]/50"
              >
                <span>Book Service in 60 Seconds</span>
                <ArrowRight className="w-4 h-4 text-[#061810]" />
              </button>

              <a
                href="#calculator"
                className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-[#0c2a1e]/80 border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#0c2a1e] transition-all flex items-center gap-2"
              >
                <span>Calculate Cost (AED)</span>
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6">
              <div className="flex items-center -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#061810] bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">
                  TM
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#061810] bg-amber-700 text-white font-bold text-xs flex items-center justify-center">
                  CH
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#061810] bg-teal-700 text-white font-bold text-xs flex items-center justify-center">
                  RM
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#061810] bg-[#d4af37] text-black font-extrabold text-xs flex items-center justify-center">
                  +1.2k
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1.5">4.97 / 5.0</span>
                </div>
                <p className="text-xs text-slate-400">
                  Rated by luxury villa owners across Palm Jumeirah & Downtown
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Booking Estimator Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#092217]/90 backdrop-blur-2xl border border-[#d4af37]/40 shadow-2xl shadow-black/80">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                    Fast Reservation Engine
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Instant Price & Dispatch
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Next Slot: 45 min
                </div>
              </div>

              <form onSubmit={handleQuickEstimate} className="space-y-4 pt-5">
                {/* Property Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Property Category
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPropertyType('apartment')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                        propertyType === 'apartment'
                          ? 'bg-[#d4af37] text-[#061810] border-[#d4af37] shadow-md shadow-[#d4af37]/20'
                          : 'bg-[#061810]/70 text-slate-300 border-white/10 hover:border-[#d4af37]/40'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Apartment / Penthouse</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType('villa')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                        propertyType === 'villa'
                          ? 'bg-[#d4af37] text-[#061810] border-[#d4af37] shadow-md shadow-[#d4af37]/20'
                          : 'bg-[#061810]/70 text-slate-300 border-white/10 hover:border-[#d4af37]/40'
                      }`}
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Luxury Villa / Townhouse</span>
                    </button>
                  </div>
                </div>

                {/* Service Type Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Select Required Service
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#061810]/90 border border-white/15 rounded-xl px-3.5 py-3 text-sm text-slate-100 focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="deep-clean">Luxury Deep Cleaning (85-Point Scrub)</option>
                    <option value="maid-service">TADBEER Maid Service (Hourly / Recurring)</option>
                    <option value="move-in-out">Move-In / Move-Out (Ejari Deposit Guarantee)</option>
                    <option value="sofa-carpet">Sofa & Carpet Steam Sanitization</option>
                    <option value="ac-duct">AC Duct & Anti-Bacterial Fogging</option>
                    <option value="marble-polish">Italian Marble Buffing & Crystallization</option>
                  </select>
                </div>

                {/* Dubai Neighborhood */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Dubai Neighborhood
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-[#d4af37]" />
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-[#061810]/90 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-[#d4af37]"
                    >
                      {DUBAI_AREAS.map((a) => (
                        <option key={a.name} value={a.name}>
                          {a.name} (Est. Arrival: {a.eta})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Live Starting Estimate Notice */}
                <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-500/25 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Estimated Starting Rate:</span>
                  </div>
                  <div className="font-bold text-white text-sm">
                    {serviceType === 'maid-service' ? '45 AED / hr' : serviceType === 'sofa-carpet' ? '180 AED' : '399 AED'}
                  </div>
                </div>

                {/* Submit to Open Full Calculator / Booking */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider text-[#061810] bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#e5c07b] hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Customize & Calculate Exact AED Price</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 No upfront payment required • Pay after inspection via Cash, Apple Pay or Tabby
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
