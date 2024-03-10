<script>
	export let data;

	$: console.log('data', data);
</script>

<div class="p-5">
	<h1 class="text-gray-600 dark:text-gray-300 text-5xl">ABOUT</h1>
	<!-- 遍历data.tags展示div -->
	{#each data?.tags as tag}
		<div class="text-gray-700 dark:text-gray-400">{tag}</div>
	{/each}
	<a href="/" class="text-gray-700 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
		>Home</a
	>
</div>
