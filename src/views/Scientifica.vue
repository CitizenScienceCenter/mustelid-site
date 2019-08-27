<i18n>
{

  "de": {

  "page-title": "Scientifica 2019: Find the Weasel!",


  "heading-scientifica": "Visit us at Scientifica 2019",
  "list-item-1": "<b>Time: </b>Friday, 30 August 6pm – Sunday, 1 Sep 2019 5pm",
  "list-item-2": "<b>Place: </b>exhibition stand of the Citizen Science Center Zurich near the entry in the big Scientifica tent on Polyterasse",
  "list-item-3": "<b>1st Prize: </b>A Book or free access to event of StadtWildTiere, plus featured in the “Weasel wanted” platform (if wished)",
  "list-item-4": "Additional Extra Prizes at the stand",


  "page-heading": "The Challenge",

  "paragraph-1": "How many animal visitors of the camera traps can you identify during the three days of Scientifica? Look at the video clips on the Identification page and tell us who entered the box.",
  "button-text": "To the Videos",

  "paragraph-2": "You can contribute directly at the stand or from home.",
  "subheading-1": "Taking part from home",
  "paragraph-3": "At the end of the event, the participant with <b>the highest number of answers</b> wins the 1st Prize. <b>Found weasels count extra (10x).</b> We’re taking a look at the quality of the contributions.<br>To win a prize you need to create a citizenscience.ch account first.",
  "subheading-2": "At the Scientifica",
  "paragraph-4": "But that is not your only chance! If you manage to be the <b>first visitor to spot a weasel at our Scientifica stand</b>, you are immediately awarded an Extra Prize.<br>We start counting from zero every 3 hours, so in total up to 5 visitors can win a price on the stand (Fri: 6 - 9 pm / Sat: 1 - 4pm and 4 - 7pm/ Sun: 11am - 2pm and 2 - 5pm)",

  "heading-prize": "First Prize",
  "prize-1": "<b>The Book Marder, Iltis, Nerz und Wiesel</b>",
  "prize-2": "or<br><b>a free admission to an event of StadtWildTiere</b>"

  },
  "en": {

  "page-title": "Scientifica 2019: Find the Weasel!",


  "heading-scientifica": "Visit us at Scientifica 2019",
  "list-item-1": "<b>Time: </b>Friday, 30 August 6pm – Sunday, 1 Sep 2019 5pm",
  "list-item-2": "<b>Place: </b>exhibition stand of the Citizen Science Center Zurich near the entry in the big Scientifica tent on Polyterasse",
  "list-item-3": "<b>1st Prize: </b>A Book or free access to event of StadtWildTiere, plus featured in the “Weasel wanted” platform (if wished)",
  "list-item-4": "Additional Extra Prizes at the stand",


  "page-heading": "The Challenge",

  "paragraph-1": "How many animal visitors of the camera traps can you identify during the three days of Scientifica? Look at the video clips on the Identification page and tell us who entered the box.",
  "button-text": "To the Videos",

  "paragraph-2": "You can contribute directly at the stand or from home.",
  "subheading-1": "Taking part from home",
  "paragraph-3": "At the end of the event, the participant with <b>the highest number of answers</b> wins the 1st Prize. <b>Found weasels count extra (10x).</b> We’re taking a look at the quality of the contributions.<br>To win a prize you need to create a citizenscience.ch account first.",
  "subheading-2": "At the Scientifica",
  "paragraph-4": "But that is not your only chance! If you manage to be the <b>first visitor to spot a weasel at our Scientifica stand</b>, you are immediately awarded an Extra Prize.<br>We start counting from zero every 3 hours, so in total up to 5 visitors can win a price on the stand (Fri: 6 - 9 pm / Sat: 1 - 4pm and 4 - 7pm/ Sun: 11am - 2pm and 2 - 5pm)",

  "heading-prize": "First Prize",
  "prize-1": "<b>The Book Marder, Iltis, Nerz und Wiesel</b>",
  "prize-2": "or<br><b>a free admission to an event of StadtWildTiere</b>"

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
              <img src="/img/scientifica.jpg" style="border-radius: 50%" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-reverse-large">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-after-1 col-wrapping scroll-effect">


            <div class="content-subsection">
              <h2 class="heading centered left-aligned-large">{{ $t('heading-scientifica') }}</h2>
              <ul class="reduced-bottom-margin">
                <li v-html="$t('list-item-1')"></li>
                <li v-html="$t('list-item-2')"></li>
                <li v-html="$t('list-item-3')"></li>
                <li v-html="$t('list-item-4')"></li>
              </ul>
              <div class="button-group centered left-aligned-large">
                <button class="button button-secondary button-icon button-normal-case" @click="openInNewTab('https://www.scientifica.ch/')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  scientifica.ch
                </button>
              </div>
            </div>


            <div class="content-subsection">
                <h2 class="heading centered left-aligned-large">{{ $t('page-heading') }}</h2>

                <p v-html="$t('paragraph-1')" class="reduced-bottom-margin"></p>
                <div class="margin-bottom">
                  <div class="button-group centered left-aligned-large">
                    <router-link tag="button" to="/identification" class="button button-primary">{{ $t('button-text') }}</router-link>
                  </div>
                </div>

                <p v-html="$t('paragraph-2')"></p>
                <h3 class="subheading centered left-aligned-large reduced-bottom-margin">{{ $t('subheading-1') }}</h3>
                <p v-html="$t('paragraph-3')"></p>
                <h3 class="subheading centered left-aligned-large reduced-bottom-margin">{{ $t('subheading-2') }}</h3>
                <p v-html="$t('paragraph-4')"></p>
            </div>

            <div class="content-subsection">
              <h2 class="heading centered left-aligned-large">{{ $t('heading-prize') }}</h2>

              <div class="row row-wrapping">
                <div class="col col-large-6 col-wrapping">
                  <p v-html="$t('prize-1')" class="reduced-bottom-margin"></p>
                  <a href="https://www.haupt.ch/Verlag/Buecher/Natur/Tiere/Marder-Iltis-Nerz-und-Wiesel.html" target="_blank">
                    <img src="/img/prize.jpg" style="box-shadow: 0px 0px 24px -16px rgba(0,0,0, 0.5);" />
                  </a>
                </div>
                <div class="col col-large-6 col-wrapping">
                  <p v-html="$t('prize-2')" class="reduced-bottom-margin"></p>
                  <a href="http://swild.ch" target="_blank">
                    <img src="/img/logo-swild.png" style="width: 33.333%" />
                  </a>
                </div>
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


</style>
