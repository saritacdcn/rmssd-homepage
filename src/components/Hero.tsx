import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}) => {
  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-10" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight text-[#0a1931] leading-tight mb-3"
        >
          Show Your Beats.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-700 font-normal max-w-4xl leading-relaxed mb-8">
          Open peer-reviewed database for True RMSSD — standardized HRV metrics from consumer devices, validated with open protocols.
        </p>

        {/* Search Bar Form */}
        <form onSubmit={onSearchSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-4xl">
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search a device [Polar H10, Oura, Whoop...]"
              className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-full sm:rounded-full text-slate-800 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-[#0854c4] focus:border-[#0854c4] transition-all shadow-sm"
              aria-label="Search devices"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0854c4] hover:bg-[#0747a6] active:bg-[#063b8c] text-white font-semibold text-base rounded-full shadow-sm hover:shadow transition-all duration-150 flex items-center justify-center flex-shrink-0 cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
