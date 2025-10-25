"use client";

import { useTranslations } from "next-intl";

export function FooterTerminal() {
  const t = useTranslations("footer");

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-foreground">
      <div className="max-w-6xl mx-auto flex justify-center items-center text-sm text-muted-foreground">
        <p>© 2025 Idris. {t("copyright")}</p>
      </div>
    </footer>
  );
}
