<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let id: string;
	export let label: string;
	export let state: Writable<number>;
</script>

<div class="mb-3">
	<label for={id} class="font-medium text-gray-300">{label}</label>
	<div class="mt-2">
		<input
			bind:value={$state}
			required
			type="number"
			{id}
			class="w-full rounded-lg border-gray-800/50 bg-gray-800/50 p-4 text-gray-300 transition focus:scale-105 focus:shadow-xl focus:ring-2"
			placeholder={label}
		/>
	</div>
</div>
