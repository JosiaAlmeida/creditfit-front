<script lang="ts" setup>
const props = defineProps({
  colorInput: {
    type: String,
    default: "#fff",
  },
  field: {
    type: String,
    default: "",
  },
  maxlength: {
    type: Number,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  handleFunction: {
    type: Function,
    default: () => false,
  },
});
const cssStyle = computed(() => ({ "--color": props.colorInput }));
</script>

<template>
  <div :style="cssStyle">
    <input
      @change="({ target }) => handleFunction(target.value, field)"
      :type="type"
      :maxlength="maxlength"
      :placeholder="placeholder"
      class="form-control"
    />
  </div>
</template>

<style lang="scss" scoped>
.form-control {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color);
  border-radius: 0;
  box-shadow: none;
  font-size: 12px;
  color: var(--color);
  &::placeholder {
    color: var(--color);
  }
}
</style>
