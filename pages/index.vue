<script setup>
import { useAuthStore } from "~/store/auth";

const router = useRouter();
const useAuth = useAuthStore();

const amount = ref(10000);
const step = ref(0);

const infoStep = [
  {
    titleText: "Simular Empréstimo",
    infoBox:
      "Você possui saldo para Crédito Consignado pela empresa Seguros Seguradora. Faça uma simulação! Digite quanto você precisa:",
    button: "Simular empréstimo",
  },
  {
    titleText: "Simular Empréstimo",
    infoBox: "Escolha a opção de parcelamento que melhor funcionar para você:",
    button: "Seguinte",
  },
  {
    titleText: "Resumo da simulação",
    infoBox:
      "Pronto! Agora você já pode solicitar o empréstimo e recebê-lo na sua Conta Credifit! Veja o resumo da simulação!",
    button: "Solicitar empréstimo",
  },
];

const maxAmount = computed(() => useAuth.getUser.salary * 0.35);

const handleStep = () => {
  const element = step.value + 1;
  const validateStep = element > infoStep.length - 1;
  step.value = validateStep ? infoStep.length - 1 : element;
  if (validateStep) router.push("/emprestimos");
};

const lessStep = () => {
  const element = step.value - 1;
  step.value = element < 0 ? 0 : element;
};

const setAmount = (value) => {
  amount.value = value;
};
</script>

<template>
  <div class="container">
    <div class="row mb-5">
      <form @submit.prevent="handleStep()" class="col-md-6 mt-4 mx-auto">
        <BreadCrumb />
        <div class="mt-4">
          <Card class-card="shadow border-0 rounded-3">
            <div class="card-body pb-5">
              <h6 class="text-global-primary fw-bold">{{ infoStep[step].titleText }}</h6>
              <BoxInfo class="mt-3" :text="infoStep[step].infoBox" />
              <div v-if="step < 2" class="my-4 d-flex justify-content-center mx-auto">
                <h5
                  class="fw-bold text-nowrap bg-global-primary-10 px-3 py-2 rounded-5 text-global-primary-2"
                >
                  {{
                    amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                  }}
                </h5>
              </div>
              <StepsOne
                v-if="step == 0"
                :handle-function="setAmount"
                :amount-range="amount"
                :max-amount="maxAmount"
              />
              <StepsTwo v-if="step == 1" />
              <StepsThree v-if="step == 2" />
            </div>
          </Card>
          <div class="d-flex gap-3 mt-4 justify-content-end">
            <FormButton
              :handle-function="lessStep"
              :disabled="step == 0"
              text="Voltar"
              type="button"
              class-button="btn-global-outline-primary rounded-5 px-5 btn py-1 bg-white"
            />
            <FormButton
              :text="infoStep[step].button"
              :class-button="`btn-global-primary rounded-5  py-1 btn ${
                step == 1 ? 'px-5' : 'px-3'
              }`"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.min-card-to-text {
  width: 35%;
}
</style>
