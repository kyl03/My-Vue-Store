import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = ()=>{
    const store = useStore();
    return{
        //GETTERS
        products: computed(()=> store.getters["products/getProducts"]),
        isLoading: computed(()=> store.getters["products/getIsLoading"]),
        product: computed(()=> store.getters["products/getProduct"]),
        filteredProducts: computed(()=> store.getters["products/getProductsByFilter"]),

        //ACTIONS
        fetchProducts: () => store.dispatch("products/fetchProducts"),
        fetchProductById: (productId: number) => store.dispatch("products/fetchProductById", productId),
        fetchProductsByFilter: (filter: string) =>  store.dispatch("products/fetchProductsByFilter", filter),
    };
};

export default useProducts;