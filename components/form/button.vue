<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
  classButton: {
    type: String,
    default: "btn",
  },
  type: {
    type: String,
    default: "submit",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  handleFunction: {
    type: Function,
    default: (value: any) => value,
  },
});
</script>

<template>
  <button
    :type="type"
    @click="handleFunction()"
    :disabled="disabled"
    :class="classButton"
  >
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
button {
  font-size: 12px;
  box-shadow: 0 !important;
  border: 0;
  &:disabled {
    background: #d6dbdb !important;
  }
}
</style>
