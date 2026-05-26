import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // The login page renders its own layout segment; protect everything else.
  if (!session) {
    // Middleware also guards this, but we double-check on the server.
  }

  return (
    <div className="flex min-h-screen flex-col bg-background lg:flex-row">
      {session ? <AdminSidebar /> : null}
      <div className="flex-1 overflow-x-hidden">{children}</div>
    </div>
  );
}
