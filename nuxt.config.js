export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'adylet-frontend-demo',
    htmlAttrs: {
      lang: 'en',
      class:'pxp-root'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'images/favicon.png', href: 'images/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com/'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com/'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&amp;display=swap'},
      { rel: 'stylesheet', href: 'css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: 'css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: 'css/animate.css' },
      { rel: 'stylesheet', href: 'css/style.css' },

    ],
    script:[
      {
        src:'js/jquery-3.4.1.min.js'
      },
      {
        src:'js/bootstrap.bundle.min.js'
      },
      {
        src:'js/owl.carousel.min.js'
      },
      {
        src:'js/nav.js'
      },
      {
        src:'js/main.js'
      },
      {
        src:'js/Chart.min.js'
      }

    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo'
  ],
  apollo:{
    clientConfigs:{
      default:{
        httpEndpoint: process.env.BACKEND_URL || "http://devapi.adylet.com/graphql"
      }
    }

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
