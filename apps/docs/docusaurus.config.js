// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'pouco.design',
  tagline: 'Menos é mais',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pouco.design',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'poucodesign', // Usually your GitHub org/user name.
  projectName: 'poucodesign', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mechamobau/poucodesign/tree/main/apps/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/mechamobau/poucodesign/tree/main/apps/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'pouco.design',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            to: '/blog',
            label: 'Notícias',
            position: 'left'
          },
          {
            href: 'https://github.com/mechamobau/poucodesign',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://pouco.design/storybook',
            label: 'Storybook',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Conteúdo',
            items: [
              {
                label: 'Documentação',
                to: '/docs/intro',
              },
              {
                label: 'Notícias',
                to: '/blog',
              },
            ],
          },
          {},
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Storybook',
                href: 'https://pouco.design/storybook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} pouco.design. Feito por <a target="_blank" href="https://twitter.com/mechamobau">Lucas Viana</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
