export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title:
      'naijab.com - just a lonely man likes coding! web, mobile development and lifestyle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'just a lonely man likes coding! web, mobile development and lifestyle  - แค่คนเหงาชอบเขียนโค้ด แชร์เรื่องราวการเขียนโปรแกรม เขียนเว็บไซต์ เขียนแอพ คอร์สออนไลน์ราคาไม่แพง',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'naijab.com',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'naijab.com - just a lonely man likes coding! web, mobile development and lifestyle',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://naijab.com',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'just a lonely man likes coding! web, mobile development and lifestyle',
      },
      {
        hid: 'article:author',
        name: 'article:author',
        content: 'https://www.facebook.com/naijabdev',
      },
      {
        hid: 'article:publisher',
        name: 'article:publisher',
        content: 'https://www.facebook.com/naijabcom',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~plugins/google_analytics.js', mode: 'client' }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxt/content'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-shades-of-purple.css',
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
