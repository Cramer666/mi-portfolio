import { useLanguage } from '../context/LanguageContext';
import { es } from './es';
import { en } from './en';

export const useText = () => {
  const { lang } = useLanguage();
  return lang === 'es' ? es : en;
};
