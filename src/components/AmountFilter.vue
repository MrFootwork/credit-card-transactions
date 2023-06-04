<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useSelection } from "../store/selection";

import { useCurrencyInput } from "vue-currency-input";

const props = defineProps<{
  modelValue: number;
  options: { currency: string };
}>();

const selectionStore = useSelection();
const { minimalAmount } = storeToRefs(selectionStore);

const { inputRef } = useCurrencyInput(props.options);

// FIXME check out external prop changes
// https://dm4t2.github.io/vue-currency-input/guide.html#external-props-changes
</script>

<template>
  <div class="wrapper">
    <label for="input-amount"><h3>Amount Filter</h3></label>
    <input
      id="input-amount"
      ref="inputRef"
      v-model="minimalAmount"
      type="text"
    />
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
