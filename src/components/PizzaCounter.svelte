<script lang="ts">
	import { pizzaCount$ } from '../services/pizza';

	let count = 0;
	pizzaCount$.subscribe(newCount => count = newCount);
</script>

<section>
	<h2>PizzaCounter</h2>
	<p>🍕 You have <b>{count}</b> {count === 1 ? 'pizza' : 'pizzas'} 🍕</p>
</section>
