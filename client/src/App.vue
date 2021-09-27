<template>
  <Cart />
  <Products />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Cart from './components/Cart.vue';
import Products from './components/Products.vue';

export default defineComponent({
  components: {
    Cart,
    Products,
  }
});
</script>
<style>

</style>
