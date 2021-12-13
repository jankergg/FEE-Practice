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
];

export function registerRoute() {}
