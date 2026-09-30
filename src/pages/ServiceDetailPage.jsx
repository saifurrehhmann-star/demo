import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import FaqSection from '../components/FaqSection';
import { SERVICE_PAGES } from '../data/servicePages';

export default function ServiceDetailPage({ onOpenBooking }) {
  const { slug } = useParams();
  const service = SERVICE_PAGES.find((item) => item.slug === slug);

  if (!service) return <div className="mx-auto max-w-3xl px-4 py-32 text-center"><h1 className="text-3xl font-bold">Service not found</h1><Link to="/services" className="mt-5 inline-flex text-emerald-700">Browse all services</Link></div>;

  const related = SERVICE_PAGES.filter((item) => item.group === service.group && item.slug !== slug).slice(0, 3);
  const openBooking = () => onOpenBooking({ serviceType: service.slug });

  return <div className="pb-20 text-slate-800">
    <PageBanner bgImage={service.image} badge={`${service.group} · Dubai`} title={service.title} highlightText="Dubai" breadcrumb={service.title} description={service.intro}>
      <div className="flex flex-wrap justify-center gap-3 pt-3">
        <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-xl bg-[#29945a] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#197543]"><Sparkles className="h-4 w-4" />Book this service</button>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"><MessageSquare className="h-4 w-4" />Ask a question</Link>
      </div>
    </PageBanner>

    <section className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] shadow-xl"><img src={service.image} alt={service.title} loading="lazy" className="h-72 w-full object-cover sm:h-[420px]" /></div>
        <div className="space-y-5">
          <span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">A cleaner, more comfortable space</span>
          <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">Cleaning planned around your space</h2>
          <p className="leading-7 text-slate-600">Tell us about the property, the areas you want cleaned and your preferred schedule. Our team can help you choose a suitable service and confirm the scope before your visit.</p>
          <ul className="space-y-3 pt-2">
            {service.scope.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{item}</li>)}
          </ul>
          <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-xl bg-[#29945a] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#197543]">Request a booking <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>

    <section className="bg-white py-12 sm:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-7 max-w-2xl"><span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Booking process</span><h2 className="mt-2 font-serif text-3xl font-bold text-slate-900">Plan your cleaning visit</h2><p className="mt-3 text-sm leading-6 text-slate-600">Share a few details so our team can confirm the requested service and availability.</p></div><div className="grid gap-4 sm:grid-cols-3">{[{ n: '01', title: 'Tell us about your space', text: 'Choose the property type and share the rooms or items you want cleaned.' }, { n: '02', title: 'Confirm the details', text: 'Discuss the service scope, preferred timing and any access notes with our team.' }, { n: '03', title: 'Request your visit', text: 'Send your booking request and wait for our team to confirm availability.' }].map((step) => <article key={step.n} className="rounded-2xl border border-emerald-100 bg-[#f7fbf8] p-5"><span className="font-serif text-2xl font-bold text-[#29945a]">{step.n}</span><h3 className="mt-2 text-sm font-extrabold text-[#173d2a]">{step.title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{step.text}</p></article>)}</div><button onClick={openBooking} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#236541]">Ask about this service <ArrowRight className="h-4 w-4" /></button></div></section>

    {related.length > 0 && <section className="border-y border-emerald-100 bg-[#f3faf5] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Explore more</span><h2 className="mt-2 font-serif text-3xl font-bold text-slate-900">Related cleaning services</h2></div><Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800">All services <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => <Link key={item.slug} to={`/services/${item.slug}`} className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><img src={item.image} alt="" loading="lazy" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="p-5"><h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-emerald-800">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.intro}</p></div></Link>)}
        </div>
      </div>
    </section>}
    <FaqSection />
  </div>;
}
