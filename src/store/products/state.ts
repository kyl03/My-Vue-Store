import { Product } from "@/models/product";

export interface IProductsState {
  products: Product[];
  isLoading: boolean;
  selectedProduct: Product | null;
  filteredProducts: Product[]
}

function state(): IProductsState {
  return {
    products: [],
    isLoading: false,
    selectedProduct: null,
    filteredProducts: []
  };
}
export default state;