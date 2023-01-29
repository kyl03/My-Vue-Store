<template>
  <div class="card">
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Last update: {{ product.updatedAt.split("T")[0] }}</p>
    <div>
      <img :src="product.images[0]" alt="" id="image" />
      <button class="w3-button w3-black w3-display-right" @click="changeImg">
        &#10095;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useProducts from "@/composables/useProducts";
export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
    },
  },
  setup(props) {
    const { product, fetchProductById } = useProducts();
    fetchProductById(props.id);
    let img_counter = 0;
    return {
      product,
      changeImg: () => {
        //get img element
        let imgElement = document.getElementById("image");
        //update counter
        if (img_counter >= product.value.images.length - 1) {
          img_counter = 0;
        } else {
          img_counter += 1;
        }
        //show image
        imgElement?.setAttribute("src", product.value.images[img_counter]);
      },
    };
  },
});
</script>
<style scoped>
.card {
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}

img {
  margin: 10px;
}
</style>
