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
  <div class="mustelid-identification">

    <app-content-section class="content-section-condensed video-section" color="light-greyish">
      <div class="content-wrapper">

        <div class="row">
          <div class="col col-large-6">

            <h2 class="heading">Welches Tier ist zu sehen?</h2>

          </div>
        </div>

        <div class="row">
          <div class="col col-large-6">

            <video autoplay loop playsinline>
              <source type="video/mp4" src="/videos/09170086.mp4">
            </video>

          </div>
        </div>

      </div>
    </app-content-section>


    <app-content-section class="content-section-condensed answer-section">
      <div class="content-wrapper">
        <div class="row">

          <div class="col col-large-6 col-large-before-6">

            answer

          </div>

        </div>
      </div>
    </app-content-section>

    <div class="action-bar">

    </div>

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
    .video-section {
      video {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: $viewport-tablet-portrait) {



  }


  @media only screen and (min-width: $viewport-large) {

    .mustelid-identification {
      position: relative;

      .video-section {

      }
      .answer-section {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
      }
    }

  }


</style>
