import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="机器人项目文档 - 安装、诊断与故障排除">
            <HomepageHeader />
            <main>
                <div className="container" style={{ padding: '4rem 2rem' }}>
                    <div className="row">
                        <div className="col col--4">
                            <h2>🏗️ 硬件安装与升级</h2>
                            <p>从硬件选型到组装的完整指南。了解如何安装和升级您的机器人核心硬件组件。</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><Link to="/docs/hardware-installation/rk3588-powerbox/">• RK3588 Powerbox 方案</Link></li>
                                <li><Link to="/docs/hardware-installation/raspberry-pi-to-powerbox-upgrade/">• 树莓派升级为 Powerbox</Link></li>
                                <li><Link to="/docs/hardware-specifications/power-box/">• Power Box 硬件规格书</Link></li>
                                <li><Link to="/docs/hardware-specifications/bbox-v1/">• BBox 硬件规格书</Link></li>
                            </ul>
                        </div>
                        <div className="col col--4">
                            <h2>🗺️ 标定与建图技巧</h2>
                            <p>确保机器人准确运行并熟悉环境。提供传感器标定指南以及各种场景的建图方案。</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><Link to="/docs/calibration/lidar-calibration/">• 雷达标定指南</Link></li>
                                <li><Link to="/docs/calibration/imu-correction/">• IMU 误差矫正</Link></li>
                                <li><Link to="/docs/data-collection/tips-for-mapping-large-area/">• 大面积场景建图技巧</Link></li>
                                <li><Link to="/docs/data-collection/piece-by-piece-mapping/">• 分块建图与合并操作</Link></li>
                            </ul>
                        </div>
                        <div className="col col--4">
                            <h2>💻 网络配置与系统</h2>
                            <p>提升稳定性与扩展性。优化机器人的网络连接表现，并通过参数系统深入定制行为。</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><Link to="/docs/system-settings/wifi-fast-roaming/">• 无线网络快速漫游配置</Link></li>
                                <li><Link to="/docs/system-settings/wifi-antenna-installation/">• WiFi 天线规范安装</Link></li>
                                <li><Link to="/docs/system-settings/parameter-system/">• 机器人核心参数系统</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
