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
            description="Robot documentation - installation, diagnostics, and troubleshooting">
            <HomepageHeader />
            <main>
                <div className="container" style={{ padding: '2rem' }}>
                    <div className="row">
                        <div className="col col--4">
                            <h2>📦 RK3588 Powerbox</h2>
                            <p>Introduction and advantages of the RK3588 Powerbox solution.</p>
                            <Link to="/docs/hardware-installation/rk3588-powerbox/">Learn More →</Link>
                        </div>
                        <div className="col col--4">
                            <h2>🛠️ Platform Upgrade</h2>
                            <p>Guide for upgrading from Raspberry Pi to the Powerbox platform.</p>
                            <Link to="/docs/hardware-installation/raspberry-pi-to-powerbox-upgrade/">Upgrade Guide →</Link>
                        </div>
                        <div className="col col--4">
                            <h2>🌐 API Reference</h2>
                            <p>Explore our REST API documentation.</p>
                            <Link href="https://autoxingtech.github.io/axbot_rest_book/">Autoxing Robot REST API →</Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
