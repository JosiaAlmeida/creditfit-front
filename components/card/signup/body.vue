<script lang="ts" setup>
const form = reactive({
  full_name: "",
  cpf: "",
  email: "",
  password: "",
  role: "employee",
  companyName: "",
  cnpj: "",
  companyId: "",
  salary: "",
});

const handleSetValue = (value: string, field: string) => {
  form[field] = value;
};
const setType = (value) => {
  handleSetValue(value, "role");
};
</script>

<template>
  <div class="card-body">
    <div class="d-flex justify-content-center gap-5 mb-3">
      <FormInputCheckbox
        label-text="Funcionário"
        class-label="text-white"
        id-input="checkbox"
        name-input="checkbox"
        value-set="employee"
        :handle-function="setType"
      />
      <FormInputCheckbox
        label-text="Representante"
        class-label="text-white"
        id-input="checkbox"
        name-input="checkbox2"
        value-set="representative"
        :handle-function="setType"
      />
    </div>
    <div class="d-flex justify-content-between gap-4">
      <FormInputText
        :handle-function="handleSetValue"
        field="full_name"
        type="text"
        class="mb-3 w-100"
        placeholder="Seu nome completo"
      />
      <FormInputText
        :handle-function="handleSetValue"
        field="email"
        type="email"
        class="mb-3 w-100"
        placeholder="Seu e-mail"
      />
    </div>
    <div class="d-flex justify-content-between gap-4">
      <FormInputText
        :handle-function="handleSetValue"
        field="cpf"
        type="text"
        class="mb-3 w-100"
        placeholder="Seu CPF"
      />
      <FormInputText
        v-if="form.role === 'employee'"
        type="text"
        :handle-function="handleSetValue"
        field="salary"
        class="mb-3 w-100"
        placeholder="Proposta salarial"
      />
      <FormInputText
        v-else
        :handle-function="handleSetValue"
        field="cnpj"
        type="text"
        class="mb-3 w-100"
        placeholder="Seu CNPJ"
      />
    </div>
    <div class="d-flex justify-content-between gap-4">
      <FormInputText
        v-if="form.role === 'representative'"
        :handle-function="handleSetValue"
        field="companyName"
        type="text"
        class="mb-3 w-100"
        placeholder="Nome da sua empresa"
      />
      <FormSelect
        v-else
        field="companyId"
        :handle-function="handleSetValue"
        class="mb-3 w-100"
      />
      <FormInputText
        type="password"
        :handle-function="handleSetValue"
        field="password"
        class="mb-3 w-100"
        placeholder="Senha"
      />
    </div>
    <div class="text-end">
      <FormButton text="Criar Conta" class-button="btn text-white border rounded-5" />
    </div>
  </div>
</template>

<style scoped></style>
