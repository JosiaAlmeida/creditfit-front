import { defineStore } from "pinia";

export const useCompanyStore = defineStore("useCompanyStore", {
  state: () => ({
    companies: [],
  }),
  getters: {
    getCompanies: (state) => state.companies,
  },
  actions: {
    async list() {
      const { data, error, status } = await useFetch(
        "http://localhost:3000/company"
      );
      if (status.value == "success") {
        this.companies = data.value;
      }
    },
  },
});
