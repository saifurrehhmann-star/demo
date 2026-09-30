import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { SERVICES_LIST } from '../data/cleaningData';
import { servicePathFor } from '../data/servicePages';

export default function TransformationsPage() {
  return <div className="pb-16 text-slate-800"><PageBanner bgImage="/images/banner-transformations.jpg" badge="Golden Home services" title="Cleaning for" highlightText="everyday spaces" breadcrumb="Our Work" description="Explore the different types of home cleaning available from Golden Home." />
    <section className="py-12 sm:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 max-w-2xl"><span className="text-xs font-bold uppercase tracking-[.17em] text-[#23834e]">Service gallery</span><h2 className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">Choose the cleaning that fits your space.</h2><p className="mt-3 text-sm leading-6 text-slate-600">Images illustrate the kinds of spaces associated with each service. Contact our team to confirm the exact tasks and availability.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{SERVICES_LIST.map((service) => <Link key={service.id} to={servicePathFor(service.id)} className="group overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="h-56 overflow-hidden sm:h-64"><img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><div className="flex items-center justify-between gap-3 p-5"><div><span className="text-[10px] font-bold uppercase tracking-[.15em] text-[#23834e]">{service.tag}</span><h3 className="mt-1 font-serif text-xl font-bold text-[#173d2a]">{service.title}</h3></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#23834e]"><ArrowRight className="h-4 w-4" /></span></div></Link>)}</div></div></section>
  </div>;
}
