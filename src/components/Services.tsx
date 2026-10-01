/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Check,
  ArrowRight,
  Mail,
  MessageSquare,
  Send,
  Share2,
  Gift,
  Sparkles,
  Compass,
} from 'lucide-react';
import modernGlassVillaImg from '../assets/images/modern_glass_villa_1790882241912.jpg';
import luxuryCraftsmanImg from '../assets/images/luxury_craftsman_home_1790882256450.jpg';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'address' | 'client' | 'insight'>('address');

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-[#040405] border-t border-[#D4AF37]/15 overflow-hidden"
      aria-label="Find Your Dream Home & Fiduciary Advisory Services"
    >
      {/* Decorative vertical architectural guides */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 pointer-events-none flex justify-between">
        <div className="w-[1px] h-full bg-[#D4AF37]/5" />
        <div className="w-[1px] h-full bg-[#D4AF37]/5 hidden md:block" />
        <div className="w-[1px] h-full bg-[#D4AF37]/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 space-y-28 sm:space-y-36">
        {/* ============================================================= */}
        {/* ROW 1: "Put your home in expert hands" (Text Left, Image Right) */}
        {/* ============================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Checklist */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <div>
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 text-xs tracking-[0.24em] text-[#DFBF73] uppercase mb-4 font-mono font-medium"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DFBF73]" />
                <span>Premier Advisory</span>
                <span aria-hidden="true" className="text-[#D4AF37]/50">·</span>
                <span>Guaranteed Stewardship</span>
              </motion.div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF7EE] tracking-tight leading-[1.14] text-balance">
                Put your home in expert hands. We find your dream home guaranteed
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#C4C0B8] leading-relaxed font-light font-sans">
              In the last year, we&apos;ve achieved an average of 10% above the &apos;offers over&apos; asking price* — we understand how to set the right price to drive interest and offers. Every home needs a unique approach to bring it to life. For your home, we&apos;ll create cinema-grade photography, bespoke videography, and precision spatial floorplans.
            </p>

            {/* Checkmark List with Staggered Entrance */}
            <ul className="space-y-3.5 font-sans text-sm text-[#E2DFD8]">
              {[
                'Property management tailored to meet your unique needs',
                'Whether you have a single rental unit or a large generational portfolio',
                'Personalized fiduciary attention that ensures your properties thrive',
              ].map((text, idx) => (
                <motion.li
                  key={idx}
                  initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#DFBF73]/20 border border-[#DFBF73]/60 flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-[#DFBF73]/10">
                    <Check className="w-3 h-3 text-[#DFBF73]" />
                  </div>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-2"
            >
              <button
                type="button"
                onClick={() => onSelectService('Selling')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0A0A0C] bg-[#DFBF73] hover:bg-[#EAD49E] rounded-full shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/45 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Get started free demo</span>
                <ArrowRight className="w-4 h-4 text-[#0A0A0C]" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Architectural Image & Floating "Way to connect" Card */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94, y: 32 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Main Luxury Home Image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0E] group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={modernGlassVillaImg}
                  alt="Modern two-story luxury architectural home with glass balconies and cedar wood"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Overlapping Card: "Way to connect" with Staggered Entrance */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-left-8 sm:w-72 bg-[#0C0D12]/92 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20"
            >
              <h3 className="font-serif text-sm sm:text-base font-light text-[#FBF7EE] mb-4">
                Way to connect
              </h3>

              <div className="space-y-3 font-sans text-xs">
                {/* Step 1 */}
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#ECEAE6] hover:border-[#DFBF73]/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#DFBF73]/20 border border-[#DFBF73]/40 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#DFBF73]" />
                  </div>
                  <span className="font-medium">1. Sign up with email</span>
                </motion.div>

                {/* Connecting arrow dot */}
                <div className="flex justify-center -my-1 text-[#DFBF73]/50">
                  <span className="text-[10px]">↓</span>
                </div>

                {/* Step 2 */}
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#ECEAE6] hover:border-[#DFBF73]/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#DFBF73]/20 border border-[#DFBF73]/40 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3.5 h-3.5 text-[#DFBF73]" />
                  </div>
                  <span className="font-medium">2. Conversation with us</span>
                </motion.div>

                {/* Connecting arrow dot */}
                <div className="flex justify-center -my-1 text-[#DFBF73]/50">
                  <span className="text-[10px]">↓</span>
                </div>

                {/* Step 3 */}
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#ECEAE6] hover:border-[#DFBF73]/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#DFBF73]/20 border border-[#DFBF73]/40 flex items-center justify-center shrink-0">
                    <Send className="w-3.5 h-3.5 text-[#DFBF73]" />
                  </div>
                  <span className="font-medium">3. Close the final deals</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ============================================================= */}
        {/* ROW 2: "Find the property that brings your vision to life"     */}
        {/* (Image Left with Overlapping Badges, Text Right)              */}
        {/* ============================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Form and Reward Cards */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94, y: 32 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            {/* Main Luxury Home Image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0E] group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={luxuryCraftsmanImg}
                  alt="Modern luxury craftsman architecture with crisp white siding and manicured lawn"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1: Top-Left Tabbed Form Card with Entrance Animation */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -24, x: -16 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 sm:mb-0 sm:absolute sm:-top-7 sm:-left-6 sm:w-60 bg-[#0C0D12]/92 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20"
            >
              {/* Tabs */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 text-[11px] font-sans">
                {(['address', 'client', 'insight'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`capitalize transition-colors cursor-pointer pb-0.5 ${
                      activeTab === tab
                        ? 'text-[#DFBF73] font-semibold border-b-2 border-[#DFBF73]'
                        : 'text-[#8E8B83] hover:text-[#C4C0B8]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Form Input Mockups */}
              <div className="space-y-2">
                <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-[#A5A198] font-sans flex items-center justify-between">
                  <span>Full name</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-[#A5A198] font-sans flex items-center justify-between">
                  <span>Company email</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Bottom-Right "Your Rewards" & Social Pill with Entrance Animation */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24, x: 16 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 sm:w-64 space-y-2.5 z-20"
            >
              {/* Pill badge: Share on social media */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C0D12]/92 backdrop-blur-xl border border-white/15 shadow-xl text-xs font-sans text-[#ECEAE6]">
                <div className="w-5 h-5 rounded-full bg-[#DFBF73] flex items-center justify-center text-[#0A0A0C]">
                  <Share2 className="w-3 h-3 text-[#0A0A0C]" />
                </div>
                <span className="font-medium text-[11px]">Share on social media</span>
              </div>

              {/* Card: Your Rewards */}
              <div className="bg-[#0C0D12]/92 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#DFBF73]/20 border border-[#DFBF73]/40 flex items-center justify-center text-[#DFBF73]">
                    <Gift className="w-3.5 h-3.5 text-[#DFBF73]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#8E8B83] uppercase tracking-wider font-mono">
                      Client Rewards
                    </span>
                    <span className="text-xs font-semibold text-[#FBF7EE]">
                      Your Rewards
                    </span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between pt-1 border-t border-white/10 text-xs font-mono">
                  <span className="text-[#A5A198]">Bonus Value</span>
                  <span className="text-[#DFBF73] font-bold text-sm">£2,500</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Copy & Checklist */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 text-xs tracking-[0.24em] text-[#DFBF73] uppercase mb-4 font-mono font-medium"
              >
                <Compass className="w-3.5 h-3.5 text-[#DFBF73]" />
                <span>Market Intelligence</span>
                <span aria-hidden="true" className="text-[#D4AF37]/50">·</span>
                <span>Track Record</span>
              </motion.div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF7EE] tracking-tight leading-[1.14] text-balance">
                Find the property that brings your vision to life Strong track record
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#C4C0B8] leading-relaxed font-light font-sans">
              Find the property that brings your vision to life. Tell us your wants, needs and aspirations and we won&apos;t stop until we&apos;ve found you the right fit. From first homes to rural land and commercial opportunities, we have a specialist expert that knows the market inside out.
            </p>

            {/* Checkmark List with Staggered Entrance */}
            <ul className="space-y-3.5 font-sans text-sm text-[#E2DFD8]">
              {[
                'Helping you find the right home in the perfect neighbourhood.',
                'Our 34 experts advise owners and buyers on their commercial and residential property options.',
                'Our team provides valuation services with a primary focus on prime sectors, covering offices, retail and residences.',
              ].map((text, idx) => (
                <motion.li
                  key={idx}
                  initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#DFBF73]/20 border border-[#DFBF73]/60 flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-[#DFBF73]/10">
                    <Check className="w-3 h-3 text-[#DFBF73]" />
                  </div>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-2"
            >
              <button
                type="button"
                onClick={() => onSelectService('Buying')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0A0A0C] bg-[#DFBF73] hover:bg-[#EAD49E] rounded-full shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/45 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Get started free demo</span>
                <ArrowRight className="w-4 h-4 text-[#0A0A0C]" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
