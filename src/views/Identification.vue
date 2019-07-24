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

    <app-content-section v-if="uiImagesLoaded" class="content-section-flat mustelid-identification" color="light-greyish">

      <div class="video-section">

        <app-content-section class="content-section-condensed title-section" color="transparent">
          <div class="content-wrapper">

            <div class="row">
              <div class="col">

                <h2 class="heading small scroll-effect">Welches Tier ist zu sehen?</h2>

              </div>
            </div>

          </div>
        </app-content-section>


        <div class="video-player scroll-effect scroll-effect-delayed-1">

          <div class="video-wrapper" v-if="taskMedia" :class="{loading: !videoLoaded}">

            <loader></loader>

            <template v-for="(video,index) in taskMedia">
              <video v-if="index === 0" :key="'video'+index" :ref="'video'+index" playsinline muted :class="{ activeVideo: index === activeVideo }" @timeupdate="onVideoUpdate" @ended="onVideoEnd" @loadeddata="onFirstVideoLoaded">
                <source type="video/mp4" :src="'/videos/'+video.path">
              </video>
              <video v-else :key="'video'+index" :ref="'video'+index" playsinline muted :class="{ activeVideo: index === activeVideo }" @timeupdate="onVideoUpdate" @ended="onVideoEnd">
                <source type="video/mp4" :src="'/videos/'+video.path">
              </video>
            </template>

            <div class="overlay"></div>

            <div class="thumbnails" v-if="taskMedia.length > 1">
              <ul ref="thumbnailList">
                <li v-for="(video,index) in taskMedia" :key="'thumbnail'+index" :class="{active: index === activeVideo}" @click="startVideo(index)">
                  <img :src="'/videos/thumbnails/'+video.info.thumb" />
                </li>
              </ul>
            </div>

            <button class="button button-secondary button-secondary-naked button-secondary-inverted button-icon button-icon-only video-button play-button" @click="play" >
              <svg v-if="playing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176,480H80a48,48,0,0,1-48-48V80A48,48,0,0,1,80,32h96a48,48,0,0,1,48,48V432A48,48,0,0,1,176,480Zm304-48V80a48,48,0,0,0-48-48H336a48,48,0,0,0-48,48V432a48,48,0,0,0,48,48h96A48,48,0,0,0,480,432Z"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M456.41,214.66l-352-208.1C75.81-10.34,32,6.06,32,47.86V464c0,37.5,40.7,60.1,72.4,41.3l352-208c31.4-18.5,31.5-64.1,0-82.6Z"/></svg>
            </button>

            <input type="range" class="seek-bar" ref="seekBar" @change="onSeekBarChange">

            <!--
            <button class="button button-secondary button-secondary-naked button-secondary-inverted button-icon button-icon-only video-button fullscreen-button" @click="fullscreen" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32,180V56A23.94,23.94,0,0,1,56,32H180a12,12,0,0,1,12,12V84a12,12,0,0,1-12,12H96v84a12,12,0,0,1-12,12H44A12,12,0,0,1,32,180ZM320,44V84a12,12,0,0,0,12,12h84v84a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V56a23.94,23.94,0,0,0-24-24H332A12,12,0,0,0,320,44ZM468,320H428a12,12,0,0,0-12,12v84H332a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H456a23.94,23.94,0,0,0,24-24V332A12,12,0,0,0,468,320ZM192,468V428a12,12,0,0,0-12-12H96V332a12,12,0,0,0-12-12H44a12,12,0,0,0-12,12V456a23.94,23.94,0,0,0,24,24H180A12,12,0,0,0,192,468Z"/></svg>
            </button>
            -->

          </div>

          <div v-else style="background: red;">michi</div>

        </div>

      </div>

      <div class="answer-section" id="answer-section" ref="answerSection">

        <app-content-section class="content-section-condensed scroll-effect scroll-effect-delayed-2" color="transparent">
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

                    <div class="animal-list-wrapper" :ref="'animalListWrapper'+index" style="height: 0px;">
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

    <div v-else>
      <app-content-section class="content-section-flat mustelid-identification" color="light-greyish">
        <Loader></Loader>
      </app-content-section>
    </div>


    <app-content-section class="content-section-flat action-bar">
      <div class="content-wrapper">
        <div class="row">

          <div class="col col-tablet-portrait-6">
            Aufnahme <b>1</b> von 10000
          </div>
          <div class="col col-tablet-portrait-6">
            <div class="button-group right-aligned">
              <button class="button button-primary" :disabled="!videoLoaded" @click="next">Bubu</button>
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
import Loader from "@/components/shared/Loader";

export default {
  name: 'Home',
  components: {
      Loader,
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

          noOfUiImages: 0,
          noOfUiImagesLoaded: 0,
          uiImagesLoaded: false,
          videoLoaded: false,

          playing: true,

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
          self.resizeThumbnailList();
          self.resizeAnimalList();
      } );


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

      this.loadUiImages();


      // load task with or without id
      if( this.$route.params.id ) {
          if( this.$route.params.id.length !== 36 ) {
              //console.log('invalid id');
              delete this.$route.params.id;
              this.$router.replace('/identification');
              this.taskId = null;
              this.loadTask();
          }
          else {
              //console.log('load task from id');
              this.taskId = this.$route.params.id;
              this.loadTask();
          }
      }
      else {
          this.taskId = null;
          //console.log('load without id');
          this.loadTask();
      }
  },
  methods: {
      loadUiImages() {
          this.noOfUiImages = 0;
          this.noOfUiImagesLoaded = 0;
          let self = this;
          for( let i = 0; i < this.animals.length; i++ ) {
              for( let j = 0; j < this.animals[i].images.length; j++ ) {
                  this.noOfUiImages++;
                  let image = new Image();
                  image.src = '/img/animals/'+this.animals[i].images[j];
                  image.onload = function() {
                      self.noOfUiImagesLoaded++;
                      if( self.noOfUiImagesLoaded === self.noOfUiImages ) {
                          self.uiImagesLoaded = true;
                      }
                  };
              }
          }
      },
      resizeThumbnailList() {
          //console.log('tödmf');
          //console.log( this.$refs.thumbnailList );
      },
    resizeAnimalList() {
        for( var i=0; i< this.animals.length; i++ ) {
            if( this.openCategory === i ) {
                this.$refs['animalListWrapper'+i][0].style.height = this.$refs['animalList'+this.openCategory][0].offsetHeight +'px';
            }
            else if( this.$refs['animalListWrapper'+i][0] ) {
                this.$refs['animalListWrapper'+i][0].style.height = 0+'px';
            }
        }
    },
    loadTask() {

        let taskQuery;
        if( !this.taskId ) {
            // without id
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
            // with id
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

            if( this.taskId ) {
                // loaded with id, check for submissions

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
                            'val': this.taskId
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

                    this.taskId = false;

                });

            }

            if ( this.tasks[0] ) {

                console.log( 'task loaded');
                this.$router.replace('/identification/'+this.tasks[0].id);

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


                this.$store.dispatch('c3s/media/getMedia', [mediaQuery, 'c3s/task/SET_MEDIA', 0]).then(media => {

                    // media loaded
                    //console.log('media loaded');

                    this.videoLoaded = false;
                    this.activeVideo = 0;
                    this.$refs.video0[0].load();

                });

            }

            else {

                console.log('no more tasks');

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
        this.resizeAnimalList();

        if( closeFirst ) {
            let self = this;
            setTimeout( function() {
                if( self.$refs.answerSection.getBoundingClientRect().x > 0 ) {
                    // big screen
                    self.$scrollTo('#category-item-' + index, 600, {
                        container: '#answer-section',
                        offset: -32
                    });
                }
                else {
                    // mobile
                    self.$scrollTo('#category-item-' + index, 600, {
                        container: 'body',
                        offset: -32
                    });
                }
            }, 300)
        }
        else {
            if( this.$refs.answerSection.getBoundingClientRect().x > 0 ) {
                // big screen
                this.$scrollTo('#category-item-'+index, 600, {
                    container: '#answer-section',
                    offset: -32
                });
            }
            else {
                // mobile
                this.$scrollTo('#category-item-'+index, 600, {
                    container: 'body',
                    offset: -32
                });
            }
        }
    },
    onVideoEnd() {
          /*
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen();
        }
        */

        //console.log( 'video end');

        this.$refs['video'+this.activeVideo][0].pause();
        this.$refs['video'+this.activeVideo][0].currentTime = 0;

        if( this.activeVideo < this.taskMedia.length-1 ) {
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
        this.$refs['video'+this.activeVideo][0].currentTime = 0;
        this.$refs['video'+this.activeVideo][0].play();
    },
    onFirstVideoLoaded() {
        this.videoLoaded = true;
        this.$refs.video0[0].currentTime = 0;
        this.$refs.video0[0].play();
    },
    onVideoUpdate() {
        //console.log('video update');
        let value = (100 / this.$refs['video'+this.activeVideo][0].duration) * this.$refs['video'+this.activeVideo][0].currentTime;
        this.$refs.seekBar.value = value;
    },
      /*
    fullscreen() {
        if (this.$refs['video'+this.activeVideo][0].requestFullScreen) {
            this.$refs['video'+this.activeVideo][0].requestFullScreen();
        } else if (this.$refs['video'+this.activeVideo][0].mozRequestFullScreen) {
            this.$refs['video'+this.activeVideo][0].mozRequestFullScreen();
        } else if (this.$refs['video'+this.activeVideo][0].webkitRequestFullScreen) {
            this.$refs['video'+this.activeVideo][0].webkitRequestFullScreen();
        }
    },*/
    play() {
        if( !this.playing ) {
            //console.log('play');
            this.$refs['video'+this.activeVideo][0].play();
            this.playing = true;
        }
        else {
            //console.log('pause');
            this.$refs['video'+this.activeVideo][0].pause();
            this.playing = false;
        }
    },
    onSeekBarChange() {
        let time = this.$refs['video'+this.activeVideo][0].duration * (this.$refs.seekBar.value / 100);
        this.$refs['video'+this.activeVideo][0].currentTime = time;
    },
    next() {
        console.log('next');
        this.loadTask();
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

      .title-section {
        padding-bottom: 0;
      }

      .video-player {
        position: relative;

        .video-wrapper {
          position: relative;
          overflow: hidden;


          &:before {
            content: "";
            display: block;
            padding-bottom: calc( 100% / 16 * 8.6 );
          }


          background-color: $color-black-tint-90;
          .loader-wrapper {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
          }
          &.loading {
            video, .overlay, .thumbnails, .video-button, .seek-bar {
              display: none;
            }
            .loader-wrapper {
              display: flex;
            }
          }

          video {
            display: block;
            position: absolute;
            top: 0%;
            right: 0%;
            height: 105%;
            opacity: 0;

            &.activeVideo {
              /*
              pointer-events: all;
              cursor: pointer;
              */
              opacity: 1;
            }
          }

          .overlay {
            position: absolute;
            width: 5.4%;
            height: 5.5%;
            left: 0;
            bottom: 0;
            background: $color-black-tint-20;
            box-shadow: 0 0 32px 32px $color-black-tint-20;
            border-radius: 50%;
            transform: scale(1.3);
          }

          .thumbnails {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: $spacing-1;

            overflow: hidden;
            overflow-x: scroll;
            overflow-scrolling: touch;

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
              line-height: 0;
              display: block;
              margin: 0;
              padding: 0;

              width: 3000px;

              li {
                padding: 0;
                margin: 0;
                &:before {
                  display: none;
                }

                display: inline-block;

                cursor: pointer;

                border-radius: $border-radius;
                overflow: hidden;

                height: 40px;

                img {
                  height: 100%;
                }

                opacity: 0.5;
                &.active {
                  opacity: 1;
                  border: 1px solid white;
                }
              }
            }
          }

          .video-button {
            border-radius: 0;
            background: linear-gradient(to top, rgba( $color-black, 0.5 ), rgba( $color-black, 0 ) );
            &:focus  {
              svg {
                fill: white;
              }
            }
            &:active {
              svg {
                fill: rgba( white, 0.75 );
              }
            }
            &.fullscreen-button {
              position: absolute;
              bottom: 0;
              right: 0;
            }
            &.play-button {
              position: absolute;
              bottom: 0;
              left: 0;
            }
          }
          .seek-bar {
            appearance: none;
            margin: 0;
            position: absolute;
            bottom: 0;
            right: 0;
            width: calc( 100% - 40px );
            height: 40px;
            padding-right: $spacing-1;
            //background-color: rgba( $color-black, 0.5 );
            background: linear-gradient(to top, rgba( $color-black, 0.5 ), rgba( $color-black, 0 ) );
            //background: rgba( white, 0.8 );
            //background: none;

            outline: none;
            overflow: hidden;

            &::-webkit-slider-thumb {
              appearance: none;
              background-color: rgba( white, 0.5 );
              width: 20px;
              height: 20px;
              border-radius: 50%;
            }
            &::-moz-range-thumb {
              appearance: none;
              background-color: rgba( white, 0.5 );
              width: 20px;
              height: 20px;
              border-radius: 50%;
            }
          }

        }

      }

    }

    .answer-section {
      margin-bottom: 80px;

      .animal-categories {

        .category-item {

          &:before {
            display: none;
          }
          padding: 0;

          transition: padding $transition-duration-short $transition-timing-function;

          .category {
            cursor: pointer;
            overflow: hidden;
            border-radius: $border-radius;

            box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);
            transition: all $transition-duration-long $transition-timing-function;

            height: calc( ( 100vh - 160px - 64px - ( 4 * 16px ) ) / 5 );
            min-height: 40px;
            max-height: 15vw;

            .images {
              display: flex;
              overflow: hidden;
              height: 100%;

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
                width: 100%;
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
                    flex: 0 0 37%;
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
                        line-height: 1.25;
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

            //margin-bottom: $spacing-4;

            .category {
              height: 40px;
              margin-bottom: $spacing-2;
              .title {
                svg {
                  transform: rotate(90deg);
                }
              }
              .images {
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


  .action-bar {
    background: white;
    height: 80px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;

    box-shadow: 0px -2px 4px +2px rgba($color-black, 0.05);

    .content-wrapper {
      max-width: none;
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
        .video-player {
          .video-wrapper {

            .thumbnails {
              ul {
                li {
                  height: 48px;
                }
              }
            }

            .seek-bar {
              width: calc( 100% - 48px );
              height: 48px;

              &::-webkit-slider-thumb {
                width: 24px;
                height: 24px;
              }
              &::-moz-range-thumb {
                width: 24px;
                height: 24px;
              }
            }
          }
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

              min-height: 48px;
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
              .category {
                height: 48px;
                .title {

                }
                .images {
                  //height: 48px;
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


  @media only screen and (min-width: $viewport-large) {

    .mustelid-identification {

      height: calc( 100vh - 160px );
      //max-height: 900px;
      overflow: hidden;

      display: flex;
      flex-direction: row;

      .video-section {
        min-width: 41.667%;
        position: relative;

        .video-player {
          height: calc( 100vh - 160px - 135px );
          width: calc( ( 100vh - 160px - 135px ) / 8.6 * 16 );
          overflow: hidden;

          max-width: 100%;
          min-width: 100%;

          .video-wrapper {
            //width: 100%;
            //height: 100%;
            //max-height: calc( 100% / 16 * 9 );

            border-radius: 0 $border-radius $border-radius 0;
            box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);

            video {
            }
          }
        }
      }
      .answer-section {
        margin-bottom: 0;

        flex-grow: 1;
        max-width: 58.333%;
        min-width: 41.667%;
        overflow-y: scroll;

        .content-wrapper {
          padding-left: $grid-gutter-large / 2;
        }

        .animal-categories {
          .category-item {
            .category {
              max-height: 8vw;
            }
          }
        }
      }


    }
    .action-bar {
    }

  }

  @media only screen and (min-width: $viewport-xlarge) {

    .mustelid-identification {
      .video-section {
        .video-player {
          height: calc(100vh - 160px - 151px);
          width: calc((100vh - 160px - 151px) / 8.6 * 16);
        }
      }
      .answer-section {
        .content-wrapper {
          padding-left: $grid-gutter-xlarge /2;
        }

        .animal-categories {
          .category-item {
            .category {
              height: calc((100vh - 160px - 96px - (4 * 16px)) / 5);
            }
          }
        }
      }
    }

  }


</style>
