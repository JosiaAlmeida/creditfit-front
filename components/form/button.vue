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
  <button :class="classButton" class="border-5">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
button {
  font-size: 12px;
}
</style>
