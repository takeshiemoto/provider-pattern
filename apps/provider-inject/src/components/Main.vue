<template>
  <div>
    <Counter />
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from 'vue';
import Counter from './Counter.vue';

export default defineComponent({
  name: 'Main',
  components: { Counter },
  setup() {
    onUpdated(() => {
      console.log('render:Main');
    });
  },
});
</script>

<style scoped></style>
