<script lang="ts">
	import { Icon } from '$lib/components/index';
	import type { ComponentProps } from 'svelte';
	import { ABOUT_ME } from '$lib/constants';
	import photo from '$lib/assets/perfil.jpg';

	const socials: {
		icon: ComponentProps<Icon>['name'];
		href: string;
		title: string;
	}[] = [
		{
			icon: 'logo-github',
			href: 'https://github.com/Neuhaus93',
			title: 'Github'
		},
		{
			icon: 'logo-linkedin',
			href: 'https://www.linkedin.com/in/lucas-neuhaus/',
			title: 'LinkedIn'
		}
	];
</script>

<div class="mt-8 sm:mt-12" />

<section>
	<div class="flex flex-col">
		<div class="text-center sm:text-start">
			<p class="text-md sm:text-lg">Hello, I'm</p>
			<h1
				class="mt-1 text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl"
			>
				Lucas Neuhaus<span class="blink">.</span>
			</h1>

			<p class="text-md mt-1 sm:text-lg">Full-stack software developer</p>
		</div>

		<div class="mt-4 flex justify-center gap-2 sm:justify-start">
			{#each socials as social}
				<a class="w-7 sm:w-8" target="_blank" href={social.href}>
					<Icon name={social.icon} title={social.title} width="100%" />
				</a>
			{/each}
		</div>
	</div>

	<div class="mt-10 hidden h-48 sm:mt-0 sm:block md:h-56 lg:h-64">
		<Icon name="launch" height="100%" />
	</div>
</section>

<section class="relative">
	<img
		class="h-44 rounded-full border-4 border-white shadow-md sm:h-52"
		alt="profile"
		src={photo}
	/>

	<div class="sm:ml-5` mt-10 flex flex-col gap-4 sm:mt-0 lg:ml-10">
		{#each ABOUT_ME as text}
			<p class="text-sm leading-7 text-white sm:text-base">{text}</p>
		{/each}
	</div>

	<div class="section-bg" />
</section>

<section>
	<div>
		<h2 class="text-lg font-bold">Previous Work</h2>

		<h4>Lazzy Inc.</h4>

		<h4>Convert.com</h4>

		<h4>Freelancing</h4>
	</div>
</section>

<div class="mt-8 sm:mt-12" />

<footer>
	<p class="text-center text-sm">Made with Svelte ❤️</p>
</footer>

<style lang="postcss">
	section {
		@apply mx-auto flex max-w-6xl flex-col items-center justify-between px-10 py-12 sm:flex-row;
	}

	section + section {
		@apply mt-0 sm:mt-8;
	}

	.section-bg {
		position: absolute;
		left: -200px;
		right: -200px;
		z-index: -10;
		top: -5px;
		bottom: 0px;
		transform: skew(-3deg, -1.3deg);
		/* background-color: #6c63ff; */
		background: rgb(34, 118, 195);
		background: linear-gradient(
			0deg,
			rgba(34, 118, 195, 1) 0%,
			rgba(108, 99, 255, 1) 100%
		);
	}

	.blink {
		animation: blink steps(2, jump-none) 1s infinite;
	}

	@keyframes blink {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}
</style>
