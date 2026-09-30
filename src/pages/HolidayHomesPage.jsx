import React from 'react';
import { ArrowRight, CalendarDays, CheckCircle2, KeyRound, MapPin, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DUBAI_AREAS } from '../data/cleaningData';
import PageBanner from '../components/PageBanner';

const services = [
  { title: 'General cleaning', text: 'Discuss regular cleaning for the rooms and areas you want prepared between guest visits.', image: '/images/holiday-homes.jpg' },
  { title: 'Deep cleaning', text: 'Ask about a more detailed clean for a property that needs extra attention.', image: '/images/kitchen-clean.jpg' },
  { title: 'Kitchen and bathrooms', text: 'Share the kitchen and bathroom tasks you would like included in the visit.', image: '/images/kitchen-detail.jpg' },
  { title: 'Laundry and linen', text: 'Ask whether laundry, fresh linen or towel changes can be included in your requested visit.', image: '/images/maid-service.jpg' },
  { title: 'Check-in and check-out', text: 'Share guest arrival and departure times so the team can discuss turnover timing and availability.', image: '/images/move-in-out.jpg' },
  { title: 'Guest amenities', text: 'Mention toiletries or guest supplies in your enquiry and confirm availability with the team.', image: '/images/holiday-homes.jpg' },
];

const planningDetails = [
  { icon: CheckCircle2, title: 'Agree on the scope', copy: 'List the rooms and cleaning tasks you want included before the visit is confirmed.' },
  { icon: CalendarDays, title: 'Coordinate turnover timing', copy: 'Share your check-out, check-in and preferred cleaning times so availability can be checked.' },
  { icon: KeyRound, title: 'Arrange property access', copy: 'Discuss access instructions with the team before the scheduled visit.' },
  { icon: MessageSquare, title: 'Ask about extras', copy: 'Mention linen, laundry or guest supplies in your enquiry so the team can confirm what is available.' },
];

const questions = [
  { q: 'What does holiday home cleaning include?', a: 'The cleaning scope depends on your property and request. Tell us which rooms, surfaces and tasks you need so the team can confirm the service details.' },
  { q: 'Can I request cleaning between guest stays?', a: 'Yes, you can share your turnover timing and preferred cleaning date. The team will confirm availability before the visit.' },
  { q: 'Do you clean apartments and villas?', a: 'Golden Home lists cleaning options for apartments and villas. Share your property type and the rooms that need attention.' },
  { q: 'Can I request laundry or linen changes?', a: 'Mention laundry or linen changes in your enquiry. The team can confirm whether those tasks are available for your requested visit.' },
  { q: 'How do I get a price for my property?', a: 'Send the property type, size, requested rooms or tasks, and preferred timing. The team can review the scope and confirm a quote.' },
  { q: 'Which areas of Dubai can I ask about?', a: 'You can select your community in the contact form or booking request. The team will confirm service availability for your location.' },
];

export default function HolidayHomesPage({ onOpenBooking }) {
  const requestHolidayHomeCleaning = () => onOpenBooking({ serviceType: 'holiday-homes' });

  return (
    <div className="pb-12 text-slate-800 sm:pb-16">
      <PageBanner bgImage="/images/banner-holiday.jpg" badge="Holiday home cleaning" title="A fresh welcome for" highlightText="every stay" breadcrumb="Holiday Homes" description="Discuss cleaning for your Dubai holiday home, short-stay apartment or vacation property.">
        <div className="flex flex-wrap justify-center gap-3 pt-3"><button onClick={requestHolidayHomeCleaning} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#29945a] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#197543]">Request a booking <ArrowRight className="h-4 w-4" /></button><Link to="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"><MessageSquare className="h-4 w-4" />Ask a question</Link></div>
      </PageBanner>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-lg"><img src="/images/holiday-homes.jpg" alt="Bright Dubai holiday-home interior" loading="lazy" className="h-[270px] w-full object-cover sm:h-[410px]" /></div>
          <div><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">For hosts and property managers</span><h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#14271d] sm:text-4xl">Tell us how you prepare your property between stays.</h2><p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Each holiday home has its own schedule, access arrangements and list of tasks. Share what needs attention and we can discuss a suitable cleaning visit with you.</p><ul className="mt-5 space-y-3">{['Apartment and villa cleaning options', 'Turnover timing discussed before booking', 'Requested rooms and tasks confirmed with you'].map((item) => <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#29945a]" />{item}</li>)}</ul><button onClick={requestHolidayHomeCleaning} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#236541]">Discuss your requirements <ArrowRight className="h-4 w-4" /></button></div>
        </div>
      </section>

      <section className="bg-[#f3f8f4] py-12 sm:py-16" aria-labelledby="holiday-services-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Holiday home services</span><h2 id="holiday-services-title" className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">Cleaning for the spaces guests use</h2><p className="mt-3 text-sm leading-6 text-slate-600">Select an area to include in your request. Exact tasks are confirmed with the team before a visit.</p></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => <article key={service.title} className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl"><div className="h-44 overflow-hidden sm:h-48"><img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[.15em] text-[#23834e]"><Sparkles className="h-3 w-3" />Cleaning option</span><h3 className="mt-2 font-serif text-xl font-bold text-[#173d2a]">{service.title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{service.text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div className="max-w-2xl"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Choose your property type</span><h2 className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">Request a quote for your home</h2><p className="mt-3 text-sm leading-6 text-slate-600">We confirm the quote after reviewing the property details, requested tasks and timing.</p></div><span className="text-xs font-semibold text-slate-500">No rates are shown until confirmed.</span></div>
          <div className="grid gap-5 md:grid-cols-2">
            {[{ title: 'Holiday apartment', image: '/images/apartment-cleaning.jpg', text: 'Share the apartment size, bedrooms and the areas you want ready for your next guests.' }, { title: 'Holiday villa', image: '/images/villa-cleaning.jpg', text: 'Tell us about the rooms, shared spaces and any accessible areas to include in the visit.' }].map((property) => <article key={property.title} className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm"><div className="grid sm:grid-cols-[.85fr_1.15fr]"><img src={property.image} alt={property.title} loading="lazy" className="h-48 w-full object-cover sm:h-full sm:min-h-56" /><div className="flex flex-col items-start justify-center p-5 sm:p-6"><span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-[#23834e]">Tailored quote</span><h3 className="mt-2 font-serif text-xl font-bold text-[#173d2a]">{property.title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{property.text}</p><button onClick={requestHolidayHomeCleaning} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-xl bg-[#174b32] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#236541]">Request a quote <ArrowRight className="h-4 w-4" /></button></div></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f8f4] py-12 sm:py-16 lg:py-20" aria-labelledby="holiday-importance-title">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="order-2 lg:order-1"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">A welcoming space for every guest</span><h2 id="holiday-importance-title" className="mt-2 font-serif text-3xl font-bold leading-tight text-[#14271d] sm:text-4xl">Why plan cleaning between holiday stays?</h2><p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">A clean and prepared property helps create a comfortable first impression for arriving guests. Planning the rooms, requested tasks and turnover timing in advance also helps everyone understand what needs to be ready.</p><p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">Every property and booking schedule is different. Share your priorities with Golden Home so the requested scope and available timing can be discussed before you confirm a visit.</p><button onClick={requestHolidayHomeCleaning} className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#236541]">Discuss your property <ArrowRight className="h-4 w-4" /></button></div>
          <div className="order-1 overflow-hidden rounded-3xl shadow-lg lg:order-2"><img src="/images/banner-holiday.jpg" alt="Holiday home prepared for a guest stay" loading="lazy" className="h-[260px] w-full object-cover sm:h-[360px]" /></div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#174b32] py-14 text-white sm:py-20">
        <img src="/images/banner-holiday.jpg" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#082117]/90 via-[#103a28]/80 to-[#0b261a]/55" />
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><div className="max-w-2xl"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-emerald-200 sm:text-xs">A comfortable stay starts with a cared-for space</span><h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">Make the next arrival feel welcoming.</h2><p className="mt-3 text-sm leading-6 text-white/80">Coordinate your property details and preferred turnover timing with the Golden Home team.</p></div><button onClick={requestHolidayHomeCleaning} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#174b32] transition hover:-translate-y-0.5 hover:bg-emerald-50">Plan a cleaning visit <ArrowRight className="h-4 w-4" /></button></div>
      </section>

      <section className="bg-white py-12 sm:py-16" aria-labelledby="holiday-benefits-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Plan a smoother turnover</span><h2 id="holiday-benefits-title" className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">Helpful details to arrange before a visit</h2><p className="mt-3 text-sm leading-6 text-slate-600">A little planning helps the team understand your property and the work you are requesting.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{planningDetails.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-2xl border border-emerald-100 bg-[#f8fbf8] p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f3eb] text-[#23834e]"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-extrabold text-[#173d2a]">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#f3f8f4] py-12 sm:py-16 lg:py-20" aria-labelledby="holiday-areas-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-9"><span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.17em] text-[#23834e] sm:text-xs"><MapPin className="h-4 w-4" />Dubai service areas</span><h2 id="holiday-areas-title" className="mt-2 font-serif text-3xl font-bold leading-tight text-[#14271d] sm:text-4xl">Ask about your community</h2><p className="mt-3 text-sm leading-6 text-slate-600">Choose your area when you enquire. The team can confirm availability for your property.</p></div>
          <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-100 bg-white p-4 shadow-sm sm:p-6"><div className="grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2 lg:grid-cols-3">{DUBAI_AREAS.map((area) => <div key={area.name} className="flex min-h-12 items-center gap-2.5 rounded-xl border border-emerald-100 bg-[#fbfdfb] px-3.5 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 sm:text-sm"><MapPin className="h-4 w-4 shrink-0 text-[#29945a]" />{area.name}</div>)}</div></div>
          <div className="mt-6 flex justify-center"><Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#236541]">Check your area <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="holiday-faq-title">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="mb-7 text-center"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">Holiday home FAQs</span><h2 id="holiday-faq-title" className="mt-2 font-serif text-3xl font-bold text-[#14271d] sm:text-4xl">Questions from hosts</h2></div><div className="space-y-3">{questions.map(({ q, a }) => <details key={q} className="group rounded-2xl border border-emerald-100 bg-white p-4 open:bg-[#f8fbf8] sm:p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#173d2a] marker:hidden">{q}<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f3eb] text-[#23834e] transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-3 pr-8 text-sm leading-6 text-slate-600">{a}</p></details>)}</div></div>
      </section>
    </div>
  );
}
