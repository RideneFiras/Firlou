"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useAdminAccess } from "@/components/admin/admin-access-provider";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  const { registerClick } = useAdminAccess();

  return (
    <Link
      href={href}
      onClick={registerClick}
      aria-label="Firlou — Home"
      className={cn(
        "group inline-flex select-none items-center transition-opacity hover:opacity-85",
        className,
      )}
    >
      <Image
        src="/firlou-logo.png"
        alt="Firlou — Digital Development Studio"
        width={145}
        height={52}
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </Link>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/firlou-logo.png"
      alt="Firlou"
      width={145}
      height={52}
      className={cn("h-8 w-auto object-contain", className)}
    />
  );
}
