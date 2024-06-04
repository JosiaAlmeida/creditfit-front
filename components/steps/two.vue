<script lang="ts" setup></script>

<template>
  <div>
    <p>Divididas em:</p>
    <div class="row">
      <div v-for="i in 4" :key="i" class="col-6 mb-4">
        <CardTerm :selected="i == 2" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
