/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Car } from 'lucide-react';
import millenniumTowerImg from '../assets/images/millennium_tower_mission_1790865634563.jpg';

export const Location: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Millennium+Tower,+301+Mission+St,+San+Francisco,+CA';

  return (
    <section id="location" className="relative py-28 sm:py-36 bg-[#040405] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with entrance animation */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-[#DFBF73] uppercase mb-4 font-mono font-medium">
            <span>Physical Address</span>
            <span aria-hidden="true" className="text-[#D4AF37]/50">·</span>
            <span>San Francisco</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF7EE] tracking-tight leading-[1.12] text-balance">
            Rooted at Millennium Tower.
          </h2>
        </motion.div>

        {/* Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Architectural Image Presentation with entrance animation */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0A0A0E] group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={millenniumTowerImg}
                  alt="Millennium Tower at 301 Mission Street in San Francisco"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              <div className="p-5 bg-[#08080B] border-t border-[#D4AF37]/20 flex items-center justify-between text-xs tracking-wider text-[#A5A198] font-sans">
                <span>Millennium Tower Exterior</span>
                <span className="text-[#DFBF73] font-serif uppercase tracking-widest text-[11px]">301 Mission St</span>
              </div>
            </div>
          </motion.div>

          {/* Details & Actions with entrance animation */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="bg-[#0A0A0E] border border-white/10 p-8 sm:p-10 rounded-xl space-y-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#14141A] border border-[#D4AF37]/40 text-[#DFBF73] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#F4E8CB] font-light mb-1">
                    Millennium Tower
                  </h3>
                  <p className="text-base text-[#E8E6E3] font-medium font-sans">
                    301 Mission Street
                  </p>
                  <p className="text-sm text-[#A8A49C] font-sans">
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#C4C0B8] leading-relaxed font-light font-sans">
                Positioned in San Francisco’s Transbay / SOMA core, Millennium Tower offers a central
                nexus for residential clients across the Bay Area. Private client consultations and
                document reviews are hosted by appointment in a secure, discreet setting.
              </p>

              {/* Direct Tap-to-Directions Action */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-4 font-sans">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#0A0A0C] bg-[#DFBF73] hover:bg-[#EAD49E] transition-all duration-200 rounded cursor-pointer whitespace-nowrap shadow-md shadow-[#D4AF37]/20"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Arrival & Security Protocol */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#A8A49C] font-sans">
              <div className="p-4 rounded-lg border border-white/5 bg-[#0A0A0E]/80 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#E8E6E3] font-medium mb-1">Concierge & Privacy</div>
                  <p className="leading-relaxed">Full building concierge protocol with pre-registered guest access.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-white/5 bg-[#0A0A0E]/80 flex items-start gap-3">
                <Car className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#E8E6E3] font-medium mb-1">Transit & Valet</div>
                  <p className="leading-relaxed">Convenient access via Mission St and adjacent Transbay Transit hub.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
