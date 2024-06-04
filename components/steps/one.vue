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
</script>

<template>
  <div>
    <FormInputRange :handle-function="handleFunction" :amount-range="amountRange" />
  </div>
</template>

<style scoped></style>
