<template>
  <div>Footer</div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    onUpdated(() => {
      console.log('render:Main');
    });
  },
});
</script>

<style scoped></style>
