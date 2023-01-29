import { Profile } from "@/models/profile";
import { Token } from "@/models/token";
import { User } from "@/models/user";

export interface IUsersState {
  users: User[];
  isLoading: boolean;
  selectedUser: User | null;
  token: Token;
  userIsLoggedIn: boolean;
  userProfile: Profile | null;
}

function state(): IUsersState {
  return {
    users: [],
    isLoading: false,
    selectedUser: null,
    token: { access_token: "", refresh_token: "" },
    userIsLoggedIn: false,
    userProfile: null,
  };
}
export default state;
