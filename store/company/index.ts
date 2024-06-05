import { defineStore } from "pinia";
import { useApi } from "@/composables/useApi";

export const useCompanyStore = defineStore("useCompanyStore", {
  state: () => ({
    companies: [],
  }),
  getters: {
    getCompanies: (state) => state.companies,
  },
  actions: {
    async list() {
      const { data, error, status } = await useApi("company");
      if (status.value == "success") {
        this.companies = data.value;
      }
    },
  },
});
