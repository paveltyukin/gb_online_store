<template>
  <Cart />
  <Products />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Cart from '@/blocks/Cart.vue';
import Products from '@/blocks/Products.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Cart,
    Products,
  }
});
</script>
<style scoped>

</style>
