import { LucideIcon } from 'lucide-react';

export interface Pestana {
  id: string;
  icono: LucideIcon;
  color: string;
}

export interface ItemEstructura {
  nombre: string;
  tipo: 'archivo' | 'carpeta';
  icono: LucideIcon;
  color: string;
  archivo?: string;
  abierta?: boolean;
  hijos?: ItemEstructura[];
}

export interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  github: string;
  demo: string | null;
}

export interface FormularioContacto {
  nombre: string;
  email: string;
  mensaje: string;
}

export type EstadoEnvio = 'exito' | 'error' | null;