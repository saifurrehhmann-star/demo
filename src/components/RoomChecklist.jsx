import React, { useState } from 'react';
import { CheckSquare, Utensils, Bath, BedDouble, Sofa, Sun, CheckCircle, ShieldCheck } from 'lucide-react';

export default function RoomChecklist({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('kitchen');

  const checklistData = {
    kitchen: {
      title: "Chef's Gourmet Kitchen & Pantry",
      icon: Utensils,
      items: [
        { task: 'Cooker hood & grease filter ultrasonic degreasing', critical: true },
        { task: 'Interior and exterior oven baked-on carbon removal', critical: true },
        { task: 'Backsplash tiles and grout line steam whitening', critical: false },
        { task: 'Quartz / Granite countertop disinfection with food-safe chemicals', critical: true },
        { task: 'Inside and outside of all pantry cupboards & pull-out drawers', critical: false },
        { task: 'High-temperature steam sanitization of double-bowl sink & tap aerator', critical: false },
        { task: 'Dishwasher filter cleaning and odor descaling cycle', critical: false },
        { task: 'Kickboard removal and vacuuming behind kitchen island', critical: true }
      ]
    },
    bathroom: {
      title: 'Luxury En-Suite & Guest Powder Rooms',
      icon: Bath,
      items: [
        { task: 'Heavy calcium and limescale descaling on rain shower heads', critical: true },
        { task: 'Frameless glass shower screen buffing with water-repellent seal', critical: true },
        { task: 'Statuario / Travertine marble vanity polishing & pH-neutral wash', critical: true },
        { task: 'Jacuzzi jets deep-flushed and anti-microbial treatment', critical: false },
        { task: 'Toilet & bidet 100% bacterial eradication (hospital standard)', critical: true },
        { task: 'Tile grout steam scrubbing removing pink mold & soap scum', critical: false },
        { task: 'Exhaust fan grill vacuuming and dust filter wash', critical: false },
        { task: 'Mirror de-fogging and streak-free micro-cloth polish', critical: false }
      ]
    },
    living: {
      title: 'Grand Living, Dining & Hallways',
      icon: Sofa,
      items: [
        { task: 'AC linear slot diffusers & return grilles vacuumed & wiped', critical: true },
        { task: 'Crystal chandeliers and decorative pendant glass crystal dusting', critical: true },
        { task: 'Italian marble floor crystallization buffing with diamond pads', critical: true },
        { task: 'Balcony sliding door aluminum track vacuuming & roller lube', critical: false },
        { task: 'Baseboards, door architraves & light switch plate sanitizing', critical: false },
        { task: 'Fabric sofa HEPA vacuuming and crevice sand removal', critical: false },
        { task: 'Dining table French-polish conditioning for natural wood/marble', critical: false },
        { task: 'Floor-to-ceiling glass panel streak-free clarity wipe', critical: false }
      ]
    },
    bedroom: {
      title: 'Master Bedroom & Guest Suites',
      icon: BedDouble,
      items: [
        { task: 'Mattress 160°C dry steam sanitization (kills dust mites)', critical: true },
        { task: 'Under-bed HEPA vacuuming with heavy furniture movement', critical: true },
        { task: 'Walk-in dressing room shelving, mirror & drawers wiped inside/out', critical: false },
        { task: 'Headboard upholstery deep vacuuming & sanitizing mist', critical: false },
        { task: 'Curtain & sheer drape anti-dust steam freshening', critical: false },
        { task: 'Behind-nightstand power cord and socket dust eradication', critical: false },
        { task: 'Recessed spotlight trim & ceiling coving detailing', critical: false }
      ]
    },
    balcony: {
      title: 'Balconies, Terraces & Private Pool Decks',
      icon: Sun,
      items: [
        { task: 'Desert sand pressure jet wash on porcelain / outdoor stone tiles', critical: true },
        { task: 'Glass balustrade clear water streak-free exterior polish', critical: true },
        { task: 'Drain grates cleared of desert debris and sanitized', critical: false },
        { task: 'Outdoor patio furniture wash and waterproof cushion wipe', critical: false },
        { task: 'AC outdoor condensing unit surrounding leaf and sand clearance', critical: false },
        { task: 'Spotlight & exterior sconce insect/dust cleaning', critical: false }
      ]
    }
  };

  const activeCategory = checklistData[activeTab];

  return (
    <section id="checklist" className="py-20 bg-slate-50/70 border-t border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-xs font-bold uppercase tracking-wider text-[#0b462f]">
            <CheckSquare className="w-3.5 h-3.5 text-[#0b462f]" />
            Meticulous 85-Point Inspection
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Nothing Overlooked. <span className="text-[#0b462f]">Guaranteed.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Explore our room-by-room protocol. Every Golden Home crew supervisor completes this exact quality audit before handing over your residence keys.
          </p>

          {/* Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6">
            {Object.entries(checklistData).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTab === key
                      ? 'bg-[#0b462f] text-white shadow-md shadow-[#0b462f]/20 scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{data.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl text-left">
            
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-100 gap-3">
              <div>
                <span className="text-[11px] font-bold text-[#0b462f] uppercase tracking-wider block">
                  Detailed Scope
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {activeCategory.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Ejari Handover Approved</span>
              </div>
            </div>

            {/* Checklist Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6">
              {activeCategory.items.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                    item.critical 
                      ? 'bg-emerald-50/70 border-emerald-300' 
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="mt-0.5">
                    <CheckCircle className={`w-4 h-4 ${item.critical ? 'text-[#0b462f]' : 'text-emerald-500'}`} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-800 font-medium leading-relaxed block">
                      {item.task}
                    </span>
                    {item.critical && (
                      <span className="inline-block mt-1 text-[9px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-[#0b462f]">
                        Golden Priority
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Commitment Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                <strong className="text-slate-900 block font-semibold">Supervisor Quality Sign-Off:</strong>
                Your designated team leader signs this checklist physically upon completion.
              </div>
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] shadow-md transition whitespace-nowrap"
              >
                Book With This Standard
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
