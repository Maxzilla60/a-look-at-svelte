<script lang="ts">
	import 'animate.css';

	export let fruitEmoji = '🍎';
	export let fruitCount$;
</script>

{#key $fruitCount$}
	<div class="fruit animate__animated animate__bounce animate__faster">{fruitEmoji}</div>
{/key}
