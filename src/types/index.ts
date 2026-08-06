// ========================
// Navigation Types
// ========================
export type ViewType = 'dashboard' | 'home' | 'finance' | 'thankyou';

export interface NavItem {
  id: string;
  icon: string;
  label: string;
  view: ViewType;
}

// ========================
// Lap / Timeline Types
// ========================
export interface LapData {
  id: number;
  title: string;
  subtitle: string;
}

// ========================
// Stats Types
// ========================
export interface StatItem {
  value: string;
  label: string;
  unit?: string;
}

// ========================
// Customize Action Types
// ========================
export interface CustomizeAction {
  id: string;
  label: string;
}
