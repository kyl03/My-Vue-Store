<template>
   
    <button type="button" class="btn btn-outline-dark">
     <slot>
     </slot>
     </button>
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 export default defineComponent({
     name: "CustomButton",
 });
 </script>