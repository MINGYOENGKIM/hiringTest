<template>
  <div class="self-stretch h-[156px] pb-3 bg-white border-t border-[#f4f4f4] flex-col justify-start items-end gap-1 flex">
    <div class="self-stretch h-28 flex-col justify-start items-start flex">
      <div class="self-stretch py-2.5 justify-between items-center inline-flex">
        <div class="justify-start items-center gap-2 flex">
          <div class="w-[18px] h-[18px] relative bg-white rounded-sm border border-[#e4e4e4]"></div>
          <div class="justify-start items-center gap-2.5 flex">
            <div class="text-black text-sm font-normal font-['Pretendard'] leading-tight">[Brand] 클래식 런치박스</div>
          </div>
        </div>
        <div class="w-5"></div>
        <div class="w-[18px] h-[18px] p-[3.15px] justify-center items-center flex"></div>
      </div>
      <div class="self-stretch justify-start items-start gap-3 inline-flex">
        <div class="w-[72px] h-[72px] rounded-sm justify-center items-center flex overflow-hidden">
          <img class="w-[72px] h-[72px]" src="https://via.placeholder.com/72x72" />
        </div>
        <div class="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
          <div class="self-stretch h-3.5 text-black text-[11px] font-medium font-['Pretendard'] leading-[14.96px]">75,000원</div>
          <div class="self-stretch h-3.5 text-[#474747] text-[10px] font-normal font-['Pretendard'] leading-3">할인적용 : 없음</div>
          <div class="self-stretch h-3.5 text-[#474747] text-[10px] font-normal font-['Pretendard'] leading-3">배송비 : 29CM 무료배송</div>
          <div class="self-stretch py-1 justify-start items-start gap-0.5 inline-flex overflow-hidden">
            <div class="px-1.5 py-0.5 bg-black rounded-sm justify-center items-center flex">
              <div class="grow shrink basis-0 text-center text-white text-[10px] font-medium font-['Pretendard'] leading-3">L</div>
            </div>
            <div class="px-1.5 py-0.5 bg-black rounded-sm justify-center items-center flex">
              <div class="grow shrink basis-0 text-center text-white text-[10px] font-medium font-['Pretendard'] leading-3">Teat</div>
            </div>
            <div class="px-1.5 py-0.5 bg-black rounded-sm justify-center items-center flex">
              <div class="grow shrink basis-0 text-center text-white text-[10px] font-medium font-['Pretendard'] leading-3">선물포장</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="self-stretch justify-start items-center gap-1 inline-flex">
      <div class="grow shrink basis-0 text-black text-sm font-bold font-['Pretendard'] leading-tight">77,000원</div>
      <div class="px-2.5 bg-white border border-[#e4e4e4] justify-center items-center gap-0.5 flex">
        <div class="grow shrink basis-0 text-center text-black text-[11px] font-normal font-['Pretendard'] leading-[14.96px]">쿠폰적용</div>
      </div>
      <div class="px-1.5 py-[6.50px] bg-white border border-[#e4e4e4] justify-start items-center gap-1 flex">
        <div class="w-3.5 h-3.5 px-[1.75px] justify-center items-center flex"></div>
        <div class="w-[34px] text-center text-black text-[11px] font-normal font-['Pretendard'] leading-[14.96px]">1</div>
        <div class="w-3.5 h-3.5 p-[1.75px] justify-center items-center flex"></div>
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
