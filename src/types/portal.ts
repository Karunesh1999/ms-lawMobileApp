import type { ComponentType } from 'react';

export type AppFlowState = 'splash' | 'onboarding' | 'auth' | 'app';

export type TabType =
  | 'Home'
  | 'My Cases'
  | 'Case details'
  | 'Appointments'
  | 'Messages'
  | 'Profile';

export interface ActivityItem {
  title: string;
  time: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  tone: 'blue' | 'green' | 'violet';
}

export interface NavItem {
  label: TabType;
  icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}

