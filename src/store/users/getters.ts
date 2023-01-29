import { GetterTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const getters: GetterTree<IUsersState, IState> = {
  getUsers(state) {
    return state.users;
  },
  getIsLoading(state) {
    return state.isLoading;
  },
  getUser(state) {
    return state.selectedUser;
  },
  getToken(state) {
    return state.token;
  },
  getUserIsLoggedIn(state) {
    return state.userIsLoggedIn;
  },
  getUserProfile(state) {
    return state.userProfile;
  },
};
export default getters;
