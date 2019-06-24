<i18n>
{

  "en": {

  "page-title": "Identification"

  },

  "de": {

  "page-title": "Identifikation"

  }

}
</i18n>

<template>
  <div>

    <app-content-section class="content-section-flat mustelid-identification" color="light-greyish">

      <div class="left-section">

        <app-content-section class="content-section-condensed" color="transparent">
          <div class="content-wrapper">
            <div class="row">
              <div class="col">

                <h2 class="heading small">Welches Tier ist zu sehen?</h2>

                <video autoplay loop playsinline>
                  <source type="video/mp4" src="/videos/09170086.mp4">
                </video>

              </div>
            </div>
          </div>
        </app-content-section>

      </div>

      <div class="right-section">

        <app-content-section class="content-section-condensed" color="transparent">
          <div class="content-wrapper">
            <div class="row">
              <div class="col">

                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>
                <div class="bubu">bubu</div>

              </div>
            </div>
          </div>
        </app-content-section>

      </div>

    </app-content-section>


    <app-content-section class="content-section-flat action-bar">
      <div class="content-wrapper">
        <div class="row">

          <div class="col">
            action bar
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/graphic-intro.png" />
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">Mit Kamerafallen auf der Suche nach Wieseln</h2>
              <p class="">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/about" class="button button-secondary">Mehr erfahren</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping row-reverse-large">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/graphic-hermelin.jpg" style="border-radius:50%"/>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">Wiesel-Population in der Schweiz</h2>
              <p class="">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/sources" class="button button-secondary">Mehr erfahren</router-link>
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

import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import ContentSection from "@/components/shared/ContentSection";


export default {
  name: 'Home',
  components: {
      ContentSection,
      SectionNewsletterSignup,
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
  metaInfo: function() {
      return {
          title: this.$t('page-title'),
          meta: [
              {
                  property: 'og:title',
                  content: this.$t('page-title'),
                  template: '%s | '+this.$t('site-title')
              }
          ]
      }
  },
  data() {
      return {

      }
  },
  computed: {
      /*
      ...mapState({
          user: state => state.c3s.user
      })
      */
    },
  mounted() {

  },
  methods: {

  }
}

</script>

<style lang="scss">

  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';


  video::-internal-media-controls-overlay-cast-button {
    display: none;
  }


  .mustelid-identification {

    .left-section {
      video {
        display: block;
        width: 100%;
        border-radius: $border-radius;
      }
    }

    .right-section {
      .bubu {
        width: 100%;
        height: 48px;
        background-color: $color-primary;
        color: $color-primary;
        margin-bottom: $spacing-2;
        border-radius: $border-radius;
      }
    }

  }

  @media only screen and (min-width: $viewport-tablet-portrait) {



  }


  @media only screen and (min-width: $viewport-large) {

    .mustelid-identification {

      height: calc( 100vh - 160px );
      overflow: hidden;

      .left-section {
        .content-wrapper {
          padding-right: 0;
        }
        width: 50%;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
      }
      .right-section {
        .content-wrapper {
          padding-left: 0;
        }
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        overflow-y: auto;
      }

    }
    .action-bar {
      background: white;
      height: 80px;
    }

  }


</style>
