<template>
  <div>
    <h1>Blog List</h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="`/post/${blog.id}`">{{ blog.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogList",
  data() {
    return {
      blogs: [
        { id: 1, title: "My First Blog Post" },
        { id: 2, title: "Learning Vue with TypeScript" },
      ],
    };
  },
});
</script>
  