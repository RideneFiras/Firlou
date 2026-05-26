import Image from "next/image";
import { Plus, Star, Pencil } from "lucide-react";

import { portfolio } from "@/lib/data/portfolio";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminPortfolioPage() {
  return (
    <>
      <AdminTopbar
        title="Portfolio"
        description="Manage the case studies shown on your public site."
        action={
          <Button size="sm" variant="gradient">
            <Plus className="h-4 w-4" /> Add project
          </Button>
        }
      />

      <div className="p-5 sm:p-8">
        <div className="overflow-hidden rounded-2xl border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Project</th>
                <th className="hidden p-3 font-medium md:table-cell">Category</th>
                <th className="hidden p-3 font-medium lg:table-cell">Client</th>
                <th className="p-3 font-medium">Featured</th>
                <th className="p-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {portfolio.map((item) => (
                <tr key={item.slug} className="hover:bg-secondary/30">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-16 shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={item.cover}
                          alt={item.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </td>
                  <td className="hidden p-3 md:table-cell">
                    <Badge variant="muted">{item.category}</Badge>
                  </td>
                  <td className="hidden p-3 text-muted-foreground lg:table-cell">
                    {item.client}
                  </td>
                  <td className="p-3">
                    {item.featured ? (
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ) : (
                      <Star className="h-4 w-4 text-muted-foreground/40" />
                    )}
                  </td>
                  <td className="p-3 text-right">
                    <Button size="sm" variant="ghost">
                      <Pencil className="h-3.5 w-3.5" /> Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
