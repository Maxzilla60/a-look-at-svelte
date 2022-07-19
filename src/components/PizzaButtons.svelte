<script lang="ts">
	import { pizzaCount$ } from '../services/pizza';

	function oneMorePizza(): void {
		pizzaCount$.update(prev => prev + 1);
	}

	function oneFewerPizza(): void {
		pizzaCount$.update(prev => {
			if (prev > 0) {
				return prev - 1;
			}
			return prev;
		});
	}
</script>

<section>
	<h2>PizzaButtons</h2>
	<button on:click={oneFewerPizza}>➖</button>
	<button on:click={oneMorePizza}>➕</button>
</section>
