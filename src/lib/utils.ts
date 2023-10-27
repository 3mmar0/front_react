import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const uploadImg = (e: unknown) => {
  const reader = new FileReader();
  reader.onload = () => {};

  reader.readAsDataURL(e.target.files[0]);
  const img = e.target.files[0];

  return { img };
};
