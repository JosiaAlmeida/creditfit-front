<script lang="ts" setup>
const showMore = ref(false);

const setStateShowMore = () => {
  showMore.value = true;
};
const setStateHiddenMore = () => {
  showMore.value = false;
};
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <div class="row mt-4">
          <div class="col-6 mb-3">
            <p class="fw-bold mb-2">Empresa</p>
            <p class="mb-0">R$10.000,00</p>
          </div>
          <div v-if="showMore" class="col-6 mb-3">
            <p class="fw-bold mb-2">Total Financiado</p>
            <p class="mb-2">2 x R$ 5.000,00</p>
          </div>
          <div class="col-6 mb-3">
            <p class="fw-bold mb-2">Próximo Vencimento</p>
            <p class="mb-0">R$10.000,00</p>
          </div>
          <div class="col-6 mb-3">
            <p class="fw-bold mb-2">Número de parcelas</p>
            <p class="mb-2">2 x R$ 5.000,00</p>
          </div>
          <div class="col-6 mb-3">
            <p class="fw-bold mb-2">Valor da Parcela</p>
            <p class="mb-2">2 x R$ 5.000,00</p>
          </div>
        </div>
        <div class="text-center">
          <FormButton
            type="button"
            class="text-center text-global-primary btn btn-link"
            :text="showMore ? 'Ocultar' : 'Mais detalhes'"
            :handle-function="showMore ? setStateHiddenMore : setStateShowMore"
          >
          </FormButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion-body {
  overflow: auto;
  max-height: 250px;
}
</style>
