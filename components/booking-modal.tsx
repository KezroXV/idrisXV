"use client";

import { Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { useTheme } from "@/hooks/use-theme";

export function BookingModal() {
  const t = useTranslations("booking");
  const { theme } = useTheme();

  // Cal.com theme parameter: light or dark
  const calTheme = theme === "dark" ? "dark" : "light";
  const calUrl = `https://cal.com/idrisxv?theme=${calTheme}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity">
          <Calendar className="h-4 w-4" />
          {t("button")}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[95vh] p-0 bg-white dark:bg-black border border-black dark:border-white overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-black dark:border-white bg-white dark:bg-black">
          <DialogTitle className="text-xl font-semibold text-black dark:text-white">
            {t("title")}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
            {t("description")}
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-[calc(95vh-140px)] bg-white dark:bg-black">
          <iframe
            key={calTheme}
            src={calUrl}
            className="w-full h-full border-0"
            loading="lazy"
            title="Book a call with Idris"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
