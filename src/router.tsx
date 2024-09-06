import { createBrowserRouter, RouteObject } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import MenuList from "./pages/MenuList"

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    errorElement: (
      <>
        <h1>Something went wrong</h1>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },{
        path:"restaurant/:resId",
        element:<MenuList/>
      }
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
