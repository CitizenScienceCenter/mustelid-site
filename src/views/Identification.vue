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

                <ul class="animal-categories margin-bottom">
                  <li class="category-item" v-for="(category,index) in animals" :key="index" :class="{ open: openCategory === index, animal: !category.animals }">

                    <div class="category" @click="clickCategory(index)">
                      <div class="title">
                        {{ category.name[language] }}
                      </div>
                      <div class="images">
                        <div class="image" v-for="(image,index) in category.images" :style="{ backgroundImage: 'url(/img/animals/'+image+')' }" :key="index"></div>
                      </div>
                    </div>

                    <div class="animal-list-wrapper" :ref="'animalListWrapper'+index">
                      <ul class="animals" :ref="'animalList'+index">
                        <li class="animal-item" v-for="(animal,index) in category.animals" :key="index">
                          <div class="animal">
                            <div class="image" :style="{ 'background-image' : 'url(/img/animals/'+animal.image+')' }"></div>
                            <div class="info">
                              <div class="title">
                                {{ animal.name[language] }}
                              </div>
                              <div class="text" v-html="animal.text[language]"></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>


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
      var self = this;
      window.addEventListener('resize', function() {
          self.resize();
      } );

      this.resize();
  },
  methods: {
    clickCategory( index ) {
        if( this.openCategory !== index ) {
            this.openCategory = index;
        }
        else {
            this.openCategory = null;
        }
        this.resize();
    },
    resize() {
        console.log( 'resize');
        for( var i=0; i< this.animals.length; i++ ) {
            if( this.openCategory === i ) {
                console.log( this.$refs['animalList'+this.openCategory][0].offsetHeight );
                this.$refs['animalListWrapper'+i][0].style.height = this.$refs['animalList'+this.openCategory][0].offsetHeight +'px';
                console.log( this.$refs['animalListWrapper'+i][0].style.height );
            }
            else {
                this.$refs['animalListWrapper'+i][0].style.height = 0+'px';
            }
        }
    }
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

        .category-item {

          &:before {
            display: none;
          }
          padding: 0;
          margin: 0;


          margin-bottom: $spacing-2;
          transition: margin $transition-duration-short $transition-timing-function;

          .category {
            cursor: pointer;
            overflow: hidden;
            border-radius: $border-radius;

            box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);
            transition: margin-bottom $transition-duration-short $transition-timing-function;

            .title {
              background: $color-primary;
              color: white;
              padding: calc( (40px - 1.5rem) / 2) $spacing-2;
              font-weight: 700;

              transition: background-color $transition-duration-short $transition-timing-function;
            }


            &:active, &:focus {
              .title {
                background-color: $color-primary-shade-20;
              }
            }
            @media (hover: hover) {
              &:hover {
                .title {
                  background-color: $color-primary-shade-20;
                }
              }
            }


            .images {
              display: flex;
              overflow: hidden;

              height: 128px;

              transition: height $transition-duration-long $transition-timing-function;
              transition-delay: $transition-delay-1;

              .image {
                height: 128px;
                flex: 1;
                background-size: cover;
                background-position: 50% 50%;
              }
            }
          }

          .animal-list-wrapper {
            overflow: hidden;

            transition: height $transition-duration-long $transition-timing-function;

            .animals {

              .animal-item {

                &:before {
                  display: none;
                }
                padding: 0;
                margin: 0;

                .animal {
                  display: flex;

                  margin-bottom: $spacing-2;
                  border-radius: $border-radius;
                  background: white;
                  cursor: pointer;
                  overflow: hidden;

                  box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);

                  .image {
                    flex: 0 0 33.333%;
                    background-size: cover;
                    background-position: 50% 50%;

                    &:after {
                      content: '';
                      display: block;
                      padding-bottom: 75%;
                    }
                  }
                  .info {
                    flex: 1;
                    .title {
                      color: white;
                      padding: calc((40px - 1.5rem) / 2) $spacing-2;
                      background: $color-primary;
                      font-weight: 700;

                      transition: background-color $transition-duration-short $transition-timing-function;
                    }
                    .text {
                      width: 100%;
                      padding: $spacing-2;
                      padding-left: $spacing-1;

                      li {
                        padding-left: $spacing-3;
                        margin-bottom: $spacing-1;
                        font-size: $font-size-small;
                        &:before {
                          width: 0.3rem;
                          height: 0.3rem;
                          top: 0.5rem;
                          left: 0.5rem;
                          transform: translateY(-2px);
                        }
                      }
                    }
                  }

                  &:active, &:focus {
                    .info {
                      .title {
                        background-color: $color-primary-shade-20;
                      }
                    }
                  }
                  @media (hover: hover) {
                    &:hover {
                      .info {
                        .title {
                          background-color: $color-primary-shade-20;
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          &.open {

            margin-bottom: $spacing-4;

            &:not(.animal) {

              &:not(:first-child) {
                margin-top: $spacing-4;
              }

              .category {
                margin-bottom: $spacing-2;
                .title {
                  background-color: $color-primary-shade-20;
                }
                .images {
                  transition-delay: 0s;
                  height: 0;
                }
              }
              .animal-list-wrapper {
                transition-delay: $transition-delay-1;
                .animals {
                }
              }
            }
          }

        }

      }
    }

  }


  .action-bar {
    background: white;
    height: 80px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;

    box-shadow: 0px -4px 8px +4px rgba($color-black, 0.2);
  }


  @media only screen and (min-width: $viewport-tablet-portrait) {


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
          .category-item {
            .category {
              .title {
                padding: calc((48px - 1.5rem) / 2) $spacing-2;
              }
            }

            .animal-list-wrapper {
              .animals {
                .animal-item {
                  .animal {
                    .info {
                      .title {
                        padding: calc((48px - 1.5rem) / 2) $spacing-2;
                      }
                    }
                  }
                }
              }
            }

          }
        }
      }
    }


  }


  @media only screen and (min-width: $viewport-large) {

    .mustelid-identification {

      height: calc( 100vh - 160px );
      //max-height: 900px;
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
    }

  }


</style>
