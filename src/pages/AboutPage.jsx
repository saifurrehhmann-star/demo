import React from 'react';
import { Award, ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import { TRUST_COUNTERS } from '../data/cleaningData';
import PageBanner from '../components/PageBanner';

export default function AboutPage({ onOpenBooking }) {
  const pillars = [
    {
      icon: Award,
      title: '5-Star Hotel Housekeeping Protocol',
      desc: 'Our supervisors and team leaders are trained by former luxury hotel executive housekeepers, ensuring hospital-grade sanitization and precision bed making.'
    },
    {
      icon: ShieldCheck,
      title: '100% TADBEER Certified & Police Checked',
      desc: 'Every team member is legally sponsored under our UAE company, vetted by Dubai Police for security clearance, and covered by AED 1,000,000 liability insurance.'
    },
    {
      icon: Leaf,
      title: 'Dubai Municipality Approved Eco-Chemicals',
      desc: 'We never use harsh industrial acids or cheap bleach. Our non-toxic, child-safe, and pet-friendly solutions protect your health and high-end marble surfaces.'
    },
    {
      icon: HeartHandshake,
      title: '24-Hour Free Re-Clean Guarantee',
      desc: 'Your satisfaction is our ultimate benchmark. If any corner fails to satisfy your inspection, we send our supervisor to re-clean that area free within 24 hours.'
    }
  ];

  return (
    <div className="pb-20 bg-white text-slate-800">
      
      <PageBanner bgImage="/images/banner-about.jpg" badge="Our Story & Values" title="About" highlightText="Golden Home Dubai" breadcrumb="About Us" description="Setting the gold standard in residential cleaning for Dubai’s finest homes, luxury villas, and holiday apartments." />
      {/* Story & Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/staff-team.jpg" 
                  alt="Golden Home Professional Housekeeping Team" 
                  className="w-full h-[480px] object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b462f] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                100% Residential Focus
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                We Specialize in Homes, Not Offices
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Golden Home was founded with a singular purpose: to bring true luxury hotel-standard housekeeping directly into Dubai’s private residences. We recognized that general cleaning agencies were mixing commercial, factory, and residential jobs using the same harsh chemicals.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Dubai’s luxury properties feature sensitive Italian Statuario marble, imported oak carpentry, and delicate designer upholstery. These finishes demand specialized tools: German Kärcher 160°C dry steam machines, HEPA 13 dust-mite vacuums, and pH-neutral botanical cleaners.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] shadow-lg shadow-[#0b462f]/20 transition"
                >
                  Experience The Golden Difference
                </button>
              </div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            {TRUST_COUNTERS.map((item, idx) => (
              <div key={idx} className="p-2">
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0b462f]">
                  {item.count}
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Why Dubai Homeowners Trust Us
            </h2>
            <p className="text-sm text-slate-600">
              Our 4 foundational pillars ensure uncompromised quality on every single visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0b462f] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
