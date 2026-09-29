import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { DUBAI_AREAS } from '../data/cleaningData';
import PageBanner from '../components/PageBanner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: 'Downtown Dubai',
    service: 'Villa Deep Cleaning',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-20 bg-white text-slate-800">
      
      <PageBanner bgImage="/images/banner-contact.jpg" badge="We’re At Your Service" title="Contact" highlightText="Golden Home Dubai" breadcrumb="Contact Us" description="Ready to book or have questions? Reach our Dubai operations concierge 7 days a week." />
      {/* Main Grid: Form + Contact Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 Cols: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Office Details Card */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Dubai Operations Center
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0b462f] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Office Address:</strong>
                      <span>Warehouse 14, Al Quoz Industrial 4 & Emaar Square, Downtown Dubai, UAE</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0b462f] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Phone Lines:</strong>
                      <span>+971 50 211 6822 / +971 50 213 6022</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0b462f] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Email Inquiry:</strong>
                      <span>info@goldenhome.ae / concierge@goldenhome.ae</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#0b462f] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Service Hours:</strong>
                      <span>Monday – Sunday: 08:00 AM – 08:00 PM (Daily dispatch)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/971502116822?text=Hello%20Golden%20Home%2C%20I%20want%20to%20speak%20to%20the%20concierge."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>Chat on WhatsApp (+971 50 211 6822)</span>
                  </a>
                </div>
              </div>

              {/* Service Areas Coverage Quick List */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase text-[#0b462f] tracking-wider block">
                  Priority Dispatch Zones
                </span>
                <p className="text-xs text-slate-600">
                  Mobile vans stationed across Palm Jumeirah, Dubai Marina, Downtown, Emirates Hills, Dubai Hills, and Business Bay.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {DUBAI_AREAS.slice(0, 8).map(a => (
                    <span key={a.name} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700">
                      {a.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg text-left">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0b462f] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Message Received!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Dubai operations manager will respond within 15 minutes.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f]"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900">
                        Send An Inquiry
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill in your details for a prompt quote from our Dubai team.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Dubai Mobile / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 123 4567"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@luxuryresidence.ae"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Dubai Community
                        </label>
                        <select
                          value={formData.area}
                          onChange={e => setFormData({ ...formData, area: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                        >
                          {DUBAI_AREAS.map(a => (
                            <option key={a.name} value={a.name}>{a.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                      >
                        <option value="Villa Deep Cleaning">Villa Deep Cleaning</option>
                        <option value="Apartment Deep Cleaning">Apartment Deep Cleaning</option>
                        <option value="Move-In / Move-Out (Ejari Pass)">Move-In / Move-Out (Ejari Pass)</option>
                        <option value="5-Star Maid Service">5-Star Maid Service (Hourly / Recurring)</option>
                        <option value="Holiday Homes & Airbnb">Holiday Homes & Airbnb Turnover</option>
                        <option value="Sofa & Carpet Steam Extraction">Sofa & Carpet Steam Extraction</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Additional Notes or Requirements
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about the property size, number of bedrooms, preferred date..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] shadow-lg shadow-[#0b462f]/25 transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="mt-16 rounded-3xl overflow-hidden border border-slate-200 shadow-xl h-[420px]">
            <iframe
              title="Dubai Operations Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115548.86873199859!2d55.15655519889602!3d25.174092523267568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
