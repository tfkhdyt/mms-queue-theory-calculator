<script lang="ts">
	import { po, l, w, lq, wq, pq, rho } from '$stores/output';
</script>

<div>
	<h1 class="text-gray-300 text-xl md:text-3xl font-bold mb-4 text-center">Result</h1>
	<div class="text-gray-300 text">
		<ul class="space-y-2 text-md font-mono list-disc ml-6 lg:ml-0">
			<li title="The probability that there are no customers in the system">
				Po = {$po} = <b>{($po * 100).toFixed(2) + '%'}</b>
			</li>
			<li title="The average number of customers in the queuing system">
				L = {$l} = <b>{$l.toFixed(2) + ' customers'}</b>
			</li>
			<li title="Time customers spend in queues">W = {$w} = <b>{($w * 60).toFixed(2) + ' minutes'}</b></li>
			<li title="The number of customers in the queue line">
				Lq = {$lq} = <b>{$lq.toFixed(2) + ' customers'}</b>
			</li>
			<li title="Time spent waiting to be served">
				Wq = {$wq} = <b>{($wq * 60).toFixed(2) + ' minutes'}</b>
			</li>
			<li title="The probability that the server is busy and the customer is waiting">
				Pq = {$pq} = <b>{($pq * 100).toFixed(2) + '%'}</b>
			</li>
			<li title="Server utilization">p = {$rho} = <b>{($rho * 100).toFixed(2) + '%'}</b></li>
		</ul>
	</div>
</div>
