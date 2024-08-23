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

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <UserContext.Provider value={{ LoggedInUser: "Prince Gupta" }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
