<script setup>
import Navbar from './components/NavBarComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <Navbar />
    <div class="main container mx-auto px-4 py-6 flex-grow">
      <router-view></router-view>
      
    </div>
    <Footer class="sticky bottom-0" />
  </div>
</template>