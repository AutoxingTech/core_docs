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
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Get Started
                    </Link>
                </div>
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
                        <div className="col col--6">
                            <h2>📦 Hardware Installation</h2>
                            <p>Guides for installing new hardware components.</p>
                            <Link to="/docs/hardware-installation/getting-started">View Guides →</Link>
                        </div>
                        <div className="col col--6">
                            <h2>🔧 Troubleshooting</h2>
                            <p>Diagnose and fix common problems.</p>
                            <Link to="/docs/troubleshooting/common-issues">View Guides →</Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
