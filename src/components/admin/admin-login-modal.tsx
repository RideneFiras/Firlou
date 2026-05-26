"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2, ShieldCheck } from "lucide-react";
import { signIn } from "next-auth/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AdminLoginModalProps = {
  open: boolean;
  onOpenChange: (next: boolean) => void;
};

export function AdminLoginModal({ open, onOpenChange }: AdminLoginModalProps) {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res || res.error) {
        setError("Invalid credentials. Try again.");
        return;
      }

      onOpenChange(false);
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-border/40 bg-card/95 p-0 backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/10 via-violet-500/5 to-fuchsia-500/10" />
          <div className="p-7">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/80 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>

            <DialogHeader className="space-y-1.5">
              <DialogTitle className="text-2xl">Admin access</DialogTitle>
              <DialogDescription>
                Hidden entrance to the Firlou admin console.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="admin-email">Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  autoComplete="email"
                  placeholder="admin@firlou.tn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Lock className="h-4 w-4" />
                )}
                {loading ? "Authenticating…" : "Enter the console"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Access is logged and rate-limited.
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
