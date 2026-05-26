import { Plus } from "lucide-react";

import { mockProjects, projectStatuses } from "@/lib/data/projects";
import { formatDate } from "@/lib/utils";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminProjectsPage() {
  return (
    <>
      <AdminTopbar
        title="Projects"
        description="Active and delivered client projects."
        action={
          <Button size="sm" variant="gradient">
            <Plus className="h-4 w-4" /> New project
          </Button>
        }
      />

      <div className="p-5 sm:p-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mockProjects.map((project) => {
            const status = projectStatuses.find((s) => s.value === project.status)!;
            return (
              <article
                key={project.id}
                className="rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold">{project.name}</h3>
                    <p className="text-xs text-muted-foreground">{project.client}</p>
                  </div>
                  <Badge variant="muted">
                    <span className={`mr-1.5 h-2 w-2 rounded-full ${status.color}`} />
                    {status.label}
                  </Badge>
                </div>

                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span className="font-medium text-foreground">{project.progress}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/60 pt-4 text-xs">
                  <div>
                    <p className="text-muted-foreground">Type</p>
                    <p className="font-medium">{project.type}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Budget</p>
                    <p className="font-medium">{project.budget}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Deadline</p>
                    <p className="font-medium">{formatDate(project.deadline)}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
