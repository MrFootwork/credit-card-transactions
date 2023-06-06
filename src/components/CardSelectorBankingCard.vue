<script setup lang="ts">
import { computed } from 'vue';
import { useSelection } from '../store/selection';
import router from '../router';

const selectionStore = useSelection();
const { selectCardByID } = selectionStore;

const props = defineProps<{
  card: {
    id: string;
    description: string;
  };
}>();

function registerSelection() {
  selectCardByID(props.card.id);
  router.push(`/${cardType.value}`);
}

// returns 'business' or 'private' based on selection
const cardType = computed(() => {
  return props.card.description.split(' ')[0].toLowerCase();
});
</script>

<template>
  <li>
    <label :for="card.id" class="wrapper card" :class="cardType">
      <label :for="card.id" class="description">{{ card.description }}</label>
      <label :for="card.id" class="id">{{ card.id }}</label>
      <input
        :id="card.id"
        type="radio"
        name="banking-card"
        :value="card.id"
        tabindex="0"
        @click="registerSelection"
      />
    </label>
  </li>
</template>

<style scoped lang="scss">
li {
  list-style-type: none;
}

label,
input {
  cursor: pointer;
}

.wrapper.card {
  &.private {
    background-color: var(--card-background-private);
  }

  &.business {
    background-color: var(--card-background-business);
  }

  aspect-ratio: 1.586;
  width: clamp(9rem, 40vw, 16rem);
  border-radius: 1rem;

  margin: 2rem 0;
  padding: 1.5rem;

  display: flex;
  flex-flow: column;
  justify-content: start;

  // FIXME add checked style
  &:focus-within {
    outline: 3px solid var(--font-color-contrast);
    outline-offset: 2px;
  }

  input[type='radio'] {
    opacity: 0;
  }

  label {
    line-height: 2rem;
    text-align: left;
    text-indent: 0.1vw;
  }
}
</style>
