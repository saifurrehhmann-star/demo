import React from 'react';
import { Phone, MessageSquare, Star, Sparkles, Award } from 'lucide-react';
import { SKILL_METRICS } from '../data/cleaningData';

export default function SkillBarsSection({ onOpenBooking }) {
  return (
    <section className="py-20 bg-[#061810] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Star Experience Badge (Eco Bright Pro style) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl">
              <img 
                src="/images/kitchen-clean.jpg" 
                alt="Luxury Dubai Residence Cleaning" 
                className="w-full h-[460px] object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061810]/80 via-transparent to-transparent" />

              {/* Floating Rotated Star Experience Badge */}
              <div className="absolute top-6 right-6 p-4 rounded-3xl bg-[#082015]/95 backdrop-blur-xl border-2 border-[#d4af37] shadow-2xl text-center transform rotate-3">
                <div className="flex items-center justify-center text-[#d4af37] mb-1">
                  <Award className="w-7 h-7" />
                </div>
                <div className="font-serif text-3xl font-extrabold text-[#f5d77f]">
                  5+
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-200 tracking-wider">
                  Years In Dubai
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#082015]/90 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                <span className="text-[#f5d77f] font-bold block mb-0.5">German Kärcher Technology:</span>
                160°C dry steam sanitization that protects luxury Italian marble & fine silk fabrics.
              </div>
            </div>
          </div>

          {/* Right Column: Progress Bars & Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2e1f] border border-[#d4af37]/30 text-xs font-bold uppercase tracking-widest text-[#f5d77f]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Expert Residential Maids
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Your Perfect Home Cleaning Solution Is <span className="gold-shimmer-text">One Call Away</span>
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              At Golden Home, residential cleaning is our entire focus. Our crews undergo intensive training in chemical pH safety, marble care, and high-rise apartment safety protocols.
            </p>

            {/* Skill Progress Bars Grid */}
            <div className="space-y-4 pt-2">
              {SKILL_METRICS.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-200">
                    <span>{skill.title}</span>
                    <span className="text-[#f5d77f]">{skill.value}%</span>
                  </div>
                  {/* Track */}
                  <div className="w-full h-3 rounded-full bg-[#092217] border border-white/10 overflow-hidden p-0.5">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-[#d4af37] to-[#fae8a4] transition-all duration-1000"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="tel:+971502116822"
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#061810] bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#e5c07b] hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#d4af37]/20 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +971 50 211 6822</span>
              </a>

              <a
                href="https://wa.me/971502116822?text=Hello%20Golden%20Home%2C%20I%20would%20like%20to%20book%20a%20home%20cleaner."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold text-xs text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/60 transition flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
