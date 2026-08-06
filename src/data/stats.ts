import type { StatItem, CustomizeAction } from '@/types';

export const homeStats: StatItem[] = [
  { value: '352', label: 'Top Speed' },
  { value: '620', label: 'Power (HP)' },
  { value: '780', label: 'Torque' },
  { value: '3.2 Sec', label: '0-100 KM/H' },
  { value: '2,450 KM', label: 'Oil Change' },
  { value: '520 KM', label: 'Range' },
];

export const customizeActions: CustomizeAction[] = [
  { id: 'customize', label: 'CUSTOMIZE' },
  { id: 'paint-job', label: 'PAINT JOB' },
  { id: 'bodywork', label: 'BODYWORK' },
  { id: 'accessories', label: 'ACCESSORIES' },
];
