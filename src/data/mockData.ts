export interface DeviceData {
  id: string;
  device: string;
  firmware: string;
  trueRmssd: string;
  status: 'Verified' | 'Pending review';
  testProtocol: string;
  lastUpdated: string;
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  iconType: 'doc' | 'fraud' | 'crash' | 'compare';
}

export const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'what-is-rmssd',
    title: 'What is RMSSD',
    description: 'Learn the peer-reviewed method for true RMSSD calculation from raw RR intervals, standards, and best practices.',
    linkText: 'View →',
    href: '#learn',
    iconType: 'doc'
  },
  {
    id: 'hrv-fraud',
    title: 'The HRV Fraud',
    description: 'Investigate common miscalculations, smoothing issues, and how fraudulent HRV metrics are reported.',
    linkText: 'View →',
    href: '#fraud',
    iconType: 'fraud'
  },
  {
    id: 'live-crash',
    title: 'Live Crash Detection',
    description: 'Real-time monitoring of RR interval anomalies and sudden HRV collapse detection protocol.',
    linkText: 'View →',
    href: '#live',
    iconType: 'crash'
  },
  {
    id: 'device-compare',
    title: 'Device Compare',
    description: 'Compare devices side-by-side using OKB Test benchmark. See validated vs. unverified results.',
    linkText: 'View →',
    href: '#compare',
    iconType: 'compare'
  }
];

export const INITIAL_DEVICE_DATA: DeviceData[] = [
  {
    id: 'polar-h10',
    device: 'Polar H10',
    firmware: 'v2.1.6',
    trueRmssd: '42.3 ms',
    status: 'Verified',
    testProtocol: '5-min resting',
    lastUpdated: '2025-10-12'
  },
  {
    id: 'oura-ring-gen3',
    device: 'Oura Ring Gen3',
    firmware: '1.15.0',
    trueRmssd: '38.7 ms',
    status: 'Verified',
    testProtocol: '5-min resting',
    lastUpdated: '2025-10-10'
  },
  {
    id: 'whoop-4',
    device: 'Whoop 4.0',
    firmware: '5.0.2',
    trueRmssd: '29.1 ms',
    status: 'Pending review',
    testProtocol: '5-min resting',
    lastUpdated: '2025-10-08'
  },
  {
    id: 'apple-watch-ultra',
    device: 'Apple Watch Ultra',
    firmware: 'watchOS 10.5',
    trueRmssd: '40.2 ms',
    status: 'Verified',
    testProtocol: '5-min resting',
    lastUpdated: '2025-10-11'
  }
];
