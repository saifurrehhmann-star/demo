import React from 'react';
import { X, CheckCircle, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onBookNow }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#082015] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 pb-5 border-b border-white/15 pr-10">
          <div>
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/20 text-[#f5d77f] border border-[#d4af37]/40 inline-block mb-2">
              {service.tag}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-300 mt-1">
              {service.subtitle}
            </p>
          </div>
        </div>

        <div className="my-5 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-[#f3f8f4] p-4 text-sm leading-6 text-slate-600"><MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-[#23834e]" />The final scope and quote are confirmed after you share your property details.</div>

        {/* Overview */}
        <div className="space-y-4 text-sm text-slate-300">
          <p className="leading-relaxed">
            {service.description}
          </p>

          {/* Key Standard Protocols */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-[#d4af37]">
              Included Luxury Standards:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#061810]/70 p-2.5 rounded-xl border border-white/5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Checklists if available */}
          {service.checklist && (
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#d4af37]">
                Room-by-Room Detailing Protocol:
              </h4>

              {Object.entries(service.checklist).map(([room, items]) => (
                <div key={room} className="p-3.5 rounded-2xl bg-[#061810]/60 border border-white/10">
                  <span className="font-serif font-bold text-xs uppercase text-emerald-300 tracking-wider block mb-2">
                    {room} Scope:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer CTAs */}
        <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            Close Scope
          </button>

          <button
            onClick={() => {
              onClose();
              onBookNow(service);
            }}
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-[#061810] bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#e5c07b] hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#d4af37]/20 flex items-center gap-2"
          >
            <span>Ask about this service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
