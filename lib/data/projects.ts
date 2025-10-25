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
    description:
      "Une plateforme e-commerce moderne avec panier et paiement sécurisé",
    longDescription:
      "Application e-commerce complète avec gestion des produits, panier d'achat, système de paiement intégré et dashboard administrateur.",
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
    title: "DataFlow Analytics",
    category: "Dashboard Analytics",
    description:
      "Dashboard interactif avec visualisation de données en temps réel",
    longDescription:
      "Interface de visualisation de données avec graphiques interactifs, filtres avancés et export de rapports.",
    image: "/AaKits.png",
    tags: ["Shopify", "Shopify Theme"],
    demo: "https://shopxfoot.myshopify.com/?pb=0",
    featured: true,
  },
  {
    id: 3,
    title: "TaskMaster Pro",
    category: "Application Mobile",
    description: "App mobile cross-platform pour la gestion de tâches",
    longDescription:
      "Application de productivité avec synchronisation cloud, notifications push et mode hors ligne.",
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
    demo: "https://collective-club-web.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "SecureAPI",
    category: "API REST",
    description: "API RESTful robuste avec authentification JWT",
    longDescription:
      "Backend complet avec authentification, autorisation, validation des données et documentation Swagger.",
    image: "/Sati.png",
    tags: [
      "Nextjs",
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
