<script lang="ts" setup>
import { useAuthStore } from "@/store/auth";
const useAuth = useAuthStore();
const router = useRouter();
onMounted(async () => {
  await useAuth.profile();
  if (!useAuth.getToken) router.push("/auth/signin");
});

const user = computed(() => useAuth.getUser);
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-global-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/img/logo.svg" alt="Logo da creditfit" class="img-fluid"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul v-if="user" class="navbar-nav ms-auto mb-0">
          <li class="nav-item text-white dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/img/icon/user.svg" alt="Icone de usuário" class="img-fluid" />
              {{ user?.full_name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  height: 60px;
}
</style>
