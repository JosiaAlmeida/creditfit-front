<script lang="ts" setup>
defineProps({
  labelText: {
    type: String,
    defautl: "",
  },
  idInput: {
    type: String,
    default: "",
  },
  nameInput: {
    type: String,
    default: "",
  },
  classLabel: {
    type: String,
    default: "",
  },
  valueSet: {
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
  <div class="form-check d-flex gap-2 align-items-center">
    <input
      @change="() => handleFunction(valueSet)"
      class="form-check-input"
      type="radio"
      :name="idInput"
      :id="nameInput"
    />
    <label :class="classLabel" class="form-check-label" :for="nameInput">
      {{ labelText }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
label {
  font-size: 12px;
  margin-top: 5px;
}
input {
  height: 15px;
  width: 15px;
}
</style>
