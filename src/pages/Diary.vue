<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

console.log('hoge')

const data = ref(null)
const api_host = import.meta.env.VITE_API_HOST

const getData = async() => {
    axios.get(`${api_host}/diary/202301`).then(res => data.value = res.data)
}
getData()
</script>

<template>
  <h1>Diary</h1>
  <p>{{ data }}</p>
</template>

<style scoped lang="sass">
</style>
