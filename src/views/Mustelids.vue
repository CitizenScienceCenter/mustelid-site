<i18n>
{

  "de": {

  "page-title": "Wiesel in der Schweiz",

  "page-heading": "Wiesel in der Schweiz",

  "paragraph-1-1": "Der Begriff „Wiesel“ umfasst zwei sehr ähnliche Tierarten – das Hermelin (Mustela erminea) und das Mauswiesel (Mustela nivalis). Gemeinsam mit dem Iltis (Mustela putorius), dem nächsten Verwandten der zwei Wieselarten, bilden sie die Gattung „Mustela“.",
  "paragraph-1-2": "Das Mauswiesel ist das kleinste Raubtier der Welt. Es ist deutlich kleiner als das Hermelin und besitzt einen kurzen Schwanz mit einer braunen Schwanzspitze. Das Hermelin hingegen besitzt eine schwarze Schwanzspitze und färbt sich im Winter weiss um.",

  "subheading-1": "So leben Wiesel",
  "paragraph-2-1": "Beide Arten ernähren sich grösstenteils von Wühlmäusen, anderen Mäusen, Vögeln, Amphibien und Wirbellosen. Durch ihre typische Körperform – langgestreckter Körper und kurze Beine – sind sie optimal an die Mäusejagd angepasst und folgen ihrer Beute selbst in die engsten Gänge. Sie leben einzelgängerisch und verteidigen ihr Revier gegen Konkurrenten.",
  "paragraph-2-2": "Aufgrund des ständig schwankenden Beuteangebots schwankt auch die Dichte der Wieselpopulation enorm.",
  "paragraph-2-3": "Wegen ihrer Vorliebe für Wühlmäuse sind Wiesel gern gesehene Bewohner von Landwirtschaftsflächen. Wiesel brauchen aber nicht nur eine gute Nahrungsgrundlage, sondern auch Verstecksmöglichkeiten, wie zum Beispiel Asthaufen, wo sie sich bei Gefahr verkriechen können oder wo sie ihre Jungtiere aufziehen. Ausserdem benötigen sie Verbindungsstrukturen, denen sie folgen können und Schutz vor Beutegreifern bei der Ausbreitung. Hecken können beispielsweise solche Strukturen bieten, da sich die Wiesel daran orientieren und im Falle von Gefahr darin verstecken können.",

  "subheading-2": "Wie steht es um die Wiesel in der Schweiz?",
  "paragraph-3-1": "Eine Frage, die so einfach nicht zu beantworten ist. Leider weiss man nur sehr wenig über die Wieselpopulationen in der Schweiz. Es ist bekannt, dass die zunehmende Zerstückelung der Lebensräume den Wieseln zusetzt. Doch wie es um das Nahrungsangebot dieser flinken Tiere steht, ist nach wie vor ungeklärt.",
  "paragraph-3-2": "Mit dem Mauswiesel und dem Iltis sind zwei der drei Arten der Gattung Mustela auf der Roten Liste der bedrohten Tierarten der Schweiz als gefährdet aufgeführt. Dies heisst, dass ein hohes Risiko besteht, dass diese Arten in unmittelbarer Zukunft in der Natur aussterben könnten.",
  "paragraph-3-3": "Seit vielen Jahren fördert die Stiftung <a href='http://wieselnetz.ch' target='_blank'><b>WIN Wieselnetz</b></a> in der Schweiz Wiesel und koordiniert und begleitet viele lokale Förderprojekte."

  },

  "en": {

  "page-title": "Weasels in Switzerland",

  "page-heading": "Weasels in Switzerland",

  "paragraph-1-1": "The term „weasel“ includes two very similar animal species - the stoat (Mustela erminea) and the least weasel (Mustela nivalis). Together with the European polecat (Mustela putorius), the next relative of the two weasel species, they form the genus „Mustela“.",
  "paragraph-1-2": "The least weasel is the smallest predator in the world (and potentially the cutest). It is clearly smaller than the stoat and possesses a short tail with a brown tail-top. The stoat, on the other hand, has a black tail tip and turns white in winter.",

  "subheading-1": "How do Weasels Live?",
  "paragraph-2-1": "Both species feed mainly on voles, other mice, birds, amphibians and invertebrates. Due to their typical body shape - elongated body and short legs - they are optimally adapted to mouse hunting and follow their prey even into the narrowest passages. They live solitary and defend their territory against competitors.",
  "paragraph-2-2": "Due to the constantly fluctuating supply of prey, the density of weasel populations also fluctuates enormously.",
  "paragraph-2-3": "Because of their preference for voles (a pest of many crops), weasels are welcome inhabitants of agricultural areas. However, weasels not only need a solid food source, but also hiding places, such as piles of branches, where they can hide from danger or where they raise their young. Additionally, they also need connecting structures that they can follow and seek protection in against predators during their dispersal. Hedges, for example, can provide such structures, since weasels can orient themselves from them and hide in them in the event of danger. Without these types of structures, even a field filled with voles will not be able to sustain a weasel population for long.",

  "subheading-2": "How are Weasels Doing in Switzerland?",
  "paragraph-3-1": "This question cannot be answered easily. Unfortunately, very little is known about the weasel populations in Switzerland. It is well known that the increasing fragmentation of habitats is affecting them, but the state of the food supply of these elusive animals is still unclear.",
  "paragraph-3-2": "With the weasel and the polecat, two of the three species in the genus Mustela are listed as vulnerable on the Red List of Endangered Species in Switzerland. This means that there is a high risk of these species going extinct in nature in the immediate future.",
  "paragraph-3-3": "For many years, the <a href='http://wieselnetz.ch' target='_blank'><b>WIN Wieselnetz</b></a> Foundation has supported weasels in Switzerland and coordinates and supports many local projects."


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
