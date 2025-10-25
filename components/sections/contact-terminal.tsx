"use client";

import { Mail, Github, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { XLogo } from "../ui/x-logo";

export function ContactTerminal() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="py-12 md:py-16 px-6 md:px-12 border-t border-foreground"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">{t("info.title")}</h3>

            {/* Email */}
            <a
              href="mailto:idrisbenabdallah28@gmail.com"
              className="flex items-start gap-4 p-4 border border-foreground hover:bg-foreground hover:text-background transition-colors group"
            >
              <Mail className="h-5 w-5 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-background/70 mb-1">
                  Email
                </p>
                <p className="text-sm font-medium">
                  idrisbenabdallah28@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/KezroXV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 border border-foreground hover:bg-foreground hover:text-background transition-colors group"
            >
              <Github className="h-5 w-5 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-background/70 mb-1">
                  GitHub
                </p>
                <p className="text-sm font-medium">github.com/KezroXV</p>
              </div>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/IdrisdevX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 border border-foreground hover:bg-foreground hover:text-background transition-colors group"
            >
              <XLogo className="h-5 w-5 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-background/70 mb-1">
                  Twitter/X
                </p>
                <p className="text-sm font-medium">x.com/IdrisdevX</p>
              </div>
            </a>

            {/* Status */}
            <div className="mt-8 p-4 border border-foreground">
              <p className="text-sm text-muted-foreground">
                {t("info.freelance")}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {t("info.response")}
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("form.title")}</h3>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                  placeholder={t("form.namePlaceholder")}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                  placeholder={t("form.messagePlaceholder")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-foreground text-background hover:opacity-80 transition-opacity font-medium flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
