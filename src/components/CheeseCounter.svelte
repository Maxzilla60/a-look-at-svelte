<script lang="ts">
	import { cheeseCount$ } from '../services/cheese';

	let count = 0;
	cheeseCount$.subscribe(newCount => count = newCount);
</script>

<section>
	<h2>CheeseCounter</h2>
	<p>🧀 You have <b>{count}</b> {count === 1 ? 'cheese' : 'cheeses'} 🧀</p>
</section>
