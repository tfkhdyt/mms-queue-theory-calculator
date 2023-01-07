<script lang="ts">
	import { po, l, w, lq, wq, pq, rho } from '$stores/output';

	import Form from './Form.svelte';
	import Result from './Result.svelte';
</script>

<div
	class="bg-slate-800/50 m-6 p-8 md:px-10 md:py-8 rounded-xl backdrop-blur shadow-lg"
>
	<h1 class="text-gray-300 text-xl md:text-3xl font-bold mb-4 text-center">M/M/s Queue Theory Calculator</h1>
	<Form />

	{#if $po && $l && $w && $lq && $wq && $pq && $rho}
    <Result />
	{/if}
</div>
