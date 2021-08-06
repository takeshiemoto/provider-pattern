<template>
  <div>
    <CounterView />
    <IncrementButton />
    <DecrementButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CounterView from './CounterView.vue';
import IncrementButton from './IncrementButton.vue';
import DecrementButton from './DecrementButton.vue';

export default defineComponent({
  name: 'Counter',
  components: { DecrementButton, IncrementButton, CounterView },
});
</script>

<style scoped></style>
