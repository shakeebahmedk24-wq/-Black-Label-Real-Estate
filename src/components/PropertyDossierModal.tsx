/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Bed, Bath, Maximize2, Shield, ArrowUpRight, Check } from 'lucide-react';
import { PropertyListing } from '../data/properties';

interface PropertyDossierModalProps {
  property: PropertyListing | null;
  onClose: () => void;
  onRequestShowing: (propertyTitle: string) => void;
}

export const PropertyDossierModal: React.FC<PropertyDossierModalProps> = ({
  property,
  onClose,
  onRequestShowing,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#0A0A0E] border border-[#D4AF37]/35 rounded-xl shadow-2xl overflow-y-auto flex flex-col">
        {/* Header Action Bar */}
        <div className="sticky top-0 z-20 bg-[#0A0A0E]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#DFBF73]">
              Residence Dossier
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-[#A8A49C] tracking-wider truncate max-w-xs sm:max-w-md">
              {property.neighborhood}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#A8A49C] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Main Hero Visual with Status Tag */}
          <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0E0E14] aspect-[16/10] sm:aspect-[16/9]">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#0A0A0C] bg-[#DFBF73] rounded shadow-md">
                {property.status}
              </span>
            </div>

            {/* Bottom Photo Caption */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#DFBF73] font-mono">
                  {property.neighborhood}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                  {property.title}
                </h3>
              </div>
              <div className="text-sm font-serif text-[#DFBF73] tracking-widest uppercase">
                {property.priceText}
              </div>
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-5 rounded-lg bg-[#111116] border border-white/5 text-xs text-[#C4C0B8]">
            <div className="space-y-1">
              <div className="text-[#8E8B83] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Bed className="w-3.5 h-3.5 text-[#DFBF73]" /> Bedrooms
              </div>
              <div className="text-base text-white font-serif">{property.specs.beds} Suites</div>
            </div>

            <div className="space-y-1">
              <div className="text-[#8E8B83] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Bath className="w-3.5 h-3.5 text-[#DFBF73]" /> Bathrooms
              </div>
              <div className="text-base text-white font-serif">{property.specs.baths} Baths</div>
            </div>

            <div className="space-y-1">
              <div className="text-[#8E8B83] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Maximize2 className="w-3.5 h-3.5 text-[#DFBF73]" /> Interior Space
              </div>
              <div className="text-base text-white font-serif">{property.specs.sqft}</div>
            </div>

            <div className="space-y-1">
              <div className="text-[#8E8B83] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Shield className="w-3.5 h-3.5 text-[#DFBF73]" /> Outdoor
              </div>
              <div className="text-base text-white font-serif">{property.specs.outdoor}</div>
            </div>

            <div className="space-y-1 col-span-2 sm:col-span-1">
              <div className="text-[#8E8B83] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <MapPin className="w-3.5 h-3.5 text-[#DFBF73]" /> Parking
              </div>
              <div className="text-base text-white font-serif">{property.specs.parking}</div>
            </div>
          </div>

          {/* Architectural Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#DFBF73] font-medium">
                Architectural Narrative
              </h4>
              <p className="text-base sm:text-lg text-[#E8E6E3] font-light leading-relaxed">
                {property.narrative}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#9E9B93]">
                <MapPin className="w-3.5 h-3.5 text-[#DFBF73]" />
                <span>{property.address}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0E0E14] border border-[#D4AF37]/20 rounded-lg p-6 space-y-4">
              <h5 className="font-serif text-lg text-[#F4E8CB] font-light">
                Private Viewing Protocol
              </h5>
              <p className="text-xs text-[#A8A49C] leading-relaxed font-light">
                Discreet in-person architectural walkthroughs and private chauffeured tours are
                scheduled strictly by private appointment for verified principals.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onRequestShowing(property.title);
                }}
                className="w-full py-3.5 px-4 text-xs uppercase tracking-[0.18em] font-semibold text-[#0A0A0C] bg-[#DFBF73] hover:bg-[#EAD49E] rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#D4AF37]/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Request Private Showing</span>
              </button>
            </div>
          </div>

          {/* Architectural Specifications List */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#DFBF73] font-medium">
              Property Specifications & Finishes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C4C0B8]">
              {property.architecturalHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded bg-[#111116] border border-white/5 flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-[#DFBF73] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="sticky bottom-0 bg-[#0A0A0E]/95 backdrop-blur-md px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#8E8B83]">
            <span>Offered through Black Label Real Estate · Millennium Tower, SF</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestShowing(property.title);
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#0A0A0C] bg-[#DFBF73] hover:bg-[#EAD49E] rounded transition-all cursor-pointer whitespace-nowrap"
            >
              Book Showing
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-[#C4C0B8] hover:text-white border border-white/10 hover:border-white/20 rounded transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
