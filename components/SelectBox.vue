<template>
  <!-- <div class="image-container">
    <div class="size-container">
      <div class="size-label-container">
        <div class="size-label">{{ title }}</div>
        <div class="required-mark">*</div>
      </div>
      <div class="select-box-container">
        <div class="select-box" @click="onClick">
          <div class="select-box-label">선택</div>
          <div class="icon-container">
            <IconArrowDown />
          </div>
        </div>
        <div v-if="selected" class="label-container">
          <div
            class="label-box"
            v-for="label in labels"
            :key="label"
            @click="selectOption(label)"
          >
            <div class="label-option">{{ label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="size-container">
    <div class="size-label-container">
      <div class="size-label">{{ title }}</div>
      <div class="required-mark">*</div>
    </div>
    <div class="size-selector-container" @click="onClick">
      <div class="size-selector-text">{{ selectedValue || '선택' }}</div>
      <div class="size-selector-icon">
        <div class="icon-inner">
          <IconArrowDown />
        </div>
      </div>
    </div>
  </div>

  <div v-if="selected" class="size-options-container">
    <div
      class="size-option"
      v-for="label in props.labels"
      :key="label"
      @click="onSelected(label)"
    >
      <div class="size-option-text">{{ label?.value || label }} {{ label?.isSoldout ? '(품절)' : '' }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import IconArrowDown from "assets/icons/ic-arrow-down.svg";

const props = defineProps({
    title: String,
    labels: {
      type: Array,
      default: []
    },
    selected: {
      type: Boolean,
      default: false
    }
});

const emit = defineEmits(['click', 'selected']);

const selectedValue = ref('');

const onClick = (e) => {
  emit('click', props.selected);
};

const onSelected = (label) => {
  if (label?.isSoldout) {
    return;
  }
  selectedValue.value = label?.value || label;
  emit('click', props.selected);
  emit('selected', label);
};
</script>

<style scoped>
.size-container {
  @apply self-stretch h-[66px] flex-col justify-center items-start gap-1 inline-flex relative;
}

.size-label-container {
  @apply justify-center items-start gap-0.5 inline-flex;
}

.size-label {
  @apply text-black text-sm font-medium font-['Pretendard'] leading-tight;
}

.required-mark {
  @apply text-[#ff4800] text-sm font-medium font-['Pretendard'] leading-tight;
}

.size-selector-container {
  @apply self-stretch h-11 pl-3 pr-2.5 py-3 bg-white rounded border border-[#e4e4e4] justify-start items-center gap-1 inline-flex;
}

.size-selector-text {
  @apply grow shrink basis-0 h-6 justify-between items-center flex cursor-pointer;
  font-size: 13px;
}

.size-selector-icon {
  @apply w-6 h-6 p-0.5 justify-center items-center flex;
}

.icon-inner {
  @apply w-5 h-5 px-[2.86px] pt-[6.20px] pb-[5.72px] justify-center items-center inline-flex overflow-hidden;
}

.size-options-container {
  @apply h-[102px] px-2 py-1.5 bg-white rounded shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] flex-col justify-start items-start flex w-full cursor-pointer;
}

.size-option {
  @apply self-stretch p-1.5 rounded-sm justify-start items-center gap-2 inline-flex overflow-hidden;
}

.size-option-text {
  @apply text-black text-[13px] font-medium font-['Pretendard'] leading-[18.20px];
}
</style>