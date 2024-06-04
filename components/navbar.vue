<script lang="ts" setup></script>

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
        <ul class="navbar-nav ms-auto mb-0">
          <li class="nav-item text-white dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/img/icon/user.svg" alt="Icone de usuário" class="img-fluid" />
              Josia Almeida
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
