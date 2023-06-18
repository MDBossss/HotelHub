import {create} from "zustand";
import { User } from "../types/model";

interface AuthState{
    user: User | null,
    login: (user: User) => void,
    logout: () => void
}


export const useAuthStore = create<AuthState>()((set) => ({
    user : JSON.parse(localStorage.getItem("user") || "null"),
    login: (user) => {
        localStorage.setItem("user",JSON.stringify(user))
        set({user: user})
    },
    logout: () => {
        localStorage.setItem("user","null");
        set({user: null})
    }
}))