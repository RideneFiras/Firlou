import { Badge } from "@/components/ui/badge";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.25] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute left-1/2 top-[-30%] h-72 w-[680px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-500/20 via-violet-500/15 to-fuchsia-500/15 blur-3xl" />
      </div>
      <div className="container-tight py-16 text-center sm:py-24">
        {eyebrow && (
          <Badge variant="gradient" className="mb-4 border border-border/60">
            {eyebrow}
          </Badge>
        )}
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-balance">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
