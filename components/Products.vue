<template>
  <div class="products-container">
    <div class="product">
      <div class="product-border"></div>
      <div class="content">
        <div class="image" @click="onClick">
          <div class="image-inner">
            <div class="rotated-border">
              <img :src="product.itemImage.imageUrl" />
            </div>
          </div>
        </div>
        <div class="details">
          <div class="brand">
            <div class="brand-name h-4 justify-start items-center gap-0.5 inline-flex">
              <div class="text-center text-black text-xs font-bold font-['Pretendard'] leading-none">브랜드명</div>
              <div class="brand-arrow w-3 h-3 pl-[3.65px] pr-[3.29px] py-[1.65px] justify-center items-center flex overflow-hidden">
                <IconRight />
              </div>
            </div>
          </div>
          <div class="description" @click="onClick">
            <div class="description-text">{{ product.itemName }}</div>
            <div class="price">
              <div class="price-row">
                <div class="discount">{{ product.discountRate }}%</div>
                <div class="final-price">{{ useThousandComma(product.sellPrice) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useThousandComma } from '@/composable';
import IconRight from "assets/icons/ic-arrow-right.svg";

const props = defineProps({
  product: Object
});

const router = useRouter();

const onClick = (e) => {
  router.push({ path: `/details/${props.product?.itemNo}` });
};
</script>
<style scoped>
.products-container {
  @apply flex flex-wrap mx-auto w-full bg-white gap-4 justify-between overflow-hidden;
}

.product {
  @apply w-full h-full relative;
}

.product .product-border {
  @apply w-full h-full left-0 top-0 absolute border;
}

.content {
  @apply h-full left-0 top-0 absolute flex-col justify-center items-start gap-2.5;
}

.image {
  @apply self-stretch justify-start items-center gap-2.5 inline overflow-hidden cursor-pointer;
}

.image-inner {
  @apply grow shrink basis-0 flex-col justify-start items-start inline-flex overflow-hidden;
}

.rotated-border {
  @apply self-stretch w-full h-full origin-top-left justify-start items-start inline-flex;
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
  @apply self-stretch px-2.5 pb-2.5 flex-col justify-start items-start gap-2 inline-flex;
}

.brand {
  @apply self-stretch justify-start items-start gap-0.5 flex;
}

.brand-name {
  @apply self-stretch flex items-center;
}

.brand-icon {
  @apply w-4 h-4 pl-[3.65px] pr-[3.29px] py-[1.65px] justify-center items-center overflow-hidden;
}

.description {
  @apply self-stretch flex-col justify-start items-start gap-0.5 flex cursor-pointer;
}

.description-text {
  @apply self-stretch text-black text-xs font-normal font-['Pretendard'] leading-none;
}

.price {
  @apply self-stretch h-5 flex-col justify-start items-start gap-0.5 flex;
}

.price-row {
  @apply flex items-center gap-2;
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
