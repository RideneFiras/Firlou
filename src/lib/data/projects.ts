export type ProjectStatus =
  | "PLANNING"
  | "IN_PROGRESS"
  | "REVIEW"
  | "DELIVERED"
  | "ARCHIVED";

export type MockProject = {
  id: string;
  name: string;
  client: string;
  type: string;
  status: ProjectStatus;
  progress: number;
  budget: string;
  deadline: string;
};

export const projectStatuses: { value: ProjectStatus; label: string; color: string }[] = [
  { value: "PLANNING", label: "Planning", color: "bg-slate-500" },
  { value: "IN_PROGRESS", label: "In Progress", color: "bg-amber-500" },
  { value: "REVIEW", label: "Review", color: "bg-violet-500" },
  { value: "DELIVERED", label: "Delivered", color: "bg-emerald-500" },
  { value: "ARCHIVED", label: "Archived", color: "bg-zinc-500" },
];

export const mockProjects: MockProject[] = [
  {
    id: "pr_001",
    name: "Northwind SaaS",
    client: "Northwind Logistics",
    type: "SaaS MVP",
    status: "IN_PROGRESS",
    progress: 62,
    budget: "12 000 DT",
    deadline: "2026-07-15",
  },
  {
    id: "pr_002",
    name: "MediSphere Dashboard v2",
    client: "MediSphere",
    type: "Dashboard",
    status: "REVIEW",
    progress: 88,
    budget: "3 500 DT",
    deadline: "2026-06-05",
  },
  {
    id: "pr_003",
    name: "Salam Ordering Platform",
    client: "Salam Group",
    type: "Web App",
    status: "DELIVERED",
    progress: 100,
    budget: "4 200 DT",
    deadline: "2026-04-20",
  },
  {
    id: "pr_004",
    name: "Lumen AI Assistant",
    client: "Lumen Labs",
    type: "AI Integration",
    status: "IN_PROGRESS",
    progress: 41,
    budget: "8 000 DT",
    deadline: "2026-08-01",
  },
  {
    id: "pr_005",
    name: "Café Noir Website",
    client: "Café Noir",
    type: "Website",
    status: "PLANNING",
    progress: 12,
    budget: "900 DT",
    deadline: "2026-06-30",
  },
];
