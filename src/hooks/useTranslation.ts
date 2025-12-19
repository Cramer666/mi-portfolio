import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const useTranslation = () => {
  const { lang } = useLanguage();

  const t = translations[lang];

  return { t };
};
