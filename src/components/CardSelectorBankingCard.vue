<script setup lang="ts">
defineProps<{
  card: {
    id: string;
    description: string;
  };
}>();
</script>

<template>
  <div class="wrapper card">
    <label> {{ card.description }}</label>
    <p>{{ card.id }}</p>
  </div>
</template>

<style scoped lang="scss">
.wrapper.card {
  background-color: green;

  margin: 1rem;
  padding: 1rem;

  display: flex;
  flex-flow: column;

  label {
    text-align: left;
  }

  p {
    text-align: left;
  }
}
</style>
