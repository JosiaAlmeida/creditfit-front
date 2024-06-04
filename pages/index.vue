<script lang="ts" setup>
const amount = ref<number>(10000);
const infoText = [
  "Você possui saldo para Crédito Consignado pela empresa Seguros Seguradora. Faça uma simulação! Digite quanto você precisa:",
];
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-4 mx-auto">
        <BreadCrumb />
        <div class="mt-4">
          <Card class-card="shadow border-0 rounded-3">
            <div class="card-body pb-5">
              <h6 class="text-global-primary fw-bold">Simular Empréstimo</h6>
              <BoxInfo class="mt-3" :text="infoText[0]" />
              <div class="my-4 text-center mx-auto w-50">
                <h4 class="fw-bold bg-global-primary-10 rounded text-global-primary">
                  {{
                    amount.toLocaleString("de-DE", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  }}
                </h4>
              </div>
              <FormInputRange />
            </div>
          </Card>
          <div class="d-flex gap-3 mt-4 justify-content-end">
            <FormButton
              text="Voltar"
              class-button="btn-global-outline-primary rounded-5 px-5 btn py-1 bg-white"
            />
            <FormButton
              text="Simular empréstimo"
              class-button="btn-global-primary rounded-5 px-3 py-1 btn"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
