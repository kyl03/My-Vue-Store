<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">{{ title }}</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="btn-logout" v-if="userIsLoggedIn">
                <CustomButton @click="logOut">Log Out</CustomButton>
            </div>

        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from '@/components/CustomButton.vue';
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
        }
    },
    setup() {

        let { userIsLoggedIn, checkIfUserIsLoggedIn } = useUsers();
        console.log(userIsLoggedIn);
        return {
            userIsLoggedIn,
            logOut: () => {
                //TODO
                console.log('logout');
                localStorage.removeItem("token");
                checkIfUserIsLoggedIn();

            }
        }
    }
});
</script>
<style>
.btn-logout {
    margin: 5px;
}
</style>