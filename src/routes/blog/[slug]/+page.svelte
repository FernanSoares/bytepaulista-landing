<script lang="ts">
	import { formatDate } from "$lib/utils";
	import { url, title, author } from "$lib/config";
	import { fly } from "svelte/transition";

	let { data } = $props();
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title} - BytePaulista</title>

	<link rel="canonical" href={`${url}/blog/${data.meta.slug}`} />
	<meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${url}/blog/${data.meta.slug}`} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:image" content={data.meta.image || "/blog-banner.webp"} />

	<meta name="twitter:site" content="@BytePaulista" />
	<meta name="twitter:creator" content="@BytePaulista" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content={data.meta.image || "/blog-banner.webp"} />
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-24 px-6">
	<div class="container mx-auto max-w-4xl">
		<!-- Back Button -->
		<div class="mb-8" in:fly={{ y: -20, duration: 500 }}>
			<a
				href="/blog"
				class="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					></path>
				</svg>
				Voltar para o blog
			</a>
		</div>

		<!-- Article -->
		<article class="prose prose-lg max-w-none" in:fly={{ y: 20, duration: 500, delay: 100 }}>
			<!-- Header -->
			<header class="not-prose mb-12 space-y-6">
				<!-- Categories -->
				{#if data.meta.categories && data.meta.categories.length > 0}
					<div class="flex flex-wrap gap-2">
						{#each data.meta.categories as category}
							<span
								class="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 rounded-full text-cyan-700"
							>
								#{category}
							</span>
						{/each}
					</div>
				{/if}

				<!-- Title -->
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
					{data.meta.title}
				</h1>

				<!-- Meta Info -->
				<div class="flex items-center gap-4 text-gray-600">
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							></path>
						</svg>
						<span class="font-medium">{author}</span>
					</div>
					<span class="text-gray-400">•</span>
					<time class="flex items-center gap-2">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							></path>
						</svg>
						{formatDate(data.meta.date)}
					</time>
				</div>

				<!-- Featured Image -->
				{#if data.meta.image}
					<div class="rounded-2xl overflow-hidden shadow-2xl">
						<img
							src={data.meta.image}
							alt={data.meta.title}
							class="w-full h-auto object-cover"
						/>
					</div>
				{/if}
			</header>

		<!-- Content -->
		<div
			class="prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-cyan-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:shadow-xl prose-img:rounded-lg prose-img:shadow-lg"
		>
			<svelte:component this={data.content} />
		</div>
		</article>

		<!-- Footer Navigation -->
		<footer class="mt-16 pt-8 border-t border-gray-200" in:fly={{ y: 20, duration: 500, delay: 200 }}>
			<a
				href="/blog"
				class="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl shadow-cyan-600/30"
			>
				Ver todos os posts
			</a>
		</footer>
	</div>
</div>

