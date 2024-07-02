import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./paths";
import { FC } from "react";
import { MainLayout } from "../../layouts";
import { AboutUsPage, CartPage, ErrorPage, HomePage, MenuPage } from "../../pages";

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
