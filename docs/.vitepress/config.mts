import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Paramify Docs",
  description: "My Cool Description",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
      alt: "Paramify logo",
    },
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Installation",
        items: [
          { text: "Deployment Options", link: "/deployment-options" },
          { text: "The Paramify Installer", link: "/ppi" },
          {
            text: "Examples",
            items: [
              { text: "Helm on Azure", link: "/deploy-helm-azure" },
              { text: "Embedded on AWS", link: "/deploy-embedded-aws" },
            ],
          },
        ],
      },
      {
        text: "User Guides",
        items: [
          { text: "Risk Solutions", link: "/risk-solutions" },
          { text: "Inheritance", link: "/inheritance" },
          { text: "Reviews", link: "/reviews" },
          { text: "Projects", link: "/projects" },
          { text: "Security Objectives", link: "/objectives" },
          { text: "Attachments", link: "/attachments" },
          { text: "Diagrams", link: "/diagrams" },
          { text: "OSCAL", link: "/oscal" },
          { text: "Migrate to Rev5", link: "/migrate-fedramp" },
        ],
      },
    ],
    lastUpdated: {},
    socialLinks: [
      { icon: "github", link: "https://github.com/paramify" },
      { icon: "linkedin", link: "https://www.linkedin.com/company/paramify" },
      { icon: "youtube", link: "https://www.youtube.com/@paramify" },
    ],
    editLink: {
      pattern: "https://github.com/paramify/support/blob/main/docs/:path",
    },
    footer: {
      message: "Made with ❤️ by Team Paramify",
      copyright: "Copyright © 2023 Paramify, Inc. All Rights Reserved.",
    },
    search: {
      provider: "local",
    },
    outline: "deep",

  },
});

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
