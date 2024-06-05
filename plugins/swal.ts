import Swal from "sweetalert2";

export default defineNuxtPlugin((nuxtApp) => {
  const swal: typeof Swal = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  nuxtApp.provide("swal", swal);
});
