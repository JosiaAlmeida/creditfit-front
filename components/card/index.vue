<script lang="ts" setup>
defineProps({
  classCard: {
    type: String,
    default: "bg-global-primary",
  },
});
</script>

<template>
  <div :class="classCard" class="card">
    <slot />
  </div>
</template>

<style scoped></style>
