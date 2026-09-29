import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Star, CheckCircle, ArrowRight, Play, Check, X, Phone, MessageSquare } from 'lucide-react';
import { SERVICES_LIST, TRUST_COUNTERS } from '../data/cleaningData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import RoomChecklist from '../components/RoomChecklist';
import WhyChooseUs from '../components/WhyChooseUs';
import WhatsAppReviews from '../components/WhatsAppReviews';
import CoverageMap from '../components/CoverageMap';
import FaqSection from '../components/FaqSection';

export default function HomePage({ onOpenBooking }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="pt-[72px] pb-16 bg-white text-slate-800">
      
      {/* 1. Hero Section (Clean White + Emerald Accent) */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_12%_18%,rgba(16,185,129,0.17),transparent_34%),radial-gradient(ellipse_at_82%_78%,rgba(212,175,55,0.13),transparent_32%),linear-gradient(135deg,#effaf4_0%,#ffffff_48%,#fbfaf4_100%)] py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-48 h-[440px] w-[440px] rounded-full border border-emerald-800/10 bg-emerald-200/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-56 right-[28%] h-[420px] w-[420px] rounded-full border border-[#d4af37]/15 bg-[#d4af37]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#0b462f_0.7px,transparent_0.7px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Dubai’s Leading 5-Star Residential Cleaning Company
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Spotless Homes & Luxury Villas in{' '}
                <span className="text-[#0b462f]">Dubai</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                Hospitality-standard deep sanitization, TADBEER-certified maids, and 100% Ejari security deposit return guarantee. We treat your Dubai residence with 5-star precision.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#0b462f] flex-shrink-0" />
                  <span>100% Ejari Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#0b462f] flex-shrink-0" />
                  <span>TADBEER Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Sparkles className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span>Eco-Friendly Safe</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] shadow-lg shadow-[#0b462f]/25 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Book in 60 Seconds</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/calculator"
                  className="px-7 py-4 rounded-xl font-bold text-sm text-[#0b462f] bg-white border-2 border-emerald-600/30 hover:border-[#0b462f] hover:bg-emerald-50 transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Instant Price Calculator</span>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="pt-6 border-t border-slate-200 flex items-center gap-6">
                <div className="flex items-center -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                    SA
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                    ML
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-700 text-white font-bold text-xs flex items-center justify-center">
                    FZ
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#d4af37] text-black font-extrabold text-xs flex items-center justify-center">
                    +1.4k
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                    <span className="text-slate-900 font-extrabold text-sm ml-1.5">5.0 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Trusted by 1,450+ homeowners in Palm Jumeirah & Downtown
                  </p>
                </div>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/hero-penthouse.jpg" 
                  alt="Dubai Luxury Penthouse Living Room" 
                  className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover object-center"
                />
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">Next Cleaner: 35 mins</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase text-[#0b462f] tracking-wider block">
                      Residential Guarantee
                    </span>
                    <p className="text-xs font-bold text-slate-900">
                      24-Hour Free Re-Clean Policy
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-extrabold border border-emerald-200">
                    100% Free
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Three Featured Category Cards */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-all hover:shadow-xl space-y-4 text-left group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0b462f] flex items-center justify-center font-bold text-xl group-hover:bg-[#0b462f] group-hover:text-white transition">
                🏰
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Villa Deep Cleaning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Specialized multi-story deep scrubbing, patio jet washing, and Italian marble restoration for luxury family estates.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0b462f]">From 599 AED</span>
                <Link to="/services" className="text-xs font-bold text-slate-900 flex items-center gap-1 group-hover:text-emerald-700">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200 hover:border-[#0b462f] transition-all hover:shadow-xl space-y-4 text-left group">
              <div className="w-12 h-12 rounded-2xl bg-[#0b462f] text-white flex items-center justify-center font-bold text-xl">
                🏢
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Apartment Deep Cleaning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From high-rise Marina studios to Downtown penthouses, our team eliminates baked-on grease, calcium and fine desert sand.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0b462f]">From 249 AED</span>
                <Link to="/services" className="text-xs font-bold text-slate-900 flex items-center gap-1 group-hover:text-emerald-700">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-all hover:shadow-xl space-y-4 text-left group">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xl group-hover:bg-[#d4af37] group-hover:text-black transition">
                🔑
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Move-In / Move-Out (Ejari)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Guaranteed handover inspection cleanliness. If your landlord flags any cleaning defect, we re-clean free within 24h.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0b462f]">From 449 AED</span>
                <Link to="/services" className="text-xs font-bold text-slate-900 flex items-center gap-1 group-hover:text-emerald-700">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. About Company / Intro with Video Tour */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image with Video Play Button */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/marble-clean.jpg" 
                  alt="Golden Home Professional Housekeeping Staff in Dubai" 
                  className="w-full h-[440px] object-cover object-center"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(true)}
                    className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#0b462f] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all"
                  >
                    <span className="absolute -inset-3 rounded-full border-2 border-white/60 animate-ping opacity-75" />
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Intro Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b462f] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                About Golden Home Dubai
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Your Trusted Deep Cleaning Company in Dubai
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                At <strong>Golden Home</strong>, we believe that your home is your sanctuary. We specialize exclusively in residential properties — villas, penthouses, luxury apartments, and holiday homes across Dubai.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#0b462f] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">We Are Committed</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Your complete satisfaction is guaranteed. We use certified green eco-friendly chemicals that are safe for babies and pets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Customer Focused Reviews</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Real, transparent WhatsApp feedback right after the job is completed by Dubai homeowners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] transition shadow-md"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* 4 Counter Metrics */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
            {TRUST_COUNTERS.map((item, idx) => (
              <div key={idx} className="text-center p-2">
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0b462f]">
                  {item.count}
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Core Services Showcase Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b462f] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Top-Notch Cleaning Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Designed to Make Your Home Shine
            </h2>
            <p className="text-sm text-slate-600">
              Explore our core residential services, each accompanied by an 85-point quality checklist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_LIST.slice(0, 6).map((service) => (
              <div key={service.id} className="rounded-3xl bg-white border border-slate-200 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left group">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[10px] font-bold text-[#0b462f] shadow-sm">
                    {service.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#06281a] px-3 py-1 rounded-xl text-white font-bold text-xs">
                    From {service.priceStarting} AED
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#0b462f] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link to="/services" className="text-xs font-bold text-slate-700 hover:text-[#0b462f]">
                      View 85-Pt Scope →
                    </Link>
                    <a
                      href={`https://wa.me/971502116822?text=${encodeURIComponent(service.whatsappMsg)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Book Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] transition shadow-md"
            >
              <span>View All Residential Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 85-Point Inspection Room-by-Room Checklist */}
      <RoomChecklist onOpenBooking={onOpenBooking} />

      {/* 6. Before & After Slider Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <BeforeAfterSlider onOpenBooking={onOpenBooking} />
      </section>

      {/* 7. Why Discerning Dubai Residents Choose Us */}
      <WhyChooseUs onOpenBooking={onOpenBooking} />

      {/* 8. Real WhatsApp Reviews */}
      <WhatsAppReviews />

      {/* 9. Dubai Service Areas & Map */}
      <CoverageMap onOpenBooking={onOpenBooking} />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-black border-2 border-white shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                title="Golden Home Video Tour"
                src="https://www.youtube.com/embed/VjQHWq1zjP0?autoplay=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
