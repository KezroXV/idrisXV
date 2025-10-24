"use client";

import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

export function ContactTerminal() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 border-t border-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground text-lg">
            Travaillons ensemble sur votre prochain projet
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Informations</h3>

            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="flex items-start gap-4 p-4 border border-foreground hover:bg-foreground hover:text-background transition-colors group"
            >
              <Mail className="h-5 w-5 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-background/70 mb-1">Email</p>
                <p className="text-sm font-medium">your.email@example.com</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 border border-foreground hover:bg-foreground hover:text-background transition-colors group"
            >
              <Github className="h-5 w-5 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-background/70 mb-1">GitHub</p>
                <p className="text-sm font-medium">github.com/yourusername</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 border border-foreground hover:bg-foreground hover:text-background transition-colors group"
            >
              <Linkedin className="h-5 w-5 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-background/70 mb-1">LinkedIn</p>
                <p className="text-sm font-medium">linkedin.com/in/yourusername</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 p-4 border border-foreground">
              <MapPin className="h-5 w-5 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground mb-1">Localisation</p>
                <p className="text-sm font-medium">Votre Ville, Pays</p>
              </div>
            </div>

            {/* Status */}
            <div className="mt-8 p-4 border border-foreground">
              <p className="text-sm text-muted-foreground">
                Disponible pour projets freelance et opportunités CDI
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Réponse sous 24-48h
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="text-xl font-bold mb-6">Envoyez un message</h3>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                  placeholder="votre.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                  placeholder="Votre message..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-foreground text-background hover:opacity-80 transition-opacity font-medium flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
