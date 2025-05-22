<template>
    <nav class="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
        <h1 class="text-lg font-bold">Mini-Portifolio</h1>
        <ul class="flex gap-6">
            <li>
                <router-link to="/" class="hover:underline">Quem Sou Eu? </router-link>
            </li>
            <li>
                <router-link to=" " class="hover:underline">Meus projetos</router-link>
            </li>
            <li>
                <router-link to="/contact" class="hover:underline">Contato</router-link>
            </li>

        </ul>
    </nav>
</template>