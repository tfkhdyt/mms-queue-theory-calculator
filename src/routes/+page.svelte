<script>
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>M/M/s Queue Theory Calculator</title>
</svelte:head>

<div class="bg" />
<main class="flex justify-center w-screen h-screen py-20 lg:items-center absolute">
	<Card />
</main>

<style>
	.bg {
		background-image: url('../assets/img/background.svg');
		background-repeat: no-repeat;
		background-position: center;
		height: 100vh;
		width: 100vw;
		position: fixed;
		z-index: -1;
		background-size: cover;
		/* background-attachment: fixed; */
	}
</style>
