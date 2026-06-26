<template>
  <Layout>

    <h1 class="text-3xl font-bold mb-6">
      👥 Daftar User
    </h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

     <div
        v-for="user in users"
        :key="user.id"
        class="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition"
        >

        <img
            :src="user.image"
            class="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
        >

        <h2 class="text-xl font-bold mt-4">
            {{ user.firstName }} {{ user.lastName }}
        </h2>

        <p class="text-gray-500">
            {{ user.email }}
        </p>

        <p class="text-sm text-gray-400 mt-2">
            {{ user.phone }}
        </p>

       <router-link
        :to="'/users/' + user.id"
        class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
        Detail
        </router-link>

        </div>

    </div>

  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const users = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users')

    users.value = response.data.users

  } catch (error) {
    console.log(error)
  }
})
</script>