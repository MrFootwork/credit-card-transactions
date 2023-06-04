<script setup lang="ts">
// FIXME Use currency input
// https://dm4t2.github.io/vue-currency-input/guide.html#creating-a-custom-component
import { useCurrencyInput } from "vue-currency-input";
// import { watchDebounced } from "@vueuse/core";
import { ref } from "vue";

const props = defineProps<{
  modelValue: number;
  options: { currency: string };
}>();

const input = ref("");

// const emit = defineEmits(["update:modelValue"]);

const { inputRef } = useCurrencyInput(props.options);

// watchDebounced(input, (value) => emit("update:modelValue", value), {
//   debounce: 1000,
//   maxWait: 5000,
// });
</script>

<template>
  <div class="wrapper">
    <label for="input-amount"><h3>Amount Filter</h3></label>
    <input id="input-amount" ref="inputRef" v-model="input" type="text" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin-bottom: min(10vw, 5rem);

  label {
    color: var(--font-color);
  }

  input {
    width: 100%;
    padding: 0.6rem;
    font-size: large;
    text-align: end;
  }
}
</style>
