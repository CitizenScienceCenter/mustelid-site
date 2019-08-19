<i18n>
{

  "de": {

  "page-title": "Scientifica 2019",

  "page-heading": "Scientifica 2019",

  "paragraph-1-1": "Wiesel sind Fleischfresser und auf ausreichend Futter angewiesen. Ihre Hauptnahrung sind Wühlmäuse, die vor allem auf Wiesen, Weiden und Brachen leben. Diese Lebensräume werden zunehmend intensiver genutzt, wodurch die Wiesel ihre wichtigsten Jagdgebiete verlieren. Zudem fehlen ihnen in den grossen Feldern oft die Strukturen, um sich vor ihren Feinden, wie zum Beispiel Greifvögeln, zu schützen. Dies führte in vielen Gebieten der Schweiz zu einem merklichen Rückgang der Wiesel.",
  "paragraph-1-2": "In diesem Projekt wollen wir herausfinden, wo Wiesel im Schweizer Mittelland vorkommen. Ausserdem interessiert uns, ob die Artenzusammensetzung der Beutetiere sich zwischen den Standorten unterscheidet und ob dies einen Einfluss auf das Vorkommen der Wiesel hat."

  },
  "en": {

  "page-title": "Scientifica 2019",

  "page-heading": "Scientifica 2019",

  "paragraph-1-1": "Weasels are carnivores and depend on sufficient prey populations to survive. Their main food source are voles, which live mainly on meadows, pastures and fallow land. These habitats are coming under more and more intensive use, resulting in weasels losing their most valuable hunting grounds. In addition, as fields grow ever larger, they often lack the structures they need to protect themselves from their enemies, such as birds of prey. This led to a noticeable decline in weasels in many areas of Switzerland.",
  "paragraph-1-2": "In this project, we want to find out where weasels occur in the Swiss Midlands. We are also interested in whether the species composition of the prey differs between locations and whether this has an influence on the occurrence of weasels."

  }

}
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-7 col-large-after-1 col-wrapping col-large-no-bottom-margin">
              <img src="/img/graphic-hermelin.jpg" style="border-radius: 50%" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-reverse-large">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-after-1 col-wrapping scroll-effect">

            <h2 class="heading centered left-aligned-large">{{ $t('page-heading') }}</h2>

            <p v-html="$t('paragraph-1-1')"></p>
            <p v-html="$t('paragraph-1-2')"></p>

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
  name: 'Scientifica',
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
