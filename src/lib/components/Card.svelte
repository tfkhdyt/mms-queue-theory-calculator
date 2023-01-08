<script lang="ts">
	import { po } from '$stores/output';

	import Form from './Form.svelte';
	import Result from './Result.svelte';

	$: isResult = Boolean($po);
</script>

<main>
	<div
		class={`bg-slate-800/50 m-6 p-8 md:px-10 md:py-8 rounded-xl backdrop-blur shadow-lg grid grid-cols-1 gap-16 ${
			isResult && 'lg:grid-cols-2'
		}`}
	>
		<div>
			<h1 class="text-gray-300 text-xl md:text-3xl font-bold mb-4 text-center">
				M/M/s Queue Theory Calculator
			</h1>
			<Form />
		</div>

		{#if isResult}
			<Result />
		{/if}
	</div>
	<p class="text-center font-light text-lg mb-6">
		Created by <a
			class="link link-underline link-underline-black font-medium"
			href="https://tfkhdyt.my.id"
			rel="noreferrer"
			target="_blank"
			title="NIM: 301200032">tfkhdyt</a
		>
	</p>
</main>

<style>
	.link-underline {
		padding-bottom: 5px;
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.25s ease-in-out;
		z-index: 99;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#dc2626, #dc2626);
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%;
	}
</style>
