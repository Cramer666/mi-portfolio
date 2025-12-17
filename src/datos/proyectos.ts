import { Proyecto } from '../tipos';

export const proyectos: Proyecto[] = [
  {
    nombre: "Sistema de Gestión Empresarial",
    descripcion: "Aplicación web completa para gestión de recursos, inventario y facturación",
    tecnologias: ["React", "Node.js", "PostgreSQL", "Express"],
    github: "https://github.com/tuusuario/proyecto1",
    demo: "https://proyecto1-demo.com"
  },
  {
    nombre: "E-commerce Moderno",
    descripcion: "Tienda online con carrito de compras, pagos integrados y panel de administración",
    tecnologias: ["Next.js", "Stripe", "MongoDB", "TailwindCSS"],
    github: "https://github.com/tuusuario/proyecto2",
    demo: "https://proyecto2-demo.com"
  },
  {
    nombre: "API REST para Gestión de Tareas",
    descripcion: "Backend escalable con autenticación JWT, CRUD completo y documentación Swagger",
    tecnologias: ["Node.js", "Express", "MySQL", "JWT"],
    github: "https://github.com/tuusuario/proyecto3",
    demo: null
  }
];