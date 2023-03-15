import type { ComponentProps } from 'svelte';
import type { Icon } from '$lib/components/index';

export const COLORS = {
	linkedin: '#0a66c2',
	github: '#24292f'
} as const;

export const ABOUT_ME = [
	'Hi, my name is Lucas Neuhaus, a self-taught software developer from Brazil. In 2018, I obtained my degree in Civil Engineering and I was unhappy until I discovered my genuine passion: Programming. Since then, I have been working in both full-time and freelance positions.',
	"I'm naturally curious, I love learning new technologies and building complex applications. Over the past few years, I have primarily focused on utilizing React, Typescript, and Material UI in my work. This technology stack is one in which I possess a high level of proficiency and confidence."
];

type IconName = ComponentProps<Icon>['name'];

export const SOCIALS = {
	linkedin: {
		icon: 'logo-linkedin' as IconName,
		href: 'https://www.linkedin.com/in/lucas-neuhaus/',
		title: 'LinkedIn'
	},
	github: {
		icon: 'logo-github' as IconName,
		href: 'https://github.com/Neuhaus93',
		title: 'Github'
	},
	email: {
		icon: 'email-filled' as IconName,
		href: 'mailto:lucas.neuhaus93@gmail.com?subject=🤘 Hello from your website Lucas',
		title: 'Email'
	}
} as const;
