import { Navigate, RouteProps } from "react-router-dom";

import DashboardPage from "@/pages/Dashboard";
import History from "@/pages/History";
import NewUserPage from "@/pages/NewUser";

type Route = Omit<RouteProps, "path"> & {
  path: string;
};

const routes: { [key: string]: Route } = {
  dashboard: { path: "/dashboard", element: <DashboardPage /> },
  history: { path: "/history", element: <History /> },
  newUser: { path: "/new-user", element: <NewUserPage /> },
  "*": { path: "*", element: <Navigate to="/dashboard" /> },
};

export default routes;
