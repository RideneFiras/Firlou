"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAdminAccess } from "@/components/admin/admin-access-provider";

type LogoProps = {
  className?: string;
  withWordmark?: boolean;
  href?: string;
};

export function Logo({ className, withWordmark = true, href = "/" }: LogoProps) {
  const { registerClick } = useAdminAccess();

  return (
    <Link
      href={href}
      onClick={registerClick}
      aria-label="Firlou — Home"
      className={cn(
        "group inline-flex select-none items-center gap-2",
        className,
      )}
    >
      <LogoMark className="h-8 w-8 transition-transform duration-300 group-hover:scale-105" />
      {withWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight">
          Firlou<span className="text-primary">.</span>
        </span>
      )}
    </Link>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="firlou-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b66ff" />
          <stop offset="55%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#e879f9" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#firlou-grad)" />
      <path
        d="M11 9.5h11M11 16h7.5M11 22.5h5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
