export const skills = {
  frontend: [
    { name: "React", logo: "/react-logo-svgrepo-com.svg" },
    { name: "Next.js", logo: "/next-16-svgrepo-com.svg" },
    { name: "Shopify", logo: "/shopify-color-svgrepo-com.svg" },
    { name: "TypeScript", logo: "/typescript-official-svgrepo-com.svg" },
    { name: "Tailwind CSS", logo: "/tailwind-svgrepo-com.svg" },
  ],
  backend: [
    { name: "Node.js", logo: "/nodejs-icon-svgrepo-com.svg" },
    { name: "Python", logo: "/python-svgrepo-com.svg" },
    { name: "PostgreSQL", logo: "/postgresql-logo-svgrepo-com.svg" },
    { name: "Prisma", logo: "/prisma-svgrepo-com.svg" },
  ],
  tools: [
    { name: "GitHub", logo: "/github-142-svgrepo-com.svg" },
    { name: "Figma", logo: "/figma-svgrepo-com.svg" },
    { name: "Better Auth", logo: "/better-auth-logo-light.4b03f444.png" },
  ],
};

export type SkillCategory = keyof typeof skills;
