export interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  caracteristicas?: string[];
  github: string;
  demo: string | null;
}

export const proyectos: Proyecto[] = [
  {
    nombre: "CompartoDeptoAr",
    descripcion: "Plataforma web completa para compartir departamentos en Argentina. Trabajo final de la carrera con actualizaciones y mejoras constantes.(Aun en desarrollo)",
    tecnologias: ["React", "Node.js", "TypeScript", "Firebase", "Express", "Stripe", "Resend", "TailwindCSS", "Render"],
    caracteristicas: [
      "Sistema de autenticación con Firebase",
      "Publicación y búsqueda de departamentos",
      "Filtros avanzados por zona, precio, amenities",
      "Integración de pagos con Stripe",
      "Sistema de contacto con envío de emails (Resend)",
      "Panel de usuario para gestionar publicaciones",
      "Imágenes y galerías para propiedades",
      "Sistema de favoritos/guardados",
      "Responsive design completo",
      "Actualizaciones constantes"
    ],
    github: "https://github.com/CompartoDeptoAR",
    demo: "https://compartodeptoar.store"
  },
  {
    nombre: "Mi Portfolio",
    descripcion: "Portfolio interactivo con diseño estilo VS Code. Construido con React, TypeScript y Tailwind CSS. Incluye un sistema de contacto funcional con envío de emails a través de Resend (Aun en desarrollo).",
    tecnologias: ["React", "TypeScript", "Vite", "TailwindCSS", "Express.js", "Resend", "Vercel"],
    caracteristicas: [
      "Interfaz tipo VS Code con explorador de archivos",
      "Secciones: Inicio, Sobre mí, Proyectos, Habilidades, Contacto",
      "Formulario de contacto con validación",
      "Envío de emails con Resend",
      "Diseño responsive",
      "Animaciones suaves",
      "Dark mode integrado"
    ],
    github: "https://github.com/Cramer666/mi-portfolio",
    demo: "https://mi-portfolio-three-rose.vercel.app/"
  },
  {
    nombre: "EntidadesApp",
    descripcion: "Backend robusto y escalable para gestión de entidades (Personas y Autos). API REST con TypeScript, Express, MongoDB/Mongoose, CORS configurado y manejo centralizado de errores.",
    tecnologias: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose", "Firebase", "Helmet", "CORS"],
    caracteristicas: [
      "API REST completa con CRUD para Personas y Autos",
      "Almacenamiento flexible (en memoria o MongoDB)",
      "Validación centralizada de errores",
      "Middlewares de seguridad con Helmet",
      "CORS configurado dinámicamente",
      "TypeScript para type-safety",
      "Manejo de errores async/await",
      "Integración con Firebase",
      "Variables de entorno con dotenv"
    ],
    github: "https://github.com/Cramer666/devApp-backend/tree/entidadesApp-Backend",
    demo: null
  }
];