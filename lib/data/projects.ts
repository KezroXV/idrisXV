export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "CrossGuild",
    category: "Plateforme E-commerce",
    description: "Modern e-commerce platform with cart and admin dashboard",
    longDescription:
      "Complete e-commerce application with product management, shopping cart, integrated payment system, customization and admin dashboard.",
    image: "/CrossGuild.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    github: "https://github.com/KezroXV/CrossGuild",
    demo: "https://crossguild.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "AaKits",
    category: "E-commerce Shopify Platform",
    description:
      "Modern football jersey e-commerce platform with custom interface",
    longDescription:
      "Modern football jersey e-commerce platform with custom interface with +10K products available in stock.",
    image: "/AaKits.png",
    tags: ["Shopify", "Shopify Theme"],
    demo: "https://shopxfoot.myshopify.com/?pb=0",
    featured: true,
  },
  {
    id: 3,
    title: "Collective Club",
    category: "Shopify Application",
    description:
      "Shopify App discussion forum and exchanges for the users of a Shopify e-commerce store",
    longDescription:
      "Productivity application with cloud synchronization, push notifications and offline mode. Complete discussion platform with Shopify Oauth and API & Google Oauth.",
    image: "/CollectiveClub.png",
    tags: [
      "Shopify",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    demo: "https://collective-club-web.vercel.app/?shop=collective-club.myshopify.com",
    featured: false,
  },
  {
    id: 4,
    title: "Sati",
    category: "Transport and Logistics Platform",
    description: "Complete transport and logistics solution for professionals",
    longDescription:
      "Complete transport and logistics solution for professionals with real-time tracking, route optimization and complete analytics dashboard.",
    image: "/Sati.png",
    tags: [
      "Next.js",
      "i18n",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    demo: "https://sati-mauve.vercel.app/fr",
    featured: false,
  },
];
