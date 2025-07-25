export default defineNuxtConfig({
  app: {
    head: {
      title: 'Bitcoin Design Foundation',
      meta: [
        { name: 'description', content: 'We support designers who improve the bitcoin user experience.' },
        { name: 'msapplication-TileColor', content: '#000000' },
        { name: 'msapplication-TileImage', content: '/images/mstile-150x150.png' },
        { name: 'theme-color', content: '#000000', id: 'themeColorMeta' },
        { name: 'og:image', content: '/assets/images/preview.jpg' },
        { name: 'twitter:image', content: '/assets/images/preview.jpg' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/images/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' }
      ],
      script: [
        { defer: true, src:"https://info.bitcoin.design/script.js", "data-website-id": "f37bc8fb-a307-4867-9ea1-1d83285e6ee0" }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_import.scss" as *;'
        }
      }
    }
  },
  css: [
    '@/assets/css/_base.scss'
  ]
})