<template>
  <div>Header</div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    onUpdated(() => {
      console.log('render:Main');
    });
  },
});
</script>
