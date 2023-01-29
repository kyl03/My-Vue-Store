<template>
    <h1>Nombre: {{ product.id }}</h1>
    <h2>Email: {{ product.description }}</h2>
    <img :src="product.images[0]" alt="" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useProducts from "@/composables/useProducts";
import NavBar from "@/components/NavBar.vue";
export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String
        }
    },
    setup(props) {
        const { product, fetchProductById } = useProducts();
        fetchProductById(props.id);
        return {
            product,
        };
    },
    components: {
        NavBar
    }
});
</script>