<script lang="ts">
  import { PortableText as PT } from "@portabletext/svelte";
  import type { PortableTextBlock } from "@portabletext/types";

  export let value: PortableTextBlock[];
</script>

<div class="portable-text prose prose-lg max-w-none">
  <PT {value} />
</div>

<style>
  /* Customização dos headings */
  :global(.portable-text h1) {
    @apply text-4xl font-bold mb-8 mt-16 text-gray-900;
  }

  :global(.portable-text h2) {
    @apply text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent;
  }

  :global(.portable-text h3) {
    @apply text-2xl font-bold mb-5 mt-10 text-gray-900;
  }

  :global(.portable-text h4) {
    @apply text-xl font-bold mb-4 mt-8 text-gray-900;
  }

  /* Parágrafos */
  :global(.portable-text p) {
    @apply text-gray-700 leading-relaxed mb-6 mt-4;
  }

  /* Blockquotes */
  :global(.portable-text blockquote) {
    @apply border-l-4 border-cyan-500 pl-6 italic text-gray-700 my-8 py-2;
  }

  /* Listas */
  :global(.portable-text ul) {
    @apply list-disc ml-6 mb-8 mt-4 space-y-2;
  }

  :global(.portable-text ol) {
    @apply list-decimal ml-6 mb-8 mt-4 space-y-2;
  }

  :global(.portable-text li) {
    @apply text-gray-700 mb-3;
  }

  :global(.portable-text li > p) {
    @apply mb-2 mt-0;
  }

  /* Marks - strong, em, code */
  :global(.portable-text strong) {
    @apply text-gray-900 font-bold;
  }

  :global(.portable-text em) {
    @apply italic;
  }

  :global(.portable-text code) {
    @apply text-cyan-600 bg-cyan-50 px-2 py-1 rounded font-mono text-sm;
  }

  /* Links */
  :global(.portable-text a) {
    @apply text-cyan-600 font-semibold no-underline hover:text-cyan-700 hover:underline;
  }

  /* Imagens */
  :global(.portable-text img) {
    @apply rounded-xl shadow-lg my-10 w-full;
  }

  /* Blocos de código */
  :global(.portable-text pre) {
    @apply bg-gray-900 rounded-xl shadow-lg border border-gray-800 my-8 p-6 overflow-x-auto;
  }

  :global(.portable-text pre code) {
    @apply block text-sm text-gray-100;
    font-family: "Fira Code", "Courier New", monospace;
  }

  /* HR */
  :global(.portable-text hr) {
    @apply border-gray-300 my-12;
  }

  /* Remove margem do último elemento */
  :global(.portable-text > *:last-child) {
    @apply mb-0;
  }
</style>
