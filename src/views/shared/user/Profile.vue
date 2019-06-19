<i18n>
    {

    "en": {

    "page-title": "Your Profile",

    "heading": "Your Profile",
    "label-username": "Username",
    "label-email": "Email",

    "thanks": "Thanks for helping!",
    "button-logout": "Logout",
    "button-reset": "Reset Password",
    "button-save": "Save",

    "error-username-empty": "Enter a Username",
    "error-username": "Username already in use."
    },

    "de": {

    "page-title": "Dein Profil",

    "heading": "Dein Profil",
    "label-username": "Benutzername",
    "label-email": "Email",

    "thanks": "Vielen Dank für Deine Hilfe!",
    "button-logout": "Ausloggen",
    "button-reset": "Passwort zurücksetzen",
    "button-save": "Speichern",

    "error-username-empty": "Geben Sie einen Benutzernamen an",
    "error-username": "Benutzername bereits vergeben."

    }

    }
</i18n>

<template>
    <div v-if="currentUser">
        <app-content-section>
            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-5 col-xlarge-4">

                        <div class="content-subsection">
                            <h2 class="heading">{{ $t('heading') }}</h2>

                            <div class="form-field form-field-block">
                                <label>{{ $t('label-email') }}</label>
                                <p>{{ currentUser.email }}</p>
                            </div>
                            <div class="form-field form-field-block">
                                <label>{{ $t('label-username') }}</label>
                                <input v-model="username" id="reg-username" name="reg-email" autocomplete="new-password" :disabled="loading" />
                                <span class="message error" v-if="errors.username">{{ $t("error-username") }}</span>
                                <!--<p>{{ currentUser.username }}</p>-->
                            </div>

                            <div class="button-group right-aligned">
                                <button class="button button-primary" @click.prevent="save()" :disabled="loading || usernameCheckInProgress || username === currentUser.username || !username || errors.username">{{ $t('button-save') }}</button>
                            </div>
                        </div>
                        <div class="content-subsection">
                            <div class="button-group right-aligned">
                                <!-- <router-link tag="button" to="/logout" class="button button-secondary">{{ $t('button-logout') }}</router-link> -->
                                <button class="button button-secondary" @click.prevent="logout()">{{ $t('button-logout') }}</button>
                                <router-link tag="button" to="/reset" class="button button-secondary">{{ $t('button-reset') }}</router-link>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </app-content-section>

        <app-footer></app-footer>

    </div>
</template>

<script>
    import {mapState} from "vuex";
    import ContentSection from '@/components/shared/ContentSection.vue';
    import Footer from '@/components/shared/Footer.vue';

    export default {
        name: "ViewUser",
        components: {
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
                username: '',
                errors: {
                    username: false
                },
                usernameCheckTimeout: undefined,
                usernameCheckInProgress: false
            }
        },
        computed: {
            ...mapState({
                user: state => state.user.user,
                currentUser: state => state.c3s.user.currentUser,
                loading: state => state.settings.loading
            })
        },
        mounted() {
          this.username = this.currentUser.username;
        },
        watch: {
            username() {
                this.errors.username = false;

                this.usernameCheckInProgress = true;

                if( this.username !== this.currentUser.username ) {
                    clearTimeout( this.usernameCheckTimeout );
                    var self = this;
                    this.usernameCheckTimeout = setTimeout( function() {
                        self.checkUsername();
                        self.usernameCheckInProgress = false;
                    }, 500);
                }

            }
        },
        methods: {
            checkUsername() {

                let query = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'users'
                        ]
                    },
                    'where': [
                        {
                            "field": 'username',
                            'op': 'e',
                            'val': this.username
                        }
                    ]
                };
                this.$store.dispatch('c3s/submission/getSubmissions', [query, 1] ).then(res => {
                    if( res.body.length > 0 ) {
                        // email already registered
                        this.errors.username = true;
                    }

                    //this.$store.commit('c3s/user/SET_ANON', true);
                });
            },
            logout() {
                this.$store.commit('c3s/user/SET_CURRENT_USER', null);
                this.$store.commit('c3s/user/SET_ANON', false);
                this.$router.push('/');
            },
            save() {

                this.$store.dispatch('c3s/user/updateUser', [this.currentUser.id, {'username':this.username }] ).then(r => {
                    //console.log(r);
                })
            }
        }
    }
</script>
