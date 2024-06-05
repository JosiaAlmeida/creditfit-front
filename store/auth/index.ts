import { defineStore } from "pinia";

export const useAuthStore = defineStore("useAuthStore", {
  state: () => ({
    user: {},
  }),
  actions: {
    async signup(data: ICreateUser) {
      const dataSave = await useFetch("/auth/signup", {
        method: "Post",
        body: data,
      });
      console.log(dataSave);
    },
  },
  // persist: true,
});

interface ICreateUser {
  full_name: string;
  cpf: string;
  email: string;
  password: string;
  role: string;
  companyName?: string;
  cnpj?: string;
  companyId?: number;
  salary: number;
}
