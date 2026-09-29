import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GoldenLogo from './GoldenLogo';
import { MessageSquare, Sparkles, Menu, X, ChevronDown } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/holiday-homes', label: 'Holiday Homes', badge: 'Airbnb' },
  { to: '/calculator', label: 'Cost Calculator', badge: 'Live' },
  { to: '/transformations', label: 'Before & After' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  const activeClass = (path) => location.pathname === path
    ? 'text-[#f5d77f] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[#f5d77f]'
    : 'text-white/90 hover:text-[#f5d77f]';

  return (
    <header className="motion-navbar fixed inset-x-0 top-0 z-50">
      <nav className="border-b border-white/10 bg-[#0b462f] shadow-md shadow-[#06281a]/20 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 xl:px-8">
          <GoldenLogo className="h-auto shrink-0" variant="dark" />

          <div className="hidden items-center gap-3 xl:flex 2xl:gap-4">
            <Link to="/" onClick={() => setServicesDropdown(false)} className={`relative whitespace-nowrap py-2 text-[13px] font-semibold transition-colors ${activeClass('/')}`}>Home</Link>
            <div className="relative" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
              <button type="button" aria-expanded={servicesDropdown} onClick={() => setServicesDropdown((open) => !open)} className={`relative flex items-center gap-1 whitespace-nowrap py-2 text-[13px] font-semibold transition-colors ${location.pathname === '/services' ? 'text-[#f5d77f]' : 'text-white/90 hover:text-[#f5d77f]'}`}>
                Services <ChevronDown className="h-3.5 w-3.5 text-white/70" />
              </button>
              {servicesDropdown && <div className="absolute left-0 top-full z-20 w-64 rounded-xl border border-white/10 bg-[#0b462f] p-2 shadow-xl">
                {['Villa Deep Cleaning', 'Apartment Deep Cleaning', 'Move-In / Move-Out', 'Maid Service', 'Sofa & Steam Cleaning'].map((item) => <Link key={item} to="/services" onClick={() => setServicesDropdown(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-[#f5d77f]">{item}</Link>)}
              </div>}
            </div>
            {links.slice(1).map(({ to, label, badge }) => <Link key={to} to={to} onClick={() => setServicesDropdown(false)} className={`relative flex items-center gap-1.5 py-2 text-[13px] font-semibold transition-colors ${activeClass(to)}`}>
              {badge && <span className={`rounded-full px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide ${badge === 'Airbnb' ? 'bg-red-500 text-white' : 'bg-emerald-100 text-emerald-800'}`}>{badge}</span>}
              {label}
            </Link>)}
          </div>

          <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
            <a href="https://wa.me/971502116822?text=Hello%20Golden%20Home%20Dubai%2C%20I%20would%20like%20to%20inquire%20about%20home%20cleaning%20services." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-white/20">
              <MessageSquare className="h-4 w-4 text-emerald-200" /><span>WhatsApp Us</span>
            </a>
            <button onClick={() => onOpenBooking()} className="inline-flex items-center gap-2 rounded-xl bg-[#f5d77f] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wide text-[#123b2a] shadow-md transition hover:bg-[#ffe9a4]">
              <Sparkles className="h-3.5 w-3.5" /><span>Book in 60s</span>
            </button>
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <button onClick={() => onOpenBooking()} className="rounded-lg bg-[#f5d77f] px-3 py-2 text-xs font-bold text-[#123b2a] sm:px-4">Book Now</button>
            <button onClick={() => setMobileMenuOpen((open) => !open)} className="rounded-lg p-2 text-white hover:bg-white/10" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && <div className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-[#0b462f] px-4 pb-5 pt-2 shadow-xl xl:hidden sm:px-6">
          <div className="mx-auto flex max-w-2xl flex-col divide-y divide-white/10">
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className={`py-3.5 text-sm font-semibold ${location.pathname === '/services' ? 'text-[#f5d77f]' : 'text-white/90'}`}>Services</Link>
            {links.map(({ to, label, badge }) => <Link key={to} to={to} onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between py-3.5 text-sm font-semibold ${location.pathname === to ? 'text-[#f5d77f]' : 'text-white/90'}`}>
              {label}{badge && <span className={`rounded-full px-2 py-0.5 text-[9px] font-extrabold uppercase ${badge === 'Airbnb' ? 'bg-red-500 text-white' : 'bg-emerald-100 text-emerald-800'}`}>{badge}</span>}
            </Link>)}
          </div>
          <div className="mx-auto mt-4 flex max-w-2xl flex-col gap-2 sm:flex-row">
            <a href="https://wa.me/971502116822" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-bold text-white"><MessageSquare className="h-4 w-4 text-emerald-200" />WhatsApp Us</a>
            <button onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#f5d77f] px-4 py-3 text-sm font-bold text-[#123b2a]"><Sparkles className="h-4 w-4" />Book in 60 Seconds</button>
          </div>
        </div>}
      </nav>
    </header>
  );
}
