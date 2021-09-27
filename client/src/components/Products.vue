<template>
  <main>
    <div class="products"  v-if="products.length > 0">
      <div class="product-item" v-for="product of products" :key="product.id">
        <ProductItem
            :id="product.id"
            :name="product.name"
            :price="product.price"
        />
      </div>
    </div>
    <div v-else class="goods-list">
        Нет данных
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ProductItem from '@/components/ProductItem.vue';

export default defineComponent({
  name: 'Product',
  components: {
    ProductItem
  },
});
</script>
<script setup lang="ts">
import { onBeforeMount, computed, watch } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const products = computed(() => store.state.products.filtered)

onBeforeMount( async () => {
  await store.dispatch('products/getAllProducts')
});

</script>
<style>

</style>
