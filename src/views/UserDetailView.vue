<template>
  <Layout>
    <div class="bg-white rounded-xl shadow-lg p-8">

      <div v-if="user" class="text-center">

        <img
          :src="user.image"
          class="w-36 h-36 rounded-full mx-auto border-4 border-blue-500"
        >

        <h1 class="text-4xl font-bold text-blue-700 mt-6">
          {{ user.firstName }} {{ user.lastName }}
        </h1>

        <div class="mt-8 text-left max-w-md mx-auto space-y-3">

          <p><strong>📧 Email :</strong> {{ user.email }}</p>

          <p><strong>📞 Phone :</strong> {{ user.phone }}</p>

          <p><strong>🎂 Age :</strong> {{ user.age }}</p>

          <p><strong>⚧ Gender :</strong> {{ user.gender }}</p>

          <p><strong>🏢 Company :</strong> {{ user.company.name }}</p>

          <p><strong>📍 City :</strong> {{ user.address.city }}</p>

        </div>

      </div>

      <div v-else class="text-center">
        Loading...
      </div>

    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const route = useRoute()

const user = ref(null)

onMounted(async () => {
  try {

    const response = await axios.get(
      `https://dummyjson.com/users/${route.params.id}`
    )

    user.value = response.data

  } catch (error) {
    console.log(error)
  }
})
</script>