<template>
  <div class="form-group">
    <div id="myForm">
      <label for="exampleInputEmail1">Email address</label>
      <input
        v-model="email"
        required
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div>
      <label for="exampleInputPassword1">Password</label>
      <input
        v-model="password"
        required
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
    <br />
    <button @click="onSubmit(email, password)" class="btn btn-primary">
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import useUsers from "@/composables/useUsers";
import router from "@/router";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "LoginView",
  setup() {
    let password = ref<string>("");
    let email = ref<string>("");
    const { fetchUserToken, userIsLoggedIn } = useUsers();
    if (userIsLoggedIn) {
      router.push("/");
    }
    return {
      email,
      password,
      onSubmit: (email: string, password: string) => {
        if (email != "" && password != "") {
          if (email.includes("@")) {
            const email_last = email.split("@");
            if (email_last[1].includes(".")) {
              const data = {
                email: email,
                password: password,
              };
              try {
                console.log("fetchingToken");
                fetchUserToken(data);
                router.push({ name: "home" });
              } catch (error) {
                alert(error);
              }
            }
          }
        }
      },
    };
  },
});
</script>

<style scoped>
.form-group {
  width: 60%;
  border-style: solid;
  border-color: thistle;
  border-radius: 15px;
  box-shadow: 3px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}

.btn-primary {
  background-color: gray;
  border-color: thistle;
  color: thistle;
}
</style>
