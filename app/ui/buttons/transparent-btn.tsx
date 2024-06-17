'use client'

import { ButtonProps } from "@/app/lib/types";

export default function TransparentButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 rounded-md hover:bg-[var(--blue-neutral)] font-semibold"
    >
      Get Started!
    </button>
  );
}
