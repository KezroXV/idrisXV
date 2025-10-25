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
    image: "CrossGuild.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/yourusername/project-1",
    demo: "https://project-1-demo.vercel.app",
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
    image: "/projects/project-2.jpg",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project-2",
    demo: "https://project-2-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "TaskMaster Pro",
    category: "Application Mobile",
    description: "App mobile cross-platform pour la gestion de tâches",
    longDescription:
      "Application de productivité avec synchronisation cloud, notifications push et mode hors ligne.",
    image: "/projects/project-3.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/yourusername/project-3",
    featured: false,
  },
  {
    id: 4,
    title: "SecureAPI",
    category: "API REST",
    description: "API RESTful robuste avec authentification JWT",
    longDescription:
      "Backend complet avec authentification, autorisation, validation des données et documentation Swagger.",
    image: "/projects/project-4.jpg",
    tags: ["Express", "MongoDB", "JWT", "Swagger"],
    github: "https://github.com/yourusername/project-4",
    featured: false,
  },
];
