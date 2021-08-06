<template>
  <button @click="increment">Increment</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { counterInjectionToken } from '../composables/use-counter';

export default defineComponent({
  name: 'IncrementButton',
  setup() {
    const { increment } = inject(counterInjectionToken);
    return {
      increment,
    };
  },
});
</script>

<style scoped></style>
