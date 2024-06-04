<script lang="ts" setup></script>

<template>
  <div class="card-body">
    <div class="d-flex justify-content-center gap-5 mb-3">
      <FormInputCheckbox
        label-text="Funcionário"
        class-label="text-white"
        id-input="checkbox"
      />
      <FormInputCheckbox
        label-text="Representante"
        class-label="text-white"
        id-input="checkbox"
      />
    </div>
    <div class="d-flex justify-content-between gap-4">
      <FormInputText type="text" class="mb-3 w-100" placeholder="Seu nome completo" />
      <FormInputText type="email" class="mb-3 w-100" placeholder="Seu e-mail" />
    </div>
    <div class="d-flex justify-content-between gap-4">
      <FormInputText type="text" class="mb-3 w-100" placeholder="Seu CPF" />
      <FormInputText type="number" class="mb-3 w-100" placeholder="Proposta salarial" />
    </div>
    <FormInputText type="password" class="mb-3" placeholder="Senha" />
    <div class="text-end">
      <FormButton text="Criar Conta" class-button="btn text-white border rounded-5" />
    </div>
  </div>
</template>

<style scoped></style>
