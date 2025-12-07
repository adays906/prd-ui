<template>
	<div class="app-container">
		<aside class="sidebar">
			<div class="sidebar-header">
				<h1>PrdUI 组件库</h1>
			</div>
			<nav class="sidebar-nav">
				<ul>
					<li v-for="route in routes" :key="route.path">
						<router-link :to="route.path" class="nav-link">
							{{ route.meta.title }}
						</router-link>
					</li>
				</ul>
			</nav>
		</aside>

		<main class="main-content">
			<router-view />
		</main>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = router.getRoutes().filter((route) => route.path !== '/');
</script>

<style lang="less">
.app-container {
	display: flex;
	min-height: 100vh;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	background-color: #f5f5f5;
}

.sidebar {
	width: 240px;
	background-color: #fff;
	border-right: 1px solid #f0f0f0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

	.sidebar-header {
		padding: 20px;
		border-bottom: 1px solid #f0f0f0;

		h1 {
			margin: 0;
			font-size: 20px;
			font-weight: 600;
			color: #262626;
		}
	}

	.sidebar-nav {
		padding: 12px 0;

		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}

		.nav-link {
			display: block;
			padding: 12px 20px;
			color: #595959;
			text-decoration: none;
			font-size: 14px;
			transition: all 0.3s;
			border-left: 3px solid transparent;

			&:hover {
				background-color: #f5f5f5;
				color: #1890ff;
			}

			&.router-link-active {
				background-color: #e6f7ff;
				color: #1890ff;
				border-left-color: #1890ff;
			}
		}
	}
}

.main-content {
	flex: 1;
	padding: 24px;
	overflow-y: auto;

	> div {
		background-color: #fff;
		border-radius: 8px;
		padding: 24px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
}
</style>
