import React from "react";

export const myRoutes = [
  {
    name: "EducativeReactList",
    path: "/educative-react-list",
    element: React.lazy(() => import("@/pages/Educative-React-List")),
  },
  {
    name: "TicTocToe",
    path: "/tictoctoe",
    element: React.lazy(() => import("@/pages/TicTocToe")),
  },
  {
    name: "RecoilPage",
    path: "/recoil",
    element: React.lazy(() => import("@/pages/RecoilExperimental")),
  },
  {
    name: "Todolist",
    path: "/todo",
    element: React.lazy(() => import("@/pages/TodoList")),
  },
  {
    name: "rxjs",
    path: "/rxjs",
    element: React.lazy(() => import("@/pages/RxJs")),
  },
];

export function registerRoute() {}
