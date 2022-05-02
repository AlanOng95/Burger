export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Burger',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyAtFw5kkvrDQjgZGYdPJd8Yvv57K2lwNHw",
      authDomain: "ztmburger-c447d.firebaseapp.com",
      projectId: "ztmburger-c447d",
      storageBucket: "ztmburger-c447d.appspot.com",
      messagingSenderId: "644102015146",
      appId: "1:644102015146:web:66bde5cf80f3e64e5f68d3",
      measurementId: "G-LGRNZJ50P1",
    },
  },

  googleFonts: {
    families: {
      // a simple name
      Roboto: true,
      Lilita: true,
      Oswald: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
