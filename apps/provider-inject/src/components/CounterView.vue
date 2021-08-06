<template>
  <div>count: {{ state.count }}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { counterInjectionToken } from '../composables/use-counter';

export default defineComponent({
  name: 'CounterView',
  setup() {
    const { state } = inject(counterInjectionToken);

    return {
      state,
    };
  },
});
</script>

<style scoped></style>
