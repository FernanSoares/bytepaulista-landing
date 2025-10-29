<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<section
  class="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50"
  in:fly={{ y: 20, duration: 500 }}
>
  <!-- Animated Background -->
  <div class="absolute inset-0 -z-10">
    <!-- Gradient Orbs -->
    <div
      class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-700"
    ></div>
    <div
      class="absolute top-1/2 right-1/3 w-72 h-72 bg-mint-400/10 rounded-full blur-3xl animate-pulse delay-1000"
    ></div>

    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#00D9FF08_1px,transparent_1px),linear-gradient(to_bottom,#00D9FF08_1px,transparent_1px)] bg-[size:4rem_4rem]"
    ></div>
  </div>

  <div class="container mx-auto max-w-7xl relative z-10">
    <div class="max-w-5xl space-y-10">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm font-medium shadow-sm"
      >
        <span class="relative flex h-3 w-3">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-600"
          ></span>
        </span>
        <span
          class="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent font-semibold"
        >
          Software House em São Paulo
        </span>
      </div>

      <!-- Main Heading -->
      <h1
        class="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight text-gray-900"
      >
        Transformamos<br />
        <span class="text-gray-600">suas ideias em</span><br />
        <span
          class="bg-gradient-to-r from-cyan-600 via-violet-600 to-mint-600 bg-clip-text text-transparent"
        >
          realidade digital
        </span>
      </h1>

      <!-- Description -->
      <p class="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
        Somos especialistas em criar produtos digitais excepcionais. Do conceito
        à execução, desenvolvemos soluções que <strong
          class="text-gray-900 font-semibold">transformam negócios</strong
        >
        e <strong class="text-gray-900 font-semibold">geram resultados</strong>.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-5 pt-6">
        <a
          href="#contact"
          class="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl shadow-cyan-600/30 overflow-hidden"
        >
          <span class="relative z-10 flex items-center gap-2">
            Iniciar Projeto
            <svg
              class="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          </span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>
        </a>

        <a
          href="#services"
          class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-cyan-600 hover:bg-cyan-50 text-gray-900 font-bold rounded-full transition-all"
        >
          Conhecer Serviços
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-8 pt-16 border-t border-gray-200">
        <div class="space-y-1">
          <div
            class="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent"
          >
            100+
          </div>
          <div
            class="text-sm text-gray-600 uppercase tracking-wider font-medium"
          >
            Projetos Entregues
          </div>
        </div>
        <div class="space-y-1">
          <div
            class="text-5xl font-bold bg-gradient-to-r from-violet-600 to-violet-500 bg-clip-text text-transparent"
          >
            50+
          </div>
          <div
            class="text-sm text-gray-600 uppercase tracking-wider font-medium"
          >
            Clientes Satisfeitos
          </div>
        </div>
        <div class="space-y-1">
          <div
            class="text-5xl font-bold bg-gradient-to-r from-mint-600 to-mint-500 bg-clip-text text-transparent"
          >
            5+
          </div>
          <div
            class="text-sm text-gray-600 uppercase tracking-wider font-medium"
          >
            Anos no Mercado
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div
    class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
  >
    <svg
      class="w-6 h-6 text-cyan-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      ></path>
    </svg>
  </div>
</section>
