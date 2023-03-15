<script lang="ts">
	import under_construction from '$lib/icons/under-construction';
	import blank_canvas from '$lib/icons/blank-canvas';
	import logo_github from '$lib/icons/logo-github';
	import logo_linkedin from '$lib/icons/logo-linkedin';
	import launch from '$lib/icons/launch';
	import node from '$lib/icons/node';
	import react from '$lib/icons/react';
	import svelte from '$lib/icons/svelte';
	import typescript from '$lib/icons/typescript';
	import open from '$lib/icons/open';
	import calendar_outline from '$lib/icons/calendar-outline';
	import person_circle_outline from '$lib/icons/person-circle-outline';
	import type { IconName } from '$lib/icons/types';

	type DisplayIcon = {
		name: IconName;
		svg: string;
		viewBox: string;
		title?: string;
	};

	export let name: DisplayIcon['name'];
	export let width: number | '100%' | null = null;
	export let height: number | '100%' | null = null;
	export let title: string | undefined = undefined;
	export let color: string | undefined = undefined;

	const buildSvgStr = (icon: DisplayIcon) => {
		return `
			<svg
				${$$props.class ? `class=${$$props.class}` : ''}
				${width ? `width="${width}"` : ''}
				${height ? `height="${height}"` : ''}
				${color ? `color="${color}"` : ''}
				viewBox="${icon.viewBox}">
				${title ? `<title>${title}</title>` : ''}
				${icon.svg}
			</svg>
    `;
	};

	let icons: DisplayIcon[] = [
		{
			name: 'under-construction',
			svg: under_construction,
			viewBox: '0 0 1177.82 724.47'
		},
		{
			name: 'blank-canvas',
			svg: blank_canvas,
			viewBox: '0 0 550.71039 567.98584'
		},
		{
			name: 'logo-github',
			svg: logo_github,
			viewBox: '0 0 512 512'
		},
		{
			name: 'logo-linkedin',
			svg: logo_linkedin,
			viewBox: '0 0 512 512'
		},
		{
			name: 'launch',
			svg: launch,
			viewBox: '0 0 853.29744 818'
		},
		{
			name: 'node',
			svg: node,
			viewBox: '0 0 640 512'
		},
		{
			name: 'react',
			svg: react,
			viewBox: '0 0 512 512'
		},
		{
			name: 'svelte',
			svg: svelte,
			viewBox: '0 0 60.900204 78.582375'
		},
		{
			name: 'typescript',
			svg: typescript,
			viewBox: '0 0 400 400'
		},
		{
			name: 'open',
			svg: open,
			viewBox: '0 0 512 512'
		},
		{
			name: 'calendar-outline',
			svg: calendar_outline,
			viewBox: '0 0 512 512'
		},
		{
			name: 'person-circle-outline',
			svg: person_circle_outline,
			viewBox: '0 0 512 512'
		}
	];
	let displayIcon: DisplayIcon | undefined = icons.find((e) => e.name === name);
</script>

{#if !!displayIcon}
	{@html buildSvgStr(displayIcon)}
{/if}
