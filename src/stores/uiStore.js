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
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    closeSidebar() {
      this.sidebar = false;
    },
  },
});
