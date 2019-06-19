import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store/store.js'

Vue.use(VueI18n);

var language;
if( !store.state.settings.language ) {
    // no language in store

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
      'en': {
          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-identification': {
              'link': 'Identification'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-about': {
              'link': 'About the Project'
          },
          'navigation-sources': {
              'link': 'Image Sources'
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
      },
      'de': {
          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-identification': {
              'link': 'Identifikation'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-about': {
              'link': 'Über das Projekt'
          },
          'navigation-sources': {
              'link': 'Bildquellen'
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
      }
  }

})
