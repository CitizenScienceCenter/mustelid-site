<i18n>
{

  "de": {

  "page-title": "Wiesel in der Schweiz",

  "page-heading": "Wiesel in der Schweiz",

  "paragraph-1-1": "Der Begriff „Wiesel“ umfasst zwei, sehr ähnliche Tierarten – das Hermelin (Mustela erminea) und das Mauswiesel (Mustela nivalis). Gemeinsam mit dem Iltis (Mustela putorius), dem nächsten Verwandten der zwei Wieselarten, bilden sie die Gattung „Mustela“.",
  "paragraph-1-2": "Das Mauswiesel ist das kleinste Raubtier der Welt und deutlich kleiner als das Hermelin und besitzt einen kurzen Schwanz mit einer braunen Schwanzspitze. Das Hermelin hingegen besitzt eine schwarze Schwanzspitze und färbt sich im Winter weiss um.",

  "subheading-1": "So leben Wiesel",
  "paragraph-2-1": "Beide Arten ernähren sich grösstenteils von Wühlmäusen, andern Mäusen, Vögeln, Amphibien und Wirbellosen. Durch ihre typische Körperform – langgestreckter Körper und kurze Beine – sind sie optimal an die Mäusejagd angepasst und folgen ihrer Beute selbst in die engen Gänge. Sie leben einzelgängerisch und sind territorial.",
  "paragraph-2-2": "Aufgrund des ständig schwankenden Beuteangebots schwanken auch die Wieselpopulationsdichten enorm.",
  "paragraph-2-3": "Aufgrund der Vorliebe für Wühlmäuse sind Wiesel gerngesehene Bewohner von Landwirtschaftsflächen. Wiesel brauchen aber nicht nur eine gute Nahrungsgrundlage, sondern auch Verstecksmöglichkeiten wie zum Beispiel Asthaufen, wo sie sich bei Gefahr verstecken können oder wo sie ihre Jungtiere aufziehen. Ausserdem benötigen sie Schutz bei der Ausbreitung, welcher zum Beispiel durch Hecken geboten wird.",

  "subheading-2": "Wie steht es um die Wiesel in der Schweiz?",
  "paragraph-3-1": "Eine Frage die so einfach nicht zu beantworten ist. Leider weiss man nur sehr wenig über die Wieselpopulationen in der Schweiz. Es ist bekannt, dass die zunehmende Zerstückelung der Lebensräume den Wieseln zusetzt. Doch wie es um das Nahrungsangebot dieser flinken Tiere steht ist nach wie vorungeklärt.",
  "paragraph-3-2": "Mit dem Mauswiesel und dem Iltis sind zwei der drei Arten der Gattung Mustela auf der Roten Liste der bedrohten Tierarten der Schweiz als verletzlich aufgeführt.",
  "paragraph-3-3": "Seit vielen Jahren fördert die Stiftung <b>WIN Wieselnetz</b> in der Schweiz Wiesel und koordiniert und begleitet viele lokale Förderprojekte."

  },

  "en": {


  }

}
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-7 col-large-before-1 col-wrapping col-large-no-bottom-margin">
              <img src="/img/graphic-hermelin.jpg" style="border-radius: 50%" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping scroll-effect">

            <h2 class="heading centered left-aligned-large">{{ $t('page-heading') }}</h2>

            <p v-html="$t('paragraph-1-1')"></p>
            <p v-html="$t('paragraph-1-2')"></p>

            <h3 class="subheading">{{ $t('subheading-1') }}</h3>
            <p v-html="$t('paragraph-2-1')"></p>
            <p v-html="$t('paragraph-2-2')"></p>
            <p v-html="$t('paragraph-2-3')"></p>

            <h3 class="subheading">{{ $t('subheading-2') }}</h3>
            <p v-html="$t('paragraph-3-1')"></p>
            <p v-html="$t('paragraph-3-2')"></p>
            <p v-html="$t('paragraph-3-3')"></p>

            <div class="logo-group">
              <a href="http://wieselnetz.ch" target="_blank"><img src="/img/logo-wieselnetz.jpg" class="rounded"/></a>
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

  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';

  .logo-group {
    font-size: 0;
    margin: -$spacing-2;
    a {
      display: inline-block;
      margin: $spacing-2;
      img {
        height: 80px;
      }
    }
  }

  .rounded {
    border-radius: $border-radius;
  }

</style>
