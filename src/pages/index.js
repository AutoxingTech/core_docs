import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const HARDWARE_PRODUCTS = [
    {
        badge: '导航算力核心',
        model: 'BBox V1 导航盒',
        title: '自主定位与导航主控单元',
        desc: '集成激光雷达、IMU 与轮速计融合算法接口，提供标准机器人控制协议与外设接入。',
        specs: ['多传感器融合', '工业级接口', '即插即用'],
        link: '/docs/hardware-specifications/bbox-v1/',
        accent: 'blue',
    },
    {
        badge: '旗舰算力架构',
        model: 'RK3588 + PowerBox',
        title: '新一代算力盒与电源盒组合方案',
        desc: '8 核 64 位架构搭配 6 TOPS NPU 算力，相比传统树莓派架构大幅提升建图、避障与并发处理性能。',
        specs: ['RK3588 8核', '独立电源管理', '高可靠连接'],
        link: '/docs/hardware-installation/rk3588-powerbox/',
        accent: 'indigo',
    },
    {
        badge: '智能电源管理 · 24V',
        model: 'Power Box 24V',
        title: '24V 机器人电源控制盒',
        desc: '集成软开关控制、急停回路、充电管理、过流短路保护及多路受控电源分配端子。',
        specs: ['20~30V DC', '短路保护', '多路分流'],
        link: '/docs/hardware-specifications/power-box/',
        accent: 'cyan',
    },
    {
        badge: '大功率动力平台 · 48V',
        model: 'Power Box 48V',
        title: '48V 大功率电源控制盒',
        desc: '面向重载与高功率底盘设计，具备完善的电压监测、蜂鸣器状态诊断码与大电流输出能力。',
        specs: ['48V 平台', '蜂鸣器告警', '重载底盘适配'],
        link: '/docs/hardware-specifications/power-box-48v/',
        accent: 'sky',
    },
    {
        badge: '高精度姿态传感',
        model: 'AX-IN42688-U',
        title: '工业级六轴 IMU 惯导模块',
        desc: '100Hz 高频输出三轴加速度与三轴角速度，支持硬件级上位机时间同步与 Modbus CRC16 校验。',
        specs: ['100Hz 采样', '时间同步', 'CRC16 校验'],
        link: '/docs/hardware-specifications/imu/',
        accent: 'teal',
    },
    {
        badge: '物联网与门控协同',
        model: 'ESP-NOW Beacon',
        title: '无线门控与到达声光通知器',
        desc: '基于低延迟无线通信协议，实现机器人自动过门联动控制及到达目标点时的灯光音乐提醒。',
        specs: ['自动门联动', '声光提示', '低延迟无线'],
        link: '/docs/hardware-specifications/esp-beacon/',
        accent: 'violet',
    },
];

const WORKFLOW_STEPS = [
    {
        step: '01',
        phase: '硬件部署与升级',
        title: '算力平台安装与电气接线',
        desc: '完成核心算力盒、24V/48V 电源控制盒及 WiFi 双天线的规范安装，或将旧版树莓派平台无缝升级至新架构。',
        links: [
            { label: 'RK3588 + 电源盒方案介绍', to: '/docs/hardware-installation/rk3588-powerbox/' },
            { label: '树莓派平台升级至算力盒指南', to: '/docs/hardware-installation/raspberry-pi-to-powerbox-upgrade/' },
            { label: 'WiFi 天线规范安装标准', to: '/docs/system-settings/wifi-antenna-installation/' },
            { label: '机器人 WiFi 模块与认证说明', to: '/docs/hardware-specifications/wifi-certification/' },
        ],
    },
    {
        step: '02',
        phase: '传感器标定与场地建图',
        title: '精密校准与大场景高精建图',
        desc: '对激光雷达与 IMU 进行外参及零偏矫正，运用大面积建图技巧或分块建图拼接方案完成复杂场景部署。',
        links: [
            { label: '激光雷达外参校准指南', to: '/docs/calibration/lidar-calibration/' },
            { label: 'IMU 惯导误差矫正指南', to: '/docs/calibration/imu-correction/' },
            { label: '绘制大面积地图的核心技巧', to: '/docs/data-collection/tips-for-mapping-large-area/' },
            { label: '分块建图与地图合并操作', to: '/docs/data-collection/piece-by-piece-mapping/' },
        ],
    },
    {
        step: '03',
        phase: '系统调优与网络配置',
        title: '核心参数定制与漫游网络优化',
        desc: '深入理解机器人三层参数系统（默认值/类型/覆盖值），配置企业级多 AP 无线快速漫游（802.11k/v/r）。',
        links: [
            { label: '机器人核心参数系统详解', to: '/docs/system-settings/parameter-system/' },
            { label: '无线网络快速漫游配置指南', to: '/docs/system-settings/wifi-fast-roaming/' },
        ],
    },
    {
        step: '04',
        phase: '故障诊断与数据运维',
        title: '现场快速排障与运行数据管理',
        desc: '基于蜂鸣器报警码、端子导通检测快速定位电源及外设短路故障，了解底盘本地业务数据与诊断日志规范。',
        links: [
            { label: '电源控制盒常见故障排查', to: '/docs/troubleshooting/power-box/' },
            { label: '底盘数据收集、存储与隐私说明', to: '/docs/data-collection/' },
        ],
    },
];

const QUICK_DIAGNOSTICS = [
    {
        symptom: '按下软开关后机器人完全不开机？',
        cause: '排查空气开关、6P 按钮线导通、XT60 输入电压（20~30V）及外设短路保护。',
        to: '/docs/troubleshooting/power-box/#问题1按下软开关不开机',
        tag: '电源排障',
    },
    {
        symptom: '开机后听到 5 秒长鸣随后自动关机？',
        cause: '触发电源盒短路保护，通过拔除 2x4P 动力输出端子快速定位短路轮毂或顶升机构。',
        to: '/docs/troubleshooting/power-box/#问题2按下软开关蜂鸣一声开机然后听到一声-5-秒的长鸣然后自动关机',
        tag: '短路保护',
    },
    {
        symptom: '运动或震动过程中出现不规律意外断电？',
        cause: '检查 XT60 端子插针缝隙是否过窄导致接触不良，或空气开关过流跳闸。',
        to: '/docs/troubleshooting/power-box/#问题3不规律的意外断电',
        tag: '硬件接触',
    },
    {
        symptom: '超大厂房或长走廊建图出现重影与闭环偏差？',
        cause: '掌握回路闭合路径规划、高反光区域处理与分块建图合并策略。',
        to: '/docs/data-collection/tips-for-mapping-large-area/',
        tag: '建图优化',
    },
];

function HeroSection() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={styles.hero}>
            <div className={styles.heroGridBg} aria-hidden="true" />
            <div className={styles.heroGlowLeft} aria-hidden="true" />
            <div className={styles.heroGlowRight} aria-hidden="true" />

            <div className="container">
                <div className={styles.heroInner}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <span className={styles.heroBadgeDot} />
                            <span>AutoXing Robotics · 硬件工程与系统技术文档库</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            {siteConfig.title}
                        </h1>
                        <p className={styles.heroSubtitle}>
                            面向景行慧动机器人研发、交付与运维工程师的一站式技术中心。涵盖
                            <strong> 核心硬件规格书</strong>、<strong>RK3588 算力升级</strong>、
                            <strong> 激光雷达/IMU 标定</strong>、<strong>大场景建图</strong> 及
                            <strong> 电气故障诊断手册</strong>。
                        </p>

                        <div className={styles.heroActions}>
                            <Link className={styles.primaryBtn} to="/docs/intro">
                                <span>浏览完整文档目录</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link className={styles.secondaryBtn} to="/docs/troubleshooting/power-box/">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                                <span>现场故障速查</span>
                            </Link>
                            <Link
                                className={styles.ghostBtn}
                                href="https://autoxingtech.github.io/axbot_rest_book/">
                                <span>REST API 手册</span>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </Link>
                        </div>

                        <div className={styles.heroMetrics}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricValue}>6 款</span>
                                <span className={styles.metricLabel}>核心自研硬件规格书</span>
                            </div>
                            <div className={styles.metricDivider} />
                            <div className={styles.metricItem}>
                                <span className={styles.metricValue}>100 Hz</span>
                                <span className={styles.metricLabel}>高精度六轴惯导同步</span>
                            </div>
                            <div className={styles.metricDivider} />
                            <div className={styles.metricItem}>
                                <span className={styles.metricValue}>24V / 48V</span>
                                <span className={styles.metricLabel}>双电压智能电源平台</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Architectural Visual Diagram */}
                    <div className={styles.heroVisual}>
                        <div className={styles.archCard}>
                            <div className={styles.archHeader}>
                                <div className={styles.archDots}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <span className={styles.archTitle}>AX-ROBOT SYSTEM ARCHITECTURE</span>
                                <span className={styles.archStatus}>ONLINE</span>
                            </div>

                            <div className={styles.archBody}>
                                <Link to="/docs/hardware-installation/rk3588-powerbox/" className={styles.archNodePrimary}>
                                    <div className={styles.archNodeIcon}>CPU</div>
                                    <div>
                                        <div className={styles.archNodeName}>RK3588 算力盒 / BBox 导航盒</div>
                                        <div className={styles.archNodeSub}>SLAM 建图 · 路径规划 · 参数系统 · REST API</div>
                                    </div>
                                </Link>

                                <div className={styles.archBus}>
                                    <span>UART / CAN / Ethernet / Power Bus</span>
                                </div>

                                <div className={styles.archGrid}>
                                    <Link to="/docs/hardware-specifications/power-box/" className={styles.archModule}>
                                        <span className={styles.archModuleTag}>PWR</span>
                                        <strong>24V / 48V 电源盒</strong>
                                        <small>软开关 · 短路保护 · 分流</small>
                                    </Link>
                                    <Link to="/docs/hardware-specifications/imu/" className={styles.archModule}>
                                        <span className={styles.archModuleTag}>IMU</span>
                                        <strong>AX-IN42688-U</strong>
                                        <small>六轴姿态 · 时间戳同步</small>
                                    </Link>
                                    <Link to="/docs/calibration/lidar-calibration/" className={styles.archModule}>
                                        <span className={styles.archModuleTag}>LIDAR</span>
                                        <strong>激光雷达与建图</strong>
                                        <small>外参校准 · 分块拼接</small>
                                    </Link>
                                    <Link to="/docs/hardware-specifications/esp-beacon/" className={styles.archModule}>
                                        <span className={styles.archModuleTag}>IOT</span>
                                        <strong>ESP 门控与无线</strong>
                                        <small>自动门联动 · 快速漫游</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function HardwareMatrixSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div>
                        <span className={styles.sectionEyebrow}>HARDWARE SPECIFICATIONS</span>
                        <h2 className={styles.sectionTitle}>核心硬件规格与接口定义</h2>
                    </div>
                    <p className={styles.sectionDesc}>
                        查阅机器人控制盒、电源管理平台、惯导传感器及无线门控模块的技术参数、端子引脚定义与安装尺寸。
                    </p>
                </div>

                <div className={styles.hardwareGrid}>
                    {HARDWARE_PRODUCTS.map((item) => (
                        <Link
                            key={item.model}
                            to={item.link}
                            className={styles.hardwareCard}
                            data-accent={item.accent}>
                            <div className={styles.hardwareCardTop}>
                                <span className={styles.hardwareBadge}>{item.badge}</span>
                                <span className={styles.hardwareArrow}>→</span>
                            </div>
                            <div className={styles.hardwareModel}>{item.model}</div>
                            <h3 className={styles.hardwareTitle}>{item.title}</h3>
                            <p className={styles.hardwareDesc}>{item.desc}</p>
                            <div className={styles.hardwareTags}>
                                {item.specs.map((spec) => (
                                    <span key={spec} className={styles.hardwareTag}>
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WorkflowSection() {
    return (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div>
                        <span className={styles.sectionEyebrow}>ENGINEERING WORKFLOW</span>
                        <h2 className={styles.sectionTitle}>按机器人工程生命周期查阅</h2>
                    </div>
                    <p className={styles.sectionDesc}>
                        从装机接线、传感器校准、大场景地图绘制到网络漫游调优与现场维护的全流程技术指南。
                    </p>
                </div>

                <div className={styles.workflowGrid}>
                    {WORKFLOW_STEPS.map((group) => (
                        <div key={group.step} className={styles.workflowCard}>
                            <div className={styles.workflowHeader}>
                                <span className={styles.workflowStepNum}>{group.step}</span>
                                <span className={styles.workflowPhase}>{group.phase}</span>
                            </div>
                            <h3 className={styles.workflowTitle}>{group.title}</h3>
                            <p className={styles.workflowDesc}>{group.desc}</p>
                            <ul className={styles.workflowLinks}>
                                {group.links.map((link) => (
                                    <li key={link.to}>
                                        <Link to={link.to} className={styles.workflowLink}>
                                            <span className={styles.workflowLinkDot} />
                                            <span>{link.label}</span>
                                            <span className={styles.workflowLinkChevron}>›</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DiagnosticsSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.diagBanner}>
                    <div className={styles.diagIntro}>
                        <span className={styles.diagEyebrow}>FIELD TROUBLESHOOTING</span>
                        <h2 className={styles.diagTitle}>现场高频问题速查台</h2>
                        <p className={styles.diagDesc}>
                            遇到机器人不开机、蜂鸣器长鸣告警、震动断电或长走廊建图重影？直接直达对应的标准化排查步骤。
                        </p>
                        <div className={styles.diagCtaGroup}>
                            <Link to="/docs/troubleshooting/power-box/" className={styles.diagPrimaryLink}>
                                进入电源盒故障排查手册 →
                            </Link>
                            <Link to="/docs/data-collection/" className={styles.diagSecondaryLink}>
                                查看底盘诊断日志与数据说明
                            </Link>
                        </div>
                    </div>

                    <div className={styles.diagList}>
                        {QUICK_DIAGNOSTICS.map((item) => (
                            <Link key={item.symptom} to={item.to} className={styles.diagItem}>
                                <div className={styles.diagItemHeader}>
                                    <span className={styles.diagTag}>{item.tag}</span>
                                    <span className={styles.diagGo}>查看排查方案 →</span>
                                </div>
                                <div className={styles.diagSymptom}>{item.symptom}</div>
                                <div className={styles.diagCause}>{item.cause}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="景行慧动机器人文档中心 - 硬件规格书、RK3588算力盒升级、雷达与IMU校准、大面积建图技巧及故障排查指南">
            <HeroSection />
            <main>
                <HardwareMatrixSection />
                <WorkflowSection />
                <DiagnosticsSection />
            </main>
        </Layout>
    );
}
