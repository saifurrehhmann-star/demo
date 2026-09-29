import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import PageBanner from '../components/PageBanner';

export default function TransformationsPage({ onOpenBooking }) {
  return (
    <div className="pb-20 bg-white text-slate-800">
      
      {/* Photo-Backed Luxury Banner */}
      <PageBanner
        bgImage="/images/banner-transformations.jpg"
        badge="Real Proof of Dubai Quality"
        title="Before & After"
        highlightText="Transformations"
        breadcrumb="Before & After"
        description="Drag the golden handle to reveal the dramatic results of our European 160°C steam extraction and 85-point luxury deep cleaning in actual Dubai residences."
      />

      {/* Interactive Slider Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider onOpenBooking={onOpenBooking} />
        </div>
      </section>

      {/* Comparison Gallery Cards */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Dubai Residential Case Studies
            </h2>
            <p className="text-sm text-slate-600">
              High-traffic areas restored to immaculate 5-star condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-[#0b462f]">📍 Marina Gate, Dubai Marina</span>
              <h3 className="font-serif text-lg font-bold text-slate-900">Upholstery & Fabric Sanitization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Extracted 3 years of embedded desert sand and watermarks from an Italian cream sectional sofa using 160°C dry steam extraction.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-700">
                ✓ Full stain removal + Scotchgard coating
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-[#0b462f]">📍 Signature Villa, Palm Jumeirah</span>
              <h3 className="font-serif text-lg font-bold text-slate-900">Chef’s Kitchen Deep Degreasing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dissolved heavy oil layers from extractor hood filters, restored grout line brightness, and sanitized food preparation counters.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-700">
                ✓ Food-safe Dubai Municipality certified chemicals
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-[#0b462f]">📍 Downtown Views, Downtown Dubai</span>
              <h3 className="font-serif text-lg font-bold text-slate-900">Move-Out Ejari Inspection Pass</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Removed calcium limescale from rain showers, scrubbed balcony sliding tracks, and restored paint scuff marks for 100% deposit return.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-700">
                ✓ AED 14,000 security deposit refunded in full
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] shadow-lg shadow-[#0b462f]/20 active:scale-95 transition-all"
            >
              Book Your Transformation Now
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
