<script setup>
const props = defineProps({
  indice: {
    type: Number,
    default: 0,
  },
  amount: {
    type: Number,
    default: 0,
  },
  term: {
    type: Number,
    default: 0,
  },
  startDate: {
    type: String,
    default: "",
  },
  endDate: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
});
const { startDate, endDate } = props;
const showMore = ref(false);

const getStatus = computed(() =>
  props.status === "Recusado" ? "SOLICITAÇÃO DE EMPRÉSTIMO" : "EMPRÉSTIMO CORRENTE"
);

const nextExpirationDate = () => {
  const expireMonth = new Date(endDate);
  const startMonth = new Date(startDate);

  // Get the current date
  const currentDate = new Date();

  let nextExpirationDate = startMonth;
  while (nextExpirationDate <= currentDate) {
    nextExpirationDate = addMonths(nextExpirationDate, 1);
  }
  if (nextExpirationDate > expireMonth) {
    nextExpirationDate = null;
  }
  return nextExpirationDate?.toISOString() || startMonth;
};
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };
  return date.toLocaleString("pt-BR", options);
};
const addMonths = (date, months) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
};
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
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapse${indice}`"
        aria-expanded="false"
        :aria-controls="`#collapse${indice}`"
      >
        <img
          :src="`/img/icon/${props.status === 'Recusado' ? 'clock' : 'check'}.svg`"
          alt="Icone de estado"
          class="img-fluid icon me-3"
        />
        {{ getStatus }} {{ indice }}
      </button>
    </h2>
    <div
      :id="`collapse${indice}`"
      class="accordion-collapse collapse"
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
            <p class="mb-2">
              {{
                (amount * term).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }}
            </p>
          </div>
          <div class="col-6 mb-3">
            <p class="fw-bold mb-2">Próximo Vencimento</p>
            <p class="mb-0">{{ formatDate(nextExpirationDate()) }}</p>
          </div>
          <div class="col-6 mb-3">
            <p class="fw-bold mb-2">Número de parcelas</p>
            <p class="mb-2">{{ term }} x</p>
          </div>
          <div class="col-6 mb-3">
            <p class="fw-bold mb-2">Valor da Parcela</p>
            <p class="mb-2">
              {{ amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }}
            </p>
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
.accordion-button {
  .icon {
    height: 20px;
  }
}
</style>
