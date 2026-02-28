---
sidebar_position: 2
---

# WIFI 快速漫游配置

在机器人巡逻或跨区域运动的场景中，设备会不断从一个 WIFI 接入点（AP）移动到另一个 AP 的覆盖范围内。如果没有快速漫游支持，每次切换 AP 时都会出现明显的断线重连延迟，影响远程控制和数据上报的实时性。

<details>
<summary>什么是 802.11 k 和 v？</summary>

:::note 什么是 802.11 k 和 v？

### 802.11 k — "告诉设备附近有哪些AP"

想象你在一个大楼里用手机打电话，走着走着信号越来越差。802.11 k 的作用是让当前连接的路由器**主动告诉你的设备**："附近还有哪些路由器，信号分别有多强。" 这样设备在信号变差之前就已经掌握了备选 AP 的清单，可以提前做好切换准备，而不是等到完全断线才开始盲目搜索。

### 802.11 v — "让路由器帮你决定什么时候换"

802.11 v 的作用是让路由器可以**主动建议设备切换**到更好的 AP。相当于路由器说："你现在的信号已经很弱了，我建议你去连隔壁那台路由器。" 设备收到建议后可以迅速切换，整个过程只需几十毫秒，用户几乎感觉不到中断。

### 两者配合使用

| 协议 | 作用 | 比喻 |
|------|------|------|
| 802.11 k | 提供邻居 AP 列表 | 预先知道"下一站在哪" |
| 802.11 v | 路由器主动引导切换 | 有人帮你"指路" |

k 和 v 协同工作，能将漫游切换时间从传统的数百毫秒压缩到几十毫秒，大幅减少连接中断感。

:::

</details>

## 前提条件

要启用快速漫游，需要满足以下三个条件：

### 1. 路由器支持 802.11 k/v

网络中**每一台 AP** 都需要支持并开启 802.11 k 和 802.11 v 协议。请在路由器管理界面中确认已启用这两项功能（通常位于无线设置 > 高级选项中）。

:::tip
企业级路由器（如 Cisco、Aruba、H3C 等品牌的 AC+AP 方案）一般默认支持 802.11 k/v，消费级家用路由器则需确认是否支持。
:::

底盘内置工具支持查看：

```
$ sudo ./ap_caps
SSID                       Freq  Ch  k v r
----------------------------------------
WORLD                      5745 149  Y Y -
WORLD                      5745 149  Y Y -
WORLD                      5745 149  Y Y -
WORLD                      5745 149  Y Y -
WORLD-OFFICE               5745 149  Y Y -
WORLD-OFFICE               5745 149  Y Y -
WORLD-OFFICE               5745 149  Y Y -
WORLD-OFFICE               5745 149  Y Y -
```

### 2. 设备搭载 AX200 WIFI 模块

机器人算力盒内置 **Intel AX200** 无线网卡，原生支持 802.11 k/v/r 快速漫游协议，无需额外配置硬件。

### 3. Linux 驱动必须支持

Package Manager 必须更新到 1.0.3 以上。

直接确认驱动文件，MD5 和这个一致：

```
$ md5sum /usr/sbin/wpa_supplicant
9c6c333c6eac827299b60761899833bb
```

## 验证漫游是否生效

在机器人运动过程中，可通过以下方式确认快速漫游工作正常：

1. 使用 `iw dev wlan0 station dump` 命令查看当前连接的 AP BSSID。
2. 让机器人在两台 AP 覆盖区域边界来回运动，观察 BSSID 是否发生切换。
3. 同时用 `ping` 持续刷新延迟，快速漫游生效时切换过程中丢包数应为 0 或极少。

### 实时日志确认

默认日志级别可能不足以显示详细的漫游过程，需要将 `wpa_supplicant` 的日志级别临时调整为 **DEBUG**：

```bash
# 1. 临时开启调试日志 (无需重启服务)
sudo wpa_cli log_level DEBUG

# 2. 观察实时漫游日志，过滤关键事件
sudo journalctl -u wpa_supplicant -f | grep -E "BSS|neighbor|roam|WNM"
```

**预期的关键日志输出：**
- **收到邻居列表：** `WNM: Receive BSS Transition Management Request`
- **处理切换建议：** `WNM: Neighbor Report response received`
- **执行漫游切换：** `wlan0: Considering within-ESS reassociation` -> `wlan0: Trying to associate with [BSSID]`

:::tip
调试完成后，建议将其调回 **INFO** 级别以减少磁盘消耗：`sudo wpa_cli log_level INFO`。
:::

## 下一步

快速漫游的效果也受天线安装质量的影响。请参阅 [WIFI 天线安装规范](../wifi-antenna-installation/index.md)，确保天线位置和布线符合最佳实践。
