import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { siteConfig } from "@/config/site";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default async function AdminSettingsPage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <AdminTopbar title="Settings" description="Studio profile and SEO defaults." />

      <div className="max-w-3xl space-y-6 p-5 sm:p-8">
        <section className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="font-display font-semibold">Account</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Signed in as</Label>
              <Input defaultValue={session?.user?.email ?? "admin@firlou.tn"} disabled />
            </div>
            <div className="space-y-1.5">
              <Label>Role</Label>
              <Input defaultValue={(session?.user as any)?.role ?? "ADMIN"} disabled />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="font-display font-semibold">Studio profile</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Studio name</Label>
              <Input id="name" defaultValue={siteConfig.name} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Contact email</Label>
              <Input id="email" defaultValue={siteConfig.contactEmail} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="whatsapp">WhatsApp number</Label>
              <Input id="whatsapp" defaultValue={siteConfig.whatsappNumber} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="city">Location</Label>
              <Input id="city" defaultValue={siteConfig.city} />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="font-display font-semibold">Default SEO</h3>
          <div className="mt-4 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="title">Default title</Label>
              <Input id="title" defaultValue={`${siteConfig.name} — ${siteConfig.tagline}`} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="desc">Default description</Label>
              <Input id="desc" defaultValue={siteConfig.description} />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <Button variant="gradient">Save changes</Button>
        </div>
      </div>
    </>
  );
}
