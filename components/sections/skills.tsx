"use client";

import { skills, type SkillCategory } from "@/lib/data/skills";

export function Skills() {
  const categories: { key: SkillCategory; title: string }[] = [
    { key: "frontend", title: "Frontend" },
    { key: "backend", title: "Backend" },
    { key: "tools", title: "Outils & DevOps" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Compétences & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les technologies et outils que je maîtrise pour créer des
              solutions web performantes
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map(({ key, title }) => (
              <div
                key={key}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills[key].map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="h-8 w-8 mb-2 object-contain"
                      />
                      <span className="text-sm font-medium text-foreground text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Et bien d'autres technologies en apprentissage continu...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
