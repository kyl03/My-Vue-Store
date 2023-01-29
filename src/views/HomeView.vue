<template>

  <div class="home">
      <div v-if="isLoading">Cargando...</div>
      <div v-else>
          <div class="search-bar">
              <input v-model="inSearchProduct" type="text" placeholder="Search..">
              <CustomButton @click="search(inSearchProduct)">Search</CustomButton>
          </div>
          <div class="user-list" v-if="products.length > 0">
              <ProductItem v-for="product in products" :key="product.id" :product="product"
                   @goDetail="goDetail" />
          </div>
          <div v-else>
              <p>0 products found</p>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ProductItem from "@/components/ProductItem.vue";
import { useRouter } from "vue-router";
import useProducts from "@/composables/useProducts";
import { Product } from "@/models/product";
import products from "@/store/products";
import CustomButton from "@/components/CustomButton.vue";
import useUsers from "@/composables/useUsers";
export default defineComponent({
  name: "HomeView",
  components: {
      ProductItem,
      CustomButton
  },
  setup() {
      let inSearchProduct = ''
      let { products, isLoading, fetchProducts, fetchProductsByFilter } = useProducts();
      const{userIsLoggedIn, checkIfUserIsLoggedIn} = useUsers();
      const router = useRouter();
      checkIfUserIsLoggedIn();
      fetchProducts();

      return {
          products,
          isLoading,
          userIsLoggedIn,
          inSearchProduct,
          search: (inSearchProduct: string) => inSearchProduct.length > 2 ? fetchProductsByFilter(inSearchProduct) : null,
          goDetail: (product: Product) =>
              router.push({ name: "detail", params: { id: product.id } }),
      };
  },
});
</script>

<style scoped>
.user-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
.search-bar {
  width: 100%;
}
</style>