<script lang="ts">
	import { po, l, w, lq, wq, pq, rho } from '$stores/output';
	import { fade } from 'svelte/transition';
</script>

<div transition:fade>
	<hr class="my-10 border-gray-600" />
	<h1 class="text-gray-300 text-xl md:text-3xl font-bold mb-4 text-center">Result</h1>
	<div class="text-gray-300 text">
		<ul class="space-y-2 text-xl font-mono">
			<li title="The probability that there are no customers in the system">Po : {$po}</li>
			<li title="The average number of customers in the queuing system">L : {$l}</li>
			<li title="Time customers spend in queues">W : {$w}</li>
			<li title="The number of customers in the queue line">Lq : {$lq}</li>
			<li title="Time spent waiting to be served">Wq : {$wq}</li>
			<li title="The probability that the server is busy and the customer is waiting">Pq : {$pq}</li>
			<li title="Server utilization">p : {$rho}</li>
		</ul>
	</div>
</div>
