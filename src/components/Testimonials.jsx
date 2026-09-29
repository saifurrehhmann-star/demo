import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/cleaningData';

export default function Testimonials() {
  const [filter, setFilter] = useState('all');

  return (
    <section id="reviews" className="py-24 bg-[#05170f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2e1f] border border-[#d4af37]/30 text-xs font-bold uppercase tracking-widest text-[#f5d77f]">
            <Star className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
            Client Endorsements
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Trusted by Dubai’s <span className="gold-shimmer-text">Finest Households</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Read genuine feedback from property owners and tenants across Palm Jumeirah, Downtown, and Dubai Marina.
          </p>

          {/* Aggregate Rating Badge */}
          <div className="inline-flex items-center gap-6 pt-4 px-6 py-3 rounded-2xl bg-[#082015] border border-[#d4af37]/30">
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <span className="text-xs font-bold text-white mt-1 block">4.97 / 5.0 Rating</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-left text-xs text-slate-300">
              <span className="text-white font-bold block">1,240+ Verified Reviews</span>
              <span className="text-[10px] text-emerald-400">Google Business & Trustpilot</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev, index) => (
            <div 
              key={index}
              className="p-6 sm:p-7 rounded-3xl bg-[#092217]/85 backdrop-blur-xl border border-white/10 hover:border-[#d4af37]/50 transition-all flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div className="space-y-3">
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified Dubai Client
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Residence Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8c6d17] text-black font-extrabold text-xs flex items-center justify-center shadow-md">
                    {rev.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-[#f5d77f]">
                      📍 {rev.residence}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-slate-400">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
