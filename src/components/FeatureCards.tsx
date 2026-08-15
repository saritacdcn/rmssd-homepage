import React from 'react';
import { FEATURE_CARDS } from '../data/mockData';
import type { FeatureCardItem } from '../data/mockData';

export const FeatureCards: React.FC = () => {
  const renderIcon = (type: FeatureCardItem['iconType']) => {
    switch (type) {
      case 'doc':
        return (
          <div className="w-10 h-10 rounded-xl bg-[#dbeafe] flex items-center justify-center text-[#2563eb] flex-shrink-0">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="8" y1="13" x2="16" y2="13" />
              <line x1="8" y1="17" x2="16" y2="17" />
            </svg>
          </div>
        );
      case 'fraud':
        return (
          <div className="w-10 h-10 rounded-xl bg-[#fee2e2] flex items-center justify-center text-[#e11d48] flex-shrink-0">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        );
      case 'crash':
        return (
          <div className="w-10 h-10 rounded-xl bg-[#e0e7ff] flex items-center justify-center text-[#3b82f6] flex-shrink-0">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M6 12h3l2-4 2 8 2-4h3" />
            </svg>
          </div>
        );
      case 'compare':
        return (
          <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] flex-shrink-0">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="8" height="16" rx="2" />
              <rect x="13" y="4" width="8" height="16" rx="2" />
              <line x1="6" y1="8" x2="8" y2="8" />
              <line x1="6" y1="12" x2="8" y2="12" />
              <line x1="16" y1="8" x2="18" y2="8" />
              <line x1="16" y1="12" x2="18" y2="12" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section className="py-3 sm:py-4" aria-label="Feature Hubs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {FEATURE_CARDS.map((card) => (
            <article
              key={card.id}
              className="group relative border border-slate-200 rounded-2xl p-6 bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-3.5 mb-2.5">
                  {renderIcon(card.iconType)}
                  <h2 className="text-xl font-bold text-[#0a1931] tracking-tight group-hover:text-[#0854c4] transition-colors">
                    {card.title}
                  </h2>
                </div>

                {/* Card Description */}
                <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Action Link (Bottom Right) */}
              <div className="mt-4 flex justify-end">
                <a
                  href={card.href}
                  className="text-slate-700 group-hover:text-[#0854c4] font-medium text-sm inline-flex items-center gap-1 transition-colors hover:underline"
                  aria-label={`${card.title} - ${card.linkText}`}
                >
                  <span>{card.linkText}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
