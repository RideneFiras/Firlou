import { ThemeToggle } from "@/components/theme-toggle";

export function AdminTopbar({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border/60 bg-background/80 px-5 py-4 backdrop-blur-xl sm:px-8">
      <div>
        <h1 className="font-display text-xl font-semibold tracking-tight">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {action}
        <ThemeToggle />
      </div>
    </div>
  );
}
