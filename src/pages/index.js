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
                <div className="container" style={{ padding: '2rem' }}>
                    <div className="row">
                        <div className="col col--4">
                            <h2>📦 RK3588 Powerbox 控制器</h2>
                            <p>介绍 RK3588 Powerbox 方案及其优势。</p>
                            <Link to="/docs/hardware-installation/rk3588-powerbox/">了解更多 →</Link>
                        </div>
                        <div className="col col--4">
                            <h2>🛠️ 平台升级</h2>
                            <p>指导如何从树莓派平台升级到 Powerbox 平台。</p>
                            <Link to="/docs/hardware-installation/raspberry-pi-to-powerbox-upgrade/">升级指南 →</Link>
                        </div>
                        <div className="col col--4">
                            <h2>🌐 API 参考</h2>
                            <p>浏览我们的 REST API 文档。</p>
                            <Link href="https://autoxingtech.github.io/axbot_rest_book/">Autoxing 机器人 REST API →</Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
