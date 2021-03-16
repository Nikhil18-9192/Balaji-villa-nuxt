export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  pageTransition: 'my-page',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  head: {
    title: 'Balaji Villa',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          ' Balaji Villa is one of the famous luxurious 4 bedrooms bunglow in Panhala, Kolhapur. We provide Luxurious Bunglow Booking On Rent For Events , Functions ,Celebrations , Family Holiday. 4 A/C Master Bedrooms With Attach Toilets can accommodate up-to 25 people with Extra beds. Fully Equipped kitchen available. Provision for Party up-to 200 people in Garden area.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      {
        rel: 'stylsheet',
        href:
          'href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Marcellus&family=Tangerine:wght@400;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/carousel.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: 'UA-134733760-3',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['~assets/global.scss'],
  },

  devModules: ['@nuxtjs/eslint-module'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
