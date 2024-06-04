// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },

  modules: [
    // [
    //   "@pinia/nuxt",
    //   {
    //     autoImports: ["defineStore", "acceptHMRUpdate"],
    //   },
    // ],
    // "@pinia-plugin-persistedstate/nuxt",
  ],
});
