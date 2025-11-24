<script lang="ts">
	import BlogCard from "$lib/components/BlogCard.svelte";
	import { title, description, url } from "$lib/config";
	import { fly } from "svelte/transition";

	export let data;
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${url}/blog`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:image" content={`${url}/blog-banner.webp`} />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content={`${url}/blog-banner.webp`} />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50">
	<!-- Animated Background -->
	<div class="absolute inset-0 -z-10">
		<div
			class="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"
		></div>
		<div
			class="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/15 rounded-full blur-3xl animate-pulse delay-700"
		></div>
		<div
			class="absolute inset-0 bg-[linear-gradient(to_right,#00D9FF08_1px,transparent_1px),linear-gradient(to_bottom,#00D9FF08_1px,transparent_1px)] bg-[size:4rem_4rem]"
		></div>
	</div>

	<div class="container mx-auto max-w-4xl text-center" in:fly={{ y: 20, duration: 500 }}>
		<!-- Badge -->
		<div class="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm font-medium shadow-lg">
			<span class="relative flex h-3 w-3">
				<span
					class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"
				></span>
				<span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-600"></span>
			</span>
			<span
				class="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent font-semibold"
			>
				Blog Oficial BytePaulista
			</span>
		</div>

		<!-- Title -->
		<h1 class="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
			Nosso
			<span
				class="bg-gradient-to-r from-cyan-600 via-violet-600 to-mint-600 bg-clip-text text-transparent"
			>
				Blog
			</span>
		</h1>

		<!-- Description -->
		<p class="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
			Artigos sobre desenvolvimento web, tecnologia e inovação. Fique por dentro das últimas
			novidades!
		</p>

		<!-- Stats -->
		<div class="flex justify-center gap-8 mt-12">
			<div class="text-center">
				<div
					class="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent"
				>
					{data.posts.length}
				</div>
				<div class="text-sm text-gray-600 uppercase tracking-wider font-medium">Artigos</div>
			</div>
			<div class="text-center">
				<div
					class="text-4xl font-bold bg-gradient-to-r from-violet-600 to-violet-500 bg-clip-text text-transparent"
				>
					{[...new Set(data.posts.flatMap((p) => p.categories))].length}
				</div>
				<div class="text-sm text-gray-600 uppercase tracking-wider font-medium">Categorias</div>
			</div>
		</div>
	</div>
</section>

<!-- Posts Grid -->
<section class="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
	<div class="container mx-auto max-w-6xl">
		{#if data.posts.length === 0}
			<div class="text-center py-20">
				<p class="text-2xl text-gray-500">Nenhum post publicado ainda. Em breve!</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each data.posts as post, i}
					<div in:fly={{ y: 20, duration: 500, delay: i * 100 }}>
						<BlogCard {post} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
