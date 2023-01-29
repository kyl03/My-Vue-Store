<template>
    <div class="user-item">
      <div class="user-avatar">
        <img :src="product.images[0]" :alt="product.title" />
      </div>
      <div class="user-info">
        <div class="user-name">{{ product.title }}</div>
        <div class="user-email">{{ product.description}}</div>
        <div class="buttons">
          <button class="btn btn-sm btn-primary" @click="$emit('addCart', product)">
            Al Carro
          </button>
          <button class="btn btn-sm btn-success" @click="$emit('goDetail', product)">
            Detalle
          </button>
        </div>
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
        required: true
      },
    },
  });
  </script>
  
  <style scoped>
  .user-item {
    width: 300px;
    display: flex;
    border: 1px solid black;
  }
  .user-avatar {
    width: 50%;
  }
  .user-avatar > img {
    width: 100%;
    height: auto;
  }
  </style>