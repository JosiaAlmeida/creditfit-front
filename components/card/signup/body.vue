<script setup>
import { useAuthStore } from "@/store/auth";
import { useCompanyStore } from "@/store/company";

const router = useRouter();
const useAuth = useAuthStore();
const useCompany = useCompanyStore();
const loading = ref(false);
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
const companies = computed(() => useCompany.getCompanies);

const handleSetValue = (value, field) => {
  form[field] = value;
};
const setType = (value) => {
  handleSetValue(value, "role");
};

const save = async () => {
  loading.value = true;
  await useAuth.signup(form);
  loading.value = false;
  if (useAuth.getToken) router.push("/");
};

onMounted(async () => {
  await useCompany.list();
});
</script>

<template>
  <form @submit.prevent="save()" class="card-body">
    <fieldset :disabled="loading">
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
          required
          placeholder="Seu nome completo"
        />
        <FormInputText
          :handle-function="handleSetValue"
          field="email"
          type="email"
          required
          class="mb-3 w-100"
          placeholder="Seu e-mail"
        />
      </div>
      <div class="d-flex justify-content-between gap-4">
        <FormInputText
          :handle-function="handleSetValue"
          field="cpf"
          type="text"
          required
          class="mb-3 w-100"
          :maxlength="11"
          placeholder="Seu CPF"
        />
        <FormInputText
          v-if="form.role === 'employee'"
          type="text"
          :handle-function="handleSetValue"
          field="salary"
          required
          class="mb-3 w-100"
          placeholder="Proposta salarial"
        />
        <FormInputText
          v-else
          :handle-function="handleSetValue"
          field="cnpj"
          required
          type="text"
          :maxlength="11"
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
          required
          class="mb-3 w-100"
          placeholder="Nome da sua empresa"
        />
        <FormSelect
          v-else
          field="companyId"
          required
          :handle-function="handleSetValue"
          class="mb-3 w-100"
          :companies="companies"
        />
        <FormInputText
          type="password"
          :handle-function="handleSetValue"
          field="password"
          required
          class="mb-3 w-100"
          placeholder="Senha"
        />
      </div>
      <div class="text-end">
        <FormButton text="Criar Conta" class-button="btn text-white border rounded-5" />
      </div>
    </fieldset>
  </form>
</template>

<style scoped></style>
