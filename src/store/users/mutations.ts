import { Profile } from "@/models/profile";
import { Token } from "@/models/token";
import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { IUsersState } from "./state";

const mutations: MutationTree<IUsersState> = {
  setUsers(state: IUsersState, users: User[]) {
    state.users = users;
  },
  setIsLoading(state: IUsersState, value: boolean) {
    state.isLoading = value;
  },
  setSelectedUser(state, user: User) {
    state.selectedUser = user;
  },
  setToken(state, token: Token) {
    state.token = token;
  },
  setUserIsLoggedIn(state, userIsLoggedIn: boolean) {
    state.userIsLoggedIn = userIsLoggedIn;
  },
  setUserProfile(state, userProfile: Profile) {
    state.userProfile = userProfile;
  },
};

export default mutations;
