<script setup>
  import {ref, onMounted} from "vue"
  import useFetch from "../utils/useFetch"

  const data = ref(null)

  onMounted(async() => {
    data.value = await useFetch()
  })
</script>

<template>
  <h1 class="text-2xl">{{ data }}</h1>  
</template>

