import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./constant";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
