---
sidebar_position: 1
---

# 2.14 版本更新说明

本说明列出 2.14 相对 2.13 的主要功能变化。

## 对外接口 API

1. **新增多项 HTTP 接口** - [地图图片](https://autoxingtech.github.io/axbot_rest_book/zh/reference/services-mapping.html#slam-map-image)、[地图叠加](https://autoxingtech.github.io/axbot_rest_book/zh/reference/services-mapping.html#map-overlays)（可通行区 / 禁行区 / 虚拟墙，支持读写）、[禁行区信息](https://autoxingtech.github.io/axbot_rest_book/zh/reference/services-mapping.html#traffic-info)（读写）、[门架零点标定](https://autoxingtech.github.io/axbot_rest_book/zh/reference/services-calibration.html#calibrate-mast-tick-base)、[IMU 陀螺零偏清除](https://autoxingtech.github.io/axbot_rest_book/zh/reference/services-calibration.html#clear-gyro-scale)、[ROS 话题列表](https://autoxingtech.github.io/axbot_rest_book/zh/reference/services-system.html#published-topic-names)。
2. **新增实时推送通道** - 语义点云、[深度相机图像与点云](https://autoxingtech.github.io/axbot_rest_book/zh/reference/websocket-perception.html#depth-camera-images)（含强度）、地形扫描、[货架状态](https://autoxingtech.github.io/axbot_rest_book/zh/reference/websocket-cargo.html#detected-rack-states)、[拖挂状态](https://autoxingtech.github.io/axbot_rest_book/zh/reference/websocket-cargo.html#detected-trailer)、4G 网络状态。
3. **地图与录像下载支持大文件与断点续传** - 大文件不再中断或超时。
4. **新增录包流式回放接口** - 新增 [数据包流式回放 API](https://autoxingtech.github.io/axbot_rest_book/zh/reference/bags.html#bag-streaming-api)：先取整包的消息索引，再按段下发录包里的原始消息字节，不再逐条转 JSON；任何话题类型都能回放，新增消息类型不必再补转换器。
5. **新增位姿查询与定位数据推送** - 提供[整车与拖挂位姿查询](https://autoxingtech.github.io/axbot_rest_book/zh/reference/services-localization.html#query-pose)；[GNSS/INS 数据推送](https://autoxingtech.github.io/axbot_rest_book/zh/reference/websocket-environment.html#devpvt)增加经纬度，[/imu_state](https://autoxingtech.github.io/axbot_rest_book/zh/reference/websocket-chassis.html#imu-state) 增加陀螺零偏与零偏目标值。
6. **新增激光位姿标定接口** - 支持顶置、前、后激光的位姿标定，可由上位机直接触发。
7. **新增装卸与拖钩服务端点** - 支持[装载 / 卸载货物](https://autoxingtech.github.io/axbot_rest_book/zh/reference/services-cargo.html#load-unload-cargo)、[清除拖钩故障](https://autoxingtech.github.io/axbot_rest_book/zh/reference/services-cargo.html#clear-towing-hook-error)的触发接口。

<BugFixes>

- 大地图下载导致服务崩溃，改为分段流式返回。
- 自动增量保存后改动原有地图文件。
- 建图结束恢复地图时的坐标与文件竞争问题。

</BugFixes>

## 导航与运动控制

1. **图规划支持原地旋转** - 起步与到点均可在允许区域内原地转向，普通节点也可开启；窄通道、贴边停放等场景不必再靠一小段行驶完成转向。
2. **支持无转向节点与路段屏蔽** - 地图节点可标记为不可转向；指定路段可被屏蔽，规划时自动绕开（施工、禁行等临时调整）。
3. **新增地图变体** - 同一张地图可维护多套参数实例并按场景切换，例如拖挂车带挂车与不带挂车时，匝道生成范围、是否启用自转区域分别配置。
4. **新增地图级货架状态 `/map_rack_states`** - 将沿途识别到的货架占用状态聚合为全图、带时效与持久化的状态表；调度与任务分配无需机器人到过现场即可查询。
5. **减速区内按行驶方向避障** - 在路口等减速区域内，按当前行驶方向检测前方扇区内的动态障碍物：6 米内限速减半，2 米内停车。
6. **交通管制增加离群点过滤** - 动态障碍提取加入 DBSCAN 离群过滤，降低噪点引起的误判。
7. **货架区取货不再绕行** - 货架区内机器人沿巷道直线深入，穿过空货位直达最深处取货；通道被占用时原地等待，不再绕行避让。
8. **图模式下仅在等待点让行** - 图模式下取消动态让行，只在地图划定的等待点让行。
9. **新增全向对接与拖挂运动学** - 支持全向底盘的对接路径生成，并补充拖挂车运动学模型。
10. **图规划支持允许倒车的路段** - 部分路段可配置为允许倒车行驶。

<BugFixes>

- 卸货目标朝向错误（货架动态检测关闭时）。
- 区域取货选中身后停放的库位，而非前方装载的库位。
- 通道被堵时每 6 秒才放弃一个库位，改为一次性放弃整条车道。
- 电梯口门还挡着就绕行，改为确认真正卡住后才绕行。
- 图规划起点选取错误导致规划结果异常。
- Hybrid A* 规划失败与 costmap 分辨率错误。

</BugFixes>

## SLAM

1. **新增 3D 激光建图与定位** - 可根据场景启用 3D 模式，建图与定位分别提供对应的 3D 配置；3D 地图可在上位机正常显示与浏览。
2. **正式支持 RTK 参与全局定位** - RTK 处于固定解时计入定位可靠性判定，减少环境变化引发的「定位丢失」误报。
3. **建图内存占用大幅降低** - 子图与节点点云不再常驻内存，内存占用不再随地图规模持续增长。该机制对所有建图模式生效。
4. **新增建图正交对齐（默认关闭）** - 建图过程中自动将地图对齐到坐标轴，避免建好的地图整体斜置，减少人工摆正。
5. **增量地图支持按子图 ID 删除** - 此前仅支持按时间范围、位置或全部删除，现可指定需要删除的子图。
6. **新增地图出图与建图收尾服务** - `/slam/get_image` 按指定分辨率输出地图图片；`/slam/finish_mapping` 完成建图收尾。上位机可直接调用，无需外部脚本拼接流程。
7. **优化大地图显示性能** - 子图查询移至独立线程，浏览大地图时不再阻塞主流程。

<BugFixes>
- 3D 扫描与强度栅格混合时画面偏黑。
- 部分设备（`lf_lidar_node` / `rb_lidar_node`）取不到激光量程，量程相关参数失效。
</BugFixes>

## 平台

1. **新增 CAN-FD 总线支持** - 适配 CAN-FD 控制器，补齐位时序参数并修正接口启动配置。
2. **新增 TF 卡扩展存储** - 插入符合要求的 TF 卡后自动挂载（含定期文件系统检查）；挂载成功后，循环录包与视频录制自动切换到卡上，录制容量按卡容量分配，无需手工配置。
3. **新增机型** - 新增拖挂 `tug` / `tug_heavy`。
4. **设置项按机型分层** - 叉车、拖挂等机型的专属设置项从公共配置拆到机型层，配置界面只显示与本机型相关的项，不再出现与本机型无关的配置。详见 [参数系统](../../system-settings/parameter-system/index.md)。
5. **新增深度相机支持** - 支持奥比中光（orbbec）与麦尔威视（MRDVS）下视相机，可按机型选择启用的相机。
6. **地图导入改进** - 兼容新旧两种地图配置格式，地图文件独立存放，不再存入数据库。
7. **叉车软保险丝模型修正** - 按 I²t 重新建模，修正持续推顶不熔断与顶升瞬间误熔断两类问题。

<BugFixes>

- BBox 上 IMU 位姿被错误旋转 90°，同时恢复此前被误转的标定。IMU 标定方法见 [IMU 矫正](../../calibration/imu-correction/index.md)。
- `/imu/model="tcp_sensor"` 被错误改写。
- CAN 接口启动缺少 `restart-ms 100`，接口起不来。
- CM5 上的 OPI4 残留导致热点缺失。

</BugFixes>

## 感知

1. **新增堆高机货位占用检测** - 在车体坐标系下用多帧确认货位是否被占用，避免车身倾斜导致的误判。
2. **新增放货位确认（货架腿匹配）** - 用 2D 激光匹配货架腿，与占据栅格结果并行判断放货位是否为空，默认用于放货任务。
3. **新增反光板精定位充电桩** - 用充电桩反光板点云修正位姿，并对抖动与定位失败的结果做剔除和平滑。
4. **支持拖挂取放货** - 货架区支持拖挂取放，拖挂识别锚点改为前缘中心。
5. **深度相机新增鱼眼与下视支持** - 点云转换支持鱼眼镜头，支持麦尔威视下视相机；地面检测过滤机器人高度以上的点，减少高处结构误判。
6. **深度相机标定支持指定相机** - 标定时可只处理请求中列出的相机，并支持麦尔威视（MRDVS）下视相机。

<BugFixes>

- 只有对角货架腿可见时，货架跟踪被噪声带偏。
- 升降过程中托盘坐标系错误。
- 深度相机零值像素被中值滤波丢弃，点云出现空洞。
- 光学里程计在静止时被误判为运动，改用轮组硬件的运动状态判断静止。

</BugFixes>

## 传感器驱动

1. **新增 3D 激光雷达支持** - 支持万集 722H、蓝海（Pacecat）M300 等型号；提供雨滴等稀疏噪点去除、按环号与量程过滤，并可从 3D 点云中提取指定环作为 2D 扫描使用。
2. **新增 RTK 定位节点** - 支持华测（chcnav）RTK 设备，为室外全局定位提供数据源。
3. **新增 2D 激光雷达型号** - 支持蓝海（Pacecat）LDS-E200-E / LDS-E200-R。
4. **新增 IMU 硬件支持** - 支持 UART 接口 IMU（带时间同步）与 ICM45686（I2C）。
5. **雷达标定支持顶置 3D 雷达** - 标定工具支持顶置雷达的 3D 位姿标定，并提供单墙标定模式。标定流程见 [激光雷达标定](../../calibration/lidar-calibration/index.md)。
6. **电池信息改进** - 支持直接上报 BMS 的 SOC；电池异常时可切换为模拟电量继续运行。

<BugFixes>

- 深度相机异常像素在 3.4 米处被当成墙体。
- 称重读数有效却返回 0。
- RTK（chcnav）TCP 断连后卡死。
- 启动瞬间误判为充电中且不会自行恢复。

</BugFixes>

## 轮控

1. **新增阿克曼转向底盘支持** - 适配前轮转向车型。
2. **叉车控制安全改进** - 新增升降超时保护（默认关闭，地牛车型可开启）；急停检测改用控制器互锁信号，急停释放前需确认车轮已停；可屏蔽指定的驱动故障码。
3. **新增行驶减速比配置** - 可按机型配置行驶减速比，使行驶速度与里程换算更准确。

<BugFixes>

- 障碍物位于车体后方时速度控制异常。
- 叉车升降在速度为 0 时无响应。
- 转向角在临界角附近来回跳变。
- 屏蔽 02A016 时连带屏蔽了转向错误与升降超时告警。

</BugFixes>

## 地图与避障栅格

1. **新增临时地图叠加服务** - 可在不重绘静态地图的情况下临时修改可通行区、禁行区与虚拟墙，用于临时管制；重新设置地图后失效。
2. **避障栅格支持以车头中心为锚点** - 小尺寸车型可把避障栅格锚点设为车头中心，避障范围与实际车体更贴合。
3. **地图缩放支持双线性方式** - 缩小地图时可选择双线性缩放，显示更平滑。
4. **地图新增三类区域** - 不转身区、自转区与卫星失效区，可在图上标注并按标注执行。
5. **障碍衰减不再视为可通行** - 概率栅格中的障碍衰减后只回落到「未知」，不会变成自由空间。

<BugFixes>

- 货架开口侧的 U 形虚拟障碍朝向错误、尺寸不符。
- 堆高作业时目标处激光障碍清除不到中置 POI。

</BugFixes>

## 告警

1. **新增多项故障告警** - 覆盖蓝海（Pacecat）激光雷达通用故障、RTK 无数据与频率异常、顶升状态异常、底座 CAN 帧超时，故障可上报至监控与运维界面。

## 通信与基础库

1. **新增 axtopic 命令行工具** - 支持 `echo` / `hz` / `bw` / `list` / `type` 子命令，替代原 Python 版本。
2. **axlaunch 支持子命令与运行状态** - 新增 `status`、`restart` 与 `list --json`；列表显示 RUNNING / STOPPED / DEAD 状态。
3. **录包支持录制全部参数** - 配置 `params: __all__` 后录包包含全部 ROS 参数，回放可复现现场配置。
4. **录包写入容量上限与自动清理** - 可为写入路径设置容量上限，超限自动清理，避免写满磁盘。

## 升级注意事项

:::warning 升级前请确认

1. **地图导入后文件独立存放**，不再存入数据库；依赖从数据库读取地图的流程需调整。
2. **启用 TF 卡后录制路径变更**：录包与视频文件写入卡内目录，依赖原路径的脚本或流程需同步调整。
3. **3D 模式需显式启用**，未启用时行为与 2.13 一致。
4. **建图默认不再常驻子图与点云数据**，依赖这些数据常驻的处理流程需确认。
5. **禾赛 JT128 需完成逐台角度标定**才能启动，未标定时节点会拒绝启动。

:::
