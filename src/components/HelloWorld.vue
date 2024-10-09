<!-- src/components/HelloWorld.vue -->
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const message = ref<string>('Hello, Vue 3 + TypeScript!')
    return { message }
  },
})
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
