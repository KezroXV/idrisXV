"use client";

import { Home, Lightbulb, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { name: "Accueil", href: "#", icon: Home },
  { name: "Compétences", href: "#skills", icon: Lightbulb },
  { name: "Projets", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-card/80 backdrop-blur-xl border border-border rounded-full px-6 py-3 shadow-2xl shadow-primary/10">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="group relative p-3 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                aria-label={item.name}
                title={item.name}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-card border border-border rounded-lg text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
