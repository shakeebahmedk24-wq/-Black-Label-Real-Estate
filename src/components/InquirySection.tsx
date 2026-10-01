/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Shield,
  MapPin,
  ExternalLink,
  Send,
  Building,
  X,
  CheckCircle2,
  Lock,
  Clock,
  Compass,
  Sparkles,
  PhoneCall,
  UserCheck,
  ChevronDown,
  Check,
} from 'lucide-react';

interface InquirySectionProps {
  selectedService: string;
  selectedProperty?: string;
  onClearSelectedProperty?: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  selectedService,
  selectedProperty,
  onClearSelectedProperty,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [interest, setInterest] = useState<string>('Estate Stewardship (Selling)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [meetingFormat, setMeetingFormat] = useState('Millennium Tower Private Salon');
  const [timeline, setTimeline] = useState('Immediate / Active');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [openDropdown, setOpenDropdown] = useState<'scope' | 'venue' | null>(null);
  const dropdownRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedProperty) {
      setInterest('Private Acquisition Search');
      setMeetingFormat('In-Person Private Residence Showing');
      setMessage((prev) =>
        prev ? prev : `I would like to arrange an exclusive private showing for: ${selectedProperty}.`
      );
    }
  }, [selectedProperty]);

  useEffect(() => {
    if (selectedService && !selectedProperty) {
      if (selectedService.toLowerCase().includes('buying') || selectedService.toLowerCase().includes('acquisition')) {
        setInterest('Private Acquisition Search');
      } else if (selectedService.toLowerCase().includes('selling') || selectedService.toLowerCase().includes('stewardship') || selectedService.toLowerCase().includes('representation')) {
        setInterest('Estate Stewardship (Selling)');
      } else if (selectedService.toLowerCase().includes('renting') || selectedService.toLowerCase().includes('leasing')) {
        setInterest('Executive Tenancy (Leasing)');
      } else {
        setInterest('Off-Market Valuation Audit');
      }
    }
  }, [selectedService, selectedProperty]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name or principal designation.';
    if (!email.trim()) {
      errs.email = 'Please provide your confidential email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomCode = 'BL-SF-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(randomCode);
    }, 1200);
  };

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Millennium+Tower,+301+Mission+St,+San+Francisco,+CA+94105';

  const representationScopes = [
    { id: 'Estate Stewardship (Selling)', label: 'Estate Stewardship & Sale', desc: 'Discreet off-market representation' },
    { id: 'Private Acquisition Search', label: 'Private Acquisition Search', desc: 'Bespoke search for unlisted holdings' },
    { id: 'Off-Market Valuation Audit', label: 'Valuation & Title Audit', desc: 'Objective analysis without market noise' },
    { id: 'Executive Tenancy (Leasing)', label: 'Turnkey Luxury Lease', desc: 'High-caliber corporate tenancy' },
  ];

  const venues = [
    'Millennium Tower Private Salon',
    'Confidential Residence Visit',
    'Encrypted Digital Briefing',
  ];

  const timelines = [
    'Immediate / Active',
    '1–3 Months',
    'Generational Horizon',
  ];

  return (
    <section
      id="inquiry"
      className="relative py-28 sm:py-36 bg-[#040405] border-t border-[#D4AF37]/20 overflow-hidden"
      aria-label="Private Fiduciary Consultation and Client Intake"
    >
      {/* Background Architectural Glow and Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full flex justify-between">
          <div className="w-[1px] h-full bg-[#D4AF37]/5" />
          <div className="w-[1px] h-full bg-[#D4AF37]/5 hidden md:block" />
          <div className="w-[1px] h-full bg-[#D4AF37]/5" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Prestigious Fiduciary Open Door Manifesto */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121A] border border-[#D4AF37]/30 text-[11px] tracking-[0.24em] text-[#DFBF73] uppercase mb-4 font-mono font-medium">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>The Fiduciary Open Door</span>
                <span aria-hidden="true" className="text-[#D4AF37]/40">·</span>
                <span>301 Mission St</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF7EE] tracking-tight leading-[1.12] text-balance mb-4">
                Begin an Unhurried, Confidential Dialogue.
              </h2>
              <p className="text-sm sm:text-base text-[#C4C0B8] leading-relaxed font-light font-sans">
                San Francisco residential holdings involve deep personal heritage, structural nuance, and substantial capital.
                We provide a quiet, private sanctuary for principals seeking objective counsel without commercial exposure or sales pressure.
              </p>
            </div>

            {/* 3 Prestigious Fiduciary Assurance Cards */}
            <div className="space-y-3.5 font-sans">
              <div className="p-4 rounded-xl bg-[#09090E] border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#14141C] border border-[#D4AF37]/30 text-[#DFBF73] shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-white mb-1">
                    Strict Fiduciary Non-Disclosure
                  </h3>
                  <p className="text-xs text-[#9E9B93] leading-relaxed font-light">
                    Every communication and prospective property evaluation is protected under attorney-grade fiduciary duty. We never broadcast client identities or private sale terms.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#09090E] border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#14141C] border border-[#D4AF37]/30 text-[#DFBF73] shrink-0 mt-0.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-white mb-1">
                    Direct Partner Representation
                  </h3>
                  <p className="text-xs text-[#9E9B93] leading-relaxed font-light">
                    You speak directly with senior practice principals. We do not delegate high-stakes negotiations or property audits to junior associates.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#09090E] border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#14141C] border border-[#D4AF37]/30 text-[#DFBF73] shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-white mb-1">
                    Private Arrival & Valet Protocols
                  </h3>
                  <p className="text-xs text-[#9E9B93] leading-relaxed font-light">
                    Hosted at Millennium Tower, 301 Mission Street. Subterranean valet parking and private reception lounges ensure total anonymity from arrival to departure.
                  </p>
                </div>
              </div>
            </div>

            {/* Millennium Tower HQ Interactive Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0F0F16] to-[#08080C] border border-[#D4AF37]/35 shadow-xl text-xs font-sans space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#DFBF73] text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#DFBF73] animate-pulse" />
                  Headquarters Coordinates
                </span>
                <span className="text-[10px] font-mono text-[#8E8B83]">Floor 42 · Salon</span>
              </div>
              <div>
                <p className="text-sm font-serif text-white font-medium">301 Mission Street, Millennium Tower</p>
                <p className="text-xs text-[#9E9B93] font-light">Transbay Residential District · San Francisco, CA 94105</p>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#A5A198] font-light">By Confirmed Appointment</span>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#DFBF73] hover:text-white font-medium transition-colors"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Intake Console */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 font-sans"
          >
            <div className="bg-[#09090E]/90 backdrop-blur-2xl border border-[#D4AF37]/35 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              {/* Top Accent Gold Strip */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

              {/* Selected Residence Callout */}
              {selectedProperty && (
                <div className="mb-8 p-4 rounded-xl bg-[#12121C] border border-[#D4AF37]/45 flex items-center justify-between gap-4 shadow-lg">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#DFBF73]">
                      <Building className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#DFBF73] font-mono">
                        Active Residence Subject
                      </div>
                      <div className="text-sm font-serif text-white truncate font-medium">
                        {selectedProperty}
                      </div>
                    </div>
                  </div>
                  {onClearSelectedProperty && (
                    <button
                      onClick={onClearSelectedProperty}
                      className="p-1.5 text-[#8E8B83] hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                      title="Clear property selection"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}

              {isSubmitted ? (
                /* Bespoke Confirmation Dossier */
                <div className="py-10 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#DFBF73]/15 border border-[#DFBF73]/60 flex items-center justify-center mx-auto text-[#DFBF73] shadow-lg shadow-[#D4AF37]/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.24em] text-[#DFBF73] font-mono">
                      Confidential Dossier Logged
                    </div>
                    <h3 className="font-serif text-3xl text-white font-light">
                      Fiduciary Dialogue Initiated
                    </h3>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#12121A] border border-white/10 font-mono text-xs text-[#DFBF73] tracking-widest mt-2">
                      Reference #{referenceId}
                    </div>
                  </div>

                  <p className="text-sm text-[#C4C0B8] max-w-md mx-auto leading-relaxed font-light font-sans">
                    Thank you, <span className="text-white font-medium">{name}</span>. A senior partner from Black Lifestyle
                    has received your confidential parameters and will contact you directly at{' '}
                    <span className="text-[#DFBF73] font-mono">{email}</span> within 4 hours.
                  </p>

                  <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                        if (onClearSelectedProperty) onClearSelectedProperty();
                      }}
                      className="px-6 py-3 text-xs uppercase tracking-[0.16em] text-[#DFBF73] hover:text-white border border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-full transition-colors cursor-pointer"
                    >
                      Submit Another Memorandum
                    </button>
                  </div>
                </div>
              ) : (
                /* Bespoke Multi-Step Fiduciary Console */
                <form ref={dropdownRef} onSubmit={handleSubmit} className="space-y-7">
                  {/* Step 1 & 2: Scope of Counsel & Meeting Venue & Protocol on Same Line */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Step 1: Scope of Counsel */}
                    <div className={`relative ${openDropdown === 'scope' ? 'z-40' : 'z-30'}`}>
                      <div className="flex items-center justify-between mb-2.5">
                        <label className="text-xs uppercase tracking-[0.2em] text-[#E8E6E3] font-medium flex items-center gap-2">
                          <span>Scope of Counsel</span>
                        </label>
                        <span className="text-[10px] text-[#8E8B83] font-mono uppercase tracking-wider">Primary Focus</span>
                      </div>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(openDropdown === 'scope' ? null : 'scope')}
                          className={`w-full px-4 py-3 bg-[#0C0C12] border rounded-xl text-left flex items-center justify-between transition-all cursor-pointer group ${
                            openDropdown === 'scope'
                              ? 'border-[#DFBF73] ring-1 ring-[#DFBF73]/40 shadow-lg shadow-[#D4AF37]/10'
                              : 'border-white/10 hover:border-[#DFBF73]/40'
                          }`}
                          aria-haspopup="listbox"
                          aria-expanded={openDropdown === 'scope'}
                        >
                          <div className="flex flex-col pr-2 min-w-0">
                            <span className="text-xs sm:text-sm font-serif text-[#F4E8CB] font-medium truncate">
                              {representationScopes.find((s) => s.id === interest)?.label || interest}
                            </span>
                            <span className="text-[10px] text-[#8E8B83] font-light truncate mt-0.5">
                              {representationScopes.find((s) => s.id === interest)?.desc || 'Senior fiduciary representation'}
                            </span>
                          </div>
                          <div className="w-7 h-7 rounded-lg bg-[#14141E] border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-[#DFBF73] transition-transform duration-200 ${
                                openDropdown === 'scope' ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>

                        {openDropdown === 'scope' && (
                          <div className="absolute top-full mt-2 left-0 right-0 bg-[#0E0E16]/98 backdrop-blur-2xl border border-[#D4AF37]/35 rounded-xl p-1.5 z-50 shadow-2xl shadow-black/90 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                            {representationScopes.map((scope) => {
                              const isSelected = interest === scope.id;
                              return (
                                <button
                                  type="button"
                                  key={scope.id}
                                  onClick={() => {
                                    setInterest(scope.id);
                                    setOpenDropdown(null);
                                  }}
                                  className={`w-full p-3 rounded-lg text-left transition-colors flex items-center justify-between cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#181826] border border-[#DFBF73]/40 text-[#F4E8CB]'
                                      : 'hover:bg-white/[0.04] text-[#C4C0B8]'
                                  }`}
                                >
                                  <div className="min-w-0 pr-2">
                                    <div className={`text-xs font-serif font-medium ${isSelected ? 'text-[#F4E8CB]' : 'text-[#ECEAE6]'}`}>
                                      {scope.label}
                                    </div>
                                    <div className="text-[10px] text-[#8E8B83] font-light mt-0.5">
                                      {scope.desc}
                                    </div>
                                  </div>
                                  {isSelected && <Check className="w-4 h-4 text-[#DFBF73] shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step 2: Preferred Venue & Meeting Protocol */}
                    <div className={`relative ${openDropdown === 'venue' ? 'z-40' : 'z-30'}`}>
                      <div className="flex items-center justify-between mb-2.5">
                        <label className="text-xs uppercase tracking-[0.2em] text-[#E8E6E3] font-medium flex items-center gap-2">
                          <span>Meeting Venue & Protocol</span>
                        </label>
                        <span className="text-[10px] text-[#8E8B83] font-mono uppercase tracking-wider">Setting</span>
                      </div>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(openDropdown === 'venue' ? null : 'venue')}
                          className={`w-full px-4 py-3 bg-[#0C0C12] border rounded-xl text-left flex items-center justify-between transition-all cursor-pointer group ${
                            openDropdown === 'venue'
                              ? 'border-[#DFBF73] ring-1 ring-[#DFBF73]/40 shadow-lg shadow-[#D4AF37]/10'
                              : 'border-white/10 hover:border-[#DFBF73]/40'
                          }`}
                          aria-haspopup="listbox"
                          aria-expanded={openDropdown === 'venue'}
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <MapPin className="w-4 h-4 text-[#DFBF73] shrink-0" />
                            <span className="text-xs sm:text-sm text-[#F4E8CB] font-sans font-medium truncate">
                              {meetingFormat}
                            </span>
                          </div>
                          <div className="w-7 h-7 rounded-lg bg-[#14141E] border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-[#DFBF73] transition-transform duration-200 ${
                                openDropdown === 'venue' ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>

                        {openDropdown === 'venue' && (
                          <div className="absolute top-full mt-2 left-0 right-0 bg-[#0E0E16]/98 backdrop-blur-2xl border border-[#D4AF37]/35 rounded-xl p-1.5 z-50 shadow-2xl shadow-black/90 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                            {venues.map((venue) => {
                              const isSelected = meetingFormat === venue;
                              return (
                                <button
                                  type="button"
                                  key={venue}
                                  onClick={() => {
                                    setMeetingFormat(venue);
                                    setOpenDropdown(null);
                                  }}
                                  className={`w-full p-2.5 rounded-lg text-left transition-colors flex items-center justify-between cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#181826] border border-[#DFBF73]/40 text-[#F4E8CB]'
                                      : 'hover:bg-white/[0.04] text-[#C4C0B8]'
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF73] shrink-0 shadow-[0_0_6px_#DFBF73]" />
                                    <span className={`text-xs font-sans ${isSelected ? 'text-[#F4E8CB] font-medium' : 'text-[#ECEAE6]'}`}>
                                      {venue}
                                    </span>
                                  </div>
                                  {isSelected && <Check className="w-4 h-4 text-[#DFBF73] shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Identity & Confidential Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="client-name"
                        className="block text-xs uppercase tracking-[0.18em] text-[#C4C0B8] mb-2 font-medium"
                      >
                        Client Name or Designation *
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Estate of Harrison / Dr. Miller"
                        className={`w-full px-4 py-3 bg-[#0C0C12] border rounded-lg text-sm text-white placeholder-[#5E5B54] focus:outline-none transition-all ${
                          errors.name
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-white/10 focus:border-[#DFBF73] focus:ring-1 focus:ring-[#DFBF73]/40'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="client-email"
                        className="block text-xs uppercase tracking-[0.18em] text-[#C4C0B8] mb-2 font-medium"
                      >
                        Confidential Email *
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="client@familyoffice.com"
                        className={`w-full px-4 py-3 bg-[#0C0C12] border rounded-lg text-sm text-white placeholder-[#5E5B54] focus:outline-none transition-all ${
                          errors.email
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-white/10 focus:border-[#DFBF73] focus:ring-1 focus:ring-[#DFBF73]/40'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Step 4: Timeline Horizon */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#A5A198] mb-2 font-medium">
                      Intended Horizon
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timelines.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTimeline(t)}
                          className={`py-2 px-3 text-xs font-light rounded border transition-all cursor-pointer ${
                            timeline === t
                              ? 'bg-[#151522] border-[#DFBF73] text-[#DFBF73] font-medium'
                              : 'bg-[#0C0C12] border-white/5 text-[#8E8B83] hover:text-white hover:border-white/20'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 5: Confidential Memorandum */}
                  <div>
                    <label
                      htmlFor="client-message"
                      className="block text-xs uppercase tracking-[0.18em] text-[#C4C0B8] mb-2 font-medium"
                    >
                      Confidential Memorandum / Property Criteria
                    </label>
                    <textarea
                      id="client-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Detail any specific architectural interests, preferred enclaves (Pacific Heights, Millennium Tower, Russian Hill), or custodial objectives..."
                      className="w-full px-4 py-3 bg-[#0C0C12] border border-white/10 rounded-lg text-sm text-white placeholder-[#5E5B54] focus:outline-none focus:border-[#DFBF73] focus:ring-1 focus:ring-[#DFBF73]/40 transition-all font-sans"
                    />
                  </div>

                  {/* Submit Button & Security Assurance */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#DFBF73] hover:bg-[#EAD49E] text-[#0A0A0C] font-semibold text-xs uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-[#0A0A0C] border-t-transparent rounded-full animate-spin" />
                          <span>Encrypting & Transmitting Memorandum...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Initiate Confidential Consultation</span>
                        </span>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#706C64] font-mono">
                      <Lock className="w-3 h-3 text-[#DFBF73]" />
                      <span>Protected under California Fiduciary Privilege · 256-Bit SSL Encryption</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
