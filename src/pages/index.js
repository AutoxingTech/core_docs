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
                            <h2>🏗️ 硬件安装与规格</h2>
                            <p>从硬件选型到组装的完整指南。包含 RK3588 平台的优势说明、升级方案以及详细的硬件规格参数。</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><Link to="/docs/hardware-installation/rk3588-powerbox/">• RK3588 Powerbox 方案</Link></li>
                                <li><Link to="/docs/hardware-installation/raspberry-pi-to-powerbox-upgrade/">• 树莓派升级指南</Link></li>
                                <li><Link to="/docs/hardware-specifications/power-box/">• 硬件规格书汇总</Link></li>
                            </ul>
                        </div>
                        <div className="col col--4">
                            <h2>🛠️ 校准与故障排除</h2>
                            <p>确保机器人准确运行。提供传感器标定工具的使用说明，以及针对常见硬件问题的排查解决方案。</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><Link to="/docs/calibration/lidar-calibration/">• 雷达与 IMU 标定</Link></li>
                                <li><Link to="/docs/troubleshooting/power-box/">• 电源盒故障排查</Link></li>
                            </ul>
                        </div>
                        <div className="col col--4">
                            <h2>💻 软件开发与 API</h2>
                            <p>通过 API 和参数系统对机器人进行进阶配置和二次开发，实现复杂的业务逻辑控制。</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><Link to="/docs/system-settings/parameter-system/">• 参数系统配置</Link></li>
                                <li><Link href="https://autoxingtech.github.io/axbot_rest_book/">• REST API 文档 →</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
