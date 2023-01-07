<script lang="ts">
	import { calculateL } from '$lib/utils/calculateL';
	import { calculateLq } from '$lib/utils/calculateLq';
	import { calculatePo } from '$lib/utils/calculatePo';
	import { calculatePq } from '$lib/utils/calculatePq';
	import { calculateRho } from '$lib/utils/calculateRho';
	import { calculateW } from '$lib/utils/calculateW';
	import { calculateWq } from '$lib/utils/calculateWq';

	import { arriveRate, numberOfServers, serviceRate } from '$stores/input';
	import { po, l, w, lq, wq, pq, rho } from '$stores/output';

  import ResetButton from './buttons/ResetButton.svelte';
  import SubmitButton from './buttons/SubmitButton.svelte';
	import InputField from './InputField.svelte';

	function handleSubmit(e: Event) {
		e.preventDefault();

		po.set(calculatePo($arriveRate, $serviceRate, $numberOfServers));
		l.set(calculateL($arriveRate, $serviceRate, $numberOfServers));
		w.set(calculateW($l, $arriveRate));
		lq.set(calculateLq($l, $arriveRate, $serviceRate));
		wq.set(calculateWq($w, $serviceRate));
		pq.set(calculatePq($arriveRate, $serviceRate, $numberOfServers));
		rho.set(calculateRho($arriveRate, $serviceRate, $numberOfServers));
	}

	function handleReset() {
		po.set(0);
	}
</script>

<form on:submit={handleSubmit} on:reset={handleReset}>
	<InputField id="arriveRate" label="Enter the arrive rate (λ)" state={arriveRate} />
	<InputField id="serviceRate" label="Enter the service rate (µ)" state={serviceRate} />
	<InputField id="numberOfServers" label="Enter the number of servers (s)" state={numberOfServers} />

	<div class="space-x-4 flex">
    <SubmitButton />
    <ResetButton />
	</div>
</form>
