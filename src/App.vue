<script setup lang="ts">
</script>

<template>
  <div id="app">
    <!-- 添加导航链接 -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/blog">Blog Post</router-link> |
      <router-link to="/blogs">Blog List</router-link> |
      <router-link to="/create">Create Post</router-link>
    </nav>

    <!-- 渲染当前路由匹配的组件 -->
    <router-view />
  </div>
</template>

<style scoped>
/* 修改导航栏样式 */
nav {
  padding: 20px;
  text-align: center; /* 确保导航项居中 */
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
  transition: color 0.3s ease;
}

nav a:hover {
  text-decoration: underline;
  color: #3bb772;
}

/* 当前页链接样式 */
nav a.router-link-active {
  font-weight: bold;
  color: #00bfff;
}

/* 主体内容样式 */
h1 {
  font-size: 48px;
  color: white; /* 确保文字颜色与背景对比明显 */
  margin-top: 50px;
}

p {
  color: #61dafb;
}

a {
  color: #61dafb;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #42b983;
}

</style>
