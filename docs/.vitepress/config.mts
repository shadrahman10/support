import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Paramify",
  description: "My Cool Description",
  base: '/support/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: '../public/logo-light.svg',
      dark: '../public/logo-dark.svg',
      alt: 'Paramify logo',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Installation',
        items: [
          { text: 'Overview' },
          {
            text: 'AWS', collapsed: true, items: [
              { text: "EKS", link: '' },
              { text: "EC2", link: '' },
              { text: "Helm", link: '' },
            ],
          },
          {
            text: 'Install with Helm', collapsed: true, items: [
              { text: "Amazon EKS", link: '' },
              { text: "Azure AKS", link: '' },
            ],
          },
          {
            text: 'Install as Appliance', collapsed: true, items: [
              { text: "Amazon EC2", link: '' },
              { text: "Helm 2", link: '' },
            ],
          },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

/**
 * Install with Kubenertes
 * Install with Helm
 * Instlall as Virtual Appliance
 * Install in Azure AKS (KOTS)
 * Install in AWS EKS (KOTS)
 * Install in Google GKE (KOTS)
 * Install in Azure with Helm
 * Install in AWS with Helm
 * Install in Google with Helm
 * Install emebedded in AWS EC2 KURL
 * Install embedded in Azure Compute (KURL)
 * Install embedded in Google Compute (KURL)
 * 
 * 
 */
