<template>
  <nav>
    <ul class="nav-links">
      <router-link :to="{ name: 'home' }">Home </router-link>
      <router-link :to="{ name: 'profile' }">Profile</router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBarLinks",
});
</script>
<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 0px;
}

.nav-links a {
  color: grey;
  text-decoration: none;
  font-size: medium;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
}

.nav-links a:hover {
  background-color: white;
  color: #333;
}
</style>
