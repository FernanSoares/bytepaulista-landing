<script lang="ts">
  import { formatDate } from "$lib/utils";

  export let post: Post;
</script>

<article
  class="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
>
  <!-- Image -->
  {#if post.image}
    <div class="relative h-64 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
    </div>
  {/if}

  <!-- Content -->
  <div class="p-6 space-y-4">
    <!-- Categories -->
    <div class="flex flex-wrap gap-2">
      {#each post.categories as category}
        <span
          class="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-100 to-violet-100 text-cyan-700 rounded-full border border-cyan-200"
        >
          #{category}
        </span>
      {/each}
    </div>

    <!-- Title -->
    <h3
      class="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-violet-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
    >
      {post.title}
    </h3>

    <!-- Description -->
    <p class="text-gray-700 leading-relaxed line-clamp-3">
      {post.description}
    </p>

    <!-- Footer -->
    <div
      class="flex items-center justify-between pt-4 border-t border-gray-100"
    >
      <div class="flex items-center gap-2">
        <div
          class="w-10 h-10 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-full flex items-center justify-center"
        >
          <span class="text-white font-bold text-sm">B</span>
        </div>
        <div>
          <p class="text-sm font-semibold text-gray-900">BytePaulista</p>
          <p class="text-xs text-gray-500">{formatDate(post.date)}</p>
        </div>
      </div>

      <a
        href={`/blog/${post.slug}`}
        class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
      >
        Ler mais
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </a>
    </div>
  </div>

  <!-- Hover gradient border effect -->
  <div
    class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    style="background: linear-gradient(135deg, transparent 0%, rgba(0, 217, 255, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%);"
  ></div>
</article>
