<script>
</script>

<svelte:head>
	<title>M/M/s Queue Theory Calculator</title>
</svelte:head>
<main class="grid place-items-center min-h-screen">
	<div class="bg-slate-800/75 p-12 rounded-xl backdrop-blur-sm">
		<h1 class="text-gray-300 text-2xl font-bold mb-4">M/M/s Queue Theory Calculator</h1>
		<div>
			<label for="email" class="text-sm font-medium">Email</label>

			<div class="relative mt-1">
				<input
					type="email"
					id="email"
					class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
					placeholder="Enter email"
				/>

				<span class="absolute inset-y-0 right-4 inline-flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-gray-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
						/>
					</svg>
				</span>
			</div>
		</div>
	</div>
</main>
