import React from 'react';
import BookingCalculator from '../components/BookingCalculator';
import PageBanner from '../components/PageBanner';
import { Calculator, ClipboardList, MessageSquare } from 'lucide-react';

export default function PricingPage({ onOpenBooking }) {
  return <div className="pb-16 bg-white text-slate-800">
    <PageBanner bgImage="/images/banner-pricing.jpg" badge="Plan a cleaning visit" title="Cleaning cost" highlightText="estimate" breadcrumb="Cost Calculator" description="Explore an indicative estimate. Your service scope and final quote are confirmed with our team." />
    <section className="py-10 sm:py-14"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><BookingCalculator onOpenBooking={onOpenBooking} /></div></section>
    <section className="border-t border-emerald-100 bg-[#f3f8f4] py-12"><div className="mx-auto grid max-w-5xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">{[{ icon: ClipboardList, title: 'Share your requirements', text: 'Property size, selected service and requested tasks help us understand the visit you need.' }, { icon: MessageSquare, title: 'Confirm the scope', text: 'Contact our team to check which tasks are included in your requested service.' }, { icon: Calculator, title: 'Confirm your quote', text: 'Calculator results are indicative until the service details and availability are confirmed.' }].map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-emerald-100 bg-white p-5"><Icon className="h-6 w-6 text-[#23834e]" /><h2 className="mt-3 text-sm font-extrabold text-[#173d2a]">{title}</h2><p className="mt-2 text-xs leading-5 text-slate-600">{text}</p></article>)}</div></section>
  </div>;
}
