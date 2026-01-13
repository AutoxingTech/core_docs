// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Robot Documentation',
    tagline: 'Installation, Diagnostics & Troubleshooting Guides',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    // Replace <your-github-username> with your actual GitHub username
    url: 'https://autoxingtech.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/core_docs/',

    // GitHub pages deployment config.
    // Replace these with your actual GitHub username and repo name
    organizationName: 'autoxingtech', // Usually your GitHub org/user name.
    projectName: 'core_docs', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    onBrokenLinks: 'throw',

    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        }
    },

    plugins: [
        'docusaurus-plugin-image-zoom'
    ],

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/autoxingtech/core_docs/tree/master/',
                },
                blog: false,
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
            image: 'img/robot-social-card.jpg',
            navbar: {
                title: 'Robot Docs',
                logo: {
                    alt: 'Robot Documentation Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://autoxingtech.github.io/axbot_rest_book/',
                        label: 'Robot REST API',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/autoxingtech/core_docs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Getting Started',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Hardware Installation',
                                to: '/docs/category/hardware-installation',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/autoxingtech/core_docs',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Robot Documentation. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['bash', 'json', 'yaml'],
            },
            zoom: {
                selector: '.markdown img',
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                    background: {
                        light: 'rgb(255, 255, 255)',
                        dark: 'rgb(50, 50, 50)'
                    }
                }
            }
        }),
};

module.exports = config;
