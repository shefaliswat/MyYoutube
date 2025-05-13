import React from "react";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";
import { SecondaryContainer } from "./SecondaryContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WatchPage } from "./WatchPage";

export const MainContainer = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <SecondaryContainer /> },
    { path: "/watch", element: <WatchPage /> },
  ]);

  return (
    <div id="main-container">
      <Header />
      <div className="flex">
        <SideMenu />
        <RouterProvider router={routes} />
      </div>
    </div>
  );
};
