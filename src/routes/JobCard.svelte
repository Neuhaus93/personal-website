<script lang="ts">
	import { Icon } from '$lib/components/index';

	const arr = ['123', '234'];

	export let job: {
		company: string;
		role: string;
		date: string;
		description: string;
		skills?: string[];
		recomendation?: string;
	};
</script>

<div class="flex min-h-[300px] flex-col rounded bg-white p-6 shadow-lg">
	<div class="flex items-center justify-between">
		<h2 class="text-xl font-bold">{job.company}</h2>

		{#if job.recomendation}
			<a
				class="inline-flex items-center text-sm"
				target="_blank"
				href={job.recomendation}
				>Recomendation<span class="ml-1 pb-0.5"
					><Icon name="open" height={14} /></span
				></a
			>
		{/if}
	</div>

	<div class="mt-2 rounded-sm bg-blue-50 p-2 text-sm shadow-inner">
		<p class="inline-flex items-center">
			<Icon class="mr-1 pb-0.5" name="pricetags" width={14} />
			{job.role}
		</p>
		<br />
		<p class="mt-0.5 inline-flex items-center">
			<Icon class="mr-1 pb-0.5" name="calendar" width={14} />
			{job.date}
		</p>
	</div>

	<p class="mt-4 mb-5 flex-1">{job.description}</p>

	{#if job.skills}
		<div class="mt-2 text-sm">
			{#each job.skills as skill}
				<div class="skill inline-block rounded-sm bg-blue-50 px-2.5 py-0.5">
					<p>{skill}</p>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	h2 {
		@apply text-lg font-bold;
	}

	.skill + .skill {
		@apply ml-1;
	}
</style>
