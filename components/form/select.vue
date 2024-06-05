<script lang="ts" setup>
defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
  field: {
    type: String,
    default: "",
  },
  handleFunction: {
    type: Function,
    default: () => false,
  },
});
</script>

<template>
  <div>
    <select
      @change="({ target }) => handleFunction(target.value, field)"
      class="form-select text-white"
      name="company"
      id="company"
    >
      <option value="">Selecione a empresa</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
select {
  background: transparent;
  box-shadow: none !important;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  font-size: 12px;
}
</style>
