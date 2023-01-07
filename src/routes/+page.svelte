<script lang="ts">
	import { calculateL } from '$lib/utils/calculateL';
	import { calculateLq } from '$lib/utils/calculateLq';
	import { calculatePo } from '$lib/utils/calculatePo';
	import { calculatePq } from '$lib/utils/calculatePq';
	import { calculateRho } from '$lib/utils/calculateRho';
	import { calculateW } from '$lib/utils/calculateW';
	import { calculateWq } from '$lib/utils/calculateWq';
	import { fade } from 'svelte/transition';

	let arriveRate: number;
	let serviceRate: number;
	let numberOfServers: number;

	let po: number;
	let l: number;
	let w: number;
	let lq: number;
	let wq: number;
	let pq: number;
	let rho: number;

	function handleSubmit(e: Event) {
		e.preventDefault();

		po = calculatePo(arriveRate, serviceRate, numberOfServers);
		l = calculateL(arriveRate, serviceRate, numberOfServers);
		w = calculateW(l, arriveRate);
		lq = calculateLq(l, arriveRate, serviceRate);
		wq = calculateWq(w, serviceRate);
		pq = calculatePq(arriveRate, serviceRate, numberOfServers);
		rho = calculateRho(arriveRate, serviceRate, numberOfServers);

		console.log({ arriveRate, serviceRate, numberOfServers });
		console.log({ po, l, w, lq, wq, pq, rho });
	}

	function handleReset() {
    po = 0;
	}
</script>

<svelte:head>
	<title>M/M/s Queue Theory Calculator</title>
</svelte:head>
<main class="grid place-items-center min-h-screen">
	<div class="bg-slate-800/50 m-6 p-8 md:p-12 rounded-xl backdrop-blur-md shadow-lg max-h-auto transition-[max-height]">
		<h1 class="text-gray-300 text-3xl font-bold mb-4 text-center">M/M/s Queue Theory Calculator</h1>
		<form on:submit={handleSubmit} on:reset={handleReset}>
			<div class="mb-3">
				<label for="arriveRate" class="Sont-medium text-gray-300">Enter the arrive rate (λ)</label>
				<div class="mt-2">
					<input
						bind:value={arriveRate}
						required
						type="number"
						id="arriveRate"
						class="w-full rounded-lg border-gray-800 p-4 bg-gray-800/75 focus:ring-2 text-gray-300 transition focus:scale-105 focus:shadow-xl"
						placeholder="Enter the arrive rate"
					/>
				</div>
			</div>

			<div class="mb-3">
				<label for="arriveRate" class="font-medium text-gray-300">Enter the service rate (µ)</label>
				<div class="mt-2">
					<input
						bind:value={serviceRate}
						required
						type="number"
						id="serviceRate"
						class="w-full rounded-lg border-gray-800 p-4 bg-gray-800/75 focus:ring-2 text-gray-300 transition focus:scale-105 focus:shadow-xl"
						placeholder="Enter the service rate"
					/>
				</div>
			</div>

			<div class="mb-3">
				<label for="arriveRate" class="font-medium text-gray-300"
					>Enter the number of servers (s)</label
				>
				<div class="mt-2">
					<input
						bind:value={numberOfServers}
						required
						type="number"
						id="numberOfServers"
						class="w-full rounded-lg border-gray-800 p-4 bg-gray-800/75 focus:ring-2 text-gray-300 transition focus:scale-105 focus:shadow-xl"
						placeholder="Enter the number of servers"
					/>
				</div>
			</div>

			<div class="space-x-4 flex">
				<button
					type="submit"
					class="mt-2 w-[75%] text-center rounded-lg font-bold inline-block bg-[#6600ff] px-8 py-3 text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-[#5509c9] active:bg-[#5e05e4]"
				>
					Calculate
				</button>
				<button
					type="reset"
					class="mt-2 w-auto text-center rounded-lg font-bold inline-block bg-red-600 px-8 py-3 text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-red-700 active:bg-red-700"
				>
					Reset
				</button>
			</div>
		</form>

		<!-- result -->
		{#if po && l && w && lq && wq && pq && rho}
			<div transition:fade>
				<hr class="my-10 border-gray-600" />
				<h1 class="text-gray-300 text-3xl font-bold mb-4 text-center">Result</h1>
				<div class="text-gray-300 text">
					<ul class="space-y-2 text-xl font-mono">
						<li>Po : {po}</li>
						<li>L : {l}</li>
						<li>W : {w}</li>
						<li>Lq : {lq}</li>
						<li>Wq : {wq}</li>
						<li>Pq : {pq}</li>
						<li>p : {rho}</li>
					</ul>
				</div>
			</div>
		{/if}
	</div>
</main>
