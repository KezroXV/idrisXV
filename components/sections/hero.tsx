"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 animate-gradient-xy" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <p className="text-primary font-mono text-sm md:text-base mb-4">
              Bonjour, je suis
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">
              Votre Nom
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground">
              Développeur{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Full Stack
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Je crée des expériences web modernes et performantes avec une
            attention particulière au design et à l'expérience utilisateur.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              Voir mes projets
              <ArrowDown className="inline-block ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Me contacter
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center items-center pt-8 animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
}
