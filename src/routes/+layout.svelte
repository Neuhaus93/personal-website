<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const setHeight = () => {
		const mainEl = document.getElementById('root-container');
		if (mainEl) {
			mainEl.style.minHeight = window.innerHeight + 'px';
		}
	};

	onMount(() => {
		setHeight();
	});
</script>

<svelte:window on:resize={setHeight} />

<svelte:head>
	<title>Lucas Neuhaus</title>
</svelte:head>

<main class="flex min-h-screen flex-col items-center justify-center bg-blue-50">
	<slot />
</main>
