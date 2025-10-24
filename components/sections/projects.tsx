"use client";

import { projects } from "@/lib/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Projets Récents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une sélection de mes projets les plus récents et significatifs
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Project Image */}
                <div className="relative h-56 bg-secondary/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                      📁
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background/20 backdrop-blur rounded-full hover:bg-background/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-6 w-6 text-white" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background/20 backdrop-blur rounded-full hover:bg-background/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-6 w-6 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Voir plus sur GitHub
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
