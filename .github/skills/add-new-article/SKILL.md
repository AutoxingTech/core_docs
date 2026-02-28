---
name: add-new-article
description: 在这个 Docusaurus 文档站点中创建新文章。当用户需要新增一篇文档、添加一个新的文章页面，或询问如何在 docs/ 目录中创建新内容时，使用此技能。
argument-hint: [文章标题] [所属分类]
---

# 新增文章指南

本文档站点使用 Docusaurus 构建，文章存放在 `docs/` 目录下。每篇文章都有独立文件夹，包含 `index.md` 主文件和 `img/` 图片目录。

## 目录结构规则

- **每篇文章对应一个独立文件夹**，放在 `docs/<分类>/` 下。
- **主文件**必须命名为 `index.md`。
- **图片**存放在该文章文件夹的 `img/` 子目录下。

```text
docs/<分类>/
└── <文章名>/
    ├── index.md
    └── img/
        ├── image1.png
        └── image2.jpg
```

现有分类目录：

- `docs/hardware-installation/` — 硬件安装
- `docs/hardware-specifications/` — 硬件规格书
- `docs/calibration/` — 设备校准
- `docs/system-settings/` — 系统配置
- `docs/data-collection/` — 数据管理
- `docs/troubleshooting/` — 故障排查

## 第一步：创建文章文件

在合适的分类目录下新建文件夹，并创建 `index.md`：

```markdown
---
sidebar_position: 1
---

# 文章标题

正文内容……
```

- `sidebar_position` 控制在同分类中的排列顺序（数字越小越靠前）。
- 标题后**必须空一行**，再开始正文内容（所有标题 `#`/`##`/`###` 后均需空行）。

## 第二步：图片规范

图片文件放入 `img/` 子目录，使用以下语法引用：

```markdown
![描述|宽度|高度|可选inline](./img/filename.png)
```

参数说明：

- 宽度/高度：数字（像素）或 `auto`，默认宽度 `600`，高度 `auto`。
- 末尾加 `|inline` 可让图片作为内联小图标显示。

示例：

```markdown
![设备正面|600](./img/front.png)
![图标|24|24|inline](./img/icon.png)
```

并排显示多张图片，使用 `<ImageRow>` 组件（内部图片用 `|auto|高度` 保证对齐）：

```markdown
<ImageRow>

![图1|auto|200](./img/image1.png)
![图2|auto|200](./img/image2.png)

</ImageRow>
```

始终使用相对路径 `./img/...` 引用图片。

## 第三步：更新 sidebars.js

在 `sidebars.js` 的对应分类的 `items` 数组中添加新文章的路径（格式：`'分类/文章文件夹名/index'`）：

```js
{
    type: 'category',
    label: '分类名称',
    // ...
    items: [
        'existing-article/index',
        '分类/新文章文件夹名/index',  // 新增这一行
    ],
},
```

文件 `sidebars.js` 位于项目根目录。

## 完整示例

新增一篇故障排查文章 `docs/troubleshooting/motor-issue/index.md`：

1. 创建文件夹和文件：

   ```
   docs/troubleshooting/motor-issue/
   ├── index.md
   └── img/
   ```

2. `index.md` 内容：

   ```markdown
   ---
   sidebar_position: 3
   ---

   # 电机故障排查

   ## 常见症状

   电机无法启动或运转异常。

   ![故障示意图|600](./img/motor-error.png)
   ```

3. 在 `sidebars.js` 的 `故障排查` 分类 `items` 中添加：
   ```js
   'troubleshooting/motor-issue/index',
   ```
