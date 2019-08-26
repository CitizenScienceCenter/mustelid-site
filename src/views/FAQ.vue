<i18n>
{

  "de": {

  "page-title": "FAQ",

  "page-heading": "FAQ",

  "faq-1-question": "Was ist wenn ich kein Tier sehe?",
  "faq-1-answer": "Dann klicken Sie auf den Knopf <i>Kein Tier erkennbar</i>. Auch zu wissen, dass auf einem Video kein Tier sichtbar ist, ist eine wichtige Information für uns.",
  "faq-2-question": "Warum gibt es Sprünge in den Videos?",
  "faq-2-answer": "Die Fotofallen nehmen Videos von 10 Sekunden Länge auf. Dannach muss die Fotofalle das Video abspeichern und kann daher für einen kurzen Moment kein Video aufzeichnen. Videoaufnahmen welche rasch aufeinander folgen haben wir für die Bestimmung zusammengefasst. Wieviele Sequenzen eine Aufgabe umfasst, sehen Sie oben links. Jedes Kästchen zeigt den Beginn einer neuen Sequenz.",
  "faq-3-question": "Warum ist teilweise zu Beginn des Videos kein Tier sichtbar?",
  "faq-3-answer": "Fotofallen benötigen etwas Zeit, bis sie mit der Aufnahme eines Videos beginnen. Es kann daher sein, dass ein Tier die Aufnahme eines Videos auslöste und danach sofort die Kiste verlassen hat oder auf die Kamera zugelaufen ist und daher zu Beginn nicht mehr im Sichtfeld ist. Oft kommen die Tiere später ins Bild. Es lohnt sich, das ganze Video anzuschauen.",
  "faq-4-question": "Werden die Tiere in die Kiste gelockt?",
  "faq-4-answer": "Nein, in der Kiste ist kein Köder oder Futter versteckt. Für viele Tiere sind Öffnungen alleine schon so attraktiv, dass sie auf der Suche nach Futter oder einem Versteck diese selber erkunden."

  },
  "en": {

  "page-title": "FAQ",

  "page-heading": "FAQ",

  "faq-1-question": "What if I don't see an animal?",
  "faq-1-answer": "Then click on the button <i>No animal recognizable</i>. It is also important for us to know if there is no animal visible in a video.",
  "faq-2-question": "Why are there jumps in the videos?",
  "faq-2-answer": "The camera traps record 10-second long videos. After that, the camera trap has to save the video and therefore cannot record a video for a short moment. We have combined video recordings which follow quickly one after the other. How many sequences a task contains can be seen in the upper left corner. Each box shows the beginning of a new sequence.",
  "faq-3-question": "Why is there sometimes no animal visible at the beginning of the video?",
  "faq-3-answer": "Camera traps have a delay after triggering before they start to record a video. Therefore, it is possible that an animal triggered the recording of a video and then immediately left the box or ran towards the camera and is therefore no longer in the field of vision at the beginning. Often the animal enters the picture later. It is worthwhile to watch the whole video.",
  "faq-4-question": "Are the animals lured into the box?",
  "faq-4-answer": "No, there's no bait or food hidden in the box. For many animals, openings are so attractive that they explore them themselves in search of food or a hiding place."

  }

}
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-tablet-portrait-7 col-large-6 scroll-effect">

            <h2 class="heading centered">{{ $t('page-heading') }}</h2>
            <expandable>
              <template slot="header">{{ $t('faq-1-question') }}</template>
              <template slot="content">
                <p v-html="$t('faq-1-answer')"></p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-2-question') }}</template>
              <template slot="content">
                <p v-html="$t('faq-2-answer')"></p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-3-question') }}</template>
              <template slot="content">
                <p v-html="$t('faq-3-answer')"></p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-4-question') }}</template>
              <template slot="content">
                <p v-html="$t('faq-4-answer')"></p>
              </template>
            </expandable>

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
import Expandable from "../components/shared/Expandable";


export default {
  name: 'FAQ',
  components: {
      Expandable,
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
