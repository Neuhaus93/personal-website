<script lang="ts">
	import under_construction from '$lib/icons/under-construction';
	import blank_canvas from '$lib/icons/blank-canvas';
	import logo_github from '$lib/icons/logo-github';
	import logo_linkedin from '$lib/icons/logo-linkedin';
	import launch from '$lib/icons/launch.svg?raw';
	import arrowBackOutline from '$lib/icons/arrow-back-outline.svg?raw';
	import emailFilled from '$lib/icons/email-filled.svg?raw';
	import pricetags from '$lib/icons/pricetags.svg?raw';
	import calendar from '$lib/icons/calendar.svg?raw';
	import node from '$lib/icons/node';
	import react from '$lib/icons/react';
	import svelte from '$lib/icons/svelte';
	import typescript from '$lib/icons/typescript';
	import open from '$lib/icons/open';
	import person_circle_outline from '$lib/icons/person-circle-outline';
	import undrawInterview from '$lib/icons/undraw-interview';
	import type { IconName } from '$lib/icons/types';

	type DisplayIcon = {
		name: IconName;
		svg: string;
		viewBox: string;
		title?: string;
	};

	export let name: DisplayIcon['name'];
	export let width: number | string | null = null;
	export let height: number | string | null = null;
	export let title: string | undefined = undefined;
	export let color: string | undefined = undefined;

	const buildSvgStr = (icon: DisplayIcon) => {
		return `
			<svg
				${$$props.class ? `class="${$$props.class}"` : ''}
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
			name: 'calendar',
			svg: calendar,
			viewBox: '0 0 24 24'
		},
		{
			name: 'person-circle-outline',
			svg: person_circle_outline,
			viewBox: '0 0 512 512'
		},
		{
			name: 'undraw-interview',
			svg: undrawInterview,
			viewBox: '0 0 833.22212 633.11008'
		},
		{
			name: 'arrow-back-outline',
			svg: arrowBackOutline,
			viewBox: '0 0 24 24'
		},
		{
			name: 'email-filled',
			svg: emailFilled,
			viewBox: '0 0 24 24'
		},
		{
			name: 'pricetags',
			svg: pricetags,
			viewBox: '0 0 24 24'
		}
	];
	let displayIcon: DisplayIcon | undefined = icons.find((e) => e.name === name);
</script>

{#if !!displayIcon}
	{@html buildSvgStr(displayIcon)}
{/if}
