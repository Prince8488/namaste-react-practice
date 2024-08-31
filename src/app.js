import React, { lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import PagenotFound from "./components/Pagenotfound";
import Restaurantdetail from "./components/Restaurantdetail";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ShimmerList } from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ LoggedInUser: "Prince Gupta" }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerList />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restraurants/:resId",
        element: <Restaurantdetail />,
      },
    ],
    errorElement: <PagenotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
