// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '景行慧动机器人文档中心',
    tagline: '硬软件安装、系统配置与故障排除指南',
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
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
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
                title: '景行慧动机器人文档',
                logo: {
                    alt: '景行慧动机器人 Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: '文档',
                    },
                    {
                        href: 'https://autoxingtech.github.io/axbot_rest_book/',
                        label: '机器人 REST API',
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
                        title: '核心硬件规格',
                        items: [
                            {
                                label: 'BBox 导航盒说明书',
                                to: '/docs/hardware-specifications/bbox-v1/',
                            },
                            {
                                label: '24V 电源控制盒说明书',
                                to: '/docs/hardware-specifications/power-box/',
                            },
                            {
                                label: '48V 电源控制盒说明书',
                                to: '/docs/hardware-specifications/power-box-48v/',
                            },
                            {
                                label: 'AX-IN42688-U IMU 规格书',
                                to: '/docs/hardware-specifications/imu/',
                            },
                            {
                                label: 'ESP-NOW 门控通知器',
                                to: '/docs/hardware-specifications/esp-beacon/',
                            },
                        ],
                    },
                    {
                        title: '部署、标定与建图',
                        items: [
                            {
                                label: 'RK3588 算力盒 + 电源盒方案',
                                to: '/docs/hardware-installation/rk3588-powerbox/',
                            },
                            {
                                label: '激光雷达与 IMU 标定',
                                to: '/docs/calibration/lidar-calibration/',
                            },
                            {
                                label: '大面积场景建图技巧',
                                to: '/docs/data-collection/tips-for-mapping-large-area/',
                            },
                            {
                                label: '无线快速漫游与参数系统',
                                to: '/docs/system-settings/wifi-fast-roaming/',
                            },
                        ],
                    },
                    {
                        title: '运维支持与开发',
                        items: [
                            {
                                label: '文档总览目录',
                                to: '/docs/intro',
                            },
                            {
                                label: '电源盒常见故障排查',
                                to: '/docs/troubleshooting/power-box/',
                            },
                            {
                                label: '底盘数据管理与隐私说明',
                                to: '/docs/data-collection/',
                            },
                            {
                                label: '机器人 REST API 手册',
                                href: 'https://autoxingtech.github.io/axbot_rest_book/',
                            },
                            {
                                label: 'GitHub 源码仓库',
                                href: 'https://github.com/autoxingtech/core_docs',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} 景行慧动机器人 (AutoXing Tech). All Rights Reserved.`,
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
