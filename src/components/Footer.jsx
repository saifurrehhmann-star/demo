import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoldenLogo from './GoldenLogo';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0b462f] text-white/80">
      
      {/* Top Emerald CTA Banner */}
      <div className="bg-gradient-to-r from-[#06281a] via-[#0b462f] to-[#06281a] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner shadow-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f5d77f]">
              Cleaning Your Home Worries Away!
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready for 5-Star Home Cleanliness in Dubai?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              Book online in 60 seconds. Zero upfront deposit required. 100% satisfaction guarantee or we re-clean within 24 hours free.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#06281a] bg-[#f5d77f] hover:bg-white active:scale-95 transition-all shadow-lg shadow-black/20"
            >
              Book Service in 60s
            </button>
            <a
              href="https://wa.me/971502116822?text=Hello%20Golden%20Home%20Dubai%2C%20I%20would%20like%20to%20book%20a%20luxury%20home%20cleaning%20service."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/25 transition flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#f5d77f]" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="space-y-4">
            <GoldenLogo className="h-12" variant="dark" />
            <p className="text-xs leading-relaxed text-white/70">
              Dubai’s premier residential housekeeping service. Specializing exclusively in luxury villas, family penthouses, and holiday home turnovers.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-white/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f5d77f] flex-shrink-0 mt-0.5" />
                <span>Al Quoz Industrial 4 & Downtown Dubai, UAE</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f5d77f] flex-shrink-0" />
                <a href="tel:+971502116822" className="font-semibold transition hover:text-[#f5d77f]">
                  +971 50 211 6822 / +971 50 213 6022
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f5d77f] flex-shrink-0" />
                <a href="mailto:info@goldenhome.ae" className="transition hover:text-[#f5d77f]">
                  info@goldenhome.ae
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                <span>Mon – Sun : 08:00 AM – 08:00 PM (Daily)</span>
              </p>
            </div>
          </div>

          {/* Col 2: Residential Services */}
          <div className="space-y-3">
            <h4 className="border-b border-white/15 pb-2 font-serif text-sm font-bold uppercase tracking-wider text-[#f5d77f]">
              Residential Services
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/services" className="inline-block transition hover:translate-x-1 hover:text-[#f5d77f]">
                  🏰 Villa Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  🏢 Apartment Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  🔑 Move-In / Move-Out (Ejari Pass)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  🧹 5-Star Maid Service (Hourly)
                </Link>
              </li>
              <li>
                <Link to="/holiday-homes" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  🏖️ Holiday Homes & Airbnb Turnover
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  🛋️ Sofa & Carpet Steam Extraction
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="border-b border-white/15 pb-2 font-serif text-sm font-bold uppercase tracking-wider text-[#f5d77f]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="inline-block font-semibold text-emerald-200 transition hover:translate-x-1 hover:text-[#f5d77f]">
                  ⚡ Instant Cost Calculator
                </Link>
              </li>
              <li>
                <Link to="/transformations" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  Before & After Slider
                </Link>
              </li>
              <li>
                <Link to="/holiday-homes" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  Airbnb Superhost Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  About Our Dubai Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#f5d77f] hover:translate-x-1 inline-block transition">
                  Contact & Dispatch Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Trust */}
          <div className="space-y-3">
            <h4 className="border-b border-white/15 pb-2 font-serif text-sm font-bold uppercase tracking-wider text-[#f5d77f]">
              Dubai Newsletter
            </h4>
            <p className="text-xs text-white/70">
              Subscribe for seasonal maintenance guides, sandstorm recovery discounts, and exclusive Dubai resident promotions.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Thank you! You are now subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0b462f] shadow-sm"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#f5d77f] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#123b2a] shadow-sm transition hover:bg-[#ffe9a4]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}

            {/* Social Proof */}
            <div className="pt-2">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/60">
                Dubai Resident Trust:
              </span>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-100">
                <span className="rounded-md bg-white/10 px-2 py-1">✓ TADBEER Certified</span>
                <span className="rounded-md bg-white/10 px-2 py-1">✓ Dubai Police Vetted</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/60 md:flex-row">
          <div>
            © {new Date().getFullYear()} Golden Home Premium Cleaning Service LLC. All rights reserved. Registered in Dubai, UAE.
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-[11px] font-semibold text-white/70">Accepted UAE Payments:</span>
            <div className="flex items-center gap-1.5 font-bold text-[10px] text-slate-700">
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">Apple Pay</span>
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">Visa</span>
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">MasterCard</span>
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm">Tabby (4 Installments)</span>
              <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 shadow-sm">Cash on Delivery</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
