
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: {
  height: '4px',
  color: '#f86b70',
  failedColor: '#f86b70',
},
  /*
  ** Global CSS
  */
  css: ['~/assets/scss/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-mouse-parallax.js' },
    { src: '~/plugins/vue-typer.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~/plugins/vue-scrollactive', ssr: false },
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
    'nuxt-purgecss',
    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'ss',
        breakpoints: {
          ss: 320,
          xs: 375,
          sm: 768,
          md: 1024,
          lg: 1440,
          xl: Infinity,
        },
      },
    ],
  ],
  styleResources: {
    scss: [
      './assets/scss/_functions.scss',
      './assets/scss/_variables.scss',
      './assets/scss/_mixins.scss',
    ],
  },
  purgeCSS: {
    enabled: true,
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
    ],
    styleExtensions: ['.css'],
    whitelist: ['body', 'html', 'nuxt-progress'],
    whitelistPatterns: [
      /^scrollactive-item*/,
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
