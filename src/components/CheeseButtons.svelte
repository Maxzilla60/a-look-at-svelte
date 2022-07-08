<script lang="ts">
	import { cheeseCount$ } from '../services/cheese';

	function oneMoreCheese(): void {
		cheeseCount$.update(prev => prev + 1);
	}

	function oneFewerCheese(): void {
		cheeseCount$.update(prev => {
			if (prev > 0) {
				return prev - 1;
			}
			return prev;
		});
	}
</script>

<section>
	<h2>CheeseButtons</h2>
	<button on:click={oneFewerCheese}>➖</button>
	<button on:click={oneMoreCheese}>➕</button>
</section>
