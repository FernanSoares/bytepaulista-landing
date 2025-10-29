<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<section
  id="contact"
  class="relative py-32 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50"
  in:fly={{ y: 20, duration: 500, delay: 600 }}
>
  <!-- Animated Background -->
  <div class="absolute inset-0 -z-10">
    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-violet-400/10 to-mint-400/10"
    ></div>

    <!-- Animated Orbs -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/15 rounded-full blur-3xl animate-pulse delay-700"
      ></div>
    </div>

    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#00D9FF08_1px,transparent_1px),linear-gradient(to_bottom,#00D9FF08_1px,transparent_1px)] bg-[size:4rem_4rem]"
    ></div>
  </div>

  <div class="container mx-auto max-w-7xl relative z-10">
    <div class="max-w-5xl mx-auto text-center space-y-12">
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
        <span class="text-cyan-700 font-semibold">Estamos prontos para ajudar</span>
      </div>

      <!-- Main Heading -->
      <div class="space-y-6">
        <h2 class="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
          Pronto para<br />
          <span
            class="bg-gradient-to-r from-cyan-600 via-violet-600 to-mint-600 bg-clip-text text-transparent"
          >
            transformar sua ideia
          </span><br />
          em realidade?
        </h2>

        <p
          class="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          Sem formulários. Sem burocracia. Fale direto com nossa equipe e receba
          uma proposta personalizada em até 24 horas.
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-5 justify-center pt-8">
        <a
          href="https://wa.me/5511999999999?text=Olá! Gostaria de desenvolver um projeto com a BytePaulista."
          target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl hover:shadow-cyan-600/40 text-lg overflow-hidden"
        >
          <span class="relative z-10 flex items-center gap-3">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            Falar no WhatsApp
          </span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>
        </a>

        <a
          href="mailto:contato@bytepaulista.com.br"
          class="inline-flex items-center justify-center px-10 py-5 border-2 border-gray-300 hover:border-cyan-600 hover:bg-cyan-50 text-gray-900 font-bold rounded-full transition-all text-lg group"
        >
          <svg
            class="w-6 h-6 mr-3 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          Enviar E-mail
        </a>
      </div>

      <!-- Trust Badges -->
      <div
        class="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-700"
      >
        <div class="flex items-center gap-2">
          <svg
            class="w-5 h-5 text-mint-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="font-medium">Resposta em 24h</span>
        </div>

        <div class="flex items-center gap-2">
          <svg
            class="w-5 h-5 text-mint-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="font-medium">Sem compromisso</span>
        </div>

        <div class="flex items-center gap-2">
          <svg
            class="w-5 h-5 text-mint-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="font-medium">Consultoria gratuita</span>
        </div>
      </div>
    </div>
  </div>
</section>
