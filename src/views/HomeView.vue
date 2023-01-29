<template>
  <div class="home">
    <div v-if="isLoading">Cargando...</div>
    <div v-else>
      <div class="search-bar">
        <input
          class="search-bar-input"
          v-model="inSearchProduct"
          type="text"
          placeholder="Search.."
        />
        <CustomButton class="search-button" @click="search(inSearchProduct)"
          >Search</CustomButton
        >
      </div>

      <div class="user-list" v-if="products.length > 0">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
          @goDetail="goDetail"
        />
      </div>
      <div v-else>
        <p>0 products found</p>
      </div>
      <div class="div-btn">
        <button class="btn-page" id="btn_previous" @click="previousPage()">
          &#10094;
        </button>
        <button class="btn-page" id="btn_next" @click="nextPage()">
          &#10095;
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductItem from "@/components/ProductItem.vue";
import { useRouter } from "vue-router";
import useProducts from "@/composables/useProducts";
import { Product } from "@/models/product";
import CustomButton from "@/components/CustomButton.vue";
import useUsers from "@/composables/useUsers";

export default defineComponent({
  name: "HomeView",
  components: {
    ProductItem,
    CustomButton,
  },
  setup() {
    let inSearchProduct = "";
    let {
      products,
      isLoading,
      fetchProductsByFilter,
      fetchProductsPage,
      productsLength,
    } = useProducts();
    const { userIsLoggedIn, checkIfUserIsLoggedIn } = useUsers();
    const router = useRouter();
    checkIfUserIsLoggedIn();
    let offset = 0;
    fetchProductsPage(offset);
    let btn_next = document.getElementById("btn_next") as HTMLButtonElement;
    let btn_previous = document.getElementById(
      "btn_previous"
    ) as HTMLButtonElement;
    console.log("lenght " + productsLength.value);
    return {
      products,
      isLoading,
      userIsLoggedIn,
      inSearchProduct,
      productsLength,
      btn_next,
      btn_previous,
      search: (inSearchProduct: string) =>
        inSearchProduct.length > 2
          ? fetchProductsByFilter(inSearchProduct)
          : null,
      //TODO: implement pagination according to search filter
      goDetail: (product: Product) =>
        router.push({ name: "detail", params: { id: product.id } }),
      //TODO: check not outside limits
      nextPage: () => {
        console.log("lenght " + productsLength.value);
        if (productsLength.value > 0) {
          (offset += 10), console.log(offset), fetchProductsPage(offset);
        } //TODO: disable button if no more products are found
      },
      previousPage: () => {
        console.log(offset),
          offset > 0 ? (offset -= 10) : (offset = 0),
          fetchProductsPage(offset);
      },
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
  padding: 10px;
}

.search-bar {
  height: 40px;
  margin: 10px;
  justify-content: center;
}

.search-bar-input {
  width: 70%;
  height: 100%;
  margin-right: 3px;
}

.search-button {
  height: 100%;
  text-align: center;
}

.home {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
.btn-page {
  width: 25px;
  display: inline-flex;
  width: 30px;
  text-align: center;
  display: inline;
}
</style>
