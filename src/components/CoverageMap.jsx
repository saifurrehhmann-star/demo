import React, { useState } from 'react';
import { MapPin, Search, Building2 } from 'lucide-react';
import { DUBAI_AREAS } from '../data/cleaningData';

export default function CoverageMap({ onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState(DUBAI_AREAS[0]);

  const filteredAreas = DUBAI_AREAS.filter(area => 
    area.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="areas" className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-xs font-bold uppercase tracking-wider text-[#0b462f]">
            <MapPin className="w-3.5 h-3.5 text-[#0b462f]" />
            Dubai Area Enquiries
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Looking for cleaning nearby?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Select an area and tell us what you need. Our team can confirm whether a visit is available for your location.
          </p>
        </div>

        {/* Map & Directory Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Neighborhood Selector & Fast Dispatch (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search community (e.g. Palm, Marina, Hills)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0b462f] shadow-sm"
              />
            </div>

            {/* Area Grid Cards */}
            <div className="max-h-[380px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {filteredAreas.map((area) => (
                <button
                  type="button"
                  key={area.name}
                  onClick={() => setSelectedArea(area)}
                  aria-pressed={selectedArea.name === area.name}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedArea.name === area.name
                      ? 'bg-emerald-50/80 border-[#0b462f] ring-1 ring-[#0b462f] shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className={`p-2 rounded-xl ${selectedArea.name === area.name ? 'bg-[#29945a] text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                        {area.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Ask us about cleaning in this area
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Enquire
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Area Booking Card */}
            {selectedArea && (
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0b462f] uppercase tracking-wider">
                    Area availability
                  </span>
                  <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Confirm with us
                  </span>
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900">
                  Ask about a visit in {selectedArea.name}
                </h4>
                <button
                  onClick={() => onOpenBooking({ area: selectedArea.name })}
                  className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#29945a] hover:bg-[#197543] shadow-md transition"
                >
                  Check availability
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Google Maps (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="h-[280px] overflow-hidden rounded-3xl border border-slate-200 shadow-xl sm:h-[360px] lg:h-[480px]">
              <iframe
                title="Dubai Community Service Coverage Map"
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

        </div>

      </div>
    </section>
  );
}
