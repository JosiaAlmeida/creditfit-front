<script lang="ts" setup>
const props = defineProps({
  amountRange: {
    type: Number,
  },
  handleFunction: {
    type: Function,
    default: (value: number) => value,
  },
});
const amount = computed(() => props.amountRange);
</script>

<template>
  <div>
    <input
      :value="amount"
      type="range"
      @input="({ target }) => handleFunction(Number(target.value))"
      class="w-100"
    />
  </div>
</template>

<style lang="scss" scoped>
input[type="range"] {
  background-color: #057d88 !important;
  accent-color: #057d88;
}
input[type="range"]::-webkit-slider-thumb {
  background: #057d88 !important;
}
</style>
