<script lang="ts" setup>
defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="selected && 'active'"
    class="card position-relative text-center shadow border-0 card-body"
  >
    <p class="mb-0">
      1x de <span class="text-global-primary fs-6 fw-bold">10.000,00</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 8px;
  p {
    font-size: 12px;
  }
  &.active {
    background: #ffd899;
  }
  &::after {
    content: "";
    height: 100%;
    width: 10px;
    background: #e66900;
    position: absolute;
    left: 0;
    top: 0;
    border-top-left-radius: 8px;
    border-end-start-radius: 8px;
  }
}
</style>
