"use client";

import { ExternalLink, Github } from "lucide-react";

// Project data with detailed descriptions and process
const projectsData = [
  {
    id: 1,
    title: "CrossGuild",
    subtitle: "Modern e-commerce platform with cart and admin dashboard",
    description:
      "Complete e-commerce application with integrated payment system, shopping cart, and customizable admin dashboard for product and inventory management.",
    results:
      "SEO-optimized performance with responsive interface. Advanced dashboard handles users, orders, products, and inventory seamlessly.",
    process:
      "Implemented comprehensive admin features and optimized performance through code splitting and efficient data management.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    github: "https://github.com/KezroXV/CrossGuild",
    demo: "https://crossguild.vercel.app/",
  },
  {
    id: 2,
    title: "AaKits I key : naymao",
    subtitle:
      "Modern football jersey e-commerce platform with custom interface",
    description:
      "Custom Shopify storefront featuring +10K products in stock with a fluid and intuitive shopping experience.",
    results:
      "Fully customized theme with seamless navigation and comprehensive inventory management.",
    process:
      "Created custom Shopify theme from scratch, focusing on performance and user experience optimization.",
    tech: ["Shopify", "Shopify Theme"],
    demo: "https://shopxfoot.myshopify.com/?pb=0",
  },
  {
    id: 3,
    title: "Collective Club",
    subtitle:
      "Shopify App discussion forum and exchanges for the users of a Shopify e-commerce store",
    description:
      "Community platform with Shopify and Google OAuth integration, featuring posts, comments, likes, and role-based permissions.",
    results:
      "Complete admin dashboard for content moderation. Users can create posts, interact through comments and likes, with granular permission management.",
    process:
      "Implemented dual authentication systems and built comprehensive content management features with real-time updates.",
    tech: [
      "Shopify",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    demo: "https://collective-club-web.vercel.app/",
  },
  {
    id: 4,
    title: "Sati",
    subtitle: "Complete transport and logistics solution for professionals",
    description:
      "Professional logistics platform with real-time geolocation tracking, automatic route optimization, and comprehensive analytics dashboard.",
    results:
      "Fleet and driver management with live tracking. Analytics dashboard provides actionable insights and detailed reporting.",
    process:
      "Integrated multi-language support with i18n and developed automatic scheduling algorithms for route optimization.",
    tech: [
      "Next.js",
      "i18n",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    demo: "https://sati-mauve.vercel.app/fr",
  },
];

export function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-24">
      {/* Section Header */}
      <h2 className="text-3xl md:text-4xl font-medium mb-16">Projects</h2>

      {/* Projects List */}
      <div className="space-y-24">
        {projectsData.map((project) => (
          <article key={project.id} className="space-y-4">
            {/* Title and subtitle */}
            <div>
              <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-500">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Results */}
            <div className="py-3 px-4 bg-gray-50 dark:bg-gray-900 border-l-2 border-black dark:border-white">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium">Results: </span>
                {project.results}
              </p>
            </div>

            {/* Process */}
            <div className="pt-2">
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                {project.process}
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-500">
              {project.tech.map((tech, index) => (
                <span key={tech}>
                  {tech}
                  {index < project.tech.length - 1 && (
                    <span className="ml-2">•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live site
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
