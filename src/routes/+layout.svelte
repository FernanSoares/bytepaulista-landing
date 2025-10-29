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

<div class="min-h-screen bg-navy-950 text-white">
  {@render children()}
</div>
