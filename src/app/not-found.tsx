import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute left-1/2 top-1/3 h-72 w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-500/25 via-violet-500/20 to-fuchsia-500/15 blur-3xl" />
      </div>

      <LogoMark className="h-12 w-12" />
      <p className="mt-8 font-display text-7xl font-semibold tracking-tight">404</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild variant="gradient" size="lg" className="mt-8">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </Button>
    </div>
  );
}
