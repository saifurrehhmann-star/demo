import React from 'react';
import { ArrowRight, Check, HeartHandshake, Home, Leaf, MessageCircle, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const values = [
  { icon: Home, title: 'Respect for your home', desc: 'We treat your rooms and belongings with care, and welcome notes about delicate surfaces or items.' },
  { icon: MessageCircle, title: 'Clear communication', desc: 'Tell us what you need; we can discuss the requested tasks, timing and visit details before confirming.' },
  { icon: Sparkles, title: 'Attention to detail', desc: 'Share your priorities so the cleaning visit can focus on the rooms and areas that matter to you.' },
  { icon: HeartHandshake, title: 'Helpful service', desc: 'Our listed home cleaning options cover different properties, routines and household needs.' },
];

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="bg-white pb-16 text-slate-800 sm:pb-20">
      <PageBanner bgImage="/images/banner-about.jpg" badge="About Golden Home" title="Home cleaning in" highlightText="Dubai" breadcrumb="About Us" description="Learn about our home cleaning services and the ways you can arrange a visit." />

      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div className="absolute -inset-2 -rotate-2 rounded-[2rem] bg-[#dcebe0] sm:-inset-3" />
            <div className="relative overflow-hidden rounded-[1.7rem] border-4 border-white shadow-xl sm:rounded-[2rem]">
              <img src="/images/maid-service.jpg" alt="Cleaner carefully washing a home window" loading="lazy" className="h-[300px] w-full object-cover sm:h-[430px] lg:h-[490px]" />
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-lg backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf6ef] text-[#23834e]"><Check className="h-5 w-5" /></span>
                <div><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#23834e]">A home-first approach</p><p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">Care planned around the details you share</p></div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#17613d] sm:text-xs"><Leaf className="h-3.5 w-3.5" />Welcome to Golden Home</span>
            <h2 className="mt-5 max-w-xl font-serif text-3xl font-bold leading-tight text-[#14271d] sm:text-4xl lg:text-[2.8rem]">A thoughtful cleaning service for your home.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">Golden Home offers cleaning options in Dubai for apartments, villas, move-in and move-out visits, holiday homes, and selected household furnishings.</p>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Every property has its own priorities. Tell us which rooms or items need attention, mention any delicate surfaces, and share your preferred schedule so we can discuss a suitable service with you.</p>
            <div className="mt-6 flex flex-col gap-3 min-[430px]:flex-row">
              <button onClick={() => onOpenBooking()} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#236541]">Ask about a cleaning visit <ArrowRight className="h-4 w-4" /></button>
              <Link to="/services" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-emerald-200 px-5 py-3 text-sm font-bold text-[#174b32] transition hover:bg-emerald-50">Explore services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f8f4] py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl sm:mb-10"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Our purpose</span><h2 className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">What guides our service</h2><p className="mt-3 text-sm leading-6 text-slate-600">A clear purpose for every visit, from the first enquiry to the cleaning details you share.</p></div>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6ef] text-[#23834e]"><Target className="h-6 w-6" /></span><h3 className="mt-5 font-serif text-2xl font-bold text-[#173d2a]">Our Mission</h3><p className="mt-3 text-sm leading-7 text-slate-600">To make it easier for households to find a suitable cleaning service, explain what matters in their space, and arrange a visit with clear expectations.</p></article>
            <article className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6ef] text-[#23834e]"><Sparkles className="h-6 w-6" /></span><h3 className="mt-5 font-serif text-2xl font-bold text-[#173d2a]">Our Vision</h3><p className="mt-3 text-sm leading-7 text-slate-600">To be a dependable home cleaning choice in Dubai, known for helpful communication and care for the homes we are asked to clean.</p></article>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Cleaning for home life</span><h2 className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">Care for the spaces you use every day</h2><p className="mt-3 text-sm leading-6 text-slate-600">Explore the home cleaning options available through Golden Home.</p></div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#17613d]">All services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Home cleaning', text: 'Options for apartments and villas, planned around the rooms you want cleaned.', image: '/images/maid-service.jpg', href: '/services/maid-services' },
              { title: 'Detailed cleaning', text: 'Ask about a more detailed clean for kitchens and other areas of your home.', image: '/images/kitchen-clean.jpg', href: '/services/deep-cleaning' },
              { title: 'Furniture care', text: 'Explore available options for sofas and selected household furnishings.', image: '/images/sofa-after.jpg', href: '/services/furniture-cleaning' },
            ].map((item) => <Link key={item.title} to={item.href} className="group overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-52 overflow-hidden sm:h-60"><img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#10231b]/70 to-transparent" /><span className="absolute bottom-4 left-4 text-xs font-extrabold uppercase tracking-[.14em] text-white">Golden Home services</span></div><div className="flex items-center justify-between gap-4 p-5"><div><h3 className="font-serif text-xl font-bold text-[#173d2a]">{item.title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{item.text}</p></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#174b32] text-white transition group-hover:bg-[#29945a]"><ArrowRight className="h-4 w-4" /></span></div></Link>)}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Our core values</span><h2 className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">The care behind every visit</h2><p className="mt-3 text-sm leading-6 text-slate-600">Simple principles that shape how we discuss and plan your cleaning request.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{values.map(({ icon: Icon, title, desc }) => <article key={title} className="rounded-2xl border border-emerald-100 bg-[#fbfdfb] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl sm:p-6"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f3eb] text-[#23834e]"><Icon className="h-5 w-5" /></span><h3 className="mt-4 font-serif text-lg font-bold text-[#173d2a]">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">{desc}</p></article>)}</div>
        </div>
      </section>
    </div>
  );
}
