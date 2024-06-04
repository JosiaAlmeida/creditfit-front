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
  classLabel: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="form-check d-flex gap-2 align-items-center">
    <input class="form-check-input" type="radio" :name="idInput" :id="idInput" />
    <label :class="classLabel" class="form-check-label" :for="idInput">
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
