<script lang="ts">
	import { Icon } from '$lib/components/index';
	import { SOCIALS } from '$lib/constants';
</script>

<div class="mt-44 flex flex-col items-center justify-center sm:mt-64">
	<h1 class="text-4xl font-bold">Thank you for reaching out!</h1>

	<div class="mt-10 text-center">
		<p>I will reach back as soon as I can.</p>
		<p>
			Feel free to also message on <a
				class="text-blue-500 underline"
				target="_blank"
				href={SOCIALS.linkedin.href}>LinkedIn</a
			> if you like.
		</p>
	</div>

	<a class="btn mt-10" href="/">
		<Icon name="arrow-back-outline" height={20} color="#FFF" />
		<span>Back to home page</span>
	</a>
</div>

<style lang="postcss">
	/* .icon-container {
		animation: moveUpDown 2.5s linear infinite;
	} */

	@keyframes moveUpDown {
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
