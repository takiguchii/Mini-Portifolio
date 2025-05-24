<template>
    <div class="flex">
        <div class="fixed left-16 top-32 w-[320px] p-8 h-[600px] bg-white rounded-xl shadow-md text-center">
            <div class="w-[220px] h-[220px] mx-auto mb-6 overflow-hidden rounded-full">
                <img src="../img/Perfil.jpg" alt="Profile Picture" class="w-full h-full object-cover">
            </div>
            <h2 class="text-2xl font-semibold mb-2 text-gray-800">Alexandre Takiguchi</h2>
            <p class="text-gray-600">Full Stack Developer</p>
        </div>

        <div class="ml-[340px] p-8 max-w-4xl animate-fadeIn">
            <h1 class="text-6xl font-bold mb-8 leading-tight">
            <span class="text-black hover:text-blue-600 transition-colors duration-300">DESENVOLVEDOR</span>
            <span class="text-gray-600 hover:text-blue-400 transition-colors duration-300">-FULL STACK</span>
            </h1>
            
            <div class="space-y-8">
            <p class="text-2xl text-gray-800 leading-relaxed font-medium border-l-4 border-purple-500 pl-4 hover:translate-x-2 transition-transform duration-300">
                Bem-vindo(a) ao meu espaço digital.
                Aqui compartilho um pouco da minha jornada no desenvolvimento web.
                Explore as seções para conhecer mais!
            </p>

            <p class="text-2xl text-gray-800 leading-relaxed font-medium border-l-4 border-blue-500 pl-4 hover:translate-x-2 transition-transform duration-300">
                Transformando ideias em realidade.
            </p>

            <p class="text-2xl text-gray-800 leading-relaxed font-medium border-l-4 border-orange-500 pl-4 hover:translate-x-2 transition-transform duration-300">
                Bem-vindo(a) ao meu espaço digital.
                Aqui compartilho um pouco da minha jornada no desenvolvimento web.
                Explore as seções para conhecer mais!
            </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardPerfilComponent'
}
</script>
