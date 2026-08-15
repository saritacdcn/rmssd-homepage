import React from 'react';
import { Check } from 'lucide-react';
import type { DeviceData } from '../data/mockData';

interface DataPreviewTableProps {
  devices: DeviceData[];
}

export const DataPreviewTable: React.FC<DataPreviewTableProps> = ({ devices }) => {
  return (
    <section className="py-6 sm:py-8" aria-labelledby="data-preview-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-wrap items-baseline gap-2.5 mb-4">
          <h2
            id="data-preview-heading"
            className="text-2xl sm:text-2xl font-black text-[#0a1931] tracking-tight"
          >
            Data Preview
          </h2>
          <span className="text-slate-500 text-sm font-medium">
            Latest validated entries • Updated hourly
          </span>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#bdd7f4] text-slate-900 border-b border-[#a8c6e8]">
                <th scope="col" className="py-3.5 px-5 font-bold text-sm text-[#0a1931]">
                  Device
                </th>
                <th scope="col" className="py-3.5 px-5 font-bold text-sm text-[#0a1931]">
                  Firmware
                </th>
                <th scope="col" className="py-3.5 px-5 font-bold text-sm text-[#0a1931]">
                  True RMSSD
                </th>
                <th scope="col" className="py-3.5 px-5 font-bold text-sm text-[#0a1931]">
                  Validation Status
                </th>
                <th scope="col" className="py-3.5 px-5 font-bold text-sm text-[#0a1931]">
                  Test Protocol
                </th>
                <th scope="col" className="py-3.5 px-5 font-bold text-sm text-[#0a1931]">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {devices.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    No matching devices found.
                  </td>
                </tr>
              ) : (
                devices.map((item, index) => {
                  const isEven = index % 2 === 1;
                  return (
                    <tr
                      key={item.id}
                      className={`${
                        isEven ? 'bg-[#f1f6fc]' : 'bg-white'
                      } hover:bg-blue-50/50 transition-colors duration-150`}
                    >
                      {/* Device */}
                      <td className="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">
                        {item.device}
                      </td>

                      {/* Firmware */}
                      <td className="py-3.5 px-5 text-slate-700 whitespace-nowrap">
                        {item.firmware}
                      </td>

                      {/* True RMSSD */}
                      <td className="py-3.5 px-5 text-slate-900 font-medium whitespace-nowrap">
                        {item.trueRmssd}
                      </td>

                      {/* Validation Status Badge */}
                      <td className="py-3.5 px-5 whitespace-nowrap">
                        {item.status === 'Verified' ? (
                          <span className="inline-flex items-center gap-1 bg-[#16a34a] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Verified</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center bg-[#fbbf24] text-slate-900 text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
                            <span>Pending review</span>
                          </span>
                        )}
                      </td>

                      {/* Test Protocol */}
                      <td className="py-3.5 px-5 text-slate-700 whitespace-nowrap">
                        {item.testProtocol}
                      </td>

                      {/* Last Updated */}
                      <td className="py-3.5 px-5 text-slate-700 whitespace-nowrap font-normal">
                        {item.lastUpdated}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
