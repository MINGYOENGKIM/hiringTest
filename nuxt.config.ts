// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "nuxt-svgo", "@nuxt/image", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["@/assets/css/main.css", "@/assets/css/details.css"],
  components: true,
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: "github-dark",
      langs: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'shell',
        'mdc',
        'md',
        'yaml',
        'c',
        'cpp',
        'java',
        'javascript'
      ]
    }
  },
})
