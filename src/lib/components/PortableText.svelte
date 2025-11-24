<script lang="ts">
	import { PortableText as PT } from "@portabletext/svelte";
	import type { PortableTextBlock } from "@portabletext/types";

	export let value: PortableTextBlock[];

	// Componentes customizados para cada tipo de bloco
	const components = {
		block: {
			h1: ({ children }: any) => `<h1 class="text-4xl font-bold mb-8 mt-16 text-gray-900">${children}</h1>`,
			h2: ({ children }: any) =>
				`<h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">${children}</h2>`,
			h3: ({ children }: any) => `<h3 class="text-2xl font-bold mb-5 mt-10 text-gray-900">${children}</h3>`,
			h4: ({ children }: any) => `<h4 class="text-xl font-bold mb-4 mt-8 text-gray-900">${children}</h4>`,
			normal: ({ children }: any) => `<p class="text-gray-700 leading-relaxed mb-6 mt-4">${children}</p>`,
			blockquote: ({ children }: any) =>
				`<blockquote class="border-l-4 border-cyan-500 pl-6 italic text-gray-700 my-8 py-2">${children}</blockquote>`,
		},
		list: {
			bullet: ({ children }: any) => `<ul class="list-disc ml-6 mb-8 mt-4">${children}</ul>`,
			number: ({ children }: any) => `<ol class="list-decimal ml-6 mb-8 mt-4">${children}</ol>`,
		},
		listItem: {
			bullet: ({ children }: any) => `<li class="text-gray-700 mb-3">${children}</li>`,
			number: ({ children }: any) => `<li class="text-gray-700 mb-3">${children}</li>`,
		},
		marks: {
			strong: ({ children }: any) => `<strong class="text-gray-900 font-bold">${children}</strong>`,
			em: ({ children }: any) => `<em class="italic">${children}</em>`,
			code: ({ children }: any) =>
				`<code class="text-cyan-600 bg-cyan-50 px-2 py-1 rounded font-mono text-sm">${children}</code>`,
			link: ({ children, value }: any) =>
				`<a href="${value?.href}" class="text-cyan-600 font-semibold no-underline hover:text-cyan-700 hover:underline">${children}</a>`,
		},
		types: {
			image: ({ value }: any) =>
				`<img src="${value.asset?.url}" alt="${value.alt || ""}" class="rounded-xl shadow-lg my-10 w-full" />`,
			code: ({ value }: any) =>
				`<pre class="bg-gray-900 rounded-xl shadow-lg border border-gray-800 my-8 p-6 overflow-x-auto"><code class="language-${value.language || "text"} text-sm text-gray-100">${value.code}</code></pre>`,
		},
	};
</script>

<div class="portable-text">
	<PT {value} {components} />
</div>

<style>
	:global(.portable-text) {
		@apply max-w-none;
	}

	/* Adiciona syntax highlighting ao código */
	:global(.portable-text pre code) {
		@apply block text-sm;
		font-family: "Fira Code", "Courier New", monospace;
	}

	/* Melhora listas */
	:global(.portable-text ul),
	:global(.portable-text ol) {
		@apply space-y-2;
	}

	/* Espaçamento de parágrafos dentro de listas */
	:global(.portable-text li > p) {
		@apply mb-2 mt-0;
	}

	/* Remove margem do último elemento */
	:global(.portable-text > *:last-child) {
		@apply mb-0;
	}

	/* Espaçamento de HR */
	:global(.portable-text hr) {
		@apply border-gray-300 my-12;
	}
</style>

