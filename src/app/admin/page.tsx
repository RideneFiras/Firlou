import Link from "next/link";
import {
  Users,
  FolderKanban,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { mockLeads, leadStatuses } from "@/lib/data/leads";
import { formatTimeAgo } from "@/lib/utils";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { StatCard } from "@/components/admin/stat-card";
import { MiniChart } from "@/components/admin/mini-chart";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboardPage() {
  const total = mockLeads.length;
  const newLeads = mockLeads.filter((l) => l.status === "NEW").length;
  const active = mockLeads.filter((l) =>
    ["CONTACTED", "MEETING", "IN_PROGRESS"].includes(l.status),
  ).length;
  const closed = mockLeads.filter((l) => l.status === "CLOSED").length;

  const recent = [...mockLeads]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5);

  const byStatus = leadStatuses.map((s) => ({
    ...s,
    count: mockLeads.filter((l) => l.status === s.value).length,
  }));

  return (
    <>
      <AdminTopbar
        title="Dashboard"
        description="Overview of your studio's pipeline and activity."
      />

      <div className="space-y-6 p-5 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total leads" value={total} delta={32} icon={Users} />
          <StatCard label="New this week" value={newLeads} delta={18} icon={TrendingUp} />
          <StatCard label="Active pipeline" value={active} delta={9} icon={FolderKanban} />
          <StatCard label="Closed won" value={closed} delta={-4} icon={CheckCircle2} />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <MiniChart />

          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <p className="text-sm font-medium">Pipeline by status</p>
            <div className="mt-4 space-y-3">
              {byStatus.map((s) => {
                const pct = total ? Math.round((s.count / total) * 100) : 0;
                return (
                  <div key={s.value}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="font-medium">{s.count}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className={`h-full rounded-full ${s.color}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card">
          <div className="flex items-center justify-between border-b border-border/60 p-5">
            <p className="text-sm font-medium">Recent leads</p>
            <Link
              href="/admin/leads"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-border/60">
            {recent.map((lead) => {
              const status = leadStatuses.find((s) => s.value === lead.status)!;
              return (
                <div
                  key={lead.id}
                  className="flex items-center justify-between gap-4 p-4 sm:px-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-xs font-semibold text-white">
                      {lead.fullName.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{lead.fullName}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        {lead.projectType} · {lead.company ?? lead.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <Badge variant="muted" className="hidden sm:inline-flex">
                      <span className={`mr-1.5 h-2 w-2 rounded-full ${status.color}`} />
                      {status.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatTimeAgo(lead.createdAt)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
