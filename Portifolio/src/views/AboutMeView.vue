<template>
  <div class="w-full max-w-2xl mx-auto mt-10 text-center">
    <p class="text-lg font-medium mb-4">Algumas das minhas tecnologias</p>

    <!-- o card principal -->
    <div @click="toggle" class="bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors">
      Frameworks
    </div>

    <!-- Conteúdo expandido -->
    <div v-if="isOpen" class="bg-gray-100 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      Meus frameworks utilizados
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>
