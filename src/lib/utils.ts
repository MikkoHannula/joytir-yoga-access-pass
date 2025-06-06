import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Tämä funktio yhdistää luokkia yhteen
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
