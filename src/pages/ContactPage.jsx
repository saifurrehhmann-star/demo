import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MapPin, MessageSquare, Send } from 'lucide-react';
import { DUBAI_AREAS, SERVICES_LIST } from '../data/cleaningData';
import PageBanner from '../components/PageBanner';

const emptyForm = { name: '', phone: '', email: '', area: DUBAI_AREAS[0].name, service: SERVICES_LIST[0].title, message: '' };

export default function ContactPage() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Your enquiry could not be submitted. Please try again.');
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message || 'Unable to connect. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div className="pb-16 text-slate-800">
    <PageBanner bgImage="/images/banner-contact.jpg" badge="We’re here to help" title="Talk to" highlightText="Golden Home" breadcrumb="Contact" description="Ask about a cleaning service, share your requirements or request a booking." />
    <section className="py-12 sm:py-16"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-12 lg:px-8">
      <aside className="space-y-5"><div className="rounded-3xl bg-[#174b32] p-6 text-white sm:p-8"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-emerald-100"><MessageSquare className="h-5 w-5" /></span><h2 className="mt-5 font-serif text-2xl font-bold">Let’s talk about your space.</h2><p className="mt-3 text-sm leading-6 text-white/75">Send the team your property details, preferred timing and the service you have in mind. We can confirm scope and availability.</p><p className="mt-5 text-sm font-semibold text-emerald-100">Use the enquiry form to get started.</p></div>
        <div className="rounded-3xl border border-emerald-100 bg-[#f4f9f5] p-6"><div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-[#23834e]"><MapPin className="h-4 w-4" />Dubai area enquiry</div><h3 className="mt-3 font-serif text-xl font-bold text-[#173d2a]">Not sure if we cover your area?</h3><p className="mt-2 text-sm leading-6 text-slate-600">Choose your community in the form and ask us to confirm visit availability.</p><div className="mt-4 flex flex-wrap gap-2">{DUBAI_AREAS.slice(0, 6).map((area) => <span key={area.name} className="rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600">{area.name}</span>)}</div></div>
      </aside>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
        {submitted ? <div className="flex min-h-[360px] flex-col items-center justify-center text-center"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-[#23834e]"><CheckCircle2 className="h-8 w-8" /></span><h2 className="mt-5 font-serif text-2xl font-bold text-slate-900">Enquiry recorded</h2><p className="mt-2 max-w-md text-sm leading-6 text-slate-600">Thank you, {formData.name}. Your request is saved for this demo session. Business email or booking-system notifications are not connected yet.</p><button onClick={() => { setFormData(emptyForm); setSubmitted(false); }} className="mt-5 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white">Send another enquiry</button></div> : <form onSubmit={handleSubmit} className="space-y-4"><div className="mb-5"><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#23834e]">Enquiry form</span><h2 className="mt-2 font-serif text-2xl font-bold text-[#14271d] sm:text-3xl">How can we help?</h2><p className="mt-2 text-sm leading-6 text-slate-600">Fields marked with * are required. We’ll use these details to understand your request.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{[['name','Full name','text','Your name'],['phone','Phone number','tel','Your preferred contact number']].map(([key,label,type,placeholder]) => <label key={key} className="block text-xs font-bold text-slate-700">{label} *<input required type={type} placeholder={placeholder} value={formData[key]} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white" /></label>)}</div>
          <div className="grid gap-4 sm:grid-cols-2"><label className="block text-xs font-bold text-slate-700">Email address<input type="email" placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white" /></label><label className="block text-xs font-bold text-slate-700">Your area<select value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white">{DUBAI_AREAS.map((area) => <option key={area.name}>{area.name}</option>)}</select></label></div>
          <label className="block text-xs font-bold text-slate-700">Service you’re interested in<select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white">{SERVICES_LIST.map((service) => <option key={service.id}>{service.title}</option>)}</select></label>
          <label className="block text-xs font-bold text-slate-700">Property details or questions<textarea rows={4} placeholder="Share the rooms or items you need cleaned and your preferred date..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white" /></label>
          {submitError && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{submitError}</p>}<button disabled={isSubmitting} aria-busy={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#236541] disabled:cursor-wait disabled:opacity-70"><Send className="h-4 w-4" />{isSubmitting ? 'Sending…' : 'Send enquiry'}</button>
        </form>}
      </div>
    </div></section>
    <section className="pb-12 sm:pb-16" aria-labelledby="contact-map-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div><span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[.17em] text-[#23834e]"><MapPin className="h-3.5 w-3.5" />Dubai service area</span><h2 id="contact-map-title" className="mt-2 font-serif text-2xl font-bold text-[#14271d] sm:text-3xl">Find your area on the map</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Golden Home lists cleaning services across Dubai. Select your community in the enquiry form and contact us to confirm visit availability.</p></div>
          <a href="https://www.google.com/maps/search/?api=1&query=Dubai%2C%20United%20Arab%20Emirates" target="_blank" rel="noreferrer" className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-xs font-bold text-[#174b32] transition hover:bg-emerald-50 sm:self-auto">Open Google Maps <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-[#f3f8f4] shadow-sm">
          <iframe title="Map of Dubai, Golden Home service area" src="https://maps.google.com/maps?q=Dubai%2C%20United%20Arab%20Emirates&z=11&output=embed" className="h-[300px] w-full sm:h-[380px] lg:h-[430px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
        <p className="mt-3 text-xs text-slate-500">Map shows Dubai for service-area reference; it does not mark a walk-in office address.</p>
      </div>
    </section>
  </div>;
}
