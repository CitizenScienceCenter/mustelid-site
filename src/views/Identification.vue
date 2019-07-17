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

      <div class="video-section">

        <app-content-section class="content-section-condensed" color="transparent">
          <div class="content-wrapper">

            <div class="row">
              <div class="col">

                <h2 class="heading small">Welches Tier ist zu sehen?</h2>

                <!--
                <video autoplay loop playsinline>
                  <source type="video/mp4" src="/videos/09170086.mp4">
                </video>
                -->
                <div class="video-player">

                  <video :autoplay="index === 0" playsinline muted v-for="(video,index) in task.videos" :key="'video'+index" :class="{ activeVideo: index === activeVideo }" :ref="'video'+index" @ended="onVideoEnd(index)" class="reduced-bottom-margin">
                    <source type="video/mp4" :src="'/videos/'+video">
                  </video>

                  <div class="thumbnails">
                    <ul>
                      <!--
                      <li v-for="(video,index) in task.videos" :key="'thumbnail'+index" :class="{active: index === activeVideo}" @click="startVideo(index)">
                        <img src="/videos/thumbnails/thumbnail.jpg" />
                      </li>
                      -->
                    </ul>
                  </div>

                  <button class="button button-secondary button-secondary-naked button-icon button-icon-only fullscreen-button" @click="fullscreen()" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32,180V56A23.94,23.94,0,0,1,56,32H180a12,12,0,0,1,12,12V84a12,12,0,0,1-12,12H96v84a12,12,0,0,1-12,12H44A12,12,0,0,1,32,180ZM320,44V84a12,12,0,0,0,12,12h84v84a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V56a23.94,23.94,0,0,0-24-24H332A12,12,0,0,0,320,44ZM468,320H428a12,12,0,0,0-12,12v84H332a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H456a23.94,23.94,0,0,0,24-24V332A12,12,0,0,0,468,320ZM192,468V428a12,12,0,0,0-12-12H96V332a12,12,0,0,0-12-12H44a12,12,0,0,0-12,12V456a23.94,23.94,0,0,0,24,24H180A12,12,0,0,0,192,468Z"/></svg>
                  </button>

                </div>

              </div>
            </div>

          </div>
        </app-content-section>

      </div>

      <div class="answer-section" id="answer-section" ref="answerSection">

        <app-content-section class="content-section-condensed" color="transparent">
          <div class="content-wrapper">

            <div class="row">
              <div class="col">

                <ul class="animal-categories margin-bottom">
                  <li class="category-item" v-for="(category,index) in animals" :key="index" :class="{ open: openCategory === index, animal: !category.animals }" :id="'category-item-'+index">

                    <div v-if="index < animals.length-1" class="category" @click="clickCategory(index)">
                      <div class="images">
                        <div class="image" v-for="(image,index) in category.images" :style="{ backgroundImage: 'url(/img/animals/'+image+')' }" :key="index"></div>
                      </div>
                      <div class="title">
                        <svg v-if="category.animals" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.26,273l-136,136a23.9,23.9,0,0,1-33.9,0l-22.6-22.6a23.9,23.9,0,0,1,0-33.9l96.4-96.4-96.4-96.4a23.9,23.9,0,0,1,0-33.9l22.5-22.8a23.9,23.9,0,0,1,33.9,0l136,136A23.93,23.93,0,0,1,352.26,273Z"/></svg>
                        {{ category.name[language] }}
                      </div>
                    </div>

                    <div v-else class="category">
                      <div class="images">
                        <div class="image" v-for="(image,index) in category.images" :style="{ backgroundImage: 'url(/img/animals/'+image+')' }" :key="index"></div>
                      </div>
                      <div class="title">
                        <svg v-if="category.animals" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.26,273l-136,136a23.9,23.9,0,0,1-33.9,0l-22.6-22.6a23.9,23.9,0,0,1,0-33.9l96.4-96.4-96.4-96.4a23.9,23.9,0,0,1,0-33.9l22.5-22.8a23.9,23.9,0,0,1,33.9,0l136,136A23.93,23.93,0,0,1,352.26,273Z"/></svg>
                        {{ category.name[language] }}
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

          <div class="col col-tablet-portrait-6">
            Aufnahme <b>1</b> von 10000 (Bestehend aus {{ task.videos.length }} Sequenzen)
          </div>
          <div class="col col-tablet-portrait-6">
            <div class="button-group right-aligned">
              <button class="button button-primary">Weiter</button>
            </div>
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
          openCategory: null,

          task: {
              "videos": [
                  "09170086.mp4",
                  "09170086_2.mp4",
                  "09170086_3.mp4",
                  "09170086_4.mp4",
                  "09170086.mp4",
                  "09170086_2.mp4",
                  "09170086_3.mp4",
                  "09170086_4.mp4",
                  "09170086_2.mp4",
                  "09170086_3.mp4",
                  "09170086_4.mp4"
              ]
          },
          activeVideo: 0,

          taskId: undefined,
          hasSubmissionAlready: false
      }
  },
  computed: {
      ...mapState({
          language: state => state.settings.language,

          currentUser: state => state.c3s.user.currentUser,
          activityId: state => state.consts.identificationActivity,

          tasks: state => state.c3s.task.tasks,
          taskMedia: state => state.c3s.task.media,
      })
    },
  mounted() {
      var self = this;

      window.addEventListener('resize', function() {
          self.resize();
      } );

      this.resize();


      /*
      this.$store.dispatch("c3s/activity/getActivity", [this.activityId, false]).then(activity => {
          //console.log('activity loaded');

          if( this.$route.params.id ) {
              if( this.$route.params.id.length !== 36 ) {
                  console.log('invalid id');
                  delete this.$route.params.id;
                  this.$router.replace('/challenge');
                  this.id = null;
                  //this.loadTask();
              }
              else {
                  this.id = this.$route.params.id;
                  //this.loadTask();
              }
          }
          else {
              this.id = null;
              //this.loadTask();
          }
      });
      */
      this.loadTask();
  },
  methods: {
    loadTask() {

        let taskQuery;
        if( !this.taskId ) {

            taskQuery = {
                'select': {
                    'fields': [
                        '*'
                    ],
                    'tables': [
                        'tasks'
                    ],
                    'orderBy': {
                        'random()': ''
                    }
                },
                'where': [
                    {
                        "field": 'tasks.activity_id',
                        'op': 'e',
                        'val': this.activityId
                    },
                    {
                        'field': 'tasks.id',
                        'op': 'ni',
                        'val': "(SELECT task_id FROM submissions WHERE submissions.task_id = tasks.id AND user_id = '" + this.currentUser.id + "')",
                        'join': 'a',
                        'type': 'sql'
                    }/*,
                    {
                        'field': 'tasks.info ->> \'difficulty\'',
                        'op': 'e',
                        'val': this.difficulty.toString(),
                        'join': 'a'
                    }*/
                ]
            };

        }
        else {
            taskQuery = {
                'select': {
                    'fields': [
                        '*'
                    ],
                    'tables': [
                        'tasks'
                    ]
                },
                'where': [
                    {
                        "field": 'id',
                        'op': 'e',
                        'val': this.taskId
                    }
                ]
            };

        }


        this.$store.dispatch('c3s/task/getTasks', [taskQuery, 1]).then(tasks => {

            //console.log('responded tasks');

            this.hasSubmissionAlready = false;

            if( this.id ) {

                let query = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'submissions'
                        ]
                    },
                    'where': [
                        {
                            'field': 'task_id',
                            'op': 'e',
                            'val': this.id
                        },
                        {
                            'field': 'user_id',
                            'op': 'e',
                            'val': this.currentUser.id,
                            'join': 'a'
                        }
                    ]
                };

                this.$store.dispatch('c3s/submission/getSubmissions', [query,0] ).then(submissions => {


                    if( submissions.body.length > 0 ) {
                        this.hasSubmissionAlready = true;
                    }
                    else {
                        this.hasSubmissionAlready = false;
                    }

                    this.id = false;

                });

            }

            if ( this.tasks[0] ) {

                console.log( 'task loaded');
                //console.log('load media');

                const mediaQuery = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'media'
                        ]
                    },
                    'where': [
                        {
                            "field": "source_id",
                            'op': 'e',
                            'val': this.tasks[0].id
                        }
                    ]
                };


                this.$store.dispatch('c3s/media/getMedia', [mediaQuery, 'c3s/task/SET_MEDIA', 1]).then(media => {

                    //console.log('media loaded');
                    this.evaluation = null;
                    this.value = null;
                    this.loadTime = new Date();
                    this.loading = false;
                    this.showNext = false;

                });

            }

            else {

                console.log('no more tasks');

                if ( this.difficulty === '0') {
                    this.completedDifficulties.push('0');

                    if (this.completedDifficulties.indexOf('1') === -1) {
                        this.difficulty = '1';
                    }
                    else {
                        this.complete = true;
                    }
                }
                else if ( this.difficulty === '1') {
                    this.completedDifficulties.push('1');

                    if (this.completedDifficulties.indexOf('0') === -1) {
                        this.difficulty = '0';
                    }
                    else {
                        this.complete = true;
                    }
                }


            }


        });

    },
    clickCategory( index ) {

        let closeFirst = false;

        if( this.openCategory !== index ) {
            if( this.openCategory !== null ) {
                closeFirst = true;
            }
            this.openCategory = index;
        }
        else {
            // close accordion
            this.openCategory = null;
        }
        this.resize();

        if( closeFirst ) {
            let self = this;
            setTimeout( function() {
                self.$scrollTo('#category-item-'+index, 600, {
                    container: '#answer-section',
                    offset: -48
                });
            }, 300)
        }
        else {
            this.$scrollTo('#category-item-'+index, 600, {
                container: '#answer-section',
                offset: -48
            });
        }
    },
    resize() {
        for( var i=0; i< this.animals.length; i++ ) {
            if( this.openCategory === i ) {
                this.$refs['animalListWrapper'+i][0].style.height = this.$refs['animalList'+this.openCategory][0].offsetHeight +'px';
            }
            else {
                this.$refs['animalListWrapper'+i][0].style.height = 0+'px';
            }
        }
    },
    onVideoEnd(index) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }

        this.$refs['video'+index][0].pause();
        this.$refs['video'+index][0].currentTime = 0;

        if( this.activeVideo < this.task.videos.length-1 ) {
            this.activeVideo++;
        }
        else {
            this.activeVideo = 0;
        }

        this.$refs['video'+this.activeVideo][0].currentTime = 0;
        this.$refs['video'+this.activeVideo][0].play();
    },
    startVideo(index) {
        this.$refs['video'+this.activeVideo][0].pause();
        this.$refs['video'+this.activeVideo][0].currentTime = 0;
        this.activeVideo = index;
        this.$refs['video'+index][0].currentTime = 0;
        this.$refs['video'+index][0].play();
    },
    fullscreen(index) {
        this.$refs['video'+this.activeVideo][0].requestFullscreen();
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

    .video-section {

      .video-player {
        position: relative;

        &:after {
          content: "";
          display: block;
          padding-bottom: 56.25%;
        }

        video {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          border-radius: $border-radius;
          opacity: 0;
          pointer-events: none;

          box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);
          &.activeVideo {
            /*
            pointer-events: all;
            cursor: pointer;
            */
            opacity: 1;
          }
        }

        .thumbnails {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 48px;

          overflow-x: scroll;
          z-index: 1;

          background: red;

          /*
          &::-webkit-scrollbar {
            height: 4px;
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

          ul {
            position: relative;
            line-height: 0;
            display: block;

            width: 3000px;
            li {
              padding: 0;
              margin: 0;
              &:before {
                display: none;
              }

              display: inline-block;

              cursor: pointer;

              img {
                height: 48px;
                border-radius: $border-radius;
              }

              opacity: 0.5;
              &.active {
                opacity: 1;
              }
            }
          }
        }

        .fullscreen-button {
          position: absolute;
          bottom: $spacing-1;
          right: $spacing-1;
        }
      }

    }

    .answer-section {
      .animal-categories {

        .category-item {

          &:before {
            display: none;
          }
          padding: 0;
          margin: 0;


          margin-bottom: $spacing-3;
          transition: padding $transition-duration-short $transition-timing-function;

          .category {
            cursor: pointer;
            overflow: hidden;
            border-radius: $border-radius;

            box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);
            transition: all $transition-duration-short $transition-timing-function;

            .images {
              display: flex;
              overflow: hidden;

              height: 10vh;

              transition: height $transition-duration-long $transition-timing-function;

              .image {
                flex: 1;
                background-size: cover;
                background-position: 50% 50%;
              }

              position: relative;
              &:after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                height: 100%;
                background: linear-gradient(120deg, $color-black, rgba($color-black, 0) 100% );
                opacity: 0.5;
                transition: all $transition-duration-long $transition-timing-function;
              }
            }

            position: relative;

            .title {
              position: absolute;
              top: 0;
              left: 0;
              color: white;
              font-size: $font-size-normal;
              text-transform: uppercase;
              padding: calc( (40px - 1.5rem) / 2) $spacing-2;
              font-weight: 700;
              text-shadow: 0px 1px 1px rgba($color-black,0.5);

              transition: background-color $transition-duration-short $transition-timing-function;

              padding-left: $spacing-4;
              svg {
                position: absolute;
                top: calc( (40px - #{$font-size-normal}) / 2  - 2px);
                left: $spacing-1;
                width: $font-size-normal;
                height: $font-size-normal;
                fill: white;
                transition: transform $transition-duration-long $transition-timing-function;
              }
            }


            &:active, &:focus {
              .title {
              }
            }
            @media (hover: hover) {
              &:hover {
                .title {

                }
              }
            }

          }

          .animal-list-wrapper {
            overflow: hidden;

            transition: height $transition-duration-long $transition-timing-function;

            .animals {

              padding: 0 $spacing-1;
              transition: padding $transition-duration-long $transition-timing-function;

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
                      padding-bottom: 50%;
                    }
                  }
                  .info {
                    flex: 1;

                    .title {
                      color: $color-primary;
                      padding: calc((40px - 1.5rem) / 2) $spacing-2;
                      font-weight: 700;
                    }
                    .text {
                      width: 100%;
                      padding: 0 $spacing-2 $spacing-2 $spacing-1;

                      li {
                        padding-left: $spacing-3;
                        margin-bottom: calc( #{$spacing-1} / 2);
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
                        color: $color-primary-shade-20;
                      }
                    }
                  }
                  @media (hover: hover) {
                    &:hover {
                      .info {
                        .title {
                          color: $color-primary-shade-20;
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

              .category {
                margin-bottom: $spacing-2;
                .title {
                  svg {
                    transform: rotate(90deg);
                  }
                }
                .images {
                  height: 40px;
                  &:after {
                    opacity: 1;
                    width: 100%;
                  }
                }
              }
              .animal-list-wrapper {
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

    .content-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
      .row {
        width: 100%;
      }
    }
  }


  @media only screen and (min-width: $viewport-tablet-portrait) {


    .mustelid-identification {

      .video-section {
        video {
          display: block;
          width: 100%;
          border-radius: $border-radius;
        }
      }

      .answer-section {
        .animal-categories {
          .category-item {
            .category {
              .title {
                padding: calc((48px - 1.5rem) / 2) $spacing-2;
                padding-left: $spacing-4;
                svg {
                  top: calc( (48px - #{$font-size-normal}) / 2  - 2px);
                }
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

            &.open {

              &:not(.animal) {


                .category {
                  .title {

                  }
                  .images {
                    height: 48px;
                  }
                }
                .animal-list-wrapper {
                  .animals {
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


      .video-section {
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
      .answer-section {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        max-width: $grid-max-width/2;
        overflow-y: scroll;

        .content-section {
          .content-wrapper {
            padding-left: 0;
          }
        }

      }


    }
    .action-bar {
    }

  }


</style>
