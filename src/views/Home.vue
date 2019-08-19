<i18n>
{


  "de": {

  "cover-heading": "Dem Wiesel auf der Spur",
  "cover-subheading": "Wer zeigt sich in der Fotobox?",
  "cover-button-primary": "Zu den Videos",
  "cover-button-secondary": "Über's Projekt",

  "intro-heading": "Mit Kamerafallen auf der Suche nach Wieseln",
  "intro-text": "Wiesel geraten in der Schweiz zunehmend unter Druck. Ihr Lebensraum wird kleiner und Beobachtungen der flinken Tiere werden immer seltener. Als Raubtiere liefern Wiesel jedoch wichtige Hinweise für den Zustand des ganzen Ökosystems. Deshalb benutzen wir Kamerafallen, um das Vorkommen von Wieseln und ihren Beutetieren im Schweizer Mittelland zu untersuchen. Bei der Auswertung der Videos brauchen wir Ihre Hilfe!",
  "intro-button": "Weiterlesen",

  "identification-heading": "Helfen Sie mit, die gefilmten Tiere zu identifizieren.",
  "identification-text": "An verschiedenen Standorten haben wir Boxen aufgestellt, die mit einer Wildtierkamera ausgestattet sind. Die Aufnahmen der Kameras geben uns einen Einblick in die Besucher der Box. Nebst Wieseln haben zahlreiche andere Arten die Boxen besucht. Helfen Sie mit, diese heimlichen Besucher zu entdecken und zu identifizieren!",
  "identification-button": "Zu den Videos",

  "mustelids-heading": "Wiesel in der Schweiz",
  "mustelids-text": "Wer schon einmal ein Wiesel gesehen hat vergisst diese Beobachtung so schnell nicht mehr. Die flinken Tiere faszinieren. Doch wie steht es um die Wiesel-Populationen in der Schweiz? Haben Sie gewusst, dass es in der Schweiz zwei Wieselarten gibt?",
  "mustelids-button": "Mehr erfahren"

  },
  "en": {

  "cover-heading": "On the Trail of the Weasel",
  "cover-subheading": "Who's in the Camera Box?",
  "cover-button-primary": "To the Videos",
  "cover-button-secondary": "About the Project",

  "intro-heading": "Searching for Weasels With Camera Traps",
  "intro-text": "Weasels are under increasing pressure in Switzerland. Their habitat is becoming smaller and observations of these elusive animals are becoming increasingly rare. As predators, however, weasels provide important information on the condition of the entire ecosystem. We therefore use camera traps to investigate the occurrence of weasels and their prey in the Swiss Midlands. Help us us evaluate these videos so that we can monitor their movements!",
  "intro-button": "Read more",

  "identification-heading": "Help us to identify the filmed animals.",
  "identification-text": "At various locations we have set up boxes equipped with a wildlife camera. The pictures give us an insight into the visitors of the box. In addition to weasels, numerous other species have visited the boxes. Help us to discover and identify these secret visitors!",
  "identification-button": "Zu den Videos",

  "mustelids-heading": "Weasels in Switzerland",
  "mustelids-text": "Anyone who has ever seen a weasel will never forget this observation. These elusive and clever animals fascinate people. But how are weasel populations in Switzerland doing? Did you know that there are two weasel species in Switzerland?",
  "mustelids-button": "Learn more"


  }

}
</i18n>

<template>
  <div>

    <app-cover imageUrl="/img/cover.jpg" goal="15">
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

    <img src="/img/scientifica-teaser.png" class="scientifica-teaser" />

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
                <router-link tag="button" to="/identification" class="button button-primary">{{ $t('identification-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>



    <section-stats color="greyish" :submissionCount="totalSubmissionCount" :userCount="totalUserCount" :taskCount="totalTaskCount" ></section-stats>



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

    <section-s-d-g goal="15" color="light-greyish">
      This project is supporting goal no. 15 from the UN Sustainable Development Goals when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </section-s-d-g>


    <section-feedback email="wiesel@citizenscience.ch"></section-feedback>


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
import SectionSDG from "../components/shared/SectionSDG";
import SectionStats from "../components/shared/SectionStats";
import SectionFeedback from "../components/shared/SectionFeedback";


export default {
  name: 'Home',
  components: {
      SectionFeedback,
      SectionStats,
      SectionSDG,
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
          user: state => state.c3s.user,

          totalTaskCount: state => state.stats.totalTaskCount,
          totalUserCount: state => state.stats.totalUserCount,
          totalSubmissionCount: state => state.stats.totalSubmissionCount
      })
  },
    mounted() {
      console.log('mounted');
        this.$store.dispatch('stats/updateTotalUserAndSubmissionCount');
        this.$store.dispatch('stats/updateTotalTaskCount');
    }
}

</script>

<style lang="scss">

  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';


  .scientifica-teaser {
    position: absolute;
    top: calc( 48px + #{$spacing-2});
    right: 0;
    height: 48px;
  }

  @media only screen and (min-width: $viewport-mobile-large) {

    .scientifica-teaser {
      top: calc( 64px + #{$spacing-2});
      height: 56px;
    }

  }

  @media only screen and (min-width: $viewport-tablet-portrait) {

  }


  @media only screen and (min-width: $viewport-large) {

    .scientifica-teaser {
      top: calc( 80px + #{$spacing-3});
      height: 64px;
    }

  }


  @media only screen and (min-width: $viewport-xlarge) {

    .scientifica-teaser {
      top: calc( 80px + #{$spacing-3});
      height: 72px;
    }

  }


</style>
