<script lang="ts" setup>
const router = useRouter();

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
              <StepsFour />
            </div>
          </Card>
          <div class="d-flex gap-3 mt-4 justify-content-end">
            <FormButton
              text="Voltar"
              type="button"
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
