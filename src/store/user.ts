import { create } from "zustand";
import type { UserLoginDataT } from "../types/User";

type UserStoreT = {
  user: UserLoginDataT;
  token: string;
  setUser: (user: UserLoginDataT) => void;
  setToken: (token: string) => void;
}

export const useUserStore = create<UserStoreT>((set) => ({
  user: {
    phone: "",
    email: "",
    password: ""
  },
  token: "",
  setUser: (user: UserLoginDataT) =>
    set({
      user,
    }),
  setToken: (token: string) => {
    set({
      token
    })
  }
}));
