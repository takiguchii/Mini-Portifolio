<template>
    <div id="Contact" class="p-10 bg-gradient-to-b from-white to-gray-100">
        <h3 class="text-[#1b4480] text-4xl font-bold mb-12 text-center">
            Contatos
        </h3>
        <section class="bg-white shadow-xl rounded-xl py-12 px-8 max-w-6xl mx-auto">
            <div class="flex flex-wrap justify-center items-center gap-12">
                <a href="https://github.com/takiguchii" 
                   target="_blank" 
                   class="contact-card">
                    <img src="../img/25231.png" 
                         class="w-48 h-48 rounded-xl object-cover transition-transform hover:scale-105" 
                         alt="Github">
                    <p class="text-gray-800 mt-4 text-xl font-semibold">Github</p>
                </a>

                <a href="https://www.linkedin.com/in/alexandre-takiguchi-39214b312/" 
                   target="_blank" 
                   class="contact-card">
                    <img src="../img/linkedin-logo-linkedin-icon-transparent-free-png.webp" 
                         class="w-48 h-48 rounded-xl object-cover transition-transform hover:scale-105" 
                         alt="Linkedin">
                    <p class="text-gray-800 mt-4 text-xl font-semibold">LinkedIn</p>
                </a>
                
                <a href="https://www.instagram.com/takiguchi_al/" 
                   target="_blank" 
                   class="contact-card">
                    <img src="../img/1384063.png" 
                         class="w-48 h-48 rounded-xl object-cover transition-transform hover:scale-105" 
                         alt="Instagram">
                    <p class="text-gray-800 mt-4 text-xl font-semibold">Instagram</p>
                </a>
            </div>
        </section>
    </div>
</template>

<style scoped>
.contact-card {
    @apply flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg;
}
</style>