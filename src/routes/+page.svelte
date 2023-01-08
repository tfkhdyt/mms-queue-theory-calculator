<script>
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>M/M/s Queue Theory Calculator</title>
</svelte:head>

<div class="bg" />
<main class="grid place-items-center min-h-screen min-w-screen content">
	<Card />
</main>

<style>
	.content {
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
