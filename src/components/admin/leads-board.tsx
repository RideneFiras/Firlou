"use client";

import * as React from "react";
import { LayoutGrid, List, Mail, Phone, Building2 } from "lucide-react";

import {
  mockLeads,
  leadStatuses,
  type MockLead,
  type LeadStatus,
} from "@/lib/data/leads";
import { cn, formatTimeAgo } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LeadsBoard() {
  const [leads, setLeads] = React.useState<MockLead[]>(mockLeads);
  const [view, setView] = React.useState<"board" | "list">("board");

  function moveLead(id: string, status: LeadStatus) {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status } : l)),
    );
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {leads.length} leads in pipeline
        </p>
        <div className="inline-flex rounded-lg border border-border/60 p-0.5">
          <button
            onClick={() => setView("board")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              view === "board" ? "bg-secondary" : "text-muted-foreground",
            )}
          >
            <LayoutGrid className="h-4 w-4" /> Board
          </button>
          <button
            onClick={() => setView("list")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              view === "list" ? "bg-secondary" : "text-muted-foreground",
            )}
          >
            <List className="h-4 w-4" /> List
          </button>
        </div>
      </div>

      {view === "board" ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {leadStatuses.map((status) => {
            const columnLeads = leads.filter((l) => l.status === status.value);
            return (
              <div key={status.value} className="w-72 shrink-0">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${status.color}`} />
                    <span className="text-sm font-medium">{status.label}</span>
                  </div>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                    {columnLeads.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {columnLeads.map((lead) => (
                    <LeadCard key={lead.id} lead={lead} onMove={moveLead} />
                  ))}
                  {columnLeads.length === 0 && (
                    <div className="rounded-xl border border-dashed border-border/60 p-6 text-center text-xs text-muted-foreground">
                      No leads
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Name</th>
                <th className="hidden p-3 font-medium md:table-cell">Project</th>
                <th className="hidden p-3 font-medium lg:table-cell">Budget</th>
                <th className="p-3 font-medium">Status</th>
                <th className="hidden p-3 font-medium sm:table-cell">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {leads.map((lead) => {
                const status = leadStatuses.find((s) => s.value === lead.status)!;
                return (
                  <tr key={lead.id} className="hover:bg-secondary/30">
                    <td className="p-3">
                      <p className="font-medium">{lead.fullName}</p>
                      <p className="text-xs text-muted-foreground">{lead.email}</p>
                    </td>
                    <td className="hidden p-3 text-muted-foreground md:table-cell">
                      {lead.projectType}
                    </td>
                    <td className="hidden p-3 text-muted-foreground lg:table-cell">
                      {lead.budget ?? "—"}
                    </td>
                    <td className="p-3">
                      <Select
                        value={lead.status}
                        onValueChange={(v) => moveLead(lead.id, v as LeadStatus)}
                      >
                        <SelectTrigger className="h-8 w-36 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {leadStatuses.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="hidden p-3 text-xs text-muted-foreground sm:table-cell">
                      {formatTimeAgo(lead.createdAt)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function LeadCard({
  lead,
  onMove,
}: {
  lead: MockLead;
  onMove: (id: string, status: LeadStatus) => void;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{lead.fullName}</p>
          <p className="text-xs text-muted-foreground">{formatTimeAgo(lead.createdAt)}</p>
        </div>
        <Badge variant="muted" className="shrink-0 text-[10px]">
          {lead.projectType}
        </Badge>
      </div>

      <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{lead.message}</p>

      <div className="mt-3 space-y-1 text-xs text-muted-foreground">
        {lead.company && (
          <p className="flex items-center gap-1.5">
            <Building2 className="h-3 w-3" /> {lead.company}
          </p>
        )}
        <p className="flex items-center gap-1.5">
          <Mail className="h-3 w-3" /> {lead.email}
        </p>
        {lead.phone && (
          <p className="flex items-center gap-1.5">
            <Phone className="h-3 w-3" /> {lead.phone}
          </p>
        )}
      </div>

      <Select value={lead.status} onValueChange={(v) => onMove(lead.id, v as LeadStatus)}>
        <SelectTrigger className="mt-3 h-8 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {leadStatuses.map((s) => (
            <SelectItem key={s.value} value={s.value}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
