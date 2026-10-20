import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import MyInstallation from "../pages/MyInstallation/MyInstallation";
import Error404 from "../pages/Error404/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "apps",
        Component: Apps,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "myInstallation",
        Component: MyInstallation,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "appDetails/:id",
        Component: AppDetails,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);
