<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="d-flex gap-3 bg-global-secondary px-3 py-2 rounded-4 align-items-center">
    <img src="/img/avatar.png" alt="Avatar" />
    <p class="mb-0">{{ text }}</p>
  </div>
</template>

<style scoped></style>
