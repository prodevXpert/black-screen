import { Navigate, useRoutes } from "react-router-dom";
import { Layout } from "./src/layout";
import { Page404 } from "./src/components";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <Navigate to="dashboard/home" />, index: true },
        { path: "home", element: <Layout /> },
      ],
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes
}
