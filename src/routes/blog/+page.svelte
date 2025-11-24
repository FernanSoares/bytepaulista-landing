<script lang="ts">
	import BlogCard from "$lib/components/blog/BlogCard.svelte";
	import { fly } from "svelte/transition";

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - BytePaulista</title>
	<meta name="description" content="Insights sobre desenvolvimento, tecnologia e inovação digital." />
</svelte:head>

<section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-24 px-6">
	<div class="container mx-auto max-w-6xl">
		<!-- Header -->
		<header class="mb-16 text-center space-y-6" in:fly={{ y: 20, duration: 500 }}>
			<!-- Badge -->
			<div class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm font-medium shadow-lg">
				<span class="relative flex h-3 w-3">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-600"></span>
				</span>
				<span class="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent font-semibold">
					Blog & Insights
				</span>
			</div>

			<h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
				Últimas do<br />
				<span class="bg-gradient-to-r from-cyan-600 via-violet-600 to-mint-600 bg-clip-text text-transparent">
					Mundo Tech
				</span>
			</h1>

			<p class="text-xl text-gray-700 max-w-2xl mx-auto">
				Artigos sobre desenvolvimento, inovação e as melhores práticas do mercado.
			</p>
		</header>

		<!-- Blog Posts Grid -->
		{#if data.posts && data.posts.length > 0}
			<div class="space-y-8" in:fly={{ y: 20, duration: 500, delay: 200 }}>
				{#each data.posts as post, i}
					<div in:fly={{ y: 20, duration: 500, delay: 300 + i * 100 }}>
						<BlogCard {post} />
					</div>
				{/each}
			</div>
		{:else}
			<div class="text-center py-16">
				<div class="text-6xl mb-6">📝</div>
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Nenhum post publicado ainda</h2>
				<p class="text-gray-600">Fique ligado! Em breve teremos conteúdo incrível por aqui.</p>
			</div>
		{/if}
	</div>
</section>

