'use client'
import { ButtonProps } from "@/app/lib/types";

export default function SolidButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--highlight-blue)] px-8 py-3 rounded-md hover:bg-[var(--highlight-btn)] font-semibold "
    >
      Get Started!
    </button>
  );
}
