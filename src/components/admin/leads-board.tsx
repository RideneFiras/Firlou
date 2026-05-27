"use client";

import * as React from "react";
import {
  LayoutGrid,
  List,
  Mail,
  Phone,
  Building2,
  Search,
  MessageCircle,
  Download,
  AlertTriangle,
  AlertCircle,
  Minus,
  FileText,
  X,
} from "lucide-react";

import {
  mockLeads,
  leadStatuses,
  leadPriorities,
  type MockLead,
  type LeadStatus,
  type LeadPriority,
} from "@/lib/data/leads";
import { cn, formatTimeAgo } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const priorityIcons: Record<LeadPriority, React.ReactNode> = {
  LOW: <Minus className="h-3 w-3" />,
  NORMAL: <Minus className="h-3 w-3" />,
  HIGH: <AlertCircle className="h-3 w-3" />,
  URGENT: <AlertTriangle className="h-3 w-3" />,
};

export function LeadsBoard() {
  const [leads, setLeads] = React.useState<MockLead[]>(mockLeads);
  const [view, setView] = React.useState<"board" | "list">("board");
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<LeadStatus | "ALL">("ALL");
  const [selectedLead, setSelectedLead] = React.useState<MockLead | null>(null);
  const [noteText, setNoteText] = React.useState("");

  const filtered = React.useMemo(() => {
    return leads.filter((l) => {
      const matchSearch =
        search === "" ||
        l.fullName.toLowerCase().includes(search.toLowerCase()) ||
        l.email.toLowerCase().includes(search.toLowerCase()) ||
        (l.company ?? "").toLowerCase().includes(search.toLowerCase()) ||
        l.projectType.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "ALL" || l.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [leads, search, statusFilter]);

  function moveLead(id: string, status: LeadStatus) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  }

  function setPriority(id: string, priority: LeadPriority) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, priority } : l)));
  }

  function saveNote(id: string, notes: string) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, notes } : l)));
    setSelectedLead(null);
  }

  function exportCSV() {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "WhatsApp",
      "Company",
      "Project",
      "Budget",
      "Deadline",
      "Status",
      "Priority",
      "Created",
    ];
    const rows = filtered.map((l) => [
      l.fullName,
      l.email,
      l.phone ?? "",
      l.whatsapp ?? "",
      l.company ?? "",
      l.projectType,
      l.budget ?? "",
      l.deadline ?? "",
      l.status,
      l.priority,
      new Date(l.createdAt).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `firlou-leads-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-48">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads…"
            className="pl-9"
          />
        </div>

        {/* Status filter */}
        <Select
          value={statusFilter}
          onValueChange={(v) => setStatusFilter(v as LeadStatus | "ALL")}
        >
          <SelectTrigger className="w-44">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All statuses</SelectItem>
            {leadStatuses.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Export */}
        <Button
          variant="outline"
          size="sm"
          onClick={exportCSV}
          className="gap-2"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </Button>

        {/* View toggle */}
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

      {/* Results count */}
      <p className="mb-4 text-sm text-muted-foreground">
        Showing {filtered.length} of {leads.length} leads
      </p>

      {/* BOARD VIEW */}
      {view === "board" ? (
        <div className="flex gap-4 overflow-x-auto pb-6">
          {leadStatuses.map((status) => {
            const columnLeads = filtered.filter((l) => l.status === status.value);
            return (
              <div key={status.value} className="w-72 shrink-0">
                <div className="mb-3 flex items-center justify-between rounded-lg bg-secondary/40 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${status.color}`} />
                    <span className="text-sm font-medium">{status.label}</span>
                  </div>
                  <span className="rounded-full bg-background px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                    {columnLeads.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {columnLeads.map((lead) => (
                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      onMove={moveLead}
                      onSetPriority={setPriority}
                      onOpenNotes={() => {
                        setSelectedLead(lead);
                        setNoteText(lead.notes ?? "");
                      }}
                    />
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
        /* LIST VIEW */
        <div className="overflow-hidden rounded-2xl border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="p-3 pl-5 font-medium">Lead</th>
                <th className="hidden p-3 font-medium md:table-cell">Project</th>
                <th className="hidden p-3 font-medium lg:table-cell">Budget</th>
                <th className="hidden p-3 font-medium xl:table-cell">Priority</th>
                <th className="p-3 font-medium">Status</th>
                <th className="hidden p-3 font-medium sm:table-cell">Date</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filtered.map((lead) => {
                const status = leadStatuses.find((s) => s.value === lead.status)!;
                const priority = leadPriorities.find((p) => p.value === lead.priority)!;
                return (
                  <tr key={lead.id} className="hover:bg-secondary/20 transition-colors">
                    <td className="p-3 pl-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-xs font-bold text-white">
                          {lead.fullName.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate font-medium">{lead.fullName}</p>
                          <p className="truncate text-xs text-muted-foreground">
                            {lead.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="hidden p-3 text-muted-foreground md:table-cell">
                      <p className="text-xs font-medium text-foreground/80">{lead.projectType}</p>
                      {lead.company && (
                        <p className="text-xs text-muted-foreground">{lead.company}</p>
                      )}
                    </td>
                    <td className="hidden p-3 text-muted-foreground lg:table-cell text-xs">
                      {lead.budget ?? "—"}
                    </td>
                    <td className="hidden p-3 xl:table-cell">
                      <Select
                        value={lead.priority}
                        onValueChange={(v) => setPriority(lead.id, v as LeadPriority)}
                      >
                        <SelectTrigger className="h-7 w-28 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {leadPriorities.map((p) => (
                            <SelectItem key={p.value} value={p.value}>
                              <span className={p.color}>{p.label}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-3">
                      <Select
                        value={lead.status}
                        onValueChange={(v) => moveLead(lead.id, v as LeadStatus)}
                      >
                        <SelectTrigger className="h-8 w-40 text-xs">
                          <span className={`mr-1.5 inline-block h-2 w-2 rounded-full ${status.color}`} />
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
                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        {lead.whatsapp && (
                          <a
                            href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors"
                            title="WhatsApp"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                          </a>
                        )}
                        <a
                          href={`mailto:${lead.email}`}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                          title="Email"
                        >
                          <Mail className="h-3.5 w-3.5" />
                        </a>
                        <button
                          onClick={() => {
                            setSelectedLead(lead);
                            setNoteText(lead.notes ?? "");
                          }}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                          title="Notes"
                        >
                          <FileText className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="py-16 text-center text-sm text-muted-foreground">
              No leads match your search.
            </div>
          )}
        </div>
      )}

      {/* Notes modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-border/60 bg-card p-6 shadow-2xl">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-semibold">
                  {selectedLead.fullName}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {selectedLead.projectType} · {selectedLead.company ?? selectedLead.email}
                </p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Contact quick actions */}
            <div className="mb-4 flex gap-2">
              {selectedLead.whatsapp && (
                <a
                  href={`https://wa.me/${selectedLead.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-2 text-xs font-medium text-emerald-500 hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              )}
              <a
                href={`mailto:${selectedLead.email}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/60 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
              {selectedLead.phone && (
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/60 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call
                </a>
              )}
            </div>

            {/* Lead details */}
            <div className="mb-4 rounded-xl bg-secondary/40 p-3 text-xs space-y-1.5 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground/80">Project:</span>{" "}
                {selectedLead.projectType}
              </p>
              <p>
                <span className="font-medium text-foreground/80">Budget:</span>{" "}
                {selectedLead.budget ?? "—"}
              </p>
              <p>
                <span className="font-medium text-foreground/80">Deadline:</span>{" "}
                {selectedLead.deadline ?? "—"}
              </p>
              <p className="line-clamp-3">
                <span className="font-medium text-foreground/80">Message:</span>{" "}
                {selectedLead.message}
              </p>
            </div>

            {/* Notes textarea */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Internal notes
              </label>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                rows={3}
                placeholder="Add notes about this lead…"
                className="w-full resize-none rounded-xl border border-border/60 bg-background px-3 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary/40 transition-colors"
              />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedLead(null)}
              >
                Cancel
              </Button>
              <Button
                variant="gradient"
                size="sm"
                onClick={() => saveNote(selectedLead.id, noteText)}
              >
                Save note
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LeadCard({
  lead,
  onMove,
  onSetPriority,
  onOpenNotes,
}: {
  lead: MockLead;
  onMove: (id: string, status: LeadStatus) => void;
  onSetPriority: (id: string, priority: LeadPriority) => void;
  onOpenNotes: () => void;
}) {
  const priority = leadPriorities.find((p) => p.value === lead.priority)!;

  return (
    <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{lead.fullName}</p>
          <p className="text-xs text-muted-foreground">{formatTimeAgo(lead.createdAt)}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className={cn("text-xs font-medium flex items-center gap-1", priority.color)}>
            {priorityIcons[lead.priority]}
            {lead.priority}
          </span>
          <Badge variant="muted" className="shrink-0 text-[10px]">
            {lead.projectType}
          </Badge>
        </div>
      </div>

      {lead.company && (
        <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <Building2 className="h-3 w-3 shrink-0" />
          {lead.company}
        </p>
      )}

      <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">
        {lead.message}
      </p>

      {lead.budget && (
        <p className="mt-2 text-xs font-medium text-primary/80">{lead.budget}</p>
      )}

      {/* Contact actions */}
      <div className="mt-3 flex items-center gap-1.5">
        {lead.whatsapp && (
          <a
            href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors"
            title="WhatsApp"
          >
            <MessageCircle className="h-3 w-3" />
          </a>
        )}
        <a
          href={`mailto:${lead.email}`}
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground transition-colors"
          title="Email"
        >
          <Mail className="h-3 w-3" />
        </a>
        <button
          onClick={onOpenNotes}
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground transition-colors ml-auto",
            lead.notes && "border-primary/30 text-primary/60",
          )}
          title={lead.notes ? "View notes" : "Add note"}
        >
          <FileText className="h-3 w-3" />
        </button>
      </div>

      {/* Status selector */}
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
