// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    app:{
    head: {
      title: 'Toolbox',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: "baidu-site-verification", content:"codeva-lL8vNDClGc" },
      ],
      link: [
        { rel: 'icon', type:'ico/svg', href:'/toolbox.ico'}
      ]
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-headlessui',
    'nuxt-vitest',
    '@nuxt/devtools'
  ],
  experimental: {
    reactivityTransform: true
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  colorMode: {
    classSuffix: ''
  },
  headlessui: {
    prefix: ''
  },
  devtools: true
})
