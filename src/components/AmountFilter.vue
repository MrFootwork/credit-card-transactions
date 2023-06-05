<script setup lang="ts">
import { storeToRefs } from "pinia";
import { watch } from "vue";

import { useSelection } from "../store/selection";

import { useCurrencyInput } from "vue-currency-input";

const props = defineProps<{
  modelValue: number;
  options: { currency: string; precision: { min?: number; max?: number } };
}>();

// selection store
const { minimalAmount } = storeToRefs(useSelection());

// currency input component
const { inputRef, setValue } = useCurrencyInput(props.options, true);

// watcher needed because of external prop changes
// selection store sets value to 0 on card change
// https://dm4t2.github.io/vue-currency-input/guide.html#external-props-changes
watch(
  () => minimalAmount.value,
  (value) => setValue(value)
);
</script>

<template>
  <div class="wrapper">
    <label for="input-amount"><h3>Amount Filter</h3></label>
    <input id="input-amount" ref="inputRef" />
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
