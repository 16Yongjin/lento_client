const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir) // eslint-disable-line

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '한국외대 주변 맛집',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '한국외대 주변 맛집 메뉴, 음식 사진, 위치 정보. 인문관 & 교수회관 중식, 석식' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/vue-google-maps.js', { src: '~/plugins/vue-infinite-loading.js', ssr: false }],
  css: [
    '~/assets/style/app.styl'
  ],
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-9040837646422745',
      pageLevelAds: true
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-122016348-1'
    }]],
  axios: { baseURL: 'https://api.lento.in' },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // router: {
  //   middleware: ['type-redirect']
  // },
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/vue-google-maps.js',
      '~/plugins/vue-infinite-loading.js',
      'axios'
    ],
    extractCSS: true,
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: [
        ['transform-runtime', {
          polyfill: true,
          regenerator: true
        }],
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}', // eslint-disable-line
            'preventFullImport': true
          }
        }]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
