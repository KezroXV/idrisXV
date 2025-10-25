"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { ProjectModal } from "@/components/project-modal";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function ProjectsTerminal() {
  const t = useTranslations("projects");
  const tData = useTranslations("projectsData");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="border-2 border-foreground hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {/* Project image */}
                <div className="relative h-48 bg-muted border-b-2 border-foreground overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-background text-sm font-bold">
                      {t("cta")} →
                    </span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  {/* Title & Category */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">
                      {tData(`${project.id}.title`)}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {tData(`${project.id}.category`)}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed min-h-[2.5rem]">
                    {tData(`${project.id}.description`)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-foreground">
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {t("cta")} →
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-foreground hover:text-background transition-colors"
                          aria-label="GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-foreground hover:text-background transition-colors"
                          aria-label="Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/KezroXV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <Github className="h-5 w-5" />
              {t("viewMore")}
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}
