<template>
  <header>
    <div class="logo">
      <router-link :to="{name: 'HomePage'}">Интернет-магазин</router-link>
    </div>
    <div class="cart">
      <form action="#" class="search-form">
        <input type="text" class="search-field" v-model="searchList">
        <button class="btn-search" type="submit" @click.prevent="filterGoods">
          <i class="fas fa-search"></i>
        </button>
      </form>
      <button class="btn-cart" type="button">Корзина</button>
      <router-link :to="{name: 'CartPage'}">Перейти в корзину</router-link>
      <div class="product-item" v-for="item of items" :key="item.product_id">
        <CartItemByProduct
          :product_id="item.product_id"
          :title="item.title"
          :price="item.price"
          :quantity="item.quantity"
        />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CartItemByProduct from '@/components/CartItemByProduct.vue';

export default defineComponent({
  name: 'Cart',
  components: {
    CartItemByProduct
  }
});
</script>

<script setup lang="ts">
import { computed, onBeforeMount, ref, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { ProductActionConstants } from '@/store/modules/product/constants';
import { CartActionConstants, CartGetterConstants } from '@/store/modules/cart/constants';
import { PRODUCT_IMG } from '@/constants';
import { ICartItem } from '@/types';

const store = useStore()
const searchList = ref('');

let items: ComputedRef<ICartItem[]> = computed((): ICartItem[] => store.getters[CartGetterConstants.GetProductsInCart]);

onBeforeMount(async () => {
  await store.dispatch(CartActionConstants.GetAllProductsInCart);
});

const filterGoods = () => {
  store.dispatch(ProductActionConstants.GetFilteredProducts, searchList.value)
};

</script>
<style>

</style>
