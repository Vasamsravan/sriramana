import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBusinessStatus = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  const isOpen =
    (currentDay >= 1 && currentDay <= 5 && (currentHour >= 6 || currentHour <= 0)) || // Monday - Friday: 6 AM - 12 AM (Midnight)
    ((currentDay === 6 || currentDay === 0) && currentHour >= 8 && currentHour <= 20); // Saturday & Sunday: 8 AM - 8 PM

  return isOpen;
  // ? '🟢 Open Now' : '🔴 Closed (Will respond during business hours)';
};
