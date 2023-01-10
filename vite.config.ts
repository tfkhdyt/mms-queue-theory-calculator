import { sveltekit } from '@sveltejs/kit/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import type { UserConfig, PluginOption } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		visualizer({
			emitFile: true,
			filename: 'stats.html'
		}) as PluginOption
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
