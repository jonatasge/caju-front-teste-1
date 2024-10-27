import { RouteProps } from "react-router-dom";

import DashboardPage from "@/pages/Dashboard";
import History from "@/pages/History";
import NewUserPage from "@/pages/NewUser";

type Route = Omit<RouteProps, "path"> & {
  path: string;
  redirectTo?: string;
};

const routes: { [key: string]: Route } = {
  "*": { exact: true, path: "*", redirectTo: "/dashboard" },
  dashboard: { exact: true, path: "/dashboard", component: DashboardPage },
  history: { exact: true, path: "/history", component: History },
  newUser: { exact: true, path: "/new-user", component: NewUserPage },
};

export default routes;
