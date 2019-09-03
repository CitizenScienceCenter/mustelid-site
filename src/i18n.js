import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store/store.js'

Vue.use(VueI18n);

if( !store.state.settings.language ) {
    // no language in store
    var language;

    // check browser
    language = window.navigator.userLanguage || window.navigator.language;

    // trim
    language = language.substr(0,2);

    // check if valid
    if( language !== 'de' && language !== 'fr' && language !== 'it' ) {
        language = "de";
    }

    // language for prerendering default routes
    if( navigator.userAgent === 'ReactSnap' ) {
        language = "de";
    }

    store.dispatch("settings/setLanguage", language );
}

export const i18n = new VueI18n({
  locale: store.state.settings.language,
  silentTranslationWarn: true,
  messages: {
      'de': {

          "site-title": "Wiesel Gesucht | Citizen Science Center Zürich",
          "site-description": "Helfen Sie mit die Wiesel zu finden.",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-identification': {
              'link': 'Identifikation'
          },
          'navigation-complete': {
              'link': 'Identifikation Vollständig'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-faq': {
              'link': 'FAQ'
          },
          'navigation-about': {
              'link': 'Das Projekt'
          },
          'navigation-mustelids': {
              'link': 'Wiesel in der Schweiz'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Anmelden'
          },
          'navigation-register': {
              'link': 'Registrieren'
          },
          'navigation-logout': {
              'link': 'Logout'
          },
          'navigation-reset': {
              'link': 'Passwort zurücksetzen'
          },
          'navigation-profile': {
              'link': 'Profil'
          }

      },
      'en': {

          "site-title": "Mustelid Wanted | Citizen Science Center Zurich",
          "site-description": "Help us find the Mustelids.",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-identification': {
              'link': 'Identification'
          },
          'navigation-complete': {
              'link': 'Identification Complete'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-faq': {
              'link': 'FAQ'
          },
          'navigation-about': {
              'link': 'The Project'
          },
          'navigation-mustelids': {
              'link': 'Weasels in Switzerland'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Login'
          },
          'navigation-register': {
              'link': 'Register'
          },
          'navigation-logout': {
              'link': 'Logout'
          },
          'navigation-reset': {
              'link': 'Reset Password'
          },
          'navigation-profile': {
              'link': 'Profil'
          }
      }
  }

})
