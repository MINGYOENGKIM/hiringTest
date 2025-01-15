<template>
  <div class="products-container">
    <div class="product">
      <div class="product-border"></div>
      <div class="content">
        <div class="image">
          <div class="image-inner">
            <div class="rotated-border">
              <img :src="product.itemImage.imageUrl" />
            </div>
          </div>
          <div class="label">
            <div class="label-text">이굿위크</div>
          </div>
          <div class="icon">
            <div class="icon-inner"></div>
          </div>
        </div>
        <div class="details">
          <div class="brand">
            <div class="brand-name">브랜드명</div>
            <div class="brand-icon"></div>
          </div>
          <div class="description">
            <div class="description-text">{{ product.itemName }}</div>
            <div class="price">
              <div class="discount">{{ product.discountRate }}%</div>
              <div class="final-price">{{ product.sellPrice | thousandComma }}</div>
            </div>
          </div>
          <div class="gap"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  product: Object
});

const sizeToggle = ref(false);

const onSizeClick = (toggle) => {
  sizeToggle.value = !toggle;
};
</script>
<style scoped>
.products-container {
  @apply flex flex-wrap mx-auto w-[390px] h-[844px] bg-white gap-4 justify-between overflow-hidden;
}

.product {
  @apply w-[47%] h-[327px] relative; /* Adjust width for two items in a row */
}

.product .product-border {
  @apply w-full h-full left-0 top-0 absolute border;
}

.content {
  @apply h-full left-0 top-0 absolute flex-col justify-center items-start gap-2.5 inline-flex;
}

.image {
  @apply self-stretch h-[195px] justify-start items-center gap-2.5 inline-flex overflow-hidden;
}

.image-inner {
  @apply grow shrink basis-0 flex-col justify-start items-start inline-flex overflow-hidden;
}

.rotated-border {
  @apply self-stretch h-[195px] origin-top-left -rotate-45 justify-start items-start inline-flex;
}

.label {
  @apply px-2 py-1 bg-black rounded-sm justify-center items-center flex;
}

.label-text {
  @apply grow shrink basis-0 text-center text-white text-xs font-medium font-['Pretendard'] leading-none;
}

.icon {
  @apply w-[52px] h-[52px] p-3.5 rounded justify-center items-center flex;
}

.icon-inner {
  @apply w-6 h-6 relative overflow-hidden;
}

.details {
  @apply self-stretch h-[122px] px-2.5 pb-5 flex-col justify-start items-start gap-2 inline-flex;
}

.brand {
  @apply self-stretch h-20 flex-col justify-start items-start gap-0.5 flex;
}

.brand-name {
  @apply self-stretch h-6 py-1 rounded-sm flex-col justify-center items-start gap-2.5 flex;
}

.brand-icon {
  @apply w-3 h-3 pl-[3.65px] pr-[3.29px] py-[1.65px] justify-center items-center flex overflow-hidden;
}

.description {
  @apply self-stretch h-[54px] flex-col justify-start items-start gap-0.5 flex;
}

.description-text {
  @apply self-stretch text-black text-xs font-normal font-['Pretendard'] leading-none;
}

.price {
  @apply self-stretch h-5 flex-col justify-start items-start gap-0.5 flex;
}

.discount {
  @apply text-[#ff4800] text-sm font-bold font-['Pretendard'] leading-tight;
}

.final-price {
  @apply text-black text-sm font-bold font-['Pretendard'] leading-tight;
}

.gap {
  @apply self-stretch h-3 flex-col justify-start items-start gap-3 flex;
}
</style>
