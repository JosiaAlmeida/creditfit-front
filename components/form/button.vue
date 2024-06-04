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
});
</script>

<template>
  <button :class="classButton">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
button {
  font-size: 12px;
}
</style>
