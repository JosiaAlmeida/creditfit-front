<script lang="ts" setup></script>

<template>
  <div>
    <p>Divididas em:</p>
    <div class="d-flex flex-wrap gap-3">
      <CardTerm v-for="i in 4" :key="i" :selected="i == 2" />
    </div>
  </div>
</template>

<style scoped></style>
