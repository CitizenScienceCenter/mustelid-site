<i18n>
{

  "en": {

  "page-title": "Forum",

  "forum-heading": "Forum"

  },

  "de": {

  "page-title": "Forum",

  "forum-heading": "Forum"

  }

}
</i18n>

<template>
  <div>

  <app-content-section>

    <div class="content-wrapper">

      <div class="row row-centered">
        <div class="col col-large-6 scroll-effect">
          <h2 class="heading">{{ $t('forum-heading') }}</h2>

          <comments :sourceId="projectId" withTitles></comments>

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
import Comments from "@/components/shared/Comments";


export default {
  name: 'Home',
  components: {
      Comments,
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
          projectId: state => state.consts.projectId,
          user: state => state.c3s.user
      })
  }
}

</script>

<style lang="scss">

</style>
