<script lang="ts">
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
>
  <div class="container mx-auto px-6 md:px-12">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="group flex items-center gap-3">
        <div
          class="w-10 h-10 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-md"
        >
          <span class="text-white font-bold text-xl">B</span>
        </div>
        <span
          class="text-xl font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent"
        >
          BytePaulista
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex items-center gap-10">
        <a
          href="#services"
          class="text-gray-700 hover:text-cyan-600 transition-colors font-medium relative group"
        >
          Serviços
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-violet-600 group-hover:w-full transition-all duration-300"
          ></span>
        </a>
        <a
          href="#about"
          class="text-gray-700 hover:text-cyan-600 transition-colors font-medium relative group"
        >
          Sobre
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-violet-600 group-hover:w-full transition-all duration-300"
          ></span>
        </a>
        <a
          href="#contact"
          class="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-600/20"
        >
          Contato
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        onclick={toggleMenu}
        class="md:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors"
        aria-label="Menu de navegação"
        aria-expanded={isMenuOpen}
      >
        {#if isMenuOpen}
          <!-- Close Icon (X) -->
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        {:else}
          <!-- Hamburger Icon -->
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        {/if}
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div
        class="md:hidden py-6 border-t border-gray-200 animate-fade-in"
      >
        <div class="flex flex-col gap-4">
          <a
            href="#services"
            onclick={closeMenu}
            class="text-gray-700 hover:text-cyan-600 transition-colors font-medium py-3 px-4 hover:bg-cyan-50 rounded-lg"
          >
            Serviços
          </a>
          <a
            href="#about"
            onclick={closeMenu}
            class="text-gray-700 hover:text-cyan-600 transition-colors font-medium py-3 px-4 hover:bg-cyan-50 rounded-lg"
          >
            Sobre
          </a>
          <a
            href="#contact"
            onclick={closeMenu}
            class="w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-cyan-600/20"
          >
            Contato
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.2s ease-out;
  }
</style>
