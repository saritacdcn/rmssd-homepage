'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Learn', href: '#learn' },
    { name: 'Fraud', href: '#fraud' },
    { name: 'Live', href: '#live' },
    { name: 'Compare', href: '#compare' },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Subtitle */}
          <div className="flex items-baseline gap-3 flex-shrink-0">
            <a href="/" className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a1931] hover:opacity-90 transition-opacity">
              RMSSD.COM
            </a>
            <div className="hidden md:flex items-center gap-2 text-slate-500 font-normal text-base">
              <span className="text-slate-300 font-light select-none">/</span>
              <span>The Database of True RMSSD</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            <nav className="flex items-center space-x-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-medium text-slate-700 hover:text-[#0854c4] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Living Review Badge */}
            <div className="inline-flex items-center bg-[#0854c4] text-white px-3 py-1 rounded-md text-xs font-bold tracking-wide shadow-sm hover:bg-[#0747a6] transition-colors cursor-default select-none">
              <span>LIVING REVIEW v1.0</span>
              <span className="text-[10px] ml-0.5 align-super leading-none">°</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="inline-flex items-center bg-[#0854c4] text-white px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide">
              <span>LIVING REVIEW v1.0°</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-100 flex flex-col space-y-3 bg-white" aria-label="Mobile Navigation">
            <div className="px-2 py-1 text-xs text-slate-500 font-medium">
              The Database of True RMSSD
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0854c4] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
