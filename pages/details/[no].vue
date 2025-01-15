<template>
  <div class="product-detail-page">
    <div class="header">
      <div class="header-left" @click="onClickBack">
        <div class="back-button">
          <IconChevronLeft />
        </div>
      </div>
      <div class="header-title">
        <div class="title">상품상세</div>
      </div>
    </div>
    <div class="content-container no-scrollbar">
      <img class="product-image" :src="ImgLunchbox" alt="Product Image" />

      <div class="product-info">
        <div class="brand-info">
          <div class="text">Brand</div>
          <div class="icon">
            <IconRight />
          </div>
        </div>
        <div class="product-details">{{ item.itemName }}<br />{{ item.sellPrice | thousandComma }}</div>
      </div>

      <div class="card-container">
        <SelectBox
          v-for="(data, index) in selectBoxData"
          :key="index"
          :title="data.title"
          :labels="data.labels"
          :selected="data.selected"
          @click="data.onClick"
          @selected="data.onSelected"
        />
      </div>
    </div>
    <div class="cart-footer" :class="{ disabled: !isAllSelected }">
      <div class="cart-footer-container" @click="onAddCart">
        <div class="cart-footer-button-container">
          <div class="cart-footer-button">
            <div class="cart-footer-button-text">장바구니 담기</div>
          </div>
        </div>
      </div>
      <div class="cart-footer-line-container">
        <div class="footer-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import IconChevronLeft from "assets/icons/ic-chevron-left.svg";
import ImgLunchbox from "assets/images/lunchbox.png";
import IconRight from "assets/icons/ic-arrow-right.svg";
import ProductInfo from "@/data/products.js";

const route = useRoute();
const router = useRouter();

const toggles = ref({ size: false, color: false, option: false });
const selectedData = ref({ size: null, color: null, option: null });
const listData = ref({ size: null, color: null, option: null });

const selectBoxData = computed(() => [
  {
    title: '사이즈',
    labels: listData.value.size,
    selected: toggles.value.size,
    onClick: () => toggleHandler('size'),
    onSelected: (value) => selectHandler('size', value)
  },
  {
    title: '색상',
    labels: listData.value.color,
    selected: toggles.value.color,
    onClick: () => toggleHandler('color'),
    onSelected: (value) => selectHandler('color', value)
  },
  {
    title: '추가옵션',
    labels: listData.value.option,
    selected: toggles.value.option,
    onClick: () => toggleHandler('option'),
    onSelected: (value) => selectHandler('option', value)
  }
]);

const item = computed(() => ProductInfo.result.find(item => item.itemNo === Number(route.params.no)));

const isAllSelected = computed(() => {
  return Object.values(selectedData.value).every((value) => value !== null);
});

const onClickBack = () => router.back();

const toggleHandler = (key) => {
  console.log(key)
  toggles.value[key] = !toggles.value[key];
};

const selectHandler = (key, value) => {
  selectedData.value[key] = value;
};

const onAddCart = () => {
  if (!isAllSelected.value) {
    return;
  }
  router.push({ path: `/cart`, query: selectedData.value });
};

watch(
    () => item,
    () => {
      listData.value.size = Object.keys(item.value.options);
    },
    { immediate: true }
);

watch(
    () => selectedData.value.size,
    (size) => {
      listData.value.color = size ? item.value.options[size].color : null;
      listData.value.option = size ? item.value.options[size].option : null;
    }
);

</script>
