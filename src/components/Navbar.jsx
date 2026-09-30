import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GoldenLogo from './GoldenLogo';
import { MapPin, Menu, X, ChevronDown, MessageSquare, Sparkles } from 'lucide-react';
import { SERVICE_GROUPS, SERVICE_PAGES } from '../data/servicePages';

const links = [
  { to: '/holiday-homes', label: 'Holiday Homes' },
  { to: '/calculator', label: 'Pricing' },
  { to: '/transformations', label: 'Service Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activeClass = (path) => location.pathname === path ? 'text-[#f5c84c]' : 'text-white/90 hover:text-[#f5c84c]';

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return <header className="motion-navbar fixed inset-x-0 top-0 z-50">
    <div className="hidden bg-[#0b462f] text-white sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
        <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-[#f5c84c]" />Home cleaning services in Dubai</span>
        <Link to="/contact" className="text-white/85 transition hover:text-[#f5c84c]">Ask about availability</Link>
      </div>
    </div>
    <nav className={`border-b border-white/10 bg-[#0b462f] transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-[#06281a]/25' : 'shadow-md shadow-[#06281a]/15'} backdrop-blur-xl`}>
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <GoldenLogo variant="dark" className="h-auto shrink-0" />
        <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          <Link to="/" className={`whitespace-nowrap text-sm font-semibold ${activeClass('/')}`}>Home</Link>
          <div className="relative" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)} onFocus={() => setServicesDropdown(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesDropdown(false); }} onKeyDown={(event) => { if (event.key === 'Escape') setServicesDropdown(false); }}>
            <div className="flex items-center gap-1"><Link to="/services" onClick={() => setServicesDropdown(false)} className={`whitespace-nowrap text-sm font-semibold ${location.pathname.startsWith('/services') ? 'text-[#f5c84c]' : 'text-white/90 hover:text-[#f5c84c]'}`}>Services</Link><button type="button" onClick={() => setServicesDropdown(true)} aria-label="Open services menu" aria-expanded={servicesDropdown} className="rounded-md p-1 text-white/75 transition hover:bg-white/10 hover:text-white"><ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} /></button></div>
            {servicesDropdown && <div className="absolute left-1/2 top-full z-30 w-[min(760px,calc(100vw-2rem))] -translate-x-1/2 pt-3">
              <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 text-slate-800 shadow-[0_24px_70px_-24px_rgba(5,35,20,.5)] sm:p-6">
                <div className="mb-4 flex items-center justify-between border-b border-emerald-100 pb-3"><div><p className="text-sm font-extrabold text-[#0b462f]">Explore our services</p><p className="mt-1 text-[11px] text-slate-500">Choose the cleaning option for your home</p></div><Link to="/services" onClick={() => setServicesDropdown(false)} className="text-xs font-bold text-[#23834e] transition hover:text-[#0b462f]">All services <span aria-hidden="true">→</span></Link></div>
                <div className="grid gap-3 sm:grid-cols-3">{SERVICE_GROUPS.map((group) => <section key={group.name} className="rounded-xl bg-[#f5faf6] p-3.5"><h3 className="mb-2 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#17613d]">{group.name}</h3><div className="space-y-1">{group.slugs.map((slug) => { const item = SERVICE_PAGES.find((service) => service.slug === slug); return item && <Link key={slug} to={`/services/${slug}`} onClick={() => setServicesDropdown(false)} className="group/item flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-xs font-medium text-slate-600 transition hover:bg-white hover:text-[#17613d] hover:shadow-sm"><span>{item.title}</span><span className="translate-x-[-3px] opacity-0 transition group-hover/item:translate-x-0 group-hover/item:opacity-100" aria-hidden="true">→</span></Link>; })}</div></section>)}</div>
              </div>
            </div>}
          </div>
          {links.map(({ to, label }) => <Link key={to} to={to} className={`whitespace-nowrap text-sm font-semibold ${activeClass(to)}`}>{label}</Link>)}
        </div>
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Link to="/contact" aria-label="Contact Golden Home" className="rounded-xl border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"><MessageSquare className="h-4 w-4" /></Link>
          <button onClick={() => onOpenBooking()} className="inline-flex items-center gap-2 rounded-xl bg-[#29945a] px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-white shadow-md transition hover:bg-[#197543]"><Sparkles className="h-4 w-4 text-[#f5c84c]" />Book Now</button>
        </div>
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <button onClick={() => onOpenBooking()} className="rounded-lg bg-[#29945a] px-3 py-2 text-xs font-bold text-white sm:px-4">Book Now</button>
          <button onClick={() => setMobileMenuOpen((open) => !open)} aria-expanded={mobileMenuOpen} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} className="rounded-lg p-2 text-white hover:bg-white/10">{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      {mobileMenuOpen && <div className="mobile-menu-enter max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-[#0b462f] px-4 pb-5 pt-2 shadow-xl xl:hidden sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col divide-y divide-white/10">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-3.5 text-sm font-semibold text-white">Home</Link>
          <button onClick={() => setServicesDropdown((open) => !open)} aria-expanded={servicesDropdown} className="flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold text-white">Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} /></button>
          {servicesDropdown && <div className="grid grid-cols-1 gap-4 bg-emerald-50/70 p-4 sm:grid-cols-2">{SERVICE_GROUPS.map((group) => <div key={group.name}><Link to={`/services/${group.slugs[0]}`} onClick={() => setMobileMenuOpen(false)} className="mb-1 block text-sm font-bold text-[#0b462f]">{group.name}</Link>{group.slugs.slice(1).map((slug) => { const item = SERVICE_PAGES.find((service) => service.slug === slug); return <Link key={slug} to={`/services/${slug}`} onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs text-slate-600">{item.title}</Link>; })}</div>)}</div>}
          {links.map(({ to, label }) => <Link key={to} to={to} onClick={() => setMobileMenuOpen(false)} className="py-3.5 text-sm font-semibold text-white/90">{label}</Link>)}
        </div>
        <div className="mx-auto mt-4 flex max-w-2xl gap-2"><Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold text-white"><MessageSquare className="h-4 w-4" />Contact</Link><button onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#29945a] px-4 py-3 text-sm font-bold text-white"><Sparkles className="h-4 w-4 text-[#f5c84c]" />Book service</button></div>
      </div>}
    </nav>
  </header>;
}
