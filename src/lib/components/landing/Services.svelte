<script lang="ts">
  import { fly } from "svelte/transition";

  const services = [
    {
      number: "01",
      title: "Desenvolvimento Web",
      description:
        "Sites e aplicações web modernas que convertem visitantes em clientes. Performance, design e código de qualidade empresarial.",
      tags: ["SvelteKit", "React", "Next.js", "Vue"],
      gradient: "from-cyan-500 to-cyan-300",
      icon: "🌐",
    },
    {
      number: "02",
      title: "Apps Mobile",
      description:
        "Experiências mobile nativas e híbridas para iOS e Android. Seu produto no bolso de milhões de usuários.",
      tags: ["React Native", "Flutter", "Swift", "Kotlin"],
      gradient: "from-violet-500 to-violet-300",
      icon: "📱",
    },
    {
      number: "03",
      title: "Sistemas Customizados",
      description:
        "Soluções sob medida para desafios únicos. Automação, integrações e sistemas que escalam com seu negócio.",
      tags: ["APIs", "Cloud", "DevOps", "IA"],
      gradient: "from-mint-500 to-mint-300",
      icon: "⚙️",
    },
  ];
</script>

<section
  id="services"
  class="relative py-32 px-6 md:px-12 overflow-hidden"
  in:fly={{ y: 20, duration: 500, delay: 200 }}
>
  <!-- Background -->
  <div class="absolute inset-0 -z-10">
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="container mx-auto max-w-7xl">
    <!-- Header -->
    <div class="max-w-3xl mb-24">
      <span
        class="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-6"
      >
        Nossos Serviços
      </span>
      <h2 class="text-5xl md:text-6xl font-bold mb-6">
        Como podemos<br />
        <span class="text-gray-500">impulsionar seu negócio</span>
      </h2>
      <p class="text-xl text-gray-400 leading-relaxed">
        Combinamos estratégia, design e tecnologia de ponta para criar soluções
        que fazem a diferença real no seu mercado.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="space-y-0">
      {#each services as service, index (service.number)}
        <div
          class="group relative border-t border-cyan-500/10 py-12 transition-all duration-500 hover:bg-navy-900/30"
        >
          <!-- Hover Gradient Line -->
          <div
            class="absolute top-0 left-0 h-[1px] w-0 bg-gradient-to-r {service.gradient} group-hover:w-full transition-all duration-700"
          ></div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <!-- Number & Icon -->
            <div class="md:col-span-2 flex items-center gap-4">
              <span
                class="text-7xl font-bold bg-gradient-to-br {service.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500"
              >
                {service.number}
              </span>
            </div>

            <!-- Content -->
            <div class="md:col-span-6 space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-4xl">{service.icon}</span>
                <h3
                  class="text-3xl font-bold group-hover:bg-gradient-to-r group-hover:{service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                >
                  {service.title}
                </h3>
              </div>
              <p class="text-lg text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>

            <!-- Tags -->
            <div class="md:col-span-4 flex flex-wrap gap-2">
              {#each service.tags as tag}
                <span
                  class="px-4 py-2 bg-navy-800/50 border border-cyan-500/10 hover:border-cyan-500/30 text-sm font-medium rounded-full text-gray-300 hover:text-white transition-all backdrop-blur-sm"
                >
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <!-- Arrow Icon -->
          <div
            class="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
          >
            <svg
              class="w-8 h-8 text-cyan-400"
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
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
