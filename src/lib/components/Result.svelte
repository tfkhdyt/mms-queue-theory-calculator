<script lang="ts">
	import { po, l, w, lq, wq, pq, rho } from '$stores/output';
	import { fade } from 'svelte/transition';
</script>

<div transition:fade>
	<hr class="my-10 border-gray-600" />
	<h1 class="text-gray-300 text-3xl font-bold mb-4 text-center">Result</h1>
	<div class="text-gray-300 text">
		<ul class="space-y-2 text-xl font-mono">
			<li>Po : {$po}</li>
			<li>L : {$l}</li>
			<li>W : {$w}</li>
			<li>Lq : {$lq}</li>
			<li>Wq : {$wq}</li>
			<li>Pq : {$pq}</li>
			<li>p : {$rho}</li>
		</ul>
	</div>
</div>
