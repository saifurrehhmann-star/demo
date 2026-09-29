import React from 'react';
import { ShieldCheck, Award, Leaf, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs({ onOpenBooking }) {
  const pillars = [
    {
      icon: Award,
      title: '5-Star Hotel Housekeeping Protocol',
      desc: 'Our supervisors and crews are trained to the strict hygiene standards of Dubai’s ultra-luxury hospitality icons.'
    },
    {
      icon: ShieldCheck,
      title: 'TADBEER Certified & Fully Insured',
      desc: '100% legally sponsored staff with verified Dubai Police background checks and full AED 1,000,000 liability insurance.'
    },
    {
      icon: Leaf,
      title: 'Dubai Municipality Approved Eco-Chemicals',
      desc: 'Zero harsh bleach or toxic fumes. 100% safe for infants, pregnant mothers, delicate marble, and household pets.'
    },
    {
      icon: Zap,
      title: 'German Kärcher & Italian Klindex Gear',
      desc: 'Hospital-grade HEPA 13 vacuums, 160°C dry steam extraction, and high-speed diamond abrasive floor burnishers.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Staff Photography Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
              <img 
                src="/images/maid-service.jpg" 
                alt="Golden Home Professional Housekeeping Staff in Dubai" 
                className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-100 text-xs shadow-xl text-left">
                <div className="flex items-center gap-2 text-[#0b462f] font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>The Golden Standard</span>
                </div>
                <p className="text-slate-700">
                  Every crew arrives in pristine company uniform, verified photo ID badge, white gloves, and sanitized equipment.
                </p>
              </div>

              {/* Trust Badge Top */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-100 px-3 py-1.5 rounded-full text-[11px] font-bold text-emerald-800 flex items-center gap-1.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Vetted Full-Time Staff</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Breakdown (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-xs font-bold uppercase tracking-wider text-[#0b462f]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0b462f]" />
                The Dubai Difference
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Why Discerning Dubai Residents Choose <span className="text-[#0b462f]">Golden Home</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                We believe your private residence requires more than surface wiping. We provide true restorative care with hospitality pedigree.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b462f] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 text-[#0b462f]" />
                    </div>
                    <h4 className="font-serif font-bold text-sm text-slate-900">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Guarantee Strip */}
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-700 text-center sm:text-left">
                <span className="font-bold text-[#0b462f] block">100% Ejari Deposit Pass Guarantee:</span>
                If your landlord finds any cleaning deficiency, we re-clean within 24 hours free of charge.
              </div>
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] shadow-md transition whitespace-nowrap"
              >
                Experience 5-Star Clean
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
