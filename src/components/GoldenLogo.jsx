import React from 'react';
import { Link } from 'react-router-dom';

export default function GoldenLogo({ className = "h-11", showText = true, variant = "light" }) {
  const isLight = variant === "light";

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 select-none group ${className}`}>
      {/* Brand Image Logo provided by User */}
      <div className="relative flex-shrink-0 flex items-center justify-center overflow-hidden rounded-xl border border-emerald-600/30 shadow-sm bg-white p-0.5 transition-transform group-hover:scale-105">
        <img 
          src="/logo.jpg" 
          alt="Golden Home Premium Cleaning Service Dubai" 
          className="h-10 w-10 sm:h-11 sm:w-11 object-cover object-center rounded-lg"
          onError={(e) => {
            if (e.target.src.endsWith('/logo.jpg')) {
              e.target.src = '/logo.jpeg';
            } else {
              e.target.src = '/logo.svg';
            }
          }}
        />
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif tracking-[0.07em] text-base sm:text-lg 2xl:text-xl font-extrabold leading-tight transition-colors ${
            isLight 
              ? 'text-[#0b462f] group-hover:text-[#059669]' 
              : 'text-white group-hover:text-[#f5d77f]'
          }`}>
            GOLDEN HOME
          </span>
          <span className={`hidden min-[400px]:block text-[8px] sm:text-[9px] font-bold tracking-[0.13em] 2xl:tracking-[0.2em] uppercase ${
            isLight ? 'text-[#a17c10]' : 'text-[#f5d77f]'
          }`}>
            Premium Home Cleaning • Dubai
          </span>
        </div>
      )}
    </Link>
  );
}
