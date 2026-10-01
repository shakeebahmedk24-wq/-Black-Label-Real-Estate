/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUp,
  MapPin,
  Clock,
  Shield,
  Compass,
  Building2,
  FileText,
  Lock,
  ExternalLink,
  Mail,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Millennium+Tower,+301+Mission+St,+San+Francisco,+CA+94105';

  return (
    <footer
      className="bg-[#030304] border-t border-[#D4AF37]/25 text-[#A5A198] pt-20 pb-12 font-sans"
      aria-label="Black Label Real Estate Corporate and Architectural Footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tier: Brand Essence & Headquarters Anchor with Entrance Animation */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10"
        >
          {/* Column 1: Monogram Wordmark & Fiduciary Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg border border-[#D4AF37]/50 bg-[#0E0E14] flex items-center justify-center text-[#DFBF73] font-serif text-base font-semibold tracking-wider shadow-md">
                BL
              </span>
              <div>
                <span className="font-serif text-xl tracking-[0.2em] text-[#F3E5C8] uppercase font-medium block">
                  Black Lifestyle
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8E8B83]">
                  San Francisco Residential Advisory
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9E9B93] leading-relaxed font-light">
              An unhurried fiduciary practice headquartered at Millennium Tower, dedicated to the custody,
              valuation, and discreet exchange of San Francisco’s defining residential architecture.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#DFBF73] hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
                <span>301 Mission St, Millennium Tower, San Francisco, CA 94105</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <div className="flex items-center gap-2 text-[#8E8B83] text-[11px] font-mono">
                <Clock className="w-3 h-3 text-[#D4AF37]" />
                <span>Private Appointments: Monday – Saturday, 9:00 AM – 7:00 PM PST</span>
              </div>
              <div className="flex items-center gap-2 text-[#8E8B83] text-[11px] font-mono">
                <Compass className="w-3 h-3 text-[#D4AF37]" />
                <span>Coordinates: 37.7904° N, 122.3972° W · Floor 42 Salon</span>
              </div>
            </div>
          </div>

          {/* Column 2: Architectural Enclaves & Territories */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DFBF73] font-medium">
              <Building2 className="w-3.5 h-3.5" />
              <span>Sovereign Enclaves</span>
            </div>
            <ul className="space-y-2 text-xs font-light text-[#C4C0B8]">
              <li>
                <a href="#residences" className="hover:text-[#DFBF73] transition-colors block">
                  Millennium Tower & SOMA High-Rise Core
                </a>
                <span className="text-[10px] text-[#706C64] block">58 Stories · 360° Bay Panoramas</span>
              </li>
              <li>
                <a href="#residences" className="hover:text-[#DFBF73] transition-colors block">
                  Pacific Heights & Gold Coast
                </a>
                <span className="text-[10px] text-[#706C64] block">Outer Broadway · Beaux-Arts Mansions</span>
              </li>
              <li>
                <a href="#residences" className="hover:text-[#DFBF73] transition-colors block">
                  Russian Hill Summit Terraces
                </a>
                <span className="text-[10px] text-[#706C64] block">Vallejo Crest · Modernist Architecture</span>
              </li>
              <li>
                <a href="#residences" className="hover:text-[#DFBF73] transition-colors block">
                  Telegraph Hill Maritime Slopes
                </a>
                <span className="text-[10px] text-[#706C64] block">Filbert Steps · Coit View Villas</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Fiduciary Practice Standards */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DFBF73] font-medium">
              <Shield className="w-3.5 h-3.5" />
              <span>Standards of Counsel</span>
            </div>
            <ul className="space-y-2 text-xs font-light text-[#C4C0B8]">
              <li>
                <a href="#services" className="hover:text-[#DFBF73] transition-colors block">
                  The Anti-Spectacle Protocol
                </a>
                <span className="text-[10px] text-[#706C64] block">Absolute Discretion & Zero PR Exploitation</span>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DFBF73] transition-colors block">
                  Fiduciary Alignment Over Velocity
                </a>
                <span className="text-[10px] text-[#706C64] block">Counseling Clients When Not To Transact</span>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DFBF73] transition-colors block">
                  Archival & Geotechnical Diligence
                </a>
                <span className="text-[10px] text-[#706C64] block">Bedrock Anchoring & Historic Easements</span>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DFBF73] transition-colors block">
                  Private Treaty Off-Market Placement
                </a>
                <span className="text-[10px] text-[#706C64] block">Direct Family Office & Estate Custody</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Direct Channel */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DFBF73] font-medium">
              <FileText className="w-3.5 h-3.5" />
              <span>Advisory Atlas</span>
            </div>
            <ul className="space-y-2 text-xs font-light text-[#C4C0B8]">
              <li>
                <a href="#about" className="hover:text-[#DFBF73] transition-colors">
                  The Message
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DFBF73] transition-colors">
                  The Principles
                </a>
              </li>
              <li>
                <a href="#residences" className="hover:text-[#DFBF73] transition-colors">
                  Architectural Studies
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#DFBF73] transition-colors">
                  Millennium Tower HQ
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#DFBF73] transition-colors text-[#DFBF73]">
                  Confidential Dialogue
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href="#inquiry"
                className="w-full py-2 px-3 rounded-lg bg-[#14141E] hover:bg-[#1A1A28] border border-[#D4AF37]/35 text-[11px] uppercase tracking-wider font-mono text-[#DFBF73] text-center block transition-all"
              >
                Request Partner Salon
              </a>
            </div>
          </div>
        </motion.div>

        {/* Middle Tier: Regulatory & Fiduciary Mandate Disclosures */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="py-8 border-b border-white/5 space-y-3 text-[11px] text-[#7E7A72] leading-relaxed font-light"
        >
          <div className="flex items-center gap-2 text-xs text-[#A5A198] font-medium font-mono uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#DFBF73]" />
            <span>Fiduciary & Regulatory Disclosure Notice</span>
          </div>
          <p>
            Black Lifestyle is a licensed California residential real estate brokerage and fiduciary advisory practice.
            All material presented herein is intended for informational and architectural archival purposes only. Information is compiled
            from verified historical records, architectural monographs, and property filings believed reliable, but is presented subject
            to errors, omissions, change of price, prior sale, or withdrawal without notice.
          </p>
          <p>
            We strictly adhere to the Fair Housing Act and the Equal Opportunity Housing Act. Off-market placements, private treaties,
            and confidential client representations are governed under California Real Estate Fiduciary Privilege and reciprocal
            non-disclosure covenants.
          </p>
        </motion.div>

        {/* Bottom Tier: Copyright, Equal Housing & Back-to-Top */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706C64]"
        >
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span>© {new Date().getFullYear()} Black Lifestyle. All rights reserved.</span>
            <span aria-hidden="true" className="text-white/10">·</span>
            <span className="text-[#9E9B93]">Millennium Tower, 301 Mission St</span>
            <span aria-hidden="true" className="text-white/10">·</span>
            <span className="text-[#DFBF73]">Equal Housing Opportunity</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#C4C0B8] hover:text-[#DFBF73] transition-colors cursor-pointer text-xs uppercase tracking-wider font-mono py-1 px-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/5"
            aria-label="Return to top of page"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};
