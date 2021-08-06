<template>
  <button @click="decrement">Decrement</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { counterInjectionToken } from '../composables/use-counter';

export default defineComponent({
  name: 'DecrementButton',
  setup() {
    const { decrement } = inject(counterInjectionToken);
    return {
      decrement,
    };
  },
});
</script>

<style scoped></style>
