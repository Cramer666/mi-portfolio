export interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  caracteristicas?: string[];
  github: string;
  demo: string | null;
}

export const proyectosEN: Proyecto[] = [
  {
    nombre: "CompartoDeptoAr",
    descripcion: "Complete web platform for sharing apartments in Argentina. Final career project with constant updates and improvements (Still in development).",
    tecnologias: ["React", "Node.js", "TypeScript", "Firebase", "Express", "Stripe", "Resend", "TailwindCSS", "Render"],
    caracteristicas: [
      "Firebase authentication system",
      "Apartment publication and search",
      "Advanced filters by area, price, amenities",
      "Stripe payment integration",
      "Contact system with email sending (Resend)",
      "User panel to manage publications",
      "Images and galleries for properties",
      "Favorites/saved system",
      "Complete responsive design",
      "Constant updates"
    ],
    github: "https://github.com/CompartoDeptoAR",
    demo: "https://compartodeptoar.store"
  },
  {
    nombre: "My Portfolio",
    descripcion: "Interactive portfolio with VS Code style design. Built with React, TypeScript and Tailwind CSS. Includes a functional contact system with email sending through Resend (Still in development).",
    tecnologias: ["React", "TypeScript", "Vite", "TailwindCSS", "Express.js", "Resend", "Vercel"],
    caracteristicas: [
      "VS Code style interface with file explorer",
      "Sections: Home, About Me, Projects, Skills, Contact",
      "Contact form with validation",
      "Email sending with Resend",
      "Responsive design",
      "Smooth animations",
      "Integrated dark mode"
    ],
    github: "https://github.com/Cramer666/mi-portfolio",
    demo: "https://mi-portfolio-three-rose.vercel.app/"
  },
  {
    nombre: "EntidadesApp",
    descripcion: "Robust and scalable backend for entity management (People and Cars). REST API with TypeScript, Express, MongoDB/Mongoose, configured CORS and centralized error handling.",
    tecnologias: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose", "Firebase", "Helmet", "CORS"],
    caracteristicas: [
      "Complete REST API with CRUD for People and Cars",
      "Flexible storage (in-memory or MongoDB)",
      "Centralized error validation",
      "Security middlewares with Helmet",
      "Dynamically configured CORS",
      "TypeScript for type-safety",
      "Async/await error handling",
      "Firebase integration",
      "Environment variables with dotenv"
    ],
    github: "https://github.com/Cramer666/devApp-backend/tree/entidadesApp-Backend",
    demo: null
  }
];