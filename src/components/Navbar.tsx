/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'project', label: 'Project', href: '#residences' },
    { id: 'agents', label: 'Agents', href: '#location' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'listing', label: 'Listing', href: '#residences' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070708]/90 backdrop-blur-xl border-[#D4AF37]/20 py-3 shadow-2xl'
          : 'bg-transparent border-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo in Gold */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-white transition-transform hover:scale-[1.02]"
        >
          <div className="w-8 h-8 rounded-lg bg-[#DFBF73]/25 border border-[#DFBF73] flex items-center justify-center text-[#DFBF73] shadow-md shadow-[#D4AF37]/20">
            <Building2 className="w-4 h-4 text-[#DFBF73]" />
          </div>
          <span className="font-sans font-bold text-lg sm:text-xl tracking-[0.16em] text-[#DFBF73] uppercase">
            BLACK LIFESTYLE
          </span>
        </a>

        {/* Center Floating Frosted Glass Pill Navbar */}
        <nav className="hidden md:flex items-center gap-6 px-6 py-2 rounded-full bg-white/15 hover:bg-white/20 backdrop-blur-md border border-white/25 text-xs font-medium tracking-wide text-white/90 shadow-xl transition-all">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.href)}
                className={`relative py-0.5 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#DFBF73] font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF73] shadow-[0_0_8px_#DFBF73]" />
                )}
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button: Solid Warm Golden Pill */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onOpenInquiry) {
                onOpenInquiry();
              } else {
                handleNavClick('inquiry', '#inquiry');
              }
            }}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A0A0C] bg-[#DFBF73] hover:bg-[#EAD49E] rounded-full shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Contact Us</span>
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#DFBF73] focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090E]/95 backdrop-blur-2xl border-b border-[#D4AF37]/20 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.18em]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.href)}
                className="text-left py-2.5 text-[#C4C0B8] hover:text-[#DFBF73] transition-colors border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {activeTab === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#DFBF73]" />
                )}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInquiry) onOpenInquiry();
                else handleNavClick('inquiry', '#inquiry');
              }}
              className="mt-2 w-full py-3 text-xs uppercase tracking-[0.16em] font-semibold text-[#0A0A0C] bg-[#DFBF73] rounded-full hover:bg-[#EAD49E] transition-colors shadow-lg"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
