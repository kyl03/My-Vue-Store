<template>
  <!-- <div class="user-item">
        <img class="card-img-top" :src="product.images[0]" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">Price: {{ product.price }}</p>
            <a class="btn btn-primary" @click="$emit('goDetail', product)">Details</a>
        </div>
    </div> -->
  <div class="card">
    <img alt="Card Image" class="card-img" :src="product.images[0]" />
    <div class="card-body">
      <h3 class="card-title">{{ product.title }}</h3>
      <p class="card-text">Price: {{ product.price }}</p>
      <a class="card-link" @click="$emit('goDetail', product)">Details</a>
    </div>
  </div>
</template>
<script lang="ts">
import { Product } from "@/models/product";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>
<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 300px;
}
.card-img {
  height: auto;
  width: 100%;
  max-width: 100%;
}
.card-body {
  padding: 20px;
}
.card-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.card-text {
  margin-bottom: 20px;
}
.card-link {
  background-color: gray;
  color: thistle;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}
.card-link:hover {
  background-color: thistle;
  color: gray;
  border-color: gray;
}
</style>
