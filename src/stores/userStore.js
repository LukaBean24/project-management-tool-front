import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    user: null,
    role: null,
  }),
  getters: {
    userInfo: (state) => state.user,
  },
  actions: {
    updateUserInfo(payload) {
      this.user = payload;
    },
    updateUserRole(payload) {
      this.role = payload;
    },
  },
});
