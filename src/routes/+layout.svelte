<script lang="ts">
	import '../app.css';

	const toggleDarkMode = () => {
		const html = document.querySelector('html');

		if (!html) {
			return;
		}

		const theme = html.dataset.theme;
		html.dataset.theme = theme === 'dark' ? 'light' : 'dark';
	};
</script>

<svelte:head>
	<title>Lucas Neuhaus - Full-Stack Developer</title>
</svelte:head>

<main class="min-h-screen overflow-x-hidden">
	<button on:click={toggleDarkMode} class="border border-txt">
		Toggle Light/Dark mode
	</button>
	<slot />
</main>
