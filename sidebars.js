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
                'power-box/index',
                'hardware-installation/rk3588-powerbox/index',
                'hardware-installation/raspberry-pi-to-powerbox-upgrade/index',
            ],
        },
    ],
};

module.exports = sidebars;
