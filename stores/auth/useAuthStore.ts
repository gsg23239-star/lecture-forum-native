import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "@/types/user";

type AuthState = {
    isLoggedIn: boolean;
    token: string | null;
    user: User | null;

    login: (user: User, token: string) => void; // token과 user의 항목의 값을 저장하고, isLoggedIn을 true로 바꾸는 일
    logout: VoidFunction; // token과 user의 항목의 값을 비우고, isLoggedIn을 false로 바꾸는 일
};

export const useAuthStore = create<AuthState>()(
    persist(
        set => ({
            isLoggedIn: false,
            token: null,
            user: null,
            login: (user, token) => set({ isLoggedIn: true, token, user }),
            logout: () => set({ isLoggedIn: false, token: null, user: null }),
        }),
        { name: "auth-storage", storage: createJSONStorage(() => AsyncStorage) },
    ),
);
