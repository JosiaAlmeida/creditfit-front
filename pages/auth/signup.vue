<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Creditfit - Criar Conta",
});
</script>

<template>
  <div class="vh-100 bg-auth">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-md-6 mx-auto">
          <Card>
            <CardSignupHeader />
            <CardSignupBody
          /></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-auth {
  background: #d1d0d0f0 !important;
}
</style>
