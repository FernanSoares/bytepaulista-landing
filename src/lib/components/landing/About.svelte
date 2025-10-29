<script lang="ts">
  import { fly } from "svelte/transition";

  const values = [
    {
      icon: "⚡",
      title: "Agilidade",
      description:
        "Metodologias modernas para entregar valor rapidamente, sem comprometer qualidade.",
      gradient: "from-cyan-500 to-cyan-300",
    },
    {
      icon: "🎯",
      title: "Foco em Resultados",
      description:
        "Cada decisão orientada por dados e métricas que realmente importam para seu negócio.",
      gradient: "from-violet-500 to-violet-300",
    },
    {
      icon: "🚀",
      title: "Tecnologia de Ponta",
      description:
        "Ferramentas mais modernas do mercado para garantir escalabilidade e performance.",
      gradient: "from-mint-500 to-mint-300",
    },
  ];
</script>

<section
  id="about"
  class="relative py-32 px-6 md:px-12 overflow-hidden bg-white"
  in:fly={{ y: 20, duration: 500, delay: 400 }}
>
  <!-- Background -->
  <div class="absolute inset-0 -z-10">
    <div
      class="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="container mx-auto max-w-7xl">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <!-- Left Side - Content -->
      <div class="space-y-8">
        <div>
          <span
            class="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500/10 to-mint-500/10 border border-violet-500/30 rounded-full text-violet-700 font-semibold text-sm uppercase tracking-wider mb-6 shadow-sm"
          >
            Sobre Nós
          </span>
          <h2 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Somos a<br />
            <span
              class="bg-gradient-to-r from-cyan-600 via-violet-600 to-mint-600 bg-clip-text text-transparent"
            >
              BytePaulista
            </span>
          </h2>
        </div>

        <div class="space-y-6 text-xl text-gray-700 leading-relaxed">
          <p>
            Uma <strong class="text-gray-900 font-semibold"
              >software house paulistana</strong
            >
            especializada em criar soluções digitais que transformam negócios e conectam
            pessoas.
          </p>

          <p>
            Combinamos <strong class="text-gray-900 font-semibold"
              >design excepcional</strong
            >
            com
            <strong class="text-gray-900 font-semibold">código robusto</strong>
            para entregar produtos que geram resultados mensuráveis e duradouros.
          </p>

          <p>
            Da estratégia à execução, cada linha de código é pensada para
            escalar com seu negócio e superar expectativas.
          </p>
        </div>

        <!-- CTA -->
        <div class="pt-4">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-lg group transition-colors"
          >
            Vamos conversar sobre seu projeto
            <svg
              class="w-5 h-5 group-hover:translate-x-2 transition-transform"
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

      <!-- Right Side - Values Grid -->
      <div class="space-y-6">
        {#each values as value}
          <div
            class="group relative p-8 bg-gray-50 hover:bg-gray-50 border border-gray-200 hover:border-cyan-500 hover:shadow-lg rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            <!-- Gradient Overlay on Hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br {value.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300 pointer-events-none"
            ></div>

            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-4">
                <div class="text-5xl">{value.icon}</div>
                <h3
                  class="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:{value.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                >
                  {value.title}
                </h3>
              </div>
              <p class="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
