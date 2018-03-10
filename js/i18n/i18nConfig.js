import i18next from 'i18next';
import enTranslations from './locales/en/translations.json';
import siTranslations from './locales/si-LK/translations.json';
import taTranslations from './locales/ta-LK/translations.json';

const instance = i18next.init({
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  whitelist: ['en', 'si-LK', 'ta-LK'],
  resources: {
    'en': {
      translations: enTranslations
    },
    'si-LK': {
      translations: siTranslations
    },
    'ta-LK': {
      translations: taTranslations
    }
  }
});

export default instance;
