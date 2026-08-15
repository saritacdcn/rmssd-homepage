'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeatureCards } from '@/components/FeatureCards';
import { DataPreviewTable } from '@/components/DataPreviewTable';
import { Footer } from '@/components/Footer';
import { INITIAL_DEVICE_DATA } from '@/data/mockData';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveFilter(searchQuery.trim());
  };

  const filteredDevices = useMemo(() => {
    if (!activeFilter) return INITIAL_DEVICE_DATA;
    const query = activeFilter.toLowerCase();
    return INITIAL_DEVICE_DATA.filter(
      (device) =>
        device.device.toLowerCase().includes(query) ||
        device.firmware.toLowerCase().includes(query) ||
        device.status.toLowerCase().includes(query) ||
        device.testProtocol.toLowerCase().includes(query)
    );
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Header />
      <main className="flex-1 w-full">
        <Hero
          searchQuery={searchQuery}
          onSearchChange={(val) => {
            setSearchQuery(val);
            if (val === '') {
              setActiveFilter('');
            }
          }}
          onSearchSubmit={handleSearchSubmit}
        />
        <FeatureCards />
        <DataPreviewTable devices={filteredDevices} />
      </main>
      <Footer />
    </div>
  );
}
