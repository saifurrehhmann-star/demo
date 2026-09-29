import React, { useState } from 'react';
import { MessageSquare, Phone, X, Send } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const sendWhatsApp = (customText) => {
    const text = encodeURIComponent(customText || message || "Hello Golden Home Dubai, I need a quotation for luxury home cleaning.");
    window.open(`https://wa.me/971502116822?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-white border border-slate-200 shadow-2xl p-4 text-slate-800 animate-in slide-in-from-bottom duration-300">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#0b462f] flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div className="text-left">
                <h4 className="font-serif font-bold text-xs text-slate-900">Golden Home Concierge</h4>
                <span className="text-[10px] text-emerald-700 font-semibold">Live in Dubai • Instant Reply</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs space-y-2 text-slate-700 text-left">
            <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200 text-emerald-950">
              <p>Marhaba! 👋 How can we assist you with your Dubai residence today?</p>
            </div>

            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => sendWhatsApp("Hi, I want to book a Deep Cleaning for my Dubai apartment/villa.")}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-[#0b462f] text-[11px] font-semibold text-slate-700 border border-slate-200 transition flex items-center justify-between"
              >
                <span>✨ Book Deep Cleaning</span>
                <span>→</span>
              </button>
              <button
                onClick={() => sendWhatsApp("Hi, I need an Ejari Move-Out Handover inspection clean with 100% deposit guarantee.")}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-[#0b462f] text-[11px] font-semibold text-slate-700 border border-slate-200 transition flex items-center justify-between"
              >
                <span>🔑 Move-Out (Ejari Deposit Guarantee)</span>
                <span>→</span>
              </button>
              <button
                onClick={() => sendWhatsApp("Hi, I need Holiday Homes / Airbnb turnover cleaning in Dubai.")}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-[#0b462f] text-[11px] font-semibold text-slate-700 border border-slate-200 transition flex items-center justify-between"
              >
                <span>🏖️ Airbnb & Holiday Home Turnover</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Custom Message Input */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendWhatsApp(); }}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
            />
            <button
              onClick={() => sendWhatsApp()}
              className="p-2 rounded-xl bg-[#0b462f] text-white font-bold hover:bg-[#073221] transition shadow-sm"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-2">
        <a
          href="tel:+971502116822"
          className="hidden sm:flex items-center gap-2 px-3.5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-xl hover:border-emerald-600 transition"
          title="Call Dubai Office"
        >
          <Phone className="w-4 h-4 text-[#0b462f]" />
          <span>Call Concierge</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all border-2 border-white"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>

          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Concierge</span>
        </button>
      </div>

    </div>
  );
}
