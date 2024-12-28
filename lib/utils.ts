import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const whatsappNumber = "+6285179875044";
const message = "Hello! I would like to know more about your services.";

export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  message
)}`;
