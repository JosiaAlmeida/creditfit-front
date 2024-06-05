<script setup>
import { useAuthStore } from "~/store/auth";
import { useLoanRequestStore } from "~/store/loan_request";

useHead({
  title: "Creditfit - Emprestmimo",
});
const router = useRouter();
const useAuth = useAuthStore();
const useLoanRequest = useLoanRequestStore();

onMounted(async () => {
  await useLoanRequest.listMyLoanRequest(useAuth.getToken);
});

const loanRequest = computed(() => useLoanRequest.getMyLoanRequest);
const company = computed(() => useAuth.getUser.company_name);

const newLoanRequest = () => {
  router.push("/");
};
</script>

<template>
  <div class="container">
    <div class="row mb-5">
      <form class="col-md-6 mt-4 mx-auto">
        <BreadCrumb />
        <div class="mt-4">
          <Card class-card="shadow border-0 rounded-3">
            <div class="card-body pb-5">
              <BoxInfo
                class="mt-3"
                text="Você solicitou seu empréstimo! Agora aguarde as etapas de análises serem concluídas!"
              />
              <div class="accordion" id="accordionExample">
                <LoanRequest
                  v-for="(request, i) in loanRequest"
                  :key="i"
                  class="mt-3"
                  :getStatus="request.status"
                  :indice="i + 1"
                  :amount="request.amount"
                  :startDate="request.startMonth"
                  :endDate="request.expireMonth"
                  :term="request.term"
                  :company-name="company"
                />
              </div>
            </div>
          </Card>
          <div class="d-flex gap-3 mt-4 justify-content-end">
            <FormButton
              text="Voltar"
              type="button"
              :handle-function="newLoanRequest"
              class-button="btn-global-outline-primary rounded-5 px-5 btn py-1 bg-white"
            />
            <FormButton
              type="button"
              :handle-function="newLoanRequest"
              text="Novo empréstimo"
              :class-button="`btn-global-primary rounded-5  py-1 btn px-3`"
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
