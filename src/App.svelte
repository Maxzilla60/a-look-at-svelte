<script lang="ts">
	import FruitSocket from './components/FruitSocket.svelte';
	import PotatoCounter from './components/PotatoCounter.svelte';
	import CheeseCounter from './components/CheeseCounter.svelte';
	import CheeseButtons from './components/CheeseButtons.svelte';
</script>

<main>
	<h1>A Look At Svelte</h1>
	<h5>Maxime Orione - Renta</h5>

	<PotatoCounter/>

	<br/>

	<CheeseButtons/>
	<CheeseCounter/>

	<br/>

	<FruitSocket/>
</main>

<style>
	:root {
		text-align: center;
		font-size: x-large;
		font-family: "Comic Sans MS", serif;
	}

	:global(section) {
		border: dashed black 1px;
		margin: 5px;
	}

	h1, :global(h2) {
		font-family: Calibri, sans-serif;
		font-weight: bold;
		color: #ff3e00;
	}

	h1 {
		margin-bottom: 0;
	}

	h5 {
		margin-top: 0;
		font-weight: normal;
	}
</style>
