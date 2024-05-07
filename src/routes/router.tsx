import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./paths";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { HomePage } from "../pages/HomePage/HomePage";
import { MenuPage } from "../pages/MenuPage/MenuPage";
import { AboutUsPage } from "../pages/AboutUsPage/AboutUsPage";
import { CartPage } from "../pages/CartPage/CartPage";
import { FC } from "react";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.main,
      Component: MainLayout,
      ErrorBoundary: ErrorPage,
      children: [
        {
          index: true,
          Component: HomePage,
        },
        {
          path: ROUTES.menu,
          Component: MenuPage,
        },
        {
          path: ROUTES.about_us,
          Component: AboutUsPage,
        },
        {
          path: ROUTES.cart,
          Component: CartPage,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
