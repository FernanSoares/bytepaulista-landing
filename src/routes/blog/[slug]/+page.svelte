<script lang="ts">
	import { formatDate } from "$lib/utils";
	import { url } from "$lib/config";
	import { fly } from "svelte/transition";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title} - BytePaulista Blog</title>

	<link rel="canonical" href={`${url}/blog/${data.meta.slug}`} />
	<meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${url}/blog/${data.meta.slug}`} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:site_name" content="BytePaulista Blog" />
	<meta property="og:image" content={data.meta.image ? `${url}${data.meta.image}` : `${url}/blog-banner.webp`} />

	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content={data.meta.image ? `${url}${data.meta.image}` : `${url}/blog-banner.webp`} />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50">
	<!-- Back Button -->
	<div class="container mx-auto max-w-4xl px-6 pt-32">
		<a
			href="/blog"
			class="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors mb-8"
			in:fly={{ x: -20, duration: 300 }}
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 19l-7-7 7-7"
				></path>
			</svg>
			Voltar para o Blog
		</a>
	</div>

	<!-- Article -->
	<article class="container mx-auto max-w-4xl px-6 pb-20">
		<!-- Header -->
		<header class="mb-12" in:fly={{ y: 20, duration: 500 }}>
			<!-- Categories -->
			<div class="flex flex-wrap gap-2 mb-6">
				{#each data.meta.categories as category}
					<span
						class="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-100 to-violet-100 text-cyan-700 rounded-full border border-cyan-200"
					>
						#{category}
					</span>
				{/each}
			</div>

			<!-- Title -->
			<h1
				class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
			>
				{data.meta.title}
			</h1>

			<!-- Meta Info -->
			<div class="flex items-center gap-4 mb-8">
				<div
					class="w-12 h-12 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-full flex items-center justify-center"
				>
					<span class="text-white font-bold">B</span>
				</div>
				<div>
					<p class="font-semibold text-gray-900">BytePaulista</p>
					<p class="text-sm text-gray-600">
						Publicado em {formatDate(data.meta.date)}
					</p>
				</div>
			</div>

			<!-- Featured Image -->
			{#if data.meta.image}
				<div class="relative rounded-2xl overflow-hidden shadow-2xl">
					<img
						src={data.meta.image}
						alt={data.meta.title}
						class="w-full h-auto"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
					></div>
				</div>
			{/if}
		</header>

		<!-- Content -->
		<div
			class="prose prose-lg prose-cyan max-w-none
				prose-headings:font-bold prose-headings:text-gray-900
				prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
				prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:bg-gradient-to-r prose-h2:from-cyan-600 prose-h2:to-violet-600 prose-h2:bg-clip-text prose-h2:text-transparent
				prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
				prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
				prose-a:text-cyan-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-cyan-700 hover:prose-a:underline
				prose-strong:text-gray-900 prose-strong:font-bold
				prose-code:text-cyan-600 prose-code:bg-cyan-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
				prose-pre:bg-gray-900 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:border prose-pre:border-gray-800
				prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
				prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6
				prose-li:text-gray-700 prose-li:mb-2
				prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700
				prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
			in:fly={{ y: 20, duration: 500, delay: 200 }}
		>
			<svelte:component this={data.content} />
		</div>

		<!-- Footer -->
		<footer
			class="mt-16 pt-8 border-t border-gray-200"
			in:fly={{ y: 20, duration: 500, delay: 400 }}
		>
			<div
				class="bg-gradient-to-r from-cyan-50 to-violet-50 rounded-2xl p-8 border border-cyan-100"
			>
				<div class="flex items-center gap-4 mb-4">
					<div
						class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-full flex items-center justify-center"
					>
						<span class="text-white font-bold text-2xl">B</span>
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900">BytePaulista</h3>
						<p class="text-gray-600">Software House em São Paulo</p>
					</div>
				</div>
				<p class="text-gray-700 leading-relaxed mb-6">
					Especialistas em criar produtos digitais excepcionais. Do conceito à execução,
					desenvolvemos soluções que transformam negócios e geram resultados.
				</p>
				<a
					href="/#contact"
					class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
				>
					Entre em Contato
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						></path>
					</svg>
				</a>
			</div>
		</footer>
	</article>
</div>
