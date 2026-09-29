import React from 'react';
import BookingCalculator from '../components/BookingCalculator';
import PageBanner from '../components/PageBanner';
import { Calculator, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function PricingPage({ onOpenBooking }) {
  return (
    <div className="pb-20 bg-white text-slate-800">
      
      {/* Photo-Backed Luxury Banner */}
      <PageBanner
        bgImage="/images/banner-pricing.jpg"
        badge="Transparent UAE Pricing • 5% VAT Included"
        title="Instant Dubai"
        highlightText="Cost Calculator"
        breadcrumb="Cost Calculator"
        description="Calculate your exact residential cleaning estimate in AED with zero hidden fees. Includes all materials, equipment, and UAE 5% VAT."
      />

      {/* Calculator Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingCalculator onOpenBooking={onOpenBooking} />
        </div>
      </section>

      {/* Pricing Guarantees */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <CheckCircle2 className="w-6 h-6 text-[#0b462f]" />
              <h4 className="font-bold text-slate-900 text-sm">No Upfront Payment</h4>
              <p className="text-xs text-slate-600">
                You only pay upon completion once you have personally inspected and approved the work.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#0b462f]" />
              <h4 className="font-bold text-slate-900 text-sm">Ejari Bond Guarantee</h4>
              <p className="text-xs text-slate-600">
                Move-out cleanings are guaranteed to satisfy landlord handover inspections or we re-clean free.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <Calculator className="w-6 h-6 text-[#0b462f]" />
              <h4 className="font-bold text-slate-900 text-sm">100% Price Lock</h4>
              <p className="text-xs text-slate-600">
                The price you see here is the exact price on your final tax invoice. Zero surprise fees on arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
