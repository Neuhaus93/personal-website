<script lang="ts">
	import { Icon } from '$lib/components/index';
</script>

<div class="icon-container mb-8">
	<Icon name="under-construction" width={500} />
</div>

<h2>This website is under construction</h2>
<h2>Check my socials in the meanwhile</h2>

<div class="mt-2">
	<a
		target="_blank"
		href="https://github.com/Neuhaus93"
		class="btn min-w-[125px]"
	>
		<Icon name="logo-github" width={18} />
		<span>Github</span>
	</a>

	<a
		target="_blank"
		href="https://www.linkedin.com/in/lucas-neuhaus/"
		class="btn ml-2 min-w-[125px]"
	>
		<Icon name="logo-linkedin" width={18} />
		<span>Linkedin</span>
	</a>
</div>

<style>
	.icon-container {
		animation: rotate 2.5s linear infinite;
	}

	@keyframes rotate {
		0% {
			transform: translateY(0rem);
		}

		50% {
			transform: translateY(6px);
		}

		100% {
			transform: translateY(0rem);
		}
	}
</style>
