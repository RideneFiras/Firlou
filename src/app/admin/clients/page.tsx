import { Users, Mail, Phone, MessageCircle, TrendingUp } from "lucide-react";

import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Badge } from "@/components/ui/badge";

type Client = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  totalProjects: number;
  totalRevenue: string;
  lastProject: string;
  status: "active" | "completed" | "prospect";
};

const mockClients: Client[] = [
  {
    id: "cl_001",
    name: "Yassine Ben Ali",
    company: "Northwind Logistics",
    email: "yassine@northwind.tn",
    phone: "+216 71 234 567",
    whatsapp: "+216 71 234 567",
    totalProjects: 2,
    totalRevenue: "14 000 DT",
    lastProject: "Northwind SaaS v2",
    status: "active",
  },
  {
    id: "cl_002",
    name: "Dr. Karim Trabelsi",
    company: "MediSphere",
    email: "karim@medisphere.tn",
    phone: "+216 71 987 654",
    whatsapp: "+216 71 987 654",
    totalProjects: 2,
    totalRevenue: "6 200 DT",
    lastProject: "Clinic Dashboard v2",
    status: "active",
  },
  {
    id: "cl_003",
    name: "Sarah M.",
    company: "Salam Group",
    email: "sarah@salamgroup.tn",
    phone: "+216 22 456 789",
    totalProjects: 1,
    totalRevenue: "4 200 DT",
    lastProject: "Salam Ordering Platform",
    status: "completed",
  },
  {
    id: "cl_004",
    name: "Hela Jaziri",
    company: "Lumen Labs",
    email: "hela@lumenlabs.io",
    whatsapp: "+216 55 321 654",
    totalProjects: 1,
    totalRevenue: "8 000 DT",
    lastProject: "AI Sales Assistant",
    status: "active",
  },
  {
    id: "cl_005",
    name: "Anissa B.",
    company: "Estate Luxury",
    email: "anissa@estateluxury.tn",
    phone: "+216 98 765 432",
    totalProjects: 1,
    totalRevenue: "5 500 DT",
    lastProject: "Real Estate Portal",
    status: "completed",
  },
  {
    id: "cl_006",
    name: "Mohamed Trabelsi",
    company: "Café Noir",
    email: "mohamed@cafenoir.tn",
    whatsapp: "+216 22 555 010",
    totalProjects: 0,
    totalRevenue: "—",
    lastProject: "Website (in progress)",
    status: "prospect",
  },
];

const statusConfig = {
  active: { label: "Active client", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  completed: { label: "Past client", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  prospect: { label: "Prospect", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
};

export default function AdminClientsPage() {
  const total = mockClients.length;
  const active = mockClients.filter((c) => c.status === "active").length;
  const totalRevenue = "37 900 DT";

  return (
    <>
      <AdminTopbar
        title="Clients"
        description="Client profiles, history and payment overview."
      />

      <div className="p-5 sm:p-8 space-y-6">
        {/* KPI row */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Total clients", value: total, icon: Users, color: "text-blue-400" },
            { label: "Active clients", value: active, icon: TrendingUp, color: "text-emerald-400" },
            { label: "Total revenue", value: totalRevenue, icon: TrendingUp, color: "text-violet-400" },
          ].map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.label}
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <Icon className={cn("h-5 w-5", kpi.color)} />
                </div>
                <div>
                  <p className="text-2xl font-display font-semibold">{kpi.value}</p>
                  <p className="text-xs text-muted-foreground">{kpi.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mockClients.map((client) => {
            const config = statusConfig[client.status];
            return (
              <article
                key={client.id}
                className="rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/30 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm font-bold text-white">
                      {client.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-semibold truncate">{client.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{client.company}</p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${config.color}`}
                  >
                    {config.label}
                  </span>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-secondary/40 p-3 text-xs">
                  <div>
                    <p className="text-muted-foreground">Projects</p>
                    <p className="font-semibold text-foreground">{client.totalProjects}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Revenue</p>
                    <p className="font-semibold text-foreground">{client.totalRevenue}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Last project</p>
                    <p className="font-medium text-foreground/80 truncate">{client.lastProject}</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-4 flex gap-2">
                  {client.whatsapp && (
                    <a
                      href={`https://wa.me/${client.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-2 text-xs font-medium text-emerald-500 hover:bg-emerald-500/20 transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  )}
                  <a
                    href={`mailto:${client.email}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border/60 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Email
                  </a>
                  {client.phone && !client.whatsapp && (
                    <a
                      href={`tel:${client.phone}`}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border/60 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

// Inline cn helper since this is a server component
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
