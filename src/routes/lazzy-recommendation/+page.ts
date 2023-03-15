import { redirect } from '@sveltejs/kit';

export const load = () => {
	throw redirect(
		303,
		'https://drive.google.com/file/d/1D-svPsvsQFkgMDkwbNGBQrjgjhlo0GX2/view'
	);
};
