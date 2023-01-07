<script lang="ts">
	import { calculateL } from '$lib/utils/calculateL';
	import { calculateLq } from '$lib/utils/calculateLq';
	import { calculatePo } from '$lib/utils/calculatePo';
	import { calculatePq } from '$lib/utils/calculatePq';
	import { calculateRho } from '$lib/utils/calculateRho';
	import { calculateW } from '$lib/utils/calculateW';
	import { calculateWq } from '$lib/utils/calculateWq';

	import { arrivalRate, numberOfServers, serviceRate } from '$stores/input';
	import { po, l, w, lq, wq, pq, rho } from '$stores/output';

  import ResetButton from './buttons/ResetButton.svelte';
  import SubmitButton from './buttons/SubmitButton.svelte';
	import InputField from './InputField.svelte';

	function handleSubmit(e: Event) {
		e.preventDefault();

		po.set(calculatePo($arrivalRate, $serviceRate, $numberOfServers));
		l.set(calculateL($arrivalRate, $serviceRate, $numberOfServers));
		w.set(calculateW($l, $arrivalRate));
		lq.set(calculateLq($l, $arrivalRate, $serviceRate));
		wq.set(calculateWq($w, $serviceRate));
		pq.set(calculatePq($arrivalRate, $serviceRate, $numberOfServers));
		rho.set(calculateRho($arrivalRate, $serviceRate, $numberOfServers));
	}

	function handleReset() {
		po.set(0);
	}
</script>

<form on:submit={handleSubmit} on:reset={handleReset}>
	<InputField id="arrivalRate" label="Enter the arrival rate (λ)" state={arrivalRate} />
	<InputField id="serviceRate" label="Enter the service rate (µ)" state={serviceRate} />
	<InputField id="numberOfServers" label="Enter the number of servers (s)" state={numberOfServers} />

	<div class="space-x-4 flex">
    <SubmitButton />
    <ResetButton />
	</div>
</form>
