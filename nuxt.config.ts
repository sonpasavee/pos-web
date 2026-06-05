import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  modules: ['@pinia/nuxt'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      apiUrl: '',
      liffId: '',
      socketUrl: '',
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'สั่งอาหาร',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      ],
    },
  },
})