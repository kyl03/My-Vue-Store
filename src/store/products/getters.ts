import { GetterTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const getters: GetterTree<IProductsState, IState> = {
    getProducts(state){
        return state.products;
    },
    getIsLoading(state){
        return state.isLoading;
    },
    getProduct(state){
        return state.selectedProduct;
    },
    getProductsByFilter(state){
        return state.filteredProducts;
    }
};

export default getters;