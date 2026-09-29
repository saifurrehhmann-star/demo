import React, { useState, useMemo } from 'react';
import { Check, Sparkles, Building2, Home, MessageSquare, ShieldCheck } from 'lucide-react';

export default function BookingCalculator({ onOpenBooking, initialSettings }) {
  const [propertyType, setPropertyType] = useState(initialSettings?.propertyType || 'apartment');
  const [bedrooms, setBedrooms] = useState('2');
  const [serviceType, setServiceType] = useState(initialSettings?.serviceType || 'deep-clean');
  const [maidHours, setMaidHours] = useState(4);
  const [maidCleaners, setMaidCleaners] = useState(1);
  const [maidMaterials, setMaidMaterials] = useState(true);
  const [frequency, setFrequency] = useState('weekly');
  const [selectedAddons, setSelectedAddons] = useState(['oven', 'balcony']);

  const ADDONS = [
    { id: 'oven', label: 'Inside Oven & Cooker Hood Degreasing', price: 80, icon: '🔥' },
    { id: 'fridge', label: 'Inside Refrigerator Deep Sanitization', price: 60, icon: '❄️' },
    { id: 'balcony', label: 'Balcony Sand Jetwash & Glass Buffing', price: 120, icon: '🌊' },
    { id: 'ac', label: 'AC Vents Botanical Mold Fogging', price: 150, icon: '❄️' },
    { id: 'marble', label: 'Italian Marble Floor Diamond Buffing', price: 250, icon: '💎' },
    { id: 'mattress', label: 'Mattress 160°C Steam Allergen Extraction', price: 110, icon: '🛏️' }
  ];

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Pricing calculations
  const calculation = useMemo(() => {
    let base = 0;

    if (serviceType === 'maid-service') {
      const ratePerHour = maidMaterials ? 50 : 40;
      base = ratePerHour * maidHours * maidCleaners;
    } else {
      if (propertyType === 'apartment') {
        switch (bedrooms) {
          case 'studio': base = 249; break;
          case '1': base = 329; break;
          case '2': base = 449; break;
          case '3': base = 599; break;
          case '4': base = 799; break;
          default: base = 449;
        }
      } else {
        switch (bedrooms) {
          case '2': base = 599; break;
          case '3': base = 799; break;
          case '4': base = 1049; break;
          case '5': base = 1399; break;
          case '6': base = 1799; break;
          default: base = 1049;
        }
      }

      if (serviceType === 'move-in-out') base = Math.round(base * 1.25);
      if (serviceType === 'sofa-carpet') base = 340;
      if (serviceType === 'ac-duct') base = 420;
    }

    const addonsTotal = selectedAddons.reduce((acc, currId) => {
      const item = ADDONS.find(a => a.id === currId);
      return acc + (item ? item.price : 0);
    }, 0);

    const subtotalBeforeDiscount = base + addonsTotal;

    let discountPct = 0;
    if (frequency === 'weekly') discountPct = 0.20;
    else if (frequency === 'bi-weekly') discountPct = 0.10;
    else if (frequency === 'monthly') discountPct = 0.05;

    const discountAmount = Math.round(subtotalBeforeDiscount * discountPct);
    const subtotal = subtotalBeforeDiscount - discountAmount;
    const vat = Math.round(subtotal * 0.05); // 5% UAE VAT
    const total = subtotal + vat;

    return {
      base,
      addonsTotal,
      discountPct,
      discountAmount,
      subtotal,
      vat,
      total
    };
  }, [propertyType, bedrooms, serviceType, maidHours, maidCleaners, maidMaterials, frequency, selectedAddons]);

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Golden Home Dubai! I would like to book a cleaning service:\n` +
      `• Property: ${propertyType.toUpperCase()} (${bedrooms} BR)\n` +
      `• Service: ${serviceType}\n` +
      `• Frequency: ${frequency}\n` +
      `• Estimated Total: AED ${calculation.total} (inc. VAT)\n` +
      `Please let me know available slots.`
    );
    window.open(`https://wa.me/971502116822?text=${text}`, '_blank');
  };

  return (
    <div id="calculator" className="w-full text-slate-800">
      
      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls Column (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6 text-left">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#0b462f] block mb-3">
                Step 1: Choose Property Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => { setPropertyType('apartment'); if (bedrooms === 'studio') setBedrooms('studio'); }}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3.5 ${
                    propertyType === 'apartment'
                      ? 'bg-emerald-50/80 border-[#0b462f] shadow-sm ring-1 ring-[#0b462f]'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${propertyType === 'apartment' ? 'bg-[#0b462f] text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Apartment / Penthouse</div>
                    <div className="text-xs text-slate-500">Marina, Downtown, JBR, DIFC</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => { setPropertyType('villa'); if (bedrooms === 'studio') setBedrooms('3'); }}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3.5 ${
                    propertyType === 'villa'
                      ? 'bg-emerald-50/80 border-[#0b462f] shadow-sm ring-1 ring-[#0b462f]'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${propertyType === 'villa' ? 'bg-[#0b462f] text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Luxury Villa / Townhouse</div>
                    <div className="text-xs text-slate-500">Palm, Emirates Hills, Dubai Hills</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Service Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#0b462f] block mb-3">
                Step 2: Service Specification
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'deep-clean', name: 'Luxury Deep Clean', desc: '85-Point Detailing' },
                  { id: 'maid-service', name: 'Maid Service', desc: 'Hourly / Recurring' },
                  { id: 'move-in-out', name: 'Move In / Out (Ejari)', desc: 'Deposit Guaranteed' },
                  { id: 'sofa-carpet', name: 'Sofa & Rug Steam', desc: 'Dust Mite Care' },
                  { id: 'ac-duct', name: 'AC Duct Sanitizing', desc: 'Mold & Odor Defense' },
                  { id: 'holiday-homes', name: 'Holiday Home / Airbnb', desc: 'Guest Turnaround' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceType(s.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      serviceType === s.id
                        ? 'bg-emerald-50/90 border-[#0b462f] text-slate-900 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900">{s.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Size & Configuration */}
            {serviceType === 'maid-service' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <label className="text-xs text-slate-700 block mb-2 font-bold">Service Duration</label>
                  <select
                    value={maidHours}
                    onChange={(e) => setMaidHours(Number(e.target.value))}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:border-[#0b462f]"
                  >
                    <option value={3}>3 Hours (Standard)</option>
                    <option value={4}>4 Hours (Recommended)</option>
                    <option value={5}>5 Hours</option>
                    <option value={6}>6 Hours (Intensive)</option>
                    <option value={8}>8 Hours (Full Day)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-700 block mb-2 font-bold">Number of Maids</label>
                  <select
                    value={maidCleaners}
                    onChange={(e) => setMaidCleaners(Number(e.target.value))}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:border-[#0b462f]"
                  >
                    <option value={1}>1 Professional Maid</option>
                    <option value={2}>2 Maids (Double Speed)</option>
                    <option value={3}>3 Maids (Villa Team)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-700 block mb-2 font-bold">Cleaning Materials</label>
                  <button
                    type="button"
                    onClick={() => setMaidMaterials(!maidMaterials)}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-bold border transition ${
                      maidMaterials 
                        ? 'bg-emerald-100 border-[#0b462f] text-[#0b462f]' 
                        : 'bg-white border-slate-200 text-slate-500'
                    }`}
                  >
                    {maidMaterials ? '✓ Included (+10 AED/h)' : 'I will provide supplies'}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#0b462f] block mb-3">
                  Step 3: Number of Bedrooms
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {propertyType === 'apartment' ? (
                    ['studio', '1', '2', '3', '4'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBedrooms(b)}
                        className={`py-3 rounded-xl border text-center font-bold text-xs sm:text-sm transition-all ${
                          bedrooms === b
                            ? 'bg-[#0b462f] text-white border-[#0b462f] shadow-md'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {b === 'studio' ? 'Studio' : `${b} BHK`}
                      </button>
                    ))
                  ) : (
                    ['2', '3', '4', '5', '6'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBedrooms(b)}
                        className={`py-3 rounded-xl border text-center font-bold text-xs sm:text-sm transition-all ${
                          bedrooms === b
                            ? 'bg-[#0b462f] text-white border-[#0b462f] shadow-md'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {b === '6' ? '6+ Villa' : `${b} Bed Villa`}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Cleaning Frequency */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#0b462f] block mb-3">
                Step 4: Booking Frequency (Unlock Discounts)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'one-time', name: 'One-Time', badge: 'Standard' },
                  { id: 'weekly', name: 'Weekly', badge: '20% OFF', best: true },
                  { id: 'bi-weekly', name: 'Bi-Weekly', badge: '10% OFF' },
                  { id: 'monthly', name: 'Monthly', badge: '5% OFF' }
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFrequency(f.id)}
                    className={`p-3 rounded-xl border text-center transition-all relative ${
                      frequency === f.id
                        ? 'bg-emerald-50 border-[#0b462f] text-[#0b462f] ring-1 ring-[#0b462f]'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {f.best && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                        Popular
                      </span>
                    )}
                    <div className="font-bold text-xs sm:text-sm">{f.name}</div>
                    <div className="text-[10px] text-emerald-700 font-bold mt-0.5">{f.badge}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: High-Demand Dubai Add-ons */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#0b462f] block mb-3">
                Step 5: High-Demand Dubai Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-50 border-[#0b462f] text-slate-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs ${
                          isSelected ? 'bg-[#0b462f] text-white font-bold' : 'border border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs font-semibold text-slate-800">
                          {addon.icon} {addon.label}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#0b462f]">
                        +{addon.price} AED
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Quotation Summary Box (4 Cols) */}
        <div className="lg:col-span-4 sticky top-28">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#0b462f] shadow-xl space-y-6 text-left">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0b462f]">
                  Quotation Breakdown
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Estimated Investment
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                Pay After
              </span>
            </div>

            {/* Line Items */}
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex justify-between items-center">
                <span>Base Residence ({propertyType === 'apartment' ? `${bedrooms} BR Apt` : `${bedrooms} BR Villa`})</span>
                <span className="font-bold text-slate-900">{calculation.base} AED</span>
              </div>

              {calculation.addonsTotal > 0 && (
                <div className="flex justify-between items-center">
                  <span>Selected Add-ons ({selectedAddons.length})</span>
                  <span className="font-bold text-slate-900">+{calculation.addonsTotal} AED</span>
                </div>
              )}

              {calculation.discountAmount > 0 && (
                <div className="flex justify-between items-center text-emerald-700 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  <span>{frequency.toUpperCase()} Discount ({calculation.discountPct * 100}%)</span>
                  <span>-{calculation.discountAmount} AED</span>
                </div>
              )}

              <div className="flex justify-between items-center text-slate-500 pt-2 border-t border-slate-100">
                <span>UAE VAT (5%)</span>
                <span>+{calculation.vat} AED</span>
              </div>
            </div>

            {/* Total Price Banner */}
            <div className="p-5 rounded-2xl bg-[#06281a] text-white text-center shadow-md">
              <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                Total Payable Amount
              </span>
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#f5d77f]">
                  {calculation.total}
                </span>
                <span className="text-sm font-bold text-emerald-300 tracking-wider">
                  AED
                </span>
              </div>
              <span className="text-[11px] text-slate-300 mt-1 block">
                Inclusive of all equipment, supplies & 5% VAT
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking({ ...calculation, propertyType, bedrooms, serviceType, frequency })}
                className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] shadow-lg shadow-[#0b462f]/20 active:scale-98 transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#f5d77f]" />
                <span>Reserve This Estimate</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Book via WhatsApp (+971)</span>
              </button>
            </div>

            <div className="pt-1 text-center">
              <span className="text-xs text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0b462f]" />
                100% Satisfaction or Free Re-Clean
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
