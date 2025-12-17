import { FileText, User, Code, Mail } from 'lucide-react';
import { ItemEstructura } from '../tipos';

export const estructuraArchivos: ItemEstructura[] = [
  {
    nombre: 'inicio.jsx',
    tipo: 'archivo',
    icono: FileText,
    color: 'text-blue-400',
    archivo: 'inicio.jsx'
  },
  {
    nombre: 'sobre-mi.jsx',
    tipo: 'archivo',
    icono: User,
    color: 'text-green-400',
    archivo: 'sobre-mi.jsx'
  },
  {
    nombre: 'proyectos.jsx',
    tipo: 'archivo',
    icono: Code,
    color: 'text-yellow-400',
    archivo: 'proyectos.jsx'
  },
  {
    nombre: 'habilidades.jsx',
    tipo: 'archivo',
    icono: Code,
    color: 'text-purple-400',
    archivo: 'habilidades.jsx'
  },
  {
    nombre: 'contacto.jsx',
    tipo: 'archivo',
    icono: Mail,
    color: 'text-purple-400',
    archivo: 'contacto.jsx'
  }
];