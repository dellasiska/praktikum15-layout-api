<template>
  <div class="flex min-h-screen bg-gray-100">

    <Sidebar />

    <div class="flex-1 flex flex-col">

      <Header />

      <main class="flex-1 p-6">
        <slot />
      </main>

      <Footer />

    </div>

  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
</script>