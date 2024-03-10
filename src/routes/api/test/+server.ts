import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch }) => {
	const res = await fetch('https://movie.douban.com/j/search_tags?type=movie&source=index');
	const data = await res.json();

	return json(data);
};
