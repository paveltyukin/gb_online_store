<template>
  <div class="cart-item" data-id="">
    <div class="product-bio">
      <img :src="PRODUCT_IMG" alt="Some image">
      <div class="product-desc">
        <p class="product-title">{{ item.title }}</p>
        <p class="product-quantity">Количество: {{ item.quantity }}</p>
        <p class="product-single-price">{{ item.price }} за ед.</p>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">{{ item.quantity * item.price }} ₽</p>
      <button class="del-btn" @click="removeProductFromCart(item.product_id)">&times;</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CartItemByProduct',
});
</script>
<script setup lang="ts">
import { PRODUCT_IMG } from '@/constants';
import { IProduct } from '@/types';
import { reactive, defineProps, defineEmits, watch } from 'vue';
import { useStore } from 'vuex'
import { CartActionConstants } from '@/store/modules/cart/constants';

const store = useStore()
const props = defineProps<{
  product_id: number,
  title: string,
  price: number,
  quantity: number,
}>();

const item = reactive<IProduct>({
  product_id: props.product_id,
  title: props.title,
  price: props.price,
  quantity: props.quantity,
});

watch(props, (first, second) => {
  item.quantity = second.quantity;
});

const removeProductFromCart = (id: number) => {
  store.dispatch(CartActionConstants.SetQuantityProductsInCart, { id, quantity: -1 });
};
</script>
