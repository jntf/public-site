<script setup lang="ts">
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import GreenButton from '~/components/buttons/GreenButton.vue'
import Button from '~/components/buttons/Button.vue'

// Fonction de traduction
const tryTranslation = (key: string, fallback: string) => {
  // TODO: Implémenter la logique de traduction
  return fallback
}
</script>

<template>
  <main>
    <!-- Hero Section - Style Supabase -->
    <section class="min-h-[85vh] flex flex-col justify-center relative border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 flex-grow flex flex-col justify-center py-16">
        <!-- Contenu principal centré verticalement -->
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            <span class="text-3xl md:text-4xl block mb-4 text-primary">{{ tryTranslation('home.expertise', 'Expertise automobile') }}</span>
            {{ tryTranslation('home.solutions', 'Solutions numériques') }}
          </h1>

          <p class="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            {{ tryTranslation('home.value_proposition', 'Des outils de gestion sur mesure pour transformer votre concession automobile avec une interface révolutionnaire') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <GreenButton size="lg" class="group transition-all duration-300 px-8">
              {{ tryTranslation('home.cta', 'Découvrir nos solutions') }}
              <ArrowRightIcon class="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </GreenButton>

            <Button variant="outline" size="lg" class="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 px-8">
              {{ tryTranslation('home.secondary_cta', 'Contacter un expert') }}
            </Button>
          </div>
        </div>
        
        <!-- Logos partenaires avec meilleur espacement -->
        <div class="mt-auto">
          <p class="text-center text-sm text-gray-500 dark:text-gray-400 mb-10">{{ tryTranslation('home.trusted_by', 'Ils nous font confiance') }}</p>
          <div class="flex flex-wrap justify-center items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 w-4/5 mx-auto">
            <div class="w-1/5 px-4 flex justify-center">
              <img src="/images/partner1.png" alt="Partner 1" class="h-10 dark:filter dark:invert hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div class="w-1/5 px-4 flex justify-center">
              <img src="/images/partner2.png" alt="Partner 2" class="h-10 dark:filter dark:invert hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div class="w-1/5 px-4 flex justify-center">
              <img src="/images/partner3.png" alt="Partner 3" class="h-10 dark:filter dark:invert hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div class="w-1/5 px-4 flex justify-center">
              <img src="/images/partner4.png" alt="Partner 4" class="h-10 dark:filter dark:invert hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div class="w-1/5 px-4 flex justify-center">
              <img src="/images/partner5.png" alt="Partner 5" class="h-10 dark:filter dark:invert hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
          
        <!-- Indicateur de scroll -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-60">
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Découvrir</p>
          <ChevronDownIcon class="h-5 w-5 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  </main>
</template> 