<script>
	let potatoCount = 0;

	function oneMorePotato() {
		potatoCount += 1;
	}

	function oneFewerPotato() {
		if (potatoCount > 0) {
			potatoCount -= 1;
		}
	}
</script>

<section>
	<h2>PotatoCounter</h2>
	<p>🥔 You have <b>{potatoCount}</b> {potatoCount === 1 ? 'potato' : 'potatoes'} 🥔</p>
	<button on:click={oneFewerPotato}>➖</button>
	<button on:click={oneMorePotato}>➕</button>
</section>
