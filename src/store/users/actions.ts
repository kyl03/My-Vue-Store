import fakeShopApi from "@/api/fakeShopApi";
import { Login } from "@/models/login";
import { User } from "@/models/user";
import router from "@/router";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const actions: ActionTree<IUsersState, IState> = {
  async fetchUsers({ commit }) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<User[]>>(
      "/users"
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setUsers", data);
  },
  async fetchUserById({ commit }, userId: number) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<User>>(
      `/users/${userId}`
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setSelectedUser", data);
  },
  async fetchUserToken({ commit }, credentials: Login) {
    try {
      const { data } = await fakeShopApi.post("/auth/login", {
        email: credentials.email,
        password: credentials.password,
      });
      commit("setUserIsLoggedIn", true);
      console.log("fetchUserToken " + data.access_token);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      commit("setToken", data);
    } catch (error) {
      console.log(error);
      commit("setUserIsLoggedIn", false);
      alert("Not valid inputs");
    }
    router.push("/");
  },
  checkIfUserIsLoggedIn({ commit }) {
    if (localStorage.getItem("token") ?? "") {
      console.log("checkIfUserIsLoggedIn " + localStorage.getItem("token"));
      commit("setUserIsLoggedIn", true);
    } else {
      commit("setUserIsLoggedIn", false);
      router.push("/login");
      // commit("setToken", {});
    }
  },
  async fetchUserProfile({ commit }) {
    //check if user has logged in = check if there's a token saved in localstorage
    if (localStorage.getItem("token") ?? "") {
      const { data } = await fakeShopApi.get<unknown, AxiosResponse<User>>(
        "/auth/profile"
      );
      console.log(data);
      commit("setUserProfile", data);
    }
  },
  deleteProfileState({ commit }) {
    commit("setUserProfile", {});
  },
};

export default actions;
