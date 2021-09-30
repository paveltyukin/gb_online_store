<template>
  <header>
    <div class="logo">
      <router-link :to="{name: 'HomePage'}">Интернет-магазин</router-link>
    </div>
  </header>
  <h1>Карточка корзины</h1>
  <div class="product-item" v-for="item of items" :key="item.product_id">
    <CartItemByProduct
        :product_id="item.product_id"
        :title="item.title"
        :price="item.price"
        :quantity="item.quantity"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CartItemByProduct from '@/components/CartItemByProduct.vue';

export default defineComponent({
  name: 'CartPage',
  components: {
    CartItemByProduct
  }
});
</script>
<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed, ComputedRef, onBeforeMount, ref } from 'vue';
import { CartActionConstants, CartGetterConstants } from '@/store/modules/cart/constants';
import { ProductActionConstants } from '@/store/modules/product/constants';
import { ICartItem } from '@/types';

const store = useStore()
const searchList = ref('');

let items: ComputedRef<ICartItem[]>  = computed((): ICartItem[] => store.getters[CartGetterConstants.GetProductsInCart]);

onBeforeMount(async () => {
  await store.dispatch(CartActionConstants.GetAllProductsInCart);
});

const filterGoods = () => {
  store.dispatch(ProductActionConstants.GetFilteredProducts, searchList.value)
};
</script>
<style scoped>

</style>
