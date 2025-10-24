"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import {useTranslations} from 'next-intl';

export function HeroTerminal() {
  const t = useTranslations('hero');

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-4xl space-y-12">
        {/* Greeting */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{t('greeting')}</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {t('name')}
          </h1>
        </div>

        {/* Role */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-medium">
            {t('role')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 border border-foreground hover:bg-foreground hover:text-background transition-colors text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 bg-foreground text-background hover:opacity-80 transition-opacity font-medium"
          >
            {t('cta.projects')}
          </button>
          <a
            href="#contact"
            className="px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors font-medium"
          >
            {t('cta.contact')}
          </a>
        </div>

        {/* Social */}
        <div className="flex gap-6 pt-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:opacity-60 transition-opacity"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
