export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'listing-user',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css', integrity: 'sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=:', crossorigin: 'anonymous' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma'
    // 'balm-ui/dist/balm-ui.css'
    // { src: 'bulma/bulma.sass', lang: 'sass' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    middleware: ['auth']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next',
    // https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://reqres.in'
  },

  toast: {
    position: 'top-center',
    iconPack: 'fontawesome',
    theme: 'bubble',
    duration: 2000,
    singleton: true
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token'
        // required: true,
        // type: 'Bearer'
        },
        user: {
          property: 'data'
        // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: false,
          user: { url: '/api/user/4', method: 'get' }
        }
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
