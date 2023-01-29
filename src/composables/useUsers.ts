import { Login } from "@/models/login";
import { computed } from "vue";
import { useStore } from "vuex";

const useUsers = () => {
  const store = useStore();

  return {
    // GETTERS
    users: computed(() => store.getters["users/getUsers"]),
    isLoading: computed(() => store.getters["users/getIsLoading"]),
    user: computed(() => store.getters["users/getUser"]),
    token: computed(() => store.getters["users/getToken"]),
    userIsLoggedIn: computed(() => store.getters["users/getUserIsLoggedIn"]),
    userProfile: computed(() => store.getters["users/getUserProfile"]),

    // ACTIONS
    fetchUsers: () => store.dispatch("users/fetchUsers"),
    fetchUserById: (userId: number) =>
      store.dispatch("users/fetchUserById", userId),

    fetchUserToken: (input: Login) =>
      store.dispatch("users/fetchUserToken", input),
    fetchUserIsLoggedIn: (token: string) =>
      store.dispatch("users/fetchUserIsLoggedIn", token),
    checkIfUserIsLoggedIn: () => store.dispatch("users/checkIfUserIsLoggedIn"),

    fetchUserProfile: () => store.dispatch("users/fetchUserProfile"),
  };
};

export default useUsers;
