<template>
  <Cart />
  <h1>Карточка товара</h1>
  <div>
    <img :src="PRODUCT_IMG" alt="Some img">
    <div class="desc">
      <h3>{{ product.title }}</h3>
      <p>{{ product.price }}₽</p>
      <button class="buy-btn" @click="addProductToCart(product.id)">Купить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cart from '@/blocks/Cart.vue';

export default defineComponent({
  name: 'ProductPage',
  components: {
    Cart,
  }
});
</script>
<script lang="ts" setup>
import { PRODUCT_IMG } from '@/constants';
import { useRoute } from 'vue-router';
import { onBeforeMount, reactive } from 'vue';
import { useStore } from 'vuex';
import { ProductActionConstants, ProductGetterConstants } from '@/store/modules/product/constants';
import { IProduct } from '@/types';
import { CartActionConstants } from '@/store/modules/cart/constants';

const route = useRoute();
const store = useStore();

let product = reactive<IProduct>({
  id: 0,
  title: '',
  price: 0,
});

onBeforeMount( async () => {
  const product1 = await store.dispatch(ProductActionConstants.GetProduct, route.params.id);
  product.price = product1.price;
  product.title = product1.title;
  product.id = product1.id;
});

const addProductToCart = (id: number) => {
  store.dispatch(CartActionConstants.SetQuantityProductsInCart, { id, quantity: 1 });
};

</script>
<style scoped>

</style>
