<script lang="ts">
	import { formatDate } from "$lib/utils.js";
	import { title, description, url, author } from "$lib/config";

	type Props = {
		post: Post;
	};

	let { post }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${url}/blog`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:image" content="/blog-banner.webp" />

	<meta name="twitter:site" content="@BytePaulista" />
	<meta name="twitter:creator" content="@BytePaulista" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content="/blog-banner.webp" />
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

{#key post.slug}
	<a
		class="group block overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-cyan-400 hover:shadow-xl transition-all duration-300 w-full max-w-4xl"
		href={`/blog/${post.slug}`}
	>
		{#if post.image}
			<div class="relative overflow-hidden aspect-video">
				<img
					src={post.image}
					alt={post.title}
					class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				></div>
			</div>
		{/if}

		<div class="p-6 space-y-4">
			<!-- Categories -->
			{#if post.categories && post.categories.length > 0}
				<div class="flex flex-wrap gap-2">
					{#each post.categories as category}
						<span
							class="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 rounded-full text-cyan-700 group-hover:border-cyan-500 transition-colors"
						>
							#{category}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Title -->
			<h3 class="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
				{post.title}
			</h3>

			<!-- Description -->
			<p class="text-gray-700 leading-relaxed">
				{post.description}
			</p>
		</div>

		<!-- Footer -->
		<div class="px-6 pb-6 pt-2 border-t border-gray-100 flex justify-between items-center">
			<div class="font-semibold text-gray-900">Por {author}</div>
			<time class="text-sm text-gray-600">{formatDate(post.date)}</time>
		</div>
	</a>
{/key}

