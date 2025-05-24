<template>
  <div class="w-full max-w-2xl mx-auto mt-10 text-center">
    <h1 class="text-6xl font-bold mb-8 leading-tight">
      <span class="text-black hover:text-blue-600 transition-colors duration-300">MINHAS </span>
      <span class="text-gray-600 hover:text-blue-400 transition-colors duration-300">TECNOLOGIAS</span>
    </h1>

    <!-- o card Linguagem -->
    <div @click="toggle" class="bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors">
      Linguagens de Programação
    </div>

    <div v-if="isOpen" class="bg-gray-100 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      <div
        class="flex items-center space-x-4 bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-color">

      </div>
    </div>



    <!-- o card framework -->
    <div @click="toggle" class="bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors">
      Frameworks
    </div>
    <div v-if="isOpen" class="bg-gray-100 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      <div class="flex items-center space-x-4 bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-color">     

      </div>
    </div>



    <!-- o card ferramentas  -->
    <div @click="toggle" class="bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors">
      Ferramentas
    </div>
    <div v-if="isOpen" class="bg-gray-100 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      <div class="flex items-center space-x-4 bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-color">

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
