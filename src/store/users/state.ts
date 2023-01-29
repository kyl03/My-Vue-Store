import { Profile } from "@/models/profile";
import { User } from "@/models/user";

export interface IUsersState {
  users: User[];
  isLoading: boolean;
  selectedUser: User | null;
  userIsLoggedIn: boolean;
  userProfile: Profile | null;
}

function state(): IUsersState {
  return {
    users: [],
    isLoading: false,
    selectedUser: null,
    userIsLoggedIn: false,
    userProfile: null,
  };
}
export default state;
