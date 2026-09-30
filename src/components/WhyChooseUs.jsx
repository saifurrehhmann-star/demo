import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ClipboardCheck, HeartHandshake, Home, Sparkles } from 'lucide-react';

const reasons = [
  { icon: Home, title: 'Home-focused options', text: 'Choose a service for a villa, apartment, move, holiday home or selected furnishings.' },
  { icon: ClipboardCheck, title: 'Scope discussed first', text: 'Tell us which rooms and tasks matter to you so the requested work can be discussed before booking.' },
  { icon: CalendarDays, title: 'Plan around your day', text: 'Share your preferred visit date and time and our team can confirm availability.' },
  { icon: HeartHandshake, title: 'Direct support', text: 'Questions or special requests? Contact the team before you schedule a visit.' },
];

export default function WhyChooseUs() {
  return <section className="overflow-hidden bg-[#f3f8f4] py-14 sm:py-20">
    <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:px-8">
      <div className="relative"><img src="/images/staff-team.jpg" alt="Home cleaning supplies and interior" loading="lazy" className="h-[280px] w-full rounded-3xl object-cover shadow-xl sm:h-[420px]" /><div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf6ef] text-[#23834e]"><Sparkles className="h-5 w-5" /></span><div><p className="text-xs font-extrabold text-[#173d2a]">Care, planned around home</p><p className="mt-1 text-[10px] text-slate-500">Tell us what matters on your visit</p></div></div></div>
      <div><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e] sm:text-xs">A simpler way to arrange a clean</span><h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#14271d] sm:text-4xl">The right service starts with listening.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Every home and visit is different. Share your priorities and timing with us, and we’ll help you choose from the services Golden Home offers.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">{reasons.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-emerald-100 bg-white p-4"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf6ef] text-[#23834e]"><Icon className="h-4 w-4" /></span><h3 className="mt-3 text-sm font-extrabold text-[#173d2a]">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{text}</p></article>)}</div>
        <Link to="/contact" className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#236541]">Talk to our team</Link>
      </div>
    </div>
  </section>;
}
