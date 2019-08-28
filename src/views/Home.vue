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
  "mustelids-button": "Mehr erfahren",

  "swild-text": "SWILD ist eine unabhängige Forschungs- und Beratungsgemeinschaft von Biologinnen und Biologen. Organisiert als non-profit Verein, arbeiten wir seit 1989 in den Bereichen Stadt- und Siedlungsökologie, Wildtierforschung, Naturschutz und Kommunikation."

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
  "mustelids-button": "Learn more",

  "swild-text": "SWILD ist eine unabhängige Forschungs- und Beratungsgemeinschaft von Biologinnen und Biologen. Organisiert als non-profit Verein, arbeiten wir seit 1989 in den Bereichen Stadt- und Siedlungsökologie, Wildtierforschung, Naturschutz und Kommunikation."


  }

  }
</i18n>

<template>
  <div>

    <app-cover imageUrl="/img/cover.jpg" goal="15" logoUrl="/img/logo-swild-white.png">
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


    <section-stats color="greyish" :submissionCount="totalSubmissionCount" :userCount="totalUserCount" :taskCount="totalTaskCount" ></section-stats>



    <div class="scientifica-teaser-wrapper" :class="{show: showTeaser}">
      <router-link to="/scientifica" class="scientifica-teaser">
        <img src="/img/scientifica-teaser.png" />
      </router-link>
    </div>

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


    <section-feedback color="light-greyish" email="wiesel@citizenscience.ch"></section-feedback>

    <!--
    <app-content-section color="greyish" >
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping row-reverse-large">
          <div class="col col-4 col-large-2 col-large-after-3 col-wrapping scroll-effect">
            <div class="extra-padding-large-h">
              <img src="/img/logo-swild.png" />
            </div>
          </div>
          <div class="col col-10 col-large-4 col-large-before-3 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="subheading reduced-bottom-margin">Eine Zusammenarbeit mit SWILD</h2>
              <p v-html="$t('swild-text')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <button class="button button-secondary button-icon button-normal-case" @click="openInNewTab('http://swild.ch')" >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"></path></svg>
                  swild.ch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>
    -->

    <section-s-d-g color="greyish" goal="15">
      This project supports Goal 15: Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.
    </section-s-d-g>


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
        data() {
            return {
                showTeaser: false
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

            this.showTeaser = true;
        },
        methods: {
            openInNewTab: function(url) {
                var win = window.open(url, '_blank');
                win.focus();
            }
        }
    }
</script>

<style lang="scss">

  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';


  .scientifica-teaser-wrapper {

    position: absolute;
    top: calc( 48px + #{$spacing-2});
    left: -240px;

    transition: left $transition-duration-super-long $transition-timing-function;
    transition-delay: 600ms;

    line-height: 0;

    .scientifica-teaser {
      display: block;

      img {
        height: 56px;
      }
      transition: opacity $transition-duration-short $transition-timing-function;
      opacity: 0.9;

      &:active, &:focus {
        opacity: 1;
      }
      @media (hover: hover) {
        &:hover {
          opacity: 1;
        }
      }

    }

    &.show {
      left: 0;
    }

  }

  @media only screen and (min-width: $viewport-mobile-large) {

    .scientifica-teaser-wrapper {
      top: calc( 64px + #{$spacing-2});
      .scientifica-teaser {
        img {
          height: 64px;
        }
      }
    }

  }

  @media only screen and (min-width: $viewport-tablet-portrait) {

    .scientifica-teaser-wrapper {
      top: calc( 64px + #{$spacing-3});
      .scientifica-teaser {
        img {
          height: 72px;
        }
      }
    }

  }


  @media only screen and (min-width: $viewport-large) {

    .scientifica-teaser-wrapper {
      top: calc( 80px + #{$spacing-3});
      .scientifica-teaser {
        img {
          height: 80px;
        }
      }
    }

  }


  @media only screen and (min-width: $viewport-xlarge) {

    .scientifica-teaser-wrapper {

      top: calc( 88px + #{$spacing-3});

      .scientifica-teaser {
        img {
          height: 88px;
        }
      }
    }

  }


</style>
