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
      'newMusic.title.tooShort': 'Title is too short',
      'newMusic.title.tooLong': 'Title is too long',
      'newMusic.year.incorrect': 'Year is not correct',
      'newMusic.tag.unique': 'Tag should be unique.',
      'newMusic.tag.tooShort': 'Tag is too short',
      'newMusic.tag.tooLong': 'Tag is too long',
      'newMusic.file.tooShort': 'File is too short',
      'newMusic.author.tooLong': 'Author is too long',
      'newMusic.successSaved': 'Success saved',
      'newMusic.errorSaved': 'Error saved',
      'mucic.authorUnknown': 'Unknown',
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
      'newMusic.title.tooShort': 'Tytuł jest za krótki',
      'newMusic.title.tooLong': 'Tytuł jest za długi',
      'newMusic.year.incorrect': 'Rok jest nieprawidłowy',
      'newMusic.tag.unique': 'Nazwy tagów nie mogą się powtarzać',
      'newMusic.tag.tooShort': 'Nazwa taga jest za krótka',
      'newMusic.tag.tooLong': 'Nazwa taga jest za długa',
      'newMusic.file.tooShort': 'Nazwa pliku jest za krótka',
      'newMusic.author.tooLong': 'Autor jest za długi',
      'newMusic.successSaved': 'Zapisano poprawnie',
      'newMusic.errorSaved': 'Nie udało się zapisać',
      'mucic.authorUnknown': 'Nieznany',
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
