import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

/**
 * Vite配置文件
 * @author: ZhangHF adays@foxmail.com
 * @description: 配置Vite构建选项，支持开发模式、库模式和ES模块模式
 * @since: 1.0.0
 */
export default defineConfig(({ mode }) => {
	// 基础配置
	const baseConfig = {
		plugins: [vue()],
		resolve: {
			alias: {
				'@': resolve(__dirname, './components'),
				'@hooks': resolve(__dirname, './hooks'),
			},
		},
		css: {
			preprocessorOptions: {
				less: {
					additionalData: `@import './components/style/mixin.less';`,
				},
			},
		},
		server: {
			// 从环境变量读取端口，默认8022
			port: Number(process.env.VITE_PORT) || 8022,
			// 自动打开浏览器
			open: true,
			// 允许外部访问
			host: true,
		},
	};

	// 根据不同模式配置不同的构建选项
	if (mode === 'lib') {
		// 库模式构建配置（CommonJS）
		return {
			...baseConfig,
			build: {
				outDir: 'lib',
				lib: {
					entry: resolve(__dirname, './components/index.ts'),
					name: 'PrdUI',
					fileName: 'index',
					formats: ['cjs'],
				},
				rollupOptions: {
					// 排除Vue依赖，避免打包进库
					external: ['vue'],
					output: {
						globals: {
							vue: 'Vue',
						},
					},
				},
			},
		};
	} else if (mode === 'es') {
		// ES模块模式构建配置，保留模块结构
		return {
			...baseConfig,
			build: {
				outDir: 'es',
				preserveModules: true,
				lib: {
					entry: resolve(__dirname, './components/index.ts'),
					name: 'PrdUI',
					formats: ['es'],
				},
				rollupOptions: {
					// 排除Vue依赖
					external: ['vue'],
				},
			},
		};
	}

	// 开发模式配置
	return baseConfig;
});
