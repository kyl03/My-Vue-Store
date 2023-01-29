<template>
  <div class="card">
    <img class="card-img-top" :src="userProfile.avatar" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Name: {{ userProfile.name }}</h5>
      <p class="card-text">Role: {{ userProfile.role }}</p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<script lang="ts">
import useUsers from "@/composables/useUsers";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const { fetchUserProfile, userProfile } = useUsers();
    fetchUserProfile();
    return {
      userProfile,
    };
  },
});
</script>
<style>
.card {
  border-style: solid;
  border-radius: 15px;
  padding: 20px;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

img {
  width: 40%;
  object-fit: scale-down;
}

@media only screen and (min-width: 600px) {
  .card {
    width: 50%;
  }

  img {
    width: 40%;
    object-fit: scale-down;
  }
}
</style>
