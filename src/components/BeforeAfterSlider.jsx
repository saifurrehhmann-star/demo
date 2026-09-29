import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider({ onOpenBooking }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState('sofa');
  const containerRef = useRef(null);

  const scenarios = {
    sofa: {
      title: 'Sectional Sofa 160°C Steam Extraction',
      beforeImg: '/images/sofa-before.jpg',
      afterImg: '/images/sofa-after.jpg',
      location: 'Marina Gate Penthouse, Dubai Marina',
      beforeLabel: 'Before: Desert dust, beverage water rings & allergen buildup',
      afterLabel: 'After: 160°C Kärcher steam extraction, Scotchgard protected'
    },
    kitchen: {
      title: 'Gourmet Kitchen Degreasing & Sanitization',
      beforeImg: '/images/kitchen-detail.jpg',
      afterImg: '/images/kitchen-clean.jpg',
      location: 'Custom Villa, Emirates Hills',
      beforeLabel: 'Before: Heavy grease film on hood & dull quartz surfaces',
      afterLabel: 'After: Eco-degreased, quartz counter sanitized, mirror-finish'
    },
    marble: {
      title: 'Italian Statuario Marble Crystallization',
      beforeImg: '/images/apartment-cleaning.jpg',
      afterImg: '/images/marble-clean.jpg',
      location: 'Signature Villa, Palm Jumeirah',
      beforeLabel: 'Before: Micro-scratches and dull high-traffic floor pathways',
      afterLabel: 'After: Diamond pad honing with high-gloss mirror reflection'
    }
  };

  const current = scenarios[activeTab];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0b462f] bg-emerald-100/80 px-3.5 py-1.5 rounded-full">
            Interactive Quality Demonstration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Real Proof of Cleanliness
          </h2>
          <p className="text-sm text-slate-600">
            Drag the divider left and right to inspect the dramatic difference of our European steam sanitization.
          </p>

          {/* Scenario Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <button
              onClick={() => { setActiveTab('sofa'); setSliderPosition(50); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'sofa'
                  ? 'bg-[#0b462f] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-600'
              }`}
            >
              🛋️ Sofa & Fabric Steam Sanitization
            </button>
            <button
              onClick={() => { setActiveTab('kitchen'); setSliderPosition(50); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'kitchen'
                  ? 'bg-[#0b462f] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-600'
              }`}
            >
              🍳 Chef's Kitchen Degreasing
            </button>
            <button
              onClick={() => { setActiveTab('marble'); setSliderPosition(50); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'marble'
                  ? 'bg-[#0b462f] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-600'
              }`}
            >
              🏛️ Marble Floor Crystallization
            </button>
          </div>
        </div>

        {/* Comparison Slider Card */}
        <div className="max-w-5xl mx-auto">
          <div className="p-3 sm:p-4 rounded-3xl bg-white border border-slate-200 shadow-xl">
            
            {/* Header context */}
            <div className="flex flex-wrap items-center justify-between pb-3 px-2 text-xs text-slate-700 gap-2">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0b462f]" />
                {current.title}
              </span>
              <span className="text-emerald-700 font-semibold">
                📍 {current.location}
              </span>
            </div>

            {/* Draggable Viewport */}
            <div 
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="relative w-full h-[360px] sm:h-[460px] md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none border border-slate-200"
            >
              {/* After Image */}
              <img 
                src={current.afterImg} 
                alt="After Golden Home Cleaning" 
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Before Image (Clipped) */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={current.beforeImg} 
                  alt="Before Golden Home Cleaning" 
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-md shadow-md">
                  Before Cleaning
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0b462f]/90 text-white backdrop-blur-md shadow-md">
                  After Golden Home 5★
                </span>
              </div>

              {/* Divider Line */}
              <div 
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-1 h-full bg-[#0b462f] shadow-[0_0_12px_rgba(11,70,47,0.8)]" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#0b462f] shadow-2xl flex items-center justify-center text-[#0b462f]">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Drag Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[11px] font-semibold text-slate-800 flex items-center gap-1.5 shadow-md">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#0b462f]" />
                  <span>Drag handle left/right to compare</span>
                </div>
              </div>

            </div>

            {/* Labels below */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-2 border-t border-slate-100 text-xs">
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-900 text-left">
                <strong className="block text-red-700">Before Treatment:</strong>
                {current.beforeLabel}
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-left">
                <strong className="block text-emerald-700">Golden Home Result:</strong>
                {current.afterLabel}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 px-1">
              <span className="text-xs text-slate-600 font-medium">
                Want this standard in your Dubai residence?
              </span>
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0b462f] hover:bg-[#073221] shadow-md transition"
              >
                Schedule This Service
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
