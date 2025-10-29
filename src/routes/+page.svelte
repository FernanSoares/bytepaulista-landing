<script lang="ts">
  import Navbar from "$lib/components/landing/Navbar.svelte";
  import Hero from "$lib/components/landing/Hero.svelte";
  import Services from "$lib/components/landing/Services.svelte";
  import About from "$lib/components/landing/About.svelte";
  import ContactCTA from "$lib/components/landing/ContactCTA.svelte";
  import Footer from "$lib/components/landing/Footer.svelte";
</script>

<div class="min-h-screen">
  <Navbar />

  <main>
    <Hero />
    <Services />
    <About />
    <ContactCTA />
  </main>

  <Footer />
</div>
