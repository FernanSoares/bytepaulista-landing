<script lang="ts">
  import { fly, fade } from "svelte/transition";

  const floatingCards = [
    {
      icon: "⚡",
      text: "Performance",
      delay: 0,
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: "🎨",
      text: "Design",
      delay: 200,
      gradient: "from-violet-500 to-violet-600",
    },
    {
      icon: "🚀",
      text: "Inovação",
      delay: 400,
      gradient: "from-mint-500 to-mint-600",
    },
    {
      icon: "✨",
      text: "Qualidade",
      delay: 600,
      gradient: "from-cyan-500 to-violet-500",
    },
    {
      icon: "📈",
      text: "Escalável",
      delay: 800,
      gradient: "from-violet-500 to-mint-500",
    },
    {
      icon: "💬",
      text: "Suporte",
      delay: 1000,
      gradient: "from-mint-500 to-cyan-500",
    },
  ];
</script>

<section
  class="relative min-h-screen flex items-center px-6 md:px-12 pt-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50"
  in:fly={{ y: 20, duration: 500 }}
>
  <!-- Animated Background -->
  <div class="absolute inset-0 -z-10">
    <!-- Gradient Orbs - Pontos de Luz -->
    <div
      class="absolute top-20 left-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute top-40 right-20 w-96 h-96 bg-violet-400/15 rounded-full blur-3xl animate-pulse delay-700"
    ></div>
    <div
      class="absolute bottom-40 left-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"
    ></div>
    <div
      class="absolute top-1/3 right-1/4 w-72 h-72 bg-mint-400/20 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700"
    ></div>
    <div
      class="absolute top-1/2 left-1/3 w-60 h-60 bg-cyan-300/25 rounded-full blur-2xl animate-pulse delay-1000"
    ></div>

    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#00D9FF08_1px,transparent_1px),linear-gradient(to_bottom,#00D9FF08_1px,transparent_1px)] bg-[size:4rem_4rem]"
    ></div>
  </div>

  <div class="container mx-auto max-w-7xl relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left Column - Content -->
      <div class="space-y-10">
        <!-- Badge -->
        <div
          in:fly={{ y: 20, duration: 500, delay: 100 }}
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow animate-badge-float"
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
          in:fly={{ y: 20, duration: 600, delay: 200 }}
          class="text-5xl md:text-7xl font-bold leading-tight tracking-normal text-gray-900"
        >
          Transformamos<br />
          <span
            class="bg-gradient-to-r from-cyan-600 via-violet-600 to-mint-600 bg-clip-text text-transparent font-bold"
          >
            suas ideias em
          </span><br />
          realidade digital
        </h1>

        <!-- Description -->
        <p
          in:fly={{ y: 20, duration: 600, delay: 300 }}
          class="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed"
        >
          Somos especialistas em criar produtos digitais excepcionais. Do
          conceito à execução, desenvolvemos soluções que <strong
            class="text-gray-900 font-semibold">transformam negócios</strong
          >
          e
          <strong class="text-gray-900 font-semibold">geram resultados</strong>.
        </p>

        <!-- CTAs -->
        <div
          in:fly={{ y: 20, duration: 600, delay: 400 }}
          class="flex flex-col sm:flex-row gap-5 pt-6"
        >
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
        <div 
          in:fly={{ y: 20, duration: 600, delay: 500 }}
          class="grid grid-cols-3 gap-8 pt-16 border-t border-gray-200"
        >
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

      <!-- Right Column - Floating Cards & Visual -->
      <div class="relative hidden lg:block h-[600px]">
        <!-- Mesh Gradient Background -->
        <div class="absolute inset-0 opacity-40">
          <div
            class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full blur-3xl animate-pulse"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-violet-400/30 to-transparent rounded-full blur-3xl animate-pulse delay-700"
          ></div>
        </div>

        <!-- Floating Cards -->
        <div class="relative h-full">
          {#each floatingCards as card, i}
            <div
              in:fly={{ y: 50, duration: 600, delay: card.delay }}
              class="absolute animate-float"
              style="
                top: {(i % 3) * 30 + 10}%;
                left: {(i % 2) * 50 + 10}%;
                animation-delay: {i * 0.5}s;
              "
            >
              <div
                class="group relative p-6 bg-white/80 backdrop-blur-md border border-gray-200 hover:border-cyan-400 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <!-- Gradient Overlay on Hover -->
                <div
                  class="absolute inset-0 bg-gradient-to-br {card.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                ></div>

                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div
                    class="text-4xl group-hover:scale-125 transition-transform duration-300"
                  >
                    {card.icon}
                  </div>
                  <div
                    class="text-sm font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:{card.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                  >
                    {card.text}
                  </div>
                </div>

                <!-- Shine Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"
                ></div>
              </div>
            </div>
          {/each}
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
