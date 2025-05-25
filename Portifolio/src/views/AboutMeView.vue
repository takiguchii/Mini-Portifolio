<template>
  <div class="w-full max-w-2xl mx-auto mt-10 text-center">
    <h1 class="text-6xl font-bold mb-8 leading-tight">
      <span class="text-black hover:text-blue-600 transition-colors duration-300">Sobre </span>
      <span class="text-gray-600 hover:text-blue-400 transition-colors duration-300">Mim</span>
    </h1>
    <p class="text-lg leading-relaxed mx-auto mb-8 max-w-3xl text-gray-700 text-justify px-4">
      Olá! Meu nome é Alexandre, mas pode me chamar de Alê.
      Tenho paixão por tecnologia, aprendizado constante e por transformar ideias em experiências digitais.
      Atualmente, estou focado no desenvolvimento back-end, mas também gosto de entender como tudo se conecta no
      front-end.
      Sou comunicativo, gosto de trabalhar em equipe e acredito que a empatia é essencial tanto no código quanto na
      convivência.
      Estou sempre em busca de evoluir como desenvolvedor e como pessoa.
    </p>

    <!-- o card habilidades -->
    <div @click="toggleCard('languages')"
      class="bg-gray-200 px-6 py-3 m-4 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors transition-transform hover:scale-105">
      <b>Habilidades</b>
    </div>

    <div v-if="openCards.languages" class="bg-gray-200 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      <ul class="text-left">
        <li>
          👨‍💻 Linguagens: C#, JavaScript, SQL
        </li>
        <li>
          🧠 Lógica de programação: Intermediário com boa capacidade de resolução de problemas
        </li>
        <li>
          📦 Versionamento: Git e GitHub
        </li>
        <li>
          🔗 Integração de APIs REST
        </li>
        <li>
          🛠️ Frameworks: .NET (C#), Node.js (básico), Tailwind CSS
        </li>
        <li>
          💬 Soft skills: Comunicação, trabalho em equipe, liderança e empatia
        </li>
        <li>
          🌱 Sempre aprendendo mais sobre arquitetura de software, testes e boas práticas de código limpo
        </li>
      </ul>
    </div>

    <!-- o card formação -->
    <div @click="toggleCard('frameworks')"
      class="bg-gray-200 px-6 py-3 m-4 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors transition-transform hover:scale-105">
      <b>Formação</b>
    </div>
    <div v-if="openCards.frameworks" class="bg-gray-200 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700">
      <ul class="text-left">
        <li>
          🎓 Curso Superior em andamento:
          Análise e Desenvolvimento de Sistemas -
          Universidade de Marília
        </li>
      </ul>

    </div>
    <!-- o card trajetoria -->
    <div @click="toggleCard('tools')"
      class="bg-gray-200 px-6 py-3 m-4 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors transition-transform hover:scale-105">
      <b>Trajetória</b>
    </div>
    <div v-if="openCards.tools" class="bg-gray-200 mt-3 px-5 py-3 rounded-lg text-sm text-gray-700 leading-relaxed">
      <p class="mb-2 text-justify">
      Desde cedo, sempre fui muito curioso com computadores — desmontava, explorava e queria entender cada parte,
      tanto do <b>hardware</b> quanto do <b>software</b>.
      </p>
      <p class="mb-2 text-justify">
      Minha jornada na tecnologia começou de verdade no <b>SENAI</b>, no curso de Eletroeletrônica, onde
      tive meu primeiro contato com programação. Foi ali que tudo mudou — me apaixonei de verdade por transformar
      lógica em soluções reais.
      </p>
      <p class="mb-2 text-justify">
      Com o tempo, participei de <b>hackathons</b>, <b>palestras</b> e <b>maratonas de
        programação</b>, sempre em busca de novos desafios e aprendizados fora da zona de conforto.
      </p>
      <p class="mb-2 text-justify">
      Hoje estou cursando <b>Análise e Desenvolvimento de Sistemas</b> e sigo me desenvolvendo através de
      <b>pequenos projetos pessoais</b>, onde aplico o que aprendo e continuo crescendo com cada nova linha
      de código.
      </p>
      <p class="text-justify">
      Cada etapa dessa jornada representa uma parte essencial da minha evolução como desenvolvedor — e sei que ainda
      há muito mais por vir.
      </p>
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
