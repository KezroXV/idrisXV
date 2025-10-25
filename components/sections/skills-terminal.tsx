"use client";

import { skills } from "@/lib/data/skills";
import Image from "next/image";
import {useTranslations} from 'next-intl';

export function SkillsTerminal() {
  const t = useTranslations('skills');
  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools,
  ];

  // Logos qui doivent être inversés en mode dark/hover
  const darkLogos = ["GitHub", "Next.js", "Prisma", "Better Auth"];

  return (
    <section className="py-12 md:py-16 px-6 md:px-12 border-t border-b border-foreground">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Skills grid with logos */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {allSkills.map((skill) => {
            const needsInvert = darkLogos.includes(skill.name);
            return (
              <div
                key={skill.name}
                className="aspect-square border border-foreground flex flex-col items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-all duration-300 group p-2"
                title={skill.name}
              >
                <div className="relative w-12 h-12 group-hover:scale-110 transition-transform">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    className={`object-contain ${needsInvert ? "dark:invert group-hover:invert" : ""}`}
                  />
                </div>
                <span className="text-xs font-medium text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
