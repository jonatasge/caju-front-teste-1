import { Navigate, RouteProps } from "react-router-dom";

import DashboardPage from "@/presentation/pages/Dashboard";
import NewAdmissionPage from "@/presentation/pages/NewAdmission";

type Route = Omit<RouteProps, "path"> & {
  path: string;
};

const routes: { [key: string]: Route } = {
  dashboard: { path: "/dashboard", element: <DashboardPage /> },
  newAdmission: { path: "/new-admission", element: <NewAdmissionPage /> },
  "*": { path: "*", element: <Navigate to="/dashboard" /> },
};

export default routes;
