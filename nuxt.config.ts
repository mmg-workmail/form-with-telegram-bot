// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    CHAT_ID: process.env.CHAT_ID,
    TELEGRAM_TOKEN_BOT: process.env.TELEGRAM_TOKEN_BOT,
  },

  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
});
