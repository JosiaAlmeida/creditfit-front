<script lang="ts" setup>
defineProps({
  amount: {
    type: Number,
    default: 0,
  },
  termAmount: {
    type: Number,
    default: 0,
  },
  term: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="row mt-4">
    <div class="col-6">
      <p class="fw-bold mb-2">Valor a Creditar</p>
      <p class="mb-0">
        {{ amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }}
      </p>
    </div>
    <div class="col-6">
      <p class="fw-bold mb-2">Valor a financiar</p>
      <p class="mb-0">
        {{ amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }}
      </p>
    </div>
    <div class="col-6 mt-3">
      <p class="fw-bold mb-2">Parcelamento</p>
      <p class="mb-2">
        {{ term }} x R$
        {{ termAmount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
