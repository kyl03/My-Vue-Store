import fakeShopApi from "@/api/fakeShopApi";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "@/store/products/state";
import { Product } from "@/models/product";

const actions: ActionTree<IProductsState, IState> = {
  async fetchProducts({ commit }) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
      "/products"
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state products
    commit("setProducts", data);
  },
  async fetchProductById({ commit }, productId: number) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
      `/products/${productId}`
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state product
    commit("setSelectedProduct", data);
  },

  async fetchProductsByFilter({ commit }, filter: string) {
    // commit llama a la mutación para poner isLoading = true
    commit("setIsLoading", true);
    console.log("fetchProductByFilter: " + filter);
    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
      `/products/?title=${filter.toLowerCase()}`
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state products
    commit("setFilteredProducts", data);
  },
  async fetchProductsPage({ commit }, previous_limit: number) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
      `/products?offset=${previous_limit}&limit=10`
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state products

    commit("setProducts", data);
  },
};

export default actions;
