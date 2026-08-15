import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'The Database of True RMSSD',
  description:
    'Open peer-reviewed database for True RMSSD — standardized HRV metrics from consumer devices, validated with open protocols.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%230854c4%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27><polyline points=%2722 12 18 12 15 21 9 3 6 12 2 12%27/></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-slate-900 antialiased font-sans selection:bg-blue-500 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
