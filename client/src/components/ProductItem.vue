<template>
  <img :src="PRODUCT_IMG" alt="Some img">
  <div class="desc">
    <h3>{{ product.title }}</h3>
    <p>{{ product.price }}₽</p>
    <button class="buy-btn" @click="addProductToCart(product.id)">Купить</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductItem',
});
</script>
<script setup lang="ts">
import { PRODUCT_IMG } from '@/constants';
import { IProduct } from '@/types';
import { reactive, defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex'
import { CartActionConstants } from '@/store/modules/cart/constants';

const store = useStore()
const props = defineProps<{
  id: number,
  title: string,
  price: number,
}>();

const product = reactive<IProduct>({
  id: props.id,
  title: props.title,
  price: props.price,
});

const addProductToCart = (id) => {
  store.dispatch(CartActionConstants.SetQuantityProductsInCart, { id, quantity: 1 });
};
</script>
<style scoped>

</style>
