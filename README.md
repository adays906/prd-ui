# PrdUI

基于 Vue 3.5 + TypeScript 的现代化 UI 组件库，支持 pnpm 包管理，适用于 Node.js 18+ 环境。

## 特性

- ✅ 基于 Vue 3.5 + TypeScript 开发
- ✅ 支持 pnpm 包管理
- ✅ 支持全量导入和按需导入
- ✅ 支持主题定制
- ✅ 完善的类型定义
- ✅ 现代化的设计风格
- ✅ 响应式设计
- ✅ 支持 Tree Shaking

## 安装

```bash
# 使用 pnpm 安装
pnpm add prd-ui

# 使用 npm 安装
npm install prd-ui

# 使用 yarn 安装
yarn add prd-ui
```

## 快速开始

### 全量导入

```js
// main.js
import { createApp } from 'vue';
import PrdUI from 'prd-ui';
import 'prd-ui/lib/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(PrdUI);
app.mount('#app');
```

### 按需导入

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
```

```vue
<!-- App.vue -->
<template>
	<prd-button type="primary">Primary Button</prd-button>
</template>

<script setup>
import { Button as PrdButton } from 'prd-ui';
import 'prd-ui/components/Button/style/index.css';
</script>
```

## 组件列表

| 组件名 | 描述     | 状态      |
| ------ | -------- | --------- |
| Button | 按钮组件 | ✅ 已完成 |
| -      | -        | -         |
| -      | -        | -         |

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 开发

### 启动开发服务器

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 访问地址
# http://localhost:5173/
```

### 构建和测试

```bash
# 构建库（CommonJS）
pnpm run build:lib

# 构建 ES 模块
pnpm run build:es

# 类型检查
pnpm run typecheck

# 代码检查
pnpm run lint
```

## 项目结构

```
prd-ui/
├── components/          # 组件目录
│   ├── Button/         # Button组件
│   ├── style/          # 全局样式
│   ├── _util/          # 工具函数
│   └── index.ts        # 组件库入口
├── hooks/              # 自定义hooks
├── scripts/            # 构建脚本
├── tests/              # 测试目录
├── index.html          # 开发测试页面
├── main.ts             # 开发测试入口
├── App.vue             # 开发测试组件
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript配置
├── vite.config.ts      # Vite配置
└── README.md           # 项目文档
```

## 贡献

欢迎提交 Issue 和 Pull Request！

请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解更多。

## 许可证

MIT License

## 作者

ZhangHF (adays@foxmail.com)
