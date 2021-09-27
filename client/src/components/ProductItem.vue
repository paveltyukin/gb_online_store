<template>
  <img :src="PRODUCT_IMG" alt="Some img">
  <div class="desc">
    <h3>{{product.name}}</h3>
    <p>{{product.price}}₽</p>
    <button class="buy-btn" @click="addProductToCart(product)">Купить</button>
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

const store = useStore()
const props = defineProps<{
  id: number,
  name: string,
  price: number,
}>();

const product = reactive<IProduct>({
  id: props.id,
  name: props.name,
  price: props.price,
});

const addProductToCart = (product) => {
  store.dispatch('cart/addProductToCart', product);
};
</script>
<style scoped>

</style>
