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
import {useTranslations} from 'next-intl';

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const t = useTranslations('projects.modal');
  const tData = useTranslations('projectsData');

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-foreground p-0">
        {/* Header */}
        <DialogHeader className="border-b border-foreground p-4 md:p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-xl md:text-2xl font-bold mb-1">
                {tData(`${project.id}.title`)}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {tData(`${project.id}.description`)}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-5">
          {/* Links line */}
          {project.demo && (
            <div className="flex items-center gap-2 text-sm border-b border-foreground pb-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-muted-foreground">{project.demo.replace('https://', '').replace('http://', '')}</span>
              </a>
            </div>
          )}

          {/* Long description */}
          <div>
            <h3 className="text-base font-bold mb-2 pb-2 border-b border-foreground">
              {t('about')}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {tData(`${project.id}.longDescription`)}
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-base font-bold mb-2 pb-2 border-b border-foreground">
              {t('techStack')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs border border-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-base font-bold mb-2 pb-2 border-b border-foreground">
              {t('keyFeatures')}
            </h3>
            <ul className="space-y-1.5 text-sm">
              {tData.raw(`${project.id}.features`).map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-foreground">▸</span>
                  <span className="text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-foreground hover:bg-foreground hover:text-background transition-colors text-sm"
              >
                <Github className="h-4 w-4" />
                {t('viewGithub')}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background hover:opacity-80 transition-opacity text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                {t('viewDemo')}
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
