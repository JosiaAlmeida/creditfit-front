import { defineStore } from "pinia";
import { useApi } from "@/composables/useApi";

export const useLoanRequestStore = defineStore("useLoanRequestStore", {
  state: () => ({
    simulatorsTerm: [],
    myLoanRequest: [],
  }),
  getters: {
    getSimulatorsTerm: (state) => state.simulatorsTerm,
    getMyLoanRequest: (state) => state.myLoanRequest,
  },
  actions: {
    async simulator(amount: number, salary: number) {
      const { data, error, status } = await useApi("loan-request/simulator", {
        method: "Post",
        body: { amount: amount, salary: salary },
      });
      if (!error.value) this.simulatorsTerm = data.value;
    },
    async createLoanRequest(token: string, amount: number, term: number) {
      const { $swal } = useNuxtApp();
      const { data, error, status } = await useApi("loan-request/request", {
        method: "Post",
        body: { amount: amount, term: term },
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (error.value) {
        $swal.fire({
          icon: "error",
          text: error.value.data.message || error.value.data.message[0],
        });
      } else {
        $swal.fire({
          icon: "success",
          text: "Aguarde o redirecionamento",
        });
      }

      return { status: status.value };
    },
    async listMyLoanRequest(token: string) {
      const { data, error } = await useApi("loan-request/my-loan-request", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (!error.value) {
        this.myLoanRequest = data.value.data;
      }
    },
  },
});
