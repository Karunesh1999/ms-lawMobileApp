import {
  Upload,
  CircleCheck,
  CalendarDays,
  House,
  BriefcaseBusiness,
  MessageCircle,
  UserRound,
} from 'lucide-react';
import type { ActivityItem, NavItem } from '../types/portal';

export const ACTIVITIES: ActivityItem[] = [
  {
    title: 'Medical Report.pdf was added',
    time: 'Today, 9:42 AM',
    icon: Upload,
    tone: 'blue',
  },
  {
    title: 'Case review completed',
    time: 'Yesterday, 3:15 PM',
    icon: CircleCheck,
    tone: 'green',
  },
  {
    title: 'Appointment confirmed',
    time: 'Nov 8, 11:20 AM',
    icon: CalendarDays,
    tone: 'violet',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', icon: House },
  { label: 'My Cases', icon: BriefcaseBusiness },
  { label: 'Appointments', icon: CalendarDays },
  { label: 'Messages', icon: MessageCircle },
  { label: 'Profile', icon: UserRound },
];
