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
            label: 'Hardware Installation',
            link: {
                type: 'generated-index',
                description: 'Learn how to install new hardware components on your robots.',
            },
            collapsed: false,
            items: [
                'hardware-installation/getting-started',
                'hardware-installation/rk3588-powerbox',
                'hardware-installation/raspberry-pi-to-powerbox-upgrade',
            ],
        },
        {
            type: 'category',
            label: 'Troubleshooting',
            link: {
                type: 'generated-index',
                description: 'Diagnose and fix common problems with your robots.',
            },
            collapsed: false,
            items: [
                'troubleshooting/common-issues',
            ],
        },
    ],
};

module.exports = sidebars;
