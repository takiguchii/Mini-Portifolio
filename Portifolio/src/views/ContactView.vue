<template>
    <div id="Contact" class="p-10">
        <h3 class="text-[#1b4480] text-4xl font-bold mb-12 text-center">
            <b>Entre em Contato</b>
        </h3>

        <!-- formulario simples -->
        <section class="bg-white shadow-xl rounded-xl py-8 px-6 max-w-3xl mx-auto mb-16">
            <form class="space-y-4">
            <div>
                <input type="text" 
                   placeholder="Nome"
                   class="w-full px-4 py-2 border rounded-lg"
                   required>
            </div>
            
            <div>
                <input type="email" 
                   placeholder="Email"
                   class="w-full px-4 py-2 border rounded-lg"
                   required>
            </div>

            <div>
                <textarea 
                placeholder="Mensagem"
                rows="3"
                class="w-full px-4 py-2 border rounded-lg"
                required></textarea>
            </div>

            <button type="submit" 
                class="w-full bg-[#1b4480] text-white py-2 px-4 rounded-lg">
                Enviar
            </button>
            </form>
        </section>

        <!-- redes socias  -->
        <h3 class="text-[#1b4480] text-3xl font-bold mb-8 text-center">
            <b>Onde me encontrar?</b>
        </h3>
        <section class="bg-white shadow-xl rounded-xl py-8 px-6 max-w-4xl mx-auto">
            <div class="flex flex-wrap justify-center items-center gap-8">
                <a href="https://github.com/takiguchii" 
                   target="_blank" 
                   class="contact-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                         class="w-16 h-16 rounded-xl object-cover transition-transform hover:scale-105" 
                         alt="Github">
                    <p class="text-gray-800 mt-2 text-sm font-semibold">Github</p>
                </a>

                <a href="https://www.linkedin.com/in/alexandre-takiguchi-39214b312/" 
                   target="_blank" 
                   class="contact-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                         class="w-16 h-16 rounded-xl object-cover transition-transform hover:scale-105" 
                         alt="Linkedin">
                    <p class="text-gray-800 mt-2 text-sm font-semibold">LinkedIn</p>
                </a>
                
                <a href="https://www.instagram.com/takiguchi_al/" 
                   target="_blank" 
                   class="contact-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" 
                         class="w-16 h-16 rounded-xl object-cover transition-transform hover:scale-105" 
                         alt="Instagram">
                    <p class="text-gray-800 mt-2 text-sm font-semibold">Instagram</p>
                </a>

                <a href="https://discord.com/users/ale.cc1" 
                   target="_blank" 
                   class="contact-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" 
                         class="w-16 h-16 rounded-xl object-cover transition-transform hover:scale-105" 
                         alt="Discord">
                    <p class="text-gray-800 mt-2 text-sm font-semibold">Discord</p>
                </a>

                <a href="mailto:takiguchi.png@gmail.com" 
                   class="contact-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/552/552486.png" 
                         class="w-16 h-16 rounded-xl object-cover transition-transform hover:scale-105" 
                         alt="Email">
                    <p class="text-gray-800 mt-2 text-sm font-semibold">Email</p>
                </a>
            </div>
        </section>
    </div>
</template>

