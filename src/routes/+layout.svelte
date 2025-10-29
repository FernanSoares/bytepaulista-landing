<script lang="ts">
  import "../app.postcss";

  let { children } = $props();
</script>

<svelte:head>
  <title>BytePaulista - Transformando Ideias em Realidade Digital</title>
  <meta
    name="description"
    content="Somos especialistas em desenvolvimento web, apps mobile e sistemas customizados. Sua parceira em inovação tecnológica."
  />
</svelte:head>

<div class="min-h-screen bg-white text-gray-900">
  {@render children()}
</div>
