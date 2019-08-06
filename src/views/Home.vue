<i18n>
{


  "de": {

  "cover-heading": "Dem Wiesel auf der Spur",
  "cover-subheading": "Helfen Sie mit sie zu entdecken.",
  "cover-button-primary": "Zu den Videos",
  "cover-button-secondary": "Über's Projekt",

  "intro-heading": "Mit Kamerafallen auf der Suche nach Wieseln",
  "intro-text": "Beobachtungen von Wiesel in der Schweiz sind seltene Glücksfälle. Deshalb verwenden wir Kamerafallen, um mehr über das Vorkommen der Wiesel zu erfahren.<br>Wir möchten herausfinden, ob ein breites Angebot an Beutetieren die Wahrscheinlichkeit erhöht an diesem Standort auch Wiesel nachzuweisen oder ob es andere Faktoren gibt, welche die Verbreitung der Wiesel beeinflussen. Zur Beantwortung dieser Fragen sind wir auf Ihre Hilfe angewiesen.",
  "intro-button": "Mehr erfahren",

  "identification-heading": "Helfen Sie mit die gefilmten Tiere zu identifizieren.",
  "identification-text": "An verschiedenen Standorten haben wir Boxen aufgestellt, die mit einer Wildtierkamera ausgestattet sind. Die Aufnahmen der Kameras geben uns einen Einblick in die Besucher der Box. Nebst Wieseln haben zahlreiche andere Arten die Boxen besucht. Helfen Sie mit diese heimlichen Besucher zu entdecken und zu identifizieren!",
  "identification-button": "Zu den Videos",

  "mustelids-heading": "Wiesel in der Schweiz",
  "mustelids-text": "Wer schon einmal ein Wiesel gesehen hat vergisst diese Beobachtung so schnell nicht mehr. Die flinken Tiere faszinieren. Doch wie steht es um die Wiesel-Populationen in der Schweiz? Haben Sie gewusst, dass es in der Schweiz zwei Wieselarten gibt?",
  "mustelids-button": "Mehr erfahren"

  },
  "en": {



  }

}
</i18n>

<template>
  <div>

    <app-cover imageUrl="/img/cover.jpg">
      <div class="row row-centered">
        <div class="col col-large-8">
          <h2 class="cover-heading scroll-effect" v-html="$t('cover-heading')"></h2>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <p class="cover-subheading scroll-effect scroll-effect-delayed-1">{{ $t('cover-subheading') }}</p>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <div class="button-group centered scroll-effect scroll-effect-delayed-2">
            <router-link tag="button" to="/identification" class="button button-primary">{{ $t('cover-button-primary') }}</router-link>
            <router-link tag="button" to="/about" class="button button-secondary button-secondary-inverted">{{ $t('cover-button-secondary') }}</router-link>
          </div>
        </div>
      </div>
    </app-cover>


    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/graphic-intro.png" />
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('intro-heading') }}</h2>
              <p v-html="$t('intro-text')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/about" class="button button-secondary">{{ $t('intro-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div>
              <div class="extra-padding-large-h">
                <img src="/img/graphic-videos.png"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('identification-heading') }}</h2>
              <p v-html="$t('identification-text')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/about" class="button button-primary">{{ $t('identification-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/graphic-hermelin.jpg" style="border-radius:50%"/>
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('mustelids-heading') }}</h2>
              <p v-html="$t('mustelids-text')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/mustelids" class="button button-secondary">{{ $t('mustelids-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer></app-footer>

  </div>
</template>

<script>

import {mapState} from 'vuex'

import Cover from '@/components/shared/Cover.vue';
import ContentSection from '@/components/shared/ContentSection.vue';
import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";


export default {
  name: 'Home',
  components: {
      SectionNewsletterSignup,
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
  metaInfo: function() {
      return {
          title: this.$t('site-title'),
          titleTemplate: null,
          meta: [
              {
                  property: 'og:title',
                  content: this.$t('site-title')
              }
          ]
      }
  },
  computed: {
      ...mapState({
          user: state => state.c3s.user
      })
  }
}

</script>

<style lang="scss">


</style>
