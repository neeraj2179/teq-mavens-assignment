import type { NavItem } from '@/types';

export const leftNavItems: NavItem[] = [
  { id: 'dashboard', icon: 'gauge', label: 'Dashboard', view: 'dashboard' },
  { id: 'home', icon: 'home', label: 'Home', view: 'home' },
  { id: 'finance', icon: 'indian-rupee', label: 'Finance', view: 'finance' },
];

export const rightNavItems: NavItem[] = [
  { id: 'timeline', icon: 'message-square', label: 'Timeline', view: 'dashboard' },
  { id: 'documents', icon: 'file-text', label: 'Documents', view: 'dashboard' },
  { id: 'profile', icon: 'lock', label: 'Profile', view: 'dashboard' },
];
