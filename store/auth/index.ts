import { defineStore } from "pinia";

export const useAuthStore = defineStore("useAuthStore", {
  state: () => ({
    user: null,
    access_token: "",
  }),
  getters: {
    getToken: (state) => state.access_token,
    getUser: (state) => state.user,
  },
  actions: {
    async signup(dataSave: ICreateUser) {
      const { $swal } = useNuxtApp();
      const { data, error, status } = await useFetch(
        "http://localhost:3000/auth/signup",
        {
          method: "Post",
          body: dataSave,
        }
      );
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
        this.access_token = data.value.data.access_token;
        this.user = data.value.data.user;
      }
    },
    async signin(email: string, password: string) {
      const { $swal } = useNuxtApp();
      const { data, error, status } = await useFetch(
        "http://localhost:3000/auth/signin",
        {
          method: "Post",
          body: { email: email, password: password },
        }
      );
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

        this.setToken(data.value.data.access_token);
      }
    },
    async profile() {
      this.getTokenActions();
      const { data, error, status } = await useFetch(
        "http://localhost:3000/auth/profile",
        {
          headers: {
            authorization: `Bearer ${this.getToken}`,
          },
        }
      );
      if (status.value != "success") {
        localStorage.clear();
      } else {
        this.setUser(data.value);
        this.getUserActions();
      }
    },
    setToken(token) {
      localStorage.setItem("token_creditfit", token);

      this.getTokenActions();
    },
    setUser(user) {
      localStorage.setItem("user_creditfit", JSON.stringify(user));
    },
    getTokenActions() {
      this.access_token = localStorage.getItem("token_creditfit");
    },
    getUserActions() {
      this.user = JSON.parse(localStorage.getItem("user_creditfit"));
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
