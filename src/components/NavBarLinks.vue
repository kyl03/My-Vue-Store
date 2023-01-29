<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home </router-link>
    <router-link :to="{ name: 'profile' }">Profile</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBarLinks",
});
</script>
<style scoped></style>
