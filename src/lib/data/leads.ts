export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "MEETING"
  | "PROPOSAL"
  | "IN_PROGRESS"
  | "CLOSED"
  | "LOST";

export type LeadPriority = "LOW" | "NORMAL" | "HIGH" | "URGENT";

export type MockLead = {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  company?: string;
  projectType: string;
  budget?: string;
  deadline?: string;
  message: string;
  status: LeadStatus;
  priority: LeadPriority;
  notes?: string;
  createdAt: string;
};

export const leadStatuses: {
  value: LeadStatus;
  label: string;
  color: string;
  description: string;
}[] = [
  {
    value: "NEW",
    label: "New",
    color: "bg-blue-500",
    description: "Just submitted, not yet contacted",
  },
  {
    value: "CONTACTED",
    label: "Contacted",
    color: "bg-indigo-500",
    description: "Initial contact made",
  },
  {
    value: "MEETING",
    label: "Meeting Scheduled",
    color: "bg-violet-500",
    description: "Discovery call or meeting booked",
  },
  {
    value: "PROPOSAL",
    label: "Proposal Sent",
    color: "bg-amber-500",
    description: "Quote/proposal sent to client",
  },
  {
    value: "IN_PROGRESS",
    label: "In Progress",
    color: "bg-orange-500",
    description: "Project is being built",
  },
  {
    value: "CLOSED",
    label: "Closed Won",
    color: "bg-emerald-500",
    description: "Project completed and paid",
  },
  {
    value: "LOST",
    label: "Lost",
    color: "bg-rose-500",
    description: "Did not proceed",
  },
];

export const leadPriorities: {
  value: LeadPriority;
  label: string;
  color: string;
}[] = [
  { value: "LOW", label: "Low", color: "text-muted-foreground" },
  { value: "NORMAL", label: "Normal", color: "text-blue-400" },
  { value: "HIGH", label: "High", color: "text-amber-400" },
  { value: "URGENT", label: "Urgent", color: "text-rose-400" },
];

export const mockLeads: MockLead[] = [
  {
    id: "ld_001",
    fullName: "Mohamed Trabelsi",
    email: "mohamed@cafenoir.tn",
    phone: "+216 22 555 010",
    whatsapp: "+216 22 555 010",
    company: "Café Noir",
    projectType: "Digital Presence",
    budget: "500 – 1 000 DT",
    deadline: "Within 1 month",
    message:
      "We want a beautiful new website for our coffee shop chain with digital menu and WhatsApp ordering. Currently we have nothing online.",
    status: "NEW",
    priority: "HIGH",
    createdAt: "2026-05-25T10:14:00.000Z",
  },
  {
    id: "ld_002",
    fullName: "Sarra Bouzid",
    email: "sarra@nextway.io",
    phone: "+216 50 110 401",
    whatsapp: "+216 50 110 401",
    company: "NextWay",
    projectType: "SaaS Platform",
    budget: "5 000+ DT",
    deadline: "Within 2 months",
    message:
      "Building a B2B SaaS for HR teams in Tunisia. Need a complete MVP in 8 weeks with auth, dashboards and Stripe billing.",
    status: "MEETING",
    priority: "URGENT",
    notes: "Meeting booked for June 3rd at 10am. Very serious lead.",
    createdAt: "2026-05-22T16:42:00.000Z",
  },
  {
    id: "ld_003",
    fullName: "Anis Khelifi",
    email: "anis@medclinic.tn",
    phone: "+216 71 234 567",
    company: "MedClinic Centre",
    projectType: "Medical / Clinic System",
    budget: "1 000 – 2 000 DT",
    deadline: "Within 2 months",
    message:
      "Looking for a custom clinic dashboard to manage patients, appointments and billing. We have 3 doctors and 8 staff.",
    status: "PROPOSAL",
    priority: "HIGH",
    notes: "Sent proposal on May 24. Waiting for feedback.",
    createdAt: "2026-05-21T08:30:00.000Z",
  },
  {
    id: "ld_004",
    fullName: "Yasmine Gharbi",
    email: "yasmine@boutique.tn",
    whatsapp: "+216 55 987 123",
    company: "Boutique Yasmine",
    projectType: "Professional Website",
    budget: "500 DT",
    deadline: "As soon as possible",
    message:
      "Want a one-page modern site for my new fashion collection launch. Need it fast with WhatsApp button and Instagram integration.",
    status: "NEW",
    priority: "NORMAL",
    createdAt: "2026-05-26T07:05:00.000Z",
  },
  {
    id: "ld_005",
    fullName: "Karim Belaïd",
    email: "karim@flowautomations.io",
    phone: "+216 29 882 311",
    whatsapp: "+216 29 882 311",
    company: "Flow Automations",
    projectType: "Business Automation",
    budget: "1 000 – 2 000 DT",
    deadline: "Within 1 month",
    message:
      "Need to automate our lead capture from Meta Ads into our CRM with custom routing logic and WhatsApp notifications.",
    status: "IN_PROGRESS",
    priority: "HIGH",
    notes: "Project started. Delivery expected June 10.",
    createdAt: "2026-05-12T12:00:00.000Z",
  },
  {
    id: "ld_006",
    fullName: "Houssem Mejri",
    email: "houssem@estatepro.tn",
    phone: "+216 98 123 456",
    company: "Estate Pro",
    projectType: "E-commerce",
    budget: "2 000 – 5 000 DT",
    deadline: "Within 2 months",
    message:
      "Need a real-estate listing portal with map search, agent backoffice and lead tracking. Must be mobile-first.",
    status: "MEETING",
    priority: "HIGH",
    createdAt: "2026-05-18T14:25:00.000Z",
  },
  {
    id: "ld_007",
    fullName: "Olfa Salah",
    email: "olfa@bistroverte.tn",
    whatsapp: "+216 54 321 987",
    company: "Bistro Verte",
    projectType: "Restaurant Platform",
    budget: "500 – 1 000 DT",
    deadline: "Within 1 month",
    message:
      "Replace our outdated WordPress site with something modern and fast. Also want WhatsApp ordering and online reservation.",
    status: "CLOSED",
    priority: "NORMAL",
    notes: "Delivered May 5. Client very happy. Will refer us.",
    createdAt: "2026-04-30T09:11:00.000Z",
  },
  {
    id: "ld_008",
    fullName: "Walid Rekik",
    email: "walid@oldco.tn",
    company: "OldCo Trading",
    projectType: "Internal Business Platform",
    budget: "1 000 – 2 000 DT",
    deadline: "No specific deadline",
    message:
      "Looking to digitalize our internal sales process. We track everything in Excel right now which is painful.",
    status: "LOST",
    priority: "NORMAL",
    notes: "Chose another vendor. Budget constraints.",
    createdAt: "2026-04-22T11:00:00.000Z",
  },
  {
    id: "ld_009",
    fullName: "Rim Hamdi",
    email: "rim@lavoiebeaute.tn",
    whatsapp: "+216 23 456 789",
    company: "La Voie Beauté",
    projectType: "Booking System",
    budget: "500 – 1 000 DT",
    deadline: "Within 2 weeks",
    message:
      "We run a beauty salon and need an online booking system with appointment reminders via WhatsApp. We get 20+ bookings per day.",
    status: "CONTACTED",
    priority: "URGENT",
    createdAt: "2026-05-27T06:30:00.000Z",
  },
  {
    id: "ld_010",
    fullName: "Aziz Mansour",
    email: "aziz@techbridge.tn",
    phone: "+216 71 987 654",
    whatsapp: "+216 71 987 654",
    company: "TechBridge",
    projectType: "AI Integration",
    budget: "2 000 – 5 000 DT",
    deadline: "Within 3 months",
    message:
      "We want to add an AI chatbot to our B2B platform that answers client questions based on our knowledge base.",
    status: "NEW",
    priority: "HIGH",
    createdAt: "2026-05-26T15:00:00.000Z",
  },
];
