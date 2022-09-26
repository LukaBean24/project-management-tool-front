import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import WorkspacesView from "../views/WorkspacesView.vue";
import TestView from "../views/TestView.vue";
import SingleWorkspaceView from "../views/SingleWorkspaceView.vue";
import SingleEventView from "../views/SingleEventView.vue";
import SingleTaskView from "../views/SingleTaskView.vue";
import SingleProjectView from "../views/SingleProjectView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import MessengerView from "../views/MessengerView.vue";
import ChatView from "../views/ChatView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/test",
      name: "test",
      component: TestView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/workspaces",
      name: "workspaces",
      component: WorkspacesView,
    },
    {
      path: "/workspaces/:id",
      name: "single-workspace",
      component: SingleWorkspaceView,
    },
    {
      path: "/events/:id",
      name: "single-event",
      component: SingleEventView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/projects/:id",
      name: "single-project",
      component: SingleProjectView,
    },
    {
      path: "/tasks/:id",
      name: "single-task",
      component: SingleTaskView,
    },
    {
      path: "/messenger",
      name: "messenger",
      component: MessengerView,
    },
    {
      path: "/messenger/:id",
      name: "chat",
      component: ChatView,
    },
  ],
});

export default router;
