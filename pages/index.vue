<template>
  <div class="pt-2 bg-[#e4e4e4]">
    <div
      v-for="product in productList"
      :key="product"
    >
      <Products :product="product"></Products>
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

<style></style>
