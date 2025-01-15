<template>
  <div class="index-container">
    <div class="products-grid">
      <Products
        v-for="product in productList"
        :key="product.itemId"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductInfo from "@/data/products.js";

const productList = computed(() => {
  console.log('>>>', ProductInfo.result);
  return ProductInfo.result;
});

</script>

<style scoped>
.index-container {
  @apply pt-2 bg-gray-200;
}

.products-grid {
  @apply mx-auto w-[390px] h-[844px] grid grid-cols-2 gap-4 p-4 bg-white;
}
</style>
