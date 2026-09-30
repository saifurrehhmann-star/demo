import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, Calendar, Clock, MapPin, Phone, User, Mail, Sparkles } from 'lucide-react';
import { DUBAI_AREAS, SERVICES_LIST } from '../data/cleaningData';

const getLocalDateValue = () => {
  const date = new Date();
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return localDate.toISOString().split('T')[0];
};

export default function BookingModal({ isOpen, onClose, prefillData }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: prefillData?.area || 'Downtown Dubai',
    building: '',
    date: getLocalDateValue(),
    timeSlot: 'Morning',
    notes: prefillData?.notes || '',
    serviceType: prefillData?.serviceType || SERVICES_LIST[0].id,
  });
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name, phone: formData.phone, email: formData.email,
          area: formData.area, building: formData.building, date: formData.date,
          timeSlot: formData.timeSlot, serviceType: formData.serviceType,
          notes: formData.notes,
          total: prefillData?.total ?? prefillData?.base,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Booking request could not be sent.');
      setBookingRef(result.booking.bookingRef);
      setStep(2);
    } catch (error) {
      setSubmitError(error.message || 'Unable to connect. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800">
        
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            {/* Modal Header */}
            <div className="pb-5 border-b border-slate-100 pr-10 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b462f] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block mb-2">
                Golden Home cleaning enquiry
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Confirm Reservation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Send your preferred service, timing and property details. We’ll confirm availability with you.
              </p>
            </div>

            {/* Price Preview Strip */}
            {prefillData?.total && (
              <div className="my-4 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between text-xs text-left">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Service Quote</span>
                  <span className="font-bold text-[#0b462f] text-sm">
                    {prefillData?.serviceType ? prefillData.serviceType.replace('-', ' ').toUpperCase() : 'LUXURY CLEANING'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block uppercase font-semibold">Estimated Total</span>
                  <span className="font-serif text-xl font-extrabold text-[#0b462f]">
                    {prefillData.total} AED
                  </span>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. Alexander / Sheikh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                    />
                  </div>
                </div>

                {/* Dubai Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (optional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="client@luxuryhome.ae"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service requested</label>
                <select value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 focus:border-[#0b462f] focus:bg-white focus:outline-none sm:text-sm">
                  {SERVICES_LIST.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}
                </select>
              </div>

              {/* Area & Building Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Dubai Community *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                    >
                      {DUBAI_AREAS.map((a) => (
                        <option key={a.name} value={a.name}>{a.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Building / Villa / Apt No. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marina Gate 2, Apt 1804"
                    value={formData.building}
                    onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                  />
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Arrival Window *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0b462f]"
                    >
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                  </div>
                </div>
              </div>

              <p className="rounded-xl bg-[#f3f8f4] p-3 text-xs leading-5 text-slate-600">This form sends a booking request. Service details, price and availability are confirmed separately.</p>

              {submitError && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{submitError}</p>}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full mt-3 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#29945a] hover:bg-[#197543] active:scale-98 transition-all shadow-lg shadow-[#0b462f]/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#f5d77f]" />
                <span>{isSubmitting ? 'Sending request…' : 'Send booking request'}</span>
              </button>

            </form>
          </div>
        ) : (
          /* Step 2: Confirmation Screen */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0b462f] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-[#0b462f] border border-emerald-200">
                Booking Request Received
              </span>
              <h3 className="font-serif text-3xl font-bold text-slate-900">
                Booking Reference: {bookingRef}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. Your request for <strong>{formData.date}</strong> in <strong>{formData.area}</strong> is recorded for this demo session. Booking notifications are not connected yet.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Client:</span>
                <span className="font-bold text-slate-900">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Phone:</span>
                <span className="font-bold text-slate-900">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Community:</span>
                <span className="font-bold text-slate-900">{formData.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time Window:</span>
                <span className="font-bold text-slate-900">{formData.timeSlot}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" onClick={handleReset} className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition text-center">Contact the team</Link>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#29945a] hover:bg-[#197543] transition shadow-md"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
