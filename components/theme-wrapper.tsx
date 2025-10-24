"use client";

import { ThemeProvider } from "@/hooks/use-theme";
import { ThemeToggle } from "@/components/theme-toggle";
import { ClientOnly } from "@/components/client-only";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ClientOnly>
        <ThemeToggle />
      </ClientOnly>
    </ThemeProvider>
  );
}
