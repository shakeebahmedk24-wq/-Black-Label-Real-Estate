/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertiesShowcase } from './components/PropertiesShowcase';
import { About } from './components/About';
import { Services } from './components/Services';
import { Location } from './components/Location';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Buying');
  const [selectedProperty, setSelectedProperty] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const handleOpenInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setSelectedProperty('');
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestShowing = (propertyTitle: string) => {
    setSelectedProperty(propertyTitle);
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (query: string) => {
    setSearchFilter(query);
    const el = document.getElementById('residences');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#040405] text-[#ECEAE6] font-sans selection:bg-[#D4AF37]/30 selection:text-[#FFF5DC]">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Hero Section with Bespoke 1080p Cinematic Skyline Video Loop & Layered Parallax */}
      <main>
        <Hero
          onOpenInquiry={handleOpenInquiry}
          onRequestShowing={handleRequestShowing}
          onSearch={handleSearch}
        />

        {/* Curated Residential Properties Showcase & Interactive Dossiers */}
        <PropertiesShowcase
          onRequestShowing={handleRequestShowing}
          searchQuery={searchFilter}
          onClearSearch={() => setSearchFilter('')}
        />

        {/* About Section: Practice ethos & Millennium Tower foundation + Enclave Profiles */}
        <About />

        {/* Services Section: Buying, Selling, Renting, Advisory */}
        <Services onSelectService={handleSelectService} />

        {/* Location Section: Millennium Tower, 301 Mission St, SF with Google Maps Directions */}
        <Location />

        {/* Private Consultation & Fiduciary Inquiry */}
        <InquirySection
          selectedService={selectedService}
          selectedProperty={selectedProperty}
          onClearSelectedProperty={() => setSelectedProperty('')}
        />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer />
    </div>
  );
}
