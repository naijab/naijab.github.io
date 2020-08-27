module.exports = {
  theme: {},
  variants: {},
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    whitelist: ['mode-dark'],
  },
}
