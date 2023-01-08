<script lang="ts">
	import { po, l, w, lq, wq, pq, rho } from '$stores/output';

	$: results = [
		{
			title: 'The probability that there are no customers in the system',
			content: `Po = ${$po} = `,
			alternateResult: ($po * 100).toFixed(2) + '%'
		},
		{
			title: 'The average number of customers in the queuing system',
			content: `L = ${$l} = `,
			alternateResult: $l.toFixed(2) + ' customers'
		},
		{
			title: 'Time customers spend in queues',
			content: `W = ${$w} = `,
			alternateResult: ($w * 60).toFixed(2) + ' minutes'
		},
		{
			title: 'The number of customers in the queue line',
			content: `Lq = ${$lq} = `,
			alternateResult: $lq.toFixed(2) + ' customers'
		},
		{
			title: 'Time spent waiting to be served',
			content: `Wq = ${$wq} = `,
			alternateResult: ($wq * 60).toFixed(2) + ' minutes'
		},
		{
			title: 'The probability that the server is busy and the customer is waiting',
			content: `Pq = ${$pq} = `,
			alternateResult: ($pq * 100).toFixed(2) + '%'
		},
		{
			title: 'Server utilization',
			content: `p = ${$rho} = `,
			alternateResult: ($rho * 100).toFixed(2) + '%'
		}
	];
</script>

<div>
	<h1 class="mb-4 text-center text-xl font-bold text-gray-300 md:text-3xl">Result</h1>
	<div class="text text-gray-300">
		<ul class="text-md ml-6 list-disc space-y-2 font-mono lg:ml-0">
			{#each results as { title, content, alternateResult } (title)}
				<li {title}>
					{content}<b class="text-lg underline underline-offset-4">{alternateResult}</b>
				</li>
			{/each}
		</ul>
	</div>
</div>
