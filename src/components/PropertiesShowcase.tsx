/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin, Eye, Calendar, Search, X } from 'lucide-react';
import { curatedProperties, PropertyListing } from '../data/properties';
import { PropertyDossierModal } from './PropertyDossierModal';

interface PropertiesShowcaseProps {
  onRequestShowing: (propertyTitle: string) => void;
  searchQuery?: string;
  onClearSearch?: () => void;
}

export const PropertiesShowcase: React.FC<PropertiesShowcaseProps> = ({
  onRequestShowing,
  searchQuery,
  onClearSearch,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activePropertyModal, setActivePropertyModal] = useState<PropertyListing | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const categories = ['All', 'Penthouses', 'Historic Mansions', 'Modernist Architectural'];

  const query = searchQuery?.toLowerCase().trim() || '';

  const filteredProperties = curatedProperties.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    if (!query) return matchesCategory;

    const matchesQuery =
      p.title.toLowerCase().includes(query) ||
      p.neighborhood.toLowerCase().includes(query) ||
      p.address.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  return (
    <section
      id="residences"
      className="relative py-28 sm:py-36 bg-[#040405] border-t border-[#D4AF37]/15"
      aria-label="Notable San Francisco Residences and Architectural Studies"
    >
      {/* Decorative hairline architectural lines */}
      <div className="absolute inset-0 max-w-[1536px] mx-auto px-6 sm:px-8 pointer-events-none flex justify-between">
        <div className="w-[1px] h-full bg-[#D4AF37]/5" />
        <div className="w-[1px] h-full bg-[#D4AF37]/5 hidden lg:block" />
        <div className="w-[1px] h-full bg-[#D4AF37]/5" />
      </div>

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-8">
        {/* Section Header with entrance animation */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-[#DFBF73] uppercase mb-4 font-medium font-mono">
              <span>Architectural Studies</span>
              <span aria-hidden="true" className="text-[#D4AF37]/50">·</span>
              <span>San Francisco Provenance</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF7EE] tracking-tight leading-[1.12] text-balance">
              Notable Residences & Architectural Case Studies.
            </h2>
          </div>
          <p className="text-sm text-[#A8A49C] max-w-sm leading-relaxed font-light font-sans">
            A discreet examination of penthouses, limestone manors, and view villas across San Francisco—studied
            for their architectural integrity, light exposure, and permanent value.
          </p>
        </motion.div>

        {/* Category Filter Tabs with entrance animation */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs tracking-[0.16em] uppercase rounded transition-all duration-200 cursor-pointer whitespace-nowrap font-medium ${
                activeCategory === cat
                  ? 'bg-[#DFBF73] text-[#0A0A0C] shadow-sm shadow-[#D4AF37]/20 font-semibold'
                  : 'bg-[#0E0E12] text-[#A5A198] border border-white/5 hover:border-[#D4AF37]/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-[#706C64] font-mono ml-auto hidden sm:inline-block">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'Residence' : 'Residences'} Under Custody
          </span>
        </motion.div>

        {/* Search Results Filter Banner */}
        {searchQuery && (
          <div className="mb-8 p-3.5 px-5 rounded-lg bg-[#0E0E14] border border-[#D4AF37]/35 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-[#DFBF73]" />
              <span className="text-[#A5A198]">Filtering results for:</span>
              <span className="text-[#F4E8CB] font-serif font-medium text-sm">"{searchQuery}"</span>
              <span className="text-[#7E7A72]">({filteredProperties.length} found)</span>
            </div>
            {onClearSearch && (
              <button
                onClick={onClearSearch}
                className="text-[#DFBF73] hover:text-white flex items-center gap-1 cursor-pointer transition-colors text-[11px] uppercase tracking-wider font-mono"
              >
                <span>Reset search</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 px-6 border border-white/5 rounded-2xl bg-[#08080C] my-4">
            <h3 className="font-serif text-2xl text-[#F4E8CB] mb-2 font-light">
              No architectural residences match your search.
            </h3>
            <p className="text-sm text-[#8E8B83] mb-6 font-light max-w-md mx-auto">
              Please try adjusting your terms or explore our complete San Francisco portfolio.
            </p>
            {onClearSearch && (
              <button
                onClick={onClearSearch}
                className="px-6 py-3 text-xs uppercase tracking-[0.16em] bg-[#DFBF73] hover:bg-[#EAD49E] text-[#0A0A0C] font-semibold rounded cursor-pointer transition-all shadow-md shadow-[#D4AF37]/20"
              >
                View All Available Residences
              </button>
            )}
          </div>
        )}

        {/* 4 Listings In A Single Horizontal Line on Desktop with entrance animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredProperties.map((property, idx) => (
            <motion.article
              key={property.id}
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: prefersReducedMotion ? 0 : idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-[#0A0A0E] border border-white/10 hover:border-[#D4AF37]/45 rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom & Status Pill */}
                <div
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#121217]"
                  onClick={() => setActivePropertyModal(property)}
                >
                  <img
                    src={property.image}
                    alt={`${property.title} - ${property.neighborhood}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] font-semibold text-[#0A0A0C] bg-[#DFBF73] rounded shadow-sm">
                      {property.status}
                    </span>
                  </div>

                  {/* Index / Roman Numeral */}
                  <div className="absolute top-3 right-3 text-[11px] font-mono text-white/70 tracking-widest bg-black/50 backdrop-blur-md px-2 py-0.5 rounded">
                    0{idx + 1}
                  </div>

                  {/* Quick Preview Hover Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md text-[#DFBF73] text-[10px] uppercase tracking-[0.2em] rounded border border-[#D4AF37]/40 flex items-center gap-1.5">
                      <Eye className="w-3 h-3" />
                      <span>Examine Study</span>
                    </span>
                  </div>

                  {/* Overlay Bottom Neighborhood Tag */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-center gap-1 text-[11px] text-[#DFBF73] font-mono tracking-wider truncate">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">{property.neighborhood}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Specs */}
                <div className="p-5 space-y-4">
                  <h3
                    onClick={() => setActivePropertyModal(property)}
                    className="font-serif text-lg sm:text-xl text-white font-light group-hover:text-[#FFF6E5] transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {property.title}
                  </h3>

                  {/* Clean Unboxed Specifications */}
                  <div className="flex items-center gap-2 text-xs text-[#C4C0B8] pb-3 border-b border-white/5 font-sans">
                    <div className="flex items-center gap-1">
                      <Bed className="w-3 h-3 text-[#DFBF73]" />
                      <span>{property.specs.beds} Beds</span>
                    </div>
                    <span aria-hidden="true" className="text-white/20">·</span>
                    <div className="flex items-center gap-1">
                      <Bath className="w-3 h-3 text-[#DFBF73]" />
                      <span>{property.specs.baths} Baths</span>
                    </div>
                    <span aria-hidden="true" className="text-white/20">·</span>
                    <div className="flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-[#DFBF73]" />
                      <span>{property.specs.sqft}</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs text-[#8E8B83] leading-relaxed font-light line-clamp-2 font-sans">
                    {property.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-3 border-t border-white/5 flex flex-col gap-3 font-sans">
                <div className="text-[11px] font-serif text-[#DFBF73] uppercase tracking-[0.16em]">
                  {property.priceText}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActivePropertyModal(property)}
                    className="flex-1 py-2 text-[11px] uppercase tracking-[0.14em] text-[#C4C0B8] hover:text-white border border-white/10 hover:border-[#D4AF37]/40 rounded transition-all cursor-pointer inline-flex items-center justify-center gap-1"
                  >
                    <span>Monograph</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onRequestShowing(property.title)}
                    className="flex-1 py-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#0A0A0C] bg-[#DFBF73] hover:bg-[#EAD49E] rounded transition-all cursor-pointer inline-flex items-center justify-center gap-1 shadow-sm shadow-[#D4AF37]/20 whitespace-nowrap"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Property Lightbox & Full Dossier Modal */}
      <PropertyDossierModal
        property={activePropertyModal}
        onClose={() => setActivePropertyModal(null)}
        onRequestShowing={onRequestShowing}
      />
    </section>
  );
};
