<template>
  <div class="w-full max-w-2xl mx-auto mt-10 text-center">
    <p class="text-lg font-medium mb-4">Algumas das minhas tecnologias</p>

    <!-- o card principal -->
    <div @click="toggle" class="bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors">
      Frameworks
    </div>

    <!-- Conteúdo expandido -->
    <div v-if="isOpen" class="bg-gray-100 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      <div class="flex items-center space-x-4">
        <img src="https://skillicons.dev/icons?i=cs" height="40" alt="csharp logo" />
        <img width="12" />
        <img src="https://skillicons.dev/icons?i=html" height="40" alt="html5 logo" />
        <img width="12" />
        <img src="https://skillicons.dev/icons?i=css" height="40" alt="css3 logo" />
        <img width="12" />
        <img src="https://skillicons.dev/icons?i=js" height="40" alt="javascript logo" />
        <img width="12" />
        <img src="https://skillicons.dev/icons?i=py" height="40" alt="python logo" />
        <img width="12" />
        <img src="https://skillicons.dev/icons?i=docker" height="40" alt="docker logo" />
        <img width="12" />
        <img src="https://skillicons.dev/icons?i=git" height="40" alt="git logo" />
      </div>
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
