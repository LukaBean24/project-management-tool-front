import { defineStore } from "pinia";

export const useUiStore = defineStore({
  id: "uiStore",
  state: () => ({
    sidebar: false,
  }),
  getters: {
    sidebarIsOpen: (state) => state.sidebar,
  },
  actions: {
    openSidebar() {
      this.sidebar = true;
    },
    closeSidebar() {
      this.sidebar = false;
    },
  },
});
