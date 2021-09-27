<template>
  <header>
    <div class="logo">Интернет-магазин</div>
    <div class="cart">
      <form action="#" class="search-form">
        <input type="text" class="search-field" v-model="searchList">
        <button class="btn-search" type="submit" @click.prevent="filterGoods">
          <i class="fas fa-search"></i>
        </button>
      </form>
      <button class="btn-cart" type="button">Корзина</button>
      <div class="product-item" v-for="item of items" :key="item.id">
        <div class="cart-item" data-id="">
          <div class="product-bio">
            <img :src="PRODUCT_IMG" alt="Some image">
            <div class="product-desc">
              <p class="product-title">{{ item.name }}</p>
              <p class="product-quantity">Количество: {{ item.quantity }}</p>
              <p class="product-single-price">{{ item.price }} за ед.</p>
            </div>
          </div>
          <div class="right-block">
            <p class="product-price">{{ item.quantity * item.price }} ₽</p>
            <button class="del-btn" data-id="${this.id_product}">&times;</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cart',
});
</script>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const searchList = ref('');

let items = store.getters['cart/cartProducts'];

const filterGoods = () => {
  store.dispatch('products/filterGoods', searchList.value)
};

</script>
<style>

</style>
