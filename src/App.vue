<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/TestComponent.vue";

// FIXME add following
// Pinia, vitest, cypress
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <router-link to="/test">Go To Test</router-link>
  <router-link to="/">Go To Home</router-link>

  <HelloWorld msg="Vite + Vue" />
  <Test>test</Test>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
