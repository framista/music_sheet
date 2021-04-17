import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// TODO:
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'appBar.title': 'Music Sheet',
      newMusic: 'New music',
      'common.save': 'Save',
      'common.cancel': 'Cancel',
      'common.chooseFile': 'Choose file',
      'newMusic.author': 'Author',
      'newMusic.file': 'File',
      'newMusic.tags': 'Tags',
      'newMusic.title': 'Title',
      'newMusic.year': 'Year',
    },
  },
  pl: {
    translation: {
      'appBar.title': 'Nuty',
      newMusic: 'Nowy utwór',
      'common.save': 'Zapisz',
      'common.cancel': 'Anuluj',
      'common.chooseFile': 'Wybierz plik',
      'newMusic.author': 'Autor',
      'newMusic.file': 'Plik',
      'newMusic.tags': 'Tagi',
      'newMusic.title': 'Tytuł',
      'newMusic.year': 'Rok',
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
