import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/cleaningData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#0b462f]">
            <HelpCircle className="w-3.5 h-3.5 text-[#0b462f]" />
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Everything You Need <span className="text-[#0b462f]">To Know</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, transparent answers about our Dubai residential housekeeping and sanitization standards.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen 
                    ? 'bg-emerald-50/50 border-emerald-300 shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base"
                >
                  <span className={`${isOpen ? 'text-[#0b462f] font-bold' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-white bg-[#0b462f]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200 text-left">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Assistance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
              Have a custom request or high-rise penthouse?
            </h4>
            <p className="text-xs text-slate-600">
              Our Dubai concierge is ready 7 days a week to provide customized quotes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+971502116822"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#0b462f]" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/971502116822?text=Hello%20Golden%20Home%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0b462f] hover:bg-[#073221] shadow-sm transition flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#f5d77f]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
