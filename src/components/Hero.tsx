/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Search, ChevronDown, Check } from 'lucide-react';
import modernLuxuryImg from '../assets/images/modern_luxury_residence_1790878829569.jpg';

interface HeroProps {
  onOpenInquiry: () => void;
  onRequestShowing?: (propertyTitle: string) => void;
  onSearch?: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onSearch }) => {
  const prefersReducedMotion = useReducedMotion();

  // Capsule Filter States (US Luxury Market)
  const [category, setCategory] = useState('Rent / Buy');
  const [location, setLocation] = useState('San Francisco, CA');
  const [type, setType] = useState('Penthouse / Manor');
  const [price, setPrice] = useState('$5M – $35M+');

  // Open dropdown tracker
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const capsuleRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (capsuleRef.current && !capsuleRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleExecuteSearch = () => {
    setOpenDropdown(null);
    if (onSearch) {
      // Pick targeted search term for US properties
      let queryTerm = '';
      if (location.includes('Pacific Heights')) queryTerm = 'Pacific Heights';
      else if (location.includes('Millennium')) queryTerm = 'Millennium';
      else if (location.includes('Russian Hill')) queryTerm = 'Russian Hill';
      else if (location.includes('Telegraph')) queryTerm = 'Telegraph';
      else if (type.includes('Penthouse')) queryTerm = 'Penthouse';
      else if (type.includes('Manor')) queryTerm = 'Mansion';
      else if (type.includes('Villa')) queryTerm = 'Villa';
      else if (category.includes('Rent')) queryTerm = 'Rent';
      else if (category.includes('Buy')) queryTerm = 'Buy';
      else queryTerm = 'San Francisco';

      onSearch(queryTerm);
    } else {
      const el = document.getElementById('residences');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePinClick = (pinType: string) => {
    if (pinType === 'Rent') {
      setCategory('Rent');
      if (onSearch) onSearch('Rent');
    } else if (pinType === 'Buy') {
      setCategory('Buy');
      if (onSearch) onSearch('Buy');
    } else if (pinType === 'Sell') {
      onOpenInquiry();
    }
  };

  return (
    <section
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#0A0D12] pt-28 pb-10"
      aria-label="Find A Home That Suits Your Lifestyle"
    >
      {/* ------------------------------------------------------------- */}
      {/* 1. Photorealistic Modern Architectural Hero Background */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img
          src={modernLuxuryImg}
          alt="Modern luxury multi-story architectural residence with sunlit glass and terraces"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* Ambient Photographic Gradient Scrims for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. Interactive Hotspot Callout Pins with Leader Lines */}
      {/* ------------------------------------------------------------- */}

      {/* Pin 1: Rent Property (Upper Left Roofline) */}
      <div className="absolute top-[28%] left-[16%] sm:left-[23%] z-20">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glowing Pin Dot */}
          <div className="relative flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-white/80 bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg shadow-white/20 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-white shadow-sm" />
            </div>

            {/* Diagonal SVG Leader Line pointing down-left */}
            <svg
              className="absolute top-2.5 right-2.5 w-24 h-12 pointer-events-none"
              viewBox="0 0 96 48"
              fill="none"
            >
              <path
                d="M96 0 L40 32 L0 32"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1.5"
              />
            </svg>

            {/* Frosted Glass Callout Pill */}
            <button
              type="button"
              onClick={() => handlePinClick('Rent')}
              className="absolute top-6 right-16 sm:right-20 px-4 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/40 text-white font-medium text-xs tracking-wide shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Rent Property
            </button>
          </div>
        </motion.div>
      </div>

      {/* Pin 2: Buy Property (Center-Right Atrium Parapet) */}
      <div className="absolute top-[26%] left-[54%] sm:left-[56%] z-20">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-white/80 bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg shadow-white/20 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-white shadow-sm" />
            </div>

            {/* Diagonal SVG Leader Line pointing down-right */}
            <svg
              className="absolute top-2.5 left-2.5 w-24 h-12 pointer-events-none"
              viewBox="0 0 96 48"
              fill="none"
            >
              <path
                d="M0 0 L56 32 L96 32"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1.5"
              />
            </svg>

            {/* Frosted Glass Callout Pill */}
            <button
              type="button"
              onClick={() => handlePinClick('Buy')}
              className="absolute top-6 left-16 sm:left-20 px-4 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/40 text-white font-medium text-xs tracking-wide shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Buy Property
            </button>
          </div>
        </motion.div>
      </div>

      {/* Pin 3: Sell Property (Right Balcony) */}
      <div className="absolute top-[32%] left-[68%] sm:left-[71%] z-20 hidden md:block">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-white/80 bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg shadow-white/20 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-white shadow-sm" />
            </div>

            {/* Diagonal SVG Leader Line */}
            <svg
              className="absolute top-2.5 left-2.5 w-24 h-12 pointer-events-none"
              viewBox="0 0 96 48"
              fill="none"
            >
              <path
                d="M0 0 L56 32 L96 32"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1.5"
              />
            </svg>

            {/* Frosted Glass Callout Pill */}
            <button
              type="button"
              onClick={() => handlePinClick('Sell')}
              className="absolute top-6 left-16 sm:left-20 px-4 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/40 text-white font-medium text-xs tracking-wide shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Sell Property
            </button>
          </div>
        </motion.div>
      </div>

      {/* Tilted Angled Pill: Welcome To All State */}
      <div className="absolute top-[42%] left-[16%] sm:left-[24%] z-20 -rotate-12 transform">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-black/40 hover:bg-black/55 backdrop-blur-md border border-white/40 text-white font-medium text-xs sm:text-sm tracking-wider shadow-2xl transition-all"
        >
          Welcome To All State
        </motion.div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. Central Majestic Display Headline */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center my-auto pt-24 sm:pt-32 pb-10">
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-white tracking-tight leading-[1.08] text-balance drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        >
          Find A Home That<br />
          Suits Your Lifestyle
        </motion.h1>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. Floating Multi-Field Capsule Search Bar */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        ref={capsuleRef}
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8"
      >
        <div className="relative bg-white/95 backdrop-blur-2xl rounded-full shadow-[0_24px_60px_rgba(0,0,0,0.45)] border border-white/70 p-2 sm:p-2.5 pl-6 sm:pl-8 pr-2 sm:pr-2.5 flex items-center justify-between gap-2 sm:gap-4 transition-all">
          {/* Field 1: Category */}
          <div className="relative flex-1 text-left min-w-[90px] sm:min-w-[110px]">
            <span className="block text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-0.5">
              Category
            </span>
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
              className="text-xs sm:text-sm font-semibold text-gray-900 flex items-center justify-between w-full pr-1.5 hover:text-[#DFBF73] transition-colors cursor-pointer"
            >
              <span className="truncate">{category}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
                  openDropdown === 'category' ? 'rotate-180 text-[#DFBF73]' : ''
                }`}
              />
            </button>

            {/* Category Dropdown */}
            {openDropdown === 'category' && (
              <div className="absolute bottom-full mb-3 left-0 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {['Rent / Buy', 'Buy (Acquisition)', 'Rent (Executive Lease)'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setCategory(item);
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-medium rounded-xl flex items-center justify-between transition-colors ${
                      category === item
                        ? 'bg-[#DFBF73]/15 text-gray-900 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{item}</span>
                    {category === item && <Check className="w-3.5 h-3.5 text-[#DFBF73]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-8 w-px bg-gray-200 hidden sm:block shrink-0" />

          {/* Field 2: Location */}
          <div className="relative flex-1 text-left min-w-[90px] sm:min-w-[110px]">
            <span className="block text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-0.5">
              Location
            </span>
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'location' ? null : 'location')}
              className="text-xs sm:text-sm font-semibold text-gray-900 flex items-center justify-between w-full pr-1.5 hover:text-[#DFBF73] transition-colors cursor-pointer"
            >
              <span className="truncate">{location}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
                  openDropdown === 'location' ? 'rotate-180 text-[#DFBF73]' : ''
                }`}
              />
            </button>

            {/* Location Dropdown */}
            {openDropdown === 'location' && (
              <div className="absolute bottom-full mb-3 left-0 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {[
                  'San Francisco, CA',
                  'Pacific Heights, SF',
                  'Millennium Tower, SF',
                  'Russian Hill, SF',
                  'Telegraph Hill, SF',
                  'New York (Manhattan)',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setLocation(item);
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-medium rounded-xl flex items-center justify-between transition-colors ${
                      location === item
                        ? 'bg-[#DFBF73]/15 text-gray-900 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{item}</span>
                    {location === item && <Check className="w-3.5 h-3.5 text-[#DFBF73]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-8 w-px bg-gray-200 hidden sm:block shrink-0" />

          {/* Field 3: Type */}
          <div className="relative flex-1 text-left min-w-[80px] sm:min-w-[100px]">
            <span className="block text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-0.5">
              Type
            </span>
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
              className="text-xs sm:text-sm font-semibold text-gray-900 flex items-center justify-between w-full pr-1.5 hover:text-[#DFBF73] transition-colors cursor-pointer"
            >
              <span className="truncate">{type}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
                  openDropdown === 'type' ? 'rotate-180 text-[#DFBF73]' : ''
                }`}
              />
            </button>

            {/* Type Dropdown */}
            {openDropdown === 'type' && (
              <div className="absolute bottom-full mb-3 left-0 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {['Penthouse / Manor', 'Grand Penthouse', 'Historic Mansion', 'Modernist Villa'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setType(item);
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-medium rounded-xl flex items-center justify-between transition-colors ${
                      type === item
                        ? 'bg-[#DFBF73]/15 text-gray-900 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{item}</span>
                    {type === item && <Check className="w-3.5 h-3.5 text-[#DFBF73]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-8 w-px bg-gray-200 hidden md:block shrink-0" />

          {/* Field 4: Price (US Market) */}
          <div className="relative flex-1 text-left min-w-[90px] sm:min-w-[110px] hidden md:block">
            <span className="block text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-0.5">
              Price (USD)
            </span>
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'price' ? null : 'price')}
              className="text-xs sm:text-sm font-semibold text-gray-900 flex items-center justify-between w-full pr-1.5 hover:text-[#DFBF73] transition-colors cursor-pointer"
            >
              <span className="truncate">{price}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
                  openDropdown === 'price' ? 'rotate-180 text-[#DFBF73]' : ''
                }`}
              />
            </button>

            {/* Price Dropdown */}
            {openDropdown === 'price' && (
              <div className="absolute bottom-full mb-3 right-0 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {['$5M – $35M+', '$5M – $10M', '$10M – $20M', '$20M – $35M+', '$15K – $50K/Mo (Lease)'].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setPrice(item);
                        setOpenDropdown(null);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-medium rounded-xl flex items-center justify-between transition-colors ${
                        price === item
                          ? 'bg-[#DFBF73]/15 text-gray-900 font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{item}</span>
                      {price === item && <Check className="w-3.5 h-3.5 text-[#DFBF73]" />}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Golden Circular Search Button */}
          <button
            type="button"
            onClick={handleExecuteSearch}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#DFBF73] hover:bg-[#C9A658] active:scale-95 text-[#0A0A0C] flex items-center justify-center shadow-lg shadow-[#D4AF37]/35 transition-all cursor-pointer shrink-0 ml-1 hover:shadow-[#D4AF37]/50"
            aria-label="Search properties"
          >
            <Search className="w-5 h-5 text-[#0A0A0C]" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
