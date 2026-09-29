import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageBanner({
  badge = "Dubai 5-Star Residential Care",
  title = "Our Services",
  highlightText = "Dubai",
  description = "Hospitality-standard cleaning solutions tailored for villas, penthouses, and holiday homes.",
  breadcrumb = "Services",
  bgImage = "/images/banner-services.jpg",
  children
}) {
  return (
    <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 md:pb-20 overflow-hidden text-white">
      {/* Background Image with Rich Dark Emerald Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center scale-105 brightness-[0.58] contrast-105"
        />
        {/* Layered luxury emerald & slate overlays for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041a11]/95 via-[#06281a]/88 to-[#041a11]/92" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041a11]/70 via-transparent to-black/20" />
        {/* Ambient Gold & Emerald Light Glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        {/* Breadcrumb Navigation */}
        <nav className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
          <Link to="/" className="hover:text-[#f5d77f] transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#f5d77f]">{breadcrumb}</span>
        </nav>

        {/* Badge */}
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-xs font-bold uppercase tracking-wider text-emerald-300 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            {badge}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.18]">
          {title}{' '}
          {highlightText && (
            <span className="text-[#f5d77f] underline decoration-[#d4af37]/60 decoration-wavy decoration-1 underline-offset-8">
              {highlightText}
            </span>
          )}
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
          {description}
        </p>

        {/* Optional Children (e.g. Filters, Trust Badges, Buttons) */}
        {children && (
          <div className="pt-4">
            {children}
          </div>
        )}

      </div>
    </section>
  );
}
