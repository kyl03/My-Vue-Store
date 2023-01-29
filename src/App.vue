<template>
  <NavBar
title="My Store"
/>
<div v-if="userIsLoggedIn">
<NavBarLinks/>
</div>
<router-view />
<CartList v-show="isCartOpen" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";
import NavBarLinks from "@/components/NavBarLinks.vue";
import CartList from "./components/CartList.vue";
import useUsers from "./composables/useUsers";
import { RouterView } from "vue-router";
// import DetailView from "./views/DetailView.vue"
export default defineComponent({
name: "AppComponent",
components: {
NavBar,
CartList,
NavBarLinks
// DetailView
},
setup() {

const{userIsLoggedIn, checkIfUserIsLoggedIn} = useUsers();
checkIfUserIsLoggedIn();
return {
  userIsLoggedIn
};
},
});
</script>


<style>
* {
padding: 0;
margin: 0;
}
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}
/* 
nav a.router-link-exact-active {
color: #42b983;
} */
</style>