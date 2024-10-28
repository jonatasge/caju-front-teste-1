import { Navigate, RouteProps } from "react-router-dom";

import DashboardPage from "@/pages/Dashboard";
import History from "@/pages/History";
import NewAdmissionPage from "@/pages/NewAdmission";

type Route = Omit<RouteProps, "path"> & {
  path: string;
};

const routes: { [key: string]: Route } = {
  dashboard: { path: "/dashboard", element: <DashboardPage /> },
  history: { path: "/history", element: <History /> },
  newAdmission: { path: "/new-admission", element: <NewAdmissionPage /> },
  "*": { path: "*", element: <Navigate to="/dashboard" /> },
};

export default routes;
