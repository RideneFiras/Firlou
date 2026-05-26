"use client";

import * as React from "react";
import { AdminLoginModal } from "@/components/admin/admin-login-modal";

const CLICK_THRESHOLD = 5;
const CLICK_RESET_MS = 1200;

type AdminAccessContextValue = {
  registerClick: () => void;
  open: boolean;
  setOpen: (next: boolean) => void;
};

const AdminAccessContext = React.createContext<AdminAccessContextValue | null>(null);

export function AdminAccessProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const countRef = React.useRef(0);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const registerClick = React.useCallback(() => {
    countRef.current += 1;

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      countRef.current = 0;
    }, CLICK_RESET_MS);

    if (countRef.current >= CLICK_THRESHOLD) {
      countRef.current = 0;
      if (timerRef.current) clearTimeout(timerRef.current);
      setOpen(true);
    }
  }, []);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <AdminAccessContext.Provider value={{ registerClick, open, setOpen }}>
      {children}
      <AdminLoginModal open={open} onOpenChange={setOpen} />
    </AdminAccessContext.Provider>
  );
}

export function useAdminAccess() {
  const ctx = React.useContext(AdminAccessContext);
  if (!ctx) {
    return {
      registerClick: () => {},
      open: false,
      setOpen: () => {},
    } satisfies AdminAccessContextValue;
  }
  return ctx;
}
