<template>
  <NavBar title="My Vue Store" />
  <div v-if="userIsLoggedIn">
    <NavBarLinks />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import NavBarLinks from "@/components/NavBarLinks.vue";
import useUsers from "./composables/useUsers";
export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    NavBarLinks,
    // DetailView
  },
  setup() {
    const { userIsLoggedIn, checkIfUserIsLoggedIn } = useUsers();
    checkIfUserIsLoggedIn();
    return {
      userIsLoggedIn,
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
