---
sidebar_position: 1
---

# 欢迎来到景行慧动机器人文档中心

景行慧动机器人文档中心为您提供涵盖**核心硬件规格书**、**算力平台安装升级**、**传感器标定与建图**、**系统参数与无线漫游配置**以及**现场故障排查**的完整工程指南。

:::tip 快速提示
如果您正在进行现场装机或排障，可以直接通过左侧导航栏按模块查阅，或前往 [**电源控制盒故障排查**](./troubleshooting/power-box/index.md) 快速定位硬件异常。
:::

## 硬件规格书 (Hardware Specifications)

查阅景行慧动自研机器人核心硬件平台的技术规格、机械尺寸、端子定义与通信协议：

- [**BBox V1 导航盒产品说明书**](./hardware-specifications/bbox-v1/index.md) — 导航主控盒子详细规格、接口定义与适配设备说明
- [**24V 电源控制盒说明书**](./hardware-specifications/power-box/index.md) — 24V 智能电源管理设备的规格、接线端子、软开关与急停回路说明
- [**48V 电源控制盒说明书**](./hardware-specifications/power-box-48v/index.md) — 48V 大功率电源平台的规格、端子定义与蜂鸣器状态提示码
- [**AX-IN42688-U 六轴 IMU 产品规格书**](./hardware-specifications/imu/index.md) — 100Hz 高精度惯性测量单元技术参数、UART 协议与硬件时间同步说明
- [**ESP-NOW 门控/通知器产品说明书**](./hardware-specifications/esp-beacon/index.md) — 自动门无线联动控制及到达目标点声光音乐通知模块说明
- [**机器人 WiFi 模块与认证说明**](./hardware-specifications/wifi-certification/index.md) — 机器人无线网卡模块构成、工作频段及型号核准认证信息

## 硬件安装与升级 (Hardware Installation)

算力平台架构对比及老旧平台硬件升级操作指引：

- [**RK3588 算力盒 + 电源盒方案优势介绍**](./hardware-installation/rk3588-powerbox/index.md) — 新一代旗舰算力平台与传统架构的性能、接口与可靠性全面对比
- [**树莓派平台升级至算力盒指南**](./hardware-installation/raspberry-pi-to-powerbox-upgrade/index.md) — 从树莓派老平台改造升级至新型算力盒与电源盒的分步接线与装配说明

## 设备校准与建图技巧 (Calibration & Mapping)

保障机器人高精度定位、姿态感知与复杂大场景建图质量的操作指南：

- [**激光雷达校准指南**](./calibration/lidar-calibration/index.md) — 激光雷达安装外参标定与校准步骤
- [**IMU 误差矫正指南**](./calibration/imu-correction/index.md) — 惯性测量单元零偏与安装误差矫正方法
- [**绘制大面积地图的技巧**](./data-collection/tips-for-mapping-large-area/index.md) — 大型厂房、长走廊等复杂环境下的闭环路线规划与建图质量控制
- [**分块建图与合并操作**](./data-collection/piece-by-piece-mapping/index.md) — 超大场地分区域独立建图及多地图拼接合并流程

## 系统配置与网络优化 (System & Network)

深入定制机器人运行参数并提升多 AP 环境下的无线通信稳定性：

- [**机器人核心参数系统**](./system-settings/parameter-system/index.md) — 深入理解默认值、机器人类型预设与单机覆盖值三层参数架构
- [**无线网络快速漫游配置**](./system-settings/wifi-fast-roaming/index.md) — 企业级无线网络 802.11k/v/r 快速漫游调优指南
- [**WiFi 天线规范安装**](./system-settings/wifi-antenna-installation/index.md) — 机器人双频天线选型、布置位置与驻波防护规范

## 故障排查与数据管理 (Troubleshooting & Data)

现场常见电气故障诊断流程与底盘数据合规说明：

- [**电源控制盒故障排查**](./troubleshooting/power-box/index.md) — 针对按下软开关不开机、开机 5 秒长鸣短路保护、运动中意外断电等问题的系统化排查
- [**机器人底盘的数据收集与存储**](./data-collection/index.md) — 本地业务数据、诊断调查数据与云端上报数据的分类及访问方式
