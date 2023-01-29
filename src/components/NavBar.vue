<template>
  <nav class="navbar navbar-light bg-light">
    <p class="navbar-brand">{{ title }}</p>
    <div class="btn-logout" v-if="userIsLoggedIn">
      <CustomButton @click="logOut">Log Out</CustomButton>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import useUsers from "@/composables/useUsers";

export default defineComponent({
  name: "NavBar",
  components: {
    CustomButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    let { userIsLoggedIn, checkIfUserIsLoggedIn } = useUsers();
    console.log(userIsLoggedIn);
    return {
      userIsLoggedIn,
      logOut: () => {
        //TODO
        console.log("logout");
        localStorage.removeItem("token");
        checkIfUserIsLoggedIn();
      },
    };
  },
});
</script>
<style>
.btn-logout {
  margin: 5px;
  display: flex;
  color: thistle;
  border-style: solid;
  border-color: thistle;
  border-radius: 5px;
  width: fit-content;
  justify-content: flex-end;
}

.navbar {
  height: 100px;

  background-color: thistle;
  margin-bottom: 50px;
}
.navbar-brand {
  padding: auto;
  color: gray;
}
p {
  size: 20px;
}
</style>
