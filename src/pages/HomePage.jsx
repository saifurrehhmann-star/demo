import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, MessageSquare } from 'lucide-react';
import { SERVICES_LIST } from '../data/cleaningData';
import { servicePathFor } from '../data/servicePages';
import WhyChooseUs from '../components/WhyChooseUs';
import CoverageMap from '../components/CoverageMap';
import FaqSection from '../components/FaqSection';

const serviceCategories = [
  { title: 'Home Cleaning', copy: 'Cleaning options for apartments, villas and your everyday routine.', image: '/images/maid-service.jpg', href: '/services/maid-services' },
  { title: 'Deep Cleaning', copy: 'A detailed clean for the rooms and surfaces that need extra attention.', image: '/images/kitchen-clean.jpg', href: '/services/deep-cleaning' },
  { title: 'Furniture Cleaning', copy: 'Care options for sofas, carpets, mattresses and home furnishings.', image: '/images/sofa-after.jpg', href: '/services/furniture-cleaning' },
];

const heroSlides = [
  { eyebrow: 'A little more breathing room', title: <>A cleaner home.<br /><span className="text-emerald-300">A calmer day.</span></>, text: 'Thoughtful home cleaning for apartments, villas and the everyday moments in between.', image: '/images/maid-service.jpg', alt: 'Cleaner carefully cleaning a bright window', cta: 'Book a cleaning' },
  { eyebrow: 'Detailed care for your home', title: <>Make space for<br /><span className="text-emerald-300">what matters.</span></>, text: 'Choose the cleaning service that fits your rooms, your routine and your next fresh start.', image: '/images/kitchen-clean.jpg', alt: 'Freshly cleaned modern kitchen', cta: 'Explore services' },
  { eyebrow: 'Come home to clean', title: <>Fresh rooms.<br /><span className="text-emerald-300">More time for you.</span></>, text: 'From living spaces to furniture, find caring cleaning options for your Dubai home.', image: '/images/sofa-after.jpg', alt: 'Bright and freshly cleaned living room', cta: 'Plan your clean' },
];

export default function HomePage({ onOpenBooking }) {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);
  const moveSlide = (direction) => setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);

  return (
    <div className="pt-[72px] pb-0 text-slate-800 sm:pt-[104px]">
      <section aria-label="Featured cleaning services" className="relative isolate flex min-h-[590px] items-center overflow-hidden bg-[#102b1f] text-white sm:min-h-[620px] lg:min-h-[660px]">
        {heroSlides.map((slide, index) => <div key={slide.eyebrow} aria-hidden="true" className={`absolute inset-0 -z-10 transition-opacity duration-1000 motion-reduce:transition-none ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}><img src={slide.image} alt="" loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#071c13]/90 via-[#0d281b]/65 to-[#0b241a]/20" /></div>)}
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          {heroSlides.map((slide, index) => <div key={slide.eyebrow} aria-hidden={activeSlide !== index} inert={activeSlide !== index} className={`max-w-3xl transition-all duration-700 motion-reduce:transition-none ${activeSlide === index ? 'translate-y-0 opacity-100' : 'pointer-events-none absolute translate-y-3 opacity-0'}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-[#123d2b]/65 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-emerald-100 backdrop-blur sm:text-xs"><span className="h-2 w-2 rounded-full bg-emerald-300" />{slide.eyebrow}</span>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">{slide.title}</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-lg sm:leading-8">{slide.text}</p>
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row"><button onClick={() => onOpenBooking()} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#174b32] px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-[#236541]">{slide.cta}<ArrowRight className="h-4 w-4" /></button><Link to="/services" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/50 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">View all services</Link></div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/90"><span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-300" />Homes & villas</span><span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-300" />Holiday homes</span><span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-300" />Flexible bookings</span></div>
          </div>)}
        </div>
        <div className="absolute inset-x-5 bottom-6 flex items-center justify-between sm:inset-x-8 lg:inset-x-10"><div className="flex items-center gap-2" role="tablist" aria-label="Choose banner"><button type="button" onClick={() => moveSlide(-1)} aria-label="Previous banner" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white backdrop-blur transition hover:bg-white/20"><ArrowLeft className="h-4 w-4" /></button>{heroSlides.map((slide, index) => <button key={slide.eyebrow} type="button" role="tab" aria-label={`Show banner ${index + 1}`} aria-selected={activeSlide === index} onClick={() => setActiveSlide(index)} className={`h-2.5 rounded-full transition-all ${activeSlide === index ? 'w-8 bg-emerald-300' : 'w-2.5 bg-white/65 hover:bg-white'}`} />)}<button type="button" onClick={() => moveSlide(1)} aria-label="Next banner" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white backdrop-blur transition hover:bg-white/20"><ArrowRight className="h-4 w-4" /></button></div><span className="text-xs font-semibold tracking-[.15em] text-white/80">0{activeSlide + 1} / 03</span></div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:gap-16 lg:px-8">
          <div className="relative"><img src="/images/marble-clean.jpg" alt="Bright and carefully cleaned home interior" loading="lazy" className="h-[270px] w-full rounded-[1.5rem] object-cover shadow-xl sm:h-[390px] sm:rounded-[2rem]" /><div className="absolute -bottom-4 right-3 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-3 shadow-lg sm:bottom-5 sm:-right-5 sm:p-4"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf6ef] text-[#23834e]"><Check className="h-5 w-5" /></span><div><p className="text-xs font-extrabold text-[#173d2a]">A home-first approach</p><p className="mt-0.5 text-[10px] text-slate-500">Thoughtful care, room by room</p></div></div></div>
          <div className="pt-3 lg:pt-0"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Welcome to Golden Home</span><h2 className="mt-3 max-w-xl font-serif text-3xl font-bold leading-tight text-[#14271d] sm:text-4xl lg:text-[2.8rem]">More than a clean. <span className="text-[#23834e]">A home that feels good.</span></h2><p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Your home deserves attention, respect, and a clean that fits your routine. Our Dubai team offers home cleaning options for apartments, villas, move days, and holiday homes.</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{['A service shaped around your home', 'Clear booking and helpful support', 'Careful room-by-room attention', 'Options for one-time or regular visits'].map((item) => <p key={item} className="flex items-start gap-2 text-xs font-semibold leading-5 text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#23834e]" />{item}</p>)}</div><Link to="/about" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#236541]">Get to know us <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="bg-[#f3f8f4] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Explore our services</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">Cleaning for every part of home life</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Choose the kind of care you need and explore the available services.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{serviceCategories.map((category) => <Link key={category.title} to={category.href} className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"><div className="h-48 overflow-hidden sm:h-56"><img src={category.image} alt={category.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><div className="flex items-center justify-between gap-4 p-5"><div><h3 className="font-serif text-xl font-bold text-[#173d2a]">{category.title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{category.copy}</p></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#174b32] text-white transition group-hover:bg-[#29945a]"><ArrowRight className="h-4 w-4" /></span></div></Link>)}</div>
        </div>
      </section>

      <section className="bg-[#f3f8f4] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"><div className="max-w-2xl"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Cleaning services</span><h2 className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">Find the right clean for your home</h2><p className="mt-3 text-sm leading-6 text-slate-600">Practical cleaning options for your everyday routine and life’s bigger transitions.</p></div><Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#17613d]">All services <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{SERVICES_LIST.slice(0, 6).map((service, index) => <Link key={service.id} to={servicePathFor(service.id)} className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"><div className="relative h-44 overflow-hidden sm:h-52"><img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-[#17613d]">{service.tag}</span><span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#174b32] text-white transition group-hover:bg-[#29945a]"><ArrowRight className="h-4 w-4" /></span></div><div className="p-4 sm:p-5"><span className="text-[9px] font-extrabold uppercase tracking-[.15em] text-[#29945a]">0{index + 1} · Home care</span><h3 className="mt-1.5 font-serif text-lg font-bold text-[#173d2a] sm:text-xl">{service.title}</h3><p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{service.description}</p></div></Link>)}</div>
        </div>
      </section>

      <section className="group relative isolate overflow-hidden bg-gradient-to-r from-[#123d2a] via-[#174b32] to-[#20613e] py-14 text-white sm:py-20">
        <img src="/images/hero-penthouse.jpg" alt="" aria-hidden="true" loading="lazy" className="cta-banner-image absolute inset-0 -z-10 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#082117]/90 via-[#103a28]/75 to-[#0b261a]/55" />
        <div className="cta-banner-orb absolute -right-20 -top-36 -z-10 h-80 w-80 rounded-full border border-white/10 bg-white/[.04] sm:-right-10 sm:-top-28 sm:h-96 sm:w-96" />
        <div className="absolute -bottom-24 left-[38%] -z-10 h-56 w-56 rounded-full bg-emerald-300/[.07] blur-3xl transition duration-700 group-hover:bg-emerald-300/[.13]" />
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="max-w-2xl motion-safe:animate-[motion-enter_700ms_ease-out_both]"><span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-emerald-200 sm:text-xs"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />A fresh start is one booking away</span><h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Make a little more room for living.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-emerald-50/85 sm:text-base">Tell us what your home needs. We’ll help you find a suitable cleaning service.</p></div>
          <button onClick={() => onOpenBooking()} className="group/button inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-[#174b32] shadow-[0_10px_30px_-12px_rgba(0,0,0,.45)] transition duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200">Book your clean <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" /></button>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-8">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-3 rounded-full bg-[#e9f4ec] sm:inset-0" />
            <div className="absolute -inset-3 -z-0 rounded-full border border-emerald-100 sm:-inset-5" />
            <img src="/images/maid-service.jpg" alt="Cleaner carefully wiping a home window" loading="lazy" className="relative aspect-square w-full rounded-full border-[7px] border-white object-cover object-center shadow-[0_24px_65px_-30px_rgba(10,55,30,.55)] sm:border-[10px]" />
            <div className="absolute bottom-2 right-1 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#29945a] text-white shadow-lg sm:bottom-5 sm:right-0 sm:h-16 sm:w-16"><CheckCircle2 className="h-7 w-7" /></div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs"><span className="h-2 w-2 rounded-full bg-[#39b879]" />Cleaning options for your home</span>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight text-[#14271d] sm:text-4xl lg:text-[2.8rem]">Your perfect cleaning service starts with what you need.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Every home and visit is different. Tell us about your rooms, furniture and preferred schedule, and we can help you choose from the cleaning services listed by Golden Home.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">{[
              { title: 'Regular home cleaning', href: '/services/maid-services' },
              { title: 'Deep cleaning', href: '/services/deep-cleaning' },
              { title: 'Furniture cleaning', href: '/services/furniture-cleaning' },
              { title: 'Holiday home cleaning', href: '/holiday-homes' },
            ].map((item) => <Link key={item.title} to={item.href} className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-emerald-100 bg-[#f8fbf8] px-4 py-3 text-sm font-bold text-[#173d2a] transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-sm"><span className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#29945a]" />{item.title}</span><ArrowRight className="h-4 w-4 shrink-0 text-[#23834e] transition-transform group-hover:translate-x-1" /></Link>)}</div>
            <div className="mt-6 flex flex-col gap-3 min-[430px]:flex-row"><button onClick={() => onOpenBooking()} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#236541]">Ask about a cleaning visit <ArrowRight className="h-4 w-4" /></button><Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-emerald-200 px-5 py-3 text-sm font-bold text-[#174b32] transition hover:bg-emerald-50">Contact our team</Link></div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <section className="bg-white py-12 sm:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col gap-5 rounded-3xl border border-emerald-100 bg-[#f3f8f4] p-6 sm:p-8 md:flex-row md:items-center md:justify-between"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#23834e]"><MessageSquare className="h-5 w-5" /></span><div><p className="text-[10px] font-extrabold uppercase tracking-[.17em] text-[#23834e]">Your feedback</p><h2 className="mt-1 font-serif text-xl font-bold text-[#173d2a] sm:text-2xl">How can we help make your home feel better?</h2><p className="mt-2 text-sm leading-6 text-slate-600">Tell us what you need, ask a question or share feedback about your visit.</p></div></div><Link to="/contact" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#236541]">Contact our team <ArrowRight className="h-4 w-4" /></Link></div></div></section>
      <CoverageMap onOpenBooking={onOpenBooking} />
      <FaqSection />

    </div>
  );
}
