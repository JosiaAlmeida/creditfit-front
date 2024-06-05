import { defineStore } from "pinia";
import { useApi } from "@/composables/useApi";

const useLoanRequestStore = defineStore("useLoanRequestStore", {
  state: () => ({
    simulatorsTerm: [],
  }),
  getters: {
    getSimulatorsTerm: (state) => state.simulatorsTerm,
  },
  actions: {
    async simulator(amount: number, salary: number) {
      const { data, error, status } = useApi("loan-request/simulator", {
        method: "Post",
        body: { amount: amount, salary: salary },
      });
      if (!error.value) console.log(data);
    },
  },
});
