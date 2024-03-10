export const prerender = true;
export const ssr = true;
export const load = async ({ fetch, url }) => {
	const res = await fetch('/api/test');
	// const res = await fetch(
	//     'https://movie.douban.com/j/search_tags?type=movie&source=index'
	// );
	const data = await res.json();
	return {
		tags: data?.tags || []
	};
};
