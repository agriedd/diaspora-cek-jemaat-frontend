// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
  ],
  runtimeConfig: {
    public: {
      // apiHost: 'http://localhost/api/app'
      apiHost: 'https://app.gmitdiaspora.org/api/app'
    }
  },
  alias: {
    '@types': './types'
  },
  css: ['~/assets/css/main.css'],
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
