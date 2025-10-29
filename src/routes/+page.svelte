<script lang="ts">
  import Navbar from "$lib/components/landing/Navbar.svelte";
  import Hero from "$lib/components/landing/Hero.svelte";
  import Services from "$lib/components/landing/Services.svelte";
  import About from "$lib/components/landing/About.svelte";
  import ContactCTA from "$lib/components/landing/ContactCTA.svelte";
</script>

<div class="min-h-screen">
  <Navbar />

  <main>
    <Hero />
    <Services />
    <About />
    <ContactCTA />
  </main>

  <footer class="relative border-t border-cyan-500/10 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-6 md:px-12 py-20">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-lg flex items-center justify-center shadow-sm"
            >
              <span class="text-white font-bold text-xl">B</span>
            </div>
            <span
              class="text-xl font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent"
            >
              BytePaulista
            </span>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Transformando ideias em produtos digitais excepcionais desde 2020.
          </p>
          <div class="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-violet-500/20 border border-gray-200 hover:border-cyan-500/40 text-gray-600 hover:text-cyan-600 transition-all shadow-sm hover:shadow-md"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-violet-500/20 border border-gray-200 hover:border-cyan-500/40 text-gray-600 hover:text-cyan-600 transition-all shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-violet-500/20 border border-gray-200 hover:border-cyan-500/40 text-gray-600 hover:text-cyan-600 transition-all shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-bold text-gray-900 mb-6 text-lg">Serviços</h4>
          <ul class="space-y-3 text-gray-700">
            <li>
              <a
                href="#services"
                class="hover:text-cyan-600 transition-colors inline-flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 rounded-full bg-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Desenvolvimento Web
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="hover:text-cyan-600 transition-colors inline-flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 rounded-full bg-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Apps Mobile
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="hover:text-cyan-600 transition-colors inline-flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 rounded-full bg-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Sistemas Customizados
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-bold text-gray-900 mb-6 text-lg">Empresa</h4>
          <ul class="space-y-3 text-gray-700">
            <li>
              <a
                href="#about"
                class="hover:text-cyan-600 transition-colors inline-flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 rounded-full bg-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="hover:text-cyan-600 transition-colors inline-flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 rounded-full bg-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Contato
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="hover:text-cyan-600 transition-colors inline-flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 rounded-full bg-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                Portfólio
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-bold text-gray-900 mb-6 text-lg">Contato</h4>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-2">
              <svg
                class="w-5 h-5 text-cyan-600 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>São Paulo, SP</span>
            </li>
            <li>
              <a
                href="mailto:contato@bytepaulista.com.br"
                class="hover:text-cyan-600 transition-colors flex items-start gap-2"
              >
                <svg
                  class="w-5 h-5 text-cyan-600 mt-0.5"
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
                contato@bytepaulista.com.br
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5511999999999"
                class="hover:text-cyan-600 transition-colors flex items-start gap-2"
              >
                <svg
                  class="w-5 h-5 text-cyan-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                (11) 99999-9999
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700"
      >
        <p>© 2025 BytePaulista. Todos os direitos reservados.</p>
        <p class="flex items-center gap-2">
          Desenvolvido com
          <span class="text-cyan-600 animate-pulse">♥</span>
          em São Paulo
        </p>
      </div>
    </div>
  </footer>
</div>
