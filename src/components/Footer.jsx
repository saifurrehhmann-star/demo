import React from 'react';
import { Link } from 'react-router-dom';
import GoldenLogo from './GoldenLogo';
import { Clock, MapPin, MessageSquare } from 'lucide-react';
import { SERVICE_PAGES, servicePathFor } from '../data/servicePages';

const quickLinks = [
  { to: '/about', label: 'About us' }, { to: '/holiday-homes', label: 'Holiday homes' },
  { to: '/calculator', label: 'Cost calculator' }, { to: '/blog', label: 'Cleaning guides' },
  { to: '/faq', label: 'FAQs' }, { to: '/areas', label: 'Areas' }, { to: '/contact', label: 'Contact' },
];
const currentYear = new Date().getFullYear();

export default function Footer({ onOpenBooking }) {
  return <footer className="mt-auto bg-[#0b462f] text-white">
    <div className="bg-[#123f2b] px-4 py-9 sm:px-6 sm:py-11 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-emerald-200">A fresh start for your home</p><h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">Tell us what your space needs.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/75">Ask about a service or request a booking with Golden Home.</p></div><div className="flex flex-col gap-2 min-[420px]:flex-row"><button onClick={() => onOpenBooking()} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#29945a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#35a969]">Request a booking</button><Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"><MessageSquare className="h-4 w-4" />Send an enquiry</Link></div></div></div>
    <div className="mx-auto grid max-w-7xl gap-9 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.2fr] lg:gap-8 lg:px-8 lg:py-14">
      <div><GoldenLogo className="h-12" variant="dark" /><p className="mt-4 max-w-sm text-sm leading-6 text-white/70">Home cleaning services in Dubai. Explore our service options and contact the team to discuss the right fit for your property.</p></div>
      <div><h3 className="mb-4 text-xs font-extrabold uppercase tracking-[.16em] text-[#f5c84c]">Services</h3><ul className="space-y-2.5">{SERVICE_PAGES.map((service) => <li key={service.slug}><Link to={servicePathFor(service.slug)} className="text-sm text-white/75 transition hover:text-white">{service.title}</Link></li>)}<li><Link to="/holiday-homes" className="text-sm text-white/75 transition hover:text-white">Holiday Home Cleaning</Link></li></ul></div>
      <div><h3 className="mb-4 text-xs font-extrabold uppercase tracking-[.16em] text-[#f5c84c]">Explore</h3><ul className="space-y-2.5">{quickLinks.map(({ to, label }) => <li key={to}><Link to={to} className="text-sm text-white/75 transition hover:text-white">{label}</Link></li>)}</ul></div>
      <div><h3 className="mb-4 text-xs font-extrabold uppercase tracking-[.16em] text-[#f5c84c]">Contact</h3><ul className="space-y-3 text-sm text-white/75"><li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" /><span>Dubai, United Arab Emirates</span></li><li className="flex items-center gap-2.5"><Clock className="h-4 w-4 shrink-0 text-emerald-200" /><span>Availability confirmed on enquiry</span></li><li><Link to="/contact" className="inline-flex items-center gap-2 text-white underline decoration-white/30 underline-offset-4 hover:text-emerald-200"><MessageSquare className="h-4 w-4 text-emerald-200" />Open the enquiry form</Link></li></ul></div>
    </div>
    <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-[11px] text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><span>© {currentYear} Golden Home. All rights reserved.</span><Link to="/contact" className="transition hover:text-white">Contact</Link></div></div>
  </footer>;
}
