<i18n>
{

  "en": {

  "page-title": "Alles Identifiziert"


  },

  "de": {

  "page-title": "All Identified"

  }

}
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <!--
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-7 col-large-after-1 col-wrapping col-large-no-bottom-margin">
              <img src="/img/graphic-intro.png" />
            </div>
          </div>
        </div>
      </div>
      -->
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-tablet-portrait-7 col-large-6 scroll-effect">

            <h2 class="heading centered left-aligned-large" id="projects">Alles erledigt</h2>
            <p>
              Du bist super!
            </p>

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

import ContentSection from '@/components/shared/ContentSection.vue';
import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";


export default {
  name: 'Home',
  components: {
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
  computed: {
      ...mapState({
          user: state => state.c3s.user
      })
  }
}

</script>

<style lang="scss">

</style>
