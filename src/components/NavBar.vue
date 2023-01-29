<template>
  <!-- <nav class="navbar navbar-light bg-light">
    <div class="title">
      <p class="navbar-brand">{{ title }}</p>
    </div>
    <div class="btn-logout" v-if="userIsLoggedIn">
      <CustomButton @click="logOut">
        <span class="glyphicon glyphicon-log-out"></span> Log out
      </CustomButton>
    </div>
  </nav> -->
  <nav class="navbar navbar-light bg-light">
    <div>
      <h2 href="/">{{ title }}</h2>
    </div>
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
        localStorage.removeItem("refresh_token");
        checkIfUserIsLoggedIn();
        deleteProfileState();
      },
    };
  },
});
</script>
<style scoped>
.navbar {
  height: 80px;
  background-color: thistle;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

div {
  width: 100%;
  justify-content: flex-end;
}

h2 {
  width: fit-content;
  color: white;
  margin-left: 10px;
  font-weight: 400;
}

.btn-logout {
  display: flex;
  width: fit-content;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
}
</style>
