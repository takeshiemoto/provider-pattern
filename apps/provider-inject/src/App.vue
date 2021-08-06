<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';

import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { counterInjectionToken, useCounter } from './composables/use-counter';

export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Main,
    Header,
  },
  setup() {
    provide(counterInjectionToken, useCounter());

    return {};
  },
});
</script>
