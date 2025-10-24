"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/lib/data/projects";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto border-2 border-foreground p-0">
        {/* Header */}
        <DialogHeader className="border-b border-foreground p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {project.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Long description */}
          <div>
            <h3 className="text-lg font-bold mb-3 pb-2 border-b border-foreground">
              À propos du projet
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-lg font-bold mb-3 pb-2 border-b border-foreground">
              Technologies utilisées
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs border border-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Features (you can add this to your project data) */}
          <div>
            <h3 className="text-lg font-bold mb-3 pb-2 border-b border-foreground">
              Fonctionnalités clés
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-foreground">▸</span>
                <span className="text-muted-foreground">
                  Interface utilisateur moderne et responsive
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">▸</span>
                <span className="text-muted-foreground">
                  Performance optimisée et SEO-friendly
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">▸</span>
                <span className="text-muted-foreground">
                  Architecture scalable et maintenable
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <Github className="h-4 w-4" />
                Voir le code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:opacity-80 transition-opacity"
              >
                <ExternalLink className="h-4 w-4" />
                Voir la démo
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
