import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Paramify Docs",
  description: "Compliance docs made easier",
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    [
      "script",
      { id: "hotjar" },
      `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3740863,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
    ],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Paramify Docs" }],
    ["meta", { name: "og:image", content: "/hero-paramify-sm.png" }],
  ],
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
          { text: "Release Notes", link: "/release-notes" },
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
            text: "Installation Examples",
            collapsed: true,
            items: [
              { text: "Helm on Azure", link: "/deploy-helm-azure" },
              { text: "Embedded on AWS", link: "/deploy-embedded-aws" },
            ],
          },
          { text: "UAT", link: "/uat" },
        ],
      },
      {
        text: "User Guides",
        items: [
          { text: "Risk Solutions", link: "/risk-solutions" },
          { text: "Smart Text & Mentions", link: "/smart-text" },
          { text: "Inheritance", link: "/inheritance" },
          { text: "Reviews", link: "/reviews" },
          { text: "Projects", link: "/projects" },
          { text: "Security Objectives", link: "/objectives" },
          { text: "Key Contacts", link: "/contacts" },
          { text: "Attachments", link: "/attachments" },
          { text: "Diagrams", link: "/diagrams" },
          { text: "Document Robot", link: "/document-robot" },
          { text: "OSCAL", link: "/oscal" },
          { text: "Migrate to Rev5", link: "/migrate-fedramp" },
        ],
      },
    ],
    lastUpdated: {},
    socialLinks: [
      { icon: "github", link: "https://github.com/paramify/support" },
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
