<template>
  <div class="mx-auto w-[390px] h-[844px] relative bg-white  overflow-hidden">
    <div class="header">
      <div class="header-left" @click="onClickBack">
        <div class="back-button">
          <IconChevronLeft />
        </div>
      </div>
      <div class="justify-start items-center gap-1 inline-flex overflow-hidden">
        <div class="text-center text-black text-lg font-bold font-['Pretendard'] leading-normal">장바구니</div>
      </div>
    </div>
    <div class="h-[824px] w-full px-5 left-0 top-[60px] absolute bg-white flex-col justify-start items-start inline-flex">
      <div class="self-stretch py-2 justify-between items-center inline-flex">
        <div class="justify-start items-start gap-2 flex">
          <!-- <div class="w-[18px] h-[18px] relative bg-white rounded-sm border border-[#e4e4e4]"></div> -->
          <div class="w-[18px] h-[18px] p-0.5 bg-black rounded-sm justify-center items-center inline-flex">
            <img :src="IconArrowChecked" />
          </div>
          <div class="justify-start items-center gap-2.5 flex">
            <div class="text-black text-[13px] font-normal font-['Pretendard'] leading-[18.20px]">전체선택 (5/5)</div>
          </div>
        </div>
        <div class="px-2.5 bg-[#f4f4f4] justify-center items-center gap-0.5 flex">
          <div class="grow shrink basis-0 text-center text-black text-[11px] font-normal font-['Pretendard'] leading-[14.96px]">선택삭제</div>
        </div>
      </div>
      <CartItem />
    </div>
    <div class="h-[89px] left-0 top-[755px] absolute bg-white flex-col justify-start items-start inline-flex">
      <div class="self-stretch h-[68px] px-4 py-2 bg-white border-t border-[#f4f4f4] flex-col justify-start items-start gap-2.5 flex overflow-hidden">
        <div class="self-stretch justify-between items-center inline-flex">
          <div class="justify-center items-center gap-0.5 flex">
            <div class="text-center text-black text-base font-bold font-['Pretendard'] leading-snug">총 379,000원</div>
            <div class="w-4 h-4 px-[2.20px] pt-[4.86px] pb-[4.39px] justify-center items-center flex overflow-hidden"></div>
          </div>
          <div class="w-[200px] h-[52px] px-5 bg-black justify-center items-center flex">
            <div class="text-center text-white text-sm font-bold font-['Pretendard'] leading-tight">결제하기</div>
          </div>
        </div>
      </div>
      <div class="h-[21px] pl-[125px] pr-[126px] justify-center items-center inline-flex">
        <div class="w-[139px] h-[5px] origin-top-left rotate-180 bg-black rounded-[100px]"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import IconChevronLeft from "assets/icons/ic-chevron-left.svg";
import IconArrowChecked from "assets/images/ic-arrow-checked.png";

</script>

<style scoped>
</style>
