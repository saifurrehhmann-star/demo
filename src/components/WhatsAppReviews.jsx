import React from 'react';
import { MessageSquare, CheckCheck, Star, ShieldCheck } from 'lucide-react';
import { WHATSAPP_REVIEWS } from '../data/cleaningData';

export default function WhatsAppReviews() {
  return (
    <section id="whatsapp-reviews" className="py-20 bg-slate-50/60 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#0b462f]">
            <MessageSquare className="w-3.5 h-3.5 text-[#0b462f]" />
            Verified Dubai Homeowners
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Real <span className="text-[#0b462f]">WhatsApp Reviews</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Unedited messages received directly on WhatsApp right after cleaning completion across Dubai Marina, Palm Jumeirah, and Dubai Hills.
          </p>
        </div>

        {/* WhatsApp Chat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHATSAPP_REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all flex flex-col justify-between"
            >
              {/* WhatsApp Chat Header */}
              <div className="bg-[#29945a] p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 text-white font-bold text-xs flex items-center justify-center border border-white/30 shadow-sm">
                    {rev.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      {rev.clientName}
                    </h4>
                    <p className="text-[10px] text-emerald-200 font-medium">
                      📍 {rev.community}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-[#f5d77f]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#f5d77f]" />
                  ))}
                </div>
              </div>

              {/* Chat Body with Authentic WhatsApp Light Bubble Styling */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-[#efeae2]/30">
                
                {/* Service Tag */}
                <div className="self-center">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-slate-700 border border-slate-200 shadow-xs">
                    Service: {rev.service}
                  </span>
                </div>

                {/* WhatsApp Message Bubble */}
                <div className="relative p-4 rounded-2xl rounded-tl-sm bg-[#d9fdd3] border border-emerald-200/80 text-xs sm:text-sm text-slate-800 shadow-sm text-left">
                  <p className="leading-relaxed">
                    "{rev.message}"
                  </p>
                  
                  {/* Bubble Timestamp & Double Blue Tick */}
                  <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-slate-500">
                    <span>{rev.date}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-sky-500 stroke-[2.5]" />
                  </div>
                </div>

                {/* Verification Stamp */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified UAE Resident
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Inspected & Approved
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* WhatsApp Callout Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif font-bold text-lg text-slate-900">
              Want to speak directly with our Dubai Operations Manager?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Send us pictures or videos of your residence on WhatsApp for an instant custom quote within 10 minutes.
            </p>
          </div>

          <a
            href="https://wa.me/971502116822?text=Hello%20Golden%20Home%2C%20I%20have%20sent%20pictures%20of%20my%20residence%20for%20cleaning."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#29945a] hover:bg-[#197543] shadow-md transition flex items-center gap-2 whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#f5d77f]" />
            <span>Chat on WhatsApp (+971 50 211 6822)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
