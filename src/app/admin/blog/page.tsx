import { Plus, Pencil, Globe } from "lucide-react";

import { posts } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminBlogPage() {
  return (
    <>
      <AdminTopbar
        title="Blog & SEO"
        description="Publish articles and manage search metadata."
        action={
          <Button size="sm" variant="gradient">
            <Plus className="h-4 w-4" /> New article
          </Button>
        }
      />

      <div className="space-y-6 p-5 sm:p-8">
        <div className="overflow-hidden rounded-2xl border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Title</th>
                <th className="hidden p-3 font-medium md:table-cell">Category</th>
                <th className="hidden p-3 font-medium lg:table-cell">Published</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {posts.map((post) => (
                <tr key={post.slug} className="hover:bg-secondary/30">
                  <td className="max-w-xs p-3">
                    <p className="truncate font-medium">{post.title}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      /blog/{post.slug}
                    </p>
                  </td>
                  <td className="hidden p-3 md:table-cell">
                    <Badge variant="muted">{post.category}</Badge>
                  </td>
                  <td className="hidden p-3 text-muted-foreground lg:table-cell">
                    {formatDate(post.publishedAt)}
                  </td>
                  <td className="p-3">
                    <Badge className="bg-emerald-500/15 text-emerald-500">
                      <Globe className="mr-1 h-3 w-3" /> Live
                    </Badge>
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

        <div className="rounded-2xl border border-border/60 bg-card p-5">
          <h3 className="font-medium">SEO health</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Global metadata, sitemap and structured data are generated automatically.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Sitemap", value: "/sitemap.xml" },
              { label: "Robots", value: "/robots.txt" },
              { label: "Open Graph", value: "Auto-generated" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border/60 bg-background p-4"
              >
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="mt-0.5 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
