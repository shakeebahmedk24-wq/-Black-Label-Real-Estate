/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BookOpen, Shield } from 'lucide-react';
import sfPenthouseImg from '../assets/images/sf_penthouse_interior_1790865610344.jpg';

export const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#040405] border-t border-[#D4AF37]/15 overflow-hidden"
      aria-label="About Black Lifestyle - Premier Real Estate Advisory"
    >
      {/* Decorative vertical architectural guides */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 pointer-events-none flex justify-between">
        <div className="w-[1px] h-full bg-[#D4AF37]/5" />
        <div className="w-[1px] h-full bg-[#D4AF37]/5 hidden md:block" />
        <div className="w-[1px] h-full bg-[#D4AF37]/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Anchor for Manifesto */}
        <div id="manifesto" className="sr-only">About Black Lifestyle Real Estate Advisory</div>

        {/* Unified Editorial Grid: The Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Column Delivering The Message */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 text-xs tracking-[0.24em] text-[#DFBF73] uppercase mb-4 font-mono font-medium"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#DFBF73]" />
                <span>About Black Lifestyle</span>
                <span aria-hidden="true" className="text-[#D4AF37]/50">·</span>
                <span>Premier Real Estate Advisory</span>
              </motion.div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF7EE] tracking-tight leading-[1.12] text-balance">
                Curating Exceptional Homes Tailored to Your Lifestyle.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#C4C0B8] leading-relaxed font-light font-sans">
              <motion.p
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At Black Lifestyle, we believe finding a home transcends the standard real estate search—it is the curation of your daily environment and personal sanctuary. From skyline penthouses with panoramic bay views to private architectural manors, every property in our portfolio represents exceptional design and refined living.
              </motion.p>
              <motion.p
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Whether you are seeking to acquire a landmark residence, secure an executive lease, or discreetly market a prestigious property, our advisory offers confidential representation, exclusive off-market opportunities, and comprehensive fiduciary guidance tailored to your ambitions.
              </motion.p>
              <motion.p
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                With deep market intelligence and an exacting eye for craftsmanship, we partner with discerning buyers, sellers, and investors to deliver an effortless, bespoke real estate experience.
              </motion.p>
            </div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs tracking-wider text-[#9E9B93] font-sans"
            >
              <span className="flex items-center gap-1.5 text-[#DFBF73] font-mono">
                <Shield className="w-3.5 h-3.5" />
                <span>Discreet Advisory</span>
              </span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Off-Market Access</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>San Francisco & Premier Markets</span>
            </motion.div>
          </motion.div>

          {/* Architectural Image Presentation */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94, y: 32 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0A0A0E] group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={sfPenthouseImg}
                  alt="Interior architectural residence overlooking San Francisco Bay from Millennium Tower"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Measured Editorial Overlay Kicker */}
              <div className="p-5 bg-[#08080B] border-t border-[#D4AF37]/20 flex items-center justify-between text-xs tracking-wider text-[#A5A198] font-sans">
                <span className="font-mono text-[#DFBF73] uppercase tracking-widest text-[11px]">301 Mission St</span>
                <span className="text-[#C4C0B8]">Millennium Tower Headquarters</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
