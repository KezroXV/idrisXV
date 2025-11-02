"use client";

import { Github, Twitter, Mail } from "lucide-react";
import { BookingModal } from "@/components/booking-modal";

export function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-18 md:pt-24">
      <div className="space-y-8">
        {/* Introduction */}
        <h1 className="text-4xl md:text-5xl font-normal leading-tight">
          I&apos;m Idris, a{" "}
          <span className="font-medium">
            freelance full-stack & Shopify developer
          </span>{" "}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          <i>21y/o computer science graduate</i>
          <br />
          <br />
          <i>
            I build clear, fast, and intuitive web applications, with a focus on
            SEO. Pursuing high-quality results and consistently improving the
            user journey.
          </i>
        </p>

        {/* Tech Stack - Minimalist */}
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
            "Shopify Theme",
            "Shopify App",
          ].map((tech) => (
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
          <BookingModal />
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
          >
            View projects
          </a>
        </div>
        <div className="my-0">
          <i className="text-center text-sm text-gray-600 dark:text-gray-400">
            &quot;A man&apos;s dream will never die!&quot; -- Marshall D. Teach
          </i>
          <br />
          <i className="text-center text-sm text-gray-600 dark:text-gray-400">
            interest : Machine Learning, Animes, Games, Tech & ONE PIECE
          </i>
        </div>
        {/* Social */}
        <div className="flex gap-6 pt-8 text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/KezroXV"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/IdrisdevX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label="Twitter/X"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="mailto:idrisbenabdallah28@gmail.com"
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
