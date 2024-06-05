// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: { port: 3001 },
  app: {
    head: {
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js",
          crossorigin: "anonymous",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: ["@/public/assets/sass/global.scss"],
  plugins: ["@/plugins/swal.ts"],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    // "@pinia-plugin-persistedstate/nuxt",
  ],
  runtimeConfig: {
    public: {
      api: process.env.NUXT_API,
    },
  },
  ssr: false,
});
