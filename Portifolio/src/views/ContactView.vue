<template>
    <div id="Contact" class="p-10">
        <h3 class="text-[#1b4480] text-4xl font-bold mb-12 text-center">
            <b>Entre em Contato</b>
        </h3>

        <!-- formilario-->
        <section class="bg-white shadow-xl rounded-xl py-12 px-8 max-w-3xl mx-auto mb-16">
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                    <label for="name" class="block text-gray-700 font-medium mb-2">Nome</label>
                    <input type="text" 
                           id="name" 
                           v-model="formData.name"
                           class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#1b4480]"
                           required>
                </div>
                
                <div>
                    <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" 
                           id="email" 
                           v-model="formData.email"
                           class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#1b4480]"
                           required>
                </div>

                <div>
                    <label for="message" class="block text-gray-700 font-medium mb-2">Mensagem</label>
                    <textarea id="message" 
                              v-model="formData.message"
                              rows="4"
                              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#1b4480]"
                              required></textarea>
                </div>

                <button type="submit" 
                        class="w-full bg-[#1b4480] text-white py-2 px-4 rounded-lg hover:bg-[#143465] transition-colors">
                    Enviar Mensagem
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

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            // Aqui você pode adicionar a lógica para enviar o formulário
            console.log('Formulário enviado:', this.formData)
            // Limpar o formulário após envio
            this.formData = {
                name: '',
                email: '',
                message: ''
            }
        }
    }
}
</script>
