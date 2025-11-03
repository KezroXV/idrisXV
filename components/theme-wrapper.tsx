"use client";

import { ThemeProvider } from "@/hooks/use-theme";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
