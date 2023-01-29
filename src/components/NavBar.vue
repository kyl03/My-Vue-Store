<template>
  <nav class="navbar navbar-light bg-light">
    <p class="navbar-brand">{{ title }}</p>
    <div class="btn-logout" v-if="userIsLoggedIn">
      <CustomButton @click="logOut">
        <span class="glyphicon glyphicon-log-out"></span> Log out
      </CustomButton>
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
    let { userIsLoggedIn, checkIfUserIsLoggedIn, deleteProfileState } =
      useUsers();
    console.log(userIsLoggedIn);
    return {
      userIsLoggedIn,
      logOut: () => {
        //TODO
        console.log("logout");
        localStorage.removeItem("token");
        checkIfUserIsLoggedIn();
        deleteProfileState();
      },
    };
  },
});
</script>
<style scoped>
.btn-logout {
  margin: 5px;
  color: thistle;
  border-style: solid;
  border-color: thistle;
  border-radius: 5px;
  width: fit-content;
  justify-content: end;
}

.navbar {
  height: 80px;
  background-color: thistle;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}

.navbar-brand {
  padding: auto;
  color: gray;
  display: flex;
  justify-content: flex-start;
}

p {
  font-size: 30px;
  font-weight: 300;
}

nav {
  display: flex;
  justify-content: space-between;
}
</style>
