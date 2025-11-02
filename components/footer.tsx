"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";

export function Footer() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <footer className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500">
        <p>&copy; {new Date().getFullYear()} IdrisXV.</p>

        {mounted && (
          <button
            onClick={toggleTheme}
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    </footer>
  );
}
