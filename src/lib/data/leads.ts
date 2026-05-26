export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "MEETING"
  | "IN_PROGRESS"
  | "CLOSED"
  | "LOST";

export type MockLead = {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
};

export const leadStatuses: { value: LeadStatus; label: string; color: string }[] = [
  { value: "NEW", label: "New", color: "bg-blue-500" },
  { value: "CONTACTED", label: "Contacted", color: "bg-indigo-500" },
  { value: "MEETING", label: "Meeting", color: "bg-violet-500" },
  { value: "IN_PROGRESS", label: "In Progress", color: "bg-amber-500" },
  { value: "CLOSED", label: "Closed", color: "bg-emerald-500" },
  { value: "LOST", label: "Lost", color: "bg-rose-500" },
];

export const mockLeads: MockLead[] = [
  {
    id: "ld_001",
    fullName: "Mohamed Trabelsi",
    email: "mohamed@cafenoir.tn",
    phone: "+216 22 555 010",
    company: "Café Noir",
    projectType: "Website",
    budget: "500-1000 DT",
    message:
      "We want to launch a beautiful new website for our coffee shop chain with online ordering.",
    status: "NEW",
    createdAt: "2026-05-25T10:14:00.000Z",
  },
  {
    id: "ld_002",
    fullName: "Sarra Bouzid",
    email: "sarra@nextway.io",
    phone: "+216 50 110 401",
    company: "NextWay",
    projectType: "SaaS MVP",
    budget: "5000+ DT",
    message: "Building a B2B SaaS for HR teams. Need a complete MVP in 8 weeks.",
    status: "MEETING",
    createdAt: "2026-05-22T16:42:00.000Z",
  },
  {
    id: "ld_003",
    fullName: "Anis Khelifi",
    email: "anis@medclinic.tn",
    phone: "+216 71 234 567",
    company: "MedClinic",
    projectType: "Dashboard",
    budget: "2000-4000 DT",
    message:
      "Looking for a custom dashboard to manage patients, appointments and billing.",
    status: "CONTACTED",
    createdAt: "2026-05-21T08:30:00.000Z",
  },
  {
    id: "ld_004",
    fullName: "Yasmine Gharbi",
    email: "yasmine@boutique.tn",
    company: "Boutique Yasmine",
    projectType: "Landing Page",
    budget: "< 500 DT",
    message: "Want a one-page modern site for my new collection launch.",
    status: "NEW",
    createdAt: "2026-05-26T07:05:00.000Z",
  },
  {
    id: "ld_005",
    fullName: "Karim Belaïd",
    email: "karim@flowautomations.io",
    phone: "+216 29 882 311",
    company: "Flow Automations",
    projectType: "Automation",
    budget: "1000-2000 DT",
    message:
      "Need to automate our lead capture from Meta Ads into HubSpot with custom routing logic.",
    status: "IN_PROGRESS",
    createdAt: "2026-05-12T12:00:00.000Z",
  },
  {
    id: "ld_006",
    fullName: "Houssem Mejri",
    email: "houssem@realstate.tn",
    company: "Estate Pro",
    projectType: "Web App",
    budget: "2000-4000 DT",
    message:
      "We need a real-estate listing portal with map search, agent backoffice and lead tracking.",
    status: "MEETING",
    createdAt: "2026-05-18T14:25:00.000Z",
  },
  {
    id: "ld_007",
    fullName: "Olfa S.",
    email: "olfa@bistro.tn",
    company: "Bistro Verte",
    projectType: "Website",
    budget: "500-1000 DT",
    message: "Replace our outdated WordPress site with something modern and fast.",
    status: "CLOSED",
    createdAt: "2026-04-30T09:11:00.000Z",
  },
  {
    id: "ld_008",
    fullName: "Walid R.",
    email: "walid@oldco.tn",
    company: "OldCo",
    projectType: "Custom",
    budget: "1000-2000 DT",
    message: "Looking to digitalize our internal sales process.",
    status: "LOST",
    createdAt: "2026-04-22T11:00:00.000Z",
  },
];
