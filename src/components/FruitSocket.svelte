<script lang="ts">
	import { fruit$, openMarket, socketConnected$ } from '../services/websocket';
	import { writable } from 'svelte/store';
	import BouncyFruit from './BouncyFruit.svelte';

	const kiwiCount$ = writable<number>(0);
	const bananaCount$ = writable<number>(0);
	const tomatoCount$ = writable<number>(0);

	fruit$.subscribe(fruit => {
		switch (fruit?.fruit) {
			case 'banana':
				bananaCount$.update(c => c + 1);
				return;
			case 'kiwi':
				kiwiCount$.update(c => c + 1);
				return;
			case 'tomato':
				tomatoCount$.update(c => c + 1);
				return;
		}
	});
</script>

<section>
	<h2>FruitSocket</h2>

	{#if $socketConnected$}
		<small>Fruit market is open</small>
		<div>{JSON.stringify($fruit$) || ''}</div>
	{:else}
		<small>Fruit market is closed</small>
		<div>
			<button on:click={openMarket}>Open sesame!</button>
		</div>
	{/if}

	<div class="fruit">
		<BouncyFruit fruitEmoji="🍌" fruitCount$={bananaCount$}/>
		<b>{$bananaCount$}</b>
	</div>
	<div class="fruit">
		<BouncyFruit fruitEmoji="🥝" fruitCount$={kiwiCount$}/>
		<b>{$kiwiCount$}</b>
	</div>
	<div class="fruit">
		<BouncyFruit fruitEmoji="🍅" fruitCount$={tomatoCount$}/>
		<b>{$tomatoCount$}</b>
	</div>
</section>

<style>
	.fruit {
		display: inline-block;
	}
</style>
