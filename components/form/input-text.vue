<script lang="ts" setup>
const props = defineProps({
  colorInput: {
    type: String,
    default: "#fff",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
});
const cssStyle = computed(() => ({ "--color": props.colorInput }));
</script>

<template>
  <div :style="cssStyle">
    <input :type="type" :placeholder="placeholder" class="form-control" />
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
