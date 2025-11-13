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

export function BookingModal() {
  const t = useTranslations("booking");
  const calUrl = "https://cal.com/idrisxv/1-hour-meeting?theme=light";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:opacity-80 transition-opacity">
          <Calendar className="h-4 w-4" />
          {t("button")}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[95vh] p-0 bg-white border border-black overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-black bg-white">
          <DialogTitle className="text-xl font-semibold text-black">
            {t("title")}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            {t("description")}
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-[calc(95vh-140px)] bg-white">
          <iframe
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
