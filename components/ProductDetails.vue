<template>
  <div class="product-detail-page">
    <div class="header">
      <div class="header-left">
        <div class="back-button">
          <IconChevronLeft />
        </div>
      </div>
      <div class="header-title">
        <div class="title">상품상세</div>
      </div>
    </div>

    <img class="product-image" :src="ImgLunchbox" alt="Product Image" />

    <div class="product-info">
      <div class="brand-info">
        <div class="text">Brand</div>
        <div class="icon">
          <IconRight />
        </div>
      </div>
      <div class="product-details">클래식 런치박스<br />75,000</div>
    </div>

    <div class="card-container">
      <SelectBox
        :title="'사이즈'"
        :labels="sizeLabels"
        :selected="sizeToggle"
        @click="onSizeClick"
      >
      </SelectBox>
    </div>


    <div class="footer">
      <div class="cart-button">
        <span>장바구니 담기</span>
      </div>
      <div class="footer-line"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import IconChevronLeft from "assets/icons/ic-chevron-left.svg";
import ImgLunchbox from "assets/images/lunchbox.png";
import IconRight from "assets/icons/ic-arrow-right.svg";

const sizeLabels = computed(() => {
  return ['1', '2']
});

const sizeToggle = ref(false);

const onSizeClick = (toggle) => {
  sizeToggle.value = !toggle;
};
</script>
