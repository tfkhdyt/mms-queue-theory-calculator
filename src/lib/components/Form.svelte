<script lang="ts">
	// imports
	// import { z, ZodError } from 'zod';
	import { object, number, min, assert, StructError } from 'superstruct';

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

	// validation schema
	// const inputSchema = z.object({
	// 	arrivalRate: z
	// 		.number({ invalid_type_error: 'Must be a number' })
	// 		.positive('Must be greater than 0'),
	// 	serviceRate: z
	// 		.number({ invalid_type_error: 'Must be a number' })
	// 		.positive('Must be greater than 0'),
	// 	numberOfServers: z
	// 		.number({ invalid_type_error: 'Must be a number' })
	// 		.positive('Must be greater than 0')
	// });

	const Input = object({
		arrivalRate: min(number(), 1),
		serviceRate: min(number(), 1),
		numberOfServers: min(number(), 1)
	});

	// custom type
	type InputError = {
		field: string;
		message: string;
	};

	// state
	let errors: InputError[] = [];

	// handlers
	function handleSubmit() {
		try {
			errors = [];
			// inputSchema.parse({
			// 	arrivalRate: $arrivalRate,
			// 	serviceRate: $serviceRate,
			// 	numberOfServers: $numberOfServers
			// });
			assert(
				{
					arrivalRate: $arrivalRate,
					serviceRate: $serviceRate,
					numberOfServers: $numberOfServers
				},
				Input
			);

			po.set(calculatePo($arrivalRate, $serviceRate, $numberOfServers));
			l.set(calculateL($arrivalRate, $serviceRate, $numberOfServers));
			w.set(calculateW($l, $arrivalRate));
			lq.set(calculateLq($l, $arrivalRate, $serviceRate));
			wq.set(calculateWq($w, $serviceRate));
			pq.set(calculatePq($arrivalRate, $serviceRate, $numberOfServers));
			rho.set(calculateRho($arrivalRate, $serviceRate, $numberOfServers));
		} catch (error) {
			// if (error instanceof ZodError) {
			// 	errors = error.errors.map((err) => ({
			// 		field: err.path[0],
			// 		message: err.message
			// 	})) as InputError[];
			// }
			if (error instanceof StructError) {
				errors = error.failures().map((err) => {
					let message: string;
					if (err.value === undefined || err.value === null) {
						message = 'Required';
					} else {
						message = 'Should larger than 0';
					}

					return {
						field: err.key,
						message
					};
				});
			}
		}
	}

	function handleReset() {
		errors = [];
		arrivalRate.set(0);
		serviceRate.set(0);
		numberOfServers.set(0);
		po.set(0);
	}
</script>

<form on:submit|preventDefault={handleSubmit} on:reset={handleReset}>
	<InputField
		id="arrivalRate"
		label="Enter the arrival rate (λ)"
		state={arrivalRate}
		errorMessage={errors.find((err) => err.field === 'arrivalRate')?.message}
	/>
	<InputField
		id="serviceRate"
		label="Enter the service rate (µ)"
		state={serviceRate}
		errorMessage={errors.find((err) => err.field === 'serviceRate')?.message}
	/>
	<InputField
		id="numberOfServers"
		label="Enter the number of servers (s)"
		state={numberOfServers}
		errorMessage={errors.find((err) => err.field === 'numberOfServers')?.message}
	/>

	<div class="flex space-x-4">
		<SubmitButton />
		<ResetButton />
	</div>
</form>
