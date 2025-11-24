<script lang="ts">
  import "../app.postcss";
  import Navbar from "$lib/components/landing/Navbar.svelte";
  import Footer from "$lib/components/landing/Footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <title>BytePaulista - Transformando Ideias em Realidade Digital</title>
  <meta
    name="description"
    content="Somos especialistas em desenvolvimento web, apps mobile e sistemas customizados. Sua parceira em inovação tecnológica."
  />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="alternate icon" type="image/png" href="/favicon.png" />
</svelte:head>

<div class="min-h-screen bg-white text-gray-900">
  <Navbar />

  <main>
    {@render children()}
  </main>

  <Footer />
</div>
