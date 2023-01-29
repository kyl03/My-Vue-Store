<template>
  <div class="user-item">
    <img class="card-img-top" :src="product.images[0]" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">Price: {{ product.price }}</p>
      <a class="btn btn-primary" @click="$emit('goDetail', product)">Details</a>
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
.user-item {
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  display: flex;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid thistle;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.user-item:hover {
  border: 1px solid black;
}

.user-avatar {
  width: 50%;
}

.user-avatar > img {
  width: 100%;
  height: auto;
}
.btn {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  color: thistle;
  border-style: solid;
  border-color: thistle;
  border-radius: 5px;
  width: fit-content;
  background-color: gray;
  justify-content: flex-end;
}
.card-body {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
