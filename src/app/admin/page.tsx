import Link from "next/link";
import {
  Users,
  FolderKanban,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Globe,
  Target,
} from "lucide-react";

import { mockLeads, leadStatuses } from "@/lib/data/leads";
import { mockProjects } from "@/lib/data/projects";
import { formatTimeAgo } from "@/lib/utils";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { StatCard } from "@/components/admin/stat-card";
import { MiniChart } from "@/components/admin/mini-chart";
import { Badge } from "@/components/ui/badge";

const trafficSources = [
  { label: "WhatsApp direct", value: 38, color: "bg-emerald-500" },
  { label: "Google Search", value: 27, color: "bg-blue-500" },
  { label: "Instagram", value: 18, color: "bg-pink-500" },
  { label: "Referrals", value: 12, color: "bg-violet-500" },
  { label: "Other", value: 5, color: "bg-zinc-500" },
];

const topPages = [
  { path: "/", label: "Homepage", visits: 1240, trend: "+12%" },
  { path: "/services", label: "Services", visits: 830, trend: "+8%" },
  { path: "/pricing", label: "Pricing", visits: 620, trend: "+22%" },
  { path: "/contact", label: "Contact", visits: 410, trend: "+31%" },
  { path: "/portfolio", label: "Portfolio", visits: 380, trend: "+5%" },
];

export default function AdminDashboardPage() {
  const total = mockLeads.length;
  const newLeads = mockLeads.filter((l) => l.status === "NEW").length;
  const active = mockLeads.filter((l) =>
    ["CONTACTED", "MEETING", "PROPOSAL", "IN_PROGRESS"].includes(l.status),
  ).length;
  const closed = mockLeads.filter((l) => l.status === "CLOSED").length;
  const convRate = Math.round((closed / total) * 100);

  const recent = [...mockLeads]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 6);

  const byStatus = leadStatuses.map((s) => ({
    ...s,
    count: mockLeads.filter((l) => l.status === s.value).length,
  }));

  const activeProjects = mockProjects.filter((p) =>
    ["PLANNING", "IN_PROGRESS", "REVIEW"].includes(p.status),
  );

  return (
    <>
      <AdminTopbar
        title="Dashboard"
        description="Pipeline overview and studio performance."
      />

      <div className="space-y-6 p-5 sm:p-8">

        {/* KPI row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total leads" value={total} delta={32} icon={Users} />
          <StatCard label="New leads" value={newLeads} delta={18} icon={TrendingUp} />
          <StatCard label="Active pipeline" value={active} delta={9} icon={FolderKanban} />
          <StatCard label="Conversion rate" value={`${convRate}%`} delta={4} icon={Target} />
        </div>

        {/* Charts */}
        <MiniChart />

        {/* Pipeline + Traffic sources */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Pipeline by status */}
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Pipeline by status</p>
              <Link
                href="/admin/leads"
                className="text-xs text-primary hover:underline"
              >
                View all →
              </Link>
            </div>
            <div className="mt-5 space-y-3">
              {byStatus.map((s) => {
                const pct = total ? Math.round((s.count / total) * 100) : 0;
                return (
                  <div key={s.value}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <span className={`h-2 w-2 rounded-full ${s.color}`} />
                        {s.label}
                      </span>
                      <span className="font-semibold">{s.count}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className={`h-full rounded-full ${s.color} transition-all duration-500`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Traffic sources */}
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <p className="text-sm font-semibold">Traffic sources</p>
            <div className="mt-5 space-y-3">
              {trafficSources.map((source) => (
                <div key={source.label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <span className={`h-2 w-2 rounded-full ${source.color}`} />
                      {source.label}
                    </span>
                    <span className="font-semibold">{source.value}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full rounded-full ${source.color} transition-all duration-500`}
                      style={{ width: `${source.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active projects + Top pages */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Recent leads */}
          <div className="rounded-2xl border border-border/60 bg-card">
            <div className="flex items-center justify-between border-b border-border/60 p-5">
              <p className="text-sm font-semibold">Recent leads</p>
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
                    className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-secondary/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-xs font-bold text-white">
                        {lead.fullName.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{lead.fullName}</p>
                        <p className="truncate text-xs text-muted-foreground">
                          {lead.projectType} · {lead.company ?? lead.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      {lead.whatsapp && (
                        <a
                          href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                        </a>
                      )}
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

          {/* Top pages */}
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex items-center gap-2 mb-5">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm font-semibold">Top pages this month</p>
            </div>
            <div className="space-y-4">
              {topPages.map((page, i) => (
                <div key={page.path} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-muted-foreground">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{page.label}</p>
                      <p className="text-xs text-muted-foreground">{page.path}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-semibold">{page.visits.toLocaleString()}</p>
                    <p className="text-xs text-emerald-500">{page.trend}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active projects */}
        <div className="rounded-2xl border border-border/60 bg-card">
          <div className="flex items-center justify-between border-b border-border/60 p-5">
            <p className="text-sm font-semibold">Active projects</p>
            <Link
              href="/admin/projects"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-border/60">
            {activeProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center gap-4 px-5 py-4 hover:bg-secondary/20 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-medium">{project.name}</p>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      — {project.client}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                      {project.progress}%
                    </span>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-semibold">{project.budget}</p>
                  <p className="text-xs text-muted-foreground">{project.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
