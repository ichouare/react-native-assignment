import clsx from 'clsx';
import { ClassValue, twMerge } from 'tailwind-merge';

// If you want to merge Tailwind classes intelligently (optional)
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}