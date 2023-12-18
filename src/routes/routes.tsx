import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export const AppRoutes = (): JSX.Element => {
  return <RouterProvider router={Routes} />;
};
