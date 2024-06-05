<script setup>
import { useAuthStore } from "@/store/auth";

const router = useRouter();
const useAuth = useAuthStore();
const loading = ref(false);
const form = reactive({
  email: "",
  password: "",
});

const handleSetValue = (value, field) => {
  form[field] = value;
};

const save = async () => {
  loading.value = true;
  await useAuth.signin(form.email, form.password);
  loading.value = false;
  if (useAuth.getToken) router.push("/");
};
</script>

<template>
  <form @submit.prevent="save()" class="card-body">
    <fieldset :disabled="loading">
      <FormInputText
        required
        :handle-function="handleSetValue"
        type="email"
        field="email"
        class="mb-3 w-100"
        placeholder="Seu e-mail"
      />
      <FormInputText
        required
        :handle-function="handleSetValue"
        type="password"
        field="password"
        class="mb-3"
        placeholder="Senha"
      />
      <div class="text-end">
        <FormButton text="Entrar" class-button="btn px-5 text-white border rounded-5" />
      </div>
    </fieldset>
  </form>
</template>

<style scoped></style>
