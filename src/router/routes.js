import Identification from "@/views/Identification";
import IdentificationComplete from "@/views/IdentificationComplete";
import Forum from "@/views/Forum";
import Scientifica from "@/views/Scientifica";

import Login from "@/views/shared/user/Login";
import Register from "@/views/shared/user/Register";
import Profile from "@/views/shared/user/Profile";
import RequestReset from "@/views/shared/user/RequestReset";
import Reset from "@/views/shared/user/Reset";

// lazy loading routes
const Home = (resolve) => {
  require.ensure(["@/views/Home.vue"], () => {
    resolve(require("@/views/Home.vue"));
  });
};
const About = (resolve) => {
  require.ensure(["@/views/About.vue"], () => {
    resolve(require("@/views/About.vue"));
  });
};
const Mustelids = (resolve) => {
  require.ensure(["@/views/Mustelids.vue"], () => {
    resolve(require("@/views/Mustelids.vue"));
  });
};
// const FAQ = (resolve) => {
//   require.ensure(["@/views/FAQ.vue"], () => {
//     resolve(require("@/views/FAQ.vue"));
//   });
// };
const Terms = (resolve) => {
  require.ensure(["@/views/shared/static/Terms.vue"], () => {
    resolve(require("@/views/shared/static/Terms.vue"));
  });
};

export const routes = [
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "",
        component: Home,
        meta: {
          i18n: "navigation-homepage",
          nav: false,
          requiresAuth: true,
        },
      },
      // {
      //     path: "identification",
      //     meta: {requiresAuth: true, i18n: 'navigation-identification', nav: true},
      //     component: Identification,
      //     children: [
      //         {
      //             path: ":id",
      //             component: Identification,
      //             meta: { requiresAuth: true, i18n: 'navigation-identification' }
      //         }
      //     ]
      // },
      // {
      //     path: "complete",
      //     component: IdentificationComplete,
      //     meta: {i18n: 'navigation-complete', nav: false}
      // },
      {
        path: "about",
        component: About,
        meta: { i18n: "navigation-about", nav: true },
      },
      {
        path: "mustelids",
        component: Mustelids,
        meta: { i18n: "navigation-mustelids", nav: true },
      },
      // {
      //     path: "forum",
      //     component: Forum,
      //     name: "Forum",
      //     meta: {requiresAuth: true, i18n: 'navigation-forum', nav: true},
      // },
      // {
      //   path: "faq",
      //   component: FAQ,
      //   name: "FAQ",
      //   meta: { i18n: "navigation-faq", nav: true },
      // },
      {
        path: "scientifica",
        component: Scientifica,
        meta: { nav: false },
      },
      {
        path: "terms",
        component: Terms,
        meta: { i18n: "navigation-terms", nav: false },
      },
      // {
      //     path: "login",
      //     name: "Login",
      //     component: Login,
      //     meta: {i18n: 'navigation-login', nav: false}
      // },
      // {
      //     path: "register",
      //     name: "Register",
      //     component: Register,
      //     meta: {i18n: 'navigation-register', nav: false}
      // },
      // {
      //     path: "reset",
      //     name: "ResetRequest",
      //     component: RequestReset,
      //     meta: {i18n: 'navigation-reset', nav: false}
      // },
      // {
      //     path: "reset/:token",
      //     name: "Reset",
      //     component: Reset,
      //     meta: {i18n: 'navigation-reset', nav: false}
      // },
      // {
      //     path: "profile",
      //     name: "UserProfile",
      //     component: Profile,
      //     meta: {requiresAccount: true, i18n: 'navigation-profile', nav: false}
      // },
      // {
      //     path: "error",
      //     name: "Error",
      //     component: Home.Error,
      //     meta: {i18n: 'navigation-profile', nav: false}
      // }
      {
        path: "*",
        component: Home,
      },
    ],
  },
];
