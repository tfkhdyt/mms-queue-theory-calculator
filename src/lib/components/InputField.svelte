<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	export let id: string;
	export let label: string;
	export let state: Writable<number>;
	export let errorMessage = '';
</script>

<div class="mb-3">
	<div class="flex flex-wrap items-baseline gap-1">
		<label for={id} class="font-medium text-gray-300">{label}</label>
		{#if errorMessage}
			<span class="text-sm font-medium italic text-red-500" transition:fade={{ duration: 250 }}
				>{errorMessage}</span
			>
		{/if}
	</div>
	<div class="mt-2">
		<input
			bind:value={$state}
			type="number"
			required
			min={1}
			{id}
			class={`w-full rounded-lg border-gray-800/50 bg-gray-800/50 p-4 text-gray-300 transition focus:scale-105 focus:shadow-xl focus:ring-2 ${
				errorMessage ? 'focus:border-red-500 focus:ring-red-500' : ''
			}`}
			placeholder={label}
		/>
	</div>
</div>
