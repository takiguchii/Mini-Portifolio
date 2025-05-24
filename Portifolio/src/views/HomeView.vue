<template>
    <div class="flex">
        <div class="fixed left-16 top-32 w-[320px] p-8 h-[600px] bg-white rounded-xl shadow-md text-center">
            <div class="w-[220px] h-[220px] mx-auto mb-6 overflow-hidden rounded-full">
                <img src="../img/Perfil.jpg" alt="Profile Picture" class="w-full h-full object-cover">
            </div>
            <h2 class="text-2xl font-semibold mb-2 text-gray-800">Alexandre Takiguchi</h2>
            <p class="text-gray-600">Full Stack Developer</p>
        </div>

        <div class="ml-[340px] p-8">
            <h1 class="text-6xl font-bold mb-6">
            <span class="text-black">DESENVOLVEDOR</span>
            <span class="text-gray-600">-FULL STACK</span>
            </h1>
   
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardPerfilComponent'
}
</script>
