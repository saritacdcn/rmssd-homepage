import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-12 pt-8 pb-12 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Medical Disclaimer */}
        <p className="text-[12px] sm:text-[13px] leading-relaxed text-slate-800 font-normal">
          <strong className="font-semibold text-slate-900">Medical Disclaimer:</strong>{' '}
          Content is for research and educational purposes only. RMSSD values are computed from raw RR intervals per the 1996 Task Force standards. This database does not provide medical advice. Data are community-submitted and validated via open, peer-reviewed protocol. Use in clinical decision-making only with professional oversight.
        </p>

        {/* Copyright & Meta Links */}
        <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[12px] sm:text-[13px] text-slate-700">
          <span>© 2025 RMSSD.COM</span>
          <span className="text-slate-400 select-none">•</span>
          <a href="#privacy" className="hover:text-[#0854c4] transition-colors underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          <span className="text-slate-400 select-none">•</span>
          <a href="#terms" className="hover:text-[#0854c4] transition-colors underline-offset-2 hover:underline">
            Terms of Use
          </a>
          <span className="text-slate-400 select-none">•</span>
          <a href="#methodology" className="hover:text-[#0854c4] transition-colors underline-offset-2 hover:underline">
            Methodology
          </a>
          <span className="text-slate-400 select-none">•</span>
          <a href="#contact" className="hover:text-[#0854c4] transition-colors underline-offset-2 hover:underline">
            Contact
          </a>
          <span className="text-slate-400 select-none">•</span>
          <span className="text-slate-700">DOI: 10.5281/rmssd.db.v1.0</span>
          <span className="text-slate-400 select-none">•</span>
          <span className="text-slate-700">Open Data License CC-BY 4.0</span>
        </div>
      </div>
    </footer>
  );
};
