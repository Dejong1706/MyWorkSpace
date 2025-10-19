import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login/index";
import Dashboard from "@/pages/main/dashboard/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
