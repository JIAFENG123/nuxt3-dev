/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/nuxt.config.{js,ts}',
    './src/app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        LuckiestGuy: ['LuckiestGuy'],
        baotuxiaobaiti: ['baotuxiaobaiti'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
