import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/header";
import Body from "./Components/Body";
import About from "./Components/Aboutus";
import Cart from "./Components/Cart.js";
import ProductDetail from "./Components/ProductDetail.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contactus from "./Components/Contactus";
import Error from "./Components/Error.js";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:resId",
        element: <ProductDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<RouterProvider router={appRouter} />);
