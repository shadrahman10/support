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
  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
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
    nav: [{ text: "FAQ", link: "/faq" }],
    sidebar: [
      {
        text: "Introduction",
        items: [
          // TODO
          { text: "What is Paramify?", link: "/what-is-paramify" },
          // TODO
          {
            text: "Why Risk Solutions?", //Getting Started Risk Solutions.  Why Paramify?
            link: "/getting-started-risk-solutions",
          },
          { text: "Getting Started", link: "/getting-started" }, // too much info
          { text: "Release Notes", link: "/release-notes" },
        ],
      },
      {
        text: "User Guides (HOW TO)", // Functional, Verbs
        items: [
          { text: "Smart Text & Mentions", link: "/smart-text" },
          // TODO
          {
            text: "Splitting Risk Solutions",
            link: "/splitting-risk-solutions",
          },
          { text: "Modeling Inheritance", link: "/inheritance" }, // is defined as part of intake.
          { text: "Conducting Reviews", link: "/reviews" },
          { text: "Migrate to Rev5", link: "/migrate-fedramp" },
          { text: "FAQ by Document", link: "/documents/faq" },
          { text: "Setting Control Parameters", link: "/control-parameters" },
          // json
          // intake
          // import from another project
        ],
      },
      {
        text: "Reference (WHAT IS)", // Technical, Nouns
        items: [
          // TODO
          { text: "Data architecture", link: "/data-architecture" },
          {
            text: "Projects",
            collapsed: true,
            items: [
              { text: "Key Contacts", link: "/contacts" },
              { text: "Security Objectives", link: "/objectives" },
              // TODO
              { text: "Information Types", link: "/information-types" },
              { text: "Controls", link: "/controls" },
              { text: "Project Overview", link: "/diagrams" }, // the narratives
              { text: "Attachments", link: "/attachments" },
              { text: "Document Robot", link: "/document-robot" },
            ],
          },
          { text: "Risk Solutions", link: "/risk-solutions" },
          {
            text: "Elements",
            collapsed: true,
            items: [
              { text: "Components", link: "/components" },
              { text: "Parties", link: "/parties" },
              { text: "Roles", link: "/roles" },
              { text: "Locations", link: "/locations" },
              { text: "Data", link: "/data" },
            ],
          },
          { text: "OSCAL", link: "/oscal" },
        ],
      },
      {
        text: "Installation",
        items: [
          { text: "Deployment Options", link: "/deployment-options" },
          { text: "Application Architecture", link: "/app-architecture" },
          { text: "The Paramify Installer", link: "/ppi" },
          {
            text: "Installation Examples",
            collapsed: true,
            items: [
              { text: "AWS EKS via PPI", link: "/deploy-eks-aws" },
              { text: "Azure AKS via Helm", link: "/deploy-helm-azure" },
              { text: "Embedded in AWS", link: "/deploy-embedded-aws" },
              { text: "Embedded in Azure", link: "/deploy-embedded-azure" },
            ],
          },
          {
            text: "Login Options",
            collapsed: true,
            items: [
              { text: "Overview", link: "/login-options" },
              { text: "Microsoft SSO", link: "/login-microsoft" },
              { text: "Okta SSO", link: "/login-okta" },
            ],
          },
          { text: "Embedded DB Backup", link: "/embedded-db-backup" },
          { text: "Users and Teams", link: "/users" },
          { text: "UAT", link: "/uat" },
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
