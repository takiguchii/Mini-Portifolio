<template>
  <div class="w-full max-w-2xl mx-auto mt-10 text-center">
    <h1 class="text-6xl font-bold mb-8 leading-tight">
      <span class="text-black hover:text-blue-600 transition-colors duration-300">MINHAS </span>
      <span class="text-gray-600 hover:text-blue-400 transition-colors duration-300">TECNOLOGIAS</span>
    </h1>

    <!-- o card Linguagem -->
    <div @click="toggleCard('languages')"
      class="bg-gray-200 px-6 py-3 m-4 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors transition-transform hover:scale-105">
      <b>Linguagens de Programação</b>
    </div>

    <div v-if="openCards.languages" class="bg-gray-100 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      <div
        class="flex justify-center items-center space-x-4 bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-color">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" class="h-8 w-8"
          alt="csharp logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="h-8 w-8"
          alt="html5 logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="h-8 w-8"
          alt="css3 logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="h-8 w-8"
          alt="javascript logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="h-8 w-8"
          alt="python logo" />
      </div>
    </div>

    <!-- o card framework -->
    <div @click="toggleCard('frameworks')"
      class="bg-gray-200 px-6 py-3 m-4 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors transition-transform hover:scale-105">
      <b>Frameworks</b>
    </div>
    <div v-if="openCards.frameworks" class="bg-gray-100 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      <div
        class="flex justify-center items-center space-x-4 bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-color">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="h-8 w-8"
          alt="vuejs logo" />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" class="h-8 w-8"
          alt="dot-net logo" />
      </div>
    </div>

    <!-- o card ferramentas -->
    <div @click="toggleCard('tools')"
      class="bg-gray-200 px-6 py-3 m-4 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors transition-transform hover:scale-105">
      <b>Ferramentas</b>
    </div>
    <div v-if="openCards.tools" class="bg-gray-100 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      <div
        class="flex justify-center items-center space-x-4 bg-gray-200 px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-color">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="h-8 w-8" alt="git logo" />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="h-8 w-8"
          alt="github logo" />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="h-8 w-8"
          alt="docker logo" />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg" class="h-8 w-8"
          alt="jetbrains logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openCards = ref({
  languages: false,
  frameworks: false,
  tools: false
})

const toggleCard = (card) => {
  openCards.value[card] = !openCards.value[card]
}
</script>
