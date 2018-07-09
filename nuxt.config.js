const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir) // eslint-disable-line

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '외대 주변 식당',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '한국외대 주변 식당과 학식 정보를 확인할 수 있어요.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/vue-google-maps.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-9040837646422745',
      pageLevelAds: true
    }]],
  axios: { baseURL: 'https://api.lento.in' },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/vue-google-maps.js',
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
