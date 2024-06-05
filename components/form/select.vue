<script setup>
defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
  field: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
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
      :required="required"
      @change="({ target }) => handleFunction(target.value, field)"
      class="form-select text-white"
      name="company"
      id="company"
    >
      <option class="text-black" value="">Selecione a empresa</option>
      <option v-for="(comp, i) in companies" :key="i" :value="comp.id" class="text-black">
        {{ comp.company_name }}
      </option>
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
