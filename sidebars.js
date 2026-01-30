/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    tutorialSidebar: [
        'intro',
        {
            type: 'category',
            label: '硬件安装',
            link: {
                type: 'generated-index',
                description: '了解如何为您的机器人安装新的硬件组件。',
            },
            collapsed: false,
            items: [
                'hardware-installation/rk3588-powerbox/index',
                'hardware-installation/raspberry-pi-to-powerbox-upgrade/index',
            ],
        },
        {
            type: 'category',
            label: '硬件规格书',
            link: {
                type: 'generated-index',
                description: 'AX 机器人硬件平台的详细规格说明。',
            },
            collapsed: false,
            items: [
                'hardware-specifications/power-box/index',
                'hardware-specifications/bbox-v1/index',
                'hardware-specifications/wifi-certification/index',
            ],
        },
        {
            type: 'category',
            label: '故障排查',
            link: {
                type: 'generated-index',
                description: '诊断和解决常见问题。',
            },
            collapsed: false,
            items: [
                'troubleshooting/power-box/index',
            ],
        },

        module.exports = sidebars;
