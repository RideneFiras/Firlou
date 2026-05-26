import { AdminTopbar } from "@/components/admin/admin-topbar";
import { LeadsBoard } from "@/components/admin/leads-board";

export default function AdminLeadsPage() {
  return (
    <>
      <AdminTopbar
        title="Leads"
        description="Track and manage your sales pipeline."
      />
      <div className="p-5 sm:p-8">
        <LeadsBoard />
      </div>
    </>
  );
}
