<template>
    <div>
        <div class="card" id="myForm">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                placeholder="Password">
        </div>
        <button @click="onSubmit(email, password)" class="btn btn-primary">Submit</button>
    </div>

</template>

<script lang="ts">
import useUsers from '@/composables/useUsers';
import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
    setup() {
        let password = '';
        const { fetchUserToken } = useUsers();
        let email = '';
        return {
            email,
            password,
            onSubmit: (email: string, password: string) => {
                const data = {
                    email: email,
                    password: password
                }
                try {
                    fetchUserToken(data);
                    router.push({ name: "home" });
                } catch (error) {
                    alert(error)
                }
            }
        }
    }
});
</script>

<style scoped>
.card {
    width: 60%;
    padding: 25px;
    border-style: solid;
    display: block;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
}
</style>