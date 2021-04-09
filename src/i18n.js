import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// TODO:
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'appBar.title': 'Music Sheet',
    },
  },
  pl: {
    translation: {
      'appBar.title': 'Nuty',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
