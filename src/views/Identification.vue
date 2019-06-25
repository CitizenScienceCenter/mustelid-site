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

                <ul class="animal-categories">
                  <li v-for="(category,index) in animals" :key="index" :class="{open: openCategory === index }">
                    <div class="category" @click="clickCategory(index)">
                      {{ category.name[language] }}
                      <div class="images">
                        <div class="image" v-for="(image,index) in category.images" :style="{ backgroundImage: 'url(/img/animals/'+image+')' }" :key="index"></div>
                      </div>
                    </div>
                    <ul class="animals">
                      <li v-for="(animal,index) in category.animals" :key="index">
                        <div class="animal">
                          {{ animal.name[language] }}
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>

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


    <!--
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

    -->

  </div>
</template>

<script>

import {mapState} from 'vuex'

import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import ContentSection from "@/components/shared/ContentSection";

import animals from "@/assets/animals.json";

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
          animals: animals,

          openCategory: null
      }
  },
  computed: {
      ...mapState({
          language: state => state.settings.language
      })
    },
  mounted() {

  },
  methods: {
    clickCategory( index ) {
        if( this.openCategory !== index ) {
            this.openCategory = index;
        }
        else {
            this.openCategory = null;
        }
    }
  },
  watch: {

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
      .animal-categories {
        li {
          &:before {
            display: none;
          }
          padding: 0;
          margin: 0;

          .category, .animal {
            background: $color-primary;
            margin-bottom: $spacing-2;
            color: white;
            border-radius: $border-radius;
            cursor: pointer;
            &:active, &:focus {
              background-color: $color-primary-shade-20;
            }
            @media (hover: hover) {
              &:hover {
                background-color: $color-primary-shade-20
              }
            }
          }

          .category {
            .images {
              display: flex;
              .image {
                flex: 1;
                height: 128px;
                background-size: cover;
                background-position: 50% 50%;
              }
            }
          }

          .animals {
            display: none;
            padding: 0 $spacing-1;
          }

          &.open {
            .category {
              background-color: $color-primary-shade-20;
            }
            .animals {
              display: block;
            }
          }

        }
      }
    }

  }

  @media only screen and (min-width: $viewport-tablet-portrait) {



  }


  @media only screen and (min-width: $viewport-large) {

    .mustelid-identification {

      height: calc( 100vh - 160px );
      max-height: 900px;
      overflow: hidden;


      .left-section {
        position: absolute;
        top: 0;
        right: 50%;
        width: 50%;
        height: 100%;
        max-width: $grid-max-width/2;
        overflow: hidden;
        overflow-y: auto;
        .content-wrapper {
          padding-right: 0;
        }
      }
      .right-section {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        max-width: $grid-max-width/2;
        overflow-y: scroll;
        .content-wrapper {
          padding-left: 0;
        }

        /*

        &::-webkit-scrollbar {
          width: 4px;
        }

        &::-webkit-scrollbar-track {
          background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 2px;
        }
        &:hover {
          &::-webkit-scrollbar-thumb {
            background-color: $color-black-tint-90;
          }
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: $color-black-tint-90;
        }
        */
      }


    }
    .action-bar {
      background: white;
      height: 80px;
    }

  }


</style>
