import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { IProductsState } from "./state";

const mutations: MutationTree<IProductsState> = {
  setProducts(state: IProductsState, products: Product[]) {
    state.products = products;
  },
  setIsloading(state: IProductsState, value: boolean) {
    state.isLoading = value;
  },
  setSelectedProduct(state, product: Product) {
    state.selectedProduct = product;
  },
  setFilteredProducts(state, filteredProducts: Product[]) {
    state.products = filteredProducts;
  },
};

export default mutations;
